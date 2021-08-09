import { IO } from './@types'
import { None } from './none'
import { Some } from './some'

export interface Option<T> {
  flatMap<U>(
    f: (value: T) => U extends null | undefined ? None : Option<U>,
  ): Option<U>
  isSome(): boolean
  isNone(): boolean
  getOrElse: IO.getOrElese<T>
}

export function Option(value: null | undefined): None
export function Option<T>(value: T): Some<T>
export function Option<T>(value: T): Option<T> {
  return value === null || undefined ? new None() : new Some(value)
}
