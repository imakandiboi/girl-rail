<template>
  <div id="app">
    <header>
      <NavBar />
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script>
import NavBar from "@/components/Layout/NavBar.vue"
import Footer from "./components/Layout/Footer.vue"
export default {
  name: "App",
  components: { NavBar, Footer },
}
</script>

<style lang="scss"></style>
