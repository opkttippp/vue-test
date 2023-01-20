<template>
  <div class="review">
    <div>
      <p>{{ review.id }}</p>
      <p>{{ review.title }}</p>
      <p>{{ review.body }}</p>
    </div>
    <div>
      <h4>Likes - {{ $store.getters.getLikes(review.id) }}
<!--      <h4>Likes - {{ }}-->
        <button-form @click="$store.dispatch('incrementLikes', review.id)"> Like </button-form>
        <button-form @click="$store.dispatch('decrementLikes', review.id)"> Dislike </button-form>
      </h4>
    </div>
    <div>
      <button-form @click="$emit('remove', review)">Delete</button-form>
      <button-form @click="$emit('edit', review)">Edit</button-form>
      <button-form @click="$router.push(`/reviews/${review.id}`)">Open</button-form>
    </div>
  </div>

</template>

<script>

export default {
  name: "ReviewItem",
  props: {
    review: {
      type: Object
    }
  }
}
</script>

<style scoped>

.review {
  margin: 5px;
  padding: 10px;
  border: 2px solid darkolivegreen;
}
</style>