/*
  2852 - OmitByType
  -------
  by jiangshan (@jiangshanmeta) #medium #object
  
  ### Question
  
  From ```T```, pick a set of properties whose type are not assignable to ```U```.
  
  For Example
  
  ```typescript
  type OmitBoolean = OmitByType<{
    name: string
    count: number
    isReadonly: boolean
    isEnable: boolean
  }, boolean> // { name: string; count: number }
  ```
  
  > View on GitHub: https://tsch.js.org/2852
*/


/* _____________ Your Code Here _____________ */

type GetOmitKeys<T, U, P extends keyof T = keyof T> = P extends P
  ? T[P] extends U
    ? P
    : never
  : never

type OmitByType<T, U> = {
  [K in keyof T as (T[K] extends U ? never : K)]: T[K]
}

type OmitByType2<T, U> = Omit<T, GetOmitKeys<T, U>>


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

interface Model {
  name: string
  count: number
  isReadonly: boolean
  isEnable: boolean
}

type cases = [
  Expect<Equal<OmitByType<Model, boolean>, { name: string; count: number }>>,
  Expect<Equal<OmitByType<Model, string>, { count: number; isReadonly: boolean; isEnable: boolean }>>,
  Expect<Equal<OmitByType<Model, number>, { name: string; isReadonly: boolean; isEnable: boolean }>>,
]

type cases2 = [
  Expect<Equal<OmitByType2<Model, boolean>, { name: string; count: number }>>,
  Expect<Equal<OmitByType2<Model, string>, { count: number; isReadonly: boolean; isEnable: boolean }>>,
  Expect<Equal<OmitByType2<Model, number>, { name: string; isReadonly: boolean; isEnable: boolean }>>,
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/2852/answer
  > View solutions: https://tsch.js.org/2852/solutions
  > More Challenges: https://tsch.js.org
*/

