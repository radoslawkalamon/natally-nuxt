export const formatterDateMeta = (isoDate: string | Date): string => {
  const date = new Date(isoDate)
  const separator = '.'
  return [
    date.getUTCDate(),
    date.getUTCMonth() + 1,
    date.getUTCFullYear()
  ]
    .map(el => el.toString().padStart(2, '0'))
    .join(separator)
}
