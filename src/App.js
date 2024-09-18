import React from "react";
import Create from "./components/Create";
import { Routes, Route } from "react-router-dom";
import Read from "./components/Read";
import Edit from "./components/Edit";

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route exact path="/" element={<Read />}></Route>
        <Route exact path="/create" element={<Create />}></Route>
        <Route exact path="/edit" element={<Edit />}></Route>
      </Routes>
    </div>
  );
};

export default App;
