<script>
import { useUserDetailsStore } from '../../../stores/UserDetailsStore';

export default {
    setup() {
        const userDetailsStore = useUserDetailsStore();
        return {
            userDetailsStore
        };
    },
    data() {
        return {
            cohort: {
                name: ''
            },
            // validate object
            validate: {
                violated: false,
                name: false
            }
        };
    },
    methods: {
        Submit() {
            // reset the validate flag before re-validate
            this.validate.violated = false;
            // Checking data before make POST request
            if (this.cohort.name === '' || this.cohort.name === null) {
                this.validate.name = true;
                this.validate.violated = true;
            }

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: this.cohort.name,
                    instructorId: this.userDetailsStore.userId
                })
            };
            var url = '/cohorts/add';
            fetch(url, requestOptions)
                .then(() => {
                    alert('Cohort added');
                })
                .then(() => {
                    this.$router.go(-1);
                });
        }
    }
};
</script>

<template>
    <div id="banner">
        <img src="/images/banners/general-banner.png" class="image-fluid" />
    </div>
    <div class="container mt-5 pb-3">
        <div class="row">
            <div class="col-10 d-flex align-items-end">
                <h2 id="header-title">Add Cohort</h2>
                <img src="/images/recurso-69.png" id="header-icon" />
            </div>
        </div>
        <div class="main-content-container container-fluid p-4">
            <div class="row">
                <div id="form-container" class="col-lg-6 p-4">
                    <div class="mb-3">
                        <label for="first_name" class="form-label"
                            >Cohort Name</label
                        >
                        <input
                            v-model="cohort.name"
                            type="text"
                            class="form-control"
                        />
                        <div
                            v-if="
                                validate.name &&
                                (cohort.name === '' || cohort.name === null)
                            "
                            class="form-validate"
                        >
                            please enter a name for cohort !
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
#banner {
    width: 100% !important;
    height: auto;
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

#header-title {
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
</style>
