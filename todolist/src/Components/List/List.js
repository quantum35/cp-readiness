import React from 'react';
import ListDetails from './ListDetails/ListDetails';

const List = (props)=>
    (
            
                props.items.map((item,index)=>{
                   return <ListDetails key={index}
                                       items={item}
                            />
                })
            
       
    );

            
export default List;