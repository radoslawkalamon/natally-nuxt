export type DTOMetaPageConstructor = {
  createdAt: string;
  description: string;
  path: string;
  title: string;
  updatedAt: string;
}

export class DTOMetaPage {
  readonly createdAt: Date;
  readonly description: string;
  readonly path: string;
  readonly title: string;
  readonly updatedAt: Date;

  constructor ({
    createdAt,
    description,
    title,
    updatedAt,
    path
  }: DTOMetaPageConstructor) {
    this.createdAt = new Date(createdAt)
    this.description = description
    this.path = `${path}${path.at(-1) !== '/' ? '/' : ''}`
    this.title = title
    this.updatedAt = new Date(updatedAt)
  }
}
