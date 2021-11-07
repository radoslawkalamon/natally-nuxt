import { DTOMetaPage } from '@/utils/dto.meta.page'

describe('Utils / DTO / Meta / Page', () => {
  describe('Page path with slash', () => {
    let dtoMetaPage: DTOMetaPage

    beforeAll(() => {
      dtoMetaPage = new DTOMetaPage({
        createdAt: '2021-11-01T00:00:00+00:00',
        description: 'Test Description',
        title: 'Test title',
        updatedAt: '2021-11-01T00:00:00+00:00',
        path: '/test-url/'
      })
    })

    test('shall match snapshot', () => {
      expect(dtoMetaPage).toMatchSnapshot()
    })
  })

  describe('Page path without slash', () => {
    let dtoMetaPage: DTOMetaPage

    beforeAll(() => {
      dtoMetaPage = new DTOMetaPage({
        createdAt: '2021-11-01T00:00:00+00:00',
        description: 'Test Description',
        title: 'Test title',
        updatedAt: '2021-11-01T00:00:00+00:00',
        path: '/test-url'
      })
    })

    test('shall match snapshot', () => {
      expect(dtoMetaPage).toMatchSnapshot()
    })
  })
})
