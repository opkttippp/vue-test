<template>
  <!--  <el-menu-->
  <!--      class="el-menu-demo"-->
  <!--      mode="horizontal"-->
  <!--      background-color="#545c64"-->
  <!--      text-color="#fff"-->
  <!--      active-text-color="#ffd04b"-->
  <!--      @select="handleSelect"-->
  <!--  >-->
  <!--    <el-menu-item index="1">Processing Center</el-menu-item>-->
  <!--    <el-sub-menu index="2">-->
  <!--      <template #title>Workspace</template>-->
  <!--      <el-menu-item index="2-1">item one</el-menu-item>-->
  <!--      <el-menu-item index="2-2">item two</el-menu-item>-->
  <!--      <el-menu-item index="2-3">item three</el-menu-item>-->
  <!--      <el-sub-menu index="2-4">-->
  <!--        <template #title>item four</template>-->
  <!--        <el-menu-item index="2-4-1">item one</el-menu-item>-->
  <!--        <el-menu-item index="2-4-2">item two</el-menu-item>-->
  <!--        <el-menu-item index="2-4-3">item three</el-menu-item>-->
  <!--      </el-sub-menu>-->
  <!--    </el-sub-menu>-->
  <!--    <el-menu-item index="3" disabled>Info</el-menu-item>-->
  <!--    <el-menu-item index="4">Orders</el-menu-item>-->
  <!--  </el-menu>-->

  <!--  <div class="common-layout">-->
  <!--    <el-container>-->
  <!--      <el-aside width="200px">Aside</el-aside>-->
  <!--      <el-container>-->
  <!--        <el-header>Header</el-header>-->
  <!--        <el-main>-->

  <!--          <el-row :gutter="10">-->
  <!--            <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6"-->
  <!--            >-->
  <!--              <div class="grid-content ep-bg-purple"-->
  <!--              />-->
  <!--            </el-col>-->
  <!--            <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6"-->
  <!--            >-->
  <!--              <div class="grid-content ep-bg-purple-light"-->
  <!--              />-->
  <!--            </el-col>-->
  <!--            <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6"-->
  <!--            >-->
  <!--              <div class="grid-content ep-bg-purple"-->
  <!--              />-->
  <!--            </el-col>-->
  <!--            <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6"-->
  <!--            >-->
  <!--              <div class="grid-content ep-bg-purple-light"-->
  <!--              />-->
  <!--            </el-col>-->
  <!--          </el-row>-->



  <!--        </el-main>-->
  <!--        <el-footer>Footer</el-footer>-->
  <!--      </el-container>-->
  <!--    </el-container>-->
  <!--  </div>-->




  <!--  <ul class="d-flex justify-content-center">-->
  <!--    <li class="btn btn-success nav-item">-->
  <!--      <router-link class="nav-link router-link" to="/">Back</router-link>-->
  <!--    </li>-->
  <!--    <li class="btn btn-success nav-item menu">-->
  <!--      <router-link class="nav-link router-link" :to="{name: 'show-product', params: {id: products.id}}">Show</router-link>-->
  <!--    </li>-->
  <!--    <li class="btn btn-success nav-item menu">-->
  <!--      <router-link class="nav-link router-link" :to="{name: 'char-product', params: {id: products.id}}">Character</router-link>-->
  <!--    </li>-->
  <!--    <li class="btn btn-success nav-item menu">-->
  <!--      <router-link class="nav-link router-link" to="/review">Review</router-link>-->
  <!--    </li>-->
  <!--  </ul>-->



  <!--  <el-button type="primary" style="margin-left: 16px" @click="drawer = !drawer">-->
  <!--    open-->
  <!--  </el-button>-->

  <!--  <el-drawer v-model="drawer" title="I am the title" :with-header="false">-->
  <!--    <span>Hi there!</span>-->
  <!--  </el-drawer>-->

  <!--  <router-view></router-view>-->

  <!--  <div>{{count}}</div>-->
  <!--<button type="button" class="btn btn-success" @click="count++">ADD</button>-->
  <!--<button type="button" class="btn btn-success" @click="count--">Del</button>-->

  <div>
    <h2>Show</h2>
    <p>Count -
      <button type="button" class="btn btn-success m-2">{{ counter }}</button>
    </p>
    <button class="btn btn-primary m-2" type="button" @click="increment"> +</button>
    <button class="btn btn-primary m-2" type="button" @click="decrement"> -</button>
    <button class="btn btn-primary m-2" type="button" @click="asyncIncrement">asyncIncrement</button>

  </div>

  <ul>
    <p>History - list {{ historyLength }}</p>
    <button type="button" class="btn btn-danger" @click="delet">Delete Histor</button>
    <li v-for="(action, index) in history" :key="index">{{ action }}</li>
  </ul>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  name: "show-product",
  props: {},
  data: () => {
    return {
      count: 0,
      history: []
    }
  },
  methods: {
    ...mapActions([
                 'increment',
                 'decrement',
                 'asyncIncrement',
               ]),

    //   increment() {
    //     // this.$store.state.history.push('Add +1');
    //     // this.$store.commit('increment')
    //     this.$store.dispatch('increment')
    //   },
    //   decrement() {
    //     this.$store.dispatch('decrement')
    //   },
    //   asyncIncrement() {
    //     this.$store.dispatch('asyncIncrement')
    //   },
    delet() {
      this.$store.state.history.splice(0);
    }
  },
  computed: {
    counter() {
      return this.$store.getters.counter
    },
    // eslint-disable-next-line vue/no-dupe-keys
    history() {
      return this.$store.getters.history
    },
    historyLength() {
      return this.$store.getters.historyLength
    },
  }
}
</script>

<style scoped>

</style>