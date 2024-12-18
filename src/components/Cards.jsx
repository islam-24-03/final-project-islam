import React, { useState, useEffect } from "react";
import acerNitro from "../images/components_images/Cards/Acer-Nitro-5.jpg";
import asusVictus from "../images/components_images/Cards/Asus.jpg";
import asusTuf from "../images/components_images/Cards/Asus_tuf_gaming.jpg";
import thunderobot from "../images/components_images/Cards/Thunderobot_911_Plus.jpg";
import acerPreadtor from "../images/components_images/Cards/Acer_Predator.jpg";
import asusRogStrix from "../images/components_images/Cards/ASUS_ROG_Strix.jpg";

export const Cards = () => {
   const [modalOpen, setModalOpen] = useState(false);
   const [currentItem, setCurrentItem] = useState(null);

   useEffect(() => {
      const boxes = document.querySelectorAll(".box");

      const observer = new IntersectionObserver(
         (entries, observer) => {
            entries.forEach((entry) => {
               if (entry.isIntersecting) {
                  entry.target.classList.add("visible");
                  observer.unobserve(entry.target);
               }
            });
         },
         { threshold: 0.7 }
      );

      boxes.forEach((box) => observer.observe(box));
   }, []);

   const openModal = (item) => {
      setCurrentItem(item);
      setModalOpen(true);
   };

   const closeModal = () => {
      setModalOpen(false);
      setCurrentItem(null);
   };

   const items = [
      {
         id: 1,
         img: acerNitro,
         title: "Acer Nitro 5",
         description: "Игровой, производительный, стильный, мощный, доступный.",
      },
      {
         id: 2,
         img: asusVictus,
         title: "Asus Victus",
         description: "Игровой, производительный, стильный, мощный, доступный.",
      },
      {
         id: 3,
         img: asusTuf,
         title: "Asus Tuf Gaming",
         description: "Игровой, производительный, стильный, мощный, доступный.",
      },
      {
         id: 4,
         img: thunderobot,
         title: "ThundeRobot",
         description: "Игровой, производительный, стильный, мощный, доступный.",
      },
      {
         id: 5,
         img: acerPreadtor,
         title: "Acer Predator",
         description: "Игровой, производительный, стильный, мощный, доступный.",
      },
      {
         id: 6,
         img: asusRogStrix,
         title: "Asus Rog Strix",
         description: "Игровой, производительный, стильный, мощный, доступный.",
      },
   ];

   return (
      <div className="Cards">
         {modalOpen && (
            <div className="modal">
               <div className="modal-content">
                  <h2>{currentItem?.title}</h2>
                  <p>На складе не обнаружено!</p>
                  <button className="close-btn" onClick={closeModal}>
                     Закрыть
                  </button>
               </div>
            </div>
         )}
         {items.map((item) => (
            <div className="box" key={item.id}>
               <img src={item.img} alt={item.title} />
               <h1>{item.title}</h1>
               <p>{item.description}</p>
               <button
                  className="btn-buy"
                  onClick={() => openModal(item)}
               >
                  Подробнее
               </button>
            </div>
         ))}
      </div>
   );
};

export default Cards;
