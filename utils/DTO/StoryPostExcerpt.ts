import PostExcerpt from '@/utils/DTO/PostExcerpt'
import formatReadingTime from '@/utils/formatters/readingTime'

type StoryPostExcerptConstructor = {
  id: string;
  coverImage: string;
  coverImage2x: string;
  datePublished: number;
  isAudiobook: boolean;
  readingTime: number;
  title: string;
  url: string;
}

export default class StoryPostExcerpt extends PostExcerpt {
  readonly coverImage: string;
  readonly coverImage2x: string;
  readonly isAudiobook: boolean;
  readonly readingTime: string;

  constructor ({ id, coverImage, coverImage2x, datePublished, isAudiobook, readingTime, title, url }: StoryPostExcerptConstructor) {
    super({ id, datePublished, title, url })
    this.coverImage = coverImage
    this.coverImage2x = coverImage2x
    this.isAudiobook = isAudiobook
    this.readingTime = formatReadingTime(readingTime)
  }
}
