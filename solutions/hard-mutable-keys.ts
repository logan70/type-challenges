/*
  5181 - Mutable Keys
  -------
  by Yugang Cao (@Talljack) #hard #utils
  
  ### Question
  
  Implement the advanced util type MutableKeys<T>, which picks all the mutable (not readonly) keys into a union.
  
  For example:
  
  ```ts
  type Keys = MutableKeys<{ readonly foo: string; bar: number }>;
  // expected to be “bar”
  ```
  
  > View on GitHub: https://tsch.js.org/5181
*/


/* _____________ Your Code Here _____________ */
type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false;

type Readonly<T> = {
  readonly [K in keyof T]: T[K];
}

type MutableKeys<T, K = keyof T> = K extends keyof T
  ? Equal<Pick<T, K>, Readonly<Pick<T, K>>> extends true
    ? never
    : K
  : never;

type MutableKeys2<T,> = keyof {
  [K in keyof T as Equal<Pick<T, K>, Readonly<Pick<T, K>>> extends true ? never : K]: any
}

/* _____________ Test Cases _____________ */
import type { Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MutableKeys<{ a: number; readonly b: string }>, 'a'>>,
  Expect<Equal<MutableKeys<{ a: undefined; readonly b: undefined }>, 'a'>>,
  Expect<Equal<MutableKeys<{ a: undefined; readonly b?: undefined; c: string; d: null }>, 'a' | 'c' | 'd'>>,
  Expect<Equal<MutableKeys<{}>, never>>,
]

type cases2 = [
  Expect<Equal<MutableKeys2<{ a: number; readonly b: string }>, 'a'>>,
  Expect<Equal<MutableKeys2<{ a: undefined; readonly b: undefined }>, 'a'>>,
  Expect<Equal<MutableKeys2<{ a: undefined; readonly b?: undefined; c: string; d: null }>, 'a' | 'c' | 'd'>>,
  Expect<Equal<MutableKeys2<{}>, never>>,
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/5181/answer
  > View solutions: https://tsch.js.org/5181/solutions
  > More Challenges: https://tsch.js.org
*/

