import { createAction, handleActions } from 'redux-actions'
import createRequestSaga, { createRequestActionTypes } from '@/library/createRequestSaga'
import { takeLatest } from 'redux-saga/effects'
import * as api from '@/library/api/weapon'

const [LIST_WEAPON_MELEE, LIST_WEAPON_MELEE_SUCCESS, LIST_WEAPON_MELEE_FAILURE] = createRequestActionTypes('list/LIST_WEAPON_MELEE')
const LIST_WEAPON_MELEE_INITIAL = 'list/LIST_WEAPON_MELEE_INITIAL'

export const listWeaponMelee = createAction(LIST_WEAPON_MELEE, ({ service, category, number, grade, select, keyword }: any) => ({
  service,
  category,
  number,
  grade,
  select,
  keyword
}))

export const listWeaponMeleeInitial = createAction(LIST_WEAPON_MELEE_INITIAL)

export function* listWeaponMeleeSaga() {
  yield takeLatest(LIST_WEAPON_MELEE, createRequestSaga(LIST_WEAPON_MELEE, api.list))
}

const initialState = {
  data: null,
  error: null
}

export default handleActions(
  {
    [LIST_WEAPON_MELEE_SUCCESS]: (state: any, { payload: data }: any) => {
      return {
        ...state,
        data
      }
    },
    [LIST_WEAPON_MELEE_FAILURE]: (state: any, { payload: error }: any) => {
      return {
        ...state,
        error
      }
    },
    [LIST_WEAPON_MELEE_INITIAL]: () => {
      return {
        ...initialState
      }
    }
  },
  initialState
)
