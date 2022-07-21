import React, { Suspense, useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Loader from "../../HOC/Loader/Loader";
import getDataWithToken from "../../Calls/getDataWithToken";

const History = () => {
  const Transactions = React.lazy(() => import("../Transactions/Transactions"));

  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("All");
  const [cryptoTransactions, setCryptoTransaction] = useState([]);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);
  const handleClick = (event) => {
    if (event.target.tagName === "A") {
      setTitle(event.target.id);
    }
  };
  function getHistory(token) {
    getDataWithToken("http://localhost:1337/transactions", token)
      .then((data) => {
        if (data.transactionData) {
          const updatedData = data.transactionData.sort((b, a) => {
            return (
              new Date(a.dateTime).getTime() - new Date(b.dateTime).getTime()
            );
          });

          setCryptoTransaction(updatedData);
        } else {
          console.log("No Transactions has been made yet");
        }
      })
      .catch((err) => {
        console.log("Server not working " + err);
      });
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
          <Suspense fallback={<Loader />}>
            <Transactions
              cryptoTransactions={specificCryptoTransactions()}
              getHistory={getHistory}
            />
          </Suspense>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default History;
