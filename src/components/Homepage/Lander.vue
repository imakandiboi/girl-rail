<template>
  <div>
    <div class="lander container-fluid " :src="image">
      <div class="banner mx-auto ">
        <div class="row  ">
          <div class="col-md-6 align-center">
            <h1 class=" py-8  ">Giving voice to the <span style="color: red;">Girl Child</span> .</h1>
            <p>...Providing proper orientation to girl child in the society.</p>
            <p>Empowering the <span style="color: red;">girlchild in education, wellbeing, leadership and career.</span></p>

            <div class="row pt-4">
              <!-- <div class="col-md-3">
                <button class=" bg-success  text-white  px-8">About Us</button>
              </div> -->
            </div>
          </div>
          <div class="col-md-6">
            <div class="image-section">
              <center>
                <img src="@/assets/image/banner_girl.jpeg" alt="" />
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Lander',

  data() {
    return {
      image: '@/assets/image/banner_background.webp',
    }
  },
}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Poiret+One);
.lander {
  height: auto;
}
.banner {
  width: 80%;
  height: auto;
  gap: 10px;
  padding: 70px 0px 70px 0px;
}
.banner h1 {
  padding: 30px 0px;
  font-family: 'Poiret One', cursive;
  font-weight: bold;
  font-size: 50px;
  color: #154419e0;
}
.banner p {
  margin-bottom: 20px;
  font-family: 'Poiret One', cursive;
  font-weight: bold;
  font-size: 18px;
  color: #154419e0;
}
img {
  border-radius: 5px;
}
.banner button {
  font-family: 'Poiret One', cursive;
  font-size: 25px;
  width: 250px;
  height: 50px;
  border: 0px;
  border-radius: 15px;
  box-shadow: -2px 13px 58px rgba(0, 0, 0, 0.26);
}

.video-cap {
  font-size: 40px;
}
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  img {
    padding: 50px 0px !important;
    width: 100%;
  }
}
</style>
