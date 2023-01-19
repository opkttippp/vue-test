<template>
  <div class="select_item">
    <button-form @click="showForm">Оставить отзыв</button-form>
    <select-item
        v-model="sortValue"
        :options="sortSelect"
    >
    </select-item>
  </div>

  <input-form
      v-model="searchList"
      placeholder="Search..."
      v-focus
  >

  </input-form>

  <review-modal v-model:show="show">
    <form-review @create="createRev"></form-review>
  </review-modal>

  <p>Колличество отзывов - {{ reviews.length }}</p>
  <list-review v-if="reviews.length > 0"
               :reviews="searchListReview"
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

  <div v-intersection="loadReview" class="observer"></div>

</template>

<script>

import FormReview from '../components/FormReview.vue'
import ListReview from '../components/ListReview.vue'
import SelectItem from '../components/UI/SelectItem'
import axios from "axios";


export default {
  name: 'user-reviews',
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
      sortValue: '',
      searchList: '',
      sortSelect: [
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По содержанию'},
      ],
      page: 1,
      limit: 10,
      totalPage: 0
    }
  },
  watch: {},
  computed: {
    sortRev() {
      return [...this.reviews].sort((rev1, rev2) => rev1[this.sortValue]?.localeCompare(rev2[this.sortValue]))
    },
    searchListReview() {
      return this.sortRev.filter(rev => rev.title.toLowerCase().includes(this.searchList.toLowerCase()))
    }
  },
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
      this.show = true;
    },
    async fetchReview() {
      this.upload = true;
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        params: {
          _page: this.page,
          _limit: this.limit,
        }
      });
      try {
        this.reviews = res.data;
        this.totalPage = Math.ceil(res.headers['x-total-count'] / this.limit);
      } catch (e) {
        alert('Ошибка подключения' + e.message);
      } finally {
        this.upload = false;
      }
    },
    async loadReview() {
      this.page += 1;
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        params: {
          _page: this.page,
          _limit: this.limit,
        }
      });
      try {
        this.totalPage = Math.ceil(res.headers['x-total-count'] / this.limit);
        this.reviews = [...this.reviews, ...res.data]
      } catch (e) {
        alert('Ошибка подключения' + e.message);
      }
    }
  }
}

</script>

<style lang="scss">
@import '../assets/style';

.select_item {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
  box-sizing: border-box;
  height: 30px;
}

.page__wraper {
  display: flex;
  margin-top: 15px;
}

.page {
  border: 1px solid black;
  padding: 10px;
}

.current-page {
  border: 2px solid teal;
}

</style>
