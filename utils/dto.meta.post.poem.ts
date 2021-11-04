import { DTOMetaPage, DTOMetaPageConstructor } from '@/utils/dto.meta.page'

export type DTOMetaPostPoemConstructor = DTOMetaPageConstructor & {
  imageCover: string
  imageOpenGraph: string
}

export class DTOMetaPostPoem extends DTOMetaPage {
  readonly imageCover: string;
  readonly imageOpenGraph: string;

  constructor ({
    createdAt,
    description,
    imageCover,
    imageOpenGraph,
    path,
    title,
    updatedAt
  }: DTOMetaPostPoemConstructor) {
    super({
      createdAt,
      description,
      path,
      title,
      updatedAt
    })

    this.imageCover = `${this.imagePath}${imageCover}`
    this.imageOpenGraph = `${this.imagePath}${imageOpenGraph}`
  }

  get imagePath (): string {
    return '/images/poezja-314/'
  }
}
