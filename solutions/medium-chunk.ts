/*
  4499 - Chunk
  -------
  by キリサメ qianxi (@qianxi0410) #medium #tuple
  
  ### Question
  
  Do you know `lodash`? `Chunk` is a very useful function in it, now let's implement it.
  `Chunk<T, N>` accepts two required type parameters, the `T` must be a `tuple`, and the `N` must be an `integer >=1`
  
  ```ts
  type exp1 = Chunk<[1, 2, 3], 2> // expected to be [[1, 2], [3]]
  type exp2 = Chunk<[1, 2, 3], 4> // expected to be [[1, 2, 3]]
  type exp3 = Chunk<[1, 2, 3], 1> // expected to be [[1], [2], [3]]
  ```
  
  > View on GitHub: https://tsch.js.org/4499
*/


/* _____________ Your Code Here _____________ */

type Chunk<T extends any[], N extends number, Temp extends any[] = [], Result extends any[] = []> = T extends [infer F, ...infer R]
  ? [...Temp, F]['length'] extends N
    ? Chunk<R, N, [], [...Result, [...Temp, F]]>
    : Chunk<R, N, [...Temp, F], Result>
  : Temp['length'] extends 0
    ? Result
    : [...Result, Temp]



type Chunk2<T extends any[], N extends number, Temp extends any[] = []> = T extends [infer F, ...infer R]
  ? [...Temp, F]['length'] extends N
    ? [[...Temp, F], ...Chunk2<R, N>]
    : Chunk2<R, N, [...Temp, F]>
  : Temp['length'] extends 0
    ? []
    : [Temp]

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Chunk<[], 1>, []>>,
  Expect<Equal<Chunk<[1, 2, 3], 1>, [[1], [2], [3]]>>,
  Expect<Equal<Chunk<[1, 2, 3], 2>, [[1, 2], [3]]>>,
  Expect<Equal<Chunk<[1, 2, 3, 4], 2>, [[1, 2], [3, 4]]>>,
  Expect<Equal<Chunk<[1, 2, 3, 4], 5>, [[1, 2, 3, 4]]>>,
  Expect<Equal<Chunk<[1, true, 2, false], 2>, [[1, true], [2, false]]>>,
]
type cases2 = [
  Expect<Equal<Chunk2<[], 1>, []>>,
  Expect<Equal<Chunk2<[1, 2, 3], 1>, [[1], [2], [3]]>>,
  Expect<Equal<Chunk2<[1, 2, 3], 2>, [[1, 2], [3]]>>,
  Expect<Equal<Chunk2<[1, 2, 3, 4], 2>, [[1, 2], [3, 4]]>>,
  Expect<Equal<Chunk2<[1, 2, 3, 4], 5>, [[1, 2, 3, 4]]>>,
  Expect<Equal<Chunk2<[1, true, 2, false], 2>, [[1, true], [2, false]]>>,
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/4499/answer
  > View solutions: https://tsch.js.org/4499/solutions
  > More Challenges: https://tsch.js.org
*/

