<template>
    <div v-if="update"
         class="fixed bottom-0 right-0
         flex flex-col justify-center items-center
         text-sm text-center
         mr-4 mb-4 p-4
         bg-white
         z-50
         w-40
         transition-all duration-300 ease-in-out
         shadow
         rounded-lg">
        <div class="mb-4 font-thin">A new version of this application is ready!</div>
        <span @click="refresh">
            <kv-button text="Update" color="green" type="button"/>
        </span>
    </div>
</template>

<script>
    import kvButton from "./kvButton";

    export default {
        components: {
            kvButton
        },
        data() {
            return {
                // Is the service worker refreshing?
                refreshing: false,
                // Is a new service worker registered?
                registration: null,
                // Does the application have an update ready?
                update: false
            }
        },
        methods: {
            showUpdateNotice(event) {
                this.registration = event.detail;
                this.update = true;
            },
            refresh() {
                // Hide the update notice.
                this.update = false;
                // If there is a new registration and it it waiting, we have to tell the service worker to skip waiting.
                if (!this.registration || !this.registration.waiting) return;
                this.registration.waiting.postMessage('skipWaiting');
            }
        },
        created() {
            // When this component is mounted we will listen for the custom event to be fired to show the update notice.
            document.addEventListener('swUpdated', this.showUpdateNotice, {once: true});
            // Add a controllerchange listener to the service worker to actually trigger a page refresh for new content.
            navigator.serviceWorker.addEventListener('controllerchange', () => {
                // Prevent triggering a refresh multiple times.
                if (this.refreshing) return;
                this.refreshing = true;
                window.location.reload();
            });
        }
    }
</script>