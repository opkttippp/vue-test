<template>
  <div class="app">
    <navbar-menu></navbar-menu>
    <router-view></router-view>
  </div>
</template>

<script>

/*document.addEventListener('DOMContentLoaded', function () {

  let surename = {
    name: 'Guchik',
    aje: 36
  }

  let jsSurename = JSON.stringify(surename);


  localStorage.setItem('name', 'Ivanchenko');
  localStorage.setItem('surename', jsSurename);
  sessionStorage.setItem('name', 'Petrovich');

  let dora =  JSON.parse(localStorage.getItem('surename'));

})*/


export default {
  name: 'App'
}
</script>
<style lang="scss">
</style>
