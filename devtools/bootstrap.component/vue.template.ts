import kebabize from '../../utils/formatters/kebabize'

export default (type: string, name: string): string => {
  const className = kebabize(name)
  const dataTest = kebabize(`${type}${name}`)

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
