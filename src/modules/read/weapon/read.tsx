import { createAction, handleActions } from 'redux-actions'
import createRequestSaga, { createRequestActionTypes } from '@/library/createRequestSaga'
import { takeLatest } from 'redux-saga/effects'
import * as api from '@/library/api/weapon'

const [READ_WEAPON, READ_WEAPON_SUCCESS, READ_WEAPON_FAILURE] = createRequestActionTypes('read/READ_WEAPON')
const READ_WEAPON_INITIAL = 'read/READ_WEAPON_INITIAL'

export const readWeapon = createAction(READ_WEAPON, ({ service, category, number, grade, select, keyword }: any) => ({
  service,
  category,
  number,
  grade,
  select,
  keyword
}))

export const readWeaponInitial = createAction(READ_WEAPON_INITIAL)

export function* readWeaponSaga() {
  yield takeLatest(READ_WEAPON, createRequestSaga(READ_WEAPON, api.read))
}

const initialState = {
  data: null,
  error: null
}

export default handleActions(
  {
    [READ_WEAPON_SUCCESS]: (state: any, { payload: data }: any) => {
      return {
        ...state,
        data
      }
    },
    [READ_WEAPON_FAILURE]: (state: any, { payload: error }: any) => {
      return {
        ...state,
        error
      }
    },
    [READ_WEAPON_INITIAL]: () => {
      return {
        ...initialState
      }
    }
  },
  initialState
)
