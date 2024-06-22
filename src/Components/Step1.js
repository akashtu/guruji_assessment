// src/Components/Step1.js
import React from "react";
import "./style1.css";
const Step1 = ({ formData, setFormData, errors, nextStep }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="parent_personal">
      <h2 className="personal_content">Personal Information</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p>{errors.name}</p>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <label>Phone:</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && <p>{errors.phone}</p>}
      </div>
      <button type="button" onClick={nextStep}>
        Next
      </button>
    </div>
  );
};

export default Step1;
