import { DTOMetaPage, DTOMetaPageConstructor } from '@/utils/dto.meta.page'

export type DTOMetaPostPoemConstructor = DTOMetaPageConstructor & {
  imageCover: string
}

export class DTOMetaPostPoem extends DTOMetaPage {
  readonly imageCover: string;

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
      imageOpenGraph,
      path,
      title,
      updatedAt
    })

    this.imageCover = `/images/${imageCover}`
  }
}
