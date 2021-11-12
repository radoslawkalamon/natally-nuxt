import { factoryHeadPostPoem } from '@/utils/factory.head.post.poem'

describe('Utils / Factory / Head / Post / Poem', () => {
  test('shall match snapshot', () => {
    const dto = {
      createdAt: new Date('2021-02-14T12:30:55+00:00'),
      description: 'Miłość. Po prostu!',
      imageCover: '/images/poezja-314.milosc.webp',
      imagePath: '/images/',
      imageOpenGraph: '/images/poezja-314.milosc.opengraph.png',
      path: '/poezja-314/milosc/',
      title: 'Miłość',
      updatedAt: new Date('2021-02-14T12:31:27+00:00')
    }
    expect(factoryHeadPostPoem(dto)).toMatchSnapshot()
  })
})
