<script>
import router from '../../router';

export default {
    data() {
        return {
            skillId: this.$route.params.skillId,
            // bind object
            question: {
                name: '',
                question: '',
                correctAnswer: '',
                incorrectAnswer1: '',
                incorrectAnswer2: '',
                incorrectAnswer3: '',
                incorrectAnswer4: '',
                incorrectAnswer5: '',
                question: '',
                explanation: '',
                isRandomOrder: true
            },
            // validate object
            validate: {
                validated: false,
                name: false,
                question: false,
                correctAnswer: false,
                incorrectAnswer1: false,
                incorrectAnswer2: false,
                incorrectAnswer3: false,
                incorrectAnswer4: false,
                incorrectAnswer5: false,
                explanation: false
            },
            isCorrect: 1
        };
    },
    methods: {
        Submit() {
            // Reset the validate flag before re-checking
            this.validate.validated = false;
            // Check data before fetching
            if (this.question.name === '' || this.question.name === null) {
                this.validate.name = true;
                this.validate.validated = true;
            }

            if (
                this.question.question === '' ||
                this.question.question === null
            ) {
                this.validate.question = true;
                this.validate.validated = true;
            }

            if (
                this.question.correctAnswer === '' ||
                this.question.correctAnswer === null
            ) {
                this.validate.correctAnswer = true;
                this.validate.validated = true;
            }

            if (
                this.question.incorrectAnswer1 === '' ||
                this.question.incorrectAnswer1 === null
            ) {
                this.validate.incorrectAnswer1 = true;
                this.validate.validated = true;
            }

            if (
                this.question.incorrectAnswer2 === '' ||
                this.question.incorrectAnswer2 === null
            ) {
                this.validate.incorrectAnswer2 = true;
                this.validate.validated = true;
            }

            // if (
            //     this.question.incorrectAnswer3 === '' ||
            //     this.question.incorrectAnswer3 === null
            // ) {
            //     this.validate.incorrectAnswer3 = true;
            //     this.validate.validated = true;
            // }

            // if (
            //     this.question.incorrectAnswer4 === '' ||
            //     this.question.incorrectAnswer4 === null
            // ) {
            //     this.validate.incorrectAnswer4 = true;
            //     this.validate.validated = true;
            // }

            // if (
            //     this.question.incorrectAnswer5 === '' ||
            //     this.question.incorrectAnswer5 === null
            // ) {
            //     this.validate.incorrectAnswer5 = true;
            //     this.validate.validated = true;
            // }

            if (
                this.question.explanation === '' ||
                this.question.explanation === null
            ) {
                this.validate.explanation = true;
                this.validate.validated = true;
            }

            if (this.validate.validated) {
                console.log('test');
                console.log(typeof this.question.incorrectAnswer1);
                return; // stop the submit operation if there something violated validate condition
            }

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: this.question.name,
                    question: this.question.question,
                    correct_answer: this.question.correctAnswer,
                    incorrect_answer_1: this.question.incorrectAnswer1,
                    incorrect_answer_2: this.question.incorrectAnswer2,
                    incorrect_answer_3: this.question.incorrectAnswer3,
                    incorrect_answer_4: this.question.incorrectAnswer4,
                    explanation: this.question.explanation,
                    skill_id: this.skillId
                })
            };
            var url = '/questions/mc-questions/add';
            // fetch(url, requestOptions)
            //     .then(() => {
            //         alert('Question added');
            //     })
            //     .then(() => {
            //         this.$router.go(-1);
            //     });
        }
    }
};
</script>

