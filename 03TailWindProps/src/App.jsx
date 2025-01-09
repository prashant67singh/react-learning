import "./App.css";
import Card from "./Card";

function App() {

  let myObj = {
    name: 'Prashant',
    age: 27
  }

  let arr = [1,2,3]
  return (
    <>
      <h1 className="bg-orange-300 text-black p-4">Tailwind Test</h1>
      <Card channel={myObj} arr={arr}></Card>
      <Card channel={myObj.name} arr={arr}/>
    </>
  );
}

export default App;
