<template>
  <li :class="className" @click="handleClick">
    <slot name="before" :iconClass="UI_LIST.cssClasses.firstTile"></slot>
    <slot><!-- text content --></slot>
    <slot name="after" :iconClass="UI_LIST.cssClasses.lastTile"></slot>
  </li>
</template>

<script>
import UI_LIST from './constants';

export default {
  name: 'ui-item',
  props: {
    // States
    selected: {
      type: Boolean,
      default: false
    },
    activated: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      UI_LIST
    };
  },
  computed: {
    className() {
      let result = [UI_LIST.cssClasses.item];

      if (this.selected) {
        result.push(UI_LIST.cssClasses.selected);
      } else if (this.activated) {
        result.push(UI_LIST.cssClasses.activated);
      }

      return result;
    }
  },
  mounted() {
    if (!this.$parent.nonInteractive) {
      // this.$parent.initRipple(this.$el);
    }
  },
  methods: {
    handleClick(event) {
      this.$emit(UI_LIST.EVENT.CLICK, event);
    }
  }
};
</script>
