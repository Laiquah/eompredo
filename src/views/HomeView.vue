<template>
  <div id="home">
    <div id="cont">
      <div id="random">
        <h1 class="display-1">Welcome to Floral Enchantment :)</h1>
        <h4 class="display-4">"Where Every Petal Tells a Story"</h4>
      </div>
    </div>
    <h2 class="display-2">About Us</h2>
      <div class="container">
        <h6 class="display-6">WHO WE ARE?</h6>
        <p id="whoweare">
          Floral Enchantment: Where nature's beauty meets artful floral design.
          We create stunning arrangements that evoke joy and captivate the
          senses. Our passionate team of skilled florists crafts personalized
          creations for weddings, anniversaries, birthdays, and everyday
          occasions, reflecting your unique style and vision.We pride ourselves
          on sourcing the finest, freshest flowers from local and international
          suppliers, ensuring the highest quality. Our diverse selection
          includes vibrant roses, elegant lilies, exotic orchids, and charming
          wildflowers, catering to all tastes and preferences.Exceptional
          customer service is our priority. Our knowledgeable and friendly staff
          guides you through the selection process, offering expert advice and
          creating custom designs to meet your specific needs. We value personal
          connections and strive to build lasting relationships with each
          customer.Floral Enchantment is more than a flower shop; it's where
          dreams blossom and emotions find expression. Come visit us and
          experience the enchantment firsthand. Let us be part of your special
          moments, creating memories that endure.Thank you for choosing Floral
          Enchantment, where every bouquet tells a story.
        </p>
      </div>
      <h6 class="display-6">WHY CHOOSE US?</h6>
      <div id="container">
        <img
          src="https://i.postimg.cc/y8rbJrQY/pexels-brett-sayles-992734.jpg"
          class="img-fluid images"
          alt="image"
          loading="lazy"
          id="img"
        />
        <p id="why">
          Floral Enchantment is your premier choice for floral arrangements,
          offering exquisite designs crafted by skilled artisans. We prioritize
          unparalleled quality, sourcing the finest flowers to ensure
          long-lasting beauty. Our personalized service caters to your unique
          vision, while our extensive range of offerings includes a diverse
          selection of blooms for any occasion. With prompt delivery, event
          expertise, and a commitment to sustainability, we aim to create
          magical moments. Choose Floral Enchantment to experience the art of
          enchanting floral designs and exceptional service.
        </p>
      </div>
      <h6 class="display-6">WHAT WE DO:</h6>
      <div class="cont">
        <p id="what">
          Floral Enchantments specializes in creating captivating and
          personalized floral experiences for various occasions. Our talented
          team crafts stunning arrangements that reflect the beauty of nature,
          combining colors, textures, and shapes to create unique and
          breathtaking designs. We work closely with you to understand your
          preferences and vision, ensuring that every floral creation is
          tailored to your specific needs and desires. Whether it's weddings,
          events, corporate settings, or special celebrations, we transform
          venues into enchanting spaces, capturing the essence of the occasion.
          In times of sympathy and condolences, we offer tasteful and comforting
          floral arrangements to honor and pay tribute to loved ones. With our
          seamless delivery and setup services, we take care of every detail,
          ensuring that your experience with us is exceptional. Let Floral
          Enchantments bring enchantment and beauty to your special moments with
          our exquisite floral creations.
        </p>
        <img
          src="https://i.postimg.cc/dVM9zPxC/pexels-irina-iriser-1408221.jpg"
          class="img-fluid"
          alt="image"
          loading="lazy"
          id="img"
        />
      </div>
      <FeaturedProducts/>
  </div>
</template>

<script>
import FeaturedProducts from '../components/FeaturedproductsComp.vue'
  export default {
    components: {
      FeaturedProducts
    }
  }
</script>

<style scoped>
#home{
  background-color:  #F2BED1;
}

img{
  width: 25rem;
  border-radius: 1rem;
}

.cont{
  padding: 1rem;
}

#why{
  padding: 1rem;
}

h2{
  text-decoration: underline;
}
</style>
