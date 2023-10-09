import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import List from "./pages/List/List.jsx";
import Result from "./pages/Result/Result.jsx";
import Add from "./pages/Add/Add.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/List" element={<List />} />
        <Route path="/Result" element={<Result />} />
        <Route path="/Add" element={<Add />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
