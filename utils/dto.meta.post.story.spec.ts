import { DTOMetaPostStory } from '@/utils/dto.meta.post.story'

describe('Utils / DTO / Meta / Post / Story', () => {
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
      expect(dtoMetaPostStory).toMatchSnapshot()
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
      expect(dtoMetaPostStory).toMatchSnapshot()
    })
  })
})
