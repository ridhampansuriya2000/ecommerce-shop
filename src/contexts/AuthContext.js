import { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (storedUser) {
            setUser(storedUser);
        }
    }, []);

    const login = (email, password) => {
        if (email === user?.email && password === user?.password) {
            // const userData = { email, name: "John Doe" };
            // setUser(userData);
            // localStorage.setItem("user", JSON.stringify(userData));
            return true;
        }
        return false;
    };

    const signup = (email, password, name) => {
        const userData = { email, name, password };
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
        return true;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    };

    return (
        <AuthContext.Provider value={{ user, login, signup, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
