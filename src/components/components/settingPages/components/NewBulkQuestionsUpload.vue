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
            isDragging: false
        };
    },
    methods: {
        OnFileChange(e) {
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length) return;

            for (let i = 0; i < files.length; i++) {
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
            console.log('drag over');
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
            <div>OR</div>
            <div
                class="dropzone-container mx-lg-3 my-2"
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
            </div>
            <button class="btn green-btn" @click="Submit()">Submit</button>
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
</style>
