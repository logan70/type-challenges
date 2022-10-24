/*
  89 - Required Keys
  -------
  by yituan (@yi-tuan) #hard #utils
  
  ### Question
  
  Implement the advanced util type `RequiredKeys<T>`, which picks all the required keys into a union.
  
  For example
  
  ```ts
  type Result = RequiredKeys<{ foo: number; bar?: string }>;
  // expected to be “foo”
  ```
  
  > View on GitHub: https://tsch.js.org/89
*/


/* _____________ Your Code Here _____________ */
type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false


type RequiredKeys<T, K = keyof T> = K extends keyof T
  ? Equal<Pick<T, K>, { [Key in K]-?: T[Key] }> extends true ? K : never
  : never

type RequiredKeys2<T> = keyof {
  [K in keyof T as (T[K] extends Required<T>[K] ? K : never)]: T[K]
}

/* _____________ Test Cases _____________ */
import type { Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<RequiredKeys<{ a: number; b?: string }>, 'a'>>,
  Expect<Equal<RequiredKeys<{ a: undefined; b?: undefined }>, 'a'>>,
  Expect<Equal<RequiredKeys<{ a: undefined; b?: undefined; c: string; d: null }>, 'a' | 'c' | 'd'>>,
  Expect<Equal<RequiredKeys<{}>, never>>,
]

type cases2 = [
  Expect<Equal<RequiredKeys2<{ a: number; b?: string }>, 'a'>>,
  Expect<Equal<RequiredKeys2<{ a: undefined; b?: undefined }>, 'a'>>,
  Expect<Equal<RequiredKeys2<{ a: undefined; b?: undefined; c: string; d: null }>, 'a' | 'c' | 'd'>>,
  Expect<Equal<RequiredKeys2<{}>, never>>,
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/89/answer
  > View solutions: https://tsch.js.org/89/solutions
  > More Challenges: https://tsch.js.org
*/

