<template>
    <div>
        <span @click="previousPage"
              @keypress.enter="previousPage"
              @keypress.space="previousPage"
              :disabled="!hasPreviousPage"
              :class="{'opacity-50 pointer-events-none': !hasPreviousPage}">
            <kv-button type="button" size="small" text="Previous Page"></kv-button>
        </span>
        <span @click="nextPage"
              @keypress.enter="nextPage"
              @keypress.space="nextPage"
              :disabled="!hasNextPage"
              class="ml-2"
              :class="{'opacity-50 pointer-events-none': !hasNextPage}">
            <kv-button type="button" size="small" text="Next Page"></kv-button>
        </span>
    </div>
</template>

<script>
    import kvButton from "./kvButton";

    export default {
        components: {
            kvButton
        },
        props: {
            hasPreviousPage: Boolean,
            hasNextPage: Boolean
        },
        methods: {
            // TODO: Window event handlers for left and right arrows.
            previousPage() {
                if (this.hasPreviousPage) {
                    this.$emit('previousPage');
                }
            },
            nextPage() {
                if (this.hasNextPage) {
                    this.$emit('nextPage');
                }
            }
        }
    }
</script>