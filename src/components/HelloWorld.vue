<template>

  <br>
<!--  <span :class="{active:isChange}">1234</span>-->
<!--  <br>-->
<!--  <button type="button" @click="this.$emit('increment')" class="btn btn-primary"> connect </button>-->
<!--  <br>-->
<!--  <span :style="{ background: connect ? 'blue': 'red'}" v-on:click="open"> Array changes!!</span>-->
<!--  <br>-->
<!--  &lt;!&ndash;  <span > {{ force.len }}</span>&ndash;&gt;-->
<!--  <br>-->
<!--  <input type="text" v-model="lister"/>-->
<!--  <br>-->
<!--  <button type="button" @click="startAdd" class="btn btn-primary"> startAdd</button>-->
<!--  <br>-->
<!--  <button type="button" @click="endAdd" class="btn btn-primary"> endAdd</button>-->
<!--  <br>-->
<!--  <button type="button" @click="startDel" class="btn btn-primary"> startDel</button>-->
<!--  <br>-->
<!--  <button type="button" @click="endDel" class="btn btn-primary"> endDel</button>-->
  <button type="button" @click="show = !show" class="btn btn-primary"> click </button>
  <br>
  <transition name="fade" v-if="show"> Hello!! </transition>

<!--  <li v-for="(key, value) in force" :key="key">-->
<!--    <a class="" href="" @click.prevent="fun(value)">-->
<!--      &lt;!&ndash;    <a class="" href="" @click.prevent="fun(value)" v-if="key < range">&ndash;&gt;-->
<!--      {{ key }}-->
<!--    </a>-->
<!--  </li>-->
<!--  <input type="range" v-model="range" min="0" max="6">-->
<!--  <span>{{ range }}</span>-->


</template>
<script>

let ttt = {
  template: '<h2>Hello!!</h2>'
};

import axios from "axios";

export default {
  name: 'HelloWorld',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    'my-temp' : ttt
  },
  props: {
    msg: String
  },

  data: () => {
    return {
      search: '',
      // force: {
      //   'pepsi': 1,
      //   'cola': 2,
      //   'beer': 3,
      //   'vodka': 4,
      //   'viski': 5,
      // },
      force: [
        'pepsi',
        'cola',
        'beer',
        'vodka',
        'viski',
      ],
      connect: false,
      range: 5,
      lister: '',
      isChange: false,
      show: true,

    }
  },
  watch: {
    force: {
      handler() {
        this.isChange = true
      }, deep: true
    }
  },
  computed: {
    result: function () {
      return this.lister.split(' ',)
    }
  }
  ,
  // created() {
  //     axios.get('https://jsonplaceholder.typicode.com/posts')
  //         .then(res => {
  //           this.connect = true
  //           console.log(res);
  //         }).catch(e => {
  //       console.log(e.error);
  //     })
  // },
  methods: {
    fun(item) {
      alert('page № ' + item);
    },
    startAdd() {
      this.force.unshift(this.lister)
      this.lister = ''
    },
    endAdd() {
      this.force.push(this.lister)
      this.lister = ''
    },
    startDel() {
      this.force.shift();
      this.lister = ''
    },
    endDel() {
      this.force.pop();
      this.lister = ''
    },
    open() {
      axios.get('https://jsonplaceholder.typicode.com/posts')
          .then( () => {
            this.connect = true
            // console.log(res);
          }).catch(e => {
        console.log(e.error);
      })
    }
  },
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  /*Свойство анимаций, принимающее параметр изменения, время*/
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.active {
  background-color: cadetblue;
}
</style>
