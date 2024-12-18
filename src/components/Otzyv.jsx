import React, { useState } from "react";
import "./Otzyv.css"; // Подключаем файл стилей

export const Otzyv = () => {
   const [reviews, setReviews] = useState([
      { name: "John Doe", text: "Great laptop! Fast delivery!", date: "2024-12-01" },
      { name: "Jane Smith", text: "Excellent service and high-quality product.", date: "2024-12-05" },
   ]);

   const [formData, setFormData] = useState({ name: "", text: "" });

   const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      if (formData.name && formData.text) {
         const newReview = {
            ...formData,
            date: new Date().toISOString().split("T")[0],
         };
         setReviews([newReview, ...reviews]); // Добавляем новый отзыв в начало списка
         setFormData({ name: "", text: "" }); // Очищаем форму
      }
   };

   return (
      <div className="otzyv">
         <h1>Отзывы</h1>

         {/* Список отзывов */}
         <div className="reviews-list">
            {reviews.length > 0 ? (
               reviews.map((review, index) => (
                  <div key={index} className="review">
                     <h3>{review.name}</h3>
                     <p>{review.text}</p>
                     <small>{review.date}</small>
                  </div>
               ))
            ) : (
               <p>Пока отзывов нет. Будьте первым!</p>
            )}
         </div>

         {/* Форма добавления отзыва */}
         <form className="review-form" onSubmit={handleSubmit}>
            <h2>Оставить отзыв</h2>
            <div className="form-group">
               <label htmlFor="name">Имя:</label>
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
               <label htmlFor="text">Отзыв:</label>
               <textarea
                  id="text"
                  name="text"
                  value={formData.text}
                  onChange={handleInputChange}
                  placeholder="Введите ваш отзыв"
                  required
               ></textarea>
            </div>
            <button className="btn" type="submit">Отправить</button>
         </form>
      </div>
   );
};

export default Otzyv;
