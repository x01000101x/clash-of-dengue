<template>
    <div>
        <component :is="currentPage"></component> <!-- Dynamically render the appropriate component -->
    </div>
</template>

<script>
import CountingMobileRegis from '../mobile/CountingMobileRegis.vue';
import CountingDaysRegis from '../web/CountingDaysRegis.vue';

export default {
    name: 'ControllerPage',
    components: {
        CountingDaysRegis,
        CountingMobileRegis
    },
    data() {
        return {
            currentPage: null, // Holds the current page component to render
        };
    },
    created() {
        this.updateCurrentPage(); // Set the initial component based on screen size
        window.addEventListener('resize', this.updateCurrentPage); // Listen for resize events
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.updateCurrentPage); // Clean up the event listener
    },
    mounted() {
    },
    methods: {
        updateCurrentPage() {
            // Check the window width and set the currentPage accordingly
            if (window.innerWidth < 801) {
                this.currentPage = CountingMobileRegis; // Set to LandingPageMobile for mobile screens
            } else {
                this.currentPage = CountingDaysRegis; // Set to LandingPage for larger screens
            }
        },
    },
};
</script>

<style scoped>
/* Add any relevant styles here */
</style>
