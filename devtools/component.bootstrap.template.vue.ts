import { formatterKebabize } from '../utils/formatter.kebabize'

export const componentBootstrapTemplateVue = (type: string, name: string): string => {
  const className = formatterKebabize(name)
  const dataTest = formatterKebabize(`${type}${name}`)

  return `<template>
  <span
    class="${className}"
    data-test="${dataTest}"
  />
</template>

<script src="./${name}.ts" lang="ts"></script>
<style src="./${name}.css" scoped></style>
`
}
