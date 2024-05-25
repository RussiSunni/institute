<script>
export default {
    data() {
        return {
            questionCSVFile: '',
            filesArray: [],
            questionsArray: [],
            counter1: 0,
            counter2: 0,
            incorrectlyFormattedQuestions: false,
            isDragging: false,
            files: []
        };
    },
    methods: {
        OnFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length) return;

            for (let i = 0; i < files.length; i++) {
                // push files into the files array
                this.files.push(files[i]);
                this.ReadFile(files[i]);
            }
        },
        // Convert file to string, and then to array.
        ReadFile(file) {
            var reader = new FileReader();

            reader.onload = (e) => {
                var CSVString = e.target.result;

                // Break CSV into individual questions.
                var CSVArray = CSVString.split(/\r?\n|\r|\n/g);

                // Break individual questions into arrays.
                // Validation.
                //reverse loops to not mess with splicing.
                for (let i = CSVArray.length - 1; i >= 0; i--) {
                    // Remove any empty lines.
                    if (CSVArray[i] == '' || CSVArray[i] == ' ') {
                        CSVArray.splice(i, 1);
                    }
                }
                // Check for wrong number of fields.
                // If found, omit this question.
                for (let i = CSVArray.length - 1; i >= 0; i--) {
                    if (CSVArray[i].split('|').length != 9) {
                        this.incorrectlyFormattedQuestions = true;
                        CSVArray.splice(i, 1);
                    }
                }
                // Check for error where the skill ID is not an integer.
                // If found, omit this question.
                for (let i = CSVArray.length - 1; i >= 0; i--) {
                    if (
                        isNaN(CSVArray[i].split('|')[0]) ||
                        isNaN(parseFloat(CSVArray[i].split('|')[0]))
                    ) {
                        this.incorrectlyFormattedQuestions = true;
                        CSVArray.splice(i, 1);
                    }
                }

                // Add the correctly formatted questions to the array.
                for (let i = 0; i < CSVArray.length; i++) {
                    this.questionsArray.push(CSVArray[i].split('|'));
                }
            };

            reader.readAsText(file);
        },
        Submit() {
            if (this.incorrectlyFormattedQuestions) {
                // Let the user know they had some incorrectly formatted questions.
                // Check if they want to continue.
                if (
                    !confirm(
                        'Incorrectly formatted question were found. Only ' +
                            this.questionsArray.length +
                            ' questions will be uploaded. Continue?'
                    )
                ) {
                    return;
                }
            }

            const questionArray = [];
            // For each question.
            for (let i = 0; i < this.questionsArray.length; i++) {
                const questionObject = {};
                questionObject.skillId = this.questionsArray[i][0];
                questionObject.name = this.questionsArray[i][1];
                questionObject.question = this.questionsArray[i][2];
                questionObject.correct_answer = this.questionsArray[i][3];
                questionObject.incorrect_answer_1 = this.questionsArray[i][4];
                questionObject.incorrect_answer_2 = this.questionsArray[i][5];
                questionObject.incorrect_answer_3 = this.questionsArray[i][6];
                questionObject.incorrect_answer_4 = this.questionsArray[i][7];
                questionObject.explanation = this.questionsArray[i][8];

                questionArray.push(questionObject);
            }

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    questionArray
                })
            };
            var url = '/questions/mc-questions/bulk-add';

            fetch(url, requestOptions).then(() => {
                alert('Questions uploaded.');
                // Reset.
                this.questionCSVFile = '';
                this.filesArray = [];
                this.questionsArray = [];
            });
        },
        // ----- Method relate to drag and drop files -----
        dragover(e) {
            // have to prevent default in other for this event to work
            e.preventDefault();
            this.isDragging = true;
        },
        dragleave() {
            this.isDragging = false;
        },
        drop(e) {
            e.preventDefault();
            // Manual toggle the file input when file is drop

            this.OnFileChange(e);

            this.isDragging = false;
        }
        // ----- ** ------
    }
};
</script>

