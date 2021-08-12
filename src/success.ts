import { Result } from './result'

export class Success<T, U> implements Result<T, U> {
  constructor(private readonly value: U) {}

  get(): U {
    return this.value
  }
  getOrElse(): U {
    return this.value
  }
  isSuccess = (): boolean => true
  isFailure = (): boolean => false
}
