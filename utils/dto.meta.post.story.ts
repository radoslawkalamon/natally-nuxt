import { DTOMetaPage, DTOMetaPageConstructor } from '@/utils/dto.meta.page'

export type DTOMetaPostStoryConstructor = DTOMetaPageConstructor & {
  audiobookId?: string;
  imageCover: string;
  imageCover2x: string;
  timeReading: number;
}

export class DTOMetaPostStory extends DTOMetaPage {
  readonly audiobookId: string
  readonly imageCover: string
  readonly imageCover2x: string
  readonly timeReading: number

  constructor ({
    audiobookId = '0',
    createdAt,
    description,
    imageCover,
    imageCover2x,
    imageOpenGraph,
    path,
    timeReading,
    title,
    updatedAt
  }: DTOMetaPostStoryConstructor) {
    super({
      createdAt,
      description,
      imageOpenGraph,
      path,
      title,
      updatedAt
    })

    this.audiobookId = audiobookId.toString()
    this.imageCover = `/images/${imageCover}`
    this.imageCover2x = `/images/${imageCover2x}`
    this.timeReading = timeReading
  }
}
