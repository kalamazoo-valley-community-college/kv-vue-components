<template>
    <div class="relative">
        <label :for="id"
               class="absolute top-0 left-0
               mb-1 ml-3 mt-2
               text-gray-700
               text-xs font-thin
               pointer-events-none">{{ label }}</label>
        <input v-if="type === 'text' || type === 'search' || type === 'datalist'"
               :type="type" :id="id" :name="id"
               :class="classes"
               :list="list_id"
               v-model="input"
               :required="required"
               @keyup="updateParentModel">
        <select v-if="type === 'select'"
                :id="id" :name="id"
                :class="classes"
                v-model="input"
                @change="updateParentModel">
            <!-- Allow a slot for options directly if this is a select input. -->
            <slot/>
        </select>
        <!-- Allow a datalist slot if this is a datalist input. -->
        <slot v-if="type === 'datalist'"/>
    </div>
</template>

<script>
    // TODO: Datalist focus handling? When re-focusing do we null the value?
    export default {
        props: {
            label: String,
            type: {
                type: String,
                default: 'text',
                validation: value => {
                    return ['text', 'search', 'select', 'datalist'].includes(value);
                }
            },
            id: String,
            model: String,
            required: Boolean,
            list_id: String
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
                    'border-gray-700',
                    'hover:border-blue-700',
                    'focus:border-blue-700',
                    'shadow',
                    'rounded',
                    'focus:shadow-outline',
                    'outline-none',
                    'w-full'
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