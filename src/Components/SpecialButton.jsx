import React from 'react'

function SpecialButton(props) {

    function handleClick() {
       props.handleClick()
    }

    return (
        <div>
            <input type='submit' value={props.name} onClick={() => handleClick()} />
        </div>
    )
}

export default SpecialButton