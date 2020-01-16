<template>
  <div>
    <transition>
      <div v-if="show" class="loaderArea">
        <img :src="require('@/assets/img/preloader.gif')" class="img-fluid" alt="">
      </div>
    </transition>
    <article class="marquee-container">
      <div class="marquee">
        <div class="string">
          <div v-for="quotation in quotations" :key="quotation.id" class="element">
            <p>
              {{ quotation.name }}
            </p>
            <span>
              {{ quotation.difference }}
            </span>
            <img :src="require(`@/assets/icons/quotation-symbol-${quotation.badgeColor}.svg`)" class="img-fluid" alt="">
          </div>
        </div>
      </div>
    </article>
    <!--BLOCK 1-->
    <article class="block-1">
      <div class="content">
        <v-carousel
          :show-arrows="false"
          cycle
          height="97vh"
          hide-delimiter-background
        >
          <v-carousel-item
            v-for="(banner, i) in banners"
            :key="i"
            :src="banner.src"
          />
          <div class="overlay" />
        </v-carousel>

        <div class="arrow-kat-cont-open active">
          <i class="arrow-kat up" />
        </div>
        <div id="kotirowki" class="active">
          <div class="kotirowki-header">
            <a href="/exchange-trading/quotation">
              <h6>
                Quotation
              </h6>
            </a>
            <div class="d-flex align-center justify-between">
              <a href="/exchange-trading/quotation" class="kot-page">
                <img :src="require('@/assets/icons/right-arrow.svg')" alt="">
              </a>
              <img :src="require('@/assets/icons/close.svg')" class="kotirowki-close" alt="">
            </div>
          </div>
          <v-simple-table
            :dense="dense"
            :fixed-header="fixedHeader"
            :height="height"
            class="quotation-table"
          >
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">
                    Name
                  </th>
                  <th class="text-left">
                    Price
                  </th>
                  <th class="text-left">
                    Difference
                  </th>
                  <th class="text-left" />
                </tr>
              </thead>
              <tbody>
                <tr v-for="quotation in quotations" :key="quotation.id">
                  <td>
                    {{ quotation.name }}
                  </td>
                  <td>
                    {{ quotation.price }}
                  </td>
                  <td>
                    {{ quotation.difference }}
                  </td>
                  <td>
                    <img :src="require(`@/assets/icons/quotation-symbol-${quotation.badgeColor}.svg`)" class="img-fluid" alt="">
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </div>
        <div class="mouse">
          <img :src="require('@/assets/icons/mouse.svg')" alt="mouse" width="36">
          <br>
          <span>
            Go down
          </span>
        </div>

        <!-- Old Banner START -->
        <div class="slider d-none">
          <div v-for="banner in banners" :key="banner.id" class="item">
            <img :src="banner.image" :alt="banner.title" class="desktop">
            <img :src="banner.mobileImage" :alt="banner.title" class="mobile">
            <div class="slideText">
              <h5 class="slider-title">
                {{ banner.title }}
              </h5>
              <p class="slider-desc">
                {{ banner.descriptipn }}
              </p>
            </div>
          </div>
          <div class="overlay" />
        </div>
        <div class="slider-dots">
          <span
            v-for="(banner, index) in banners"
            :key="banner.id"
            :class="{ 'active': index == 0 }"
            v-on:click="getSlide(banner.id)"
            class="dot"
          />
        </div>
      </div>
      <!-- Old Banner END -->
    </article>

    <!--BLOCK 2-->
    <article class="block-2 container-fluid">
      <h5 class="title">
        <a href="#">
          News
        </a>
      </h5>
      <v-row
        class="news"
        align="center"
        justify="space-between"
      >
        <v-col
          v-for="(item, i) in news"
          :key="i"
          :class="{ 'offset-lg-1 offset-xl-1': i == 0 }"
          xl="2"
          sm="6"
          md="6"
          lg="2"
        >
          <div class="news-header">
            <h6 class="news-title">
              {{ item.title }}
            </h6>
            <a href="/news">
              <img :src="require('@/assets/icons/news_block_arrow.svg')" class="arrow" alt="news arrow">
            </a>
          </div>
          <div class="news-footer">
            <span class="news-date">
              {{ item.date }}
            </span>
          </div>
        </v-col>
        <v-col
          xl="3"
          sm="6"
          md="6"
          lg="3"
          class="d-xl-block d-xl-block"
        >
          <a class="btn all-news-btn" href="/news">
            More news
          </a>
        </v-col>
      </v-row>
    </article>

    <!--BLOCK 3-->
    <article class="block-3">
      <v-row>
        <v-col
          sm="12"
          md="6"
          lg="6"
          xl="6"
          class="block-3-slider"
        >
          <h5 class="catalog">
            Manufacturer Catalog
          </h5>
          <v-carousel :show-arrows="false" height="100%">
            <v-carousel-item
              v-for="(slider,i) in sliders"
              :key="i"
              :src="slider.src"
            />
            <div class="overlay" />
          </v-carousel>
        </v-col>
        <v-col
          sm="12"
          md="6"
          lg="6"
          xl="6"
        >
          <v-row>
            <v-col
              sm="12"
              md="12"
              lg="12"
              xl="12"
            >
              <div class="block-video">
                <div class="video-hover">
                  <div class="h-100 d-flex justify-center align-center">
                    <span>
                      Video About Our Activities
                    </span>
                    <a class="play-btn" />
                  </div>
                </div>
                <video
                  id="video"
                  :poster="require('@/assets/video/prew.png')"
                  controls
                  preload="none"
                >
                  <source :src="require('@/assets/video/rus.webmhd.mp4')" type="video/mp4">
                  <source :src="require('@/assets/video/rus.webmhd.webm')" type="video/webm">
                </video>
              </div>
            </v-col>
            <v-col
              sm="12"
              md="12"
              lg="12"
              xl="12"
            >
              <div class="intr">
                <h5>
                  International cooperation
                </h5>
                <a href="#">
                  <v-img :src="require('@/assets/icons/news_block_arrow.svg')" class="arrow" alt="news arrow" />
                </a>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </article>

    <!--BLOCK 4-->
    <article class="block-4 container-fluid">
      <v-row>
        <v-col
          sm="12"
          md="6"
          lg="6"
          xl="6"
        >
          <h5>
            SCRMET - online simple way to be in a course of all auctions
          </h5>
        </v-col>
        <v-col
          sm="12"
          md="6"
          lg="6"
          xl="6"
          class="block-4-phone"
        >
          <img :src="require('@/assets/img/block-4-1.png')" alt="iPhoneXS">
        </v-col>
      </v-row>
    </article>

    <!--BLOCK 6-->
    <article class="block-6 container-fluid">
      <h5 class="title">
        Our contacts
      </h5>
      <v-row>
        <v-col
          sm="12"
          md="12"
          lg="6"
          xl="6"
          class="d-flex justify-start align-center mb-5"
        >
          <img :src="require('@/assets/icons/location_pin.svg')" class="cont-img" alt="location">
          <div class="loc">
            <h6>
              Address:
            </h6>
            <p>
              744000, Turkmenistan city Ashgabat, Archabil Ave 52
            </p>
          </div>
        </v-col>
        <v-col
          sm="12"
          md="12"
          lg="6"
          xl="6"
          class="d-flex justify-start align-center mb-5"
        >
          <img :src="require('@/assets/icons/phone_pin.svg')" class="cont-img" alt="phone">
          <div class="phone">
            <h6>
              Tel:
            </h6>
            <p>
              <a href="tel:+99312446015">
                +99312446015
              </a>
            </p>
          </div>
        </v-col>
        <v-col
          sm="12"
          md="12"
          lg="6"
          xl="6"
          class="d-flex justify-start align-center mb-5"
        >
          <img :src="require('@/assets/icons/mail_pin.svg')" class="cont-img" alt="mail">
          <div class="cont-email">
            <div class="email">
              <h6>
                Email:
              </h6>
              <p>
                <a href="mailto:info@exchange.gov.tm">
                  info@exchange.gov.tm
                </a>
              </p>
            </div>
            <div class="email">
              <h6>
                Email:
              </h6>
              <p>
                <a href="mailto:brokers@exchange.gov.tm">
                  brokers@exchange.gov.tm
                </a>
              </p>
            </div>
          </div>
        </v-col>
      </v-row>
    </article>
  </div>
