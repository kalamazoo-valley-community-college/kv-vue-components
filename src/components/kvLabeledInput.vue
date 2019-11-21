<template>
    <div class="relative w-48">
        <label :for="id"
               class="text-xs font-thin mb-1 absolute top-0 left-0 ml-3 mt-2 pointer-events-none">{{ label }}</label>
        <input :type="type" :id="id" :name="id" class="px-3 pb-2 pt-6
                    mb-4
                    border border-gray-500 focus:border-blue-800
                    rounded
                    transition
                    outline-none
                    focus:shadow-outline
                    w-full" :required="required">
    </div>
</template>

<script>
    export default {
        props: {
            label: String,
            type: String,
            id: String,
            required: Boolean
            // TODO: Model binding?
        }
    }
</script>