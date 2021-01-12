import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import qs from 'qs'

import Rows from '@/components/weapon/list/List'

import { boardList, boardListInitial } from '@/modules/board/list'

const Result = (props: any) => {
  const { attributes } = props
  const { history, location, match } = props

  const { loading, error, list, pagination } = useSelector(({ boardList, loading }: any) => {
    const temp = {
      boardList: '',
      pagination: ''
    }

    if (boardList.data !== null) {
      temp.boardList = boardList.data.result
      temp.pagination = boardList.data.pagination
    }

    return {
      loading: loading['board/BOARD_LIST'],
      error: boardList.error,
      list: temp.boardList,
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

  if (number === 'list' || number === 'read' || category === 'read') {
    number = 1
  }

  if (!grade) {
    grade = 1
  }

  useEffect(() => {
    dispatch(boardList({ service: service, category: category, number, grade: grade, select: '', keyword: '' }))

    return () => {
      console.log('containers → common → weapon → list → List.tsx → 언 마운트 될 때 리덕스에서 데이터를 삭제합니다.')

      dispatch(boardListInitial())
    }
  }, [dispatch, category, number, grade])

  return (
    <Rows
      attributes={{
        loading: loading,
        error: error,
        service: service,
        category: category,
        list: list,
        pagination: pagination,
        grade: grade,
        padding: attributes.padding
      }}
    />
  )
}

export default withRouter(Result)
