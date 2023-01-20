import {createStore} from "vuex"
import {reviewsModule} from "@/store/reviewsModule";
// let cart = window.localStorage.getItem('cart');

const store = createStore(({
    modules: {
        reviews: reviewsModule
    },
/*    state: {
        likes: []
    },
    mutations: {
        SET_LIKE_STATE(state, id) {
            if (state.likes.length) {
                let isLikes = false;
                state.likes.map(function (item) {
                    if (item.id === id) {
                        item.amount++;
                        isLikes = true;
                    }
                })
                if (!isLikes) {
                    state.likes.push({
                        id,
                        amount: 1,
                    });
                }
            } else {
                state.likes.push({
                    id,
                    amount: 1,
                });
            }
        },
        DELETE_LIKE_STATE(state, id) {

                state.likes.map(function (item) {
                    if (item.id === id && item.amount > 0) {
                        item.amount--;
                    }
                })

        },
    },
    getters: {
        getLikes: (state) => (id) => {
            let result = state.likes.find(likes => likes.id === id).amount ?? 0;
            if (result)
                result = result.amount
            return result
        },
    },*/
/*    actions: {
        incrementLikes({commit}, id) {
            commit('SET_LIKE_STATE', id);
        },
        decrementLikes({commit}, id) {
            commit('DELETE_LIKE_STATE', id);
        }
    },*/
}))
// const store = createStore(({
//     state: {
//         counter: 0,
//         history: []
//     },
//     actions: {
//         increment({commit}) {
//             commit('increment')
//         },
//         decrement({commit}) {
//             commit('decrement')
//         },
//         asyncIncrement({commit}) {
//             setTimeout(() => {
//                 commit('asyncIncrement')
//             }, 1000)
//
//         }
//     },
//     getters: {
//         counter: (state) => state.counter,
//         history: (state) => state.history,
//         historyLength: (state) => state.history.length,
//     },
//     mutations: {
//         increment(state) {
//             state.counter++
//             state.history.push('Add +1');
//         },
//         decrement(state) {
//             state.counter--
//             state.history.push('Slice -1');
//         },
//         asyncIncrement(state) {
//                 state.counter++
//                 state.history.push('Add async +1');
//         },
//         delet(state) {
//             state.history.splice(0);
//         }
//     }
// }))
// const store = createStore({
//     state: {
//     backendURL: "http://larav.local/api",
//     cartProducts: cart ? JSON.parse(cart) : [],
//     products: [],
//     user: {
//         type: Object
//     },
//     review: []
// },
// mutations: {
//     SET_PRODUCTS_STATE: (state, products) => {
//         state.products = products
//     },
//     SET_USER_STATE: (state, user) => {
//         state.user = user
//     },
//     SET_REVIEW_STATE: (state, review) => {
//         state.review = review
//     },
//
//     saveCart(state) {
//         window.localStorage.setItem('cart', JSON.stringify(state.cartProducts));
//     },
//     addProductToCart(state, product) {
//         if (state.cartProducts.length) {
//             let IsProductExist = false;
//             state.cartProducts.map(function (item) {
//                 if (item.id === product.id) {
//                     IsProductExist = true;
//                     item.amount++;
//                 }
//             })
//             if (!IsProductExist) {
//                 state.cartProducts.push({
//                     ...product,
//                     amount: 1,
//                 });
//             }
//             this.commit('saveCart');
//         } else {
//             state.cartProducts.push({
//                 ...product,
//                 amount: 1,
//             });
//             this.commit('saveCart');
//         }
//     },
//     incrementProductAmount(state, index) {
//         const product = state.cartProducts[index];
//         state.cartProducts.splice(index, 1, {
//             ...product,
//             amount: product.amount + 1,
//         });
//         this.commit('saveCart');
//     },
//     decrementProductAmount(state, index) {
//         const product = state.cartProducts[index];
//         state.cartProducts.splice(index, 1, {
//             ...product,
//             amount: product.amount - 1,
//         });
//         this.commit('saveCart');
//     },
//     removeProductFromCart(state, index) {
//         state.cartProducts.splice(index, 1);
//         this.commit('saveCart');
//     },
//     removeOrder(state) {
//         state.cartProducts = [];
//         this.commit('saveCart');
//     }
// },
// actions: {
//     GET_PRODUCTS({commit}) {
//         return axios('http://larav.local/api/products', {method: "GET"})
//             .then(products => {
//                 commit('SET_PRODUCTS_STATE', products.data.data);
//                 // console.log(products.data.data)
//                 return products.data.data;
//             }).catch((error) => {
//                 console.log(error)
//             });
//     },
//     GET_USER({commit}) {
//         return  axios('http://larav.local/api/auth', {method: "GET"})
//             .then(user => {
//                 commit('SET_USER_STATE', user.data);
//                 console.log(user.data);
//                 return user.data;
//             }).catch((error) => {
//                 console.log(error)
//                 // return error
//             });
//     },
//     GET_REVIEW({commit}) {
//         return axios('http://larav.local/api/review', {method: "GET"})
//             .then(review => {
//                 commit('SET_REVIEW_STATE', review.data.data);
//                 // console.log(review.data.data)
//                 return review.data.data;
//             }).catch((error) => {
//                 console.log(error)
//             });
//     }
// },
// getters: {
//     GET_SERVER_URL: state => {
//         return state.backendURL
//     },
//     PRODUCTS(state) {
//         return state.products;
//     },
//     REVIEW(state) {
//         return state.review;
//     },
//     USER(state) {
//         return state.user;
//     },
//     totalAmount: (state) => (
//         state.cartProducts.reduce((total, {amount}) => total + amount, 0)
//     ),
//     totalPrice: (state) => (
//         state.cartProducts.reduce(
//             (total, {price, amount}) =>
//                 total + (amount * price),
//             0
//         ).toFixed(2)
//     ),
//     cartIsEmpty: (state) => !state.cartProducts.length,
//
//     getProductById: (state) => (id) => {
//         return state.products.find(product => product.id === id)
//     },
//
//     getReviewById: (state) => (id) => {
//         return state.review.filter(review => review.product_id === id)
//     },
//
//     getUser: (state) => {
//         return state.user
//     },
//     },
// });

export default store;