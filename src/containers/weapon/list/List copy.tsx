import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import qs from 'qs'

import Rows from '@/components/weapon/list/List'

import { weaponList, weaponListInitial } from '@/modules/weapon/list'

const Result = (props: any) => {
  const { attributes, style } = props
  const { location } = props

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

  const prefixed = qs.parse(location.search, {
    ignoreQueryPrefix: true
  })

  const pathname = location.pathname.split('/').filter((element: string) => {
    return element !== null && element !== undefined && element !== ''
  })

  const category = pathname[2]

  let number = pathname.splice(-1)[0]

  const grade = !!prefixed.grade ? Number(prefixed.grade) : 1
  // console.log('containers → common → weapon → list → List.tsx → grade: ', grade)

  if (number === 'list' || number === 'read' || category === 'read') {
    number = 1
  }

  useEffect(() => {
    dispatch(weaponList({ service: attributes.service, category: attributes.category, number, grade, select: '', keyword: '' }))

    return () => {
      console.log('containers → common → weapon → list → List.tsx → 언 마운트 될 때 리덕스에서 데이터를 삭제합니다.')

      dispatch(weaponListInitial())
    }
  }, [dispatch, attributes.service, attributes.category, number, grade])

  return (
    <Rows
      attributes={{
        loading: loading,
        error: error,
        service: attributes.service,
        category: attributes.category,
        list: list,
        pagination: pagination,
        grade: grade
      }}
      style={style}
    />
  )
}

export default withRouter(Result)
