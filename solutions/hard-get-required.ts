/*
  57 - Get Required
  -------
  by Zheeeng (@zheeeng) #hard #utils #infer
  
  ### Question
  
  Implement the advanced util type `GetRequired<T>`, which remains all the required fields
  
  For example
  
  ```ts
  type I = GetRequired<{ foo: number, bar?: string }> // expected to be { foo: number }
  ```
  
  > View on GitHub: https://tsch.js.org/57
*/


/* _____________ Your Code Here _____________ */

type GetRequiredKeys<T, P = keyof T> = P extends keyof T
  ? Equal<Pick<T, P>, {
    [key in P]-?: T[P]
  }> extends true
    ? P
    : never
  : never

type GetRequired2<T, P = keyof T> = Pick<T, GetRequiredKeys<T>>

type GetRequired<T, P = keyof T> = {
  [K in keyof T as Equal<Pick<T, K>, Required<Pick<T, K>>> extends true ? K : never]: T[K]
}

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<GetRequired<{ foo: number; bar?: string }>, { foo: number }>>,
  Expect<Equal<GetRequired<{ foo: undefined; bar?: undefined }>, { foo: undefined }>>,
]

type cases2 = [
  Expect<Equal<GetRequired2<{ foo: number; bar?: string }>, { foo: number }>>,
  Expect<Equal<GetRequired2<{ foo: undefined; bar?: undefined }>, { foo: undefined }>>,
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/57/answer
  > View solutions: https://tsch.js.org/57/solutions
  > More Challenges: https://tsch.js.org
*/

