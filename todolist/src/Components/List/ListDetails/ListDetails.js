import React from 'react';

const ListDetails = props =>{
    return(
        <div>
            <ul>
               <li> {props.items}</li>
            </ul>
            
        </div>
        
    );
}
export default ListDetails;