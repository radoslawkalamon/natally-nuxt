import PostExcerpt from '@/utils/DTO/PostExcerpt'

jest.mock('@/utils/formatters/datePublished', () => () => 'Mocked date formatter')

describe('Utils / DTO / Post Excerpt', () => {
  let postExcerpt: PostExcerpt

  beforeAll(() => {
    postExcerpt = new PostExcerpt({
      id: '123',
      datePublished: 1634302144000,
      title: 'Test title',
      url: '/test-url'
    })
  })

  test('shall format data properly', () => {
    expect(postExcerpt.id).toBe('123')
    expect(postExcerpt.datePublished).toBe('Mocked date formatter')
    expect(postExcerpt.title).toBe('Test title')
    expect(postExcerpt.url).toBe('/test-url')
  })
})
