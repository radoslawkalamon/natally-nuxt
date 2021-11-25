import Vue from 'vue'
import type { VueConstructor } from 'vue'
import { mount, shallowMount } from '@vue/test-utils'
import merge from 'lodash/merge'

type mountArguments = Parameters<typeof mount>;
type shallowMountArguments = Parameters<typeof shallowMount>;

export const createComponentFromMixin = ({ mixin, options = undefined }: {
  mixin: ReturnType<typeof Vue.extend>,
  options?: Parameters<typeof Vue.extend>
}) => {
  return (Vue as VueConstructor<Vue & InstanceType<typeof mixin>>).extend(
    merge(options, {
      mixins: [mixin],
      template: '<div />'
    })
  )
}

export const createDefaultOptionsFactory = (defaultOptions: shallowMountArguments[1] | mountArguments[1]) => {
  return (options: shallowMountArguments[1] | mountArguments[1]) => merge(defaultOptions, options)
}

export const createIntegrationTestWrapper = async ({ component, options = {} }: {
  component: mountArguments[0],
  options?: mountArguments[1]
}) => {
  const context = {}
  /**
  * If ever need to fire asyncData before shallowMount() / mount(),
  * please refer to this Stack Overflow answer:
  * https://stackoverflow.com/a/62201592
  */
  const wrapper = mount(component, merge({
    stubs: [
      'ClientOnly',
      'Nuxt',
      'NuxtContent',
      'NuxtLink'
    ]
  }, options))

  if (wrapper.vm.$options.fetch) {
    // @ts-ignore: Mock Nuxt Context
    await wrapper.vm.$options.fetch.call(wrapper.vm, context)
  }

  return wrapper
}

export const createUnitTestWrapper = async ({ component, options = {} }: {
  component: shallowMountArguments[0],
  options?: shallowMountArguments[1]
}) => {
  const context = {}
  /**
  * If ever need to fire asyncData before shallowMount() / mount(),
  * please refer to this Stack Overflow answer:
  * https://stackoverflow.com/a/62201592
  */
  const wrapper = shallowMount(component, merge({
    stubs: [
      'ClientOnly',
      'Nuxt',
      'NuxtContent',
      'NuxtLink'
    ]
  }, options))

  if (wrapper.vm.$options.fetch) {
    // @ts-ignore: Mock Nuxt Context
    await wrapper.vm.$options.fetch.call(wrapper.vm, context)
  }

  return wrapper
}
