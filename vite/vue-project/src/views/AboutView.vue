<script>
import flash from "../mixins/flash";

export default {
  mixins: [flash]
}
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="flash('It Works on About page')">Click Me</button>
  </div>
</template>