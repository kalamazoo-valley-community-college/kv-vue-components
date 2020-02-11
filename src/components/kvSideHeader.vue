<template>
    <header class="fixed top-0 left-0 bottom-0
        inline-flex flex-col justify-start items-center
        bg-gray-100
        z-30
        shadow
        p-4
        transition-all duration-300 ease-in-out
        overflow-auto
        w-64"
            :style="header_visible ? null : header_hidden_styling">

        <div class="w-full flex flex-col justify-center items-center mb-2">
            <svg version="1.1"
                 id="Layer_1"
                 xmlns="http://www.w3.org/2000/svg"
                 x="0px" y="0px"
                 class="w-48 ml-2"
                 viewBox="0 0 500 45.5" style="enable-background:new 0 0 500 45.5;" xml:space="preserve">
                    <path d="M28.2,45.5L14.4,21.3L4.8,32.8v12.7H0V0h4.8v26.1L26,0h5.9L17.6,17.5l16.4,28H28.2z"/>
                <path d="M56.1,45.2v-3c-1.2,1.2-2.5,2.1-3.9,2.6s-3.1,0.7-5.2,0.7c-2.2,0-4-0.2-5.3-0.6c-1.3-0.4-2.7-1.3-4-2.6s-1.9-3.3-1.9-6
                        c0-2.8,0.9-5,2.8-6.6c1.9-1.6,4.5-2.4,8-2.4H56v-3c0-2.3-0.6-4.1-1.9-5.2c-1.2-1.1-3.3-1.7-6.1-1.7c-2.1,0-3.7,0.3-4.7,0.8
                        c-1.1,0.5-2.1,1.4-3.1,2.8L37,18c1.4-1.8,2.9-3,4.6-3.7c1.7-0.7,3.9-1,6.5-1c8.4,0,12.6,3.5,12.6,10.5v21.3h-4.6V45.2z
                         M56.1,30.6h-8.8c-4.7,0-7,1.9-7,5.5s2.4,5.4,7.2,5.4c1.6,0,3-0.1,4-0.4c1.1-0.3,2.1-0.9,3.1-1.8c1-1,1.5-2.7,1.5-5.3V30.6z"/>
                <path d="M75.8,45.5c-2.6,0-4.6-0.8-6-2.3c-1.3-1.5-2-3.5-2-6.1V0h4.6v36.9c0,1.6,0.3,2.7,0.9,3.5c0.6,0.7,1.7,1.1,3.3,1.1h2.5v4
                        H75.8z"/>
                <path d="M100.9,45.2v-3c-1.2,1.2-2.5,2.1-3.9,2.6s-3.1,0.7-5.2,0.7c-2.2,0-4-0.2-5.3-0.6c-1.3-0.4-2.7-1.3-4-2.6s-1.9-3.3-1.9-6
                        c0-2.8,0.9-5,2.8-6.6s4.5-2.4,8-2.4h9.4v-3c0-2.3-0.6-4.1-1.9-5.2c-1.2-1.1-3.3-1.7-6.1-1.7c-2.1,0-3.6,0.3-4.7,0.8
                        S86,19.6,85,21l-3.2-3c1.4-1.8,2.9-3,4.6-3.7s3.9-1,6.5-1c8.4,0,12.6,3.5,12.6,10.5v21.3h-4.6V45.2z M100.9,30.6h-8.8
                        c-4.7,0-7,1.9-7,5.5s2.4,5.4,7.2,5.4c1.6,0,3-0.1,4-0.4c1.1-0.3,2.1-0.9,3.1-1.8c1-1,1.5-2.7,1.5-5.3
                        C100.9,34,100.9,30.6,100.9,30.6z"/>
                <path d="M153.1,45.5V26.1c0-2.7-0.7-4.8-2-6.2c-1.4-1.4-3.3-2.1-5.7-2.1c-2.3,0-4.2,0.7-5.7,2.1c-1.4,1.4-2.2,3.3-2.2,5.7v19.9
                        H133V26.1c0-2.7-0.7-4.8-2-6.2c-1.4-1.4-3.3-2.1-5.7-2.1c-2.4,0-4.3,0.7-5.7,2.2c-1.4,1.4-2.1,3.5-2.1,6.2v19.4h-4.6V14h4.6v3.4
                        c2.2-2.6,5.2-3.8,8.9-3.8c4.5,0,7.7,1.7,9.6,5.2c2.5-3.5,5.9-5.2,10.3-5.2c1.7,0,3.2,0.3,4.6,0.8c1.4,0.5,2.9,1.5,4.5,3.1
                        s2.4,4.2,2.4,7.8v20.1L153.1,45.5L153.1,45.5z"/>
                <path d="M182.8,45.2v-3c-1.2,1.2-2.5,2.1-3.9,2.6s-3.1,0.7-5.2,0.7c-2.2,0-4-0.2-5.3-0.6c-1.3-0.4-2.7-1.3-4-2.6s-1.9-3.3-1.9-6
                        c0-2.8,0.9-5,2.8-6.6c1.9-1.6,4.5-2.4,8-2.4h9.4v-3c0-2.3-0.6-4.1-1.9-5.2c-1.2-1.1-3.3-1.7-6.1-1.7c-2.1,0-3.7,0.3-4.7,0.8
                        c-1.1,0.5-2.1,1.4-3.1,2.8l-3.3-2.9c1.4-1.8,2.9-3,4.6-3.7c1.7-0.7,3.9-1,6.5-1c8.4,0,12.6,3.5,12.6,10.5v21.3H182.8z
                         M182.8,30.6H174c-4.7,0-7,1.9-7,5.5s2.4,5.4,7.2,5.4c1.6,0,2.9-0.1,4-0.4c1.1-0.3,2.1-0.9,3.1-1.8c1-1,1.5-2.7,1.5-5.3V30.6z"/>
                <path d="M192.2,45.5v-4l17.5-23.4h-16.5V14H215v3.9l-17.5,23.5H215v4.1H192.2z"/>
                <path d="M240.4,41.9c-1.1,1.1-2.5,2-3.9,2.6c-1.5,0.6-3.2,0.9-5.1,0.9c-1.9,0-3.6-0.3-5-0.9c-1.5-0.6-2.9-1.6-4.2-2.9
                        c-1.3-1.3-2.2-3-2.8-5c-0.5-2-0.8-4.4-0.8-7.2s0.3-5.2,0.8-7.2s1.5-3.7,2.8-5s2.7-2.3,4.2-2.9c1.5-0.6,3.2-0.9,5.1-0.9
                        c1.9,0,3.5,0.3,5,0.9c1.5,0.6,2.9,1.6,4.2,2.9s2.2,3,2.8,5c0.5,2,0.8,4.4,0.8,7.2s-0.3,5.2-0.8,7.2
                        C242.9,38.6,241.9,40.4,240.4,41.9z M237.1,19.7c-1.5-1.5-3.4-2.3-5.7-2.3s-4,0.6-5.3,1.9s-2.1,2.8-2.4,4.4
                        c-0.3,1.7-0.5,3.6-0.5,5.6c0,2.3,0.2,4.2,0.5,5.8c0.3,1.5,1.1,3,2.4,4.3c1.3,1.3,3.1,1.9,5.3,1.9c2.3,0,4.1-0.6,5.4-1.9
                        c1.3-1.3,2.1-2.7,2.4-4.3c0.3-1.6,0.5-3.5,0.5-5.8c0-2.2-0.2-4.1-0.5-5.7C238.8,22.1,238.1,20.7,237.1,19.7z"/>
                <path d="M270.3,41.9c-1.1,1.1-2.4,2-3.9,2.6s-3.1,0.9-5.1,0.9c-1.9,0-3.6-0.3-5-0.9c-1.5-0.6-2.9-1.6-4.2-2.9
                        c-1.3-1.3-2.2-3-2.8-5c-0.5-2-0.8-4.4-0.8-7.2s0.3-5.2,0.8-7.2s1.5-3.7,2.8-5s2.7-2.3,4.2-2.9c1.5-0.6,3.2-0.9,5.1-0.9
                        s3.5,0.3,5,0.9c1.5,0.6,2.9,1.6,4.2,2.9c1.3,1.3,2.2,3,2.8,5c0.5,2,0.8,4.4,0.8,7.2s-0.3,5.2-0.8,7.2
                        C272.8,38.6,271.8,40.4,270.3,41.9z M267.1,19.7c-1.5-1.5-3.4-2.3-5.7-2.3c-2.3,0-4,0.6-5.3,1.9c-1.3,1.3-2.1,2.8-2.4,4.4
                        c-0.3,1.7-0.5,3.6-0.5,5.6c0,2.3,0.2,4.2,0.5,5.8c0.3,1.5,1.1,3,2.4,4.3s3.1,1.9,5.3,1.9c2.3,0,4.1-0.6,5.4-1.9
                        c1.3-1.3,2.1-2.7,2.4-4.3s0.5-3.5,0.5-5.8c0-2.2-0.2-4.1-0.5-5.7C268.8,22.1,268.1,20.7,267.1,19.7z"/>
                <path :fill="fillColor" d="M294,45.5h-6.6L272.4,0h9.2l9.1,29.6L299.8,0h9.2L294,45.5z"/>
                <path :fill="fillColor"
                      d="M334.2,45.5l-2.7-8.1h-16.1l-2.7,8.1h-9.2L320,0h7l16.6,45.5H334.2z M323.7,13.4L318,29.9h11.3L323.7,13.4z"
                />
                <path :fill="fillColor" d="M346.6,45.5V0h8.9v37.6H376v7.9H346.6z"/>
                <path :fill="fillColor" d="M380.7,45.5V0h8.9v37.6h20.6v7.9H380.7z"/>
                <path :fill="fillColor"
                      d="M414.8,45.5V0h29.9v7.9h-21.1v10.6h17.9v7.9h-17.9v11.1h21.1v7.9L414.8,45.5L414.8,45.5z"/>
                <path :fill="fillColor" d="M468.2,26.8v18.7h-8.8V26.8L445.7,0h9.6l8.5,18.3L472.2,0h9.6L468.2,26.8z"/>
                <path d="M488.3,0.8H486V0h5.6v0.8h-2.3v6.7h-1L488.3,0.8L488.3,0.8z"/>
                <path d="M498.9,4.2c-0.1-1.1-0.1-2.3-0.1-3.3l0,0c-0.3,0.9-0.6,1.8-1,2.9l-1.3,3.7h-0.7l-1.2-3.6c-0.4-1.1-0.7-2-0.9-2.9l0,0
		c0,0.9-0.1,2.2-0.1,3.3l-0.2,3.2h-0.9l0.5-7.6h1.2l1.3,3.7c0.3,0.9,0.6,1.8,0.8,2.5l0,0c0.2-0.8,0.5-1.6,0.8-2.5l1.3-3.7h1.2
		l0.5,7.6h-1L498.9,4.2z"/>
            </svg>
            <div class="text-blue-700 font-medium">{{ name }}</div>
        </div>

        <slot name="content"/>

        <div v-if="button" class="fixed top-0 left-0 m-2
                    flex justify-center items-center
                    text-lg
                    w-10 h-10
                    z-20
                    rounded-full
                    shadow
                    cursor-pointer
                    border border-gray-400
                    bg-gray-100"
             :class="{'text-white': header_visible, 'border-blue-800': header_visible, 'bg-blue-700': header_visible}"
             @click="toggleHeaderVisibility"
             aria-hidden="true"
             title="Show or Hide the Site Header">

            <slot name="icon"/>

        </div>
    </header>
</template>

<script>
    export default {
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
            toggleHeaderVisibility() {
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