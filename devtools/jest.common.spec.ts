
import { createWrapper } from '@vue/test-utils'
import {
  createComponentFromMixin,
  createIntegrationTestWrapper,
  createUnitTestWrapper
} from '@/devtools/jest.common.spec.utils'

/** Awaited<ReturnType<typeof T>> Polyfill */
type AsyncReturnType<T extends (...args: any) => any> = T extends (...args: any) => Promise<infer U> ? U : any
type Wrapper = AsyncReturnType<typeof createUnitTestWrapper> | AsyncReturnType<typeof createIntegrationTestWrapper>

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

export const expectWrapperEmit = ({ emit, wrapper }: {
  emit: string,
  wrapper: Wrapper
}) => {
  const emitted = wrapper.emitted(emit)
  expect(emitted).toHaveLength(1)
}

export const shallPassIntegrationSanityTest = ({ component, options, description }: {
  description?: string
} & Parameters<typeof createIntegrationTestWrapper>[0]) => {
  const testName = ['shall pass integration sanity test', description].filter(e => e).join(' | ')
  test(testName, async () => {
    const wrapper = await createIntegrationTestWrapper({ component, options })
    expect(wrapper.html()).toMatchSnapshot()
    wrapper.destroy()
  })
}

export const shallPassUnitSanityTest = ({ component, options, description }: {
  description?: string
} & Parameters<typeof createUnitTestWrapper>[0]) => {
  const testName = ['shall pass unit sanity test', description].filter(e => e).join(' | ')
  test(testName, async () => {
    const wrapper = await createUnitTestWrapper({ component, options })
    expect(wrapper.html()).toMatchSnapshot()
    wrapper.destroy()
  })
}

export const shallPassMixinSanityTest = ({ mixin, options, description }: {
  description?: string
} & Parameters<typeof createComponentFromMixin>[0]) => {
  const testName = ['shall pass mixin sanity test', description].filter(e => e).join(' | ')
  test(testName, async () => {
    const component = createComponentFromMixin({ mixin, options })
    const wrapper = await createUnitTestWrapper({ component })
    wrapper.destroy()
  })
}
