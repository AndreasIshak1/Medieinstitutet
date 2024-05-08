<script setup lang="ts">
class Person {
  constructor(public age: number) {
  }

}
const persons = new Person(1);
const persons2 = new Person(3);
const persons3 = new Person(1);
const persons4 = new Person(7);

const personList: Person[] = [
  persons,
  persons2,
  persons3,
  persons4
];


</script>

<template>
  <ul>
    <li v-for="person in personList">{{ person.age }}</li>
  </ul>

</template>



<style scoped></style>