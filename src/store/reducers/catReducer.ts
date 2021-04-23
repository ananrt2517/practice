import {
  GET_SINGLE_CAT_REQUEST,
  GET_SINGLE_CAT_SUCCESS,
  GET_SINGLE_CAT_FAIL,
  getSingleCatSuccess,
} from '../actions/actions'
import { ISingleCatData } from '../actions/action.Interfaces'

export interface IState {
  cats: ISingleCatData
}

const initialState = {
  data: [],
}

export default (
  state: ISingleCatData = initialState,
  action: ReturnType<typeof getSingleCatSuccess>
) => {
  switch (action.type) {
    case GET_SINGLE_CAT_REQUEST:
      return {
        ...state,
      }
    case GET_SINGLE_CAT_SUCCESS:
      return {
        ...state,
        data: action.payload,
      }
    case GET_SINGLE_CAT_FAIL:
      return {
        ...state,
      }
    default:
      return {
        ...state,
      }
  }
}
