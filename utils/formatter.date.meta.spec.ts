import { formatterDateMeta } from '@/utils/formatter.date.meta'

describe('Utils / Formatter / Date / Meta', () => {
  describe('string isoDate', () => {
    test('shall format 15.08.2018 03:02:24 UTC+0 string as 15.08.2018 (UTC+0)', () => {
      expect(formatterDateMeta('2018-08-15T03:02:24+00:00')).toBe('15.08.2018')
    })

    test('shall format 16.10.2021 08:00:00 UTC+11 string as 15.10.2021 (UTC+0)', () => {
      expect(formatterDateMeta('2021-10-16T08:00:00+11:00')).toBe('15.10.2021')
    })
  })

  describe('Date', () => {
    test('shall format 15.08.2018 03:02:24 UTC+0 Date as 15.08.2018 (UTC+0)', () => {
      const date = new Date('2018-08-15T03:02:24+00:00')
      expect(formatterDateMeta(date)).toBe('15.08.2018')
    })

    test('shall format 16.10.2021 08:00:00 UTC+11 Date as 15.10.2021 (UTC+0)', () => {
      const date = new Date('2021-10-16T08:00:00+11:00')
      expect(formatterDateMeta(date)).toBe('15.10.2021')
    })
  })
})
