<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Loader from './components/Loader.vue';
import Title from './components/Title.vue';
import Tal from './components/Tal.vue';
import Objects from './components/Objects.vue';
let isLoading = ref(true);



onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
});


</script>

<template>
  <Loader v-if="isLoading" />
  <Title v-else></Title>
  <Tal />
  <Objects />
</template>

<style scoped></style>
