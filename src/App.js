import React from "react";
import Header from "./components/1. Header/Header.js";
import Hero from "./components/2. Hero/Hero.js";
import Input from "./components/3. Input/Input.js";
import Benefits from "./components/4. Benefits/Benefits.js";
import CTA from "./components/5. CTA/CTA.js";
import Footer from "./components/6. Footer/Footer.js";
import "./sass/_base.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Input />      
      <Benefits />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
