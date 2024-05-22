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
            ]
        };
    },
    props: ['activeSetting'],
    async created() {}
};
</script>

<template>
    <div class="d-flex flex-column">
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
}

.active-nav-item {
    padding: 10px 20px;
    font-weight: 500;
    background-color: #cdd8f7;
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
}

.nav-item:hover {
    cursor: pointer;
    background-color: #eceff7;

    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
}
</style>
