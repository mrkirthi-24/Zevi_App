import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Products from "./components/Products";

function App() {
  return (
    <>
      <Logo />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Router>
    </>
  );
}

//Logo for the websites
function Logo() {
  return (
    <div
      style={{
        position: "absolute",
        top: 30,
        right: 55,
        zIndex: 100,
        color: "white",
      }}
    >
      <h2>Z E V i</h2>
    </div>
  );
}

export default App;
