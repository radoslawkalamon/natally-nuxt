import type { Meta, Story } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import BlocksAudiobook from '@/components/blocks/Audiobook/Audiobook.vue'
import mixinPrivacyStorage from '@/utils/mixin.privacy.storage'

const meta: Meta = {
  title: 'Blocks / Audiobook',
  component: BlocksAudiobook
}
export default meta

export const ShowPrompt: Story = (_args, { argTypes }) => ({
  beforeMount () {
    // @ts-ignore
    this['privacy/storage/setSoundcloud'](false)
    // @ts-ignore
    this.$root.$on('privacy/modal/toggle', action('privacy/modal/toggle'))
  },
  components: {
    BlocksAudiobook
  },
  mixins: [mixinPrivacyStorage],
  props: Object.keys(argTypes),
  template: '<div class="scoped__storybook-section"><BlocksAudiobook v-bind="$props" /></div>'
})
ShowPrompt.args = {
  id: '1152714406'
}

export const ShowPlayer: Story = (_args, { argTypes }) => ({
  beforeMount () {
    // @ts-ignore
    this['privacy/storage/setSoundcloud'](true)
  },
  components: {
    BlocksAudiobook
  },
  mixins: [mixinPrivacyStorage],
  props: Object.keys(argTypes),
  template: '<div class="scoped__storybook-section"><BlocksAudiobook v-bind="$props" /></div>'
})
ShowPlayer.args = {
  id: '1152714406'
}
