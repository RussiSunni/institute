<script>
export default {
    setup() {},
    data() {
        return {
            // Add Item to below list if there are new setting in the future
            navItems: [
                {
                    displayName: 'skill',
                    value: 'skill'
                },
                {
                    displayName: 'content flag',
                    value: 'contentFlag'
                },
                {
                    displayName: 'mc question',
                    value: 'mcQuestion'
                },
                {
                    displayName: 'source',
                    value: 'source'
                },
                {
                    displayName: 'domain',
                    value: 'domain'
                }
            ],

            // Data use in mobile style
            showDropDown: false
        };
    },
    props: ['activeSetting'],
    async created() {}
};
</script>

<template>
    <!-- Show Nav Column When In Desktop -->
    <div class="d-none d-md-flex flex-column">
        <div class="nav-tile mb-3">Settings</div>
        <!-- Navigate Items List -->
        <div
            v-for="item in navItems"
            :class="
                activeSetting == item.value ? ' active-nav-item ' : ' nav-item'
            "
            @click="$emit('changeActiveNavItem', item.value)"
        >
            {{ item.displayName }}
        </div>
    </div>
    <!-- Show Drawer When In Phone View -->
    <div class="d-flex d-md-none position-relative">
        <div
            :class="[showDropDown ? 'drawer-button-focus' : 'drawer-button']"
            @click="showDropDown = !showDropDown"
        >
            <div class="nav-tile">Settings</div>
            <span>
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M14.2929 8.70711C14.9229 8.07714 14.4767 7 13.5858 7H6.41421C5.52331 7 5.07714 8.07714 5.70711 8.70711L9.29289 12.2929C9.68342 12.6834 10.3166 12.6834 10.7071 12.2929L14.2929 8.70711Z"
                        fill="#344054"
                    />
                </svg>
            </span>
        </div>
        <!-- Navigate Items List -->
        <div v-if="showDropDown" class="d-flex flex-column dropdown-base">
            <div
                v-for="item in navItems"
                :class="
                    activeSetting == item.value
                        ? ' active-nav-item '
                        : ' nav-item'
                "
                @click="
                    $emit('changeActiveNavItem', item.value);
                    showDropDown = false;
                "
            >
                {{ item.displayName }}
            </div>
        </div>
    </div>
    <!-- Modal act as a veil when setting dropdown appear -->
    <div v-if="showDropDown" class="modal"></div>
</template>

<style scoped>
.nav-tile {
    font-family: 'Poppins', sans-serif;
    font-size: 35px;
    margin-top: -12px;
    color: #a48be6;
    font-weight: 800;
}

.nav-item {
    padding: 10px 20px;
    font-weight: 500;
    text-transform: capitalize;
}

.active-nav-item {
    padding: 10px 20px;
    font-weight: 500;
    background-color: #e1d8fa;
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
    text-transform: capitalize;
}

.nav-item:hover {
    cursor: pointer;
    background-color: #bfbbc7;
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
}

/***************************************************/
/*             MOBILE COMPONENTS SETTINGS          */
/***************************************************/
/* Mobile Modal Styling */
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

/* ====== Drawer Button Styling ===== */
.drawer-button {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.drawer-button-focus {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.drawer-button > span {
    margin-right: 2px;
    margin-left: auto;
    margin-bottom: 15px;
    animation: rotationBack 0.52s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translate3d(0, 0, 0);
}

.drawer-button-focus > span {
    margin-right: 2px;
    margin-left: auto;
    margin-bottom: 10px;
    animation: rotation 0.52s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translate3d(0, 0, 0);
}

/* Animation for rotate arrow */
@keyframes rotation {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(180deg);
    }
}

@keyframes rotationBack {
    from {
        transform: rotate(180deg);
    }

    to {
        transform: rotate(0deg);
    }
}

.dropdown-base {
    position: absolute;
    top: 30px;
    z-index: 5;
    background-color: white;
    padding: 5px 10px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
}

/* ====== End Of Drawer Button Styling ===== */
/*__________________************_____________________ */

/* Mobile Styling */
@media (max-width: 480px) {
    .nav-tile {
        font-size: 16px;
        margin-left: 10px;
    }
}
</style>
