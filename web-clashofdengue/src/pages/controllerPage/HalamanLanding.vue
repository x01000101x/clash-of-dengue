<template>
    <div>
        <component :is="currentPage"></component> <!-- Dynamically render the appropriate component -->
    </div>
</template>

<script>
import LandingPageMobile from '../mobile/LandingPageMobile.vue';
import LandingPage from '../web/LandingPage.vue';

export default {
    name: 'ControllerPage',
    components: {
        LandingPage,
        LandingPageMobile,
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
      this.$store.commit("ClashOfDengue/resetStore");
    },
    methods: {
        updateCurrentPage() {
            // Check the window width and set the currentPage accordingly
            if (window.innerWidth < 768) {
                this.currentPage = LandingPageMobile; // Set to LandingPageMobile for mobile screens
            } else {
                this.currentPage = LandingPage; // Set to LandingPage for larger screens
            }
        },
    },
};
</script>

<style scoped>
/* Add any relevant styles here */
</style>
