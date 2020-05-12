import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Main from './components/Main'
import {Header} from './components/Header'
import Footer from './components/Footer'
import moment from 'moment';
import './styling/App.scss';

class App extends Component {

  state = {
    logged_in: false,
    username: '',
    today: [],
  }

  todaysDate(){
    return moment(this.state.today.date).format('MMMM DD, YYYY')
}

  handleLogin = (event, data, history) => {
    console.log("hi")
    event.preventDefault();
    fetch('https://kurator-backend.herokuapp.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then((result) => {
      localStorage.setItem('token', result.token);
      history.push('/')
      this.setState({
        logged_in: true,
        displayed_form: '',
        username: result.username
      })
    })
  }

  handleSignup = (event, data, history) => {
    const user = { ...data }
    event.preventDefault();
    fetch('https://kurator-backend.herokuapp.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user })
    })
    .then(response => response.json())
    .then(json => {
      localStorage.setItem('token', json.token);
      history.push('/')
      this.setState({
        logged_in: true,
        displayed_form: '',
        username: json.username
      })
    })
  }

  handleLogout = () => {
    localStorage.removeItem('token');
    this.setState({ logged_in: false })
  }

  render() {

    return(
      <>
        <Header 
          handleLogout={this.handleLogout}
          handleSignup={this.handleSignup}
          handleLogin={this.handleLogin}
          displayForm={this.displayForm}
          logged_in={this.state.logged_in} 
        />
          <div className='container'>
            <div className='firstColumn'>
              {/* <img className='logo' src={logo} alt="Clustr" /> */}
              <p className='date'>{this.todaysDate()} </p>
              <h3 className='divider'></h3>
              <Link className='link' to="/">home</Link>
              <Link className='link' to="/">profile</Link>
              <h3 className='divider'>feed</h3>
              <Link className='link' to="/">your news</Link>
              <Link className='link' to="/headlines">mainstream</Link>
              <Link className='link' to="/unsplash">art</Link>
              <Link className='link' to="/articles">science</Link>
              <Link className='link' to="/verge">tech</Link>
              <Link className='link' to="/travel">travel</Link>
              <Link className='link' to="/mbg">wellness</Link>
              <h3 className='divider'>other</h3>
              <Link className='link' to="/podcasts">podcasts</Link>
              <Link className='link' to="/weather">weather</Link>
              <Link className='link' to="/about">about curator</Link>
            </div>
            <div className='secondColumn'>
              <Main 
                handleLogin={this.handleLogin}
                handleLogout={this.handleLogout}
                handleSignup={this.handleSignup}
              />
            </div>
          </div>
        <Footer />
      </>
    );
  }
}

export default App;