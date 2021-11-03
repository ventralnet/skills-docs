<template>
    <div>
        <home-page-header />

        <home-page-footer />
    </div>
</template>

<script>
    import HomePageFooter from "./home/HomePageFooter";
    import HomePageHeader from "./home/HomePageHeader";
    export default {
        name: "HomePage.vue",
        components: {
            HomePageHeader,
            HomePageFooter,
        },
    };
</script>

<style scoped>
    section {
        padding-top: 1rem;
    }
</style>
