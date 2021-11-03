export const formatterDatePublished = (isoTime: string): string => {
  const date = new Date(isoTime)
  const day = date.getUTCDate()
  const month = date.getUTCMonth() + 1
  const year = date.getUTCFullYear()
  const separator = '.'

  return [day, month, year]
    .map(el => el.toString().padStart(2, '0'))
    .join(separator)
}
