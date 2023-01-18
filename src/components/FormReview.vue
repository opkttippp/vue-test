<template>
  <form class="form" @submit.prevent>

    <h3>ADD Review</h3>
    <input-form v-focus v-model="review.title" placeholder="Enter your name...">
    </input-form>
    <input-form v-model="review.body" placeholder="Enter review...">
    </input-form>
    <button-form @click="createRev">Оставить</button-form>

  </form>
</template>

<script>

export default {
  name: "form-review",
  data() {
    return {
      review: {
        title: '',
        body: '',
      }
    }
  },
  watch: {
    // review: {
    //   handler(value) {
    //     console.log(value)
    //   },
    //   deep: true
    // },
  },
  methods: {
    createRev() {
      this.review.id = Date.now();
      this.$emit('create', this.review);
      this.review = {
        title: '',
        body: '',
      }
    }
  }
}
</script>

<style scoped>

.form {
  display: flex;
  flex-direction: column;
}
</style>