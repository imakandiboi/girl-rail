<template>
  <div>
    <div class="container-fluid bg-success text-white  ">
      <div class="py-5 px-5 container-fluid footer ">
        <div class="row d-flex">
          <div class="col-lg-5 col-xs-12  w-full">
            <h4 class="fw-light mb-3">Girl Rail Initiative</h4>
            <ul class=" nav flex-column">
              <li class="nav-item mb-2 fw-light"><p class="footer-cap">..Providing proper orientation to a girl child.</p></li>
            </ul>
          </div>
          <div class="col-lg-4 col-xs-12  w-full">
            <h4 class="fw-light mb-3">About us</h4>
            <ul class=" nav flex-column">
              <li class="nav-item mb-2 fw-light d-flex">
                <i class="far  fa-address-book"></i>
                <p>Email :</p>
              </li>
              <li class="nav-item mb-2 fw-light d-flex">
                <i class="fas fa-phone-volume"></i>
                <p>phone number:</p>
              </li>
              <li class="nav-item mb-2 fw-light d-flex ">
                <i class="fas fa-map-marker-alt "></i>
                <p class="">Address :</p>
              </li>
            </ul>
          </div>
          <div class="col-lg-3 col-xs-12  w-full">
            <h4 class="fw-light mb-3">Get in touch with us via social media.</h4>
            <ul class=" nav flex-column">
              <li class="nav-item mb-2 fw-light d-flex">
                <i class="fab  fa-facebook"></i>
                <p>Facebook</p>
              </li>
              <li class="nav-item mb-2 fw-light d-flex">
                <i class="fab fa-instagram"></i>
                <p>Instagram</p>
              </li>
              <li class="nav-item mb-2 fw-light d-flex ">
                <i class="fab fa-twitter"></i>
                <p class="">Twitter</p>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div class="container-fluid text-center">
          <p class="copyright-text">Girl Rail initiative © {{ new Date().getFullYear() }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Open+Sans+Condensed);
@import url(https://fonts.googleapis.com/css?family=Lobster);
.footer h4 {
  font-size: 25px;
  font-family: "Lobster", cursive;
}
.footer-cap {
  font-weight: bold;
}

li {
  padding: 5px 0px;
}
i {
  font-size: 30px;
}

li p {
  padding: 0px 10px;
}
.copyright-text {
  padding: 20px 0px;
  font-weight: bold;
}
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  .footer {
    padding: 20px 15px !important;
    width: 100%;
  }
}
</style>
