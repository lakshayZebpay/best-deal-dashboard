import { useState } from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import ExchangeData from "./ExchangeData/ExchangeData";
import "./CryptoCoins.css";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();
const CryptoCoins = () => {
  const [activeKey, setActiveKey] = useState("BTC");

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

  const exchanges = navData?.map((data) => {
    return (
      <Tab.Pane key={data.id} eventKey={data.name}>
        <ExchangeData cryptoId={data.name} />
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
              <QueryClientProvider client={queryClient}>
                {exchanges}
              </QueryClientProvider>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default CryptoCoins;
