import type { Meta, Story } from '@storybook/vue'
import WrappersModal from '@/components/wrappers/Modal/Modal.vue'

const meta: Meta = {
  title: 'Wrappers / Modal',
  component: WrappersModal,
  argTypes: {
    default: {
      description: '-',
      table: {
        type: null,
        defaultValue: null
      }
    }
  }
}
export default meta

const Template: Story = (_args, { argTypes }) => ({
  components: {
    WrappersModal
  },
  props: Object.keys(argTypes),
  template: `<WrappersModal v-bind="$props">
    Pellentesque ullamcorper elit a nisl accumsan, eu scelerisque justo rutrum. Curabitur ullamcorper ex non lacus sodales, eu placerat purus bibendum. Integer sem quam, pharetra at sem nec, volutpat aliquam tellus. Phasellus in leo lacus. Pellentesque justo nisl, dictum nec fringilla quis, eleifend vitae neque. Proin a augue et massa bibendum hendrerit. Suspendisse ut turpis fermentum, ornare nisl vitae, luctus tellus. Phasellus vel libero elit. Nulla eget est eu neque pretium vestibulum. Morbi hendrerit venenatis augue eget suscipit. Duis ex enim, lacinia sit amet dignissim sed, mattis vitae leo. Nunc aliquam rutrum leo, vitae molestie nisl sodales ut. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae
  </WrappersModal>`
})

export const Default: Story = Template.bind({})
Default.args = {
  title: 'Polityka prywatności'
}
