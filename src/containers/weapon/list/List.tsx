import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import Rows from '@/components/weapon/list/List'

import { weaponList, weaponListInitial } from '@/modules/weapon/list'

const Result = (props: any) => {
  const { attributes, style } = props
  const { location } = props
  const { service, category, grade, number } = attributes

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
      loading: loading['board/WEAPON_LIST'],
      error: weaponList.error,
      list: temp.weaponList,
      pagination: temp.pagination
    }
  }, shallowEqual)

  const [before, setBefore] = useState()

  const dispatch = useDispatch()

  useEffect(() => {
    console.log('containers → common → weapon → list → List.tsx → useEffect(() => { .. }')

    dispatch(weaponList({ service, category, number, grade, select: '', keyword: '' }))

    setBefore(() => {
      return category
    })

    return () => {
      console.log('containers → common → weapon → list → List.tsx → 언 마운트 될 때 리덕스에서 데이터를 삭제합니다.')

      dispatch(weaponListInitial())
    }
  }, [dispatch, service, category, number, grade])

  return (
    <Rows
      location={location}
      attributes={{
        loading,
        error,
        service: service,
        category: before,
        list,
        pagination,
        grade
      }}
      style={style}
    />
  )
}

export default withRouter(Result)
