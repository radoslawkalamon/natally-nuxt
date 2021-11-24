export const JestMockNuxtContent = (fetchOutput: unknown) => {
  const QueryBuilder: Record<string, jest.Mock> = {
    only: jest.fn(() => QueryBuilder),
    without: jest.fn(() => QueryBuilder),
    where: jest.fn(() => QueryBuilder),
    sortBy: jest.fn(() => QueryBuilder),
    limit: jest.fn(() => QueryBuilder),
    skip: jest.fn(() => QueryBuilder),
    search: jest.fn(() => QueryBuilder),
    surround: jest.fn(() => QueryBuilder),
    fetch: jest.fn(() => fetchOutput)
  }

  return jest.fn(() => QueryBuilder)
}
