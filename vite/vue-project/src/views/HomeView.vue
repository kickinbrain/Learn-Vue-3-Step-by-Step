<script setup>
  import TabbableTextarea from "../components/TabbableTextarea.vue";

  import { ref } from "vue";

  let comment = ref('Test value');

</script>

<template>
  <main>
    <form>
      <TabbableTextarea v-model="comment" style="height: 300px; width: 100%" />
    </form>
  </main>
</template>