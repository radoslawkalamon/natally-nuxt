import kebabize from '../kebabize'

export default (_type: string, name: string): string => {
  const className = kebabize(name)

  return `.${className} {
  background-color: transparent;
}
`
}