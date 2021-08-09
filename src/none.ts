import { Option } from './option'
export class None implements Option<never> {
  flatMap = (): None => this
  getOrElse = <U>(value: U): U => value
  isSome = (): boolean => false
  isNone = (): boolean => true
}
