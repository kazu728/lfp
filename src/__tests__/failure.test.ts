import { Failure } from '../failure'
import { Result } from '../result'

describe('Failure', () => {
  test('should be get failed error ', () => {
    const result: Result<Error, string> = new Failure(new Error())

    expect(result.get()).toBeInstanceOf(Error)
  })

  test('should be get else value', () => {
    const result: Result<Error, unknown> = new Failure(new Error())

    expect(result.getOrElse('')).toBe('')
  })

  test('should be failure', () => {
    const result: Result<Error, unknown> = new Failure(new Error())

    expect(result.isFailure()).toBe(true)
  })

  test('should not be success ', () => {
    const result: Result<Error, unknown> = new Failure(new Error())

    expect(result.isSuccess()).toBe(false)
  })
})
