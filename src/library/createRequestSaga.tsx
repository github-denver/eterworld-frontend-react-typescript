import { call, put } from 'redux-saga/effects'
import { loadingStart, loadingFinish } from '../modules/loading'

export const createRequestActionTypes = (type: any) => {
  // console.log('library → [createRequestSaga.js] → createRequestActionTypes → type: ', type)

  const SUCCESS = `${type}_SUCCESS`
  const FAILURE = `${type}_FAILURE`

  return [type, SUCCESS, FAILURE]
}

export default function createRequestSaga(type: any, request: any) {
  // console.log('library → [createRequestSaga.js] → createRequestSaga → type: ', type)

  const SUCCESS = `${type}_SUCCESS`
  const FAILURE = `${type}_FAILURE`

  return function* (action: any) {
    // console.log('library → [createRequestSaga.js] → createRequestSaga → function* → loadingStart')

    yield put(loadingStart(type))

    try {
      const response = yield call(request, action.payload)

      yield put({
        type: SUCCESS,
        payload: response.data,
        meta: response
      })
    } catch (error) {
      yield put({
        type: FAILURE,
        payload: error,
        error: true
      })
    }

    // console.log('library → [createRequestSaga.js] → createRequestSaga → function* → loadingFinish')

    yield put(loadingFinish(type))
  }
}
