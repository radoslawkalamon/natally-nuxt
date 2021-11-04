import { formatterKebabize } from '@/utils/formatter.kebabize'

describe('Utils / Formatter / Kebabize', () => {
  test('shall kebabize string "test string"', () => {
    expect(formatterKebabize('test string')).toBe('test-string')
  })

  test('shall kebabize string "test String"', () => {
    expect(formatterKebabize('test String')).toBe('test-string')
  })

  test('shall kebabize string "testString"', () => {
    expect(formatterKebabize('testString')).toBe('test-string')
  })

  test('shall kebabize string "TestString"', () => {
    expect(formatterKebabize('TestString')).toBe('test-string')
  })

  test('shall kebabize string "TESTString"', () => {
    expect(formatterKebabize('TESTString')).toBe('t-e-s-t-string')
  })
})
