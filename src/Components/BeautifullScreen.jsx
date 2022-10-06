import React from 'react'


function BeautifullScreen(props) {  

    return (
        <div className='screen'>            
            <p className='calculate'>{ props.calculate }</p>
            <p className='result'>{ props.result }</p>
        </div>
    )
}

export default BeautifullScreen