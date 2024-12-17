import React, { useState } from "react";
import acerNitro from "../images/components_images/Cards/Acer-Nitro-5.jpg";
import asusVictus from "../images/components_images/Cards/Asus.jpg";
import asusTuf from "../images/components_images/Cards/Asus_tuf_gaming.jpg";
import thunderobot from "../images/components_images/Cards/Thunderobot_911_Plus.jpg";
import acerPreadtor from "../images/components_images/Cards/Acer_Predator.jpg";
import asusRogStrix from "../images/components_images/Cards/ASUS_ROG_Strix.jpg";

export const Cards = () => {
   const [modalOpen, setModalOpen] = useState(false);

   const handleButtonClick = () => {
      setModalOpen(true);
   };

   const closeModal = () => {
      setModalOpen(false);
   };

   return (
      <div className="Cards">
         {modalOpen && (
            <div className="modal">
               <div className="modal-content">
                  <h2>404 Not Found</h2>
                  <p>На складе товара нету</p>
                  <button className="close-btn" onClick={closeModal}>Закрыть</button>
               </div>
            </div>
         )}
         <div className="box">
            <img src={acerNitro} alt="Acer Nitro 5" />
            <h1>Acer Nitro 5</h1>
            <p>Игровой, производительный, стильный, мощный, доступный.</p>
            <button className="btn-buy" onClick={handleButtonClick}>Подробнее</button>
         </div>
         <div className="box">
            <img src={asusVictus} alt="Asus Victus" />
            <h1>Asus Victus</h1>
            <p>Игровой, производительный, стильный, мощный, доступный.</p>
            <button className="btn-buy" onClick={handleButtonClick}>Подробнее</button>
         </div>
         <div className="box">
            <img src={asusTuf} alt="Asus Tuf Gaming" />
            <h1>Asus Tuf Gaming</h1>
            <p>Игровой, производительный, стильный, мощный, доступный.</p>
            <button className="btn-buy" onClick={handleButtonClick}>Подробнее</button>
         </div>
         <div className="box">
            <img src={thunderobot} alt="ThundeRobot" />
            <h1>ThundeRobot</h1>
            <p>Игровой, производительный, стильный, мощный, доступный.</p>
            <button className="btn-buy" onClick={handleButtonClick}>Подробнее</button>
         </div>
         <div className="box">
            <img src={acerPreadtor} alt="Acer Predator" />
            <h1>Acer Predator</h1>
            <p>Игровой, производительный, стильный, мощный, доступный.</p>
            <button className="btn-buy" onClick={handleButtonClick}>Подробнее</button>
         </div>
         <div className="box">
            <img src={asusRogStrix} alt="Asus Rog Strix" />
            <h1>Asus Rog Strix</h1>
            <p>Игровой, производительный, стильный, мощный, доступный.</p>
            <button className="btn-buy" onClick={handleButtonClick}>Подробнее</button>
         </div>
      </div>
   );
};

export default Cards;