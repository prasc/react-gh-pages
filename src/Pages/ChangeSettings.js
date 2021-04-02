import React from 'react'
import Button from '../Components/Button'

const ChangeSettings = () => {
    return (
        <div>
            <h2 style={{textDecoration : "underline"}}>Change Name</h2>
            <form>
                <label for="fname">Enter new name:</label>
                <input autoFocus type="text" id="fname" name="fname"/>
                <label for="lname">Confirm new name:</label>
                <input type="text" id="lname" name="lname" />
            </form> 

            <h2 style={{textDecoration : "underline"}}>Change Email</h2>
            <form>
                <label for="fname">Enter old email:</label>
                <input autoFocus type="text" id="fname" name="fname"/>
                <label for="lname">Enter new email:</label>
                <input type="text" id="lname" name="lname" />
                <label for="lname">Confirm new email:</label>
                <input type="text" id="lname" name="lname" />
            </form> 

            <h2 style={{textDecoration : "underline"}}>Change Password</h2>
            <form>
                <label for="fname">Enter old password:</label>
                <input autoFocus type="password" id="fname" name="fname"/>
                <label for="lname">Enter new password:</label>
                <input type="password" id="lname" name="lname" />
                <label for="lname">Confirm new password:</label>
                <input type="password" id="lname" name="lname" />
            </form> 

            <h2 style={{textDecoration : "underline"}}>Change Title</h2>
            <form>
                <label for="fname">Enter old title:</label>
                <input autoFocus type="text" id="fname" name="fname"/>
                <label for="lname">Enter new title:</label>
                <input type="text" id="lname" name="lname" />
                <label for="lname">Confirm new title:</label>
                <input type="text" id="lname" name="lname" />
            </form> 

            <Button color="red" textColor="white" text="Submit Changes"/>

        </div>
    )
}

export default ChangeSettings
