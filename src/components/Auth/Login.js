import React, {Component} from 'react';
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types';

class Login extends Component {

    state = {
        username: '',
        password: '',
    }

    handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState(prevstate => {
            const newState = { ...prevstate };
            newState[name] = value;
            return newState;
        })
    }

    render() {
        return(
        <section className="auth-container">
        <h1 className="lg primary-txt">Login</h1>
        <form className="form auth-form" onSubmit={event => this.props.handleLogin(event, this.state, this.props.history)}>
            <div className="form-input form-element">
                <input 
                className="form-element-field" 
                type="username" 
                placeholder="Username"
                value={this.state.username}
                onChange={this.handleChange}
                name="username"
                required />
                <div className="form-element-bar"></div>
            <label className="form-element-label">Username</label>
            </div>
            <div className="form-input form-element">
                <input 
                className="form-element-field" 
                type="password" 
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                required
                minLength="6" />
                <div className="form-element-bar"></div>
            <label className="form-element-label">Password</label>
            </div>
            <input type="submit" className="btn btn-primary" value="Login" />
        <p className="my-1 primary-txt">Don't have an account? <Link to='/register'>Sign Up</Link></p>
        </form>
        </section>



            // <form onSubmit={event => this.props.handleLogin(event, this.state, this.props.history)}>
            //     <h4>LOG IN</h4>
            //     <input
            //     type="text"
            //     name="username"
            //     placeholder="username"
            //     value={this.state.username}
            //     onChange={this.handleChange}
            //     />
            //     <input
            //     type="password"
            //     name="password"
            //     placeholder="password"
            //     value={this.state.password}
            //     onChange={this.handleChange}
            //     />
            //     <input className="input-btn" type="submit" />
            // </form>
        )
    }
}

export default Login;

// Login.propTypes = {
//     handleLogin: PropTypes.func.isRequired
// }