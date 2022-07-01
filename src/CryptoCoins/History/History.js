import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Transactions from "../Transactions/Transactions";
import getData from "../../Calls/getData";

const History = () => {
  const [isLoading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("All");
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

  async function getHistory(token) {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:1337/transactions", {
        method: "GET",
        headers: new Headers({
          token: token,
          "Content-Type": "application/x-www-form-urlencoded",
        }),
      });
      const data = await response.json();

      if (data.transactionData) {
        setCryptoTransaction(data.transactionData);
      } else {
        alert("No Transactions has been made yet");
      }
    } catch {
      alert("Server not working");
    }

    setLoading(false);
  }
  const specificCryptoTransactions = () => {
    let data = [];
    if (title !== "All")
      data = cryptoTransactions.filter((transaction) => {
        return transaction.progress === title;
      });
    else data = cryptoTransactions;

    return data;
  };

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    getHistory(token);
  }, []);

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
            <Dropdown.Item id="Completed">Completed</Dropdown.Item>
            <Dropdown.Item id="partiallyFilled">Partially Filled</Dropdown.Item>
            <Dropdown.Item id="Rejected">Rejected</Dropdown.Item>

            <Dropdown.Item id="All">All</Dropdown.Item>
          </DropdownButton>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Transactions cryptoTransactions={specificCryptoTransactions()} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default History;
