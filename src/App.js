import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Container from "./components/Container";
import FriendsDetail from "./components/FriendsDetail";

function App() {
  const [data, setData] = useState();
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=20").then((response) => {
      const info = response.data.results;
      setFetched(true);
      setData(info);
    });
  }, []);
  console.log(data);
  return (
    <Routes>
      <Route path="/" element={<Container fetched={fetched} data={data} />} />
      <Route
        path="/:name"
        element={<FriendsDetail data={data} fetched={fetched} />}
      />
    </Routes>
  );
}

export default App;
