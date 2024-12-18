import React, { useState } from "react";
import "./Support.css"; // Подключаем файл стилей

export const Support = () => {
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
   });

   const [submitted, setSubmitted] = useState(false);

   const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      if (formData.name && formData.email && formData.message) {
         setSubmitted(true);
         setFormData({ name: "", email: "", message: "" });
         // Здесь можно добавить отправку данных на сервер
      }
   };

   return (
      <div className="support">
         <div className="container">
            <h1 className="title">Служба поддержки</h1>

            {submitted ? (
               <div className="thank-you">
                  <h2>Спасибо за ваше обращение!</h2>
                  <p>Мы свяжемся с вами в ближайшее время.</p>
               </div>
            ) : (
               <form className="support-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                     <label htmlFor="name">Ваше имя:</label>
                     <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Введите ваше имя"
                        required
                     />
                  </div>
                  <div className="form-group">
                     <label htmlFor="email">Ваш email:</label>
                     <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Введите ваш email"
                        required
                     />
                  </div>
                  <div className="form-group">
                     <label htmlFor="message">Сообщение:</label>
                     <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Опишите вашу проблему или вопрос"
                        required
                     ></textarea>
                  </div>
                  <button type="submit" className="submit-button">Отправить</button>
               </form>
            )}
         </div>
      </div>
   );
};

export default Support;
