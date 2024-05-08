<script setup lang ="ts">
import { ref } from 'vue';

const string = ref("hej");
string.value = "bombaclot";
</script>
<template>
  <h1>{{ string }}</h1>
</template>

<style scoped>
  
</style>