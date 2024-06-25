<script setup>
// @ is an alias to /src
import MainView from "@/components/mainpage/MainView.vue";
import AboutView from "@/components/mainpage/AboutView.vue";
import ResumeView from "@/components/mainpage/ResumeView.vue";
import WorkView from "@/components/mainpage/WorkView.vue";
import ContactView from "@/components/mainpage/ContactView.vue";
</script>

<template>
  <main>
    <MainView/>
    <AboutView/>
    <ResumeView/>
    <WorkView/>
    <ContactView/>
  </main>
</template>