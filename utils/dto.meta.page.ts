export type DTOMetaPageConstructor = {
  createdAt: string;
  description: string;
  path: string;
  title: string;
  updatedAt: string;
}

const getPath = (path: string) => {
  const pathWithoutIndex = path.split('/').filter(i => i !== 'index').join('/')
  return `${pathWithoutIndex}${pathWithoutIndex.at(-1) !== '/' ? '/' : ''}`
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
    this.path = getPath(path)
    this.title = title
    this.updatedAt = new Date(updatedAt)
  }
}
