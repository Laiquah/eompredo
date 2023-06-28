<template>
    <div>
        <h2 class="display-2">Featured Products</h2>
      <center>
        <div id="carouselExample" class="carousel slide w-50">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://i.postimg.cc/9QYcv9pj/pexels-kristina-paukshtite-701816.jpg"
                alt="rose"
                loading="lazy"
                class="img-fluid w-100 h-100"
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://i.postimg.cc/nrhFkh7t/pexels-sl-wong-1023953.jpg"
                alt="sunflower"
                loading="lazy"
                class="img-fluid w-100 h-100"
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://i.postimg.cc/zDjz1gLG/serafima-lazarenko-i-Vu-WPrf-CZI-unsplash.jpg"
                alt="lily"
                loading="lazy"
                class="img-fluid w-100 h-100"
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://i.postimg.cc/Dwykdj5r/rob-pumphrey-QHWFAlp3idg-unsplash.jpg"
                alt="Myosotis"
                loading="lazy"
                class="img-fluid w-100 h-100"
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://i.postimg.cc/xC9brqSr/pansy.jpg"
                alt="Pansy"
                loading="lazy"
                class="img-fluid w-100 h-100"
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </center>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
img{
    border-radius: 2rem;
    margin-bottom: 1rem;
}

h2{
    text-decoration: underline;
}
</style>