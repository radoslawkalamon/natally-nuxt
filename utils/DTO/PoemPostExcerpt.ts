import PostExcerpt from '@/utils/DTO/PostExcerpt'

type PoemPostExcerptConstructor = {
  id: string;
  coverImage: string;
  datePublished: string;
  title: string;
  url: string;
}

export default class PoemPostExcerpt extends PostExcerpt {
  readonly coverImage: string;

  constructor ({ id, coverImage, datePublished, title, url }: PoemPostExcerptConstructor) {
    super({ id, datePublished, title, url })
    this.coverImage = coverImage
  }
}
