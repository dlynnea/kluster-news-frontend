import React from 'react';
import { connect } from 'react-redux';
import { updateQuery } from '../actions/newsActions';

import NewsEntry from './NewsEntry';

const mapStateToProps = (state) => {
  return {
    query: state.query,
    news: state.news
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleUpdateQuery: (query) => {
      dispatch(updateQuery(query))
    }
  }
}

class Feed extends React.Component {
  render () {
    const { query, news, handleUpdateQuery } = this.props;

    return (
      <div>
        <input
          className='inputField'
          name="query"
          type="text"
          placeholder="What are you interested in?"
          onChange={(e) => {
            e.preventDefault();
            handleUpdateQuery(e.target.value)
          }}
        />
        {
          (query) ?
            ( news.map((article, i) => (
              <NewsEntry 
                key={i}
                url={article.url}
                title={article.title}
                author={article.source.name}
              />
              ))
            )
            : ( <p></p>)
        }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed);