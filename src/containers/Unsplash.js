import React, {Component} from 'react'
import Pagination from './Pagination'
import PicList from './PicList'
import axios from 'axios'

const access = 'wMJUZTzA_Z3xLfQySAqtXXk42gnNYpHEqL4qUpzOoz8';

const LOAD_STATE = {
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
  LOADING: 'LOADING'
};

class Unsplash extends Component {

    state = {
      photos: {
          results: []
      },
      totalPhotos: 0,
      perPage: 9,
      currentPage: 1,
      loadState: LOAD_STATE.LOADING
    }
  
  
  componentDidMount() {
    this.fetchPhotos(this.state.currentPage);
  }
  
  fetchPhotos(page) {
    var self = this;
    const { perPage } = this.state;
    const { appId } = this.props;
    const options = {
      params: {
        client_id: appId,
        page: page,
        per_page: perPage
      }
    };
    
    this.setState({ loadState: LOAD_STATE.LOADING });
    axios.get(`https://api.unsplash.com/search/photos/?page=1&per_page=10&query=botanical&client_id=${access}`, options)
      .then((response) => {
        self.setState({
          photos: response.data,
          totalPhotos: parseInt(response.headers['x-total']),
          currentPage: page,
          loadState: LOAD_STATE.SUCCESS
        });
      })
      .catch(() => {
        this.setState({ loadState: LOAD_STATE.ERROR });
      });
  }
  
  render() {
    return (
      <div>
        <Pagination
          current={this.state.currentPage}
          total={this.state.totalPhotos} 
          perPage={this.state.perPage} 
          onPageChanged={this.fetchPhotos.bind(this)}
        />
        {this.state.loadState === LOAD_STATE.LOADING
            ? <div className="loader"></div>
            : <PicList photos={this.state.photos} />  
          }
      </div>
    )
  }
}

export default Unsplash;
