<template>
  <div>
    <div>
      <lander-video />
      <Lander />
      <Detail />
      <CarouselPage />
      <credit />
    </div>
  </div>
</template>

<script>
import Lander from '@/components/Homepage/Lander.vue'
import landerVideo from '@/components/Homepage/landerVideo.vue'
import Detail from '@/components/Homepage/Detail.vue'
import CarouselPage from '@/components/Homepage/CarouselPage.vue'
import Credit from '@/components/Homepage/Credit.vue'
export default {
  components: {
    Lander,
    Detail,
    landerVideo,
    CarouselPage,
    Credit,
  },
}
</script>

<style></style>
