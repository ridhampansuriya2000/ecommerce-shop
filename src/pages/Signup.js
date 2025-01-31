import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Signup = () => {
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        password: "",
        confirmPassword: "",
        mobile: "",
    });
    const [errorMessages, setErrorMessages] = useState({});
    const navigate = useNavigate();
    const { signup } = useAuth();

    const validateEmail = (email) => {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regex.test(email);
    };

    const validatePassword = (password) => {
        const regex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{}|;:'",.<>?/~`]).{8,}$/;
        return regex.test(password);
    };

    const validateForm = (formData) => {
        let isValid = true;
        const errorMessages = {};

        if (!formData.fullname) {
            isValid = false;
            errorMessages.fullname = "Full name is required";
        }
        if (!formData.email) {
            isValid = false;
            errorMessages.email = "Email is required";
        } else if (!validateEmail(formData.email)) {
            isValid = false;
            errorMessages.email = "Invalid email address";
        }
        if (!formData.password) {
            isValid = false;
            errorMessages.password = "Password is required";
        } else if (!validatePassword(formData.password)) {
            isValid = false;
            errorMessages.password =
                "Password must be at least 8 characters, contain 1 uppercase, 1 lowercase, and 1 special character";
        }
        if (!formData.confirmPassword) {
            isValid = false;
            errorMessages.confirmPassword = "Confirm password is required";
        } else if (formData.password !== formData.confirmPassword) {
            isValid = false;
            errorMessages.confirmPassword = "Passwords do not match";
        }
        if (!formData.mobile) {
            isValid = false;
            errorMessages.mobile = "Mobile number is required";
        }

        return { isValid, errorMessages };
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { isValid, errorMessages } = validateForm(formData);

        if (isValid) {
            const success = signup(formData.email, formData.password, formData.fullname);
            if (success) {
                navigate("/login");
            }
        } else {
            setErrorMessages(errorMessages);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

        if (e.target.name in errorMessages) {
            const newErrorMessages = { ...errorMessages };
            delete newErrorMessages[e.target.name];
            setErrorMessages(newErrorMessages);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg max-w-md w-full">
                <h3 className="text-2xl font-bold text-center">Sign up for an account</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mt-4">
                        <div>
                            <label className="block" htmlFor="fullname">
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="fullname"
                                placeholder="Full Name"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                                value={formData.fullname}
                                onChange={handleChange}

                            />
                            {errorMessages.fullname && (
                                <p className="text-red-500 text-sm">{errorMessages.fullname}</p>
                            )}
                        </div>
                        <div className="mt-4">
                            <label className="block" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errorMessages.email && (
                                <p className="text-red-500 text-sm">{errorMessages.email}</p>
                            )}
                        </div>
                        <div className="mt-4">
                            <label className="block" htmlFor="password">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                                value={formData.password}
                                onChange={handleChange}

                            />
                            {errorMessages.password && (
                                <p className="text-red-500 text-sm">{errorMessages.password}</p>
                            )}
                        </div>
                        <div className="mt-4">
                            <label className="block" htmlFor="confirmPassword">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                                value={formData.confirmPassword}
                                onChange={handleChange}

                            />
                            {errorMessages.confirmPassword && (
                                <p className="text-red-500 text-sm">{errorMessages.confirmPassword}</p>
                            )}
                        </div>
                        <div className="mt-4">
                            <label className="block" htmlFor="mobile">
                                Mobile Number
                            </label>
                            <input
                                type="text"
                                name="mobile"
                                placeholder="Mobile Number"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                                value={formData.mobile}
                                onChange={handleChange}

                            />
                            {errorMessages.mobile && (
                                <p className="text-red-500 text-sm">{errorMessages.mobile}</p>
                            )}
                        </div>
                        <div className="flex items-baseline justify-between">
                            <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
                                Sign Up
                            </button>
                        </div>

                        <hr className='mt-3'/>
                        <div className="flex-1 text-right">
                            <a href="/login" className="text-sm text-blue-600 hover:underline">
                                Log In
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
