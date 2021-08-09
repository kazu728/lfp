import { None } from '../none'
import { Option } from '../option'
import { Some } from '../some'

describe('option', () => {
  test('should get None', () => {
    const input = Option(null)

    expect(input).toBeInstanceOf(None)
  })

  test('should get Some', () => {
    const input = Option(1)

    expect(input).toBeInstanceOf(Some)
  })
})
