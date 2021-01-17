import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'

import weaponList, { weaponListSaga } from './weapon/list'
import weaponRead, { weaponReadSaga } from './weapon/read'

import loading from './loading'

const rootReducer = combineReducers({
  loading,
  weaponList,
  weaponRead
})

export function* rootSaga() {
  yield all([weaponListSaga(), weaponReadSaga()])
}

export default rootReducer
