import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import "./ExchangeData.css";

const ExchangeData = (props) => {
  return (
    <div className="height">
      <Accordion flush>
        {props.allExchangeData.map((exchange, i) => {
          return (
            <Accordion.Item eventKey={`${i}`}>
              <Accordion.Header>
                <div className="exchange-heading">
                  <h5>{exchange.name}</h5>
                  <h5>{exchange.price}</h5>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <Card.Title>{props.cryptoId}</Card.Title>
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </div>
  );
};

export default ExchangeData;

{
  /* <Card
  className="text-left"
  key={exchange.id}
  border="primary"
  style={{ margin: "20px" }}
>
  <Card.Body>
    <Card.Text></Card.Text>
  </Card.Body>
</Card>; */
}
