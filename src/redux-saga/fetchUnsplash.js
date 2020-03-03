import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import { UPDATE_QUERY, UPDATE_SOURCE, apiUnCallSuccess, apiUnCallFailure } from './unsplashActions';

const access = 'wMJUZTzA_Z3xLfQySAqtXXk42gnNYpHEqL4qUpzOoz8';
const secret = 'b_nItr40PoLYDLsc8Z-t3clcgNYbMhHLo4x05FApY7Y';

export function* watcherSaga() {
  yield takeLatest(UPDATE_QUERY, workerSaga);
  yield takeLatest(UPDATE_SOURCE, workerSourceSaga);
}

function fetchUnsplash(query) {
    return axios({
        method: "get",
        url: `<https://api.unsplash.com/search/photos/?page=1&per_page=10?query=${query}&client_id=${access}>`
    })
}

function* workerSaga(action) {
  try {
    const { query } = action;
    if(query){
      const response = yield call(fetchUnsplash, query);
      const art = response.data.images;
      yield put(apiUnCallSuccess(art));
    }
  } catch (error) {
    yield put(apiUnCallFailure(error));
  }
}