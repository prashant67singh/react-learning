import { useState, useEffect } from "react";

const useCurrencyInfo = (currency) => {
  if (!currency) return;
  const [data, setData] = useState({});
  useEffect(() => {
    const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data[currency]))
      .catch((err) => console.err("Fetch Error:", err));
  }, [currency]);
  
  return data;
};

export default useCurrencyInfo;
