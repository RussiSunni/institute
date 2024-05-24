<script>
import NewBulkQuestionsUpload from './components/NewBulkQuestionsUpload.vue';

export default {
    setup() {},
    data() {
        return {};
    },
    components: {
        NewBulkQuestionsUpload
    },
    async created() {},
    methods: {}
};
</script>

<template>
    <div class="container">
        <div class="page-tile d-md-flex d-none">Multiple Choice Questions</div>
        <div class="d-md-none page-tile">MC Questions</div>
        <div class="explain-text">
            Setting that relate to multiple choice question for skill
        </div>
        <hr />
        <NewBulkQuestionsUpload />
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
