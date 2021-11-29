import flushPromises from 'flush-promises'
import { createWrapper } from '@vue/test-utils'
import {
  createComponentFromMixin,
  createIntegrationTestWrapper,
  createUnitTestWrapper
} from '@/devtools/jest.common.spec.utils'

type Wrapper = Awaited<ReturnType<typeof createUnitTestWrapper>> | Awaited<ReturnType<typeof createIntegrationTestWrapper>>

export const expectHeadMatchSnapshot = ({ wrapper }: {
  wrapper: Wrapper
}) => {
  if (wrapper.vm.$options.head) {
    const head = typeof wrapper.vm.$options.head === 'function'
      ? wrapper.vm.$options.head()
      : wrapper.vm.$options.head
    expect(head).toMatchSnapshot()
  }
}

export const expectRootEmit = ({ name, wrapper }: {
  name: string,
  wrapper: Wrapper
}) => {
  const rootWrapper = createWrapper(wrapper.vm.$root)
  const isEventEmitted = rootWrapper.emitted(name)
  expect(isEventEmitted).toBeTruthy()
}

export const expectWrapperEmitOn = ({ emit, trigger, wrapper }: {
  emit: string,
  trigger: string,
  wrapper: Wrapper
}) => {
  wrapper.trigger(trigger)
  const emitted = wrapper.emitted(emit)
  expect(emitted).toHaveLength(1)
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
