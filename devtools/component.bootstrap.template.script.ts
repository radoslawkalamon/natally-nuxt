import { formatterCapitalize } from '../utils/formatter.capitalize'

export const componentBootstrapTemplateScript = (type: string, name: string): string => {
  const typeNameCapitalized = formatterCapitalize(`${type}${name}`)

  return `import Vue from 'vue'

export default Vue.extend({
  name: '${typeNameCapitalized}'
})
`
}
