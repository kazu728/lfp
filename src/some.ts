import { None } from './none'
import { Option } from './option'

export class Some<T> implements Option<T> {
  constructor(private readonly value: T) {}

  flatMap(f: (value: T) => None): None
  flatMap<U>(f: (value: T) => Some<U>): Some<U>
  flatMap<U>(f: (value: T) => Option<U>): Option<U> {
    return f(this.value)
  }
  getOrElse(): T {
    return this.value
  }

  isSome = (): boolean => true
  isNone = (): boolean => false
}
