<template>
  <div>
    <b-carousel id="carousel-1" style="text-shadow: 0px 0px 2px #000 ; height:50vh;" controls indicators fade img-width="1024" class="slider" img-height="480">
      <b-carousel-slide>
        <template v-slot:img>
          <img class="slider-img img-fluid w-100" src="@/assets/image/pic2.png" width="1000" height="500" alt="Atomic Habits" />
        </template>
      </b-carousel-slide>

      <b-carousel-slide>
        <template v-slot:img>
          <img class="slider-img img-fluid w-100" src="@/assets/image/banner_background.webp" width="1000" height="500" alt="Atomic Habits" />
        </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
import { BCarousel, BCarouselSlide } from "bootstrap-vue"

export default {
  name: "lander",

  components: {
    BCarousel,
    BCarouselSlide,
  },

  // data() {
  //   return {
  //     image: "@/assets/image/pic2.png",
  //   }
  // },
}
</script>

<style scoped>
.slider {
  border-bottom: 30px solid #04412c;
}
.slider-img {
  height: 48vh !important;
}
</style>
