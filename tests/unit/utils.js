import { mount } from '@vue/test-utils';
import VueLd from '@/plugin'; // Assuming VueLd is a global plugin
import { defaultVueLdOptions } from './dummy';

/**
 * Mounts a Vue component with standardized global settings.
 *
 * @param {Object} component - The Vue component to mount.
 * @param {Object} [options={}] - Additional options for the mount function.
 * @returns {Object} The wrapper object from Vue Test Utils.
 */
export const mountComponent = (component, options = {}) => {
  return mount(component, {
    global: {
      plugins: [[VueLd, defaultVueLdOptions]], // Auto-registers VueLd plugin
      mixins: options.mixins || [],
      mocks: options.mocks || {},
      provide: options.provide || {},
    },
    props: options.props || {},
  });
};

/**
 * Waits for LaunchDarkly's client to be ready before proceeding.
 *
 * @param {Object} wrapper - The mounted component wrapper.
 * @returns {Promise} Resolves when the LaunchDarkly client is ready.
 */
export const ldClientReady = (wrapper) =>
  new Promise((resolve) => {
    wrapper.vm.$ld.ldClient.on('ready', resolve);
  });
