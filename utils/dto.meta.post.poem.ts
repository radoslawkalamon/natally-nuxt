import { DTOMetaPage, DTOMetaPageConstructor } from '@/utils/dto.meta.page'

export type DTOMetaPostPoemConstructor = DTOMetaPageConstructor & {
  component?: string
  imageCover: string
}

export class DTOMetaPostPoem extends DTOMetaPage {
  readonly component?: string
  readonly imageCover: string

  constructor ({
    component,
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

    this.component = component
    this.imageCover = `/images/${imageCover}`
  }
}
