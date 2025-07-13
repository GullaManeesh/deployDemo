import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </>
  );
}

export default App;
