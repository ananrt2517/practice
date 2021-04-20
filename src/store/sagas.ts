import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { GET_CATS_REQUEST, getCatsSuccess, getCatsFailure, getCatsRequest } from "./actions/actions";
import { getCatsApi } from '../http/api';
import { ICatSuccess } from "./actions/action.Interfaces";


function* getCats(action: ReturnType<typeof getCatsRequest> ) {
  try {
    console.log(action);
    const data:ICatSuccess[] = yield call(getCatsApi, action.query);
    yield put(getCatsSuccess(data));
  } catch{
    yield put(getCatsFailure());
  }
}

function* todoSaga() {
  yield all([takeLatest(GET_CATS_REQUEST, getCats)]);
}

export default todoSaga;