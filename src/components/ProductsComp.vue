<template>
  <div class="container">
    <div class="row">
      <div class="col" v-for="item in products" :key="item.id">
        <div class="card mt-3 mb-3" style="width: 18rem">
          <img
            :src="item.image"
            class="card-img-top img-fluid"
            :alt="item.image"
            loading="lazy"
          />
          <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text" id="p">{{ item.description }}</p>
            <p class="card-text" id="price">{{ item.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
        products() {
            return this.$store.state.products
        }
    },
    mounted() {
        this.$store.dispatch('fetchProducts')
    }
};
</script>

<style scoped>
.card{
    height: 100vh;
    background-color: #F8E8EE;
}

img{
    padding: 1rem;
    border-radius: 180px !important;
}

h5,
#price{
    font-weight: 600;
    color: black;
}

h5{
    text-decoration: underline;
}

#p{
    font-style: italic;
    color: black;
}
</style>
