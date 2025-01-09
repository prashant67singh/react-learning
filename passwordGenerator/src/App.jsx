import { useState, useRef, useCallback } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [useNumber, setUseNumber] = useState(false);
  const [useChar, setUseChar] = useState(false);
  const [password, setPassword] = useState("");
  const inpRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass = "";
    if (useNumber) str += "0123456789";
    if (useChar) str += ",./?;':[]{}|~`!@#$%^&*()_-";

    for (let index = 0; index < length; index++) {
      let i = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(i);
    }
    setPassword(pass);
  }, [length, useNumber, useChar]);

  useEffect(() => {
    passwordGenerator();
  }, [length, useNumber, useChar]);

  const copyHandler = useCallback(() => {
    navigator.clipboard.writeText(password);
    inpRef.current?.select();
  }, [password]);

  return (
    <>
      <div className="w-[600px] bg-gray-700 p-4 rounded-lg">
        <h1 className="text-orange-400 my-4">Password Generator</h1>
        <div className="m-4">
          <input
            className="w-2/3 h-10 outline-none bg-slate-100 rounded-md text-orange-400 p-2"
            type="text"
            value={password}
            ref={inpRef}
            readOnly
          />
          <button className=" bg-blue-500 mx-2" onClick={copyHandler}>
            Copy
          </button>
        </div>
        <div className="flex flex-row p-2 justify-center w-full">
          <div className="flex flex-row align-middle">
            <input
              type="range"
              value={length}
              maxLength={100}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label className="text-orange-400 text-lg mx-2">
              Length: {length}
            </label>
          </div>
          <div className="flex flex-row align-middle">
            <input
              type="checkbox"
              value={useNumber}
              onChange={() => {
                setUseNumber((prev) => !prev);
              }}
            />
            <label className="text-orange-400 text-lg mx-2">Number</label>
          </div>
          <div className="flex flex-row align-middle">
            <input
              type="checkbox"
              value={useChar}
              onChange={() => {
                setUseChar((prev) => !prev);
              }}
            />
            <label className="text-orange-400 text-lg mx-2">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
