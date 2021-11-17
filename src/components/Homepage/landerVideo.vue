<template>
  <div>
    <section>
      <!-- backgound video -->

      <vue-video-section :elementId="'header-background-video'" :ref="'header-background-video'" :mp4Source="require('@/assets/image/video.mp4')" :playsinline="true" :loop="true" :autoplay="true" :autobuffer="true" :muted="true">
        <div slot="overlay-content" class="overlay-content pt-5">
          <div class="container py-4">
            <div class="row justify-content-center">
              <div class="col-lg-12 text-center text-white">
                <h1 class="video-cap"><strong>Raise A Girl, Build a Nation</strong></h1>
              </div>
            </div>
          </div>
          <div class="container py-4">
            <div class="row justify-content-center mb-4">
              <div class="col-lg-6 text-center text-light">
                <p class="video-caption">Giving voice to the <span style="color: red;">Girl Child</span> .</p>
                <a href="http://" class="btn btn-lg btn-success  button"> About us</a>
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
  name: 'landerVideo',

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
.video-cap {
  font-size: 50px;
  color: rgb(172, 243, 237);
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.video-caption {
  font-size: 25px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.button {
  font-family: 'Poiret One', cursive;
  font-size: 25px;
  width: 150px;
  height: 50px;
  border: 0px;
  border-radius: 15px;
  box-shadow: -2px 13px 58px rgba(0, 0, 0, 0.26);
}

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  .video-cap {
    font-size: 30px;
    font-weight: 300;
    color: rgb(204, 207, 207);
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }
  .video-caption {
    font-size: 15px;

    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }
}
</style>
