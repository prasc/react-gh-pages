import React from 'react'
import Button from '../Components/Button'


const AddSearch = () => {
    return (
        <div>
            <h2 style={{textDecoration : "underline"}}>Add Members</h2>
            <form>
                <label for="fname">Enter name:</label>
                <input autoFocus type="text" id="fname" name="fname"/>
                <label for="lname">Enter last name:</label>
                <input type="text" id="lname" name="lname" />
                <label for="lname">Enter faculty ID:</label>
                <input type="text" id="lname" name="lname" />
                <label for="lname">Enter department name:</label>
                <input type="text" id="lname" name="lname" />
                <label for="lname">Select type of member:</label>
                <select>
                    <option>Committee Chair</option>
                    <option>Sub-Committee</option>
                </select>
            </form> 

            <h2 style={{textDecoration : "underline"}}>Add position and date</h2>
            <form>
                <label for="fname">Enter position name:</label>
                <input autoFocus type="text" id="fname" name="fname"/>
                <label for="lname">Enter manager name:</label>
                <input type="text" id="lname" name="lname" />
                <label for="lname">Enter deadline:</label>
                <input type="date" id="lname" name="lname" />
            </form> 

            <Button color="red" textColor="white" text="Submit"/>

        </div>
    )
}

export default AddSearch
