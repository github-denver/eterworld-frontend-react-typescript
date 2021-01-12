import { ReactNode } from 'react'

// export interface Attributes {
//   attributes: {
//     level?: 1 | 2 | 3 | 4 | 5 | 6
//     title?: string
//     invisible?: boolean
//     padding?: boolean
//   }
//   children?: ReactNode
// }

export interface Attributes {
  [key: string]: any
}

export type hn = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
