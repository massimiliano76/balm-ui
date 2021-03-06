<template>
  <div :class="className">
    <input
      :id="id"
      v-model="checkedValue"
      class="mdc-radio__native-control"
      type="radio"
      :name="name"
      :value="value"
      :disabled="disabled"
      v-bind="attrs"
      @change="handleChange"
    />
    <div class="mdc-radio__background">
      <div class="mdc-radio__outer-circle"></div>
      <div class="mdc-radio__inner-circle"></div>
    </div>
    <div class="mdc-radio__ripple"></div>
  </div>
</template>

<script>
import { MDCRadio } from '../../../material-components-web/radio';
import elementMixin from '../../mixins/element';

// Define radio constants
const UI_RADIO = {
  cssClasses: {
    touch: 'mdc-radio--touch'
  },
  EVENT: {
    CHANGE: 'change'
  }
};

export default {
  name: 'ui-radio',
  mixins: [elementMixin],
  model: {
    prop: 'model',
    event: UI_RADIO.EVENT.CHANGE
  },
  props: {
    // States
    model: [String, Number],
    // Element attributes
    name: String,
    value: [String, Number],
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      $radio: null,
      checkedValue: this.model
    };
  },
  computed: {
    className() {
      const isTouch =
        this.$el && this.$el.classList.contains(UI_RADIO.cssClasses.touch);

      return {
        'mdc-radio': true,
        'mdc-radio--disabled': this.disabled,
        // Touch Target
        'mdc-radio--touch': isTouch
      };
    }
  },
  watch: {
    model(val) {
      this.checkedValue = val;
    }
  },
  mounted() {
    this.$radio = new MDCRadio(this.$el);
    this.$radio.checked = this.checkedValue == this.value;

    this.$nextTick(() => {
      if (this.$parent.$formField) {
        this.$parent.$formField.input = this.$radio;
      }
    });
  },
  methods: {
    handleChange() {
      this.$emit(UI_RADIO.EVENT.CHANGE, this.checkedValue);
    }
  }
};
</script>
