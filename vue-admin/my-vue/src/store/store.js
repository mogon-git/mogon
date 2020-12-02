import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);


const Store = new Vuex.Store({
  state: {
    axiosList: []
  },
  mutations: {
    initList(state, data) {
      state.axiosList = data
    }
  }
})
export default Store
