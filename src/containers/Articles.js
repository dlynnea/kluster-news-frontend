import React, {Component} from 'react';
import { connect } from 'react-redux';
import fetchArticles from "../actions/fetchArticles";
import {getArticles, getArticlesPending, getArticlesError } from "../reducers/index";
import {bindActionCreators} from "redux";
import ArticleCard from './ArticleCard'

class Articles extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }
  
  componentDidMount() {
    this.fetchArticles()
  }

  render() {
    return (  
      <div>
        {this.props.articles.items.map((article) => (
            <div className='col-lg-4 p-4' key={article.id}>
                <ArticleCard article={article}/>
            </div>
        ))}
        </div>
        )
    }}


const mapStateToProps = (state) => {
    return{
    //   error: getArticlesError(state),
    //   pending: getArticlesPending(state),
      articles: getArticles(state)

    }
  }

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchArticles
},dispatch);

const articleView = connect(mapStateToProps, mapDispatchToProps)(Articles);

export default connect(mapStateToProps, mapDispatchToProps)(articleView);