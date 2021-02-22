import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'

import listWeapon, { listWeaponSaga } from './list/weapon/common/list'
import listWeaponMelee, { listWeaponMeleeSaga } from './list/weapon/melee/list'
import listWeaponRanged, { listWeaponRangedSaga } from './list/weapon/ranged/list'

import readWeapon, { readWeaponSaga } from './read/weapon/read'

import loading from './loading'

const rootReducer = combineReducers({
  loading,
  listWeapon,
  listWeaponMelee,
  listWeaponRanged,
  readWeapon
})

export function* rootSaga() {
  yield all([listWeaponSaga(), listWeaponMeleeSaga(), listWeaponRangedSaga(), readWeaponSaga()])
}

export default rootReducer
