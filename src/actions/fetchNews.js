import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import { UPDATE_QUERY, UPDATE_SOURCE, apiCallSuccess, apiCallFailure, apiSourceCallSuccess } from './newsActions';

const API_KEY = '34c503b70d6e4e9983f9dc86cc7781f1';

export function* watcherSaga() {
  yield takeLatest(UPDATE_QUERY, workerSaga);
  yield takeLatest(UPDATE_SOURCE, workerSourceSaga);
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