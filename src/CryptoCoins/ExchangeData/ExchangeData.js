import Accordion from "react-bootstrap/Accordion";
import "./ExchangeData.css";
import CryptoBuying from "../CryptoBuying/CryptoBuying";
import getData from "../../Calls/getData";
import { useState } from "react";
import { useQuery } from "react-query";

const ExchangeData = (props) => {
  const getExchangePng = (cryptoName) => {
    switch (cryptoName) {
      case "BINANCE":
        return "/icons8-gemini-50.png";
      case "KRAKEN":
        return "https://logos-world.net/wp-content/uploads/2021/02/Kraken-Logo.png";
      case "FTX":
        return "/icons8-ftx-token-64.png";
      case "COINBASE":
        return "/icons8-c-50.png";
      case "GEMINI":
        return "/icons8-gemini-50.png";
      default:
        return ".";
    }
  };
  const [allExchangeData, setAllExchangeData] = useState([
    { id: "1coin", name: "BINANCE", price: "$??" },
    { id: "2coin", name: "KRAKEN", price: "$??" },
    { id: "3coin", name: "FTX", price: "$??" },
    { id: "4coin", name: "COINBASE", price: "$??" },
    { id: "5coin", name: "GEMINI", price: "$??" },
  ]);

  const modifiedFetchData = () => {
    getData(`http://localhost:1337/api/marketValue/${props.cryptoId}`)
      .then((data) => {
        const updatedData = data.sort(
          (a, b) => parseFloat(a.price) - parseFloat(b.price)
        );
        setAllExchangeData(updatedData);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useQuery(`${props.cryptoId}`, modifiedFetchData, {
    staleTime: 10000,
    refetchInterval: 30000,
    refetchOnMount: "always",
  });

  return (
    <div className="height">
      <Accordion flush>
        {allExchangeData.map((exchange, i) => {
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
                      alt="exchange-logo "
                    />
                    {exchange.name}
                  </h5>
                  <h5>
                    {exchange.price < 0 ? "Not Available" : exchange.price}
                  </h5>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                {exchange.price >= 0 && (
                  <CryptoBuying data={exchange} cryptoId={props.cryptoId} />
                )}
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </div>
  );
};

export default ExchangeData;
