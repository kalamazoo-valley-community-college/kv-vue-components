<template>
    <header class="fixed top-0 left-0 bottom-0
        inline-flex flex-col justify-start items-center
        bg-gray-100
        z-40
        shadow
        p-4
        transition-all duration-300 ease-in-out
        overflow-auto
        w-64"
            :style="header_visible ? null : header_hidden_styling">

        <div class="w-full flex flex-col justify-center items-center mb-2">
            <kv-logo class="w-48 ml-2"/>
            <div class="text-blue-700 font-medium">{{ name }}</div>
        </div>

        <slot/>
    </header>
</template>

<script>
    import KvLogo from "./Logos/kvLogo";

    export default {
        components: {KvLogo},
        props: {
            name: String,
            button: Boolean
        },
        data() {
            return {
                // Logo Fill Color
                fillColor: '#2b6cb0',
                // Form Display & Swipe Handling
                header_visible: true,
                x_down: null,
                y_down: null,
                header_hidden_styling: {
                    left: '-16rem'
                }
            }
        },
        methods: {
            handleTouchStart(e) {
                const firstTouch = e.touches[0];
                this.x_down = firstTouch.clientX;
                this.y_down = firstTouch.clientY;
            },
            handleTouchMove(e) {
                if (!this.x_down || !this.y_down) {
                    return;
                }

                const xUp = e.touches[0].clientX;
                const yUp = e.touches[0].clientY;

                const xDiff = this.x_down - xUp;
                const yDiff = this.y_down - yUp;

                if (Math.abs(xDiff) > Math.abs(yDiff)) {
                    this.header_visible = xDiff <= 0;
                }

                this.x_down = null;
                this.y_down = null;
            },
            toggle() {
                this.header_visible = !this.header_visible;
            },
            hide() {
                this.header_visible = false;
            }
        },
        mounted() {
            // https://stackoverflow.com/questions/2264072/detect-a-finger-swipe-through-javascript-on-the-iphone-and-android
            document.addEventListener('touchstart', this.handleTouchStart, false);
            document.addEventListener('touchmove', this.handleTouchMove, false);

            // Listen for the event to toggle the header when the user clicks a toggle button.
            this.$root.$on('toggleKvSideHeader', () => {
                this.toggle();
            });

            // Listen for the event to close the header when the user touches content.
            this.$root.$on('closeKvSideHeader', () => {
                this.hide();
            });
        },
        beforeDestroy() {
            // Remove the touch event listeners before this component is destroyed.
            document.removeEventListener('touchstart', this.handleTouchStart);
            document.removeEventListener('touchmove', this.handleTouchMove);
        }
    }
</script>