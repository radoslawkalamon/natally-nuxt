import { contentFileBeforeParse } from '@nuxt/content/types/content'

export const nuxtHooksContentFileBeforeParseTextAlignment: contentFileBeforeParse = (file) => {
  if (file.extension !== '.md') {
    return
  }

  file.data = file.data
    .replace(/(\|--) (.+)/g, '<p class="text-alignment-left">$2</p>')
    .replace(/(-\|-) (.+)/g, '<p class="text-alignment-center">$2</p>')
    .replace(/(--\|) (.+)/g, '<p class="text-alignment-right">$2</p>')
}
