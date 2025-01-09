import { useState } from "react";
import Header from "./componets/Header";
import Footer from "./componets/Footer";
import { Outlet } from "react-router";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
