import { Result } from '../result'
import { Success } from '../success'

describe('Success', () => {
  test('should be get value by #get', () => {
    const result: Result<unknown, number> = new Success(1)
    expect(result.get()).toBe(1)
  })

  test('should be get value by #getOrElse', () => {
    const result: Result<unknown, number> = new Success(1)
    expect(result.get()).toBe(1)
  })

  test('should be success', () => {
    const result: Result<unknown, number> = new Success(1)
    expect(result.isSuccess()).toBe(true)
  })

  test('should be failed', () => {
    const result: Result<unknown, number> = new Success(1)
    expect(result.isFailure()).toBe(false)
  })
})
