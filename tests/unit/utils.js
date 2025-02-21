import { createApp } from 'vue';
import { mount as vue3Mount } from '@vue/test-utils';

export const mount = async (component, { plugins = [], mixins = [], mocks = {}, props = {} } = {}) => {
  const app = createApp({}); // Ensures Vue is initialized
  return vue3Mount(component, {
    global: {
      plugins: [...plugins, app],
      mixins,
      mocks,
      provide: app.config.globalProperties,
    },
    props,
  });
};

export const ldClientReady = (wrapper) =>
  new Promise((resolve) => {
    wrapper.vm.$ld.ldClient.on('ready', resolve);
  });
