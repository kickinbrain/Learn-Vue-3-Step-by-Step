<script setup>
  import { ref, watch } from "vue";
  import { useStorage } from "../composables/useStorage";



  let food = useStorage('food', 'salad')
  let age = useStorage('age')



</script>

<template>
  <main>
    <p style="margin-bottom: 20px">
      What is your favorite food? <input type="text" class="mb-2" v-model="food">
    </p>
    <p>
      How old are you <input type="text" v-model="age">
    </p>
  </main>
</template>