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
                            'text-red-700',
                            'hover:text-white',
                            'focus:text-white',
                            'border border-red-700',
                            'hover:border-red-800',
                            'focus:border-red-800',
                            'bg-white',
                            'hover:bg-red-700',
                            'focus:bg-red-700'
                        ];
                    case 'green':
                        return [
                            'text-green-700',
                            'hover:text-white',
                            'focus:text-white',
                            'border border-green-700',
                            'hover:border-green-800',
                            'focus:border-green-800',
                            'bg-white',
                            'hover:bg-green-700',
                            'focus:bg-green-700'
                        ];
                    default:
                        return [
                            'text-blue-700',
                            'hover:text-white',
                            'focus:text-white',
                            'border border-blue-700',
                            'hover:border-blue-800',
                            'focus:border-blue-800',
                            'bg-white',
                            'hover:bg-blue-700',
                            'focus:bg-blue-700'
                        ];
                }
            }
        }
    }
</script>