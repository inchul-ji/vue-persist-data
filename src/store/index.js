import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import ProdDefaultInfo from '../pages/ProdDefaultInfo'
// import store from './index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productName: '',
    category: '',
    monthPrice: '',
    yearPrice: '',

  },
  getters: {

  },
  mutations: {
    defaultInfo(state, payload) {
      console.log('payload.productName: ', payload.productName);
      console.log('payload.category: ', payload.category);
      state.productName = payload.productName
      state.category = payload.category;
    }

  },
  actions: {

  },
  modules: {
    defaultInfo: ProdDefaultInfo,
    // store: store
  },
  plugins: [createPersistedState({
    // Module
    paths: ['defaultInfo']
  })],

})