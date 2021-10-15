import PoemPostExcerpt from '@/utils/DTO/PoemPostExcerpt'

jest.mock('@/utils/formatters/datePublished', () => () => 'Mocked date formatter')

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
    expect(poemPostExcerpt.id).toBe('123')
    expect(poemPostExcerpt.coverImage).toBe('/cover-image-url.webp')
    expect(poemPostExcerpt.datePublished).toBe('Mocked date formatter')
    expect(poemPostExcerpt.title).toBe('Test title')
    expect(poemPostExcerpt.url).toBe('/test-url')
  })
})
