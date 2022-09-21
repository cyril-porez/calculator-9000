import React from 'react'

function MagnificientEqualButton(props) {
    
    const handleClick = () => { 
        props.handleEqual()
    }
    return (
        <input type='button' value={props.name} onClick={() => { handleClick() }} />
    )
}

export default MagnificientEqualButton