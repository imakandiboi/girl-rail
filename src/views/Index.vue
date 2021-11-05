<template>
  <div>
    <div>
      <Lander />
      <Detail />
      <CarouselPage />
      <credit />
    </div>
  </div>
</template>

<script>
import Lander from "@/components/Homepage/Lander.vue"
import Detail from "@/components/Homepage/Detail.vue"
import CarouselPage from "@/components/Homepage/CarouselPage.vue"
import Credit from "@/components/Homepage/Credit.vue"
export default {
  components: {
    Lander,
    Detail,
    CarouselPage,
    Credit,
  },
}
</script>

<style></style>
