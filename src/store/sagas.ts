import axios from 'axios'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import {
  GET_CATS_REQUEST,
  getCatsSuccess,
  getCatsFailure,
  getCatsRequest,
  GET_SINGLE_CAT_REQUEST,
  getSingleCatSuccess,
  getSingleCatFail,
  getSingleCatRequest,
} from './actions/actions'
import { getCatsApi, getSingleCatsApi } from '../http/api'
import { ICatSuccess, ISingleCatSucces } from './actions/action.Interfaces'

function* getCats(action: ReturnType<typeof getCatsRequest>) {
  try {
    const data: ICatSuccess[] = yield call(getCatsApi, action.query)
    yield put(getCatsSuccess(data))
  } catch {
    yield put(getCatsFailure())
  }
}

function* getSingleCats(action: ReturnType<typeof getSingleCatRequest>) {
  try {
    const data: ISingleCatSucces[] = yield call(getSingleCatsApi, action.query)
    yield put(getSingleCatSuccess(data))
  } catch {
    yield put(getSingleCatFail())
  }
}

function* todoSaga() {
  yield all([takeLatest(GET_CATS_REQUEST, getCats)])
  yield all([takeLatest(GET_SINGLE_CAT_REQUEST, getSingleCats)])
}

export default todoSaga
