import {Vue, store, router} from './appbootstrap';
import App from './App.vue';

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
});
