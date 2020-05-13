import React, {Component} from 'react';
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types';

class Register extends Component {

    state = {
        name: '',
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
            <h1 className="primary-txt">Create an Account</h1>
            <form className="form auth-form" onSubmit={event => this.props.handleLogin(event, this.state, this.props.history)}>
                <div className="form-input form-element">
                    <input 
                        className="form-element-field" 
                        type="text" 
                        placeholder="Name"
                        value={this.state.name}
                        onChange={this.handleChange}
                        name="name"
                    />
                    <div className="form-element-bar"></div>
                <label className="form-element-label">Name</label>
                </div>
                <div className="form-input form-element">
                    <input 
                        className="form-element-field" 
                        type="text" 
                        placeholder="Username"
                        value={this.state.username}
                        onChange={this.handleChange}
                        name="username"
                    />
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
                    />
                    <div className="form-element-bar"></div>
                <label className="form-element-label">Password</label>
                </div>
                <input type="submit" className="btn btn-primary" value="Register" />
            </form>
            <p className="my-1 primary-txt">Already have an account? <Link to='/login'>Login</Link></p>
        </section>



        //     <form onSubmit={event => this.props.handleSignup(event, this.state, this.props.history)}>
        //     <h4>SIGN UP</h4>
        //     <input
        //     type="text"
        //     name="name"
        //     placeholder="name"
        //     value={this.state.name}
        //     onChange={this.handleChange}
        //     />
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

export default Register;

// Register.propTypes = {
//     handleSignup: PropTypes.func.isRequired
// }