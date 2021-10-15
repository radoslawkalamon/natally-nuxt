import capitalize from '../formatters/capitalize'

export default (type: string, name: string): string => {
  const typeNameCapitalized = capitalize(`${type}${name}`)

  return `import Vue from 'vue'

export default Vue.extend({
  name: '${typeNameCapitalized}'
})
`
}
