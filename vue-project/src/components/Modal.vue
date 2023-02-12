<script setup>
  defineProps({
    show: Boolean
  })
</script>

<template>
  <div v-if="show" class="modal-mask">
    <div class="modal-container">
      <div>
        <slot>default main content</slot>
      </div>

      <footer class="modal-footer">
          <slot name="footer">
            <button class="btn-red" @click="$emit('close')">Default Close</button>
          </slot>
      </footer>
    </div>
  </div>
</template>


<style>
  .modal-mask{
    position: fixed;
    inset: 0;
    background: rgba(0,0,0, .6);
    display: grid;
    place-items: center;
  }
  .modal-container{
    background: white;
    padding: 1rem;
    width: 75vw;
    max-width: 500px;
    border-radius: 7px;
  }

  .modal-footer{
    border-top: 1px solid #ddd;
    margin-top: 1rem;
    padding-top: 0.5rem;
    font-size: 0.8rem;
  }

  .btn-red{
    background-color: #f10000;
    padding: 0.25rem 0.75rem;
    border-radius: 5px;
    font-weight: bold;
    font-size: 0.75rem;
  }

  .btn-red:hover{
    background-color: #f10000;
  }
</style>