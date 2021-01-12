import { ReactNode } from 'react'

export interface Attributes {
  attributes: {
    title: string
    padding?: boolean
  }
  children?: ReactNode
}
