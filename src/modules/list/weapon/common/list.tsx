import { createAction, handleActions } from 'redux-actions'
import createRequestSaga, { createRequestActionTypes } from '@/library/createRequestSaga'
import { takeLatest } from 'redux-saga/effects'
import * as api from '@/library/api/weapon'

const [LIST_WEAPON, LIST_WEAPON_SUCCESS, LIST_WEAPON_FAILURE] = createRequestActionTypes('list/LIST_WEAPON')
const LIST_WEAPON_INITIAL = 'list/LIST_WEAPON_INITIAL'

export const listWeapon = createAction(LIST_WEAPON, ({ service, category, number, grade, select, keyword }: any) => ({
  service,
  category,
  number,
  grade,
  select,
  keyword
}))

export const listWeaponInitial = createAction(LIST_WEAPON_INITIAL)

export function* listWeaponSaga() {
  yield takeLatest(LIST_WEAPON, createRequestSaga(LIST_WEAPON, api.list))
}

const initialState = {
  data: null,
  error: null
}

export default handleActions(
  {
    [LIST_WEAPON_SUCCESS]: (state: any, { payload: data }: any) => {
      return {
        ...state,
        data
      }
    },
    [LIST_WEAPON_FAILURE]: (state: any, { payload: error }: any) => {
      return {
        ...state,
        error
      }
    },
    [LIST_WEAPON_INITIAL]: () => {
      return {
        ...initialState
      }
    }
  },
  initialState
)
