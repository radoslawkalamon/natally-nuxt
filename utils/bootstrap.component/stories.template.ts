import capitalize from '../formatters/capitalize'
import spacelize from '../formatters/spacelize'

export default (type: string, name: string): string => {
  const title = `${capitalize(type)} / ${spacelize(name)}`

  return `import { Meta, Story } from '@storybook/vue'
import ${name} from './${name}.vue'

const meta: Meta = {
  title: '${title}',
  component: ${name}
}
export default meta

const Template: Story = (_args, { argTypes }) => ({
  components: { ${name} },
  props: Object.keys(argTypes),
  template: '<${name} v-bind="$props" />',
})

export const Default: Story = Template.bind({})
Default.args = {
  prop: 'Story prop'
}
`
}
