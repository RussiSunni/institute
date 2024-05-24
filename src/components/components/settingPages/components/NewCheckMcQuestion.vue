<script>
export default {
    data() {
        return {
            checkBtnHover: false
        };
    },
    methods: {
        CheckMCQuestions() {
            console.log('test');
            fetch('/questions/check-questions');
        }
    }
};
</script>

<template>
    <div class="d-flex flex-column">
        <div class="hover-warn-div">
            <div
                v-if="checkBtnHover"
                id="warn-text"
                :class="{ shake: checkBtnHover }"
            >
                The button IS DISABLE by code and only use by DEV
            </div>
        </div>
        <!-- ********** IMPORTANT NOTE ********** -->
        <!-- I remove disable property because it prevent hover event -->
        <!-- To make make the button work just remove the D in the @click method and vice versa to make the button not working -->
        <!-- ------------------------------------ -->
        <button
            class="btn green-btn mt-3 disable-btn"
            @click="CheckMCQuestionsD()"
            @mouseenter="checkBtnHover = true"
            @mouseleave="checkBtnHover = false"
        >
            Check now
        </button>
        <div style="font-size: 14px" class="mt-2">
            <ul>
                <li><em>To be done by devs and not admins.</em></li>
                <li>
                    <em>
                        Note that this will check ALL unchecked multiple-choice
                        questions, and can be expensive.</em
                    >
                </li>
            </ul>
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

.disable-btn {
    cursor: not-allowed;
}

.hover-warn-div {
    height: 30px;
}

.green-btn:hover {
    background-color: #3eb3a3;
}

#warn-text {
    color: rgb(211, 211, 96);
}

/* Shake animation for waring line */
.shake {
    animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translate3d(0, 0, 0);
}

@keyframes shake {
    10%,
    90% {
        transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
        transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
        transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
        transform: translate3d(4px, 0, 0);
    }
}
</style>
