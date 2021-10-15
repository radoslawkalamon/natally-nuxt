import capitalize from '../formatters/capitalize'
import spacelize from '../formatters/spacelize'

export default (type: string, name: string): string => {
  const title = `${capitalize(type)} / ${spacelize(name)}`

  return `import ${name} from './${name}.vue'
import { shallRender } from '@/utils/commonTestSpecs'

describe('${title}', () => {
  shallRender(${name})
})
`
}
