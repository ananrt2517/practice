import {
  GET_CATS_REQUEST,
  GET_CATS_SUCCESS,
  GET_CATS_FAILURE,
  getCatsSuccess,
} from '../actions/actions'
import { ICatData } from '../actions/action.Interfaces'

export interface IState {
  search: ICatData
}

const initialState = {
  data: [],
}

export default (
  state: ICatData = initialState,
  action: ReturnType<typeof getCatsSuccess>
) => {
  switch (action.type) {
    case GET_CATS_REQUEST:
      return {
        ...state,
      }
    case GET_CATS_SUCCESS:
      return {
        ...state,
        data: action.payload,
      }
    case GET_CATS_FAILURE:
      return {
        ...state,
      }
    default:
      return {
        ...state,
      }
  }
}
