/*
  531 - String to Union
  -------
  by Andrey Krasovsky (@bre30kra69cs) #medium #union #string
  
  ### Question
  
  Implement the String to Union type. Type take string argument. The output should be a union of input letters
  
  For example
  
  ```ts
  type Test = '123';
  type Result = StringToUnion<Test>; // expected to be "1" | "2" | "3"
  ```
  
  > View on GitHub: https://tsch.js.org/531
*/


/* _____________ Your Code Here _____________ */

type TupleToUnion<T extends any[]> = T[number]

type StringToTuple<T extends string> = T extends `${infer R}${infer P}`
  ? [R, ...StringToTuple<P>]
  : []

type StringToUnion<T extends string> = TupleToUnion<StringToTuple<T>>

type StringToUnion2<T extends string> = T extends `${infer R}${infer P}`
  ? R | StringToUnion<P>
  : never

type StringToUnion3<T extends string, Q extends any[] = []> = T extends `${infer R}${infer P}`
  ? StringToUnion3<P, [...Q, R]>
  : Q[number]


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<StringToUnion<''>, never>>,
  Expect<Equal<StringToUnion<'t'>, 't'>>,
  Expect<Equal<StringToUnion<'hello'>, 'h' | 'e' | 'l' | 'l' | 'o'>>,
  Expect<Equal<StringToUnion<'coronavirus'>, 'c' | 'o' | 'r' | 'o' | 'n' | 'a' | 'v' | 'i' | 'r' | 'u' | 's'>>,
]
type cases2 = [
  Expect<Equal<StringToUnion2<''>, never>>,
  Expect<Equal<StringToUnion2<'t'>, 't'>>,
  Expect<Equal<StringToUnion2<'hello'>, 'h' | 'e' | 'l' | 'l' | 'o'>>,
  Expect<Equal<StringToUnion2<'coronavirus'>, 'c' | 'o' | 'r' | 'o' | 'n' | 'a' | 'v' | 'i' | 'r' | 'u' | 's'>>,
]
type cases3 = [
  Expect<Equal<StringToUnion3<''>, never>>,
  Expect<Equal<StringToUnion3<'t'>, 't'>>,
  Expect<Equal<StringToUnion3<'hello'>, 'h' | 'e' | 'l' | 'l' | 'o'>>,
  Expect<Equal<StringToUnion3<'coronavirus'>, 'c' | 'o' | 'r' | 'o' | 'n' | 'a' | 'v' | 'i' | 'r' | 'u' | 's'>>,
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/531/answer
  > View solutions: https://tsch.js.org/531/solutions
  > More Challenges: https://tsch.js.org
*/

