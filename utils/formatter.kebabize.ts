import { formatterCapitalize } from '@/utils/formatter.capitalize'

export const formatterKebabize = (s: string): string => {
  return s
    .split(' ')
    .map(e => formatterCapitalize(e))
    .join('')
    .split('')
    .map((letter, idx) => {
      return letter.toUpperCase() === letter
        ? `${idx !== 0 ? '-' : ''}${letter.toLowerCase()}`
        : letter
    })
    .join('')
}
