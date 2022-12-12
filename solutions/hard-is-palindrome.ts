/*
  4037 - IsPalindrome
  -------
  by jiangshan (@jiangshanmeta) #hard #string
  
  ### Question
  
  Implement type ```IsPalindrome<T>``` to check whether  a string or number is palindrome.
  
  For example:
  
  ```typescript
  IsPalindrome<'abc'> // false
  IsPalindrome<121> // true
  ```
  
  > View on GitHub: https://tsch.js.org/4037
*/


/* _____________ Your Code Here _____________ */

type IsPalindrome<T extends string | number, K = `${T}`> = K extends `${infer F}${infer R}`
    ? R extends '' // only one letter
      ? true
      : R extends `${infer Rest}${F}`
        ? IsPalindrome<Rest>
        : false
    :  K extends ''
      ? true
      : false;


type ReverseString<T extends string> = T extends `${infer F}${infer R}` ? `${ReverseString<R>}${F}` : T;

type IsPalindrome2<T extends string | number> = Equal<`${T}`, ReverseString<`${T}`>>
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<IsPalindrome<'abc'>, false>>,
  Expect<Equal<IsPalindrome<'b'>, true>>,
  Expect<Equal<IsPalindrome<'abca'>, false>>,
  Expect<Equal<IsPalindrome<'abcba'>, true>>,
  Expect<Equal<IsPalindrome<121>, true>>,
  Expect<Equal<IsPalindrome<19260817>, false>>,
]
type cases2 = [
  Expect<Equal<IsPalindrome2<'abc'>, false>>,
  Expect<Equal<IsPalindrome2<'b'>, true>>,
  Expect<Equal<IsPalindrome2<'abca'>, false>>,
  Expect<Equal<IsPalindrome2<'abcba'>, true>>,
  Expect<Equal<IsPalindrome2<121>, true>>,
  Expect<Equal<IsPalindrome2<19260817>, false>>,
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/4037/answer
  > View solutions: https://tsch.js.org/4037/solutions
  > More Challenges: https://tsch.js.org
*/

