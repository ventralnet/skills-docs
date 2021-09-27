<template>
    <div>
        <home-page-header />
    </div>
</template>

<script>
    import InfoCards from "./home/InfoCards";
    import DashboardSection from "./home/DashboardSection";
    import UserDisplaySection from "./home/UserDisplaySection";
    import RapidIntegrationSection from "./home/RapidIntegrationSection";
    import VueDocsSection from "./home/VueDocsSection";
    import HomePageFooter from "./home/HomePageFooter";
    import HomePageHeader from "./home/HomePageHeader";
    export default {
        name: "HomePage.vue",
        components: {
            HomePageHeader,
            HomePageFooter,
            VueDocsSection, RapidIntegrationSection, UserDisplaySection, DashboardSection, InfoCards}
    }
</script>

<style scoped>
    section {
        padding-top: 1rem;
    }
</style>