<template>
    <div class="container mt-3 pb-5 px-3 px-lg-0">
        <div class="d-flex flex-column">
            <!-- Upload with input button -->
            <div class="d-flex flex-column">
                <div v-if="!questionCSVFile">
                    <input
                        class="form-control"
                        type="file"
                        accept=".csv,.txt"
                        @change="OnFileChange"
                        multiple
                    />
                    <p style="font-size: 14px">
                        <em>Maximum file size 15mb</em>
                    </p>
                </div>
                <div v-else>
                    <p>
                        <button class="btn btn-warning" @click="removeImage">
                            Remove file
                        </button>
                    </p>
                </div>
            </div>
            <div id="or-word">OR</div>
            <div
                class="dropzone-container mx-lg-1 my-2"
                @dragover="dragover"
                @dragleave="dragleave"
                @drop="drop"
                :style="isDragging && 'border-color: #8f7bd6;'"
            >
                <input
                    type="file"
                    multiple
                    name="file"
                    id="fileInput"
                    class="hidden-input"
                    @change="OnFileChange"
                    ref="file"
                    accept=".csv, .txt"
                />
                <label for="fileInput" class="file-label">
                    <div v-if="isDragging">Release to drop files here.</div>
                    <div v-else>
                        Drop files here or
                        <span id="click-here-label">click here</span> to upload
                        CSV and TXT file.
                    </div>
                </label>
                <!-- List of files that uploaded and show their size -->
                <!-- PC styling -->
                <div
                    class="preview-container mt-4 row gap-2 d-none d-lg-flex"
                    v-if="files.length"
                >
                    <div
                        v-for="file in files"
                        :key="file.name"
                        class="preview-card col-3 d-flex justify-content-between"
                    >
                        <div>
                            <!-- For each type of file we will display difference icon -->
                            <!-- CSV ICON -->
                            <svg
                                v-if="file.type == 'text/csv'"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                fill="green"
                                width="60"
                                height="60"
                            >
                                <path
                                    d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V304H176c-35.3 0-64 28.7-64 64V512H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128zM200 352h16c22.1 0 40 17.9 40 40v8c0 8.8-7.2 16-16 16s-16-7.2-16-16v-8c0-4.4-3.6-8-8-8H200c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-8c0-8.8 7.2-16 16-16s16 7.2 16 16v8c0 22.1-17.9 40-40 40H200c-22.1 0-40-17.9-40-40V392c0-22.1 17.9-40 40-40zm133.1 0H368c8.8 0 16 7.2 16 16s-7.2 16-16 16H333.1c-7.2 0-13.1 5.9-13.1 13.1c0 5.2 3 9.9 7.8 12l37.4 16.6c16.3 7.2 26.8 23.4 26.8 41.2c0 24.9-20.2 45.1-45.1 45.1H304c-8.8 0-16-7.2-16-16s7.2-16 16-16h42.9c7.2 0 13.1-5.9 13.1-13.1c0-5.2-3-9.9-7.8-12l-37.4-16.6c-16.3-7.2-26.8-23.4-26.8-41.2c0-24.9 20.2-45.1 45.1-45.1zm98.9 0c8.8 0 16 7.2 16 16v31.6c0 23 5.5 45.6 16 66c10.5-20.3 16-42.9 16-66V368c0-8.8 7.2-16 16-16s16 7.2 16 16v31.6c0 34.7-10.3 68.7-29.6 97.6l-5.1 7.7c-3 4.5-8 7.1-13.3 7.1s-10.3-2.7-13.3-7.1l-5.1-7.7c-19.3-28.9-29.6-62.9-29.6-97.6V368c0-8.8 7.2-16 16-16z"
                                />
                            </svg>
                            <!-- PLAIN TEXT ICON -->
                            <svg
                                v-if="file.type == 'text/plain'"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                width="60"
                                height="60"
                                fill="grey"
                            >
                                <path
                                    d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120z"
                                />
                            </svg>
                            <p class="">
                                {{ file.name }}
                                ({{ Math.round(file.size / 1000) + 'kb' }})
                            </p>
                        </div>
                    </div>
                </div>
                <!-- Phone Styling -->
                <div
                    class="preview-container mt-4 row gap-2 d-lg-none"
                    v-if="files.length"
                >
                    <div
                        v-for="file in files"
                        :key="file.name"
                        class="preview-card col-10 d-flex justify-content-between"
                    >
                        <div>
                            <!-- For each type of file we will display difference icon -->
                            <!-- CSV ICON -->
                            <svg
                                v-if="file.type == 'text/csv'"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                fill="green"
                                width="60"
                                height="60"
                            >
                                <path
                                    d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V304H176c-35.3 0-64 28.7-64 64V512H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128zM200 352h16c22.1 0 40 17.9 40 40v8c0 8.8-7.2 16-16 16s-16-7.2-16-16v-8c0-4.4-3.6-8-8-8H200c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-8c0-8.8 7.2-16 16-16s16 7.2 16 16v8c0 22.1-17.9 40-40 40H200c-22.1 0-40-17.9-40-40V392c0-22.1 17.9-40 40-40zm133.1 0H368c8.8 0 16 7.2 16 16s-7.2 16-16 16H333.1c-7.2 0-13.1 5.9-13.1 13.1c0 5.2 3 9.9 7.8 12l37.4 16.6c16.3 7.2 26.8 23.4 26.8 41.2c0 24.9-20.2 45.1-45.1 45.1H304c-8.8 0-16-7.2-16-16s7.2-16 16-16h42.9c7.2 0 13.1-5.9 13.1-13.1c0-5.2-3-9.9-7.8-12l-37.4-16.6c-16.3-7.2-26.8-23.4-26.8-41.2c0-24.9 20.2-45.1 45.1-45.1zm98.9 0c8.8 0 16 7.2 16 16v31.6c0 23 5.5 45.6 16 66c10.5-20.3 16-42.9 16-66V368c0-8.8 7.2-16 16-16s16 7.2 16 16v31.6c0 34.7-10.3 68.7-29.6 97.6l-5.1 7.7c-3 4.5-8 7.1-13.3 7.1s-10.3-2.7-13.3-7.1l-5.1-7.7c-19.3-28.9-29.6-62.9-29.6-97.6V368c0-8.8 7.2-16 16-16z"
                                />
                            </svg>
                            <!-- PLAIN TEXT ICON -->
                            <svg
                                v-if="file.type == 'text/plain'"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                width="60"
                                height="60"
                                fill="grey"
                            >
                                <path
                                    d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120z"
                                />
                            </svg>
                            <p class="">
                                {{ file.name }}
                                ({{ Math.round(file.size / 1000) + 'kb' }})
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex flex-row-reverse">
                <button
                    b-on
                    title="Upload Questions To Server"
                    class="btn green-btn"
                    @click="Submit()"
                >
                    Submit
                </button>
            </div>
        </div>
    </div>
    <!-- The Modal To Tell user How many question will get upload -->
    <div v-if="showModal">
        <div id="myModal" class="modal">
            <!-- Modal content -->
            <div class="modal-content">
                <p>
                    Incorrectly formatted question were found. Only
                    {{ this.questionsArray.length }} questions will be uploaded.
                    Continue?
                </p>
                <div style="display: flex; gap: 10px">
                    <button
                        type="button"
                        class="btn btn-danger"
                        @click="deletePost(this.resourceId)"
                    >
                        Ok
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.green-btn {
    background-color: #36c1af;
    color: white;
    border: 1px solid #2ca695;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 1rem;
    line-height: 24px;
    display: flex;
    align-items: center;
    height: auto;
    width: fit-content;
    margin-right: 5px;
}

.green-btn:hover {
    background-color: #3eb3a3;
}

/** Drop Zone Styling */
.dropzone-container {
    padding: 4rem;
    background: #f7fafc;
    border: 1px solid #e2e8f0;
    border: 2px dashed;
    border-color: #9e9e9e;
}

.hidden-input {
    opacity: 0;
    overflow: hidden;
    position: absolute;
    width: 1px;
    height: 1px;
}

.file-label {
    font-size: 20px;
    display: block;
    cursor: pointer;
}

#click-here-label {
    text-decoration: underline;
    font-weight: 500;
}

.preview-card {
    padding-top: 10px;
    display: flex;
    border: 1px solid #a2a2a2;
}

#or-word {
    color: #9e9e9e;
    font-size: 16px;
    font-weight: 600;
}

/* Mobile */
@media (max-width: 480px) {
    .preview-card {
        flex-direction: row;
        justify-content: space-between;
        margin-left: 10px;
    }

    .green-btn {
        margin-right: 0px;
    }
}
</style>
