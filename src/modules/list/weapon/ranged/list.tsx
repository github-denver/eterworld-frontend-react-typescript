import { createAction, handleActions } from 'redux-actions'
import createRequestSaga, { createRequestActionTypes } from '@/library/createRequestSaga'
import { takeLatest } from 'redux-saga/effects'
import * as api from '@/library/api/weapon'

const [LIST_WEAPON_RANGED, LIST_WEAPON_RANGED_SUCCESS, LIST_WEAPON_RANGED_FAILURE] = createRequestActionTypes('list/LIST_WEAPON_RANGED')
const LIST_WEAPON_RANGED_INITIAL = 'list/LIST_WEAPON_RANGED_INITIAL'

export const listWeaponRanged = createAction(LIST_WEAPON_RANGED, ({ service, category, number, grade, select, keyword }: any) => ({
  service,
  category,
  number,
  grade,
  select,
  keyword
}))

export const listWeaponRangedInitial = createAction(LIST_WEAPON_RANGED_INITIAL)

export function* listWeaponRangedSaga() {
  yield takeLatest(LIST_WEAPON_RANGED, createRequestSaga(LIST_WEAPON_RANGED, api.list))
}

const initialState = {
  data: null,
  error: null
}

export default handleActions(
  {
    [LIST_WEAPON_RANGED_SUCCESS]: (state: any, { payload: data }: any) => {
      return {
        ...state,
        data
      }
    },
    [LIST_WEAPON_RANGED_FAILURE]: (state: any, { payload: error }: any) => {
      return {
        ...state,
        error
      }
    },
    [LIST_WEAPON_RANGED_INITIAL]: () => {
      return {
        ...initialState
      }
    }
  },
  initialState
)
