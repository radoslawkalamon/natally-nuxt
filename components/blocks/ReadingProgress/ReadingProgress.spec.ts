import ReadingProgress from '@/components/blocks/ReadingProgress/ReadingProgress.vue'
import { shallPassIntegrationSanityTest } from '@/devtools/jest.common.spec'
import { createIntegrationTestWrapper } from '@/devtools/jest.common.spec.utils'

jest.mock('lodash/throttle', () => (cb: Function) => cb)

const appendTextStories = (): HTMLDivElement => {
  const elementTextStories = document.createElement('div')
  elementTextStories.setAttribute('class', 'text-stories')
  document.body.appendChild(elementTextStories)
  return elementTextStories
}

const expectComponentToMatchSnapshot = async (boundingClientRectMock: ReturnType<HTMLElement['getBoundingClientRect']>) => {
  const textStories = appendTextStories()
  textStories.getBoundingClientRect = jest.fn(() => boundingClientRectMock)
  const wrapper = await createIntegrationTestWrapper({
    component: ReadingProgress,
    options: {
      attachTo: document.body
    }
  })

  expect(wrapper.html()).toMatchSnapshot()

  textStories.remove()
  wrapper.destroy()
}

describe('Blocks / Reading Progress', () => {
  describe('Integration', () => {
    beforeEach(() => {
      window.innerHeight = 600
    })

    afterEach(() => {
      jest.resetAllMocks()
    })

    shallPassIntegrationSanityTest({
      component: ReadingProgress
    })

    test('shall progress equal 0', async () => {
      await expectComponentToMatchSnapshot({
        bottom: 1559,
        height: 899,
        left: 440,
        right: 1080,
        top: 660,
        width: 640,
        x: 440,
        y: 660
      } as ReturnType<HTMLElement['getBoundingClientRect']>)
    })

    test('shall progress be between 0 & 100', async () => {
      await expectComponentToMatchSnapshot({
        bottom: 839,
        height: 899,
        left: 440,
        right: 1080,
        top: -60,
        width: 640,
        x: 440,
        y: -60
      } as ReturnType<HTMLElement['getBoundingClientRect']>)
    })

    test('shall progress be equal 100', async () => {
      await expectComponentToMatchSnapshot({
        bottom: -168,
        height: 899,
        left: 440,
        right: 1080,
        top: -1067,
        width: 640,
        x: 440,
        y: -1067
      } as ReturnType<HTMLElement['getBoundingClientRect']>)
    })
  })
})
