import {createApp} from "vue";

import store from './store/store';
import router from "@/router/router";
import axios from "axios";
import App from '@/App.vue';
import BootstrapVue from 'bootstrap-vue-next';
import 'bootstrap/dist/css/bootstrap.css'


import components from '@/components/UI' ;
import directive from '@/directives'

const app = createApp(App)

components.forEach(component => {
    app.component(component.name,component)
})

directive.forEach(directive => {
    app.directive(directive.name, directive)
})
// App.prototype.axios = axios;

app.use(BootstrapVue)
app.use(store)
app.use(router)
app.config.globalProperties.axios = axios
app.mount('#app')

