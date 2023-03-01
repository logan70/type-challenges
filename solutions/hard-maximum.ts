/*
  9384 - Maximum
  -------
  by ch3cknull (@ch3cknull) #hard #array

  ### Question

  ### Description
  Implements a type `Maximum`,  get array like type `T`, and return max value in `T`

  `0 <= T[number] < 1000`, so **nagative number not considered**.

  If `T` is a empty array `[]`, just reutrn `never`

  ```ts
  Maximum<[]> // never
  Maximum<[0, 2, 1]> // 2
  Maximum<[1, 20, 200, 150]> // 200
  ```
  ### Advanced
  Can you implement type `Minimum` inspired by `Maximum`?

  > View on GitHub: https://tsch.js.org/9384
*/

/* _____________ Your Code Here _____________ */
// 假设X和Y都是>=0的整数，利用temp数组长度，从0开始递增，如果先等于X则Y大，先等于Y则X大
type Max<X extends number, Y extends number, Temp extends any[] = []> = Temp['length'] extends X
  ? Y
  : Temp['length'] extends Y
    ? X
    : Max<X, Y, [any, ...Temp]>

// 如果T数组至少有两个元素，则比较后留下较大的数字，递归调用自身。
// 如果T是有一个元素，则其为最大
// 最后分支代表T是空数组，返回never即可
type Maximum<T extends number[]> = T extends [infer F extends number, infer S extends number, ...infer Rest extends number[]]
  ? Maximum<[Max<F, S>, ...Rest]>
  : T extends [infer F extends number]
    ? F
    : never;
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Maximum<[]>, never>>,
  Expect<Equal<Maximum<[1]>, 1>>,
  Expect<Equal<Maximum<[0, 2, 1]>, 2>>,
  Expect<Equal<Maximum<[1, 20, 200, 150]>, 200>>,
]


// " 1|20|200|150 extends 20 ? never : U " ==>> " 1|200|150 "
type Maximum2<T extends any[], U = T[number], N extends any[] = []>
    = T extends [] ? never
    : Equal<U, N['length']> extends true ? U
    : Maximum2<T, (U extends N['length'] ? never : U), [...N, unknown]>

type cases2 = [
  Expect<Equal<Maximum2<[]>, never>>,
  Expect<Equal<Maximum2<[1]>, 1>>,
  Expect<Equal<Maximum2<[0, 2, 1]>, 2>>,
  Expect<Equal<Maximum2<[1, 20, 200, 150]>, 200>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/9384/answer
  > View solutions: https://tsch.js.org/9384/solutions
  > More Challenges: https://tsch.js.org
*/
