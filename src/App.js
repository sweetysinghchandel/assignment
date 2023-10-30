// import logo from './logo.svg';
import React from "react";

import "./App.css";
import Navbar from "./components/nav";
import Container from "./components/main";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Navbar />
      <Container />
      <Header />
      <Footer />
    </div>
  );
}

export default App;
