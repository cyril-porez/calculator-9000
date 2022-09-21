import React from 'react'

function  GreatOperationButton(props) {
    const operator = props.value   
    
    return operator.map((item, index) => {
        const handleClick = () => {
            props.handleOperator(item)
        }
        return (
            <div key={index}>
                <input type='button' value={ item } onClick={ () => handleClick() } />
            </div>
        )
    })     
}

export default GreatOperationButton