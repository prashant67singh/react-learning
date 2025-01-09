import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const {setUser} = useContext(UserContext);

  const handleSubmit = (e)=>{
    e.preventDefault();
    setUser(userName);
  }

  return (
    <div>
      <h1 className="m-12 ">Login</h1>
      <input
      className="m-4 h-12 p-2 rounded bg-white text-black"
        type="text"
        placeholder="userName"
        value={userName}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <input
      className="m-4 h-12 p-2 rounded bg-white text-black"
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button className=" h-12 bg-blue-400" onClick={handleSubmit}> Submit </button>
    </div>
  );
};

export default Login;
