function App() {

  //console.log(process.env.REACT_APP_APPWRITE_URL); -> This will not work for vite application

  console.log(import.meta.env.VITE_APPWRITE_URL)
  return (
    <>
      <h1>Appwrite Blog frontend with react</h1>
    </>
  );
}

export default App;
