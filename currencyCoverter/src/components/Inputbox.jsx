import React, { useId } from "react";

const Inputbox = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = ["usd", "inr"],
  selectedCurrency = "usd",
  disableInput = false,
}) => {
  const labelId = useId();
  return (
    <div className="w-full m-2 p-2 bg-white text-gray-500 self-center rounded-md">
      <div className="flex flex-row justify-between text-2xl p-2">
        <label htmlFor={labelId}>{label}</label>
        <div>Currency Type</div>
      </div>
      <div className="flex flex-row justify-between p-2 text-black">
        <input
          id={labelId}
          type="number"
          className="w-9/12 outline-none p-2 bg-white text-2xl"
          placeholder="Amount"
          value={amount}
          disabled={disableInput}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          min={0}
        />
        <select
          className="bg-gray-100 rounded-xl w-2/12 p-2 outline-none"
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          value={selectedCurrency}
        >
          {currencyOptions.map((currency) => {
            return (
              <option key={currency} value={currency}>
                {currency}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Inputbox;
