import PoemPostExcerpt from '@/utils/DTO/PoemPostExcerpt'

jest.mock('@/utils/formatter.date.published', () => () => 'Mocked date formatter')

describe('Utils / DTO / Poem Post Excerpt', () => {
  let poemPostExcerpt: PoemPostExcerpt

  beforeAll(() => {
    poemPostExcerpt = new PoemPostExcerpt({
      id: '123',
      coverImage: '/cover-image-url.webp',
      datePublished: 1634302144000,
      title: 'Test title',
      url: '/test-url'
    })
  })

  test('shall format data properly', () => {
    expect(poemPostExcerpt).toMatchSnapshot({
      id: '123',
      coverImage: '/cover-image-url.webp',
      datePublished: 'Mocked date formatter',
      title: 'Test title',
      url: '/test-url'
    })
  })
})
