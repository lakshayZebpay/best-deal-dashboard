import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import "./CryptoBuying.css";
import history from './history';

const CryptoBuying = (props) => {   
  
    return ( 
    
    <form> 
{/* <button>Youtube</button> */} 
 <button variant="btn btn-success"  id="id1" onClick={() => history.push('/buy')}>Buy</button>
 <button variant="outline-secondary">Cancel</button>{' '}
 </form>
       
    
    ); 
};
export default CryptoBuying 