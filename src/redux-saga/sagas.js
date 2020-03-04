import { takeLatest, call, put, all, fork } from "redux-saga/effects";
import axios from "axios";
import { UPDATE_QUERY, UPDATE_SOURCE, apiCallSuccess, apiCallFailure, apiSourceCallSuccess, apiUnCallSuccess, apiUnCallFailure } from './actions';

const API_KEY = '34c503b70d6e4e9983f9dc86cc7781f1';
const access = 'wMJUZTzA_Z3xLfQySAqtXXk42gnNYpHEqL4qUpzOoz8';

function* watcherSaga() {
  yield takeLatest(UPDATE_QUERY, workerSaga);
}

function* watcherSaga2() {
  yield takeLatest(UPDATE_SOURCE, workerSourceSaga);
}

function* watcherSaga3() {
  yield takeLatest(UPDATE_QUERY, workerUnSaga);
}

function fetchNews(query) {
  return axios({
    method: "get",
    url: `https://newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&apiKey=${API_KEY}`
  });
}

function fetchSourceNews(source) {
  return axios({
    method: "get",
    url: `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${API_KEY}`
  });
}

function fetchUnsplash(query) {
  return axios({
    method: "get",
    url: `<https://api.unsplash.com/search/photos/?page=1&per_page=10?query=${query}&client_id=${access}>`
  })
}

function* workerUnSaga(action) {
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

function* workerSaga(action) {
  try {
    const { query } = action;
    if(query){
      const response = yield call(fetchNews, query);
      const news = response.data.articles;
      yield put(apiCallSuccess(news));
    }
  } catch (error) {
    yield put(apiCallFailure(error));
  }
}

function* workerSourceSaga(action) {
  try {
    const id = action.payload.id;
    if(id){
      const response = yield call(fetchSourceNews, id);
      const news = response.data.articles;
      yield put(apiSourceCallSuccess(news));
    }
  } catch (error) {
    yield put(apiCallFailure(error));
  }
}

export default function* rootSaga() {
  yield all ([
    fork(watcherSaga),
    fork(watcherSaga2),
    fork(watcherSaga3)
  ]);
}