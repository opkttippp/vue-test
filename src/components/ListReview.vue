<template>
  <review-item
      v-for="review in reviews"
      :key="review.id"
      :review="review"
      @remove="$emit('remove', review)"
  >
  </review-item>
</template>

<script>

import ReviewItem from './ReviewItem.vue';

export default {
  name: "listReview",
  components: {
    ReviewItem,
    // HomePage
  },
  props: {
    reviews: {
      type: []
    }
  }
}
</script>

<style scoped>

</style>