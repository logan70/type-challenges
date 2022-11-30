/*
  2822 - Split
  -------
  by Andrea Simone Costa (@jfet97) #hard #string #split #array #tuple
  
  ### Question
  
  The well known `split()` method splits a string into an array of substrings by looking for a separator, and returns the new array. The goal of this challenge is to split a string, by using a separator, but in the type system!
  
  For example:
  
  ```ts
  type result = Split<'Hi! How are you?', ' '>  // should be ['Hi!', 'How', 'are', 'you?']
  ```
  
  > View on GitHub: https://tsch.js.org/2822
*/


/* _____________ Your Code Here _____________ */
type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false;

type Split<S extends string, SEP extends string> = Equal<S, string> extends true
  ? string[]
  : S extends `${infer F}${SEP}${infer R}`
    ? [F, ...Split<R, SEP>]
    : S extends ''
      ? SEP extends ''
        ? []
        : [S]
      : [S];

type test = Split<'', ''>

/* _____________ Test Cases _____________ */
import type { Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Split<'Hi! How are you?', 'z'>, ['Hi! How are you?']>>,
  Expect<Equal<Split<'Hi! How are you?', ' '>, ['Hi!', 'How', 'are', 'you?']>>,
  Expect<Equal<Split<'Hi! How are you?', ''>, ['H', 'i', '!', ' ', 'H', 'o', 'w', ' ', 'a', 'r', 'e', ' ', 'y', 'o', 'u', '?']>>,
  Expect<Equal<Split<'', ''>, []>>,
  Expect<Equal<Split<'', 'z'>, ['']>>,
  Expect<Equal<Split<string, 'whatever'>, string[]>>,
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/2822/answer
  > View solutions: https://tsch.js.org/2822/solutions
  > More Challenges: https://tsch.js.org
*/

