/*
  1097 - IsUnion
  -------
  by null (@bencor) #medium 
  
  ### Question
  
  Implement a type `IsUnion`, which takes an input type `T` and returns whether `T` resolves to a union type.
  
  For example:
    
    ```ts
    type case1 = IsUnion<string>  // false
    type case2 = IsUnion<string|number>  // true
    type case3 = IsUnion<[string|number]>  // false
    ```
  
  > View on GitHub: https://tsch.js.org/1097
*/


/* _____________ Your Code Here _____________ */

type ToArray1<T> = T extends any ? T[] : never
type ToArray2<T> = [T] extends any ? T[] : never

type IsUnion<T> = [T] extends [never]
  ? false
  : ToArray2<T> extends ToArray1<T>
    ? false
    : true

type IsUnion2<T, U = T> = [T] extends [never]
  ? false
  : T extends U
    ? [U] extends [T]
      ? false
      : true
    : never

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<IsUnion<string>, false>>,
  Expect<Equal<IsUnion<string | number>, true>>,
  Expect<Equal<IsUnion<'a' | 'b' | 'c' | 'd'>, true>>,
  Expect<Equal<IsUnion<undefined | null | void | ''>, true>>,
  Expect<Equal<IsUnion<{ a: string } | { a: number }>, true>>,
  Expect<Equal<IsUnion<{ a: string | number }>, false>>,
  Expect<Equal<IsUnion<[string | number]>, false>>,
  // Cases where T resolves to a non-union type.
  Expect<Equal<IsUnion<string | never>, false>>,
  Expect<Equal<IsUnion<string | unknown>, false>>,
  Expect<Equal<IsUnion<string | any>, false>>,
  Expect<Equal<IsUnion<string | 'a'>, false>>,
  Expect<Equal<IsUnion<never>, false>>,
]

type cases2 = [
  Expect<Equal<IsUnion2<string>, false>>,
  Expect<Equal<IsUnion2<string | number>, true>>,
  Expect<Equal<IsUnion2<'a' | 'b' | 'c' | 'd'>, true>>,
  Expect<Equal<IsUnion2<undefined | null | void | ''>, true>>,
  Expect<Equal<IsUnion2<{ a: string } | { a: number }>, true>>,
  Expect<Equal<IsUnion2<{ a: string | number }>, false>>,
  Expect<Equal<IsUnion2<[string | number]>, false>>,
  // Cases where T resolves to a non-union type.
  Expect<Equal<IsUnion2<string | never>, false>>,
  Expect<Equal<IsUnion2<string | unknown>, false>>,
  Expect<Equal<IsUnion2<string | any>, false>>,
  Expect<Equal<IsUnion2<string | 'a'>, false>>,
  Expect<Equal<IsUnion2<never>, false>>,
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/1097/answer
  > View solutions: https://tsch.js.org/1097/solutions
  > More Challenges: https://tsch.js.org
*/

