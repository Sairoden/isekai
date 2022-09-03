import { Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import Register from "./components/User/Register/Register";
import Login from "./components/User/Login/Login";
import Profile from "./components/User/Profile/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;

// MONIC MONIC
// JHOEDIN
// SAIRODEN
// ISEKAI PROJECT
