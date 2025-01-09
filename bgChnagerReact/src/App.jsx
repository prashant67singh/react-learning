import { useState } from "react";
import Button from "./Button";

function App() {
  const [color, setColor] = useState('red')
  return (
    <>
    <div className="w-full h-full duration-1000 flex flex-col justify-end align-baseline" style={{backgroundColor: color}}>
    <div className="flex flex-row justify-between align-middle my-4 bg-white rounded self-center border-2">
        <Button color="Red" clickHandler={setColor}/>
        <Button color="Green" clickHandler={setColor}/>
        <Button color="Blue" clickHandler={setColor}/>
        <Button color="Olive" clickHandler={setColor}/>
        <Button color="Gray" clickHandler={setColor}/>
        <Button color="Yellow" clickHandler={setColor}/>
        <Button color="Purple" clickHandler={setColor}/>
        <Button color="Black" clickHandler={setColor}/>
      </div>
    </div>
      
    </>
  );
}

export default App;