</template>

<script>

export default {
  data: () => ({
    show: true,
    dense: false,
    fixedHeader: false,
    height: 450,
    banners: [
      { id: 1, title: 'Banner 1', description: 'About banner 1', src: 'http://new.exchange.gov.tm/static/assets/slider/IMG_8047.jpg', mobileImage: 'http://new.exchange.gov.tm/static/assets/slider/mobile/IMG_8047.jpg' },
      { id: 2, title: 'Banner 2', description: 'About banner 2', src: 'http://new.exchange.gov.tm/static/assets/slider/IMG_8038.jpg', mobileImage: 'http://new.exchange.gov.tm/static/assets/slider/mobile/IMG_8038.jpg' },
      { id: 3, title: 'Banner 3', description: 'About banner 3', src: 'http://new.exchange.gov.tm/static/assets/slider/4.jpg', mobileImage: 'http://new.exchange.gov.tm/static/assets/slider/mobile/4.jpg' },
      { id: 4, title: 'Banner 4', description: 'About banner 4', src: 'http://new.exchange.gov.tm/static/assets/slider/IMG_8054.jpg', mobileImage: 'http://new.exchange.gov.tm/static/assets/slider/mobile/IMG_8054.jpg' }
    ],
    sliders: [
      { id: 1, title: 'Slider 1', description: 'About slider 1', src: 'http://new.exchange.gov.tm/static/assets/slider2/1.jpg' },
      { id: 2, title: 'Slider 2', description: 'About slider 2', src: 'http://new.exchange.gov.tm/static/assets/slider2/2.jpg' },
      { id: 3, title: 'Slider 3', description: 'About slider 3', src: 'http://new.exchange.gov.tm/static/assets/slider2/3.jpg' }
    ],
    news: [
      { id: 1, title: 'News 1', description: 'News description 1', date: '28 September 2019' },
      { id: 1, title: 'News 1', description: 'News description 1', date: '16 October 2019' },
      { id: 1, title: 'News 1', description: 'News description 1', date: '06 June 2019' }
    ],
    quotations: [
      { id: 1, name: 'Aviation oil', price: 250.0, difference: '10%', badgeColor: 'green' },
      { id: 2, name: 'Aviation oil', price: 150.0, difference: '-10%', badgeColor: 'red' },
      { id: 3, name: 'Aviation oil', price: 350.0, difference: '15%', badgeColor: 'green' },
      { id: 4, name: 'Aviation oil', price: 550.0, difference: '20%', badgeColor: 'green' },
      { id: 5, name: 'Aviation oil', price: 50.0, difference: '-5%', badgeColor: 'red' },
      { id: 6, name: 'Aviation oil', price: 125.0, difference: '-8%', badgeColor: 'red' },
      { id: 7, name: 'Aviation oil', price: 290.0, difference: '-16%', badgeColor: 'red' },
      { id: 8, name: 'Aviation oil', price: 2860.0, difference: '60%', badgeColor: 'green' },
      { id: 9, name: 'Aviation oil', price: 960.0, difference: '23%', badgeColor: 'green' },
      { id: 10, name: 'Aviation oil', price: 890.0, difference: '14%', badgeColor: 'green' }
    ]
  }),
  mounted () {
    this.show = false
  },
  methods: {
    getSlide (id) {

    }
  }
}
</script>

