<template>
  <div>
    <v-app>
      <v-app-bar app color="#E8EAED">
        <!-- App bar toggle -->
        <div
          @click.stop="menuDrawer = !menuDrawer"
          class="d-flex justify-content-between align-items-center"
        >
          <div class="burger">
            <span />
          </div>
          <v-app-bar-nav-icon @click.stop="menuDrawer = !menuDrawer" />
        </div>
      </v-app-bar>

      <nav>
        <v-navigation-drawer
          v-model="drawer"
          app
          width="100"
          color="#E8EAED"
          class="exchange-sidebar"
        >
          <!-- Navigation List items-->
          <v-img id="logo" :src="require('@/assets/icons/logo.svg')" />
          <v-list class="btn-list mb-12">
            <v-list-item-group>
              <v-list-item
                v-for="item in items"
                :key="item.title"
                link
              >
                <v-list-item-content class="pt-12">
                  <v-img :src="require(`@/assets/icons/${item.image}`)" width="55" />
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>

        <!-- Second hidden navigation drawer-->
        <v-navigation-drawer
          v-model="menuDrawer"
          app
          absolute
          temporary
          width="100%"
          color="#E8EAED"
          class="side-navigation"
        >
          <!-- Navigation List items-->
          <v-list
            nav
            dense
          >
            <v-list-item-group
              v-model="menuGroup"
              active-class="deep-purple--text text--accent-4"
            >
              <v-list-item>
                <v-list-item-title>Bar</v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>Fizz</v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>Buzz</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>
      </nav>

      <!-- Sizes your content based upon application components -->
      <nuxt />
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
              <ul
                v-for="category in categories.slice(i * categoryItemsPerRow, (i + 1) * categoryItemsPerRow)"
                :key="category.id"
                class="footer-menu"
              >
                <li>
                  <a :href="category.url">
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
    items: [
      { title: 'Kotirowki', image: 'quotation.svg', icon: 'mdi-clipboard-flow' },
      { title: 'Converter', image: 'converter.svg', icon: '' },
      { title: 'Mail', image: 'mail.svg', icon: 'mdi-email' }
    ],
    categoryItemsPerRow: 4,
    categories: [
      { id: 1, title: 'About 1', url: '/about', parent: 0, page: [{ id: 1 }] },
      { id: 2, title: 'About 2', url: '/about', parent: 0, page: [{ id: 2 }] },
      { id: 3, title: 'About 3', url: '/about', parent: 0, page: [{ id: 3 }] },
      { id: 4, title: 'Sub about 4', url: '/about/sub', parent: 1, page: [{ id: 4 }] },
      { id: 5, title: 'About 5', url: '/about', parent: 0, page: [{ id: 5 }] },
      { id: 6, title: 'About 6', url: '/about', parent: 0, page: [{ id: 6 }] },
      { id: 7, title: 'About 7', url: '/about', parent: 0, page: [{ id: 7 }] },
      { id: 8, title: 'About 8', url: '/about', parent: 0, page: [{ id: 8 }] },
      { id: 9, title: 'About 9', url: '/about', parent: 0, page: [{ id: 9 }] },
      { id: 10, title: 'About 10', url: '/about', parent: 0, page: [{ id: 10 }] }
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
  }
}
</script>

<style>
  :root {
    --white: #ffffff;
    --blue: #003197;
    --dark-blue: #07215B;
    --sea-blue: #0056FF;
    --deep-green: #23eaa4;
    --gold: #ABA17D;
    --grey: #80868B;
    --other-grey: #F6F5F1;
    --background: #E8EAED;
  }
  .burger {
    position: relative;
    display: flex;
    align-items: center;
    width: 50px;
    height: 50px;
    cursor: pointer;
    z-index: 1001;
  }
  .burger > span::after {
    content: '';
    top: 15px;
    width: 80%;
  }
  .burger > span::before {
    content: '';
    top: -15px;
  }
  .burger > span, .burger > span::before, .burger > span::after {
    background-color: var(--dark-blue) !important;
  }
  .burger > span, .burger > span::before, .burger > span::after {
    display: block;
    position: absolute;
    width: 100%;
    height: 4px;
    background-color: var(--white);
    transition-duration: .25s;
    border-radius: 4px;
  }
  #logo {
    margin: 60px auto;
    width: 70px;
  }
  .exchange-sidebar {
    box-shadow: 6px 0px 5px 0px rgba(0, 0, 0, 0.3);
  }
  .btn-list {
    position: absolute;
    bottom: 0;
    right: 6px;
  }
  footer {
    background-color: var(--dark-blue);
  }
  footer .footer-container {
    padding-left: 150px;
    text-align: left;
    min-height: unset;
  }
  footer .footer-title {
    font-family: "GeometriaNarrowMedium";
    color: #ffffff;
    opacity: 60%;
    font-size: 16px;
  }
  footer .footer-menu {
    padding: 0;
    list-style: none;
  }
  footer .footer-menu li a {
    font-family: "GeometriaNarrowMedium";
    color: var(--white);
    font-size: 16px;
    text-decoration: none;
  }
  footer .footer-menu li a:hover {
    text-decoration: underline;
  }
  footer .copyright {
    font-family: "GeometriaNarrowMedium";
    color: #ffffff;
    opacity: 30%;
    font-size: 16px;
  }
</style>
