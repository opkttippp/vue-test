<template>
  <div class="app">
    <div class="select_item">
      <button-form @click="showForm">Оставить отзыв</button-form>
      <select-item
          v-model="modelValue"
          :options="sortSelect"
      >
      </select-item>
    </div>

    <review-modal v-model:show="show">
      <form-review @create="createRev"></form-review>
    </review-modal>
    <p>Колличество отзывов - {{ reviews.length }}</p>

    <list-review v-if="reviews.length > 0"
                 :reviews="reviews"
                 @remove="removeReview"
    >
    </list-review>

    <div class="app" v-else style="border: 2px solid darkviolet">
      Отзывов нет
    </div>
    <div v-if="upload">
      <div class="clearfix">
        <b-spinner class="float-right" label="Floated Right"></b-spinner>
      </div>
    </div>
  </div>


</template>


<script>
// import HelloWorld from './components/HelloWorld.vue'

import FormReview from './components/FormReview.vue'
import ListReview from './components/ListReview.vue'
import SelectItem from './components/UI/SelectItem'
import axios from "axios";


export default {
  name: 'App',
  components: {
    FormReview,
    ListReview,
    SelectItem
  },
  data() {
    return {
      title: '',
      description: '',
      reviews: [],
      show: false,
      upload: false,
      count: Number,
      modelValue: '',
      sortSelect: [
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По содержанию'},
      ]
    }
  },
  watch: {
    modelValue(value)
    {
      // console.log(newValue);
      this.reviews.sort( (rev1, rev2) => {
        console.log(rev1[value]);
        return rev1[value]?.localeCompare(rev2[value])
      })
    }
  }
  ,
  mounted() {
    this.fetchReview();
  },
  methods: {
    createRev(review) {
      this.reviews.push(review);
      this.show = false;
    },
    removeReview(review) {
      this.reviews = this.reviews.filter(p => p.id !== review.id)
    },
    showForm() {
      this.show = true
    },
    async fetchReview() {
      this.upload = true
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=7');
      try {
        this.reviews = res.data;
      } catch (e) {
        alert('Ошибка подключения' + e.message);
      } finally {
        this.upload = false
      }
    }
  }
}
</script>

<style lang="scss">
@import 'assets/style';
//body.dark {
//  /* custom dark bg color */
//  --el-bg-color: #626aef;
//}
//
//$color: lightslategrey;
//.el-container {
//  //background-color: $color;
//}
//
//.el-aside {
//  border: #030205 1px solid;
//}
//
//.el-main {
//  border: #030205 1px solid;
//}
//
//.el-row {
//  margin-bottom: 20px;
//}
//
//.el-row:last-child {
//  margin-bottom: 0;
//}
//
//.el-col {
//  border-radius: 4px;
//}
//
//.grid-content {
//  border-radius: 4px;
//  border: #030205 1px solid;
//  min-height: 36px;
//}
.select_item {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
  box-sizing: border-box;
  height: 30px;
}
</style>
