import Logo from './Logo.vue'

export default {
  title: 'Components / 169cm.pl Logo',
  component: Logo
}

export const Default = () => ({
  components: {
    Logo
  },
  template: '<Logo />'
})
