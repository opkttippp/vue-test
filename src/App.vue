<template>
  <div class="app">
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
    >
    </input-form>
    <review-modal v-model:show="show" @closeModal="closeModal()">
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


        <div class="page__wraper">
          <div v-for="pageNumber in totalPage"
               :key="pageNumber"
               class="page"
               :class="{'current-page': page === pageNumber}"
               @click="changeNumber(pageNumber)"
          >
            {{pageNumber}}
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
  watch: {
    page() {
       this.fetchReview();
    }
  },
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
    closeModal() {
      this.show = false;
    },
    changeNumber(pageNumber) {
      this.page = pageNumber;
    }
  }
}
//
// // let result = new Promise((resolve, reject)=>{
// //   setTimeout(() => resolve('Hello word!!!') ,100);
// //   setTimeout(() => reject(new Error('exit')) ,800);
// // });
// // result.then(
// //     result => console.log(result))
// //     .catch(error => console.error(error));
// document.addEventListener('DOMContentLoaded', function () {
//
//
//  //  function User(name) {
//  //    if(!(this instanceof User)){
//  //      return new User(name)
//  //    }
//  //    this.name = name;
//  //  }
//  //  User.prototype.say = function () {
//  //    document.write(`Hello ${this.name} `);
//  //  }
//  //
//  // let user = new User('Lenka');
//  //  user.say();
//
// //   let data = new Date();
// //   document.write(`Date -  ${data} `);
// //
// //   let str1 = 'string1';
// //   let str2 = new String('string2');
// // function list(str) {
// //   document.write(`<br> ${str} `);
// //   document.write(typeof str);
// // }
// // list(str1);
// // list(str2);
// //   bwc.tab.2150.l3dXWZXLV7DggoWytq.1673794418114
// //   1670600559390
// //   1673795141500
//
//   // alert( new Date().getTime() );
//
//   function User(name) {
//     this.name = name;
//     let privateName = 'private';
//     this.publicName = 'public';
//     this.get = function (){
//       document.write(this.name + ' ' + privateName + ' ' + this.publicName + '<br>');
//     }
//   }
//   // User.prototype.get = function (){
//   //   document.write(this.name);
//   // }
//
//   let kola = new User('Kola');
//
//
//   kola.get();
//   document.write(kola.publicName);
//
//
// });


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
