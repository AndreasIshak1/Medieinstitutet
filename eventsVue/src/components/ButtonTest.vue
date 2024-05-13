<script setup lang="ts">
import { ref } from 'vue';


function isClicked() {
  console.log("Cliked");
  console.log(lastName);
  console.log(firstName);
}


const stateChange = ref("bombaclot");

function hovered() {
  console.log("hovered");
  stateChange.value = "hej";
}
// function unhovered() {
//   console.log("hovered");
//   stateChange.value = "bombaclot";
// }

function boomhovered() {
  if (stateChange.value == "bombaclot") {
    stateChange.value = "hej"
  } else {
    stateChange.value = "bombaclot"
  }
}

const lastName = ref("");
const firstName = ref("");

</script>

<template>
  <form @submit.prevent>
    <input v-model="firstName" type="text" placeholder="firstname">
    <input v-model="lastName" type="text" placeholder="lastname">
    <!-- <button @click="isClicked">Hej</button> -->
    <!-- <button @mouseover="hovered" @mouseleave="unhovered">{{ stateChange }} </button> -->
    <button @mouseover="boomhovered" @mouseleave="boomhovered">{{ stateChange }}</button>
  </form>
</template>

<style scoped></style>
