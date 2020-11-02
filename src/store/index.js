import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: []
  },
  mutations: {
    setCategories(state, categories){
      state.categories = categories
    }
  },
  actions: {
    fetchCategories({commit}){
      axios.get('http://localhost:3000/api/categories')
          .then(response => {
            console.log(response)
            commit('setCategories', response.data)
          })
          .catch(error => console.log(error));
    }
  },
  modules: {
  }
})
