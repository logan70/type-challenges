/*
  545 - printf
  -------
  by null (@Bestmain-YS) #hard #template-literal
  
  ### Question
  
  Implement `Format<T extends string>` generic.
  
  For example,
  
  ```ts
  type FormatCase1 = Format<"%sabc"> // FormatCase1 : string => string
  type FormatCase2 = Format<"%s%dabc"> // FormatCase2 : string => number => string
  type FormatCase3 = Format<"sdabc"> // FormatCase3 :  string
  type FormatCase4 = Format<"sd%abc"> // FormatCase4 :  string
  ```
  
  > View on GitHub: https://tsch.js.org/545
*/


/* _____________ Your Code Here _____________ */
type Char2Type = {
  's': string,
  'd': number,
}

type Format<T extends string> = T extends `${infer F}${infer S}${infer R}`
  ? F extends '%'
    ? S extends '%'
      ? Format<R>
      : S extends keyof Char2Type
        ? (a: Char2Type[S]) => Format<R>
        : Format<R>
    : Format<`${S}${R}`>
  : string;


/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Format<'abc'>, string>>,
  Expect<Equal<Format<'ab%c'>, string>>,
  Expect<Equal<Format<'a%sbc'>, (s1: string) => string>>,
  Expect<Equal<Format<'a%dbc'>, (d1: number) => string>>,
  Expect<Equal<Format<'a%%dbc'>, string>>,
  Expect<Equal<Format<'a%%%dbc'>, (d1: number) => string>>,
  Expect<Equal<Format<'a%dbc%s'>, (d1: number) => (s1: string) => string>>,
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/545/answer
  > View solutions: https://tsch.js.org/545/solutions
  > More Challenges: https://tsch.js.org
*/

