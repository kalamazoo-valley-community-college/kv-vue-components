<template>
    <component :is="type" :class="classes" class="font-bold">{{ text }}</component>
</template>

<script>
    export default {
        data() {
            return {
                classes: null,
            }
        },
        props: {
            type: {
                type: String,
                validator: value => {
                    const validHeadings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
                    return validHeadings.includes(value);
                }
            },
            text: String,
        },
        methods: {
            getFontSize(type) {
                if (type === 'h1') {
                    return ['text-3xl'];
                } else if (type === 'h2') {
                    return ['text-2xl'];
                } else if (type === 'h3') {
                    return ['text-xl'];
                } else if (type === 'h4') {
                    return ['text-lg'];
                } else if (type === 'h5') {
                    return ['text-base'];
                } else if (type === 'h6') {
                    return ['text-sm'];
                } else {
                    // If no class type is specified, default to the base styling.
                    return ['text-base'];
                }
            }
        },
        mounted() {
            this.classes = this.getFontSize(this.type);
        }
    }
</script>