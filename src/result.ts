import { IO } from './@types'

export interface Result<T, U> {
  isFailure(): boolean
  isSuccess(): boolean
  get(): T | U
  getOrElse: IO.getOrElese<U>
}
