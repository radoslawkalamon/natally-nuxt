module.exports = {
  extends: [
    'stylelint-config-standard'
  ],
  plugins: [
    'stylelint-order'
  ],
  rules: {
    'selector-class-pattern': '^(?:(?:o|c|u|t|s|is|has|_|js|qa)-)?[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*(?:__[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:--[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:\\[.+\\])?$',
    'property-no-vendor-prefix': [true, {
      ignoreProperties: ['hyphens', 'background-clip']
    }],
    'order/properties-alphabetical-order': true
  }
}
