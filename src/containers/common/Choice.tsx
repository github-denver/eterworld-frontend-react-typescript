import React, { useState, useCallback, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

import qs from 'qs'

import Choice from '@/components/common/Choice'

interface Attributes {
  [key: string]: any
}

const Result = (props: any) => {
  const { attributes, stlyes } = props
  const { history, location } = props
  const { prefix, grade123, suffix, custom, padding } = attributes
  console.log('grade123: ', grade123)

  const [grade, setGrade] = useState(grade123)

  const prefixed = qs.parse(location.search, {
    ignoreQueryPrefix: true
  })

  const pathname = location.pathname.split('/').filter((element: string) => {
    return element !== null && element !== undefined && element !== ''
  })

  const service = pathname[1]
  const category = pathname[2]

  const handleGradeChange = (event: Attributes) => {
    setGrade(() => {
      return event.target.value
    })

    const url = `/eternalcity/${service}/${category}/list/1?grade=${event.target.value}`

    history.push(url)
  }

  useEffect(() => {
    console.log('containers → common → Choice.tsx → useEffect(() => { .. })')

    return () => {
      console.log('containers → common → Choice.tsx → 언 마운트 될 때 리덕스에서 데이터를 삭제합니다.')

      // setGrade((): any => {
      //   console.log('prefixed.grade: ', prefixed.grade)
      //   return prefixed.grade
      // })
    }
  }, [])

  return (
    <Choice
      attributes={{
        prefix: prefix,
        grade: grade,
        suffix: suffix,
        custom: custom,
        padding: padding,
        event: handleGradeChange
      }}
      stlyes={stlyes}
    />
  )
}

export default withRouter(Result)
