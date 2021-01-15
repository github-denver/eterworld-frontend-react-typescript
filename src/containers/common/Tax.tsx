import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import qs from 'qs'

import Tax from '@/components/common/Tax'

import { weaponRead, weaponReadInitial } from '@/modules/board/read'

const Result = (props: any) => {
  const { style } = props
  const { location } = props

  const { loading, error, list } = useSelector(({ weaponRead, loading }: any) => {
    const temp = {
      weaponRead: ''
    }

    if (weaponRead.data !== null) {
      temp.weaponRead = weaponRead.data
    }

    return {
      loading: loading['board/WEAPON_READ'],
      error: weaponRead.error,
      list: temp.weaponRead
    }
  }, shallowEqual)

  const dispatch = useDispatch()

  const prefixed = qs.parse(location.search, {
    ignoreQueryPrefix: true
  })

  const pathname = location.pathname.split('/').filter((element: string) => {
    return element !== null && element !== undefined && element !== ''
  })

  const service = pathname[1]

  const category = pathname[2]

  let number = pathname.splice(-1)[0]

  let grade: any = prefixed.grade

  if (number === 'list' || number === 'read') {
    number = 1
  }

  if (!grade) {
    grade = 1
  }

  useEffect(() => {
    dispatch(weaponRead({ service: service, category: category, number, grade: grade, select: '', keyword: '' }))

    return () => {
      console.log('components → common → Tax.tsx → 언 마운트 될 때 리덕스에서 데이터를 삭제합니다.')

      dispatch(weaponReadInitial())
    }
  }, [dispatch, service, category, number, grade])

  return (
    <Tax
      location={location}
      attributes={{
        loading: loading,
        error: error,
        list: list
      }}
      style={style}
    />
  )
}

export default withRouter(Result)
