import React, { useState } from "react";

function NewPlantForm({ addPlant }) {
  const initialState = {
    name: '',
    image: '',
    price: 0
  }
  const [formData, setFormData] = useState(initialState)
  const {name, image, price} = formData
  
  const handleChange = (e) => {
    setFormData({...formData, 
    [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(addPlant)
    setFormData(initialState)
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" name="name" value={name} placeholder="Plant name" />
        <input onChange={handleChange} type="text" name="image" value={image} placeholder="Image URL" />
        <input onChange={handleChange} type="number" name="price" value={price} step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
