<script>
import StudentTidyTree from '../components/skilltrees/StudentTidyTree.vue';
import { useUsersStore } from '../../stores/UsersStore';
import { useUserDetailsStore } from '../../stores/UserDetailsStore';

export default {
    setup() {
        const usersStore = useUsersStore();
        const userDetailsStore = useUserDetailsStore();
        return {
            usersStore,
            userDetailsStore
        };
    },
    data() {
        return {
            studentName: "",
        };
    },
    async created(){
        if(this.userDetailsStore.role == "instructor" || this.userDetailsStore.role == "admin"){
            this.instructorId = this.userDetailsStore.userId
        }else{
            alert("Only admin or instructors can access this page.")
            this.$router.push("/")
        }
        if (this.usersStore.users.length == 0) await this.usersStore.getUsers();
        for (let i = 0; i < this.usersStore.users.length; i++) {
            if (this.usersStore.users[i].id == this.$route.params.studentId) {
                this.studentName = this.usersStore.users[i].username;
            }
        }
    },
    components:{
        StudentTidyTree
    }
}
</script>

<template>
    <div id="thin-purple-banner">
        <div class="container">
            <div class="row">
                <h1>{{ studentName }}</h1>
            </div>
        </div>
    </div>
    <!-- Display loading screen while asynchronous call is made. -->
    <Suspense>
        <template #default>
            <StudentTidyTree :studentId="$route.params.studentId" />
        </template>
        <template #fallback>
            <span>Loading...</span>
        </template>
    </Suspense>
</template>

<style>
#thin-purple-banner {
    background-color: #a48be640;
}
</style>
