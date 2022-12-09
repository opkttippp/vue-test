<template>
  <transition-group name="list">
    <review-item
        v-for="review in reviews"
        :key="review.id"
        :review="review"
        @remove="$emit('remove', review)"
    >
    </review-item>
  </transition-group>
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
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.4s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.list-move {
  transition: transform 0.4s ease;
}
</style>