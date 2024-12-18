import React, { useState } from "react";

export const Sell = () => {
   const [title, setTitle] = useState("");
   const [description, setDescription] = useState("");
   const [price, setPrice] = useState("");
   const [photo, setPhoto] = useState(null);

   const handlePhotoChange = (e) => {
      const file = e.target.files[0];
      if (file) {
         setPhoto(URL.createObjectURL(file));
      }
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      alert("Your listing has been submitted!");
      // Here, you can send the data to a backend server
   };

   return (
      <div className="sell-page">
         <h1>Sell Your Laptop</h1>
         <form onSubmit={handleSubmit} className="sell-form">
            <div className="form-group">
               <label htmlFor="title">Title</label>
               <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Название вашего ноутбука"
                  required
               />
            </div>

            <div className="form-group">
               <label htmlFor="description">Description</label>
               <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Характеристики:"
                  required
               ></textarea>
            </div>

            <div className="form-group">
               <label htmlFor="price">Price ($)</label>
               <input
                  type="number"
                  id="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="Цена"
                  required
               />
            </div>

            <div className="form-group">
               <label htmlFor="photo">Upload a Photo</label>
               <input type="file" id="photo" accept="image/*" onChange={handlePhotoChange} />
            </div>

            {photo && (
               <div className="photo-preview">
                  <img src={photo} alt="Laptop Preview" />
               </div>
            )}

            <button type="submit" className="submit-button">
               Submit Listing
            </button>
         </form>
      </div>
   );
};

export default Sell;
