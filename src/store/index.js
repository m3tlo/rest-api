import Vue from "vue";
import Vuex from "vuex";
import info from './info'
import auth from './auth'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    info,
    auth,
  },
});
