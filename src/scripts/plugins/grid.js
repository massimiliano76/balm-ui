import autoInstall from '../config/auto-install';

// Define grid constants
const GRID_PROPERTY = ['margin', 'gutter', 'column-width'];
const TYPE_OF_DEVICE = ['desktop', 'tablet', 'phone'];

const BalmUI_GridPlugin = {
  install(Vue) {
    const $setGrid = (_property, size, value) => {
      if (GRID_PROPERTY.includes(_property)) {
        if (TYPE_OF_DEVICE.includes(size)) {
          document.documentElement.style.setProperty(
            `--mdc-layout-grid-${_property}-${size}`,
            value
          );
        } else {
          console.warn(
            'Please set a device type: ' + JSON.stringify(TYPE_OF_DEVICE)
          );
        }
      } else {
        console.warn(
          'Please set a grid property: ' + JSON.stringify(GRID_PROPERTY)
        );
      }
    };

    Vue.prototype.$setGrid = $setGrid;
  }
};

autoInstall(BalmUI_GridPlugin);

export default BalmUI_GridPlugin;
