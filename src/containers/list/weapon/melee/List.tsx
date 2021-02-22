import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import List from '@/components/list/weapon/common/List'

import { listWeaponMelee, listWeaponMeleeInitial } from '@/modules/list/weapon/melee/list'

const Result = (props: any) => {
  const { location, attributes, styles } = props
  const { service, category, grade, number, paging } = attributes

  const [current, setCurrent] = useState()

  const { loading, error, list, pagination } = useSelector(({ listWeaponMelee, loading }: any) => {
    const { data, error } = listWeaponMelee

    const temporary = {
      list: null,
      pagination: null
    }

    if (data !== null) {
      temporary.list = data.result
      temporary.pagination = data.pagination
    }

    return {
      loading: loading['list/LIST_WEAPON_MELEE'],
      error: error,
      list: temporary.list,
      pagination: temporary.pagination
    }
  }, shallowEqual)

  const dispatch = useDispatch()

  useEffect(() => {
    console.log('containers → list → weapon → melee → List.tsx → useEffect(() => { .. }')

    dispatch(listWeaponMelee({ service, category, number, grade, select: '', keyword: '' }))

    setCurrent(() => {
      return category
    })

    return () => {
      console.log('containers → list → weapon → melee → List.tsx → 언 마운트 될 때 리덕스에서 데이터를 삭제합니다.')

      dispatch(listWeaponMeleeInitial())
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
