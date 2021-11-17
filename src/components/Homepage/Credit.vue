<template>
  <div>
    <div class="container-fluid credit-section pt-5 ">
      <div class=" credits">
        <h4 class=" text-success display-4 pb-1 pt-5 ">we received world-wide <span style="color:red">recognition.. </span></h4>
        <hr />
        <p class=" pt-2 pb-2">
          {{ text }}
        </p>

        <!-- affiliate credits -->

        <div class="credit-comment pt-5 pb-5">
          <div class="row ">
            <!-- card -->
            <div class="col-md-4 ">
              <div class="row">
                <div class="col-md-4">
                  <i class="fas fa-globe"></i>
                </div>
                <div class="col-md-8 text-center">
                  <h4 class="">Education</h4>
                  <p class="text-left">
                    On Education, we provide help in getting the girlchild educated in all sphere, our education support system is not limited to academic, it also includes digital skills, vocational skills among others.
                  </p>
                </div>
              </div>
            </div>

            <!-- card -->

            <div class="col-md-4 ">
              <div class="row">
                <div class="col-md-4 icon">
                  <i class="far fa-handshake"></i>
                </div>
                <div class="col-md-8 text-center">
                  <h4 class="">Wellbeing</h4>
                  <p class="text-left">
                    On wellbeing, we are on standby in food and drinks provision for the needee girlchild, we are also dedicated to providing medical support in all capacity. Until we ascertain that the girlchild is fit mentally and physically, we are not done.
                  </p>
                </div>
              </div>
            </div>
            <!-- card -->

            <div class="col-md-4 ">
              <div class="row">
                <div class="col-md-4">
                  <i class="fas fa-restroom"></i>
                </div>
                <div class="col-md-8 text-center">
                  <h4 class="">Leadership & Career</h4>
                  <p class="text-left">
                    Leadership and career is another foremost of our call, we cannot continue to see the girlchild suffer in leadership and in their career endaevour. This is why we exist, we exist to bridge the gap in the girlchild career growth regardless of the discipline.
                  </p>
                </div>
              </div>
            </div>

            <!-- card -->
          </div>
          <!-- end of card  -->

          <div class="row other-cap">
            <div class="col-md-6 slide-section">
              <b-carousel id="carousel-fade" style="text-shadow: 0px 0px 2px #000" indicators fade img-width="1024" img-height="380">
                <b-carousel-slide img-src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.FjfS2J72YpMIxj9M8IhctAHaFn%26pid%3DApi&f=1"> </b-carousel-slide>
                <b-carousel-slide img-src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.qL6IW88SmTwGFCCUPFcsJgHaEK%26pid%3DApi&f=1"> </b-carousel-slide>
                <b-carousel-slide img-src=" https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.qcZDphPyv718926hRPMF8wHaE6%26pid%3DApi&f=1"> </b-carousel-slide>
              </b-carousel>
            </div>
            <div class="col-md-6">
              <h4 class=" text-success right-caption display-4 pb-1  ">we received world-wide <span style="color:red">recognition.. </span></h4>
              <p class=" pt-2 pb-2  right-para" style="width:80% ; margin:0px auto">
                {{ text }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { BCarousel, BCarouselSlide } from 'bootstrap-vue'
export default {
  name: 'Credits',
  components: {
    // agile: VueAgile,
    BCarousel,
    BCarouselSlide,
  },

  data() {
    return {
      text: 'Regardless of race, religion and group, GRI is committed to bringing up the girlchild in every community across Africa. We are a point of contact and a facilitator of growth amongst the girlchild. We do not wait for a reach out, we look for and do reach out to the girlchild for in this lies our purpose.',

      slides: ['https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.qL6IW88SmTwGFCCUPFcsJgHaEK%26pid%3DApi&f=1', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.FjfS2J72YpMIxj9M8IhctAHaFn%26pid%3DApi&f=1'],
    }
  },
}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Poiret+One);

.credit-section {
  height: auto;
}

.credits {
  width: 80%;
  margin: auto;
}
.credits h4 {
  text-transform: capitalize;
}
.credits p {
  text-align: center;
  font-size: 16px;
  font-weight: 800;
  font-family: 'Poiret One', cursive;
}
.icon {
  display: flex;
}
i {
  margin: 30px 0px;
  font-size: 120px;
  color: #335511;
}
.other-cap p {
  text-align: left;
}
.right-caption {
  padding-top: 3em;
  text-align: right;
}

.slide-section {
  border-radius: 0px 10px 10px 0px;
  padding-top: 6em;
}

.slide.slide--thumbniail >>> img {
  width: 100% !important;
}

@media screen and (max-width: 760px) {
  .credits {
    width: 100%;
    margin: 10px 0px;
  }

  .right-caption {
    font-size: 30px;
    text-align: left;
  }
  .right-para {
    width: 100% !important;
    text-align: left;
    margin: 10px 0px !important;
  }
}
</style>
