<template>
    <div class="absolute top-0 left-0 m-4
                    flex justify-center items-center
                    text-lg
                    w-10 h-10
                    z-30
                    rounded-full
                    shadow
                    cursor-pointer
                    border border-gray-400
                    bg-gray-100"
         @click="toggleKvSideHeader"
         aria-hidden="true"
         title="Show or Hide the Site Header">
        <slot/>
    </div>
</template>

<script>
    export default {
        methods: {
            toggleKvSideHeader() {
                // Emit an event to the root to close the side header when touched.
                this.$root.$emit('toggleKvSideHeader');
            }
        }
    }
</script>