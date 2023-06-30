import { createStore } from 'vuex'

const dataURL = 'https://laiquah.github.io/products/products.json';

export default createStore({
  state: {
<<<<<<< HEAD
    products : null
=======
    component: null
>>>>>>> ceb7db22653ba9d1d88cf28c5eb2dbf87c4b94ff
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
