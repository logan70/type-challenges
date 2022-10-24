/*
  90 - Optional Keys
  -------
  by yituan (@yi-tuan) #hard #utils
  
  ### Question
  
  Implement the advanced util type `OptionalKeys<T>`, which picks all the optional keys into a union.
  
  > View on GitHub: https://tsch.js.org/90
*/


/* _____________ Your Code Here _____________ */

type OptionalKeys2<T, K = keyof T> = K extends keyof T
  ? Equal<Pick<T, K>, Pick<Partial<T>, K>> extends true ? K : never
  : never

type OptionalKeys<T> = keyof {
  [K in keyof T as (T[K] extends Required<T>[K] ? never : K) ]: T[K]
} 

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<OptionalKeys<{ a: number; b?: string }>, 'b'>>,
  Expect<Equal<OptionalKeys<{ a: undefined; b?: undefined }>, 'b'>>,
  Expect<Equal<OptionalKeys<{ a: undefined; b?: undefined; c?: string; d?: null }>, 'b' | 'c' | 'd'>>,
  Expect<Equal<OptionalKeys<{}>, never>>,
]
type cases2 = [
  Expect<Equal<OptionalKeys2<{ a: number; b?: string }>, 'b'>>,
  Expect<Equal<OptionalKeys2<{ a: undefined; b?: undefined }>, 'b'>>,
  Expect<Equal<OptionalKeys2<{ a: undefined; b?: undefined; c?: string; d?: null }>, 'b' | 'c' | 'd'>>,
  Expect<Equal<OptionalKeys2<{}>, never>>,
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/90/answer
  > View solutions: https://tsch.js.org/90/solutions
  > More Challenges: https://tsch.js.org
*/

