import { Suspense } from "react";
import "./App.css";
import Batsman from "./Batsman";
import Bowler from "./Bowler";
import Users from "./Users";
import Posts from "./Posts";
import Players from "./Players";

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
  (response) => response.json(),
);

// const fetchPosts = fetch("https://jsonplaceholder.typicode.com/posts").then(
//   (response) => response.json(),
// );

function App() {
  return (
    <>
      <h1>React Core Concepts</h1>
      <Players></Players>
      {/* <Batsman></Batsman> */}
      {/* <Bowler></Bowler> */}
      <Suspense fallback={<div>Loading...</div>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>
      {/* <Suspense fallback={<div>Posts Loading...</div>}>
        <Posts fetchPosts={fetchPosts}></Posts>
      </Suspense> */}
    </>
  );
}

export default App;
