import { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Loader from "../HOC/Loader/Loader";
import ExchangeData from "./ExchangeData/ExchangeData";
import "./CryptoCoins.css";

const CryptoCoins = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [activeKey, setActiveKey] = useState("BTC-USDT");

  const [allExchangeData, setAllExchangeData] = useState([
    { id: "1coin", name: "Binance", price: "$21" },
    { id: "2coin", name: "Kraken", price: "$10" },
    { id: "3coin", name: "FTX", price: "$12" },
    { id: "4coin", name: "CoinBase", price: "$15" },
    { id: "5coin", name: "Gemini", price: "$20" },
  ]);

  const navData = [
    { id: "1exchange", name: "BTC-USDT", title: "Bitcoin" },
    { id: "2exchange", name: "ETH-USDT", title: "Ethereum" },
    { id: "3exchange", name: "XRP-USDT", title: "Ripple" },
    { id: "4exchange", name: "BAT-USDT", title: "Basic Attention Token" },
    { id: "5exchange", name: "ADA-USDT", title: "Cardano" },
  ];

  useEffect(() => {
    //backend call here

    //if call successful
    // setIsLoading(false);
    //if call has error , i.e. data not fetched
    // setIsError(true);

    console.log("backend request for " + activeKey);

    //place the data in AllExchange data
  }, [activeKey]);

  const exchanges = navData?.map((data) => {
    return (
      <Tab.Pane key={data.id} eventKey={data.name}>
        <ExchangeData
          allExchangeData={activeKey === data.name ? allExchangeData : []}
          cryptoId={data.name}
        />
      </Tab.Pane>
    );
  });

  return (
    <div className="crypto-container">
      <Tab.Container
        id="left-tabs-example"
        activeKey={activeKey}
        onSelect={(selectedKey) => setActiveKey(selectedKey)}
        mountOnEnter
        unmountOnExit
      >
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              {navData &&
                navData.map((data) => {
                  return (
                    <Nav.Item key={data.id}>
                      <Nav.Link eventKey={data.name}>{data.title}</Nav.Link>
                    </Nav.Item>
                  );
                })}
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              {isLoading ? <Loader isError={isError} /> : exchanges}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default CryptoCoins;
