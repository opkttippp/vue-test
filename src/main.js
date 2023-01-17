import {createApp} from "vue";

import store from './store/store';
import router from "./router/router";
import axios from "axios";
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue-3';
import 'bootstrap/dist/css/bootstrap.css'


import components from '@/components/UI' ;

const app = createApp(App)

components.forEach(component => {
    app.component(component.name,component)
})

app.use(BootstrapVue)
app.use(store)
app.use(router)
app.config.globalProperties.axios = axios
app.mount('#app')

