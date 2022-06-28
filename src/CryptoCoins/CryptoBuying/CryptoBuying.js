
import ReactDOM from 'react-dom';
import "./CryptoBuying.css";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
const CryptoBuying = (props) => {   
  
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return ( 
    
      <>  
          <p>Convert </p> 
          <div>
          <input type="number" />
          <select>
            <option value="USD">USD</option>
          </select>
          </div>
 
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