<style scoped>
/*.block-1{
  max-width: 100%;
  max-height: 100vh;
  display: flex;
  position: relative;
}*/
.block-1 .content{
  /*width: 100vw;
  height: 100vh;*/
  position: relative;
}
.mouse{
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  bottom: 60px;
  color: var(--white);
  opacity: 80%;
  z-index: 1;
  text-align: center;
}
.quotation-table table thead tr th{
  color: var(--white);
}
/***********/
.block-2{
  background-color: var(--dark-blue);
  padding: 30px 190px 50px 8vw;
}
.block-2 .title > a{
  text-decoration: none;
  color: var(--white);
  opacity: 60%;
  font-family: "GeometriaNarrowMedium";
  font-size: 20px;
  padding-bottom: 33px;
  padding-left: 0;
}
.block-2 .title > a:hover{
  text-decoration: underline;
}
.news-header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 25px;
}
.news-header .news-title{
  color: var(--white);
  font-family: "GeometriaNarrowMedium";
  font-size: 20px;
  padding-right: 20px;
}
.news-header .arrow{
    width: 35px;
    opacity: 60%;
}
.news-footer .news-date{
  color: var(--white);
  font-family: "GeometriaNarrowMedium";
  font-size: 15px;
  opacity: 60%;
}
.all-news-btn{
  text-decoration: none;
  color: #fff;
  background-color: var(--gold);
  border-color: var(--gold);
  padding: 10px 20px 10px 20px;
  font-family: "GeometriaNarrowMedium";
  font-size: 20px;
  margin-bottom: 20%;
}
.all-news-btn:hover{
  color: var(--blue);
  transition: 0.3s;
}
/****************/
.block-3{
  background-color: var(--background);
  padding: 60px 140px 80px 140px;
  max-width: 100%;
  max-height: 150vh;
  width: 100vw;
  height: 1200px;
}
.block-3-slider {
  position: relative;
  padding-bottom: 24px;
  padding-top: 24px;
}
.block-3 .catalog{
  position: absolute;
  left: 10%;
  top: 10%;
  color: var(--white);
  font-size: 20px;
  font-family: "GeometriaNarrowMedium";
  z-index: 1;
}
.block-video{
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
  position: relative;
}
#video{
  width: 100%;
  height: auto;
  max-height: 100%;
  display:block;
}
.video-hover{
  z-index: 1;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 49, 151, 0.4);
  /*margin-left: 15px;
  margin-right: 15px;*/
}
.video-hover span{
  font-family: "GeometriaNarrowMedium";
  font-size: 35px;
  color: var(--white);
  padding-right: 100px;
}
.video-hover img{
  cursor: pointer;
}
.intr{
  width: 100%;
  height: 339px;
  background:linear-gradient(0deg,rgba(0, 49, 151, 0.3),rgba(0, 49, 151, 0.3)),url(../assets/img/block-3-1.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.intr h5{
  font-family: "GeometriaNarrowMedium";
  font-size: 35px;
  color: var(--white);
  padding-right: 150px;
}
.intr img{
  height: auto;
  object-fit: cover;
  z-index: 0;
}

.play-btn {
  width: 100px;
  height: 100px;
  background: radial-gradient( rgba(7, 33, 91, 0.8) 60%, rgba(255, 255, 255, 1) 62%);
  border-radius: 50%;
  position: relative;
  display: block;
  box-shadow: 0px 0px 25px 3px rgba(7, 33, 91, 0.8);
  cursor: pointer;
}

/* triangle */
.play-btn::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translateX(-40%) translateY(-50%);
  transform: translateX(-40%) translateY(-50%);
  transform-origin: center center;
  width: 0;
  height: 0;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  border-left: 25px solid #fff;
  z-index: 100;
  -webkit-transition: all 400ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
  transition: all 400ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

/* pulse wave */
.play-btn:before {
  content: "";
  position: absolute;
  width: 150%;
  height: 150%;
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
  -webkit-animation: pulsate1 2s;
  animation: pulsate1 2s;
  -webkit-animation-direction: forwards;
  animation-direction: forwards;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-timing-function: steps;
  animation-timing-function: steps;
  opacity: 1;
  border-radius: 50%;
  border: 5px solid rgba(255, 255, 255, .75);
  top: -25%;
  left: -25%;
  background: rgba(198, 16, 0, 0);
}

@-webkit-keyframes pulsate1 {
  0% {
    -webkit-transform: scale(0.6);
    transform: scale(0.6);
    opacity: 1;
    box-shadow: inset 0px 0px 25px 3px rgba(255, 255, 255, 0.75), 0px 0px 25px 10px rgba(255, 255, 255, 0.75);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 0;
    box-shadow: none;
  }
}

@keyframes pulsate1 {
  0% {
    -webkit-transform: scale(0.6);
    transform: scale(0.6);
    opacity: 1;
    box-shadow: inset 0px 0px 25px 3px rgba(255, 255, 255, 0.75), 0px 0px 25px 10px rgba(255, 255, 255, 0.75);
  }
  100% {
    -webkit-transform: scale(1, 1);
    transform: scale(1);
    opacity: 0;
    box-shadow: none;
    }
}
/**********/
.block-4{
  background-color: var(--dark-blue);
  padding: 130px 0 0 418px;
}
.block-4 h5{
  color: var(--white);
  font-size: 35px;
  font-family: "GeometriaNarrowMedium";
  padding-bottom: 130px;
}
.block-4-phone{
  position: relative;
}
.block-4 img{
  position: absolute;
  bottom: 0;
  width: 75%;
}
/***********/
.block-5{
  width: 92vw;
  /*height: 100vh;*/
  height: auto;
  background-color: var(--background);
  padding: 200px 140px 0 140px;
}
.block-5 .title{
  color: var(--dark-blue);
  font-size: 35px;
  font-family: "GeometriaNarrowMedium";
}
.block-5 img{
  margin-bottom: 70px;
  width: 70%;
}
.block-5 span{
  color: var(--grey);
  font-size: 18px;
  font-family: "GeometriaNarrowMedium";
}
/***********/
.block-6{
  background-color: var(--background);
  padding: 200px 265px 100px 8vw;
  width: 100%;
  /*height: 100vh;*/
  height: auto;
}
.block-6 .title{
  color: var(--dark-blue);
  font-size: 35px;
  font-family: "GeometriaNarrowMedium";
  padding-bottom: 120px;
}
.block-6 .cont-img{
  padding-right: 40px;
}
.loc h6,
.phone h6,
.email h6{
  color: var(--gold);
  font-size: 20px;
  font-family: "GeometriaNarrowMedium";
  margin: 0;
  padding: 0;
}
.loc p,
.phone p,
.email p{
  color: var(--dark-blue);
  font-size: 20px;
  font-family: "GeometriaNarrowMedium";
  margin: 0;
  padding: 0;
}
.loc p > a,
.phone p > a,
.email p > a{
  color: var(--dark-blue);
  font-size: 20px;
  font-family: "GeometriaNarrowMedium";
  margin: 0;
  padding: 0;
}
.h-100{
  height: 100%;
}
.h-120px{
  height: 120px;
}
.cont-email{
  display: flex;
  flex-direction: column;
}
.email{
  display: flex;
  flex-direction: row;
  align-items: baseline;
}
#kotirowki{
  position: absolute;
  right: 0;
  bottom: 0;
  width: 40%;
  height: auto;
  transition: .7s;
  z-index: -1;
  transform: translateY(93%);
}
#kotirowki.active{
  z-index: 1;
  transform: translateY(0);
  transition: .7s;
  opacity: 0.2;
}
#kotirowki.active:hover{
  transition: .7s;
  opacity: 1;
}
.kotirowki-header{
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--sea-blue);
  padding: 12px 20px;
}

