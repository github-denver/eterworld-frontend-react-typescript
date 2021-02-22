import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import qs from 'qs'

import Horizontal from '@/components/common/Horizontal'

import { listWeapon, listWeaponInitial } from '@/modules/list/weapon/common/list'

const Result = (props: any) => {
  const { attributes } = props
  const { history, location, match } = props

  const { loading, error, list, pagination } = useSelector(({ listWeapon, loading }: any) => {
    const temp = {
      listWeapon: '',
      pagination: ''
    }

    if (listWeapon.data !== null) {
      temp.listWeapon = listWeapon.data.result
      temp.pagination = listWeapon.data.pagination
    }

    return {
      loading: loading['board/BOARD_LIST'],
      error: listWeapon.error,
      list: temp.listWeapon,
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
    dispatch(listWeapon({ category: category, number, grade: grade, select: '', keyword: '' }))

    return () => {
      console.log('containers → common → Horizontal.tsx → 언 마운트 될 때 리덕스에서 데이터를 삭제합니다.')

      dispatch(listWeaponInitial())
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
