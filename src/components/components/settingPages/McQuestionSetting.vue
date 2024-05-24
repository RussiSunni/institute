<script>
import NewBulkQuestionsUpload from './components/NewBulkQuestionsUpload.vue';
import NewCheckMcQuestion from './components/NewCheckMcQuestion.vue';

export default {
    setup() {},
    data() {
        return {};
    },
    components: {
        NewBulkQuestionsUpload,
        NewCheckMcQuestion
    },
    async created() {},
    methods: {}
};
</script>

<template>
    <div class="container">
        <div class="setting-tile">Bulks Add MC Questions</div>
        <div class="explain-text">
            Add multiple choice questions via csv or text file
        </div>
        <hr />
        <NewBulkQuestionsUpload />
        <div class="setting-tile mt-4">Check MC Questions</div>
        <div class="explain-text">Check the mc question using chat-gpt</div>
        <hr />
        <NewCheckMcQuestion />
    </div>
</template>

<style scoped>
.page-tile {
    font-size: 22px;
    color: #c1b3eb;
    font-weight: 700;
    font-family: 'Poppins', sans-serif;
    margin-top: 5px;
}

/* Mobile Styling */
@media (max-width: 480px) {
}
</style>
