<template>
  <div>
    <v-app>
      <!-- Exchange Header -->
      <header :class="{'sticky': isScroling}" class="header">
        <div class="d-none d-md-block d-lg-block d-xl-block">
          <div class="d-flex justify-space-between align-start">
            <div v-on:click="burger" :class="{'active': isBurger}" class="burger">
              <span />
            </div>
            <div class="d-flex justify-end align-start pr-5 z-1001">
              <div class="tel">
                <a :class="{'color-dark-blue opacity-1': isBurger}" href="tel:+99361616161">+99361616161</a>
              </div>
              <div id="calendar1" :class="{'color-grey opacity-1': isBurger}" class="calendar head-block">
                {{ time() }}
              </div>
              <ul class="lang pl-0">
                <li :class="{'active': isBurger}">
                  LG
                </li>
                <li
                  v-for="language in languages"
                  :key="language.locale"
                >
                  <a :href="`?lang=${language.locale}`" :class="{'color-grey opacity-1': isBurger}">{{ language.name }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="mobile-header d-block d-sm-block d-md-none d-lg-none d-xl-none d-flex justify-space-between align-center">
          <div v-on:click="burgerMobile" :class="{'active': isMobileBurger}" class="burger-mobile">
            <span />
          </div>
          <div class="logo">
            <img :src="require('@/assets/icons/mobile_logo.svg')" class="img-fluid" alt="">
          </div>
          <div id="calendar2" class="calendar head-block">
            {{ time() }}
          </div>
        </div>
      </header>

      <!-- Exchange Menu -->
      <div :class="{'menu_active': isBurger}" class="menu d-flex justify-space-between align-baseline flex-wrap">
        <div v-for="parent in categories" :key="parent.id" class="flex-1-0-25">
          <div class="menu-title">
            <a v-if="parent.url == '' && parent.page" :href="`/page/${parent.page.id}`">
              {{ parent.title }}
            </a>
            <a v-else :href="parent.url">
              {{ parent.title }}
            </a>
          </div>
          <ul v-if="parent.children.length > 0" class="menu-list ">
            <li v-for="child in parent.children" :key="child.id">
              <a
                v-if="parent.url == '' && parent.page"
                v-on:click="menuAncorItem"
                :href="`/page/${parent.page.id}${child.url}`"
              >
                {{ child.title }}
              </a>
              <a
                v-else
                v-on:click="menuAncorItem"
                :href="`${parent.url}${child.url}`"
                :class="{'quotation-title': child.url == '/quotation'}"
              >
                {{ child.title }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Exchange Mobile Menu -->
      <div :class="{'mobile-menu-container-active': isMobileBurger}" class="mobile-menu-container d-none">
        <div id="dl-menu" class="dl-menuwrapper">
          <ul v-if="categories.length > 0" :class="{'dl-menuopen': isMobileBurger}" class="dl-menu">
            <li
              v-for="(parent, index) in categories"
              :key="parent.id"
              :class="{'background': index%2 == 0}"
            >
              <a
                v-if="parent.url == '' && parent.page"
                :href="`/page/${parent.page.id}`"
              >
                {{ index }} {{ parent.title }}
              </a>
              <a
                v-else
                :href="parent.url"
              >
                {{ index }} {{ parent.title }}
              </a>
              <img :src="require('@/assets/icons/menu-arrow.svg')" alt="">
              <ul v-if="parent.children.length > 0" class="dl-submenu">
                <li
                  v-for="(child, childIndex) in parent.children"
                  :key="child.id"
                  :class="{'background': childIndex%2 == 0}"
                >
                  <a
                    v-if="parent.url == '' && parent.page"
                    :href="`/page/${parent.page.id}`"
                  >
                    {{ childIndex }} {{ parent.title }}
                  </a>
                  <a
                    v-else
                    :href="parent.url"
                  >
                    {{ childIndex }} {{ parent.title }}
                  </a>
                </li>
                <li class="dl-back">
                  <img :src="require('@/assets/icons/menu-arrow.svg')" alt="">
                  <a href="#">
                    Back
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <!-- Exchange Sidebar -->
      <div class="wrraper">
        <aside :class="{'aside': isScroling}" class="z-1001">
          <div :class="{'sticky-aside': isScroling}" class="sidebar d-flex justify-sm-space-between align-center flex-column">
            <div class="logo">
              <a href="/">
                <img :src="require('@/assets/icons/logo.svg')" class="img-fluid" alt="logo">
              </a>
            </div>
            <div class="d-flex justify-end align-center flex-column">
              <div class="kotirowki-btn">
                <a href="/exchange-trading/quotation">
                  <img :src="require('@/assets/icons/quotation.svg')" alt="quotation">
                </a>
              </div>
              <div v-on:click="toggleConverter" class="converter-btn">
                <img :src="require('@/assets/icons/converter.svg')" alt="converter">
              </div>
              <div class="mail">
                <a href="mailto:info@exchange.gov.tm">
                  <img :src="require('@/assets/icons/mail.svg')" alt="mail">
                </a>
              </div>
            </div>
          </div>
        </aside>
        <!-- Exchange Main Content -->
        <main>
          <nuxt />
          <!-- Exchange Footer -->
          <footer>
            <v-container fluid class="footer-container">
              <v-row>
                <v-col xl="12" sm="12" md="12" lg="12" class="mb-3">
                  <h5 class="footer-title">
                    Page Categories
                  </h5>
                </v-col>
                <v-col
                  v-for="(group, i) in categoryGroups"
                  :key="i"
                  xl="3"
                  sm="6"
                  md="4"
                  lg="3"
                >
                  <ul class="footer-menu">
                    <li
                      v-for="category in categories.slice(i * categoryItemsPerRow, (i + 1) * categoryItemsPerRow)"
                      :key="category.id"
                    >
                      <a v-if="category.url == '' && category.page" :href="`/page/${category.page.id}`">
                        {{ category.title }}
                      </a>
                      <a v-else :href="category.url">
                        {{ category.title }}
                      </a>
                    </li>
                  </ul>
                </v-col>
                <v-col xl="12" sm="12" md="12" lg="12" class="mb-3">
                  <h5 class="copyright">
                    © TDHСMB all rights reserved
                  </h5>
                </v-col>
              </v-row>
            </v-container>
          </footer>
        </main>
        <div :class="{ 'converter_active': isShowConverter }" class="converter">
          <div class="header-converter">
            <h5>
              Converter
            </h5>
            <div class="converter-cross active">
              <span />
            </div>
          </div>
          <v-row>
            <v-col sm="12" md="6" lg="6" xl="6">
              <div class="valute">
                <div
                  v-for="(currency, index) in currencies"
                  :key="currency.id"
                  :сurrency-from="currency.code"
                  v-on:click="selectCurrencyFrom($event, currency)"
                  :class="{ 'active': index == fromCurrencyActiveIndex }"
                  class="calc_convert from"
                >
                  {{ currency.code }}
                </div>
              </div>
              <v-text-field
                id="currence-1"
                v-model="convertingCurrency"
                :prefix="fromCurrencyCode"
                solo
                filled
                clearable
                type="number"
              />
              <p class="curs">
                1
                <span class="base-currency">
                  {{ fromCurrencyCode }}
                </span>
                =
                <span class="curs-inner-1">
                  {{ toCurrencyValue / fromCurrencyValue }}
                </span>
                <span class="second-currency">
                  {{ toCurrencyCode }} {{ convertingCurrency }}
                </span>
              </p>
            </v-col>
            <v-col sm="12" md="6" lg="6" xl="6">
              <div class="valute">
                <div
                  v-for="(currency, index) in currencies"
                  :key="currency.id"
                  :class="{ 'active': index == toCurrencyActiveIndex }"
                  :currencyTo="currency.code"
                  v-on:click="selectCurrencyTo($event, currency)"
                  class="calc_convert to"
                >
                  {{ currency.code }}
                </div>
              </div>
              <v-text-field
                id="currence-2"
                :prefix="toCurrencyCode"
                solo
                filled
                clearable
                type="number"
                disabled
              />
              <p class="curs">
                1
                <span class="second-currency">
                  {{ toCurrencyCode }}
                </span>
                =
                <span class="curs-inner-2">
                  {{ fromCurrencyValue / toCurrencyValue }}
                </span>
                <span class="base-currency">
                  {{ fromCurrencyCode }}
                </span>
              </p>
            </v-col>
          </v-row>
        </div>
      </div>
    </v-app>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: true,
    menuDrawer: false,
    menuGroup: null,
    group: null,
    isScroling: false,
    isBurger: false,
    isMobileBurger: false,
    isShowConverter: false,
    fromCurrencyCode: 'TMT',
    fromCurrencyValue: 1,
    fromCurrencyActiveIndex: 0,
    toCurrencyCode: 'TMT',
    toCurrencyValue: 1,
    toCurrencyActiveIndex: 1,
    convertingCurrency: 1,
    crrncy: [],
    languages: [
      { locale: 'en', name: 'EN' },
      { locale: 'tk', name: 'TK' },
      { locale: 'ru', name: 'RU' }
    ],
    currencies: [
      { id: 1, title: 'Russian Ruble', code: 'RUB', value: 18.18000000 },
      { id: 2, title: 'Turkmen Manat', code: 'TMT', value: 1.00000000 },
      { id: 3, title: 'US Dollar', code: 'USD', value: 0.29000000 },
      { id: 4, title: 'Euro', code: 'EUR', value: 0.260000000 }
    ],
    items: [
      { title: 'Kotirowki', image: 'quotation.svg', icon: 'mdi-clipboard-flow' },
      { title: 'Converter', image: 'converter.svg', icon: '' },
      { title: 'Mail', image: 'mail.svg', icon: 'mdi-email' }
    ],
    categoryItemsPerRow: 4,
    categories: [
      { id: 1, title: 'About 1', url: '/about', parent: 0, children: [{ id: 4, title: 'Sub about 4', url: '/sub', parent: 1, children: [], page: [] }], page: [] },
      { id: 2, title: 'About 2', url: '/normative', parent: 0, children: [{ id: 11, title: 'Quotation', url: '/quotation', parent: 2, children: [], page: [] }], page: [] },
      { id: 3, title: 'About 3', url: '', parent: 0, children: [], page: { id: 3 } },
      { id: 5, title: 'About 5', url: '', parent: 0, children: [], page: { id: 5 } },
      { id: 6, title: 'About 6', url: '/finance', parent: 0, children: [], page: [] },
      { id: 7, title: 'About 7', url: '/contacts', parent: 0, children: [], page: [] },
      { id: 9, title: 'About 9', url: '/prices', parent: 0, children: [], page: [] },
      { id: 10, title: 'About 10', url: '/about#structure', parent: 0, children: [], page: { id: 10 } }
    ]
  }),
  computed: {
    categoryGroups () {
      return Array.from(Array(Math.ceil(this.categories.length / this.categoryItemsPerRow)).keys())
    }
  },
  watch: {
    group () {
      this.drawer = false
    },
    menuGroup () {
      this.menuDrawer = false
    }
  },
  mounted () {
    const tempCurrencies = this.currencies
    for (let i = 0; i < tempCurrencies.length; i++) {
      const temp = []
      for (let b = 0; b < tempCurrencies.length; b++) {
        temp[tempCurrencies[b].code] = tempCurrencies[b].value / tempCurrencies[i].value
        /*
        if (tempCurrencies[i].id !== tempCurrencies[b].id) {
          console.log(tempCurrencies[i].id + ' !== ' + tempCurrencies[b].id)
          temp[tempCurrencies[b].code] = tempCurrencies[b].value / tempCurrencies[i].value
        }
        */
      }
      this.crrncy[tempCurrencies[i].code] = temp
    }

    if (tempCurrencies.length >= 1) {
      this.fromCurrencyCode = tempCurrencies[0].code
      this.fromCurrencyValue = tempCurrencies[0].value
      this.toCurrencyCode = tempCurrencies[1].code
      this.toCurrencyValue = tempCurrencies[1].value
    }

    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    time () {
      return new Date().getDate()
    },
    burger (event) {
      const myHtml = document.getElementsByTagName('html')[0]

      if (this.isBurger) {
        this.isBurger = false
        myHtml.classList.remove('overflow-y-hidden')
      } else {
        this.isBurger = true
        myHtml.classList.add('overflow-y-hidden')
      }
    },
    burgerMobile () {
      if (this.isMobileBurger) {
        this.isMobileBurger = false
      } else {
        this.isMobileBurger = true
      }
    },
    toggleConverter (event) {
      if (this.isShowConverter) {
        this.isShowConverter = false
      } else {
        this.isShowConverter = true
      }
    },
    selectCurrencyFrom (event, code) {
      this.fromCurrencyCode = code
      console.log(this.crrncy)
      console.log(this.fromCurrencyCode + ' / ' + this.convertingCurrency + ' / ' + this.crrncy[code][this.toCurrencyCode])
      console.log(this.convertingCurrency * this.crrncy[code][this.toCurrencyCode])

      event.target.classList.add('active')
    },
    selectCurrencyTo (event, code) {
      this.toCurrencyCode = code
      console.log(this.toCurrencyCode + ' / ' + this.convertingCurrency + ' / ' + this.crrncy[code][this.fromCurrencyCode])
      console.log(this.convertingCurrency * this.crrncy[code][this.fromCurrencyCode])
    },
    menuAncorItem () {
      const myHtml = document.getElementsByTagName('html')[0]
      myHtml.classList.remove('overflow-y-hidden')
      this.isBurger = false
    },
    handleScroll (event) {
      if (window.scrollY >= 1) {
        this.isScroling = true
      } else {
        this.isScroling = false
      }
    }
  }
}
</script>

<style>
  .quotation-title {
    color: green;
  }
</style>