<template>
    <div id="banner">
        <img src="/images/banners/general-banner.png" class="image-fluid" />
    </div>
    <div class="container mt-3 pb-3">
        <div class="row">
            <div class="col-10 d-flex align-items-end">
                <h2 id="header-tile">Add Question</h2>
                <img src="/images/recurso-69.png" id="header-icon" />
            </div>
        </div>
        <div class="main-content-container container-fluid mt-4">
            <div class="row p-0">
                <div id="form-container" class="col-lg-6 p-4">
                    <div class="mb-3">
                        <label for="question_name" class="form-label"
                            >Question Name</label
                        >
                        <input
                            v-model="question.name"
                            type="text"
                            class="form-control"
                            id="question_name"
                        />
                        <div
                            v-if="
                                validate.name &&
                                (question.name === '' || question.name === null)
                            "
                            class="form-validate"
                        >
                            please enter a question name !
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="last_name" class="form-label"
                            >Question</label
                        >
                        <textarea
                            v-model="question.question"
                            rows="1"
                            class="form-control"
                        >
                        </textarea>
                        <div
                            v-if="
                                validate.question &&
                                (question.question === '' ||
                                    question.question === null)
                            "
                            class="form-validate"
                        >
                            please enter a question !
                        </div>
                    </div>

                    <!-- Answer Option 1 -->
                    <label class="form-label"
                        ><span v-if="isCorrect == 1">Correct answer</span>
                        <span v-else>Incorrect answer</span>
                    </label>
                    <!-- isCorrect? -->
                    <input
                        class="ms-2 float-right"
                        type="radio"
                        v-model="isCorrect"
                        value="1"
                    />
                    <div class="mb-3">
                        <!-- If correct -->
                        <div v-if="isCorrect == 1">
                            <input
                                v-model="question.correctAnswer"
                                type="text"
                                class="form-control"
                            />
                            <div
                                v-if="
                                    validate.correctAnswer &&
                                    (question.correctAnswer === '' ||
                                        question.correctAnswer === null)
                                "
                                class="form-validate"
                            >
                                please enter a correct answer !
                            </div>
                        </div>
                        <!-- If incorrect -->
                        <div v-else>
                            <input
                                v-model="question.incorrectAnswer1"
                                type="text"
                                class="form-control"
                            />
                            <div
                                v-if="
                                    validate.incorrectAnswer1 &&
                                    (question.incorrectAnswer1 === '' ||
                                        question.incorrectAnswer1 === null)
                                "
                                class="form-validate"
                            >
                                please enter an answer option !
                            </div>
                        </div>
                    </div>

                    <!-- Answer Option 2 -->
                    <label class="form-label"
                        ><span v-if="isCorrect == 2">Correct answer</span>
                        <span v-else>Incorrect answer</span>
                    </label>
                    <!-- isCorrect? -->
                    <input
                        class="ms-2 float-right"
                        type="radio"
                        v-model="isCorrect"
                        value="2"
                    />
                    <div class="mb-3">
                        <!-- If correct -->
                        <div v-if="isCorrect == 2">
                            <input
                                v-model="question.correctAnswer"
                                type="text"
                                class="form-control"
                            />
                            <div
                                v-if="
                                    validate.correctAnswer &&
                                    (question.correctAnswer === '' ||
                                        question.correctAnswer === null)
                                "
                                class="form-validate"
                            >
                                please enter a correct answer !
                            </div>
                        </div>
                        <!-- If incorrect -->
                        <div v-else>
                            <input
                                v-model="question.incorrectAnswer2"
                                type="text"
                                class="form-control"
                            />
                            <div
                                v-if="
                                    validate.incorrectAnswer2 &&
                                    (question.incorrectAnswer2 === '' ||
                                        question.incorrectAnswer2 === null)
                                "
                                class="form-validate"
                            >
                                please enter an answer option !
                            </div>
                        </div>
                    </div>

                    <!-- Answer Option 3 -->
                    <label class="form-label"
                        ><span v-if="isCorrect == 3">Correct answer</span>
                        <span v-else>Incorrect answer</span>
                    </label>
                    <!-- isCorrect? -->
                    <input
                        class="ms-2 float-right"
                        type="radio"
                        v-model="isCorrect"
                        value="3"
                    />
                    <div class="mb-3">
                        <!-- If correct -->
                        <div v-if="isCorrect == 3">
                            <input
                                v-model="question.correctAnswer"
                                type="text"
                                class="form-control"
                            />
                            <div
                                v-if="
                                    validate.correctAnswer &&
                                    (question.correctAnswer === '' ||
                                        question.correctAnswer === null)
                                "
                                class="form-validate"
                            >
                                please enter a correct answer !
                            </div>
                        </div>
                        <!-- If incorrect -->
                        <div v-else>
                            <input
                                v-model="question.incorrectAnswer3"
                                type="text"
                                class="form-control"
                            />
                            <div
                                v-if="
                                    validate.incorrectAnswer3 &&
                                    (question.incorrectAnswer3 === '' ||
                                        question.incorrectAnswer3 === null)
                                "
                                class="form-validate"
                            >
                                please enter an answer option !
                            </div>
                        </div>
                    </div>

                    <!-- Answer Option 4 -->
                    <label class="form-label"
                        ><span v-if="isCorrect == 4">Correct answer</span>
                        <span v-else>Incorrect answer</span>
                    </label>
                    <!-- isCorrect? -->
                    <input
                        class="ms-2 float-right"
                        type="radio"
                        v-model="isCorrect"
                        value="4"
                    />
                    <div class="mb-3">
                        <!-- If correct -->
                        <div v-if="isCorrect == 4">
                            <input
                                v-model="question.correctAnswer"
                                type="text"
                                class="form-control"
                            />
                            <div
                                v-if="
                                    validate.correctAnswer &&
                                    (question.correctAnswer === '' ||
                                        question.correctAnswer === null)
                                "
                                class="form-validate"
                            >
                                please enter a correct answer !
                            </div>
                        </div>
                        <!-- If incorrect -->
                        <div v-else>
                            <input
                                v-model="question.incorrectAnswer4"
                                type="text"
                                class="form-control"
                            />
                            <div
                                v-if="
                                    validate.incorrectAnswer4 &&
                                    (question.incorrectAnswer4 === '' ||
                                        question.incorrectAnswer4 === null)
                                "
                                class="form-validate"
                            >
                                please enter an answer option !
                            </div>
                        </div>
                    </div>

                    <!-- Answer Option 5 -->
                    <label class="form-label"
                        ><span v-if="isCorrect == 5">Correct answer</span>
                        <span v-else>Incorrect answer</span>
                    </label>
                    <!-- isCorrect? -->
                    <input
                        class="ms-2 float-right"
                        type="radio"
                        v-model="isCorrect"
                        value="5"
                    />
                    <div class="mb-3">
                        <!-- If correct -->
                        <div v-if="isCorrect == 5">
                            <input
                                v-model="question.correctAnswer"
                                type="text"
                                class="form-control"
                            />
                            <div
                                v-if="
                                    validate.correctAnswer &&
                                    (question.correctAnswer === '' ||
                                        question.correctAnswer === null)
                                "
                                class="form-validate"
                            >
                                please enter a correct answer !
                            </div>
                        </div>
                        <!-- If incorrect -->
                        <div v-else>
                            <input
                                v-model="question.incorrectAnswer5"
                                type="text"
                                class="form-control"
                            />
                            <div
                                v-if="
                                    validate.incorrectAnswer5 &&
                                    (question.incorrectAnswer5 === '' ||
                                        question.incorrectAnswer5 === null)
                                "
                                class="form-validate"
                            >
                                please enter an answer option !
                            </div>
                        </div>
                    </div>

                    <div class="mb-3">
                        <div class="form-check">
                            <label class="control control-checkbox">
                                <span class="ms-2">Randomize the order?</span>
                                <input
                                    type="checkbox"
                                    value="true"
                                    v-model="question.isRandomOrder"
                                />
                                <div class="control_indicator"></div>
                            </label>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Explanation</label>
                        <textarea
                            v-model="question.explanation"
                            class="form-control"
                            rows="3"
                        ></textarea>
                        <div
                            v-if="
                                validate.explanation &&
                                (question.explanation === '' ||
                                    question.explanation === null)
                            "
                            class="form-validate"
                        >
                            please enter a explanation !
                        </div>
                    </div>

                    <div class="d-flex justify-content-end gap-4">
                        <a class="btn red-btn" @click="$router.go(-1)"
                            >Cancel</a
                        >
                        <button class="btn purple-btn" @click="Submit()">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.red-btn {
    background-color: #e24d4d;
    color: white;
    border: 1px solid #d33622;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
}

