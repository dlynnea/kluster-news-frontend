export const GET_ARTICLES_PENDING = 'GET_ARTICLES_PENDING';
export const GET_ARTICLES_SUCCESS = 'GET_ARTICLES_SUCCESS';
export const GET_ARTICLES_ERROR = 'GET_ARTICLES_ERROR';

export const getArticlesPending = () => {
    return {
        type: GET_ARTICLES_PENDING
    }
}

export const getArticlesSuccess = (articles) => {
    return {
        type: GET_ARTICLES_SUCCESS,
        articles
    }
}

export const getArticlesError = (error) => {
    return {
        type: GET_ARTICLES_ERROR,
        error
    }
}