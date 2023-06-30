import { createStore } from 'vuex'

const dataURL = 'https://laiquah.github.io/products/products.json';

export default createStore({
  state: {
    products : null
  },
  getters: {
  },
  mutations: {
    setProducts(state, value) {
      state.products = value
    }
  },
  actions: {
    async fetchProducts (context) {
      try {
        let res = await fetch(dataURL);
        let {products} = await res.json();
        if (products) {
          context.commit("setProducts", products)
        }else {
          context.commit("setProducts", products)
        }
      }
      catch (e) {
        console.log(e.message)
      }
    }
  },
  modules: {
  }
})
