import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import fetchArticles from "../actions/fetchArticles";
// import {getArticles, getArticlesPending, getArticlesError } from "../reducers/index";
// import {bindActionCreators} from "redux";
import ArticleCard from './ArticleCard'

class Quanta extends Component {

    state = {
        articles: []
    }

    componentDidMount() {
        fetch('https://kurator-backend.herokuapp.com/articles')
          .then(response => response.json())
          .then(articles => this.setState({ 
              articles: articles 
        }))
    }

    render() {
        const { articles } = this.state;
        const { article, handleArticleUpdate } = this.props;

        return (  
            <div>
                {/* <h1>from Quanta Magazine</h1> */}
            <select 
              className='inputField'
              onChange={(e) => {
                e.preventDefault();
                const selectedIndex = e.target.options.selectedIndex;
                const articleId = e.target.options[selectedIndex].getAttribute('data-ids');
                handleArticleUpdate(articleId, e.target.value)
              }
            }>
            <option>Select...</option>
                {
                articles.map((article, i) => 
                    (<option key={i} data-ids={article.id}>{article.title}</option>))}
            </select>
            <h3 className="quanta-headline">Headlines from Quanta Magazine</h3>
                {/* {
                articles.map(article => (
                    (article.title) ? (<h2 className='subtitle'><strong>{article.author}</strong></h2>) : (<p></p>)
                ))} */}
            {
              articles.map((article, i) => (
                <ArticleCard 
                  key={i}
                  url={article.url}
                  title={article.title}
                  author={article.author}
                />
              ))
            }
          </div>
        )
    }
}

export default Quanta;