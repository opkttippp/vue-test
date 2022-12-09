<template>
  <div class="form" v-if="show" @click.self="this.$emit('closeModal')">
    <div class="content">
      <button type="button" class="btn-close shadow-none" aria-label="Close" @click="this.$emit('closeModal')">
      </button>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "review-modal",
  props: {
    show: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.form {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  position: fixed;
}

.content {
  margin: auto;
  background: white;
  border-radius: 12px;
  min-height: 50%;
  min-width: 50%;
  padding: 38px;
}
</style>