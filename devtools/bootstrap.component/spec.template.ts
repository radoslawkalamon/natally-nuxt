import capitalize from '../../utils/formatters/capitalize'
import spacelize from '../../utils/formatters/spacelize'

export default (type: string, name: string): string => {
  const title = `${capitalize(type)} / ${spacelize(name)}`

  return `import ${name} from './${name}.vue'
import { shallRender } from '@/utils/commonTestSpecs'

describe('${title}', () => {
  shallRender(${name})
})
`
}
