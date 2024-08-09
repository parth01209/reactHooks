import { useEffect, useState } from "react";

import "./App.css";

function App() {
  // const [count, setCount] = useState(0);
  const [exchangeData, setExchangeData] = useState({});
  const [bankData, setBankData] = useState({});
  console.log("Re-render");

  useEffect(function () {
    setTimeout(function () {
      setBankData({ income: 100 });
    }, 2000);
  }, []);

  useEffect(function () {
    setTimeout(function () {
      setExchangeData({
        returns: 100,
      });
    }, 1000);
  }, []);

  // Above code has empty dependency array, which means that we want to run the fetch request only on initial render.
  // If we add bankData in dependency array, the code inside function will run only when bankData changes.
  // If we add exchangeData in dependency array, the code inside function will run only when exchangeData changes.

  const incomeTax = (bankData.income + exchangeData.returns) * 0.3;

  return <div>Hi, Your income tax returns are {incomeTax}</div>;
}

export default App;

// Problem without useEffect: continuous re-render
