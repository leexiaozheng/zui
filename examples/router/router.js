import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/home',
            name: 'home',
            component: () => import('../views/home.vue')
        },
        {
            path: '/pictureSelect',
            name: 'pictureSelect',
            component: () => import('../docs/picture-select.md')
        },
        {
            path: '/dateSwitch',
            name: 'dateSwitch',
            component: () => import('../docs/date-switch.md')
        }
    ]
})