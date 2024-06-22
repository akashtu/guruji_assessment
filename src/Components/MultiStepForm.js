// src/Components/MultiStepForm.js
import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

const MultiStepForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem("formData");
    if (data) {
      setFormData(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const validate = (step) => {
    let tempErrors = {};
    if (step === 1) {
      if (!formData.name) tempErrors.name = "Name is required";
      if (!formData.email) tempErrors.email = "Email is required";
      if (!formData.phone) tempErrors.phone = "Phone is required";
    }
    if (step === 2) {
      if (!formData.address1)
        tempErrors.address1 = "Address Line 1 is required";
      if (!formData.city) tempErrors.city = "City is required";
      if (!formData.state) tempErrors.state = "State is required";
      if (!formData.zip) tempErrors.zip = "Zip Code is required";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const nextStep = (currentStep) => {
    if (validate(currentStep)) {
      if (currentStep === 1) {
        navigate("/step2");
      } else if (currentStep === 2) {
        navigate("/step3");
      }
    }
  };

  const prevStep = (currentStep) => {
    if (currentStep === 2) {
      navigate("/step1");
    } else if (currentStep === 3) {
      navigate("/step2");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate(3)) {
      console.log("Form submitted successfully", formData);
      localStorage.removeItem("formData");
    }
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Step1
            formData={formData}
            setFormData={setFormData}
            errors={errors}
            nextStep={() => nextStep(1)}
          />
        }
      />
      <Route
        path="/step1"
        element={
          <Step1
            formData={formData}
            setFormData={setFormData}
            errors={errors}
            nextStep={() => nextStep(1)}
          />
        }
      />
      <Route
        path="/step2"
        element={
          <Step2
            formData={formData}
            setFormData={setFormData}
            errors={errors}
            nextStep={() => nextStep(2)}
            prevStep={() => prevStep(2)}
          />
        }
      />
      <Route
        path="/step3"
        element={
          <Step3
            formData={formData}
            handleSubmit={handleSubmit}
            prevStep={() => prevStep(3)}
          />
        }
      />
    </Routes>
  );
};

export default MultiStepForm;
