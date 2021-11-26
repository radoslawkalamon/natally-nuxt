import { formatterKebabize } from '../utils/formatter.kebabize'

export const componentBootstrapTemplateVue = (_type: string, name: string): string => {
  const className = formatterKebabize(name)

  return `<template>
  <span class="${className}" />
</template>

<script src="./${name}.ts" lang="ts"></script>
<style src="./${name}.css" scoped></style>
`
}
