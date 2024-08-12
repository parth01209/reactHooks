// // Create a component that performs an expensive operation based on user input.
// // Use useMemo to ensure calculation is recomputed only when input changes

import { useMemo, useState } from "react";

function Assignment1() {
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);

  const expensiveValue = useMemo(
    function () {
      console.log("The factorial is computed");
      let expensiveVal = 1;
      for (let i = 1; i <= input; i++) {
        expensiveVal = expensiveVal * i;
      }
      return expensiveVal;
    },
    [input]
  );

  function updateCounter() {
    setCount(count + 1);
  }

  return (
    <div>
      <h3>This is Assignment 1 for useMemo</h3>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Number please"
      />
      <h5>The answer to this is {expensiveValue}</h5>
      <button onClick={updateCounter}>{count}</button>
    </div>
  );
}

export default Assignment1;
