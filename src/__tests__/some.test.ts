import { None } from '../none'
import { Some } from '../some'

describe('some', () => {
  test('should get value', () => {
    const input = new Some(1).getOrElse()

    expect(input).toBe(1)
  })

  test('should be some', () => {
    const input: boolean = new Some(1).isSome()

    expect(input).toBe(true)
  })

  test('should not be none', () => {
    const input: boolean = new Some(1).isNone()

    expect(input).toBe(false)
  })

  test('should be flatmapped value', () => {
    const input = new Some(1)
      .flatMap((value: number) => new Some(value * 2))
      .flatMap((value: number) => new Some(value * 3))

    expect(input.getOrElse()).toBe(6)
  })

  test('should be none', () => {
    const input = new Some(1).flatMap(() => new None())

    expect(input).toBeInstanceOf(None)
  })
})
