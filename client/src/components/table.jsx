import React, { useState, useEffect } from "react";

const Etherscan = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://api.etherscan.io/api?module=account&action=txlist&address=0x742d35Cc6634C0532925a3b844Bc454e4438f44e&startblock=0&endblock=99999999&sort=asc&apikey=YourApiKey`
      );
      const json = await response.json();
      setData(json.result);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Transactions</h1>
      {data.map((transaction) => (
        <div key={transaction.hash}>
          <p>From: {transaction.from}</p>
          <p>To: {transaction.to}</p>
          <p>Value: {transaction.value}</p>
        </div>
      ))}
    </div>
  );
};

export default Etherscan;
