module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended'
  ],
  plugins: [],
  rules: {
    'vue/max-attributes-per-line': ['error', {
      singleline: 1,
      multiline: 1
    }],
    'vue/order-in-components': 'error',
    'vue/multi-word-component-names': 'off',
    'vue/no-v-text-v-html-on-component': 'off'
  }
}
