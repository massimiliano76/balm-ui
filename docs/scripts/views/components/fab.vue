<template>
  <div :class="[$tt('body1'), 'demo--fab']">
    <header class="hero component">
      <div class="hero-demo">
        <ui-fab :type="typeOption" :mini="!!mini">
          <!-- :icon="type && leadingIcon ? 'add' : ''" -->
          <template v-if="typeOption && leadingIcon" #before="{ iconClass }">
            <ui-icon :class="iconClass">add</ui-icon>
          </template>
          <template v-if="typeOption">
            <span>Button</span>
          </template>
          <ui-icon v-else>add</ui-icon>
        </ui-fab>
      </div>
      <div class="hero-options">
        <ui-select
          class="hero-option"
          :options="TypeOptions"
          v-model="typeOption"
          >Type</ui-select
        >
        <ui-form-field v-if="typeOption" class="hero-option">
          <ui-checkbox
            id="leading-icon"
            :value="1"
            v-model="leadingIcon"
          ></ui-checkbox>
          <label for="leading-icon">Leading icon</label>
        </ui-form-field>
        <div v-else class="hero-option">
          <ui-form-field>
            <ui-radio
              id="default"
              name="mini"
              :value="0"
              v-model="mini"
            ></ui-radio>
            <label for="default">Default</label>
          </ui-form-field>
          <ui-form-field>
            <ui-radio
              id="mini"
              name="mini"
              :value="1"
              v-model="mini"
            ></ui-radio>
            <label for="mini">Mini</label>
          </ui-form-field>
        </div>
      </div>
    </header>

    <ui-toc-affix></ui-toc-affix>

    <div :class="$tt('body2')">
      <h4 v-anchor:id="'ui-usage'" :class="$tt('headline4')">0. Usage</h4>
      <ui-markdown :text="code[0]"></ui-markdown>

      <ui-fab class="demo-fixed-fab" icon="mode_edit"></ui-fab>

      <h4 v-anchor:id="'ui-demo'" :class="$tt('headline4')">1. Demo</h4>
      <section>
        <h6 :class="$tt('headline6')">1.1 Regular FAB</h6>
        <div class="demo-fabs">
          <figure>
            <ui-fab icon="favorite_border"></ui-fab>
            <figcaption>Standard</figcaption>
          </figure>
          <figure>
            <ui-fab icon="favorite_border" mini></ui-fab>
            <figcaption>Mini</figcaption>
          </figure>
          <figure>
            <ui-fab>
              <template #default="{ iconClass }">
                <svg-logo :class="iconClass"></svg-logo>
              </template>
            </ui-fab>
            <figcaption>
              <div>SVG</div>
            </figcaption>
          </figure>
          <figure>
            <ui-fab mini>
              <template #default="{ iconClass }">
                <svg-logo :class="iconClass"></svg-logo>
              </template>
            </ui-fab>
            <figcaption>
              <div>SVG Mini</div>
            </figcaption>
          </figure>
        </div>
        <ui-snippet :code="code[1]"></ui-snippet>
      </section>

      <section>
        <h6 :class="$tt('headline6')">1.2 Extended FAB</h6>
        <div class="demo-fabs">
          <figure>
            <ui-fab extended>
              <template #before="{ iconClass }">
                <ui-icon :class="iconClass">add</ui-icon>
              </template>
              <span>Create</span>
            </ui-fab>
            <figcaption>Extended (with icon)</figcaption>
          </figure>
          <figure>
            <ui-fab extended>
              <span>Create</span>
              <template #after="{ iconClass }">
                <ui-icon :class="iconClass">add</ui-icon>
              </template>
            </ui-fab>
            <figcaption>Extended (followed by icon)</figcaption>
          </figure>
          <figure>
            <ui-fab extended>Create</ui-fab>
            <figcaption>Extended (without icon)</figcaption>
          </figure>
        </div>
        <ui-snippet :code="code[2]"></ui-snippet>
      </section>

      <section>
        <h6 :class="$tt('headline6')">1.3 Example of Enter and Exit Motions</h6>
        <div class="fab-motion-container">
          <div class="fab-motion-container__view">
            <p>View one (with FAB)</p>
          </div>
          <div
            class="fab-motion-container__view"
            :class="{ 'fab-motion-container__view--exited': !exited }"
          >
            <p>View two (without FAB)</p>
            <p>
              <ui-button
                id="enter-exit-back"
                :disabled="!exited"
                @click="$balmUI.onHide('exited')"
                >Go back</ui-button
              >
            </p>
          </div>
          <ui-fab
            id="enter-exit-add"
            class="demo-absolute-fab"
            icon="add"
            :exited="exited"
            @click="$balmUI.onShow('exited')"
          ></ui-fab>
        </div>
        <ui-snippet :code="code[3]"></ui-snippet>
      </section>

      <section>
        <fieldset>
          <h6 :class="$tt('headline6')">
            1.4 Custom FABs (Using font awesome)
          </h6>
          <ui-fab>
            <i class="fa fa-flag fa-lg"></i>
          </ui-fab>
          <ui-fab>
            <i class="fa fa-smile-o fa-lg"></i>
          </ui-fab>
          <ui-fab>
            <i class="fa fa-camera-retro fa-lg"></i>
          </ui-fab>
          <ui-fab>
            <i class="fa fa-spinner fa-pulse fa-lg fa-fw"></i>
          </ui-fab>
        </fieldset>
        <ui-snippet :code="code[4]"></ui-snippet>
      </section>

      <h4 v-anchor:id="'ui-apis'" :class="$tt('headline4')">2. APIs</h4>
      <ui-markdown :text="docs.fab"></ui-markdown>

      <h4 v-anchor:id="'ui-sass'" :class="$tt('headline4')">
        3. Sass Variables
      </h4>
      <ui-markdown :text="docs.css"></ui-markdown>
    </div>
  </div>
</template>

<script>
import snippets from '@/mixins/snippets';

const TypeOptions = [
  {
    label: 'Regular',
    value: 0
  },
  {
    label: 'Extended',
    value: 1
  }
];

export default {
  metaInfo: {
    titleTemplate: '%s - Fab'
  },
  mixins: [snippets],
  data() {
    return {
      // hero
      TypeOptions,
      typeOption: 0,
      mini: 0,
      leadingIcon: false,
      // demo
      exited: false
    };
  },
  created() {
    this.initDocs('fab', {
      code: 4,
      apis: ['fab'],
      css: true
    });
  }
};
</script>
