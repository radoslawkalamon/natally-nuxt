import { DTOMetaPage, DTOMetaPageConstructor } from '@/utils/dto.meta.page'

export type DTOMetaPostStoryConstructor = DTOMetaPageConstructor & {
  audiobookId?: string;
  imageCover: string;
  imageCover2x: string;
  imageOpenGraph: string
  timeReading: number;
}

export class DTOMetaPostStory extends DTOMetaPage {
  readonly audiobookId: string;
  readonly imageCover: string;
  readonly imageCover2x: string;
  readonly imageOpenGraph: string;
  readonly timeReading: number;

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
      path,
      title,
      updatedAt
    })

    this.audiobookId = audiobookId
    this.imageCover = `${this.imagePath}${imageCover}`
    this.imageCover2x = `${this.imagePath}${imageCover2x}`
    this.imageOpenGraph = `${this.imagePath}${imageOpenGraph}`
    this.timeReading = timeReading
  }

  get imagePath (): string {
    return '/images/'
  }
}
