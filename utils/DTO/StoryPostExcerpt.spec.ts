import StoryPostExcerpt from '@/utils/DTO/StoryPostExcerpt'

jest.mock('@/utils/formatter.date.published', () => () => 'Mocked date formatter')
jest.mock('@/utils/formatter.time.reading', () => () => 'Mocked time formatter')

describe('Utils / DTO / Poem Post Excerpt', () => {
  let storyPostExcerpt: StoryPostExcerpt

  beforeAll(() => {
    storyPostExcerpt = new StoryPostExcerpt({
      id: '123',
      coverImage: '/cover-image-url.webp',
      coverImage2x: '/cover-image-url-2x.webp',
      datePublished: 1634302144000,
      isAudiobook: true,
      readingTime: 10,
      title: 'Test title',
      url: '/test-url'
    })
  })

  test('shall format data properly', () => {
    expect(storyPostExcerpt).toMatchSnapshot({
      id: '123',
      coverImage: '/cover-image-url.webp',
      coverImage2x: '/cover-image-url-2x.webp',
      datePublished: 'Mocked date formatter',
      isAudiobook: true,
      readingTime: 'Mocked time formatter',
      title: 'Test title',
      url: '/test-url'
    })
  })
})
