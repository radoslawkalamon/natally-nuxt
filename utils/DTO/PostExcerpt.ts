import { formatterDatePublished } from '@/utils/formatter.date.published'

type PostExcerptConstructor = {
  id: string;
  datePublished: string;
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
    this.datePublished = formatterDatePublished(datePublished)
    this.title = title
    this.url = url
  }
}
