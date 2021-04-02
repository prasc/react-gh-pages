import React from 'react'
import Button from '../Components/Button'

const CreateNewAccount = () => {
    return (
        <div>
          <h2 style={{textDecoration : "underline"}}>Create New Account</h2>

            <form>
              <label for="fname">Enter title:</label>
                <input autoFocus type="text" id="fname" name="fname"/>
                <label for="fname">Enter first name:</label>
                <input autoFocus type="text" id="fname" name="fname"/>
                <label for="fname">Enter last name:</label>
                <input autoFocus type="text" id="fname" name="fname"/>
                <label for="fname">Enter Date of Birth:</label>
                <input type="date" id="fname" name="fname"/>
                <label for="fname">Enter username:</label>
                <input autoFocus type="text" id="fname" name="fname"/>
                <label for="fname">Enter email:</label>
                <input autoFocus type="email" id="fname" name="fname"/>
                <label for="fname">Enter password:</label>
                <input autoFocus type="password" id="fname" name="fname"/>
                <label for="lname">Confirm password:</label>
                <input type="password" id="lname" name="lname" />



            </form> 

            <Button color="teal" textColor="white" text="Create Account"/>

        </div>
    )
}

export default CreateNewAccount
