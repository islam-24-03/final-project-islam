import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import About from "./components/About";  // Импортируйте компонент About
import Pay from "./components/Pay";         // Добавьте компонент Pay


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
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
