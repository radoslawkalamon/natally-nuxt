import { Meta, Story } from '@storybook/vue'
import Modal from './Modal.vue'

const meta: Meta = {
  title: 'Wrappers / Modal',
  component: Modal,
  argTypes: {
    default: {
      description: 'Modal inside',
      table: {
        type: null,
        defaultValue: null
      }
    }
  }
}
export default meta

const Template: Story = (_args, { argTypes }) => ({
  components: { Modal },
  props: Object.keys(argTypes),
  template: '<Modal v-bind="$props"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec lacinia sapien, ut pretium lorem. Morbi quis consectetur quam. Aliquam erat volutpat. Aliquam elementum aliquet arcu, vel finibus sem blandit at. Morbi vehicula, est vitae ultrices aliquam, neque neque euismod odio, at porta mi orci et lorem. In et massa sed urna blandit rhoncus. Donec nec augue euismod, feugiat odio quis, luctus mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p><p>Pellentesque ullamcorper elit a nisl accumsan, eu scelerisque justo rutrum. Curabitur ullamcorper ex non lacus sodales, eu placerat purus bibendum. Integer sem quam, pharetra at sem nec, volutpat aliquam tellus. Phasellus in leo lacus. Pellentesque justo nisl, dictum nec fringilla quis, eleifend vitae neque. Proin a augue et massa bibendum hendrerit. Suspendisse ut turpis fermentum, ornare nisl vitae, luctus tellus. Phasellus vel libero elit. Nulla eget est eu neque pretium vestibulum. Morbi hendrerit venenatis augue eget suscipit. Duis ex enim, lacinia sit amet dignissim sed, mattis vitae leo. Nunc aliquam rutrum leo, vitae molestie nisl sodales ut. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae</p></Modal>'
})

export const Default: Story = Template.bind({})
Default.args = {
  title: 'Polityka prywatności'
}
