import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
// import SecureLS from 'secure-ls'
import product from './product.js'

Vue.use(Vuex)

// const ls = new SecureLS({isCompression: false})

export default new Vuex.Store({
  state: {
  },
  getters: {

  },
  mutations: {
  },
  actions: {

  },
  modules: {
    product,
  },
  plugins: [createPersistedState({
    // key: 'product',
    paths: ['product'],
    // storage: {
    //   getItem: key => ls.get(key),
    //   setItem: (key, value) => ls.set(key, value),
    //   removeItem: key => ls.remove(key),
    // }
  })],



})