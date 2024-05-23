<script>
import ProfileDetails from '../components/ProfileDetails.vue';
import SkillSetting from '../components/settingPages/SkillSetting.vue';
import BulkQuestionsUpload from '../components/BulkQuestionsUpload.vue';
import AutoGenerateSources from '../components/AutoGenerateSources.vue';
import SettingNavColumn from '../components/SettingNavColumn.vue';
// Import the store.
import { useUserDetailsStore } from '../../stores/UserDetailsStore';
import { RouterLink } from 'vue-router';

export default {
    setup() {
        const userDetailsStore = useUserDetailsStore();
        return {
            userDetailsStore
        };
    },
    data() {
        return {
            activeSetting: 'skill'
        };
    },
    components: {
        ProfileDetails,
        SkillSetting,
        BulkQuestionsUpload,
        AutoGenerateSources,
        SettingNavColumn
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
    <div id="banner">
        <img src="/images/banners/general-banner.png" class="w-100 h-auto" />
    </div>

    <ProfileDetails />
    <!--Only show if admin ----------------->

    <!-------------------------------------->
    <!-------- App Settings Section -------->
    <!-------------------------------------->
    <div
        v-if="userDetailsStore.role == 'admin'"
        class="d-flex flex-md-row flex-column justify-content-between md-container mt-3 pb-3"
    >
        <!--- === Setting Navigate Column === -->
        <SettingNavColumn
            :activeSetting="activeSetting"
            @changeActiveNavItem="(value) => (activeSetting = value)"
        />

        <!--- === Setting Content Will Change Dynamically Base On Setting Nav === --->
        <div class="setting-content">
            <!-- Settings Relate To Skill -->
            <SkillSetting v-if="activeSetting == 'skill'" />
            <!-- Link to Content Flags page --->
            <section
                class="container mt-1 px-3 px-lg-0 mb-5"
                v-else-if="activeSetting == 'contentFlag'"
            >
                <hr />
                <h1>Content Flags</h1>
                <router-link class="btn green-btn mt-3" to="/content-flags"
                    >Go to page</router-link
                >
            </section>
        </div>
    </div>
</template>

<style>
h1 {
    color: #8f7bd6;
    font-family: 'Poppins', sans-serif;
    font-weight: 900;
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
    color: white;
}

.setting-content {
    width: 80%;
    height: auto;
    margin-left: 35px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

/* Mobile Styling */
@media (max-width: 480px) {
    .setting-content {
        width: auto;
        margin-left: 5px;
        margin-right: 5px;
    }
}
</style>
