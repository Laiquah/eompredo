<template>
    <div>
        <table class="table">
            <thead>
              <tr class="col" v-for="item in product" :key="item.id">
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Image</th>
                <th scope="col">Description</th>
                <th scope="col">Price</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
            </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">{{ item.id }}</th>
                <td>{{ item.title }}</td>
                <td>{{ item.image }}</td>
                <td>{{ item.description }}</td>
                <td>{{ item.price }}</td>
                <td>{{ item.edit }}</td>
                <td>{{ item.delete }}</td>
              </tr>
            </tbody>
          </table>
    </div>
</template>

<script>
    export default {
        data() {
    return {
      product: [],
    };
  },
  methods: {
    async fetchData() {
      const res = await fetch(
        "https://laiquah.github.io/products/products.json"
      );
      let parsedProducts = await res.json();
      this.product = parsedProducts.products;
    },
  },
  mounted() {
    this.fetchData();
  },
    }
</script>

<style scoped>

</style>