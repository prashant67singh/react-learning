import { useState } from "react";
import "./App.css";
import Inputbox from "./components/Inputbox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [toCurrency, setToCurrency] = useState("usd");
  const [fromCurrency, setFromCurrency] = useState("inr");

  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);

  const data = useCurrencyInfo(fromCurrency);
  const currencyOptions = Object.keys(data);
  const swapHandler = () => {
    let swapTo = toCurrency;
    let swapFrom = fromCurrency;
    setToCurrency(swapFrom);
    setFromCurrency(swapTo);
    setAmount(convertedAmount);
    convertCurrencyHandler();
  };
  const convertCurrencyHandler = () => {
    setConvertedAmount( prev => amount * data[toCurrency]);
  };

  return (
    <>
      <h1 className="m-4 text-orange-600">Currency Converter</h1>
      <div className="w-[800px] h-auto bg-blue-300 bg-opacity-40 rounded-md flex flex-col p-4 border-white border-2">
        <Inputbox
          label="From"
          amount={amount}
          selectedCurrency={fromCurrency}
          currencyOptions={currencyOptions}
          onAmountChange={setAmount}
          onCurrencyChange={setFromCurrency}
        />
        <button
          type="button"
          className="w-20 self-center bg-blue-600 border-white border-1 font-bold text-white"
          onClick={swapHandler}
        >
          Swap
        </button>
        <Inputbox
          label="To"
          amount={convertedAmount}
          selectedCurrency={toCurrency}
          currencyOptions={currencyOptions}
          disableInput={true}
          onAmountChange={setConvertedAmount}
          onCurrencyChange={setToCurrency}
        />
        <button
          type="button"
          className="bg-blue-600 border-white text-xl font-bold text-white my-1"
          onClick={convertCurrencyHandler}
        >
          Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
        </button>
      </div>
    </>
  );
}

export default App;
