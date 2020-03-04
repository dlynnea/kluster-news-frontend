import { getArticlesSuccess, getArticlesError, getArticlesPending } from "./articleActions";

export default function fetchArticles() {
    return dispatch => {
        dispatch(getArticlesSuccess(null))
        dispatch(getArticlesPending())
        fetch('http://localhost:3000/articles')
            .then(async (res) => {
                return {
                    items: await res.json()
                }
            })
            .then(res => {
                if(res.error) {
                    throw(res.error);
                }
                dispatch(getArticlesSuccess(res))
                return res
            })
            .catch((error) => {
                dispatch(getArticlesError(error))
            })
    }
}