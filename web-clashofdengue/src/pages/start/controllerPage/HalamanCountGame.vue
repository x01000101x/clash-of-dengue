<template>
    <div>
        <component :is="currentPage"></component> <!-- Dynamically render the appropriate component -->
    </div>
</template>

<script>
import CountingDaysQuiz from '../CountingDaysQuiz.vue';
import CountingMobile from '../mobile/CountingMobile.vue';

export default {
    name: 'ControllerPage',
    components: {
        CountingMobile,
        CountingDaysQuiz
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
            if (window.innerWidth < 800) {
                this.currentPage = CountingMobile; // Set to LandingPageMobile for mobile screens
            } else {
                this.currentPage = CountingDaysQuiz; // Set to LandingPage for larger screens
            }
        },
    },
};
</script>

<style scoped>
/* Add any relevant styles here */
</style>
