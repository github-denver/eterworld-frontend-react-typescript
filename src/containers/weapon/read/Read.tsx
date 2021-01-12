import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import qs from 'qs'

import Read from '@/components/weapon/read/Read'

import { weaponRead, weaponReadInitial } from '@/modules/board/read'

const Result = (props: any) => {
  const { attributes } = props
  const { history, location, match } = props

  const { loading, error, list, pagination } = useSelector(({ weaponRead, loading }: any) => {
    const temp = {
      weaponRead: '',
      pagination: ''
    }

    if (weaponRead.data !== null) {
      temp.weaponRead = weaponRead.data
      temp.pagination = weaponRead.data.pagination
    }

    return {
      loading: loading['board/WEAPON_READ'],
      error: weaponRead.error,
      list: temp.weaponRead,
      pagination: temp.pagination
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
      console.log('board/WEAPON_READ 언 마운트 될 때 리덕스에서 데이터를 삭제합니다.')

      dispatch(weaponReadInitial())
    }
  }, [dispatch, category, number, grade])

  return (
    <Read
      attributes={{
        loading: loading,
        error: error,
        service: service,
        category: category,
        list: list,
        pagination: pagination,
        grade: prefixed.grade,
        padding: attributes.padding
      }}
    />
  )
}

export default withRouter(Result)
