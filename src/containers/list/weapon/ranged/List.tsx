import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import List from '@/components/list/weapon/common/List'

import { listWeaponRanged, listWeaponRangedInitial } from '@/modules/list/weapon/ranged/list'

const Result = (props: any) => {
  const { location, attributes, styles } = props
  const { service, category, grade, number, paging } = attributes

  const [current, setCurrent] = useState()

  const { loading, error, list, pagination } = useSelector(({ listWeaponRanged, loading }: any) => {
    const { data, error } = listWeaponRanged

    const temporary = {
      list: null,
      pagination: null
    }

    if (data !== null) {
      temporary.list = data.result
      temporary.pagination = data.pagination
    }

    return {
      loading: loading['list/LIST_WEAPON_RANGED'],
      error: error,
      list: temporary.list,
      pagination: temporary.pagination
    }
  }, shallowEqual)

  const dispatch = useDispatch()

  useEffect(() => {
    console.log('containers → list → weapon → ranged → List.tsx → useEffect(() => { .. }')

    dispatch(listWeaponRanged({ service, category, number, grade, select: '', keyword: '' }))

    setCurrent(() => {
      return category
    })

    return () => {
      console.log('containers → list → weapon → ranged → List.tsx → 언 마운트 될 때 리덕스에서 데이터를 삭제합니다.')

      dispatch(listWeaponRangedInitial())
    }
  }, [dispatch, service, category, number, grade])

  return (
    <List
      location={location}
      attributes={{
        loading,
        error,
        service: service,
        category: current,
        list,
        pagination,
        grade,
        paging
      }}
      styles={styles}
    />
  )
}

export default withRouter(Result)
