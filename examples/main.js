import Vue from 'vue';
import App from './App.vue';
import PUI from '../packages/index';
import router from './router/router';

Vue.use(PUI);

Vue.config.productionTip = false;

new Vue({
    router: router,
    render: (h) => h(App),
}).$mount('#app');
