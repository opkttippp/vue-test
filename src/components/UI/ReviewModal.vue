<template>
  <div class="form" v-if="show" @click.self="this.$emit('update:show', false)">
    <div class="content">

      <button type="button" class="btn-close shadow-none" aria-label="Close" @click="this.$emit('update:show', false)">
      </button>

      <slot></slot>
    </div>
  </div>
</template>

<script>
import visMixin from "@/mixins/visMixin";

export default {
  name: "review-modal",
  mixins: [visMixin]
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

button {
  position: relative;
  right: -90%;
}
</style>