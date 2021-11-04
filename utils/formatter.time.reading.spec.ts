import { formatterTimeReading } from '@/utils/formatter.time.reading'

describe('Utils / Formatter / Reading Time', () => {
  const readingTime: Record<number, string> = {
    0: '0 minut',
    1: '1 minuta',
    2: '2 minuty',
    5: '5 minut',
    10: '10 minut',
    12: '12 minut',
    13: '13 minut',
    14: '14 minut',
    20: '20 minut',
    22: '22 minuty',
    23: '23 minuty',
    24: '24 minuty'
  }

  Object.entries(readingTime).forEach(([time, label]: string[]) => {
    test(`shall format ${time} for PL locale`, () => {
      expect(formatterTimeReading(Number(time))).toBe(label)
    })
  })
})
