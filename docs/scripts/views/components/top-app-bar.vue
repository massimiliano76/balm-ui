<template>
  <div class="demo--top-app-bar">
    <ui-top-app-bar
      contentSelector="#content-main"
      navId="demo-menu"
      :type="typeOption"
      :title="title"
    >
      <template #toolbar="{ itemClass }">
        <template v-if="!isShort">
          <ui-icon-a :class="itemClass" icon="file_download"></ui-icon-a>
          <ui-icon-a :class="itemClass" icon="print"></ui-icon-a>
          <ui-icon-a :class="itemClass" icon="bookmark"></ui-icon-a>
        </template>
        <ui-menu-anchor v-if="isShort">
          <ui-icon-button
            :class="itemClass"
            icon="more_vert"
            @click="$balmUI.onOpen('showMoreActions')"
          ></ui-icon-button>
          <ui-menu
            v-model="showMoreActions"
            :items="['Back', 'Forward', 'Reload', '-', 'Settings']"
          ></ui-menu>
        </ui-menu-anchor>
      </template>
    </ui-top-app-bar>

    <ui-drawer type="modal" v-model="openDrawer" menuSelector="#demo-menu">
      <ui-drawer-header
        :innerClass="[$themeColor('on-primary'), $themeColor('primary-bg')]"
      >
        <ui-drawer-title>Header here</ui-drawer-title>
      </ui-drawer-header>
      <ui-drawer-content>
        <ui-list>
          <ui-item activated @click="$router.back()">
            <ui-item-first-content>
              <ui-icon>arrow_back</ui-icon>
            </ui-item-first-content>
            <ui-item-text-content>Back</ui-item-text-content>
          </ui-item>
          <ui-item-divider></ui-item-divider>
        </ui-list>
      </ui-drawer-content>
    </ui-drawer>

    <ui-drawer-backdrop></ui-drawer-backdrop>

    <main class="demo-main">
      <div :class="$tt('body1')" id="content-main">
        <header class="hero component">
          <h3 :class="$tt('headline3')">Top App Bar</h3>
        </header>

        <ui-toc-affix></ui-toc-affix>

        <div :class="$tt('body2')">
          <h4 v-anchor:id="'ui-usage'" :class="$tt('headline4')">0. Usage</h4>
          <ui-markdown :text="code[0]"></ui-markdown>

          <h4 v-anchor:id="'ui-demo'" :class="$tt('headline4')">1. Demo</h4>
          <div class="demo-controls">
            <ui-select :options="TypeOptions" v-model="typeOption"
              >Type</ui-select
            >
            <ui-textfield v-model="title">Title</ui-textfield>
          </div>
          <p v-for="i in 12" :key="i" class="demo-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <ui-snippet :code="code[1]"></ui-snippet>

          <h4 v-anchor:id="'ui-apis'" :class="$tt('headline4')">2. APIs</h4>
          <ui-markdown :text="docs['top-app-bar']"></ui-markdown>

          <h4 v-anchor:id="'ui-sass'" :class="$tt('headline4')">
            3. Sass Variables
          </h4>
          <ui-markdown :text="docs.css"></ui-markdown>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import snippets from '@/mixins/snippets';
import DrawerMixin from '@/mixins/drawer';

const TypeOptions = [
  {
    label: 'Standard',
    value: 0
  },
  {
    label: 'Fixed',
    value: 1
  },
  {
    label: 'Dense',
    value: 2
  },
  {
    label: 'Prominent',
    value: 3
  },
  {
    label: 'Prominent and Dense',
    value: 4
  },
  {
    label: 'Short',
    value: 5
  },
  {
    label: 'Short, Always Collapsed',
    value: 6
  }
];

export default {
  metaInfo: {
    titleTemplate: '%s - Top App Bar'
  },
  mixins: [snippets, DrawerMixin],
  data() {
    return {
      // hero
      TypeOptions,
      typeOption: 0,
      title: 'Hello BalmUI',
      openDrawer: false,
      showMoreActions: false
    };
  },
  computed: {
    isShort() {
      return this.typeOption === 5 || this.typeOption === 6;
    }
  },
  created() {
    this.initDocs('top-app-bar', {
      code: 1,
      apis: ['top-app-bar'],
      css: true
    });
  }
};
</script>
