
import ReactDOM from 'react-dom';
import "./CryptoBuying.css";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const CryptoBuying = (props) => {   
    const coinsValue = {
        btc: 21000,
        ethereum: 1200,
        bat: 10,
        ripple: 20,
      }
    const [show, setShow] = useState(false); 
    const [btcValue, setBtcValue] = useState(""); 
    const [dollarValue, setDollarValue] = useState(""); 
    const [coinValue, setCoinValue] = useState(21000); 
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleBtcToDollar = (e) => {
        setBtcValue(e.target.value);
        setDollarValue(e.target.value * coinValue);
      }
      
      const handleDollarToBtc = (e) => {
        setBtcValue(e.target.value / coinValue);
        setDollarValue(e.target.value);
      } 
    return ( 
    
      <>   
          
          <div> 
<input value={btcValue}   onChange={handleBtcToDollar} type="number" />
<select> 

  <option value="USD">BTC</option>

</select>  
</div>  
<div>
<input value={dollarValue}   onChange={handleDollarToBtc} type="number" />
<select> 

<option value="USD">Dollar</option>

</select>
  </div>
          {/* <p>Convert </p>  */}
          {/* <div>
          <input value={btcValue}   onChange={setbtcValue} type="number" />
          <select> 
          
            <option value="USD">BTC</option>
        
          </select>  
          </div>  
          <div>
          <input type="number" />
          <select> 
          
          <option value="USD">BTC</option>
      
        </select>
          </div>     */}
 
        <Button variant="primary" onClick={handleShow}>
            Buy
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
          Confirm  
            </Button>
            <Button variant="secondary" onClick={handleClose}>
            Cancel
            </Button>
           
          </Modal.Footer>
        </Modal>
      </>
    
    ); 
};
export default CryptoBuying 



