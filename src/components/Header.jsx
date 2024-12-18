import React from "react";
import { Link } from "react-router-dom";  // Импортируем Link
import headerImage from "../images/components_images/header_images/header_image.jpg";

export const Header = () => {
   return (
      <div className="Header">
         <img src={headerImage} alt="Header Background" />
         <div className="Header_top">
            <div className="logo-text">
               <h1>IStore</h1>
            </div>
            <nav className="nav">
               <Link to='/'>Главная</Link>
               <Link to="/about">О нас</Link>
               <Link to="/pay">Оплата</Link>
               <Link to="/sell">Продать</Link>
               <Link to="/otzyv">Отзывы</Link>
               <Link to="/support">Поддержка</Link>
            </nav>
         </div>
         <div className="Header__text">
            <h1>IStore — Лучшие ноутбуки для работы, учебы и игр!</h1>
            <p>Откройте новые возможности с современными ноутбуками от ведущих брендов. </p>
         </div>
      </div>
   );
};

export default Header;
