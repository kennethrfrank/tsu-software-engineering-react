import "./App.css";
import About from "./Views/About";
import Home from "./Views/Home";
import Inventory from "./Views/Inventory";
import Contact from "./Views/Contacts";
import Resources from "./Views/Resources";

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/">
            <Route index element={<Home/>}></Route>
            <Route path="about" element={<About/>}></Route>
            <Route path="inventory" element={<Inventory/>}></Route>
            <Route path="contact" element={<Contact/>}> </Route>
            <Route path="resources" element={<Resources/>}> </Route>
          </Route>
        </Routes>
    </Router>
  );
}

export default App;
