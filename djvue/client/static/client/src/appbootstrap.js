import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';


Vue.use(VueRouter);
Vue.use(Vuex)


import routes from './routes';

import AppStore from "./store";

const store = new Vuex.Store(AppStore);
const router = new VueRouter({
    mode: 'history',
    routes
});

export {Vue, store, router}
