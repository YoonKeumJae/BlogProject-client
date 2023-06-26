import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import home from "./pages/index.js";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
