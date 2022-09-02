import { Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />
        {/* <Route path="/collection/links" element={<Collection />} /> */}
      </Route>
    </Routes>
  );
}

export default App;

// MONIC MONIC
// JHOEDIN
// SAIRODEN
// ISEKAI PROJECT
