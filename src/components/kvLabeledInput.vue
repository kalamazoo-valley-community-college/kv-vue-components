<template>
    <div class="relative w-48">
        <label :for="id"
               class="absolute top-0 left-0
               mb-1 ml-3 mt-2
               text-xs font-thin
               pointer-events-none">{{ label }}</label>
        <input :type="type" :id="id" :name="id" class="px-3 pb-2 pt-6
                    border border-gray-500 focus:border-blue-800
                    rounded
                    outline-none
                    focus:shadow-outline"
               v-model="input"
               :required="required"
               @keyup="updateParentModel">
    </div>
</template>

<script>
    export default {
        props: {
            label: String,
            type: String,
            id: String,
            model: String,
            required: Boolean,
        },
        data() {
            return {
                input: null
            }
        },
        methods: {
            updateParentModel() {
                this.$emit('update:model', this.input);
            }
        }
    }
</script>