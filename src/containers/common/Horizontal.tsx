import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import qs from 'qs'

import Horizontal from '@/components/common/Horizontal'

import { weaponList, weaponListInitial } from '@/modules/weapon/list'

const Result = (props: any) => {
  const { attributes } = props
  const { history, location, match } = props

  const { loading, error, list, pagination } = useSelector(({ weaponList, loading }: any) => {
    const temp = {
      weaponList: '',
      pagination: ''
    }

    if (weaponList.data !== null) {
      temp.weaponList = weaponList.data.result
      temp.pagination = weaponList.data.pagination
    }

    return {
      loading: loading['board/BOARD_LIST'],
      error: weaponList.error,
      list: temp.weaponList,
      pagination: temp.pagination
    }
  }, shallowEqual)

  const dispatch = useDispatch()

  const prefixed = qs.parse(attributes.location.search, {
    ignoreQueryPrefix: true
  })

  let pathname = location.pathname.split('/').filter((element: string) => {
    return element !== null && element !== undefined && element !== ''
  })

  let service = pathname[1]

  let category = pathname[2]

  let number = pathname.splice(-1)[0]

  let grade: any = prefixed.grade

  if (number === 'list' || number === 'read' || category === 'read') {
    number = 1
  }

  if (!grade) {
    grade = 1
  }

  useEffect(() => {
    dispatch(weaponList({ category: category, number, grade: grade, select: '', keyword: '' }))

    return () => {
      console.log('containers → common → Horizontal.tsx → 언 마운트 될 때 리덕스에서 데이터를 삭제합니다.')

      dispatch(weaponListInitial())
    }
  }, [dispatch, category, number, prefixed.grade])

  return (
    <Horizontal
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
