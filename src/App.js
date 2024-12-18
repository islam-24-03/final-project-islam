import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import About from "./components/About";  // Импортируйте компонент About
import Pay from "./components/Pay";         // Добавьте компонент Pay
import Sell from "./components/Sell";         // Добавьте компонент Pay
import Otzyv from "./components/Otzyv";         // Добавьте компонент Pay
import Support from "./components/Support";         // Добавьте компонент Pay


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Cards />} />
          <Route path="/header" element={<Header />} />
          <Route path="/about" element={<About />} />  {/* Путь для страницы About */}
          <Route path="/pay" element={<Pay />} />          {/* Путь для страницы Pay */}
          <Route path="/sell" element={<Sell />} />          {/* Путь для страницы Pay */}
          <Route path="/otzyv" element={<Otzyv />} />          {/* Путь для страницы Pay */}
          <Route path="/support" element={<Support />} />          {/* Путь для страницы Pay */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
