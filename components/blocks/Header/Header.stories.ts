import type { Meta, Story } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import BlockHeader from '@/components/blocks/Header/Header.vue'

const meta: Meta = {
  title: 'Blocks / Header',
  component: BlockHeader
}
export default meta

export const Default: Story = () => ({
  beforeMount () {
    // @ts-ignore
    this.$root.$on('blocks/drawer/toggleDrawer', this.onToggleDrawer)
  },
  created () {
    // @ts-ignore
    this.$root.$on('blocks/drawer/toggleDrawer', action('blocks/drawer/toggleDrawer'))
    // @ts-ignore
    this.$root.$on('blocks/drawer/syncDrawerState', action('blocks/drawer/syncDrawerState'))
  },
  components: {
    BlockHeader
  },
  data () {
    return {
      isDrawerOpen: false
    }
  },
  methods: {
    onToggleDrawer () {
      // @ts-ignore
      this.isDrawerOpen = !this.isDrawerOpen
    }
  },
  template: '<div style="background-color: var(--color-background-1); height: 2000px"><BlockHeader /></div>',
  watch: {
    isDrawerOpen (v: boolean) {
      // @ts-ignore
      this.$root.$emit('blocks/drawer/syncDrawerState', v)
    }
  }
})
