import React, { useState, useEffect, Component } from 'react';
// import { connect } from 'react-redux';
// import fetchArticles from "../actions/fetchArticles";
// import {getArticles, getArticlesPending, getArticlesError } from "../reducers/index";
// import {bindActionCreators} from "redux";
import ArticleCard from './ArticleCard'
import axios from 'axios';

class Quanta extends Component {

    state = {
        articles: []
    }

    componentDidMount() {
        fetch('http://localhost:3000/articles')
          .then(response => response.json())
          .then(articles => this.setState({ 
              articles: articles 
        }))
    }

    render() {
        console.log("articles", this.state.articles)
        const { articles } = this.state;
        const { article, handleArticleUpdate } = this.props;

        return (  
            <div>
                <h1>from Quanta Magazine &hearts;</h1>
            {/* <select 
              className='inputField'
              onChange={(e) => {
                e.preventDefault();
                const selectedIndex = e.target.options.selectedIndex;
                const articleId = e.target.options[selectedIndex].getAttribute('data-ids');
                handleArticleUpdate(articleId, e.target.value)
              }
            }>
              <option>Meow</option>
              {articles.map((article, i) => (<option key={i} data-ids={article.id}>{article.title}</option>))}
            </select> */}
             {/* {
              (article.name) ?
                (<h2 className='subtitle'>Headlines from <strong>{article.author}</strong>.</h2>)
                : (<p></p>)
            } */}
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