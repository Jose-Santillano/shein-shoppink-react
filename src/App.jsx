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
import Pieces from "./views/Pieces";
import Clothes from "./views/Clothes";
import Accessories from "./views/Accessories";
import Videos from "./views/Videos";

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
          <Route path="/pieces" element={<Pieces />} />
          <Route path="/clothes" element={<Clothes />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/videos" element={<Videos />} />
        </Routes>
      </BrowserRouter>
    </UserState>
  );
}

export default App;
