<template>
  <button class="btn btn-success">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "button-form"
}
</script>

<style scoped>

.btn {
  align-self: flex-end;
  margin: 10px;
}
</style>