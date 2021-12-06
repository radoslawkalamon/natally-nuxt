import type { Meta, Story } from '@storybook/vue'
import WrappersSection from '@/components/wrappers/Section/Section.vue'

const meta: Meta = {
  title: 'Wrappers / Section',
  component: WrappersSection,
  argTypes: {
    header: {
      description: 'hidden when no children',
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
      description: 'hidden when no children',
      table: {
        type: null,
        defaultValue: null
      }
    }
  }
}
export default meta

export const allSlots: Story = () => ({
  components: {
    WrappersSection
  },
  template: `<WrappersSection>
    <template #header>
      Header slot
    </template>
    <template>
      Default slot
    </template>
    <template #footer>
      Footer slot
    </template>
  </WrappersSection>`
})

export const noHeader: Story = () => ({
  components: {
    WrappersSection
  },
  template: `<WrappersSection>
    <template>
      Default slot
    </template>
    <template #footer>
      Footer slot
    </template>
  </WrappersSection>`
})

export const noFooter: Story = () => ({
  components: {
    WrappersSection
  },
  template: `<WrappersSection>
    <template #header>
      Header slot
    </template>
    <template>
      Default slot
    </template>
  </WrappersSection>`
})

export const noHeaderNoFooter: Story = () => ({
  components: {
    WrappersSection
  },
  template: `<WrappersSection>
    Default slot
  </WrappersSection>`
})
