import { createAction, handleActions } from 'redux-actions'

const LOADING_START = 'loading/LOADING_START'
const LOADING_FINISH = 'loading/LOADING_FINISH'

export const loadingStart = createAction(LOADING_START, (request: any) => request)
export const loadingFinish = createAction(LOADING_FINISH, (request: any) => request)

const initialState = {}

const loading = handleActions(
  {
    [LOADING_START]: (state: any, action: any) => {
      return {
        ...state,
        [action.payload]: true
      }
    },
    [LOADING_FINISH]: (state: any, action: any) => {
      return {
        ...state,
        [action.payload]: false
      }
    }
  },
  initialState
)

export default loading
