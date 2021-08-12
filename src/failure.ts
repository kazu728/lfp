import { Result } from './result'

export class Failure<T, U> implements Result<T, U> {
  constructor(private readonly value: T) {}

  flatMap(): Failure<T, U> {
    return new Failure(this.value)
  }
  get(): T {
    return this.value
  }
  getOrElse = <V>(value: V): V => value
  isSuccess = (): boolean => false
  isFailure = (): boolean => true
}
