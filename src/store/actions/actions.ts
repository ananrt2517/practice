import { ICatSuccess, ISingleCatSucces } from './action.Interfaces'

export const GET_CATS_REQUEST = 'GET_CATS_REQUEST'
export const GET_CATS_SUCCESS = 'GET_CATS_SUCCESS'
export const GET_CATS_FAILURE = 'GET_CATS_FAILURE'

export const GET_SINGLE_CAT_REQUEST = 'GET_SINGLE_CAT_REQUEST'
export const GET_SINGLE_CAT_SUCCESS = 'GET_SINGLE_CAT_SUCCESS'
export const GET_SINGLE_CAT_FAIL = 'GET_SINGLE_CAT_FAIL'

export const getCatsRequest = (query: string) => ({
  type: GET_CATS_REQUEST,
  query,
})

export const getCatsSuccess = (payload: ICatSuccess[]) => ({
  type: GET_CATS_SUCCESS,
  payload,
})

export const getCatsFailure = () => ({
  type: GET_CATS_FAILURE,
})

export const getSingleCatRequest = (query: string) => ({
  type: GET_SINGLE_CAT_REQUEST,
  query,
})
export const getSingleCatSuccess = (payload: ISingleCatSucces[]) => ({
  type: GET_SINGLE_CAT_SUCCESS,
  payload,
})
export const getSingleCatFail = () => ({ type: GET_SINGLE_CAT_FAIL })
