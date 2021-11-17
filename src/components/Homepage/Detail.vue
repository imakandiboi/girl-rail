<template>
  <div>
    <div class=" container-fluid detail-section pt-5 pb-4">
      <div class="container  text-center  detail">
        <h1 class="text-success display-2 pb-3 ">Who we are</h1>
        <h4 class=" mt-3 text-black">
          We are a Non-governmental platform with our root course in helping the girlchild succeed in every community they find themselves. GRI was founded in 2020 as an idea to help young girls lean on a shoulder that can guide them aright in all spheres of life. This is what we do.
        </h4>
      </div>

      <div class="container pt-3">
        <hr />
      </div>
    </div>
    <div class="container-fluid what-we-do">
      <div class="boxing ">
        <div class="row">
          <div class="col-md-6">
            <center>
              <img src="@/assets/image/girl.jpeg" alt="" width="650px" />
            </center>
          </div>
          <div class="col-md-6">
            <div class="text-container mt-4">
              <div class="text-caption-box">
                <h1 class="h1 text-success">We Ensure Proper Care For The Girl-Child To The Society.</h1>
              </div>

              <div class="text-caption-box">
                <p class="font-weight-lighter content ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia enim doloribus, necessitatibus quo est alias porro fugiat quibusdam sed ut nulla neque harum consequuntur nihil iure animi modi sequi repellendus. Nam totam debitis deserunt. Deleniti, quaerat officiis doloribus dolorem blanditiis assumenda sed quis totam animi necessitatibus sit, minima repellendus in.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Detail',

  data() {
    return {
      image: '@/assets/image/girl.jpeg',
    }
  },
}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Poiret+One);
.detail-section {
  height: auto;
}

.detail h4 {
  font-family: 'Poiret One', cursive;
  font-weight: bolder;
  line-height: 2em;
  font-size: 18px;
}

.what-we-do {
  height: auto;
}
.boxing {
  width: 80%;
  margin: 20px auto;
}

.text-caption-box {
  padding: 20px 40px;
  font-family: 'Poiret One', cursive;
  margin-bottom: 60px;
  width: 100%;
  height: auto;
  box-shadow: -1px 13px 58px rgba(0, 0, 0, 0.26);
  border: 3px black;
}
.content {
  font-size: 18px;
  line-height: 2em;
}
img {
  border-radius: 5px;
}

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  img {
    padding: 50px 0px !important;
    width: 100%;
  }
  .text-caption-box {
    padding: 0px 10px;
    font-family: 'Poiret One', cursive;
    margin-bottom: 60px;
    width: 100%;
    height: auto;
    border: 0px rgb(182, 180, 180);
  }
  .boxing {
    width: 100%;
    margin: 20px 0px;
  }
  .detail h1,
  h4 {
    text-align: left;
  }
}
</style>
