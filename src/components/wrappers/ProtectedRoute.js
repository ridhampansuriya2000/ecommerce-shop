import { Navigate } from "react-router-dom"
import {useAuth} from "../../contexts/AuthContext";

const ProtectedRoute = ({ children }) => {
    const { user } = useAuth()
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
        return <Navigate to="/login" />
    }

    return children
}

export default ProtectedRoute