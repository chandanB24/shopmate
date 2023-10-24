import { Route, Routes } from "react-router-dom";
import "./App.css";
import Signup from "./Components/Signup_Components/Signup";
import Home from "./Components/Signup_Components/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signup />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
