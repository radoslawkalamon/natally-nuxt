import { formatterCapitalize } from '../utils/formatter.capitalize'
import { formatterSpacelize } from '../utils/formatter.spacelize'

export const componentBootstrapTemplateSpec = (type: string, name: string): string => {
  const title = `${formatterCapitalize(type)} / ${formatterSpacelize(name)}`

  return `import ${name} from '@/components/${type}/${name}/${name}.vue'
import { shallPassIntegrationSanityTest, shallPassUnitSanityTest } from '@/devtools/jest.common.spec'
  
describe('${title}', () => {
  describe('Unit', () => {
    shallPassUnitSanityTest({ component: ${name} })
  })
  
  describe('Integration', () => {
    shallPassIntegrationSanityTest({ component: ${name} })
  })
})
`
}
