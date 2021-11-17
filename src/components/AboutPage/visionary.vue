<template>
  <div>
    <div class="container mission">
      <h1>Visionary</h1>

      <div class="row g-2 card-sec">
        <div v-for="(card, index) in cards" :key="index" class="col-md-3">
          <div class="card-container">
            <div class="card">
              <img :src="card.image" alt="image" srcset="" />
              <h4 class="card-caption">
                {{ card.caption }}
              </h4>
              <p class="card-text">{{ card.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="vision-desc container">
      <div class=" detail-vision row">
        <h2><span style="color:red">OUR</span> AMBASSADORS</h2>
        <p class="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. At magnam illo harum ducimus veniam aut cupiditate fugit, fugiat aperiam laborum.</p>
        <div class="col-md-6  ">
          <div class="col">
            <h1>lorem</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum amet animi hic soluta, aliquam unde laborum maiores! Possimus vero distinctio assumenda quia iure molestias.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio dolor, vel harum fuga in reprehenderit eveniet? Quod, sapiente voluptates ducimus possimus pariatur, fuga corrupti omnis dolorem tempore placeat eaque cupiditate.</p>
          </div>
        </div>
        <div class="col-md-6  ">
          <div class="image-container">
            <div class="image">
              <img src="@/assets/image/banner_girl.jpeg" alt="image" srcset="" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container mission">
      <h1>Some of our recent Campaigns</h1>

      <div class="row g-4 card-sec tranform">
        <div v-for="(campaign, index) in campaigns" :key="index" class="col-md-4">
          <div class="card-container">
            <div class="card">
              <img :src="campaign.image" alt="image" srcset="" class="e24" />
              <h4 class="card-caption">
                {{ campaign.caption }}
              </h4>
              <p class="card-text">{{ campaign.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  caption: 'string',
  image: null,
  data() {
    return {
      cards: [
        {
          key: '1',
          image: require('@/assets/image/girl.jpeg'),
          caption: 'TAIWO (GRI PROGRAM MANAGER)',
          text: 'orem ipsum dolor sit, amet consectetur adipisicing elit. ',
        },
        {
          key: '2',
          image: require('@/assets/image/girl.jpeg'),
          caption: 'SELIYAT(GRI SECRETARY)',
          text: 'orem ipsum dolor sit, amet consectetur adipisicing elit. ',
        },
        {
          key: '3',
          image: require('@/assets/image/girl.jpeg'),
          caption: 'KAFAYAT(GRI CHAIRPERSON)',
          text: 'orem ipsum dolor sit, amet consectetur adipisicing elit. ',
        },
        {
          key: '4',
          image: require('@/assets/image/girl.jpeg'),
          caption: 'KAFAYAT(GRI CHAIRPERSON)',
          text: 'orem ipsum dolor sit, amet consectetur adipisicing elit. ',
        },
      ],
      image: [],
      campaigns: [
        {
          key: '1',
          image: require('@/assets/image/banner_girl.jpeg'),
          caption: "Goverment girl's college ",
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non explicabo, animi error tempore eius dolore ducimus reiciendis cumque repellendus quisquam. Libero officia eum consequatur porro, quia perferendis officiis ut accusantium et autem atque doloribus, odit temporibus harum. Expedita ut libero dolorem repellendus quae harum porro deserunt quasi illo earum! Nihil ad magni repellat facilis, molestiae eum. In id excepturi obcaecati vitae! Quo culpa qui sint similique neque nesciunt, repudiandae magni laboriosam voluptas harum praesentium quibusdam quaerat quasi nisi architecto est temporibus quae. Rem exercitationem dolorem eius perspiciatis dolor, et in modi quod laboriosam est corporis aspernatur nisi id nemo obcaecati. ',
        },
        {
          key: '2',
          image: require('@/assets/image/banner_girl.jpeg'),
          caption: 'Ansarudeen Girls High',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non explicabo, animi error tempore eius dolore ducimus reiciendis cumque repellendus quisquam. Libero officia eum consequatur porro, quia perferendis officiis ut accusantium et autem atque doloribus, odit temporibus harum. Expedita ut libero dolorem repellendus quae harum porro deserunt quasi illo earum! Nihil ad magni repellat facilis, molestiae eum. In id excepturi obcaecati vitae! Quo culpa qui sint similique neque nesciunt, repudiandae magni laboriosam voluptas harum praesentium quibusdam quaerat quasi nisi architecto est temporibus quae. Rem exercitationem dolorem eius perspiciatis dolor, et in modi quod laboriosam est corporis aspernatur nisi id nemo obcaecati. ',
        },
        {
          key: '3',
          image: require('@/assets/image/banner_girl.jpeg'),
          caption: "Federal Girl's college lagos ",
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non explicabo, animi error tempore eius dolore ducimus reiciendis cumque repellendus quisquam. Libero officia eum consequatur porro, quia perferendis officiis ut accusantium et autem atque doloribus, odit temporibus harum. Expedita ut libero dolorem repellendus quae harum porro deserunt quasi illo earum! Nihil ad magni repellat facilis, molestiae eum. In id excepturi obcaecati vitae! Quo culpa qui sint similique neque nesciunt, repudiandae magni laboriosam voluptas harum praesentium quibusdam quaerat quasi nisi architecto est temporibus quae. Rem exercitationem dolorem eius perspiciatis dolor, et in modi quod laboriosam est corporis aspernatur nisi id nemo obcaecati. ',
        },
      ],
    }
  },
}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Poiret+One);

.mission {
  padding: 80px 0px;
}

.mission h1 {
  padding: 40px 0px 0px 0px;
  margin-bottom: 50px;
  text-align: center;
  color: rgb(36, 92, 48);
  font-weight: 400;
  font-family: 'Poiret One', cursive;

  font-size: 2.5em;
}
.card {
  box-shadow: -1px 13px 58px rgba(0, 0, 0, 0.2);
  border: 3px black;
}

.card-caption {
  padding: 10px 5px;
  font-family: 'Poiret One', cursive;
  font-weight: bold;
  font-size: 30px;
  color: #154419e0;
  text-align: center;
  text-transform: capitalize;
}
.card-sec {
  padding: 0px;
}
.card-text {
  padding: 20px 15px;
  font-family: 'Poiret One', cursive;
  font-weight: bold;
}

.vision-desc {
  padding: 40px 0px;
  font-family: 'Poiret One', cursive;
}

.detail-vision {
  padding: 30px 0px;
  text-align: center;
}
.detail-vision h2 {
  padding: 20px 0px 0px 0px;
  margin-bottom: 50px;
  text-align: center;
  color: rgb(36, 92, 48);
  font-weight: 400;
  font-family: 'Poiret One', cursive;
  font-size: 2.5em;
}
img .e24 {
  height: 30px;
}

@media screen and (max-width: 760px) {
  * {
    margin: 2px;
    padding: 2px;
  }
  .detail-vision {
    width: 100%;
    margin: 0px;
    padding: 30px 0px;
    text-align: center;
  }
  .image img {
    width: 300px;
  }
}
</style>
