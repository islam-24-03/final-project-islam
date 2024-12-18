import React, { useState } from "react";

export const Footer = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [callbackDetails, setCallbackDetails] = useState({ name: "", phone: "" });

   const handleOpenModal = () => {
      setIsModalOpen(true);
   };

   const handleCloseModal = () => {
      setIsModalOpen(false);
   };

   const handleInputChange = (e) => {
      const { name, value } = e.target;
      setCallbackDetails({ ...callbackDetails, [name]: value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Заявка отправлена:", callbackDetails);
      alert("Заявка отправлена! Мы вам перезвоним.");
      setCallbackDetails({ name: "", phone: "" });
      handleCloseModal();
   };

   return (
      <div className="Footer">
         <h1>Контакты</h1>
         <div className="links">
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">expamle@gmail.com</a>
            <a className="center_footer" href="https://www.instagram.com/noutshop.kg/">Instagram</a>
            <a href="#" onClick={handleOpenModal}>+996508025757</a>
         </div>

         {isModalOpen && (
            <div className="modal">
               <div className="modal_content">
                  <h2>Оставьте заявку</h2>
                  <form onSubmit={handleSubmit}>
                     <div className="form_group">
                        <label htmlFor="name">Ваше имя</label>
                        <input
                           type="text"
                           id="name"
                           name="name"
                           value={callbackDetails.name}
                           onChange={handleInputChange}
                           required
                           placeholder="Введите ваше имя"
                        />
                     </div>
                     <div className="form_group">
                        <label htmlFor="phone">Ваш номер телефона</label>
                        <input
                           type="tel"
                           id="phone"
                           name="phone"
                           value={callbackDetails.phone}
                           onChange={handleInputChange}
                           required
                           placeholder="+996XXXXXXXXX"
                        />
                     </div>
                     <button type="submit" className="modal_button">Отправить</button>
                  </form>
                  <button className="modal_close" onClick={handleCloseModal}>Закрыть</button>
               </div>
            </div>
         )}
      </div>
   );
};

export default Footer;
