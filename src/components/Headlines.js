import React from 'react';
import NewsEntry from './NewsEntry';
// import { API_KEY } from '../actions/key'; 
import { updateSource } from '../actions/newsActions';
import { connect } from 'react-redux';

const key = '34c503b70d6e4e9983f9dc86cc7781f1';

class Headlines extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sources: []
    }
  }
  
  componentDidMount() {
    fetch('https://newsapi.org/v2/sources?apiKey='+key)
      .then(response => response.json())
      .then(data => this.setState({ sources: data.sources }))
  }

  render() {
    const { sources } = this.state;
    const { source, handleSourceUpdate } = this.props;

    return (  
      <div>
        <select 
          className='inputField'
          onChange={(e) => {
            e.preventDefault();
            const selectedIndex = e.target.options.selectedIndex;
            const sourceId = e.target.options[selectedIndex].getAttribute('data-ids');
            handleSourceUpdate(sourceId,e.target.value)
          }
        }>
          <option>Select a news source</option>
          {sources.map((source, i) => (<option key={i} data-ids={source.id}>{source.name}</option>))}
        </select>
        {
          (source.name) ?
            (<h2 className='subtitle'>Headlines from <strong>{source.name}</strong>.</h2>)
            : (<p></p>)
        }
        {
          source.news.map((article, i) => (
            <NewsEntry 
              key={i}
              url={article.url}
              title={article.title}
              author={article.source.name}
            />
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
      source: state.source
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      handleSourceUpdate: (id, name) => {
        dispatch(updateSource(id, name))
      }
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Headlines);