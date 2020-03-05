import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Main from './components/Main'
import {Header} from './components/Header'
import Footer from './components/Footer'
import Login from './components/Login'
import Register from './components/Register'
import moment from 'moment';
import './App.scss';

class App extends Component {

  state = {
    logged_in: false,
    username: '',
    displayed_form: '',
    today: [],
  }

  displayForm = form => {
    this.setState({ displayed_form: form })
  }

  todaysDate(){
    return moment(this.state.today.date).format('MMMM DD, YYYY')
}

  handleLogin = (event, data) => {
    event.preventDefault();
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then((result) => {
      localStorage.setItem('token', result.token);
      this.setState({
        logged_in: true,
        displayed_form: '',
        username: result.username
      })
    })
  }

  handleSignup = (event, data) => {
    const user = { ...data }
    event.preventDefault();
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user })
    })
    .then(response => response.json())
    .then(json => {
      localStorage.setItem('token', json.token);
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
    // let form;
    // switch (this.state.displayed_form) {
    // case 'login':
    //     form = <Login handleLogin={this.handleLogin} />
    //     break;
    // case 'signup':
    //     form = <Register handleSignup={this.handleSignup} />
    //     break;
    // default:
    //     form = null;
    // }

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
              {/* {form} */}
              {/* <img className='logo' src={logo} alt="Clustr" /> */}
              {/* <h1 className='title'>menú</h1> */}
              <p className='date'>Todays Date: {this.todaysDate()} </p>
              {/* <Link className='link' to="/login">login</Link>
              <Link className='link' to="/register">sign up</Link> */}
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
              <Main />
            </div>
          </div>
        <Footer />
      </>
    );
  }
}

export default App;