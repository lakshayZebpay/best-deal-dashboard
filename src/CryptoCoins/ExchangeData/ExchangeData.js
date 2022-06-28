import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import "./ExchangeData.css";

const ExchangeData = (props) => {
  return (
    <div className="height">
      {props.allExchangeData.map((exchange) => {
        return (
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header className="exchange-heading">
                <h4>{exchange.name}</h4>
                <h4>{exchange.price}</h4>
              </Accordion.Header>
              <Accordion.Body>
                <Card.Title>{props.cryptoId}</Card.Title>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        );
      })}
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
