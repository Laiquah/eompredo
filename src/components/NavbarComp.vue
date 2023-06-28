<template>
    <div>
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
              <a class="navbar-brand" href="/"><img src="https://i.postimg.cc/bvTQpZ26/Screenshot-2023-06-14-110657-removebg-preview.png" alt="LOGO" loading="lazy"></a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <router-link to="/" class="l4e">Home</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/products" class="l4e">Products</router-link>
                  </li>
                  <li class="nav-item">
                   <router-link to="/checkout" class="l4e">Checkout</router-link>
                  </li>
                  <li class="nav-item">
                   <router-link to="/contact" class="l4e">Contact</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/admin" class="l4e">Admin</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.navbar-nav li {
    margin-inline: .4rem;
}

nav{
    background-color: #F2BED1;
}

img{
    width: 5rem;
}

.l4e {
    color: black;
}
</style>