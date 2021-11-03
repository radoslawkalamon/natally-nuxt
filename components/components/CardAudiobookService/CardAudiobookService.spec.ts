import { mount } from '@vue/test-utils'
import CardAudiobookService from './CardAudiobookService.vue'
import { shallRender } from '@/devtools/jest.shared.spec'

describe('Components / Card Audiobook Service', () => {
  const defaultOptions = {
    propsData: {
      icon: '/images/podcasts/apple.svg',
      name: 'Apple Podcasts',
      url: 'https://apple.com'
    }
  }

  shallRender(CardAudiobookService, defaultOptions)

  test('shall logo have audiobook service name', () => {
    const wrapper = mount(CardAudiobookService, defaultOptions)
    const logo = wrapper.find('[data-test="components-card-audiobook-service-logo"]')
    const logoAlt = logo.element.getAttribute('alt') || ''
    expect(logoAlt).toContain('Apple Podcasts')
  })
})
