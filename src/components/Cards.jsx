import React from "react";
import acerNitro from "../images/components_images/Cards/Acer-Nitro-5.jpg"
import asusVictus from '../images/components_images/Cards/Asus.jpg'
import asusTuf from "../images/components_images/Cards/Asus_tuf_gaming.jpg"
import thunderobot from "../images/components_images/Cards/Thunderobot_911_Plus.jpg"
import acerPreadtor from "../images/components_images/Cards/Acer_Predator.jpg"
import asusRogStrix from "../images/components_images/Cards/ASUS_ROG_Strix.jpg"


export const Cards = () => {
   return (
      <div className="Cards">
         <div className="box">
            <img src={acerNitro} alt="" />
            <h1>Acer Nitro 5</h1>
            <p>
               Игровой, производительный, стильный, мощный, доступный.</p>
            <button className="btn-buy">Купить</button>
         </div>
         <div className="box">
            <img src={asusVictus} alt="" />
            <h1>Asus Victus</h1>
            <p>
               Игровой, производительный, стильный, мощный, доступный.</p>
            <button className="btn-buy">Купить</button>
         </div>
         <div className="box">
            <img src={asusTuf} alt="" />
            <h1 className="tg">Asus Tuf Gaming</h1>
            <p>
               Игровой, производительный, стильный, мощный, доступный.</p>
            <button className="btn-buy">Купить</button>
         </div>
         <div className="box">
            <img src={thunderobot} alt="" />
            <h1>ThundeRobot</h1>
            <p>
               Игровой, производительный, стильный, мощный, доступный.</p>
            <button className="btn-buy">Купить</button>
         </div>
         <div className="box">
            <img src={acerPreadtor} alt="" />
            <h1>Acer Predator</h1>
            <p>
               Игровой, производительный, стильный, мощный, доступный.</p>
            <button className="btn-buy">Купить</button>
         </div>
         <div className="box">
            <img src={asusRogStrix} alt="" />
            <h1>Asus Rog Strix</h1>
            <p>
               Игровой, производительный, стильный, мощный, доступный.</p>
            <button className="btn-buy">Купить</button>
         </div>
      </div>
   )
}


export default Cards;