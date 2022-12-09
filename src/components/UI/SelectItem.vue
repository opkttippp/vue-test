<template>
  <select :value="modelValue" @change="updateSelect">
    <option value="" disabled>Выберите из списка</option>
    <option v-for="option in options"
            :key="option.value"
            :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "select-item",
  props: {
    modelValue: {
      type: String
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    updateSelect(e) {
      console.log(e.target.value);
      this.$emit('update:modelValue', e.target.value)
    }
  }
}
</script>

<style scoped>

</style>