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
      singleline: {
        max: 1,
        allowFirstLine: true
      },
      multiline: {
        max: 1,
        allowFirstLine: false
      }
    }],
    'vue/order-in-components': 'error'
  }
}
