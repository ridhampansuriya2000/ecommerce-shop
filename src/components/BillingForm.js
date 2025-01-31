import { useState } from "react";
import useFormValidation from "../hooks/useFormValidation";


export default function BillingForm({ setCheckOutStep }) {
    const { formData, setFormData, errors, validate, clearError } = useFormValidation({
        firstName: "",
        lastName: "",
        country: "",
        streetAddress: "",
        city: "",
        postcode: "",
        phone: "",
        email: "",
        notes: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            setCheckOutStep(3);
        }
    };

    return (
        <div className="w-full max-w-xl py-6 bg-white rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Billing Details</h2>

            <div className='h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden custom-scrollbar'>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {Object.keys(formData).map((field) => (
                        field !== "notes" ? (
                            <div key={field}>
                                <label className="block mb-1 capitalize">
                                    {field.replace(/([A-Z])/g, ' $1')} <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                                    placeholder={field.replace(/([A-Z])/g, ' $1')}
                                    className={`w-full px-4 py-2 border ${errors[field] ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none`}
                                    onChange={(e) => {
                                        setFormData({ ...formData, [field]: e.target.value });
                                        clearError(field);
                                    }}
                                />
                                {errors[field] && <p className="text-red-500 text-sm">{errors[field]}</p>}
                            </div>
                        ) : (
                            <div key={field}>
                                <label className="block mb-1">Order notes (optional)</label>
                                <textarea
                                    placeholder="Notes about your order, e.g. special notes for delivery."
                                    rows={4}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
                                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                                />
                            </div>
                        )
                    ))}
                </form>
            </div>

            <div className="flex flex-col gap-2 mt-6">
                <button
                    onClick={handleSubmit}
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Next
                </button>
                <button
                    type="button"
                    onClick={() => setCheckOutStep(1)}
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                    Go Back
                </button>
            </div>
        </div>
    );
}
