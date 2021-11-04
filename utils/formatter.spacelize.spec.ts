import { formatterSpacelize } from '@/utils/formatter.spacelize'

describe('Utils / Formatter / Spacelize', () => {
  test('shall spacelize string "testString"', () => {
    expect(formatterSpacelize('testString')).toBe('test String')
  })

  test('shall spacelize string "TESTString"', () => {
    expect(formatterSpacelize('TESTString')).toBe('TEST String')
  })

  test('shall spacelize string "test string"', () => {
    expect(formatterSpacelize('test string')).toBe('test string')
  })

  test('shall spacelize string "Test STRing"', () => {
    expect(formatterSpacelize('Test STRing')).toBe('Test ST Ring')
  })
})
