import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(Vuex);

new Vue({
  el: '#app',
  router: router,
  store: store,
  template: '<App/>',
  components: { App: App }
});

//# sourceMappingURL=main-compiled.js.map