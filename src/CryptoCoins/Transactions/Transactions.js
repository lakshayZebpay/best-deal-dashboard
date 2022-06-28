import { Card } from "react-bootstrap";

const Transactions = (props) => {
  const data = props.cryptoTransactions.map((transaction) => {
    return (
      <Card key={transaction.id} style={{ marginBottom: "5px" }}>
        <Card.Header>{transaction.exchangeName}</Card.Header>
        <Card.Body>
          <Card.Title>{transaction.coinName}</Card.Title>
          <Card.Text>
            {`Bought ${transaction.coinAmount} for $ ${transaction.cost}`}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">{transaction.time}</Card.Footer>
      </Card>
    );
  });
  return <div>{data}</div>;
};

export default Transactions;
