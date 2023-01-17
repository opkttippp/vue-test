<template>
  <b-navbar type="light" >
    <b-navbar-nav>
      <b-nav-item to="/">Home</b-nav-item>
      <b-nav-item to="/about">About</b-nav-item>
      <b-nav-item to="/reviews">Reviews</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  name: "navbar-menu"
}
</script>

<style scoped>
.navbar {
  background-color: lightslategrey;
  margin: 30px 10px;
  box-shadow: 4px 2px 2px grey;
}

</style>