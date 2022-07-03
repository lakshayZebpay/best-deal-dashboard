import { useEffect } from "react";
import { Card } from "react-bootstrap";

const Transactions = (props) => {
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) props.getHistory(token);
  }, []);

  const data = props.cryptoTransactions?.map((transaction) => {
    const borderColor = () => {
      const progress = transaction.progress;
      if (progress === "Completed") {
        return "primary";
      } else if (progress === "Rejected") {
        return "danger";
      } else if (progress === "partiallyFilled") {
        return "info";
      } else {
        return "dark";
      }
    };

    const transcationMessage = () => {
      const progress = transaction.progress;
      if (progress === "Completed") {
        return `Bought ${transaction.tokenQuantity} for  ${transaction.cost} ${transaction.currency}`;
      } else if (progress === "Rejected") {
        return `Transaction of ${transaction.tokenQuantity} for  ${transaction.cost} ${transaction.currency} has been Rejected`;
      } else if (progress === "partiallyFilled") {
        return `Transaction of ${transaction.tokenQuantity} for  ${transaction.cost} ${transaction.currency} has been Partially Filled`;
      } else {
        return `Transaction of ${transaction.tokenQuantity} for  ${transaction.cost} ${transaction.currency} is still pending`;
      }
    };

    const timeElapsed = () => {
      const transactionDate = new Date(transaction.dateTime);
      const dateToday = new Date();

      const diffTime = Math.abs(
        dateToday.getTime() - transactionDate.getTime()
      );
      const diffDay = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      const timeLeftHours = diffTime % (1000 * 60 * 60 * 24);

      const diffHours = Math.floor(timeLeftHours / (1000 * 60 * 60));

      const timeLeftMinutes = timeLeftHours % (1000 * 60 * 60);
      const diffMinutes = Math.ceil(timeLeftMinutes / (1000 * 60));
      return `${diffDay} Day ${diffHours} Hours ${diffMinutes} Minutes Ago`;
    };

    return (
      <Card
        key={transaction._id}
        border={borderColor()}
        style={{
          marginBottom: "5px",
          borderWidth: "0px 0px 2px 2px",
        }}
      >
        <Card.Header>{transaction.exchangeName}</Card.Header>
        <Card.Body>
          <Card.Title>{transaction.coinName}</Card.Title>
          <Card.Text>{transcationMessage()}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">{timeElapsed()}</Card.Footer>
      </Card>
    );
  });
  return <div>{data}</div>;
};

export default Transactions;