.red-btn:hover {
    background-color: #cc3535;
}

.purple-btn {
    background-color: #a48be6;
    color: white;
    border: 1px solid #7f56d9;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
}

.purple-btn:hover {
    background-color: #a48be6;
    color: white;
}

.purple-btn:focus {
    background-color: #a48be6;
    color: white;
}

#header-tile {
    color: #667085;
    font-family: 'Poppins' sans-serif;
    font-size: 2.375rem;
    font-weight: 900;
    line-height: 41px;
    letter-spacing: 0em;
    text-align: left;
    margin-top: auto;
    margin-bottom: 0px;
}

#header-icon {
    margin-left: 10px;
    width: 108px;
    height: 61px;
}

#form-container {
    background-color: #e4ecf4;
    border-radius: 12px;
}

.form-label {
    color: #344054;
    font-family: 'Poppins' sans-serif;
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
}

.form-validate {
    font-size: 0.75rem;
    color: red;
    font-weight: 300;
}

.form-control:focus {
    border-color: white;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 12px #a48be6;
}

/**-------------------------------------  */
/* A lot of CSS styling for on check box */
.control {
    font-family: 'Poppins' sans-serif;
    display: block;
    position: relative;
    padding-left: 30px;
    margin-bottom: 5px;
    padding-top: 3px;
    cursor: pointer;
}

