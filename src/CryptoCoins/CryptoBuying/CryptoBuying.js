// import conversionLogo from "../../../public/";
import "./CryptoBuying.css";
import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const CryptoBuying = (props) => {
  const coinData = useState(props.data);

  const [show, setShow] = useState(false);
  const [cryptoValue, setCryptoValue] = useState("");
  const [dollarValue, setDollarValue] = useState("");
  // const [coinValue, setCoinValue] = useState(coinData.pricePerCoin);
  const [coinValue, setCoinValue] = useState(21);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleBtcToDollar = (e) => {
    setCryptoValue(e.target.value);
    setDollarValue(e.target.value * coinValue);
  };
  const handleDollarToBtc = (e) => {
    setCryptoValue(e.target.value / coinValue);
    setDollarValue(e.target.value);
  };

  return (
    <div className="cryptoBuying">
      <div className="cryptoExchange">
        <div className="exchangeCoin">
          <InputGroup hasValidation type="number">
            <InputGroup.Text id="inputGroup-sizing-default">
              {props.cryptoId}
            </InputGroup.Text>
            <Form.Control
              placeholder={props.cryptoId}
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              type="number"
              value={cryptoValue}
              onChange={handleBtcToDollar}
            />
          </InputGroup>
        </div>
        <img
          src={process.env.PUBLIC_URL + "/pngfind.com-path-png-165424.png"}
          width="20px"
          height="20px"
          alt="conversion-logo"
        />
        <div className="exchangeCoin">
          <InputGroup>
            <Form.Control
              placeholder="USDT"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              value={dollarValue}
              type="number"
              onChange={handleDollarToBtc}
            />
            <InputGroup.Text id="basic-addon2">USDT</InputGroup.Text>
          </InputGroup>
        </div>
      </div>
      <div>
        <Button
          variant="primary"
          onClick={handleShow}
          disabled={dollarValue <= 0}
        >
          Buy
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm Your Buying</Modal.Title>
          </Modal.Header>
          <Modal.Body>{`${cryptoValue} ${props.cryptoId} for $ ${dollarValue}`}</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Confirm
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};
export default CryptoBuying;
