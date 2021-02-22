import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import Read from '@/components/read/weapon/common/Read'

import { readWeapon, readWeaponInitial } from '@/modules/read/weapon/read'

const Result = (props: any) => {
  const { attributes, styles } = props
  const { location } = props
  const { service, category, grade, number } = attributes

  const { loading, error, read, pagination } = useSelector(({ loading, readWeapon }: any) => {
    const temp = {
      read: '',
      pagination: ''
    }

    if (readWeapon.data !== null) {
      temp.read = readWeapon.data[0]
      temp.pagination = readWeapon.data.pagination
    }

    return {
      loading: loading['board/WEAPON_READ'],
      error: readWeapon.error,
      read: temp.read,
      pagination: temp.pagination
    }
  }, shallowEqual)

  const dispatch = useDispatch()

  useEffect(() => {
    console.log('containers → weapon → read → Read.tsx → useEffect(() => { .. }')

    dispatch(readWeapon({ service, category, number, grade, select: '', keyword: '' }))

    return () => {
      console.log('containers → weapon → read → Read.tsx → 언 마운트 될 때 리덕스에서 데이터를 삭제합니다.')

      dispatch(readWeaponInitial())
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
      styles={styles}
    />
  )
}

export default withRouter(Result)
