import { createAction, handleActions } from 'redux-actions'
import createRequestSaga, { createRequestActionTypes } from '@/library/createRequestSaga'
import { takeLatest } from 'redux-saga/effects'
import * as api from '@/library/api/list'

const [WEAPON_READ, WEAPON_READ_SUCCESS, WEAPON_READ_FAILURE] = createRequestActionTypes('weapon/WEAPON_READ')
const WEAPON_READ_INITIAL = 'weapon/WEAPON_READ_INITIAL'

export const weaponRead = createAction(WEAPON_READ, ({ service, category, number, grade, select, keyword }: any) => ({
  service,
  category,
  number,
  grade,
  select,
  keyword
}))
export const weaponReadInitial = createAction(WEAPON_READ_INITIAL)

export function* weaponReadSaga() {
  yield takeLatest(WEAPON_READ, createRequestSaga(WEAPON_READ, api.read))
}

const initialState = {
  data: null,
  error: null
}

export default handleActions(
  {
    [WEAPON_READ_SUCCESS]: (state: any, { payload: data }: any) => {
      return {
        ...state,
        data
      }
    },
    [WEAPON_READ_FAILURE]: (state: any, { payload: error }: any) => {
      return {
        ...state,
        error
      }
    },
    [WEAPON_READ_INITIAL]: () => {
      return {
        ...initialState
      }
    }
  },
  initialState
)
