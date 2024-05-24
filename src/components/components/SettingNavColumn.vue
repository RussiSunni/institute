<script>
export default {
    setup() {},
    data() {
        return {
            // Add Item to below list if there are new setting in the future
            // svgPath atr is to store svg data for the nav icon because we use for in to show list of nav
            navItems: [
                {
                    displayName: 'skill',
                    value: 'skill',
                    svgPath:
                        'M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z'
                },
                {
                    displayName: 'content flag',
                    value: 'contentFlag',
                    svgPath:
                        'M48 24C48 10.7 37.3 0 24 0S0 10.7 0 24V64 350.5 400v88c0 13.3 10.7 24 24 24s24-10.7 24-24V388l80.3-20.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30V66.1c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L48 52V24zm0 77.5l96.6-24.2c27-6.7 55.5-3.6 80.4 8.8c54.9 27.4 118.7 29.7 175 6.8V334.7l-24.4 9.1c-33.7 12.6-71.2 10.7-103.4-5.4c-48.2-24.1-103.3-30.1-155.6-17.1L48 338.5v-237z'
                },
                {
                    displayName: 'mc question',
                    value: 'mcQuestion',
                    svgPath:
                        'M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z'
                },
                {
                    displayName: 'source',
                    value: 'source',
                    svgPath:
                        'M0 96C0 43 43 0 96 0H384h32c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32H384 96c-53 0-96-43-96-96V96zM64 416c0 17.7 14.3 32 32 32H352V384H96c-17.7 0-32 14.3-32 32zM247.4 283.8c-3.7 3.7-6.2 4.2-7.4 4.2s-3.7-.5-7.4-4.2c-3.8-3.7-8-10-11.8-18.9c-6.2-14.5-10.8-34.3-12.2-56.9h63c-1.5 22.6-6 42.4-12.2 56.9c-3.8 8.9-8 15.2-11.8 18.9zm42.7-9.9c7.3-18.3 12-41.1 13.4-65.9h31.1c-4.7 27.9-21.4 51.7-44.5 65.9zm0-163.8c23.2 14.2 39.9 38 44.5 65.9H303.5c-1.4-24.7-6.1-47.5-13.4-65.9zM368 192a128 128 0 1 0 -256 0 128 128 0 1 0 256 0zM145.3 208h31.1c1.4 24.7 6.1 47.5 13.4 65.9c-23.2-14.2-39.9-38-44.5-65.9zm31.1-32H145.3c4.7-27.9 21.4-51.7 44.5-65.9c-7.3 18.3-12 41.1-13.4 65.9zm56.1-75.8c3.7-3.7 6.2-4.2 7.4-4.2s3.7 .5 7.4 4.2c3.8 3.7 8 10 11.8 18.9c6.2 14.5 10.8 34.3 12.2 56.9h-63c1.5-22.6 6-42.4 12.2-56.9c3.8-8.9 8-15.2 11.8-18.9z'
                },
                {
                    displayName: 'domain',
                    value: 'domain',
                    svgPath:
                        'M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z'
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
    <div class="d-none d-md-flex flex-column nav-column">
        <div class="nav-tile mb-3">Settings</div>
        <!-- Navigate Items List -->
        <div
            v-for="item in navItems"
            :class="
                activeSetting == item.value ? ' active-nav-item ' : ' nav-item'
            "
            @click="$emit('changeActiveNavItem', item.value)"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                width="20"
                height="20"
                fill="#888"
            >
                <path :d="item.svgPath" />
            </svg>
            <div>
                {{ item.displayName }}
            </div>
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
        <Transition name="dropdown">
            <div
                v-if="showDropDown"
                :class="'d-flex flex-column dropdown-base'"
            >
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
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                    >
                        <path :d="item.svgPath" />
                    </svg>
                </div>
            </div>
        </Transition>
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
    font-weight: 550;
    text-transform: capitalize;
    display: flex;
    flex-direction: row;
    gap: 8px;
    color: #888;
}

.active-nav-item {
    padding: 10px 20px;
    font-weight: 550;
    background-color: #e1d8fa;
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
    text-transform: capitalize;
    display: flex;
    flex-direction: row;
    gap: 8px;
    color: #888;
}

.nav-item:hover {
    cursor: pointer;
    background-color: #bfbbc7;
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
}

.nav-column {
    width: 320px;
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

/* Dropdown Animation */

@keyframes slide {
    0% {
        opacity: 0;
        transform: scaleY(0);
    }

    100% {
        opacity: 1;
        transform: scaleY(1);
    }
}
.dropdown-enter-active {
    transform-origin: top center;
    animation: slide 0.2s;
}
.dropdown-leave-active {
    transform-origin: top center;
    animation: slide 0.2s reverse;
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
