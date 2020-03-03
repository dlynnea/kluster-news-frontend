export const UPDATE_QUERY = 'UPDATE_QUERY';
export const UPDATE_SOURCE = 'UPDATE_SOURCE';
export const API_CALL_SUCCESS = 'API_CALL_SUCCESS';
export const API_SOURCE_CALL_SUCCESS = 'API_SOURCE_CALL_SUCCESS';
export const API_CALL_FAILURE = 'API_CALL_FAILURE';

export const updateUnQuery = (query) => {
  return {
    type: UPDATE_QUERY,
    query
  }
}

export const apiUnCallSuccess = (art) => {
  return {
    type: API_CALL_SUCCESS, 
    art
  }
}

export const apiUnSourceCallSuccess = (art) => {
  return {
    type: API_SOURCE_CALL_SUCCESS, 
    art
  }
}

export const apiUnCallFailure = (error) => {
  return {
    type: API_CALL_FAILURE, 
    error
  }
}