import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const success = await login(email, password);

            if (success) {
                navigate("/");
            } else {
                setError("Invalid email or password");
            }
        } catch (err) {
            setError(err.message || "Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
                <h3 className="text-2xl font-bold text-center">Login to your account</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mt-4">
                        <div>
                            <label className="block" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mt-4">
                            <label className="block">Password</label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="flex items-baseline justify-between">
                            <button
                                type="submit"
                                className={`px-6 py-2 mt-4 text-white rounded-lg transition-all ${
                                    loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-900"
                                }`}
                                disabled={loading}
                            >
                                {loading ? "Logging in..." : "Login"}
                            </button>
                            <a href="/signup" className="text-sm text-blue-600 hover:underline">
                                Sign up
                            </a>
                        </div>
                    </div>
                </form>
                {error && <p className="mt-4 text-xs text-red-500">{error}</p>}
            </div>
        </div>
    );
};

export default Login;
