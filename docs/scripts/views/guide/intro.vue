<template>
  <div :class="[$tt('body1'), 'demo--intro']">
    <div :class="[$tt('body2'), 'pure-docs']">
      <ui-markdown :text="docs"></ui-markdown>
      <ui-footer-nav
        :next="{ name: 'Getting Started', url: 'guide.quickstart' }"
      ></ui-footer-nav>
    </div>
  </div>
</template>

<script>
import docs from '@/docs/guide/intro.md';

export default {
  metaInfo: {
    titleTemplate: '%s - Introduction'
  },
  data() {
    return {
      docs
    };
  }
};
</script>
