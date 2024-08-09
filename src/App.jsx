import { useState, useEffect, useMemo } from "react";

function App() {
  const [exchangeData, setExchangeData] = useState({});
  const [exchange2Data, setExchange2Data] = useState({});
  const [bankData, setBankData] = useState({});

  useEffect(function () {
    setExchangeData({
      returns: 100,
    });
  }, []);

  useEffect(function () {
    setExchange2Data({
      returns: 200,
    });
  }, []);

  useEffect(function () {
    setTimeout(function () {
      setBankData({
        income: 300,
      });
    }, 3000);
  }, []);

  const cryptoReturns = useMemo(() => {
    console.log("Hi there - Before");
    return exchangeData.returns + exchange2Data.returns;
  }, [exchangeData, exchange2Data]);

  const incomeTax = (cryptoReturns + bankData.income) * 0.3;

  return (
    <div>
      <h3>Income tax returns are {incomeTax}</h3>
    </div>
  );
}

export default App;
