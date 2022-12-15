/*
  6141 - Binary to Decimal
  -------
  by wotsushi (@wotsushi) #hard #math
  
  ### Question
  
  Implement `BinaryToDecimal<S>` which takes an exact string type `S` consisting 0 and 1 and returns an exact number type corresponding with `S` when `S` is regarded as a binary.
  You can assume that the length of `S` is equal to or less than 8 and `S` is not empty.
  
  ```ts
  type Res1 = BinaryToDecimal<'10'>; // expected to be 2
  type Res2 = BinaryToDecimal<'0011'>; // expected to be 3
  ```
  
  > View on GitHub: https://tsch.js.org/6141
*/


/* _____________ Your Code Here _____________ */
type ReverseString<S extends string> = S extends `${infer F}${infer R}`
  ? `${ReverseString<R>}${F}`
  : S;

type ReversedBinaryToDecimal<S extends string, Base extends any[] = [any], Result extends any[] = []> = S extends `${infer F}${infer R}`
  ? ReversedBinaryToDecimal<
    R,
    [...Base, ...Base],
    F extends '0'
      ? Result
      : [...Result, ...Base]
  >
  : Result['length'];

type BinaryToDecimal<S extends string> = ReversedBinaryToDecimal<ReverseString<S>>

type BinaryToDecimal2<S extends string, Base extends any[] = [any], Result extends any[] = []> = S extends `${infer R}0`
  ? BinaryToDecimal2<R, [...Base, ...Base], Result>
  : S extends `${infer R}1`
    ? BinaryToDecimal2<R, [...Base, ...Base], [...Result, ...Base]>
    : Result['length']
  
type BinaryToDecimal3<S extends string, Res extends any[] = []> = S extends `${infer F}${infer R}`
  ? BinaryToDecimal3<R, [...Res, ...Res, ...(F extends '0' ? [] : [any])]>
  : Res['length']

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<BinaryToDecimal<'10'>, 2>>,
  Expect<Equal<BinaryToDecimal<'0011'>, 3>>,
  Expect<Equal<BinaryToDecimal<'00000000'>, 0>>,
  Expect<Equal<BinaryToDecimal<'11111111'>, 255>>,
  Expect<Equal<BinaryToDecimal<'10101010'>, 170>>,
]

type cases2 = [
  Expect<Equal<BinaryToDecimal2<'10'>, 2>>,
  Expect<Equal<BinaryToDecimal2<'0011'>, 3>>,
  Expect<Equal<BinaryToDecimal2<'00000000'>, 0>>,
  Expect<Equal<BinaryToDecimal2<'11111111'>, 255>>,
  Expect<Equal<BinaryToDecimal2<'10101010'>, 170>>,
]
type cases3 = [
  Expect<Equal<BinaryToDecimal3<'10'>, 2>>,
  Expect<Equal<BinaryToDecimal3<'0011'>, 3>>,
  Expect<Equal<BinaryToDecimal3<'00000000'>, 0>>,
  Expect<Equal<BinaryToDecimal3<'11111111'>, 255>>,
  Expect<Equal<BinaryToDecimal3<'10101010'>, 170>>,
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/6141/answer
  > View solutions: https://tsch.js.org/6141/solutions
  > More Challenges: https://tsch.js.org
*/

