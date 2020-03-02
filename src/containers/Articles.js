import React, { useState, useEffect } from 'react';
// import { connect } from 'react-redux';
// import fetchArticles from "../actions/fetchArticles";
// import {getArticles, getArticlesPending, getArticlesError } from "../reducers/index";
// import {bindActionCreators} from "redux";
import ArticleCard from './ArticleCard'
import Axios from 'axios';

const Articles = () => {

    const [articles, setArticles] = useState([])

    useEffect(() => {
        const fetchArticles = async() => {
            const res = await Axios.get('http://localhost:3000/articles')
            setArticles(res.data)
        }
        fetchArticles();
    }, []);

    return (  
        <div>
        {/* {console.log(articles)}
        {this.state.articles.map((article) => (
            <div className='col-lg-4 p-4' key={article.id}>
                <ArticleCard articles={state.articles}/>
            </div>
        ))} */}
        </div>
    )
}

// const mapStateToProps = (state) => {
//     return{
//     //   error: getArticlesError(state),
//     //   pending: getArticlesPending(state),
//       articles: getArticles(state)

//     }
//   }

// const mapDispatchToProps = dispatch => bindActionCreators({
//     fetchArticles
// },dispatch);

// const articleView = connect(mapStateToProps, mapDispatchToProps)(Articles);

// export default connect(mapStateToProps, mapDispatchToProps)(articleView);

export default Articles;