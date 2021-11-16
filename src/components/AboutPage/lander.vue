<template>
  <div>
    <section>
      <!-- backgound video -->

      <vue-video-section :elementId="'header-background-video'" :ref="'header-background-video'" :mp4Source="require('@/assets/image/video.mp4')" :playsinline="true" :loop="true" :autoplay="true" :autobuffer="true" :muted="true">
        <div slot="overlay-content" class="overlay-content pt-5">
          <div class="container py-4">
            <div class="row justify-content-center">
              <div class="col-lg-12 text-center text-white">
                <h2><strong>Raise A Girl, Build a Nation</strong></h2>
              </div>
            </div>
          </div>
          <div class="container py-4">
            <div class="row justify-content-center mb-4">
              <div class="col-lg-6 text-center text-light">
                <p class="video-caption">We Are focused on the Girl child.</p>
              </div>
            </div>
          </div>
        </div>
      </vue-video-section>
    </section>
  </div>
</template>

<script>
import VueVideoSection from 'vue-video-section'

export default {
  name: 'lander',

  components: {
    VueVideoSection,
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
