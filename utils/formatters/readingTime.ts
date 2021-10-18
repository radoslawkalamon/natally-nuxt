export default (readingTime: number) => {
  const pluralType = new Intl.PluralRules('pl-PL').select(readingTime)
  const pluralLabels: Record<Intl.LDMLPluralRule, string> = {
    zero: 'minut',
    one: 'minuta',
    two: 'minuty',
    few: 'minuty',
    many: 'minut',
    other: 'minut'
  }

  return `${readingTime} ${pluralLabels[pluralType]}`
}
