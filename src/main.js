import {createApp} from "vue";

import store from './store/store';
import router from "./routers/roter";
import axios from "axios";
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue-3';
import 'bootstrap/dist/css/bootstrap.css'


import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'
import typeScript from 'typescript';
import 'element-plus/theme-chalk/display.css';

import components from '@/components/UI' ;

const app = createApp(App)

components.forEach(component => {
    app.component(component.name,component)
})

app.use(BootstrapVue)
app.use(ElementPlus)
app.use(typeScript)
app.use(store)
app.use(router)
app.config.globalProperties.axios = axios
app.mount('#app')

