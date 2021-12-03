import CardAudiobookService from '@/components/components/CardAudiobookService/CardAudiobookService.vue'
import { shallPassUnitSanityTest } from '@/devtools/jest.common.spec'

describe('Components / Card Audiobook Service', () => {
  describe('Unit', () => {
    shallPassUnitSanityTest({
      component: CardAudiobookService,
      options: {
        propsData: {
          icon: '/images/podcasts/apple.svg',
          name: 'Apple Podcasts',
          url: 'https://apple.com'
        }
      }
    })
  })
})
