import { formatterCapitalize } from '../utils/formatter.capitalize'
import { formatterSpacelize } from '../utils/formatter.spacelize'

export const componentBootstrapTemplateSpec = (type: string, name: string): string => {
  const title = `${formatterCapitalize(type)} / ${formatterSpacelize(name)}`

  return `import ${name} from './${name}.vue'
import { shallRender } from '@/devtools/jest.shared.spec'

describe('${title}', () => {
  shallRender(${name})
})
`
}
