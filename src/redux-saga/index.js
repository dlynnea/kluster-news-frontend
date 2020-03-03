import * as types from './actions';
import { combineReducers } from 'redux'

const initialState = {
  query: '',
  error: null,
  news: [],
  source: {
    id: null,
    name: null,
    news: []
  }
}

const updateSourceState = (state, action) => {
  switch(action.type){
    case types.UPDATE_SOURCE:
      return {...state, id: action.payload.id, name: action.payload.name};
    case types.API_SOURCE_CALL_SUCCESS:
      return {...state, news: action.news}
    default:
      return ( state.source )
  }
}

// const query = (state = '', action) => {
//   switch(action.type){
//     case types.UPDATE_QUERY:
//       return action.query
//     default:
//       return state;
//   }
// }

// const source = (state = {}, action) => {
//   switch(action.type) {
//     case types.UPDATE_SOURCE:
//       return {...state, source: updateSourceState(state.source, action)};
//     case types.API_SOURCE_CALL_SUCCESS:
//       return {...state, source: updateSourceState(state.source, action)};
//     default:
//       return state;
//   }
// }

// const news = (state = [], action) => {
//   switch(action.type) {
//     case types.API_CALL_SUCCESS:
//       return action.news;
//     default:
//       return state;
//   }
// }

// const error = (state = null, action) => {
//   switch(action.type) {
//     case types.API_CALL_FAILURE:
//       return action.error;
//     default:
//       return state;
//   }
// }

// const rootReducer = combineReducers({
//     query,
//     source,
//     news,
//     error,
// })

// export default rootReducer;




// const imageReducer = (state = initialState, action) => {
//   switch(action.type){
//     case types.UPDATE_QUERY:
//       return {...state, queryImg: action.queryImg};
//     case types.API_CALL_SUCCESS:
//       return {...state, art: action.art};
//     case types.API_CALL_FAILURE:
//       return {...state, error: action.error};
//     default:
//       return state;
//   }
// }





//////

// const updateSourceState = (state, action) => {
//   switch(action.type){
//     case types.UPDATE_SOURCE:
//       return {...state, id: action.payload.id, name: action.payload.name};
//     case types.API_SOURCE_CALL_SUCCESS:
//       return {...state, news: action.news}
//     default:
//       return ( state.source )
//   }
// }

export default function rootReducer (state = initialState, action) {
  switch(action.type){
    case types.UPDATE_QUERY:
      return {...state, query: action.query};

    case types.UPDATE_SOURCE:
      return {...state, source: updateSourceState(state.source, action)};

    case types.API_CALL_SUCCESS:
      return {...state, news: action.news};

    case types.API_SOURCE_CALL_SUCCESS:
      return {...state, source: updateSourceState(state.source, action)};

    case types.API_CALL_FAILURE:
      return {...state, error: action.error};
    default:
      return state;
  }
}