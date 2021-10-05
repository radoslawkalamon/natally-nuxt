import capitalize from '../capitalize'
import kebabize from '../kebabize'
import spacelize from '../spacelize'

export default (type: string, name: string): string => {
  const title = `${capitalize(type)} / ${spacelize(name)}`
  const dataTest = kebabize(`${type}${name}`)

  return `import ${name} from './${name}.vue'
import { shallRender } from '@/utils/commonTestSpecs'

describe('${title}', () => {
  shallRender(${name}, '${dataTest}')
})
`
}