.control > span {
    font-weight: 500;
    font-size: 0.938rem;
    color: #667085;
    text-align: center;
}
.control input {
    position: absolute;
    z-index: -1;
    opacity: 0;
}
.control_indicator {
    position: absolute;
    top: 2px;
    left: 0;
    height: 29.09px;
    width: 29.09px;
    background: #f9f5ff;
    border: 1.45px solid #9c7eec;
    border-radius: 8.73px;
}
.control:hover input ~ .control_indicator,
.control input:focus ~ .control_indicator {
    background: #e7ddf6;
}

.plus-svg:hover {
    cursor: pointer;
}
.control input:checked ~ .control_indicator {
    background: #f9f5ff;
}
.control:hover input:not([disabled]):checked ~ .control_indicator,
.control input:checked:focus ~ .control_indicator {
    background: #f9f5ff;
}
.control input:disabled ~ .control_indicator {
    background: #e6e6e6;
    opacity: 0.6;
    pointer-events: none;
}
.control_indicator:after {
    box-sizing: unset;
    content: '';
    position: absolute;
    display: none;
}
.control input:checked ~ .control_indicator:after {
    display: block;
}
.control-checkbox .control_indicator:after {
    left: 4px;
    top: 5px;
    width: 13.58px;
    height: 9.33px;
    border: solid #9c7eec;
    border-width: 0px 0px 2.9px 2.9px;
    transform: rotate(-45deg);
}
.control-checkbox input:disabled ~ .control_indicator:after {
    border-color: #7b7b7b;
}
.control-checkbox .control_indicator::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 4.5rem;
    height: 4.5rem;
    margin-left: -1.3rem;
    margin-top: -1.3rem;
    background: #9c7eec;
    border-radius: 3rem;
    opacity: 0.6;
    z-index: 99999;
    transform: scale(0);
}

.control-checkbox input + .control_indicator::before {
    animation: s-ripple 250ms ease-out;
}
.control-checkbox input:checked + .control_indicator::before {
    animation-name: s-ripple-dup;
}
/* End of check box styling */

.form-check {
    margin: 0px;
    padding: 0px;
}
</style>
