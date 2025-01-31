import { useState } from "react"

const OrderSummary = ({setCheckOutStep, total}) => {
    const [shippingMethod, setShippingMethod] = useState("today")
    const [paymentMethod, setPaymentMethod] = useState("credit")

    return (
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Order</h2>

            <div className="space-y-4">
                <div className="flex justify-between pb-2 border-b border-gray-200">
                    <span className="text-gray-600">Product</span>
                    <span className="text-gray-600">Total</span>
                </div>

                <div className="pb-4 border-b border-gray-200">
                    <div className="space-y-2">
                        <label className="flex items-center justify-between cursor-pointer">
                            <div className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="shipping"
                                    value="today"
                                    checked={shippingMethod === "today"}
                                    onChange={(e) => setShippingMethod(e.target.value)}
                                    className="w-4 h-4 text-blue-500 border-gray-300 focus:ring-blue-500"
                                />
                                <span className="text-gray-700">Delivery: Today Cost</span>
                            </div>
                            <span className="text-blue-500">$60.00</span>
                        </label>

                        <label className="flex items-center justify-between cursor-pointer">
                            <div className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="shipping"
                                    value="week"
                                    checked={shippingMethod === "week"}
                                    onChange={(e) => setShippingMethod(e.target.value)}
                                    className="w-4 h-4 text-blue-500 border-gray-300 focus:ring-blue-500"
                                />
                                <span className="text-gray-700">Delivery: 7 Days Cost</span>
                            </div>
                            <span className="text-blue-500">$20.00</span>
                        </label>
                    </div>
                </div>

                <div className="space-y-2">

                    <div className="flex justify-between">
                        <span className="text-gray-600">Subtotal</span>
                        <span className="text-blue-500">${total}</span>
                    </div>

                    <div className="flex justify-between">
                        <span className="text-gray-600">Shipping Cost</span>
                        <span className="text-blue-500">${shippingMethod === "today" ? "60.00" : "20.00"}</span>
                    </div>

                    <div className="flex justify-between pb-2 border-b border-gray-200">
                        <span className="text-gray-600">Discount</span>
                        <span className="text-blue-500">$0.00</span>
                    </div>
                </div>

                <div className="flex justify-between pb-4 border-b border-gray-200">
                    <span className="font-semibold text-gray-900">Total</span>
                    <span
                        className="font-semibold text-gray-900">${(shippingMethod === "today" ? 60 : 20) + parseFloat(total).toFixed(2)}</span>
                </div>

                <div className="space-y-4">
                    <div>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="radio"
                                name="payment"
                                value="credit"
                                checked={paymentMethod === "credit"}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                                className="w-4 h-4 text-blue-500 border-gray-300 focus:ring-blue-500"
                            />
                            <span className="text-gray-700">Credit Card</span>
                        </label>

                        {paymentMethod === "credit" && (
                            <div className="grid grid-cols-4 gap-2 mt-3 pl-6">
                                <input
                                    type="text"
                                    placeholder="477"
                                    className="col-span-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                                />
                                <input
                                    type="text"
                                    placeholder="07/77"
                                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                                />
                                <input
                                    type="text"
                                    placeholder="CVC"
                                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                                />
                                <input
                                    type="text"
                                    placeholder="ZIP"
                                    className="col-span-4 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                                />
                            </div>
                        )}
                    </div>

                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="radio"
                            name="payment"
                            value="cash"
                            checked={paymentMethod === "cash"}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            className="w-4 h-4 text-blue-500 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="text-gray-700">Cash on Delivery</span>
                    </label>
                </div>

                <button
                    className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md transition-colors">
                    Place Order
                </button>
                <button
                    onClick={()=>setCheckOutStep(2)}
                    className="w-full py-2 px-4 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors">
                    Back
                </button>

            </div>
        </div>
    )
}

export default OrderSummary;