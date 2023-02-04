<script setup>

defineProps({
  modelValue: String,
})
function onKeyDown(e){

  let t = e.target;
  let val = t.value,
      start = t.selectionStart,
      end = t.selectionEnd;

  t.value = val.substring(0, start) + "\t" + val.substring(end);

  t.selectionStart = t.selectionEnd = start + 1;
}

let emit = defineEmits(['update:modelValue']);

</script>

<template>
  <textarea @key="emit('update:modelValue', e.target.value)" v-text="modelValue" @keydown.tab.prevent="onKeyDown" style="width: 100%"></textarea>
</template>
