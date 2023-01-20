<template>
  <div class="select_item">
    <button-form @click="showForm">Оставить отзыв</button-form>
        <select-item
            :model-value="sortValue"
            @update:model-value="setSortValue"
            :options="sortSelect"
        >
        </select-item>
  </div>

    <input-form
        :model-value="searchList"
        @update:model-value="setSearchList"
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
import { mapState, mapGetters, mapActions, mapMutations} from 'vuex'

export default {
  name: 'user-reviews',
  components: {
    FormReview,
    ListReview,
    SelectItem
  },
  data() {
    return {
      show: false,
    }
  },
  watch: {},
  computed: {
    ...mapState({
      title: state => state.reviews.title,
      description: state => state.reviews.description,
      reviews:  state => state.reviews.reviews,
      upload:  state => state.reviews.upload,
      count:  state => state.reviews.count,
      sortValue:  state => state.reviews.sortValue,
      searchList:  state => state.reviews.searchList,
      sortSelect:  state => state.reviews.sortSelect,
      page:  state => state.reviews.page,
      limit:  state => state.reviews.limit,
      totalPage:  state => state.reviews.totalPage
    }),
    ...mapGetters({
      sortRev: 'reviews/sortRev',
      searchListReview: 'reviews/searchListReview',
    })
  },
  mounted() {
    this.fetchReview();
  },
  methods: {
    ...mapActions({
      fetchReview: 'reviews/fetchReview',
      loadReview: 'reviews/loadReview'
    }),
    ...mapMutations({
      setPage: 'reviews/setPage',
      setSearchList: 'reviews/setSearchList',
      setSortValue: 'reviews/setSortValue',
      removeReview: 'reviews/removeReview'
    }),
    createRev(review) {
      this.reviews.push(review);
      this.show = false;
    },
    showForm() {
      this.show = true;
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
