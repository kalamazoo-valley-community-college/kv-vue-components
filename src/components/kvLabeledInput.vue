<template>
    <div class="relative">
        <label :for="id"
               class="absolute top-0 left-0
               mb-1 ml-3 mt-2
               text-gray-800
               text-xs font-thin
               pointer-events-none">{{ label }}</label>
        <input v-if="['text', 'search', 'datalist', 'password'].includes(type)"
               :type="type" :id="id" :name="id"
               :class="classes"
               :list="list_id"
               v-model="input"
               :required="required"
               @input="updateParentModel"
               @paste="updateParentModel">
        <select v-if="type === 'select'"
                :id="id" :name="id"
                :class="classes"
                v-model="input"
                @change="updateParentModel">
            <!-- Allow a slot for options directly if this is a select input. -->
            <slot/>
        </select>
    </div>
</template>

<script>
    export default {
        props: {
            label: String,
            type: {
                type: String,
                // TODO: show/hide button for password inputs
                default: 'text',
                validation: value => {
                    return ['text', 'search', 'select', 'password'].includes(value);
                }
            },
            id: String,
            model: null,
            required: Boolean,
            list_id: String
        },
        watch: {
            // Watch the model for changes from the parent to update the local input model value.
            model(value) {
                this.input = value;
            }
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
                    'hover:bg-white',
                    'focus:bg-white',
                    'border',
                    'border-gray-500',
                    'hover:border-blue-700',
                    'focus:border-blue-700',
                    'shadow-sm',
                    'rounded',
                    'focus:shadow-outline',
                    'outline-none',
                    'w-full',
                    'transition-all',
                    'duration-300',
                    'ease-in-out'
                ],
                styling: {
                    transition: 'all 0.25s ease'
                }
            }
        },
        methods: {
            updateParentModel() {
                this.$emit('update:model', this.input);
            }
        }
    }
</script>