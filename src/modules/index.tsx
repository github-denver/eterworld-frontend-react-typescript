import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'

import boardList, { boardListSaga } from './board/list'
import weaponRead, { weaponReadSaga } from './board/read'

import loading from './loading'

const rootReducer = combineReducers({
  loading,
  boardList,
  weaponRead
})

export function* rootSaga() {
  yield all([boardListSaga(), weaponReadSaga()])
}

export default rootReducer
