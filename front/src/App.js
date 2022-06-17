import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/signUp/signUp";
import SignIn from "./components/signIn/signIn";
import Home from "./components/home/home";
import "./app.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
