<template>
    <div class="relative">
        <label :for="id"
               class="absolute top-0 left-0
               mb-1 ml-3 mt-2
               text-xs font-thin
               pointer-events-none">{{ label }}</label>
        <input v-if="type === 'text' || type === 'search'"
               :type="type" :id="id" :name="id"
               :class="classes"
               v-model="input"
               :required="required"
               @keyup="updateParentModel">
        <select v-if="type === 'select'"
                :id="id" :name="id"
                :class="classes"
                v-model="input"
                @change="updateParentModel">
            <slot/>
        </select>
    </div>
</template>

<script>
    // TODO: Handle other input types like Select or Datalist.
    export default {
        props: {
            label: String,
            type: {
                type: String,
                default: 'text',
                validation: value => {
                    const validTypes = ['text', 'search', 'select'];
                    return validTypes.includes(value);
                }
            },
            id: String,
            model: String,
            required: Boolean,
            options: Object,
        },
        data() {
            return {
                input: null,
                classes: [
                    'appearance-none',
                    'px-3',
                    'pb-2',
                    'pt-6',
                    'bg-white',
                    'border',
                    'border-gray-500',
                    'focus:border-blue-800',
                    'rounded',
                    'outline-none',
                    'focus:shadow-outline'
                ]
            }
        },
        methods: {
            updateParentModel() {
                this.$emit('update:model', this.input);
            }
        }
    }
</script>