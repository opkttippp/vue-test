<template>
  <form class="form" @submit.prevent>

    <h3>Добавить отзыв</h3>
    <input-form v-model="review.title">
      Enter your name
    </input-form>
    <input-form v-model="review.body">
      Enter review
    </input-form>
    <button-form @click="createRev">
      Оставить
    </button-form>

    <!--    -->
    <!--    <input class="input" v-model="review.title" type="text" placeholder="введите тему">-->
    <!--    <input class="input" v-model="review.description" type="text" placeholder="введите текст">-->
    <!--    <button class="btn btn-success" @click.prevent="createRev">Оставить</button>-->
    <!--    v-model:value="review.description"-->
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