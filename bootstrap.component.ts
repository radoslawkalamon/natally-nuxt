import fs from 'fs'
import vueTemplate from './utils/bootstrap.component/vue.template'
import tsTemplate from './utils/bootstrap.component/ts.template'
import cssTemplate from './utils/bootstrap.component/css.template'
import specTemplate from './utils/bootstrap.component/spec.template'
import storiesTemplate from './utils/bootstrap.component/stories.template'

const [type, name] = process.argv.slice(2)

if ([type, name].some(e => !e)) {
  throw new Error(`You must pass proper arguments! Eg. '${__filename} components CoverPoem'`)
}

const dir = `./components/${type}/${name}`
const filesToCreate = {
  [`${dir}/${name}.vue`]: vueTemplate(type, name),
  [`${dir}/${name}.ts`]: tsTemplate(type, name),
  [`${dir}/${name}.css`]: cssTemplate(type, name),
  [`${dir}/${name}.spec.ts`]: specTemplate(type, name),
  [`${dir}/${name}.stories.ts`]: storiesTemplate(type, name)
}

fs.mkdirSync(dir, { recursive: true })
Object.entries(filesToCreate).forEach(([filePath, content]) => {
  fs.writeFileSync(filePath, content)
})
