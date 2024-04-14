import { defineStore } from 'pinia'

// Import another store.
import { useSessionDetailsStore } from './SessionDetailsStore.js'

export const useUserDetailsStore = defineStore("userDetails", {
    state: () => {
        return {
            avatar: null,
            userName: null,
            firstName: null,
            role: null,
            lastName: null,
            password: null,
            email: null,
            skillTreeTheme: null,
            userId: null,
        }
    },
    actions: {
        async getUserDetails() {
            // First get the user id from the saved Express session.
            const sessionDetailsStore = useSessionDetailsStore();
            const sessionDetails = await sessionDetailsStore.getSessionDetails();

            if (sessionDetails.isLoggedIn) {
                this.userId = sessionDetails.userId;

                // Then load the details for the current user. 
                const result = await fetch('/users/show/' + this.userId);
                const data = await result.json();
                this.avatar = data.avatar;
                this.userName = data.username;
                this.firstName = data.first_name;
                this.lastName = data.last_name;
                this.role = data.role;
                this.skillTreeTheme = data.skilltree_theme;
                this.password = data.password;
                this.email = data.email;

                return this.$state;
            }
        },
        async updateProfile(userName, skillTreeTheme, avatar) {
            // Update the store.
            this.$patch({
                userName: userName,
                skillTreeTheme: skillTreeTheme,
                avatar: avatar,
            })

            // Update the database.
            const requestOptions = {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(
                    {
                        username: userName,
                        avatar: avatar,
                        skilltree_theme: skillTreeTheme,
                    })
            };
            var url = "/users/profile/" + this.userId + "/edit";
            fetch(url, requestOptions)
                .then(() => {

                    // Import the other store.
                    const skillTreeStore = useSkillTreeStore();
                    var student = {
                        id: this.userId,
                        avatar: this.avatar,
                        skillTreeTheme: this.skillTreeTheme,
                        password: this.password,
                        email: this.email
                    }
                    skillTreeStore.updateSkillTree(student);
                });
        }
    }
});