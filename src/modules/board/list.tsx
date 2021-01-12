import { createAction, handleActions } from 'redux-actions'
import createRequestSaga, { createRequestActionTypes } from '@/library/createRequestSaga'
import { takeLatest } from 'redux-saga/effects'
import * as api from '@/library/api/list'

const [BOARD_LIST, BOARD_LIST_SUCCESS, BOARD_LIST_FAILURE] = createRequestActionTypes('board/BOARD_LIST')
const BOARD_LIST_INITIAL = 'board/BOARD_LIST_INITIAL'

export const boardList = createAction(BOARD_LIST, ({ service, category, number, grade, select, keyword }: any) => ({
  service,
  category,
  number,
  grade,
  select,
  keyword
}))
export const boardListInitial = createAction(BOARD_LIST_INITIAL)

export function* boardListSaga() {
  yield takeLatest(BOARD_LIST, createRequestSaga(BOARD_LIST, api.list))
}

const initialState = {
  data: null,
  error: null
}

export default handleActions(
  {
    [BOARD_LIST_SUCCESS]: (state: any, { payload: data }: any) => {
      return {
        ...state,
        data
      }
    },
    [BOARD_LIST_FAILURE]: (state: any, { payload: error }: any) => {
      return {
        ...state,
        error
      }
    },
    [BOARD_LIST_INITIAL]: () => {
      return {
        ...initialState
      }
    }
  },
  initialState
)
