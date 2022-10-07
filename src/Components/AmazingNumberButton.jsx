import React from 'react'


function AmazingNumberButton(props) {  
    const numbs = props.value

    return numbs.map((item,index) => {
        const handleClick = () => {
            
           props.handleCalculator(item)                        
        }
        return (
            <div key={index}>
                <input type="button" value={ item }  onClick={ () => handleClick() } />
            </div>    
        )
        
    }) 
}

export default AmazingNumberButton