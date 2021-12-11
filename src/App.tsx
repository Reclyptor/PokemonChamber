import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PokedexNode from "./component/nodes/PokedexNode";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/pokemon" />} />
        <Route path="/pokemon" element={<PokedexNode />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;