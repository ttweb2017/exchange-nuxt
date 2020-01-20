<template>
  <div>
    <article class="contacts">
      <div class="content container-fluid">
        <div class="contact-1">
          <v-row>
            <v-col
              sm="12"
              md="4"
              lg="4"
              xl="4"
            >
              <div class="links">
                <p>
                  workingHrsTitle
                </p>
                <span class="day">
                  mondayFriday
                </span>
                <br>
                <span class="time">
                  workingHrs
                </span>
              </div>
            </v-col>
            <v-col
              sm="12"
              md="4"
              lg="4"
              xl="4"
            >
              <div class="links">
                <p>
                  receptionDays
                </p>
                <span class="day">
                  mondayThursday
                </span>
                <br>
                <span class="time">
                  receptionHrs
                </span>
                <br>
                <span class="day">
                  friday
                </span>
                <br>
                <span class="time">
                  fridayHrs
                </span>
              </div>
            </v-col>
          </v-row>
        </div>

        <!-- Contact 3 -->
        <div class="contact-3">
          <v-row>
            <v-col
              sm="12"
              md="12"
              lg="12"
              xl="12"
            >
              <v-row>
                <v-col
                  v-for="department in departments"
                  :key="department.id"
                  sm="6"
                  md="4"
                  lg="3"
                  xl="3"
                >
                  <div class="contact-slide">
                    <div class="slide-header">
                      <h6 class="contact-slide-title">
                        {{ department.title }}
                      </h6>
                      <img
                        v-on:click="showJobPosition(department.id)"
                        :src="require('@/assets/icons/arrow_down.svg')"
                        :class="{'arrow-down' : !isArrowUp, 'arrow-up': isArrowUp}"
                        alt="arrow"
                      >
                    </div>
                    <div :id="`slide-${department.id}`" class="slide">
                      <div v-for="jobPosition in department.jobPositions" :key="jobPosition.id">
                        <span class="contact-slide-sub-title">
                          {{ jobPosition.title }}
                        </span>
                        <div class="phone">
                          <h6>
                            Phone:
                          </h6>
                          <p>
                            <a :href="`tel:${jobPosition.phone}`">
                              {{ jobPosition.phone }}
                            </a>
                          </p>
                        </div>
                        <div class="phone">
                          <h6>
                            Fax:
                          </h6>
                          <p>
                            <a :href="`tel:${jobPosition.fax}`">
                              {{ jobPosition.fax }}
                            </a>
                          </p>
                        </div>
                        <div class="email">
                          <h6>
                            E-mail:
                          </h6>
                          <p>
                            <a :href="`mailto:${jobPosition.email}`">
                              {{ jobPosition.email }}
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  data: () => ({
    isArrowUp: false,
    departments: [
      { id: 1, title: 'dep 1', jobPositions: [{ id: 1, title: 'tit 1', phone: '+91', fax: '+91', email: 'email1' }] },
      { id: 2, title: 'dep 2', jobPositions: [{ id: 2, title: 'tit 2', phone: '+92', fax: '+92', email: 'email2' }] },
      { id: 3, title: 'dep 3', jobPositions: [{ id: 3, title: 'tit 3', phone: '+93', fax: '+93', email: 'email3' }] }
    ]
  }),
  methods: {
    showJobPosition (id) {
      // const slide = document.getElementById('slide-' + id)
      console.log(id)
      this.isArrowUp = true
    }
  }
}
</script>

<style scoped>
#map{
    width: 100%;
    height: 600px;
}
#map .ymaps-2-1-75-zoom{
    display: none!important;
}
.contacts{
    max-width: 100vw;
    display: flex;
    position: relative;
    padding: 250px 5% 50px calc(250px - 6vw);
}
.contacts .content{
    width: 90vw;
    position: relative;

}

.content > .contact-1,
.content > .contact-2,
.content > .contact-3{
    padding-bottom: 100px;
}
.content .title{
    font-size: 45px;
    font-family: "GeometriaNarrowMedium";
    color: var(--dark-blue);
    padding-bottom: 100px;
}
.content .desc{
    font-size: 25px;
    font-family: "GeometriaNarrowMedium";
    color: var(--grey);
}
.content .desc a,
.content .desc span{
    font-size: 25px;
    font-family: "GeometriaNarrowMedium";
    color: var(--dark-blue);
}
.content .links{
    padding-bottom: 30px;
}
.content .links p{
    font-size: 20px;
    font-family: "GeometriaNarrowMedium";
    color: var(--grey);
    padding-right: 50px;
}
.content .links .day{
    font-size: 20px;
    font-family: "GeometriaNarrowMedium";
    color: var(--gold);
    padding-right: 50px;
}
.content .links .time{
    font-size: 20px;
    font-family: "GeometriaNarrowMedium";
    color: var(--dark-blue);
    padding-right: 50px;
}
.content .title-block{
    font-size: 35px;
    font-family: "GeometriaNarrowMedium";
    color: var(--dark-blue);
    padding-bottom: 100px;
}
.contacts-icon > div{
    padding-bottom: 100px;
}
.contacts-icon .cont-img{
    padding-right: 40px;
}
.contacts-icon .loc h6,
.contacts-icon .phone h6,
.contacts-icon .email h6{
    color: var(--gold);
    font-size: 20px;
    font-family: "GeometriaNarrowMedium";
    margin: 0;
    padding: 0;
}
.contacts-icon .loc p,
.contacts-icon .phone p,
.contacts-icon .email p{
    color: var(--dark-blue);
    font-size: 20px;
    font-family: "GeometriaNarrowMedium";
    margin: 0;
    padding: 0;
}
.contacts-icon .loc p > a,
.contacts-icon .phone p > a,
.contacts-icon .email p > a{
    color: var(--dark-blue);
    font-size: 20px;
    font-family: "GeometriaNarrowMedium";
    margin: 0;
    padding: 0;
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
.contact-slide{
    padding-bottom: 50px;
}
.slide-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 20px;
    padding-right: 20px;
}
.slide-header img{
    cursor: pointer;
}
.slide-header .contact-slide-title{
    color: var(--dark-blue);
    font-size: 25px;
    font-family: "GeometriaNarrowMedium";
    padding-right: 5px;
}
.contact-slide-sub-title{
    color: var(--grey);
    font-size: 16px;
    font-family: "GeometriaNarrowMedium";
    padding-bottom: 20px;
}
.slide{

    display: none;
}

.slide .loc h6,
.slide .phone h6,
.slide .email h6{
    color: var(--gold);
    font-size: 20px;
    font-family: "GeometriaNarrowMedium";
    margin: 0;
    padding: 0;
}
.slide .loc p,
.slide .phone p,
.slide .email p{
    color: var(--dark-blue);
    font-size: 20px;
    font-family: "GeometriaNarrowMedium";
    margin: 0;
    padding: 0;
}
.slide .loc p > a,
.slide .phone p > a,
.slide .email p > a{
    color: var(--dark-blue);
    font-size: 20px;
    font-family: "GeometriaNarrowMedium";
    margin: 0;
    padding: 0;
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
.slide .email{
    flex-direction: column;
}
.arrow-down{
    transform: scaleY(1);
    transition: .3s;
}
.arrow-down.arrow-up{
    transform: scaleY(-1);
    transition: .3s;
}
.burger > span,
.burger > span::before,
.burger > span::after {
    background-color: var(--dark-blue)!important;
}
.tel a{
    opacity: 1!important;
    color: var(--dark-blue)!important;
}
.lang li a{
    opacity: 1!important;
    color: var(--grey)!important;
}
</style>
