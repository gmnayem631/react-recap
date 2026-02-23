import "./App.css";

function App() {
  const handleClick = () => {
    alert("clicked");
  };
  const handleClick2 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  };
  return (
    <>
      <h1>React Core Concepts</h1>
      <button onClick={handleClick}>Click Here</button>
      <button onClick={() => handleClick2(30)}>Add 5</button>
    </>
  );
}

export default App;
