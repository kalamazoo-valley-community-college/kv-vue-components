<template>
    <button :type="type"
            class="leading-none
                    rounded
                    cursor-pointer
                    shadow-sm
                    transition-all duration-300 ease-in-out
                    hover:shadow-outline focus:shadow-outline
                    font-medium"
            :style="styling"
            :class="[buttonSize, buttonColor]">
        <span>{{ text }}</span>
    </button>
</template>

<script>
    export default {
        props: {
            type: {
                type: String,
                validator(value) {
                    return ["button", "submit", "reset"].includes(value)
                }
            },
            text: String,
            size: String,
            color: String
        },
        data() {
            return {
                styling: {
                    textShadow: '0 0 0.125rem black'
                }
            }
        },
        computed: {
            buttonSize() {
                switch (this.size) {
                    case 'tiny':
                        return ['px-2', 'py-2', 'text-xs'];
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
                            'bg-red-700',
                            'hover:bg-red-800',
                            'focus:bg-red-800'
                        ];
                    case 'green':
                        return [
                            'text-white',
                            'bg-green-700',
                            'hover:bg-green-800',
                            'focus:bg-green-800'
                        ];
                    default:
                        return [
                            'text-white',
                            'bg-blue-700',
                            'hover:bg-blue-800',
                            'focus:bg-blue-800'
                        ];
                }
            }
        }
    }
</script>