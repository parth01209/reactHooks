/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { useState, useEffect, memo, useCallback } from "react";

function App() {
  const [exchangeData, setExchangeData] = useState({});
  const [exchange2Data, setExchange2Data] = useState({});
  // eslint-disable-next-line no-unused-vars
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

  const calculateCryptoReturns = useCallback(
    function () {
      return exchangeData.returns + exchange2Data.returns;
    },
    [exchangeData, exchange2Data]
  );

  // const incomeTax = (calculateCryptoReturns() + bankData.income) * 0.3;

  return (
    <div>
      <CryptoGainsCalculator calculateCryptoReturns={calculateCryptoReturns} />
    </div>
  );
}

const CryptoGainsCalculator = memo(function ({ calculateCryptoReturns }) {
  console.log("Crypto child re-renders");
  return <div>Your crypto returns are {calculateCryptoReturns()}</div>;
});

export default App;

// React says , if you want to tell me that function hasn't changed across re-renders, wrap it inside useCallback hook.
// Give it dependency. Once one of the dependency changes, re-render takes place. Otherwise, the piece won't re-render

// Failing to pass correct dependency or passing no dependency would result in abnormal results as the render wont take place even for exchangeData and exchange2Data
