import formatDatePublished from '@/utils/formatters/datePublished'

describe('Utils / Formatters / Date Published', () => {
  test('shall format 15.08.2018 03:02:24 UTC+0 microtime as 15.08.2018 (UTC+0)', () => {
    expect(formatDatePublished(1534302144000)).toBe('15.08.2018')
  })

  test('shall format 16.10.2021 08:00:00 UTC+11 microtime as 15.10.2021 (UTC+0)', () => {
    expect(formatDatePublished(1634331600000)).toBe('15.10.2021')
  })
})
