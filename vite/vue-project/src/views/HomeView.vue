<script>
  export default {
    methods: {
      flash(message){
        alert(message)
      }
    }
  }
</script>

<template>
  <main>
    <p>
      <button @click="flash('It Works')">Click Me</button>
    </p>
  </main>
</template>
