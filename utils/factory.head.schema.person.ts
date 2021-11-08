import { getURL } from './factory.head.utils'

export const factoryHeadSchemaPerson = () => ({
  '@type': 'Person',
  '@id': getURL({ path: '/', anchor: '#person/radoslaw-kalamon' }),
  name: 'Radosław Kalamon',
  sameAs: [
    'https://radoslawkalamon.pl',
    'https://instagram.com/radoslawkalamon/',
    'https://twitter.com/radoslawkalamon'
  ]
})