.kotirowki-header a{
  text-decoration: none;
}
.kotirowki-header h6{
  font-family: "GeometriaNarrowMedium";
  font-size: 20px;
  color: var(--white);
  margin: 0;
}
#kotirowki table{
  width: 100%;
}
#kotirowki table thead{
  color: white;
}
#kotirowki table thead tr{
  background-color: var(--dark-blue);
}
#kotirowki table thead tr > th{
  font-family: "GeometriaNarrowMedium";
  font-size: 20px;
  padding-left: 20px;
  padding-top: 12px;
  padding-bottom: 12px;
  font-weight: 100;
}

#kotirowki table tbody tr:nth-child(even){
  background-color: rgba(7, 33, 91, 0.9);
}
#kotirowki table tbody tr:nth-child(odd){
  background-color: rgba(7, 33, 91, 0.6);
}
#kotirowki table tbody tr > td{
  font-family: "GeometriaNarrowMedium";
  font-size: 20px;
  padding-left: 20px;
  padding-top: 18px;
  padding-bottom: 18px;
  font-weight: 100;
  color: white;
}
#kotirowki table tbody tr > td:last-child{
  padding-left: 0;
}
.kot-page{
  margin-right: 30px;
}
.kotirowki-close{
  width: 25px;
  cursor: pointer;
  opacity: 60%;
}
@-webkit-keyframes rotate {
  100% { -webkit-transform: rotate(-360deg); }
}
@keyframes rotate {
  100% { transform: rotate(-360deg); }
}
.arrow-kat-cont-open{
  padding: 10px;
  background-color: var(--sea-blue);
  width: 40px;
  height: 40px;
  position: absolute;
  bottom: 0;
  right: 10%;
  text-align: center;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  z-index: 1;
  cursor: pointer;
  transition: 0.3s;
}
.arrow-kat-cont-open.active{
  opacity: 0;
  transition: 0.3s;
}
.arrow-kat {
  border: solid white;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 7px;
}
.up{
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
  transition: .3s;
}
.down {
  transition: .3s;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
.marquee-container{
  background-color:  var(--dark-blue);
  height: 30px;
}
.marquee .string{
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
}
.marquee .string .element{
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-right: 40px;
}
.marquee .string .element p,
.marquee .string .element span,
.marquee .string .element img{
  padding: 0;
  margin: 0;
}
.marquee .string .element p,
.marquee .string .element span{
  color: white;
  font-family: "GeometriaNarrowMedium";
  font-size: 16px;
  margin-right: 10px;
}
.marquee .string .element img{
  width: auto;
  height: 16px;
}
</style>
