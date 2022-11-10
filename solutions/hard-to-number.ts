/*
  300 - String to Number
  -------
  by Pig Fang (@g-plane) #hard #template-literal
  
  ### Question
  
  Convert a string literal to a number, which behaves like `Number.parseInt`.
  
  > View on GitHub: https://tsch.js.org/300
*/


/* _____________ Your Code Here _____________ */

type IsNumberString<S extends string> = S extends `${infer F}${infer R}`
  ? F extends `${number}`
    ? IsNumberString<R>
    : false
  : true;

type ToNumber<S extends string, T extends any[] = []> = IsNumberString<S> extends true
  ? `${T['length']}` extends S
    ? T['length']
    : ToNumber<S, [...T, any]>
  : never

// your answers
type ToNumber2<S extends string> = S extends `${infer N extends number}` ? N : never;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<ToNumber<'0'>, 0>>,
  Expect<Equal<ToNumber<'5'>, 5>>,
  Expect<Equal<ToNumber<'12'>, 12>>,
  Expect<Equal<ToNumber<'27'>, 27>>,
  Expect<Equal<ToNumber<'18@7_$%'>, never>>,
]
type cases2 = [
  Expect<Equal<ToNumber2<'0'>, 0>>,
  Expect<Equal<ToNumber2<'5'>, 5>>,
  Expect<Equal<ToNumber2<'12'>, 12>>,
  Expect<Equal<ToNumber2<'27'>, 27>>,
  Expect<Equal<ToNumber2<'18@7_$%'>, never>>,
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/300/answer
  > View solutions: https://tsch.js.org/300/solutions
  > More Challenges: https://tsch.js.org
*/

