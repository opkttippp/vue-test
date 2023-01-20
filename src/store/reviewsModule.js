import axios from "axios";

export const reviewsModule = {
    state: () => ({
        title: '',
        description: '',
        reviews: [],
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
    }),
    mutations: {
        setReviews(state, reviews) {
            state.reviews = reviews;
        },
        setUpload(state, bool) {
            state.upload = bool
        },
        setPage(state, page) {
            state.page = page
        },
        setTotalPage(state, totalPage) {
            state.totalPages = totalPage
        },
        setSortValue(state, sortValue) {
            state.sortValue = sortValue
        },
        setSearchList(state, searchList) {
            state.searchList = searchList
        },
        removeReview(state, review) {
            state.reviews =  state.reviews.filter(p => p.id !== review.id);
        }
    },
    getters: {
        sortRev(state) {
            return [...state.reviews].sort((rev1, rev2) => rev1[state.sortValue]?.localeCompare(rev2[state.sortValue]))
        },
        searchListReview(state, getters) {
            return getters.sortRev.filter(rev => rev.title.toLowerCase().includes(state.searchList.toLowerCase()))
        }
    },
    actions: {
        async fetchReview({state, commit}) {
            commit('setUpload', true);
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params: {
                    _page: state.page,
                    _limit: state.limit,
                }
            });
            try {
                console.log('qwer');
                commit('setReviews', res.data);
                commit('setTotalPage', Math.ceil(res.headers['x-total-count'] / state.limit));
            } catch (e) {
                alert(e.message);
            } finally {
                commit('setUpload', false);
            }
        },
        async loadReview({state, commit}) {
            commit('setPage', state.page + 1);
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params: {
                    _page: state.page,
                    _limit: state.limit,
                }
            });
            try {
                commit('setTotalPage', Math.ceil(res.headers['x-total-count'] / state.limit));
                commit('setReviews', [...state.reviews, ...res.data]);
            } catch (e) {
                alert(e.message);
            }
        }
    },
    namespaced: true
}