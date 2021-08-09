import { None } from '../none'

describe('none', () => {
  test('should be get else value', () => {
    const input = new None().getOrElse('foo bar')
    expect(input).toBe('foo bar')
  })

  test('should be none', () => {
    const input = new None().isNone()
    expect(input).toBe(true)
  })

  test('should not be some', () => {
    const input = new None().isSome()
    expect(input).toBe(false)
  })

  test('should be flatmapped value', () => {
    const input = new None().flatMap()
    expect(input).toBeInstanceOf(None)
  })
})
