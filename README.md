# lfp

[![npm version](https://badge.fury.io/js/lfp.svg)](https://badge.fury.io/js/lfp)
[![test](https://github.com/kzmat/lfp/actions/workflows/test.yaml/badge.svg)](https://github.com/kzmat/lfp/actions/workflows/test.yaml)
[![codecov](https://codecov.io/gh/kzmat/lfp/branch/master/graph/badge.svg?token=CJ7P6H7QNN)](https://codecov.io/gh/kzmat/lfp)

This lib supports simple value container, Option and Result

## Install

```
yarn add lfp
```

<!-- TODO: 修正 -->

## Example

```typescript
// Option
const maybeValue: Option<string> = Option(1).flatMap((v) =>
  Option(v.toString()),
)
if (mayabeValue.isSome()) doSomething()

// Result
const result: Result<Error, string> = getSomething()
const stringValue = reuslt.getOrElse('')
```

## License

MIT
