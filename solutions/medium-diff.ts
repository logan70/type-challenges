/*
  645 - Diff
  -------
  by ZYSzys (@ZYSzys) #medium #object
  
  ### Question
  
  Get an `Object` that is the difference between `O` & `O1`
  
  > View on GitHub: https://tsch.js.org/645
*/


/* _____________ Your Code Here _____________ */

type Diff<O, O1> = {
  [K in Exclude<keyof (O & O1), keyof (O | O1)>]: K extends keyof O
    ? O[K]
    : K extends keyof O1
      ? O1[K]
      : never
}

type Diff2<O, O1> = Omit<Omit<O, keyof O1> & Omit<O1, keyof O>, never>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type Foo = {
  name: string
  age: string
}
type Bar = {
  name: string
  age: string
  gender: number
}
type Coo = {
  name: string
  gender: number
}

type cases = [
  Expect<Equal<Diff<Foo, Bar>, { gender: number }>>,
  Expect<Equal<Diff<Bar, Foo>, { gender: number }>>,
  Expect<Equal<Diff<Foo, Coo>, { age: string; gender: number }>>,
  Expect<Equal<Diff<Coo, Foo>, { age: string; gender: number }>>,
]

type case2 = [
  Expect<Equal<Diff2<Foo, Bar>, { gender: number }>>,
  Expect<Equal<Diff2<Bar, Foo>, { gender: number }>>,
  Expect<Equal<Diff2<Foo, Coo>, { age: string; gender: number }>>,
  Expect<Equal<Diff2<Coo, Foo>, { age: string; gender: number }>>,
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/645/answer
  > View solutions: https://tsch.js.org/645/solutions
  > More Challenges: https://tsch.js.org
*/

