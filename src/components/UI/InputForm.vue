<template>
  <slot></slot>
  <input :value="modelValue" @input="updateInput" class="input" type="text" placeholder="">
</template>

<script>
export default {
  name: "input-form",
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput(e) {
      this.$emit('update:modelValue', e.target.value);
    }
  }
}
</script>

<style scoped>

.input {
  margin: 5px;
  padding: 10px;
}
</style>