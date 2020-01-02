<template>
    <button :type="type"
            class="leading-none
                    rounded
                    cursor-pointer
                    shadow
                    hover:shadow-outline focus:shadow-outline
                    font-medium"
            :class="[buttonSize, buttonColor]">
        <span>{{ text }}</span>
    </button>
</template>

<script>
    export default {
        props: {
            type: String,
            text: String,
            size: String,
            color: String
        },
        computed: {
            buttonSize() {
                switch (this.size) {
                    case 'tiny':
                        return ['px-2', 'py-1', 'text-xs'];
                    case 'small':
                        return ['px-3', 'py-2', 'text-sm'];
                    case 'large':
                        return ['px-5', 'py-4', 'text-lg'];
                    case 'huge':
                        return ['px-6', 'py-5', 'text-xl'];
                    default:
                        return ['px-4', 'py-3', 'text-base'];
                }
            },
            buttonColor() {
                switch (this.color) {
                    case 'red':
                        return [
                            'text-white',
                            'bg-red-800',
                            'hover:bg-red-900',
                            'focus:bg-red-900'
                        ];
                    case 'green':
                        return [
                            'text-white',
                            'bg-green-800',
                            'hover:bg-green-900',
                            'focus:bg-green-900'
                        ];
                    default:
                        return [
                            'text-white',
                            'bg-blue-800',
                            'hover:bg-blue-900',
                            'focus:bg-blue-900'
                        ];
                }
            }
        }
    }
</script>