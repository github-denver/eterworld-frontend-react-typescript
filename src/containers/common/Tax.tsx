import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import qs from 'qs'

import Tax from '@/components/common/Tax'

import { readWeapon, readWeaponInitial } from '@/modules/read/weapon/read'

const Result = (props: any) => {
  const { styles } = props
  const { location } = props

  const { loading, error, list } = useSelector(({ readWeapon, loading }: any) => {
    const temp = {
      readWeapon: ''
    }

    if (readWeapon.data !== null) {
      temp.readWeapon = readWeapon.data
    }

    return {
      loading: loading['board/WEAPON_READ'],
      error: readWeapon.error,
      list: temp.readWeapon
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
    dispatch(readWeapon({ service: service, category: category, number, grade: grade, select: '', keyword: '' }))

    return () => {
      console.log('components → common → Tax.tsx → 언 마운트 될 때 리덕스에서 데이터를 삭제합니다.')

      dispatch(readWeaponInitial())
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
      styles={styles}
    />
  )
}

export default withRouter(Result)
