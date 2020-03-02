import React from 'react'
import Navbar  from './Navbar'

export const Header = (props) => {
    return(
        <header>
            <Navbar 
                handleLogout={props.handleLogout}
                handleSignup={props.handleSignup}
                handleLogin={props.handleLogin}
                displayForm={props.displayForm}
                logged_in={props.logged_in}
            />
        </header>
    )
}