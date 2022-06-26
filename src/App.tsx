import React  from "react";
import "./scss/app.scss";
import { Header } from "./components/Header";
import { MenuHead } from "./components/MenuHead";
import { Middle } from "./components/Middle";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <MenuHead />
      <Middle />
      <Footer />
    </div>
  );
}

export default App;
