<template>
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Image</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in products" :key="item.id">
            <th scope="row">{{ item.id }}</th>
            <td>{{ item.title }}</td>
            <td><img :src="item.image" :alt="item.title"></td>
            <td>{{ item.description }}</td>
            <td>{{ item.price }}</td>
          </tr>
        </tbody>
      </table>
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
    }
</script>

<style scoped>
img{
  width: 8rem;
}
</style>