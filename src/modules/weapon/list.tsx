import { createAction, handleActions } from 'redux-actions'
import createRequestSaga, { createRequestActionTypes } from '@/library/createRequestSaga'
import { takeLatest } from 'redux-saga/effects'
import * as api from '@/library/api/list'

const [WEAPON_LIST, WEAPON_LIST_SUCCESS, WEAPON_LIST_FAILURE] = createRequestActionTypes('weapon/WEAPON_LIST')
const WEAPON_LIST_INITIAL = 'weapon/WEAPON_LIST_INITIAL'

export const weaponList = createAction(WEAPON_LIST, ({ service, category, number, grade, select, keyword }: any) => ({
  service,
  category,
  number,
  grade,
  select,
  keyword
}))
export const weaponListInitial = createAction(WEAPON_LIST_INITIAL)

export function* weaponListSaga() {
  yield takeLatest(WEAPON_LIST, createRequestSaga(WEAPON_LIST, api.list))
}

const initialState = {
  data: null,
  error: null
}

export default handleActions(
  {
    [WEAPON_LIST_SUCCESS]: (state: any, { payload: data }: any) => {
      return {
        ...state,
        data
      }
    },
    [WEAPON_LIST_FAILURE]: (state: any, { payload: error }: any) => {
      return {
        ...state,
        error
      }
    },
    [WEAPON_LIST_INITIAL]: () => {
      return {
        ...initialState
      }
    }
  },
  initialState
)
