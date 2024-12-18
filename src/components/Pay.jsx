import React, { useState } from "react";

const Pay = () => {
   const [paymentDetails, setPaymentDetails] = useState({
      cardNumber: "",
      expiryDate: "",
      cvv: "",
      cardHolderName: "",
      paymentMethod: "card",
   });

   const handleInputChange = (e) => {
      const { name, value } = e.target;
      setPaymentDetails({
         ...paymentDetails,
         [name]: value,
      });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Оплата отправлена", paymentDetails);
      alert("Оплата прошла успешно!");
   };

   return (
      <div className="Pay">
         <div className="container_pay">
            <h1>Оплата товара</h1>
            <form onSubmit={handleSubmit} className="payment_form">
               <div className="form_group">
                  <label htmlFor="cardHolderName">Имя владельца карты</label>
                  <input
                     type="text"
                     id="cardHolderName"
                     name="cardHolderName"
                     value={paymentDetails.cardHolderName}
                     onChange={handleInputChange}
                     required
                     placeholder="Иван Иванов"
                  />
               </div>

               <div className="form_group">
                  <label htmlFor="cardNumber">Номер карты</label>
                  <input
                     type="text"
                     id="cardNumber"
                     name="cardNumber"
                     value={paymentDetails.cardNumber}
                     onChange={handleInputChange}
                     required
                     placeholder="1234 5678 9012 3456"
                  />
               </div>

               <div className="form_group">
                  <label htmlFor="expiryDate">Срок действия</label>
                  <input
                     type="text"
                     id="expiryDate"
                     name="expiryDate"
                     value={paymentDetails.expiryDate}
                     onChange={handleInputChange}
                     required
                     placeholder="MM/YY"
                  />
               </div>

               <div className="form_group">
                  <label htmlFor="productCode">Код товара</label>
                  <input
                     type="text"
                     id="productCode"
                     name="productCode"
                     value={paymentDetails.productCode || ""}
                     onChange={handleInputChange}
                     required
                     placeholder="************"
                  />
               </div>

               <div className="form_group">
                  <label htmlFor="cvv">CVV</label>
                  <input
                     type="password"
                     id="cvv"
                     name="cvv"
                     value={paymentDetails.cvv}
                     onChange={handleInputChange}
                     required
                     placeholder="123"
                  />
               </div>

               <div className="form_group">
                  <label>Способ оплаты</label>
                  <select
                     name="paymentMethod"
                     value={paymentDetails.paymentMethod}
                     onChange={handleInputChange}
                  >
                     <option value="card">Карта</option>
                     <option value="paypal">PayPal</option>
                     <option value="bank">Банковский перевод</option>
                  </select>
               </div>

               <button type="submit" className="pay_button">Оплатить</button>
            </form>
         </div>
      </div>
   );
};

export default Pay;
