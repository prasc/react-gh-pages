import React from 'react'

const Button = ({text, color, textColor}) => {
    return (
        <div>
                <button
                className="button-style"
                style={{backgroundColor: color, color: textColor}}
                >{text}</button>   
       
        </div>
    )
}

export default Button
