import * as types from './actions';

const initialState = {
  query: null,
  art: [],
}

export default function imageReducer(state = initialState, action) {
  switch(action.type){
    case types.UPDATE_QUERY:
      return {...state, query: action.query};
    case types.API_CALL_SUCCESS:
      return {...state, art: action.art};
    case types.API_CALL_FAILURE:
      return {...state, error: action.error};
    default:
      return state;
  }
}