import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import "./ExchangeData.css";
import CryptoBuying from "../CryptoBuying/CryptoBuying";

const ExchangeData = (props) => {
  const getExchangePng = (cryptoName) => {
    switch (cryptoName) {
      case "Binance":
        return "/icons8-gemini-50.png";
      case "Kraken":
        return "https://logos-world.net/wp-content/uploads/2021/02/Kraken-Logo.png";
      case "FTX":
        return "/icons8-ftx-token-64.png";
      case "CoinBase":
        return "/icons8-c-50.png";
      case "Gemini":
        return "/icons8-gemini-50.png";
      default:
        return ".";
    }
  };
  return (
    <div className="height">
      <Accordion flush>
        {props.allExchangeData.map((exchange, i) => {
          return (
            <Accordion.Item eventKey={`${i}`} key={exchange.name}>
              <Accordion.Header>
                <div className="exchange-heading">
                  <h5>
                    {" "}
                    <img
                      src={
                        process.env.PUBLIC_URL + getExchangePng(exchange.name)
                      }
                      width="15px"
                      height="15px"
                      alt="exchange-logo"
                    />
                    {exchange.name}
                  </h5>
                  <h5>{exchange.price}</h5>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <CryptoBuying data={exchange} cryptoId={props.cryptoId} />
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </div>
  );
};

export default ExchangeData;
