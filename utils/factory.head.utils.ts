export const headDefault = {
  baseURL: 'https://169cm.pl',
  description: 'Liczy się każda historia!',
  imageOpenGraph: '/images/common.opengraph.png',
  title: '169cm.pl'
}

type GetTitleArgs = {
  category?: string;
  title?: string;
}
export const getTitle = ({ category, title }: GetTitleArgs = {}): string => {
  return [title, category, headDefault.title]
    .filter(e => e)
    .join(' • ')
}

type GetURLArgs = {
  anchor?: string;
  path?: string;
}
export const getURL = ({ anchor, path = '/' }: GetURLArgs = {}): string => {
  return [headDefault.baseURL, path, anchor]
    .filter(e => e)
    .join('')
}
