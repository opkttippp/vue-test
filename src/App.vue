<template>
  <div class="app">
        <navbar-menu></navbar-menu>
        <router-view></router-view>

  </div>
</template>

<script>
// import Velocity from "velocity-animate"

document.addEventListener('DOMContentLoaded', function () {
  // const ball = document.querySelector('.ball');
  // Velocity(ball, {translateY: '130px'},
  //     {easing: [1000, 20], duration: 2000});
//
//   console.log('one');
//   const pro = new Promise((resolve, reject) => {
//
//    setTimeout(() => resolve('Hello!!'), 2000)
//    setTimeout(() => reject(new Error('Error')), 1000)
//
//   });
//
//   pro.then((res) => console.log(res)).catch(error => console.log(error));
//
})


export default {
  name: 'App',
  data() {
    return {
    }
  },
  mounted() {
    this.show = false;
  }
}
</script>

<style lang="scss">

</style>
