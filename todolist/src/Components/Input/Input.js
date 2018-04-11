import React from 'react';
import './Input.css';

const Input = (props) => {
    return (
        <div className='searchField'>
            <input type='search'
                   value={props.value} 
                   onChange={props.onchange}
                   placeholder='Enter Item To Search'/>
            <button className='btnSubmit' type='submit' onClick={props.onSubmit}>
                Submit
            </button>
        </div>
    );
}
export default Input;