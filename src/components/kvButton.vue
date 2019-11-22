<template>
    <button :type="type"
            class="leading-none
                    rounded
                    cursor-pointer
                    text-blue-800 hover:text-white focus:text-white hover:text-shadow focus:text-shadow
                    bg-blue-200 hover:bg-blue-700 focus:bg-blue-700
                    border border-gray-500 hover:border-blue-800 focus:border-blue-800
                    focus:shadow-outline
                    font-medium"
            :class="classes">
        <span>{{ text }}</span>
    </button>
</template>

<script>
    export default {
        data() {
            return {
                classes: null
            }
        },
        props: {
            type: String,
            text: String,
            size: String
        },
        methods: {
            getSizeClasses(size) {
                if (size === 'tiny') {
                    return ['px-2', 'py-1', 'text-xs'];
                } else if (size === 'small') {
                    return ['px-3', 'py-2', 'text-sm'];
                } else if (size === 'large') {
                    return ['px-5', 'py-4', 'text-lg'];
                } else if (size === 'huge') {
                    return ['px-6', 'py-5', 'text-xl'];
                } else {
                    // If no class size is specified, default to the base styling.
                    return ['px-4', 'py-3', 'text-base'];
                }
            }
        },
        mounted() {
            this.classes = this.getSizeClasses(this.size);
        }
    }
</script>