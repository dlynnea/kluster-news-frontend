import React, { Component } from 'react';
import VergeCard from './VergeCard'

class Verge extends Component {

    state = {
        vergeArticles: []
    }

    componentDidMount() {
        fetch('https://kurator-backend.herokuapp.com/verge_articles')
          .then(response => response.json())
          .then(vergeArticles => this.setState({ 
              vergeArticles: vergeArticles 
        }))
    }

    render() {
        const { vergeArticles } = this.state;
        const { article, handleArticleUpdate } = this.props;

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
                vergeArticles.map((article, i) => 
                    (<option key={i} data-ids={article.id}>{article.title}</option>))}
            </select>
            <h3 className="verge-headline">Headlines from the Verge</h3>
                {/* {
                vergeArticles.map(article => (
                    (article.title) ? (<h2 className='subtitle'><strong>{article.author}</strong></h2>) : (<p></p>)
                ))} */}
            {
              vergeArticles.map((article, i) => (
                <VergeCard 
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

export default Verge;