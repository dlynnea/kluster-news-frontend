import React, {Component} from 'react'
import ImageList from './ImageList'
import SearchForm from './SearchForm'
// import axios from 'axios'

const access = 'wMJUZTzA_Z3xLfQySAqtXXk42gnNYpHEqL4qUpzOoz8';

class UnsplashOld extends Component {

    state = {
        imgs: {
            results: []
        },
        loadingState: true
    }

    componentDidMount() {
        this.fetchUnsplash();
    }

    fetchUnsplash = () => {
        fetch(`https://api.unsplash.com/search/photos/?page=1&per_page=10&query=botanical&client_id=${access}`)
       .then(response => response.json())
       .then(imgs => this.setState({ imgs }))
    };

    render() { 

        return (
            <div>
                <div className="main-header">
                    <div className="inner">
                        {/* <ImageList imgs={this.state.imgs} /> */}
                        {/* <h1 className="main-title">Search..</h1> */}
                        <SearchForm onSearch={this.fetchUnsplash} />
                    </div>
                </div>
                <div className="main-content">
                    {/* {this.state.loadingState
                        ? <p>Loading..</p> */}
                        <ImageList imgs={this.state.imgs} />
                </div>
            </div>
        );
    }
}
 
export default UnsplashOld;