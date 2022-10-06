import React from 'react'


function AmazingNumberButton(props) {  
    const numbs = props.value
    console.log(numbs)

    return numbs.map((item,index) => {
        console.log(item[0])
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