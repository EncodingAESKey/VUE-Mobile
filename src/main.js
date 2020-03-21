// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vant from 'vant';
import 'vant/lib/index.css';
import VueRouter from "vue-router";
import router from './router'
import './assets/reset.css';

Vue.use (VueRouter);
Vue.use (Vant);
Vue.config.productionTip = false;

new Vue ({
    el: '#app',
    router,
    components: {App},
    template: '<App/>'
});
