<template>
    <div class="inline-flex justify-center items-center">
        <div ref="icon" class="h-6 w-6
                rounded-full
                border-4 border-blue-700
                mr-2"
             :style="iconStyling"
             aria-hidden="true">
        </div>
        <div>{{ text }}</div>
    </div>
</template>

<script>
    export default {
        props: {
            text: String
        },
        data() {
            return {
                iconStyling: {
                    borderTopColor: '#63b3ed',
                    filter: 'drop-shadow(0 0 0.0625rem #63b3ed)'
                },
                rotationValue: 0,
                interval: null
            }
        },
        methods: {
            // Due to the necessity to import a separate stylesheet for styling exports, animations seem to need to be done in JavaScript.
            // If you can find a workaround or modify the config to allow an easy CSS animation, please do!
            // https://cli.vuejs.org/guide/css.html
            animateIcon() {
                const nextRotationValue = this.rotationValue >= 360 ? this.rotationValue = 0 : this.rotationValue++;
                this.$refs.icon.style.transform = 'rotate(' + nextRotationValue + 'deg)';
            }
        },
        mounted() {
            this.interval = window.setInterval(this.animateIcon, 5);
        },
        beforeDestroy() {
            window.clearInterval(this.interval)
        }
    }
</script>