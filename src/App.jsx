import "./App.css";
import Players from "./Players";

function App() {
  const players = [
    "Warner",
    "Bennet",
    "Carlos",
    "Angelo",
    "Joe",
    "Kane",
    "Quinton",
  ];
  return (
    <>
      <h1>React Core Concepts</h1>
      <Developer name="hasin" tech="php" age="25"></Developer>
      <Developer name="sumit" tech="JavaScript"></Developer>
      {players.map((player) => {
        return <Players player={player}></Players>;
      })}
    </>
  );
}

function Developer(props) {
  console.log(props);
  return (
    <div className="developer">
      <p style={{ fontSize: "24px", fontWeight: "bold" }}>
        Developer: {props.name}
      </p>
      <p>Tech: {props.tech}</p>
      <p>Tech: {props.age}</p>
    </div>
  );
}

export default App;
