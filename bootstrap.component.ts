import fs from 'fs'
import { componentBootstrapTemplateVue } from './devtools/component.bootstrap.template.vue'
import { componentBootstrapTemplateScript } from './devtools/component.bootstrap.template.script'
import { componentBootstrapTemplateStyle } from './devtools/component.bootstrap.template.style'
import { componentBootstrapTemplateSpec } from './devtools/component.bootstrap.template.spec'
import { componentBootstrapTemplateStories } from './devtools/component.bootstrap.template.stories'

const [type, name] = process.argv.slice(2)

if ([type, name].some(e => !e)) {
  throw new Error(`You must pass proper arguments! Eg. '${__filename} components CoverPoem'`)
}

const dir = `./components/${type}/${name}`
const filesToCreate = {
  [`${dir}/${name}.vue`]: componentBootstrapTemplateVue(type, name),
  [`${dir}/${name}.ts`]: componentBootstrapTemplateScript(type, name),
  [`${dir}/${name}.css`]: componentBootstrapTemplateStyle(type, name),
  [`${dir}/${name}.spec.ts`]: componentBootstrapTemplateSpec(type, name),
  [`${dir}/${name}.stories.ts`]: componentBootstrapTemplateStories(type, name)
}

fs.mkdirSync(dir, { recursive: true })
Object.entries(filesToCreate).forEach(([filePath, content]) => {
  fs.writeFileSync(filePath, content)
})
