/*
  2949 - ObjectFromEntries
  -------
  by jiangshan (@jiangshanmeta) #hard #object
  
  ### Question
  
  Implement the type version of ```Object.fromEntries```
  
  For example:
  
  ```typescript
  interface Model {
    name: string;
    age: number;
    locations: string[] | null;
  }
  
  type ModelEntries = ['name', string] | ['age', number] | ['locations', string[] | null];
  
  type result = ObjectFromEntries<ModelEntries> // expected to be Model
  ```
  
  > View on GitHub: https://tsch.js.org/2949
*/


/* _____________ Your Code Here _____________ */

type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false;

type Entry2Obj<Entry> = Entry extends [infer K extends PropertyKey, infer T] ? { [Key in K]: T } : {}

type Entries2ObjIntersection<T,> = (T extends any ? (A: Entry2Obj<T>) => any : never) extends (A: infer R) => any ? R : never;

type MergeObjIntersection<T> = Omit<T, never>

type ObjectFromEntries<T> = MergeObjIntersection<Entries2ObjIntersection<T>>

/* _____________ Test Cases _____________ */
import type { Expect } from '@type-challenges/utils'

interface Model {
  name: string
  age: number
  locations: string[] | null
}

type ModelEntries = ['name', string] | ['age', number] | ['locations', string[] | null]

type cases = [
  Expect<Equal<ObjectFromEntries<ModelEntries>, Model>>,
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/2949/answer
  > View solutions: https://tsch.js.org/2949/solutions
  > More Challenges: https://tsch.js.org
*/

