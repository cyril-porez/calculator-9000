import React from 'react'

function MagnificientEqualButton(props) {
    
    const handleClick = () => { 
        props.handleEqual()
    }
    return (
        <div className='special'>
            <input type='button' value={props.name} onClick={() => { handleClick() }} />
        </div>
    )
}

export default MagnificientEqualButton