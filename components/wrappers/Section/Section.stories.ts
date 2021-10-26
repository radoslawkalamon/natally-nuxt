import { Meta, Story } from '@storybook/vue'
import ComponentSection from './Section.vue'

const meta: Meta = {
  title: 'Wrappers / Section',
  component: ComponentSection,
  argTypes: {
    header: {
      description: 'hidden if no children passed',
      table: {
        type: null,
        defaultValue: null
      }
    },
    default: {
      description: '-',
      table: {
        type: null,
        defaultValue: null
      }
    },
    footer: {
      description: 'hidden if no children passed',
      table: {
        type: null,
        defaultValue: null
      }
    }
  }
}
export default meta

export const allSlots: Story = () => ({
  components: { ComponentSection },
  template: `<ComponentSection>
    <template #header>
      Header slot
    </template>
    <template>
      Default slot
    </template>
    <template #footer>
      Footer slot
    </template>
  </ComponentSection>`
})

export const noHeader: Story = () => ({
  components: { ComponentSection },
  template: `<ComponentSection>
    <template>
      Default slot
    </template>
    <template #footer>
      Footer slot
    </template>
  </ComponentSection>`
})

export const noFooter: Story = () => ({
  components: { ComponentSection },
  template: `<ComponentSection>
    <template #header>
      Header slot
    </template>
    <template>
      Default slot
    </template>
  </ComponentSection>`
})

export const noHeaderNoFooter: Story = () => ({
  components: { ComponentSection },
  template: `<ComponentSection>
    Default slot
  </ComponentSection>`
})
