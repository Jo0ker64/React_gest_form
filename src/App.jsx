import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Utilisateurs from "./pages/Utilisateurs.jsx";



function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="utilisateurs" element={<Utilisateurs />} />
      </Routes>
    </Router>
  );
}

export default App;
