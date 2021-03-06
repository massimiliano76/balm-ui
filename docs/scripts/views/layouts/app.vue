<template>
  <div class="balmui-container">
    <template v-if="noLayout">
      <router-view></router-view>
    </template>
    <template v-else>
      <!-- header -->
      <ui-top-app-bar
        class="balmui-head"
        contentSelector=".balmui-body"
        navId="balmui-menu"
        fixed
      >
        <router-link
          to="/"
          :class="['catalog-title', $themeColor('on-primary')]"
          >BalmUI</router-link
        >
        <template #toolbar="{ itemClass }">
          <a
            :class="[itemClass, 'github']"
            href="https://github.com/balmjs/balm-ui"
          >
            <svg-github></svg-github>
            <span>GitHub</span>
          </a>
        </template>
      </ui-top-app-bar>
      <!-- content -->
      <div class="balmui-body">
        <ui-drawer
          type="dismissible"
          class="balmui-menu"
          menuSelector="#balmui-menu"
          v-model="openDrawer"
        >
          <ui-drawer-content>
            <ui-nav ref="mainmenu" class="catalog-list">
              <template #default="{ itemClass, activatedClass }">
                <template v-for="(item, index) in menu">
                  <router-link
                    v-if="item.icon || item.isSubmenu"
                    :key="`item${index}`"
                    :class="[
                      itemClass,
                      {
                        submenu: item.isSubmenu,
                        'no-icon': !item.icon
                      },
                      $textColor('primary', 'light')
                    ]"
                    :to="item.url"
                    :active-class="activatedClass"
                    @click.native="handleMenu"
                  >
                    <i
                      v-if="item.icon"
                      :class="['catalog-list-icon', `icon-${item.icon}`]"
                    ></i>
                    <span>{{ item.name }}</span>
                  </router-link>
                  <ui-list-divider
                    v-else-if="item === '-'"
                    :key="`divider${index}`"
                  ></ui-list-divider>
                  <h3
                    v-else
                    :key="`head${index}`"
                    :class="$textColor('primary', 'light')"
                  >
                    {{ item.name }}
                  </h3>
                </template>
              </template>
            </ui-nav>
          </ui-drawer-content>
        </ui-drawer>
        <main ref="body" class="balmui-content" v-anchor.offset="60">
          <transition name="loading">
            <div v-if="loading" class="loading-container">
              <ui-spinner active></ui-spinner>
            </div>
            <router-view v-else></router-view>
          </transition>
        </main>
      </div>
    </template>
  </div>
</template>

<script>
import SvgGithub from '@/components/svg-github';
import menu from '@/config/menu';
// import { lang } from '@/config/lang';

export default {
  metaInfo: {
    title: 'BalmUI'
  },
  components: {
    SvgGithub
  },
  data() {
    return {
      menu,
      openDrawer: false,
      loading: false
    };
  },
  computed: {
    noLayout() {
      return this.$route.name
        ? this.$route.meta && this.$route.meta.noLayout
        : true;
    }
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
      this.loading = true;
      next();
    });

    this.$router.afterEach((to, from) => {
      this.loading = false;
      this.$nextTick(() => {
        if (this.$refs.body) {
          setTimeout(() => {
            this.$refs.body.scrollTop = 0;
          }, 1);
        }
      });
    });
  },
  mounted() {
    this.openDrawer = window.innerWidth >= 1024;

    window.addEventListener('balmResize', () => {
      this.openDrawer = window.innerWidth >= 1024;
    });
  },
  methods: {
    // isActiveLang(lang) {
    //   return lang === this.$i18n.locale;
    // },
    // switchLang(lang) {
    //   this.$i18n.locale = lang;
    // },
    handleMenu() {
      if (window.innerWidth < 1024) {
        this.openDrawer = false;
      }
    }
  }
};
</script>
