<template>
  <div :class="[$tt('body1'), 'demo--image-list']">
    <header class="hero component">
      <ui-image-list class="hero-image-list">
        <ui-image-item v-for="i in 15" :key="i" block></ui-image-item>
      </ui-image-list>
    </header>

    <ui-toc-affix></ui-toc-affix>

    <div :class="$tt('body2')">
      <h3 v-anchor:id="'ui-usage'" :class="$tt('headline4')">0. Usage</h3>
      <ui-markdown :text="code[0]"></ui-markdown>

      <h3 v-anchor:id="'ui-demo'" :class="$tt('headline4')">1. Demo</h3>
      <section :class="['example', { 'rounded-corners': radius }]">
        <ui-form-field>
          <ui-checkbox id="toggle-radius" v-model="radius"></ui-checkbox>
          <label for="toggle-radius">Toggle Rounded Corners</label>
        </ui-form-field>

        <h4 :class="$tt('headline6')">1.1 Standard Image List</h4>
        <ui-image-list-controls v-model="controls1"></ui-image-list-controls>
        <ui-image-list
          id="standard-image-list"
          class="standard-image-list"
          :textProtection="controls1.labelsType === 2"
        >
          <ui-image-item
            v-for="i in 15"
            :key="i"
            :bgImage="require(`@/assets/photos/3x2/${i}.jpg`)"
          >
            <ui-image-text v-if="controls1.labelsType"
              >Text label</ui-image-text
            >
          </ui-image-item>
        </ui-image-list>
        <ui-snippet :code="code[1]"></ui-snippet>

        <h4 :class="$tt('headline6')">1.2 Masonry Image List</h4>
        <ui-image-list-controls
          idPrefix="masonry"
          v-model="controls2"
        ></ui-image-list-controls>
        <ui-image-list
          type="masonry"
          id="masonry-image-list"
          class="masonry-image-list"
          :textProtection="controls2.labelsType === 2"
        >
          <ui-image-item
            v-for="(item, index) in list"
            :key="index"
            :image="require(`@/assets/photos/${item}.jpg`)"
          >
            <ui-image-text v-if="controls2.labelsType">
              Text label
              <template #action>
                <ui-icon-button icon="favorite_border"></ui-icon-button>
              </template>
            </ui-image-text>
          </ui-image-item>
        </ui-image-list>
        <ui-snippet :code="code[2]"></ui-snippet>
      </section>

      <h3 v-anchor:id="'ui-apis'" :class="$tt('headline4')">2. APIs</h3>
      <ui-markdown :text="docs['image-list']"></ui-markdown>
      <ui-markdown :text="docs['image-item']"></ui-markdown>
      <ui-markdown :text="docs['image-text']"></ui-markdown>

      <h3 v-anchor:id="'ui-sass'" :class="$tt('headline4')">
        3. Sass Variables
      </h3>
      <ui-markdown :text="docs.css"></ui-markdown>
    </div>
  </div>
</template>

<script>
import snippets from '@/mixins/snippets';

const UiImageListControls = () =>
  import('@/demos/image-list/image-list-controls');

export default {
  metaInfo: {
    titleTemplate: '%s - Image List'
  },
  components: {
    UiImageListControls
  },
  mixins: [snippets],
  data() {
    return {
      // demo
      radius: false,
      controls1: {
        labelsType: 1
      },
      controls2: {
        labelsType: 1
      },
      list: [
        '3x2/16',
        '2x3/1',
        '3x2/1',
        '2x3/2',
        '2x3/3',
        '3x2/2',
        '2x3/4',
        '3x2/3',
        '2x3/5',
        '3x2/4',
        '2x3/6',
        '3x2/5',
        '2x3/7',
        '3x2/6',
        '3x2/7'
      ]
    };
  },
  created() {
    this.initDocs('image-list', {
      code: 2,
      apis: ['image-list', 'image-item', 'image-text'],
      css: true
    });
  }
};
</script>
