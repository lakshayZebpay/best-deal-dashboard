import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Transactions from "../Transactions/Transactions";
import getData from "../../Calls/getData";

const History = () => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("Pending");
  const [cryptoTransactions, setCryptoTransaction] = useState([
    {
      id: 1,
      exchangeName: "Binance",
      coinName: "BTC",
      coinAmount: "0.00001BTC",
      time: "2 Days Ago",
      cost: "300",
      progress: "partiallyFilled",
    },
    {
      id: 2,
      exchangeName: "Binance",
      coinName: "BTC",
      coinAmount: "0.00001BTC",
      time: "2 Days Ago",
      cost: "300",
      progress: "Completed",
    },
    {
      id: 3,
      exchangeName: "Binance",
      coinName: "BTC",
      coinAmount: "0.00001BTC",
      time: "2 Days Ago",
      cost: "300",
    },
    {
      id: 4,
      exchangeName: "Binance",
      coinName: "BTC",
      coinAmount: "0.00001BTC",
      time: "2 Days Ago",
      cost: "300",
      progress: "Rejected",
    },
    {
      id: 5,
      exchangeName: "Binance",
      coinName: "BTC",
      coinAmount: "0.00001BTC",
      time: "2 Days Ago",
      cost: "300",
      progress: "Pending",
    },
    {
      id: 6,
      exchangeName: "Binance",
      coinName: "BTC",
      coinAmount: "0.00001BTC",
      time: "2 Days Ago",
      cost: "300",
      progress: "Rejected",
    },
    {
      id: 7,
      exchangeName: "Binance",
      coinName: "BTC",
      coinAmount: "0.00001BTC",
      time: "2 Days Ago",
      cost: "300",
    },
    {
      id: 8,
      exchangeName: "Binance",
      coinName: "BTC",
      coinAmount: "0.00001BTC",
      time: "2 Days Ago",
      cost: "300",
      progress: "Pending",
    },
    {
      id: 9,
      exchangeName: "Binance",
      coinName: "BTC",
      coinAmount: "0.00001BTC",
      time: "2 Days Ago",
      cost: "300",
      progress: "Completed",
    },
  ]);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);
  const handleClick = (event) => {
    if (event.target.tagName === "A") {
      setTitle(event.target.id);
    }
  };

  //this useEffect is for calling backend for our history data
  useEffect(() => {
    // const url = "http";
    // const data = getData(url);
    // setCryptoTransaction(data);
  }, []);

  //just a filter
  useEffect(() => {}, [title]);
  return (
    <>
      <Button variant="primary" onClick={toggleShow} className="me-2">
        History
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <DropdownButton
            id="dropdown-basic-button"
            title={title}
            onClick={handleClick}
          >
            <Dropdown.Item id="Pending">Pending</Dropdown.Item>
            <Dropdown.Item id="Complete">Complete</Dropdown.Item>
            <Dropdown.Item id="Rejected">Rejected</Dropdown.Item>
            <Dropdown.Item id="All">All</Dropdown.Item>
          </DropdownButton>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Transactions cryptoTransactions={cryptoTransactions} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default History;
