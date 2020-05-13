import React, { Component } from 'react';
import MbgCard from './MbgCard'

class Mbg extends Component {

    state = {
        mbgArticles: []
    }

    componentDidMount() {
        fetch('https://kurator-backend.herokuapp.com/mbg_verticles')
          .then(response => response.json())
          .then(mbgArticles => this.setState({ 
              mbgArticles: mbgArticles 
        }))
    }

    render() {
        const { mbgArticles } = this.state;
        const { handleArticleUpdate } = this.props;

        return (
            <div>
                {/* <h1>from the Verge...</h1> */}
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
                mbgArticles.map((article, i) => 
                    (<option key={i} data-ids={article.id}>{article.title}</option>))}
            </select>
            <h3 className="mbg-headline">Headlines from Mind Body Green Wellness</h3>
                {/* {
                mbgArticles.map(article => (
                    (article.title) ? (<h2 className='subtitle'><strong>{article.author}</strong></h2>) : (<p></p>)
                ))} */}
            {
              mbgArticles.map((article, i) => (
                <MbgCard 
                  key={i}
                  title={article.title}
                  author={article.author}
                  url={article.url}
                />
              ))
            }
          </div>
        )
    }
}

export default Mbg;