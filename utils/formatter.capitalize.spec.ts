import { formatterCapitalize } from '@/utils/formatter.capitalize'

describe('Utils / Formatter / Capitalize', () => {
  test('shall capitalize string', () => {
    expect(formatterCapitalize('test string')).toBe('Test string')
  })

  test('shall capitalize capitalized string', () => {
    expect(formatterCapitalize('Test string')).toBe('Test string')
  })
})
