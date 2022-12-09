<template>
  <h2>Review</h2>
  <ul class="d-flex justify-content-around">
    <li class="btn btn-success nav-item">
      <router-link class="nav-link router-link" to="/review/home">Home</router-link>
    </li>
    <li class="btn btn-success nav-item menu">
      <router-link class="nav-link router-link" :to="{name: 'children-product'}">Children</router-link>
    </li>
  </ul>

  <router-view></router-view>

</template>
<script>

export default {
  name: "review-product",

}
</script>

<style scoped>

</style>