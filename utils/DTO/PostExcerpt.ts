import formatDatePublished from '@/utils/formatters/datePublished'

type PostExcerptConstructor = {
  id: string;
  datePublished: number;
  title: string;
  url: string;
}

export default class PostExcerpt {
  readonly id: string;
  readonly datePublished: string;
  readonly title: string;
  readonly url: string;

  constructor ({ id, datePublished, title, url }: PostExcerptConstructor) {
    this.id = id
    this.datePublished = formatDatePublished(datePublished)
    this.title = title
    this.url = url
  }
}
