"use client";

import { BrowserRouter, Route, Routes } from "react-router-dom";

//Context
import UserState from "./context/User/UserState";

//CSS
import "./App.css";

//Views
import Home from "./views/Home";
import Client from "./views/Client";
import Contact from "./views/Contact";
import Image from "./views/Image";
import Colors from "./views/Colors";

function App() {
  return (
    <UserState>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/client" element={<Client />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/image" element={<Image />} />
          <Route path="/colors" element={<Colors />} />
        </Routes>
      </BrowserRouter>
    </UserState>
  );
}

export default App;
