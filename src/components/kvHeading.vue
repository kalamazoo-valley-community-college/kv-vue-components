<template>
    <component :is="type" :class="getFontSize" class="font-bold">{{ text }}</component>
</template>

<script>
    export default {
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
        computed: {
            getFontSize() {
                switch (this.type) {
                    case 'h1':
                        return ['text-3xl'];
                    case 'h2':
                        return ['text-2xl'];
                    case 'h3':
                        return ['text-xl'];
                    case 'h4':
                        return ['text-lg'];
                    case 'h5':
                        return ['text-base'];
                    case 'h6':
                        return ['text-sm'];
                    default:
                        return ['text-base'];

                }
            }
        }
    }
</script>