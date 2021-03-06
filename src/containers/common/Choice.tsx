import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'

import Choice from '@/components/common/Choice'

interface Attributes {
  [key: string]: any
}

const Result = (props: any) => {
  const { attributes, styles } = props
  const { history, location } = props
  const { label, prefix, grade, suffix, start, end, size, checked } = attributes

  const pathname = location.pathname.split('/').filter((element: string) => {
    return element !== null && element !== undefined && element !== ''
  })

  const service = pathname[1]

  const category = pathname[2]

  const handleUrlChange = (event: Attributes) => {
    const url = `/eternalcity/${service}/${category}/list/1?grade=${event.target.value}`

    history.push(url)
  }

  useEffect(() => {
    console.log('containers → common → Choice.tsx → useEffect(() => { .. })')

    return () => {
      console.log('containers → common → Choice.tsx → 언 마운트 될 때 리덕스에서 데이터를 삭제합니다.')
    }
  }, [])

  return (
    <Choice
      attributes={{
        label: label,
        prefix: prefix,
        grade: grade,
        suffix: suffix,
        start: start,
        end: end,
        size: size,
        checked: checked,
        onChange: handleUrlChange
      }}
      styles={styles}
    />
  )
}

export default withRouter(Result)
