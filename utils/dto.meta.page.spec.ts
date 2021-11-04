import { DTOMetaPage } from '@/utils/dto.meta.page'

describe('Utils / DTO / Meta / Page', () => {
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
    expect(dtoMetaPage).toMatchSnapshot({
      createdAt: new Date('2021-11-01T00:00:00+00:00'),
      description: 'Test Description',
      title: 'Test title',
      updatedAt: new Date('2021-11-01T00:00:00+00:00'),
      path: '/test-url'
    })
  })
})
