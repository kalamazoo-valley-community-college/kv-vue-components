<template>
    <div class="p-4 lg:ml-64" @touchend="closeKvSideHeader">
        <slot/>
    </div>
</template>

<script>
    export default {
        methods: {
            closeKvSideHeader() {
                // Emit an event to the root to close the side header when touched.
                this.$root.$emit('closeKvSideHeader');
            }
        }
    }
</script>