import {useState} from "react";

const useFormValidation = (initialState) => {
    const [formData, setFormData] = useState(initialState);
    const [errors, setErrors] = useState({});

    const validate = () => {
        let newErrors = {};

        if (!/^[a-zA-Z]+$/.test(formData.firstName)) {
            newErrors.firstName = "First Name should contain only letters";
        }

        if (!/^[a-zA-Z]+$/.test(formData.lastName)) {
            newErrors.lastName = "Last Name should contain only letters";
        }

        if (!/^[0-9]{5,6}$/.test(formData.postcode)) {
            newErrors.postcode = "Postcode should be a valid number";
        }

        if (!/^\d{10}$/.test(formData.phone)) {
            newErrors.phone = "Phone number must be exactly 10 digits";
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Invalid email format";
        }

        Object.keys(formData).forEach((key) => {
            if (!formData[key].trim() && key !== "notes") {
                newErrors[key] = `${key.replace(/([A-Z])/g, ' $1')} is required`;
            }
        });

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const clearError = (field) => {
        setErrors((prevErrors) => ({ ...prevErrors, [field]: "" }));
    };

    return { formData, setFormData, errors, validate, clearError };
};

export default useFormValidation;