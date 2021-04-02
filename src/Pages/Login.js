import React from 'react'
import Button from '../Components/Button';
import {
    Link
  } from "react-router-dom";

const Login = () => {
    return (
        <div>
            <h2>Login Page</h2>
            <form>
                <label for="fname">username or email:</label>
                <input autoFocus type="text" id="fname" name="fname"/>
                <label for="lname">password:</label>
                <input type="text" id="lname" name="lname" />
            </form> 
            <Link to="/home"><Button color="#9dbc6c" text="Log-in"/></Link>
            <Link to="/createnewacc"><Button color="#9dbc6c" text="Create New Account"/></Link>

        </div>
    )
}

export default Login
