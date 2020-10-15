const getDefaultState = () => {
  return {
    productName: '',
    category: '',
    monthPrice: '',
    yearPrice: '',
    title: '',
    contents: '',
  }
}
const state = getDefaultState();

const getters ={
}

const mutations = {
  defaultInfo(state, payload) {
    state.productName = payload.productName
    state.category = payload.category;
  },
  priceInfo(state, payload) {
    state.monthPrice = payload.monthPrice;
    state.yearPrice = payload.yearPrice;
  },
  addInfo(state, payload) {
    state.title = payload.title;
    state.contents = payload.contents;
  },
  resetState(state) {
    Object.assign(state, getDefaultState())
  }
}

const actions = {
}

export default {
  state,
  getters,
  mutations,
  actions,
}