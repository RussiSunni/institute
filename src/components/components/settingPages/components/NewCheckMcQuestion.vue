<script>
export default {
    data() {
        return {};
    },
    methods: {
        CheckMCQuestions(){
            console.log('test');
            fetch('/questions/check-questions');
        }
    }
};
</script>

<template>
    <button class="btn green-btn mt-3" @click="CheckMCQuestions()" disabled>
            Check now
        </button>
        <p style="font-size: 14px" class="mt-2">
            <ul>
            <li><em>To be done by devs and not admins.</em></li>
            <li><em>
                Note that this will check ALL unchecked multiple-choice
                questions, and can be expensive.</em
            ></li>
            </ul>
        </p>
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
</style>
