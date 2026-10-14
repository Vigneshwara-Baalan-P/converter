
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("INR");
  const [to, setTo] = useState("USD");
  const [result, setResult] = useState("");

  const rates = {
    INR: 1,
    USD: 83,
    EUR: 90,
    GBP: 105,
  };

  const convert = () => {
    if (amount === "" || Number(amount) < 0) {
      setResult("Enter a valid amount");
      return;
    }

    const converted = (Number(amount) * rates[from]) / rates[to];
    setResult(converted.toFixed(2));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h2>Currency Converter</h2>

      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <br /><br />

      <select value={from} onChange={(e) => setFrom(e.target.value)}>
        <option value="INR">INR - Indian Rupee</option>
        <option value="USD">USD - US Dollar</option>
        <option value="EUR">EUR - Euro</option>
        <option value="GBP">GBP - British Pound</option>
      </select>

      <br /><br />

      <select value={to} onChange={(e) => setTo(e.target.value)}>
        <option value="INR">INR - Indian Rupee</option>
        <option value="USD">USD - US Dollar</option>
        <option value="EUR">EUR - Euro</option>
        <option value="GBP">GBP - British Pound</option>
      </select>

      <br /><br />

      <button onClick={convert}>Convert</button>

      <h3>
        Result: {result !== "" ? result : ""}
        {result !== "" && !isNaN(Number(result)) ? ` ${to}` : ""}
      </h3>
    </div>
  );
}

export default App;
