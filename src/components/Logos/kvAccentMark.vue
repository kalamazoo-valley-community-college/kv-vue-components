<template>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1"
         x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">
		<circle :fill="kalamazooFill" cx="250" cy="250" r="250"/>
        <path :fill="valleyFill"
              d="M381.3,423.7c-96,72.6-232.5,53.5-305-42.4c-72.5-96-53.5-232.6,42.5-305.1c95.9-72.5,232.6-53.5,305.1,42.6     C496.3,214.7,477.3,351.3,381.3,423.7z"/>
        <path :fill="kvFill"
              d="M119.6,194c0-9.3,7.4-16.7,16.7-16.7S153,184.7,153,194v51l61.6-61.2c4.1-4.1,8.2-6.5,14.1-6.5      c9.3,0,15.4,7.2,15.4,15.4c0,5.1-2.4,9.1-6,12.5l-42.7,39.9l46.7,58.6c2.6,3.3,4.5,6.7,4.5,11.7c0,9.3-7.2,16.3-17,16.3      c-6.5,0-10.4-3.3-14-8.1l-43.3-56.8L153,284.6V315c0,9.3-7.3,16.7-16.7,16.7c-9.3,0-16.7-7.4-16.7-16.7      C119.6,315,119.6,194,119.6,194z"/>
        <path :fill="kvFill"
              d="M303.7,319.6l-49.2-117.7c-1.1-2.6-1.9-5.2-1.9-8c0-9.3,7.4-16.5,16.7-16.5c8.6,0,14.3,5,16.9,11.7      l37.9,98.2l38.4-99.3c2.2-5.4,8-10.6,16-10.6c9.2,0,16.6,6.9,16.6,16.1c0,2.6-0.9,5.4-1.7,7.3l-49.7,118.8      c-3.4,8.3-9.8,13.2-18.8,13.2h-2.2C313.5,332.8,307.2,327.8,303.7,319.6z"/>
        <path :fill="kalamazooFill"
              d="M435.7,456.8l-8.3-0.2l0.1-3l20.2,0.4l-0.1,3l-8.3-0.2l-0.5,24.2l-3.6-0.1L435.7,456.8z"/>
        <path :fill="kalamazooFill"
              d="M473.3,469.9c-0.1-3.8-0.3-8.4-0.2-11.8H473c-1,3.1-2.2,6.5-3.7,10.3l-5.1,13.1l-2.7-0.1l-4.2-13.1    c-1.2-3.9-2.2-7.4-2.9-10.7h-0.1c-0.2,3.4-0.4,7.9-0.8,12l-1,11.7l-3.4-0.1l2.5-27.2l4.5,0.1l4.4,13.3c1.1,3.4,1.9,6.4,2.6,9.2    h0.1c0.8-2.7,1.8-5.7,3.1-9.1l5.1-13.1l4.5,0.1l1.1,27.3l-3.5-0.1L473.3,469.9z"/>
    </svg>
</template>

<script>
    export default {
        props: {
            mono: String
        },
        computed: {
            kalamazooFill() {
                if (this.mono) {
                    switch (this.mono) {
                        case 'white':
                            return "#ffffff";
                        case 'black':
                            return "#000000";
                    }
                }
                return "#000000";
            },
            valleyFill() {
                if (this.mono) {
                    switch (this.mono) {
                        case 'white':
                            return "#000000";
                        case 'black':
                            return "#ffffff";
                    }
                }
                return "#2b6cb0";
            },
            kvFill() {
                if (this.mono) {
                    switch (this.mono) {
                        case 'white':
                            return "#ffffff";
                        case 'black':
                            return "#000000";
                    }
                }
                return "#ffffff";
            }
        }
    }
</script>