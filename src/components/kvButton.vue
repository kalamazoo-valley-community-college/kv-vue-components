<template>
    <button :type="type"
            class="leading-none
                    rounded
                    cursor-pointer
                    text-blue-800 hover:text-white focus:text-white
                    border-gray-500 hover:border-blue-500 focus:border-blue-500
                    bg-white hover:bg-blue-700 focus:bg-blue-700
                    shadow
                    hover:shadow-outline focus:shadow-outline
                    font-medium"
            :class="buttonSize">
        <span>{{ text }}</span>
    </button>
</template>

<script>
    export default {
        props: {
            type: String,
            text: String,
            size: String
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
            }
        }
    }
</script>