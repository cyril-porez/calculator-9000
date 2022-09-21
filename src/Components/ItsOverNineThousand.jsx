import React from 'react'
import './itsOverNineThousand.css'


function ItsOverNineThousand(props) {
    if (props.calculate >= 9000) {
        return (
           <div>
               <span> It's over 9000 </span>
           </div> 
        )
    }  
}

export default ItsOverNineThousand