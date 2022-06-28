import { Card } from "react-bootstrap";

const Transactions = (props) => {
  const data = props.cryptoTransactions.map((transaction) => {
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
        return `Bought ${transaction.coinAmount} for $ ${transaction.cost}`;
      } else if (progress === "Rejected") {
        return `Transaction of ${transaction.coinAmount} for $ ${transaction.cost} has been Rejected`;
      } else if (progress === "partiallyFilled") {
        return `Transaction of ${transaction.coinAmount} for $ ${transaction.cost} has been Partially Filled`;
      } else {
        return `Transaction of ${transaction.coinAmount} for $ ${transaction.cost} is still pending`;
      }
    };

    return (
      <Card
        border={borderColor()}
        key={transaction.id}
        style={{ marginBottom: "5px", borderLeftWidth: "4px" }}
      >
        <Card.Header>{transaction.exchangeName}</Card.Header>
        <Card.Body>
          <Card.Title>{transaction.coinName}</Card.Title>
          <Card.Text>{transcationMessage()}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          {transaction.time || "Pending ..."}
        </Card.Footer>
      </Card>
    );
  });
  return <div>{data}</div>;
};

export default Transactions;
