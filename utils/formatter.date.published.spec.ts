import { formatterDatePublished } from '@/utils/formatter.date.published'

describe('Utils / Formatters / Date Published', () => {
  test('shall format 15.08.2018 03:02:24 UTC+0 string as 15.08.2018 (UTC+0)', () => {
    expect(formatterDatePublished('2018-08-15T03:02:24+00:00')).toBe('15.08.2018')
  })

  test('shall format 16.10.2021 08:00:00 UTC+11 microtime as 15.10.2021 (UTC+0)', () => {
    expect(formatterDatePublished('2021-10-16T08:00:00+11:00')).toBe('15.10.2021')
  })
})
