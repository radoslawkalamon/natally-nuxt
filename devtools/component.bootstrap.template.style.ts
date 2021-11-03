import { formatterKebabize } from '../utils/formatter.kebabize'

export const componentBootstrapTemplateStyle = (_type: string, name: string): string => {
  const className = formatterKebabize(name)

  return `.${className} {
  background-color: transparent;
}
`
}
