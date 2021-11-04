import { DTOMetaPostStory } from '@/utils/dto.meta.post.story'

describe('Utils / DTO / Meta / Post / Poem', () => {
  describe('no audiobook', () => {
    let dtoMetaPostStory: DTOMetaPostStory

    beforeAll(() => {
      dtoMetaPostStory = new DTOMetaPostStory({
        createdAt: '2021-11-01T00:00:00+00:00',
        description: 'Test Description',
        imageCover: 'image-cover.webp',
        imageCover2x: 'image-cover.2x.webp',
        imageOpenGraph: 'image-open-graph.png',
        path: '/test-url',
        title: 'Test title',
        timeReading: 2,
        updatedAt: '2021-11-01T00:00:00+00:00'
      })
    })

    test('shall match snapshot', () => {
      expect(dtoMetaPostStory).toMatchSnapshot({
        audiobookId: '0',
        createdAt: new Date('2021-11-01T00:00:00+00:00'),
        description: 'Test Description',
        imageCover: '/images/opowiadania/image-cover.webp',
        imageCover2x: '/images/opowiadania/image-cover.2x.webp',
        imageOpenGraph: '/images/opowiadania/image-open-graph.png',
        path: '/test-url',
        title: 'Test title',
        timeReading: 2,
        updatedAt: new Date('2021-11-01T00:00:00+00:00')
      })
    })
  })

  describe('audiobook', () => {
    let dtoMetaPostStory: DTOMetaPostStory

    beforeAll(() => {
      dtoMetaPostStory = new DTOMetaPostStory({
        audiobookId: '123456',
        createdAt: '2021-11-01T00:00:00+00:00',
        description: 'Test Description',
        imageCover: 'image-cover.webp',
        imageCover2x: 'image-cover.2x.webp',
        imageOpenGraph: 'image-open-graph.png',
        path: '/test-url',
        title: 'Test title',
        timeReading: 2,
        updatedAt: '2021-11-01T00:00:00+00:00'
      })
    })

    test('shall match snapshot', () => {
      expect(dtoMetaPostStory).toMatchSnapshot({
        audiobookId: '123456',
        createdAt: new Date('2021-11-01T00:00:00+00:00'),
        description: 'Test Description',
        imageCover: '/images/opowiadania/image-cover.webp',
        imageCover2x: '/images/opowiadania/image-cover.2x.webp',
        imageOpenGraph: '/images/opowiadania/image-open-graph.png',
        path: '/test-url',
        title: 'Test title',
        timeReading: 2,
        updatedAt: new Date('2021-11-01T00:00:00+00:00')
      })
    })
  })
})
