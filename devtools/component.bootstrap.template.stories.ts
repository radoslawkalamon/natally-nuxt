import { formatterCapitalize } from '../utils/formatter.capitalize'
import { formatterSpacelize } from '../utils/formatter.spacelize'

export const componentBootstrapTemplateStories = (type: string, name: string): string => {
  const title = `${formatterCapitalize(type)} / ${formatterSpacelize(name)}`

  return `import { Meta, Story } from '@storybook/vue'
import ${name} from '@/components/${type}/${name}/${name}.vue'

const meta: Meta = {
  title: '${title}',
  component: ${name}
}
export default meta

const Template: Story = (_args, { argTypes }) => ({
  components: { ${name} },
  props: Object.keys(argTypes),
  template: '<${name} v-bind="$props" />'
})

export const Default: Story = Template.bind({})
Default.args = {
  prop: 'Story prop'
}
`
}
