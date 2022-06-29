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
  const [activeKey, setActiveKey] = useState("BTC");

  const [allExchangeData, setAllExchangeData] = useState({
    BTC: [
      { id: "1coin", name: "Binance", price: "$21000" },
      { id: "2coin", name: "Kraken", price: "$20000" },
      { id: "3coin", name: "FTX", price: "$21222" },
      { id: "4coin", name: "CoinBase", price: "$22222" },
      { id: "5coin", name: "Gemini", price: "$20002" },
    ],
    ETH: [
      { id: "1coin", name: "Binance", price: "$21" },
      { id: "2coin", name: "Kraken", price: "$10" },
      { id: "3coin", name: "FTX", price: "$12" },
      { id: "4coin", name: "CoinBase", price: "$15" },
      { id: "5coin", name: "Gemini", price: "$20" },
    ],
    XRP: [
      { id: "1coin", name: "Binance", price: "$21" },
      { id: "2coin", name: "Kraken", price: "$10" },
      { id: "3coin", name: "FTX", price: "$12" },
      { id: "4coin", name: "CoinBase", price: "$15" },
      { id: "5coin", name: "Gemini", price: "$20" },
    ],
    BAT: [
      { id: "1coin", name: "Binance", price: "$21" },
      { id: "2coin", name: "Kraken", price: "$10" },
      { id: "3coin", name: "FTX", price: "$12" },
      { id: "4coin", name: "CoinBase", price: "$15" },
      { id: "5coin", name: "Gemini", price: "$20" },
    ],
    ADA: [
      { id: "1coin", name: "Binance", price: "$21" },
      { id: "2coin", name: "Kraken", price: "$10" },
      { id: "3coin", name: "FTX", price: "$12" },
      { id: "4coin", name: "CoinBase", price: "$15" },
      { id: "5coin", name: "Gemini", price: "$20" },
    ],
  });

  const navData = [
    { id: "1exchange", name: "BTC", title: "Bitcoin" },
    { id: "2exchange", name: "ETH", title: "Ethereum" },
    { id: "3exchange", name: "XRP", title: "Ripple" },
    { id: "4exchange", name: "BAT", title: "Basic Attention Token" },
    { id: "5exchange", name: "ADA", title: "Cardano" },
  ];

  const getCryptoPng = (cryptoName) => {
    switch (cryptoName) {
      case "BTC":
        return "/icons8-bitcoin-128.png";
      case "ETH":
        return "/icons8-ethereum-100.png";
      case "BAT":
        return "/icons8-basic-attention-token-64.png";
      case "XRP":
        return "/icons8-xrp-128.png";
      case "ADA":
        return "/icons8-cardano-50.png";
      default:
        return ".";
    }
  };

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
          allExchangeData={
            activeKey === data.name ? allExchangeData[data.name] : []
          }
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
                      <Nav.Link eventKey={data.name}>
                        <img
                          src={process.env.PUBLIC_URL + getCryptoPng(data.name)}
                          width="20px"
                          height="20px"
                          alt="cryptoCoin-logo"
                        />
                        {data.title}
                      </Nav.Link>
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
