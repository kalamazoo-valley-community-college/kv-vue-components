<template>
    <button class="leading-none
                    px-4 py-3
                    rounded
                    cursor-pointer
                    transition
                    text-sm text-blue-800 hover:text-white focus:text-white hover:text-shadow focus:text-shadow
                    bg-gray-200 hover:bg-blue-700 focus:bg-blue-700
                    border border-gray-500 hover:border-blue-800 focus:border-blue-800
                    focus:shadow-outline
                    font-medium
                    w-full">
        <span>{{ text }}</span>
    </button>
</template>

<script>
    export default {
        props: {
            text: String
        }
    }
</script>