import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import Read from '@/components/weapon/read/Read'

import { weaponRead, weaponReadInitial } from '@/modules/weapon/read'

const Result = (props: any) => {
  const { attributes, style } = props
  const { location } = props
  const { service, category, grade, number } = attributes

  const { loading, error, read, pagination } = useSelector(({ loading, weaponRead }: any) => {
    const temp = {
      read: '',
      pagination: ''
    }

    if (weaponRead.data !== null) {
      temp.read = weaponRead.data[0]
      temp.pagination = weaponRead.data.pagination
    }

    return {
      loading: loading['board/WEAPON_READ'],
      error: weaponRead.error,
      read: temp.read,
      pagination: temp.pagination
    }
  }, shallowEqual)

  const dispatch = useDispatch()

  useEffect(() => {
    console.log('containers → weapon → read → Read.tsx → useEffect(() => { .. }')

    dispatch(weaponRead({ service, category, number, grade, select: '', keyword: '' }))

    return () => {
      console.log('containers → weapon → read → Read.tsx → 언 마운트 될 때 리덕스에서 데이터를 삭제합니다.')

      dispatch(weaponReadInitial())
    }
  }, [dispatch, service, category, number, grade])

  return (
    <Read
      location={location}
      attributes={{
        loading,
        error,
        service,
        category,
        read,
        pagination,
        grade
      }}
      style={style}
    />
  )
}

export default withRouter(Result)
