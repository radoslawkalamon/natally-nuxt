export const formatterTimeReading = (n: number) => {
  const pluralType = new Intl.PluralRules('pl-PL').select(n)
  const pluralLabels: Record<Intl.LDMLPluralRule, string> = {
    zero: 'minut',
    one: 'minuta',
    two: 'minuty',
    few: 'minuty',
    many: 'minut',
    other: 'minut'
  }

  return `${n} ${pluralLabels[pluralType]}`
}
