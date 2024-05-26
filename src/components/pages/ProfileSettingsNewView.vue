<script>
import ProfileDetails from '../components/ProfileDetails.vue';
import SkillSetting from '../components/settingPages/SkillSetting.vue';
import ContentFlagSetting from '../components/settingPages/ContentFlagSetting.vue';
import SettingNavColumn from '../components/SettingNavColumn.vue';
import McQuestionSetting from '../components/settingPages/McQuestionSetting.vue';

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
        SettingNavColumn,
        SkillSetting,
        ContentFlagSetting,
        McQuestionSetting
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
        class="d-flex flex-md-row flex-column justify-content-between container mt-3 pb-3"
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
            <ContentFlagSetting v-else-if="activeSetting == 'contentFlag'" />
            <!-- Multiple questions relate setting -->
            <McQuestionSetting v-else-if="activeSetting == 'mcQuestion'" />
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

/* Classes that have shared use in child components */
.explain-text {
    font-size: 14px;
    color: #475569;
    font-family: 'Poppins', sans-serif;
    margin-left: 2px;
}

.setting-tile {
    font-size: 20px;
    font-family: 'Poppins', sans-serif;
    font-weight: 550;
    color: #c1b3eb;
}

/* ---------------- ### ------------------- */

/* Mobile Styling */
@media (max-width: 480px) {
    .setting-content {
        width: auto;
        margin-left: 5px;
        margin-right: 5px;
    }
}
</style>
