import flushPromises from 'flush-promises'
import {
  createComponentFromMixin,
  createIntegrationTestWrapper,
  createUnitTestWrapper
} from '@/devtools/jest.common.spec.utils'

export const expectHeadMatchSnapshot = ({ wrapper }: {
  wrapper: Awaited<ReturnType<typeof createUnitTestWrapper>> | Awaited<ReturnType<typeof createIntegrationTestWrapper>>
}) => {
  if (wrapper.vm.$options.head) {
    const head = typeof wrapper.vm.$options.head === 'function'
      ? wrapper.vm.$options.head()
      : wrapper.vm.$options.head
    expect(head).toMatchSnapshot()
  }
}

export const shallPassIntegrationSanityTest = ({ component, options }: {} & Parameters<typeof createIntegrationTestWrapper>[0]) => {
  test('shall pass integration sanity test', async () => {
    const wrapper = await createIntegrationTestWrapper({ component, options })
    await flushPromises()
    expect(wrapper.html()).toMatchSnapshot()
    wrapper.destroy()
  })
}

export const shallPassUnitSanityTest = ({ component, options }: {} & Parameters<typeof createUnitTestWrapper>[0]) => {
  test('shall pass unit sanity test', async () => {
    const wrapper = await createUnitTestWrapper({ component, options })
    await flushPromises()
    expect(wrapper.html()).toMatchSnapshot()
    wrapper.destroy()
  })
}

export const shallPassMixinSanityTest = ({ mixin, options }: {} & Parameters<typeof createComponentFromMixin>[0]) => {
  test('shall pass mixin sanity test', async () => {
    const component = createComponentFromMixin({ mixin, options })
    const wrapper = await createUnitTestWrapper({ component })
    await flushPromises()
    wrapper.destroy()
  })
}
