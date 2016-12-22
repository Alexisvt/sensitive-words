import sensitiveWords from '.'

test('says hello universe', () => (
  expect(sensitiveWords()).toBe('hello universe')
))
