import Logo from './Logo.vue'

export default {
  title: 'Components/Logo',
  component: Logo,
}

export const Default = () => ({
  components: {
    Logo,
  },
  template: '<Logo />',
})
