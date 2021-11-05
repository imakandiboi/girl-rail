<template>
  <div>
    <div class="container-fluid pb-4">
      <agile class="thumbnails" ref="thumbnails" :options="options1">
        <div style="margin:2px" class="slide slide--thumbniail" v-for="(slide, index) in slides" :key="index" :class="` slide--${index}`" @click="$refs.thumbnails.goTo(index)">
          <img style="object-fit: cover; height: 200px ; width:100%" :src="slide" />
        </div>
      </agile>
    </div>
  </div>
</template>

<script>
import { VueAgile } from "vue-agile"
export default {
  components: {
    agile: VueAgile,
  },
  data() {
    return {
      options1: {
        autoplay: true,
        centerMode: true,
        dots: false,
        navButtons: false,
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 5,
            },
          },

          {
            breakpoint: 1000,
            settings: {
              navButtons: false,
            },
          },
        ],
      },

      slides: [
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.s0yBqfdPZPv2wr_q18NVawHaE8%26pid%3DApi&f=1",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.qcZDphPyv718926hRPMF8wHaE6%26pid%3DApi&f=1",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.m03BG-kkvTUyX92w5kGYvgHaDt%26pid%3DApi&f=1",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.qL6IW88SmTwGFCCUPFcsJgHaEK%26pid%3DApi&f=1",

        // slide5
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.FjfS2J72YpMIxj9M8IhctAHaFn%26pid%3DApi&f=1",
      ],
    }
  },
}
</script>

<style></style>
