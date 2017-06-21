import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';
import layoutComponents from './modules/layoutComponents';

Vue.use(Vuex);

var debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  actions: actions,
  getters: getters,
  modules: {
    layoutComponents: layoutComponents
  },
  strict: debug
});

//# sourceMappingURL=index-compiled.js.map