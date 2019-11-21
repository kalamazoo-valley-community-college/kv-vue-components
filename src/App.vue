<template>
    <div id="app">
        <kv-button></kv-button>
    </div>
</template>

<script>
    // TODO: Clean up public folder?
    import kvButton from "./components/kvButton";

    export default {
        name: 'app',
        components: {
            kvButton,
        }
    }
</script>