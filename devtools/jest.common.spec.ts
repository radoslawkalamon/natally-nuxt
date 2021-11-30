import {
  createComponentFromMixin,
  createIntegrationTestWrapper,
  createUnitTestWrapper
} from '@/devtools/jest.common.spec.utils'

/** Awaited<ReturnType<typeof T>> Polyfill */
type AsyncReturnType<T extends (...args: any) => any> = T extends (...args: any) => Promise<infer U> ? U : any

export const expectHeadMatchSnapshot = ({ wrapper }: {
  wrapper: AsyncReturnType<typeof createUnitTestWrapper> | AsyncReturnType<typeof createIntegrationTestWrapper>
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
    expect(wrapper.html()).toMatchSnapshot()
    wrapper.destroy()
  })
}

export const shallPassUnitSanityTest = ({ component, options }: {} & Parameters<typeof createUnitTestWrapper>[0]) => {
  test('shall pass unit sanity test', async () => {
    const wrapper = await createUnitTestWrapper({ component, options })
    expect(wrapper.html()).toMatchSnapshot()
    wrapper.destroy()
  })
}

export const shallPassMixinSanityTest = ({ mixin, options }: {} & Parameters<typeof createComponentFromMixin>[0]) => {
  test('shall pass mixin sanity test', async () => {
    const component = createComponentFromMixin({ mixin, options })
    const wrapper = await createUnitTestWrapper({ component })
    wrapper.destroy()
  })
}
