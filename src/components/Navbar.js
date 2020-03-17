import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, withRouter } from 'react-router';

const Nav = (props) => {

    const redirectToLogin = () => {
        props.history.push("/login")
    }
    const redirectToSignup = () => {
        props.history.push("/register")
    }

    const logged_out_nav = (
        <nav>
            <ul>
                <li className="login-btn" onClick={redirectToLogin}>login</li>
                <li className="signup-btn" onClick={redirectToSignup}>signup</li>
                <li className="logo">curator <i className="fa fa-pushed"></i></li>
            </ul>
        </nav>
    )

    const logged_in_nav = (
        <nav>
            <ul>
                <li className="logout-btn" onClick={props.handleLogout}>logout</li>
                <li className="logo">kurator <i className="fa fa-pushed"></i></li>
            </ul>
        </nav>
    )
    return <>{props.logged_in ? logged_in_nav : logged_out_nav}</>
}

export default withRouter(Nav);

Nav.propTypes = {
    logged_in: PropTypes.bool.isRequired,
    displayForm: PropTypes.func.isRequired,
    handleLogout: PropTypes.func.isRequired
}