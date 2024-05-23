<script>
// Import the stores.
import { useSettingsStore } from '../../../stores/SettingsStore.js';
import { useTagsStore } from '../../../stores/TagsStore';

export default {
    setup() {
        const settingsStore = useSettingsStore();
        settingsStore.getSettings();
        const tagsStore = useTagsStore();
        if (tagsStore.tagsList.length == 0) tagsStore.getTagsList();
        return {
            settingsStore,
            tagsStore
        };
    },
    data() {
        return {
            filters: [],
            degradeDay: 0,
            questionPerQuiz: 0,
            initialFilterArray: [],
            showModal: false
        };
    },
    async created() {
        // Load the filters
        if (this.tagsStore.tagsList.length == 0)
            await this.tagsStore.getTagsList();
        for (let i = 0; i < this.tagsStore.tagsList.length; i++) {
            if (this.tagsStore.tagsList[i].is_active == 'active')
                this.filters.push(this.tagsStore.tagsList[i].id);
        }
        /**
         * I think we should not binding the input directly with store data
         * Instead using component data to store input state
         */
        // get skill setting value
        this.degradeDay = this.settingsStore.skillDegradationDays;
        this.questionPerQuiz = this.settingsStore.quizMaxQuestions;
        this.initialFilterArray = this.filters;
    },
    methods: {
        cancelSetting() {
            this.degradeDay = this.settingsStore.skillDegradationDays;
            this.questionPerQuiz = this.settingsStore.quizMaxQuestions;
            this.filters = this.initialFilterArray;
        },

        async saveSetting() {
            // ======== Update Skill Setting ========
            const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    skill_degradation_days: this.degradeDay,
                    quiz_max_questions: this.questionPerQuiz
                })
            };
            var url = '/settings/edit';
            await fetch(url, requestOptions);

            // ======== Update Skill Filter Setting ========
            for (let i = 0; i < this.tagsStore.tagsList.length; i++) {
                if (this.filters.includes(this.tagsStore.tagsList[i].id)) {
                    this.tagsStore.tagsList[i].is_active = 'active';
                } else {
                    this.tagsStore.tagsList[i].is_active = 'inactive';
                }
            }

            const requestOptionsFilter = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    tags: this.tagsStore.tagsList
                })
            };
            var url = '/tags/select';
            await fetch(url, requestOptionsFilter);

            // ======= Re-update initial value =========
            await this.settingsStore.getSettings();
            for (let i = 0; i < this.tagsStore.tagsList.length; i++) {
                if (this.tagsStore.tagsList[i].is_active == 'active')
                    this.filters.push(this.tagsStore.tagsList[i].id);
            }
            this.degradeDay = this.settingsStore.skillDegradationDays;
            this.questionPerQuiz = this.settingsStore.quizMaxQuestions;
            this.initialFilterArray = this.filters;

            // turn off modal
            this.showModal = false;
        }
    }
};
</script>

<template>
    <div class="m-2 d-flex flex-column">
        <!-- ----- Skill relate to student settings ----- -->
        <div class="setting-tile">Skill</div>
        <hr />
        <div class="d-flex flex-row mt-3align-items-center">
            <div class="skill-label">
                Time for student skills to degrade (in days):
            </div>
            <div class="input-text">
                <input type="number" v-model="degradeDay" />
            </div>
        </div>
        <div class="d-flex flex-row mb-3 align-items-center mt-3">
            <div class="skill-label">Max number of questions per quiz:</div>
            <div class="input-text">
                <input type="number" v-model="questionPerQuiz" />
            </div>
        </div>
        <!-- ----- Skill filter relate setting ----- -->
        <div class="mt-5 setting-tile">Filter skill</div>
        <hr />
        <div class="d-flex flex-column mt-2 mb-2">
            <label
                v-for="tag in tagsStore.tagsList"
                class="control control-checkbox"
            >
                <span class="my-auto mx-2 me-4"> {{ tag.name }}</span>
                <!-- Check box in vue working by combine v-model with value (if v-model contain value then it will be check)  -->
                <input type="checkbox" :value="tag.id" v-model="filters" />
                <div class="control_indicator"></div>
            </label>
        </div>

        <!-- ----- Action Button Rows ----- -->
        <div class="d-flex flex-row-reverse mt-5 gap-2">
            <div
                b-on-hover
                title="apply changes "
                class="btn green-btn"
                @click="showModal = true"
            >
                Save
            </div>
            <div
                b-on-hover
                title="return to initial setting"
                class="btn red-btn"
                @click="cancelSetting()"
            >
                Cancel
            </div>
        </div>
    </div>
    <!-- The Modal -->
    <div v-if="showModal">
        <div id="myModal" class="modal">
            <!-- Modal content -->
            <div class="modal-content">
                <p>Are you sure you want to apply these settings ?</p>
                <div class="d-flex flex-row-reverse gap-2">
                    <button
                        type="button"
                        class="btn green-btn"
                        @click="saveSetting()"
                    >
                        Yes
                    </button>
                    <button
                        type="button"
                        class="btn btn-dark red-btn"
                        @click="showModal = false"
                    >
                        No
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.form-label {
    font-family: 'Poppins' sans-serif;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
}

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

.setting-tile {
    font-size: 20px;
    font-family: 'Poppins', sans-serif;
    font-weight: 550;
    color: #c1b3eb;
}

.skill-label {
    font-weight: 500;
    font-size: 0.938rem;
    color: #667085;
    text-align: center;
}

/**-------------------------------------  */
/* A lot of CSS to styling checkbox*/
.control {
    font-family: 'Poppins', sans-serif;
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

#add-resource-column {
    padding-right: 0px !important;
    margin-right: 0px !important;
}

/* Modal Styling */
.modal {
    display: block;
    /* Hidden by default */
    position: fixed;
    /* Stay in place */
    z-index: 1;
    /* Sit on top */
    left: 0;
    top: 0;
    width: 100%;
    /* Full width */
    height: 100%;
    /* Full height */
    overflow: auto;
    /* Enable scroll if needed */
    background-color: rgb(0, 0, 0);
    /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4);
    /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid #888;
    width: 300px;
    /* Could be more or less, depending on screen size */
}
/* End of modal styling */

/* Text Input Styling */
.input-text input {
    border: #c1b3eb 1px solid;
    border-radius: 5px;
    width: 100%;
    outline: none;
}

.input-text {
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: auto;
    margin-right: 10px;
}

/* Mobile Styling */
@media (max-width: 480px) {
    .skill-label {
        text-align: left;
    }

    .input-text {
        width: 20%;
    }
}
</style>
