/*
  9155 - ValidDate
  -------
  by ch3cknull (@ch3cknull) #hard 
  
  ### Question
  
  Implement a type `ValidDate`, which takes an input type T and returns whether T is a valid date.
  
  **Leap year is not considered**
  
  Good Luck!
  
  ```ts
  ValidDate<'0102'> // true
  ValidDate<'0131'> // true
  ValidDate<'1231'> // true
  ValidDate<'0229'> // false
  ValidDate<'0100'> // false
  ValidDate<'0132'> // false
  ValidDate<'1301'> // false
  ```
  
  > View on GitHub: https://tsch.js.org/9155
*/


/* _____________ Your Code Here _____________ */

type MaxMap = {
  '01': 31,
  '02': 28,
  '03': 31,
  '04': 30,
  '05': 31,
  '06': 30,
  '07': 31,
  '08': 31,
  '09': 30,
  '10': 31,
  '11': 30,
  '12': 31,
}

type Day2Num<S extends string> = S extends `0${infer D extends number}`
  ? D
  : S extends `${infer D extends number}` ? D : never;

type IsValidDay<Day extends string, Month extends keyof MaxMap, Temp extends any[] = [], DayNum = Day2Num<Day>, TempLen = Temp['length']> = [DayNum] extends [0 | never]
  ? false
  : TempLen extends DayNum
    ? true
    : TempLen extends MaxMap[Month]
      ? false
      : IsValidDay<Day, Month, [...Temp, any]>;

type ValidDate<T extends string> = T extends `${infer F extends number}${infer S extends number}${infer Day extends `${0 | 1 | 2 | 3}${number}`}`
  ? `${F}${S}` extends keyof MaxMap
    ? IsValidDay<Day, `${F}${S}`>
    : false
  : false;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<ValidDate<'0102'>, true>>,
  Expect<Equal<ValidDate<'0131'>, true>>,
  Expect<Equal<ValidDate<'1231'>, true>>,
  Expect<Equal<ValidDate<'0229'>, false>>,
  Expect<Equal<ValidDate<'0100'>, false>>,
  Expect<Equal<ValidDate<'0132'>, false>>,
  Expect<Equal<ValidDate<'1301'>, false>>,
  Expect<Equal<ValidDate<'0123'>, true>>,
  Expect<Equal<ValidDate<'01-03'>, false>>,
  Expect<Equal<ValidDate<'01234'>, false>>,
  Expect<Equal<ValidDate<''>, false>>,
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/9155/answer
  > View solutions: https://tsch.js.org/9155/solutions
  > More Challenges: https://tsch.js.org
*/

