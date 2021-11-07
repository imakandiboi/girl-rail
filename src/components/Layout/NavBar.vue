<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-success pt-4 pb-3 px-4">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Girl Rail Initiative </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link :to="{ name: 'Home' }">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'About' }">
                <a class="nav-link" href="#">About Us </a>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'Goals' }">
                <a class="nav-link" href="#">Our Goals </a>
              </router-link>
            </li>
            <li class="nav-item support-us ">
              <router-link :to="{ name: 'Goals' }">
                <a class="nav-link" href="#">Donate </a>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {}
</script>
<style scoped>
@import url(https://fonts.googleapis.com/css?family=Lobster);
.navbar-brand {
  font-family: "Lobster", cursive;
}

.nav-item a {
  text-decoration-line: none !important;
}
/* .support-us {
  border-radius: 5px;
  width: 100px;
  height: 50px;
  padding: 0px 10px;
  background-color: rgb(255, 251, 0);
}

.support-us a {
  width: 80px;
  color: black !important;
} */
/* 
@media screen and (max-width: 756px) {
  .support-us a {
    color: black !important;
    width: 100px;
  }
} */
</style>
