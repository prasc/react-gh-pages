import React from 'react'
import Button from '../Components/Button'


const LeaveComment = () => {
    return (
        <div>
             <h2 style={{textDecoration : "underline"}}>Leave Comment</h2>
            <form>
                <label for="fname">Enter application number:</label>
                <input autoFocus type="text" id="fname" name="fname"/>
                <br></br>
                <label for="fname">Leave Comment:</label>
                <textarea id="w3review" name="w3review" rows="10" cols="50" />
            </form> 

            <Button color="red" textColor="white" text="Submit Comment"/>

        </div>
    )
}

export default LeaveComment
