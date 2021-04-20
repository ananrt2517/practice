import { ICatSuccess } from './action.Interfaces';

export const GET_CATS_REQUEST = "GET_CATS_REQUEST";
export const GET_CATS_SUCCESS = "GET_CATS_SUCCESS";
export const GET_CATS_FAILURE = "GET_CATS_FAILURE";

export const getCatsRequest = (query : string) => ({
  type: GET_CATS_REQUEST,
  query
});

export const getCatsSuccess = (payload : ICatSuccess[]) => ({
  type: GET_CATS_SUCCESS,
  payload
});

export const getCatsFailure = () => ({
  type: GET_CATS_FAILURE,
});

