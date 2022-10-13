/*
  8767 - Combination
  -------
  by Homyee King (@HomyeeKing) #medium #array #application #string
  
  ### Question
  
  Given an array of strings, do Permutation & Combination.
  It's also useful for the prop types like video [controlsList](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/controlsList)
  
  ```ts
  // expected to be `"foo" | "bar" | "baz" | "foo bar" | "foo bar baz" | "foo baz" | "foo baz bar" | "bar foo" | "bar foo baz" | "bar baz" | "bar baz foo" | "baz foo" | "baz foo bar" | "baz bar" | "baz bar foo"`
  type Keys = Combination<['foo', 'bar', 'baz']>
  ```
  
  > View on GitHub: https://tsch.js.org/8767
*/


/* _____________ Your Code Here _____________ */

type Join<T extends string[], K extends string = ''> = T extends [infer F extends string, ...infer R extends string[]]
  ? Join<R, K extends '' ? F : `${K} ${F}`>
  : K extends ''
    ? never
    : K;

type Combination2<T extends string[], Prefix extends string[] = [], Val extends string[] = []> = T extends [infer F extends string, ...infer R extends string[] | []]
  ? Join<[...Val, F]> | Combination<[...Prefix, ...R], [], [...Val, F]> | Combination<R, [...Prefix, F], Val>
  : Join<Val>

type Combination<T extends string[], K = T[number], P  = K> = P extends string
  ? P | `${P} ${Combination<[], Exclude<K, P>>}`
  : never

type test = Combination<['foo', 'bar', 'baz']>
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Combination<['foo', 'bar', 'baz']>,
  'foo' | 'bar' | 'baz' | 'foo bar' | 'foo bar baz' | 'foo baz' | 'foo baz bar' | 'bar foo' | 'bar foo baz' | 'bar baz' | 'bar baz foo' | 'baz foo' | 'baz foo bar' | 'baz bar' | 'baz bar foo'>>,
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/8767/answer
  > View solutions: https://tsch.js.org/8767/solutions
  > More Challenges: https://tsch.js.org
*/

