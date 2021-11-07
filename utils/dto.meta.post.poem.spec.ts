import { DTOMetaPostPoem } from '@/utils/dto.meta.post.poem'

describe('Utils / DTO / Meta / Post / Poem', () => {
  let dtoMetaPostPoem: DTOMetaPostPoem

  beforeAll(() => {
    dtoMetaPostPoem = new DTOMetaPostPoem({
      createdAt: '2021-11-01T00:00:00+00:00',
      description: 'Test Description',
      imageCover: 'image-cover.webp',
      imageOpenGraph: 'image-open-graph.png',
      path: '/test-url',
      title: 'Test title',
      updatedAt: '2021-11-01T00:00:00+00:00'
    })
  })

  test('shall match snapshot', () => {
    expect(dtoMetaPostPoem).toMatchSnapshot()
  })
})
