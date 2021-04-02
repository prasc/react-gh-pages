import React from 'react'
import Button from '../Components/Button'

const ChangeAppStatus = () => {
    return (
        <div>
            <h2 style={{textDecoration : "underline"}}>Change Application Status</h2>
            <form>
                <label for="fname">Enter applicant name:</label>
                <input autoFocus type="text" id="fname" name="fname"/>
                <label for="lname">Enter applicant last name:</label>
                <input type="text" id="lname" name="lname" />
                <label for="lname">Enter applicant number:</label>
                <input type="text" id="lname" name="lname" />
                <label for="lname">Enter position name:</label>
                <input type="text" id="lname" name="lname" />
                <label for="lname">Application Status:</label>
                <select>
                    <option>Accepted</option>
                    <option>Rejected</option>
                    <option>On Waitlist</option>
                    <option>Under Review</option>
                </select>
            </form> 

            <Button color="coral" textColor="white" text="Submit"/>

        </div>
    )
}

export default ChangeAppStatus
