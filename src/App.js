import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {AuthProvider} from "./contexts/AuthContext";
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import ProtectedRoute from "./components/wrappers/ProtectedRoute";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectedLayout from "./components/wrappers/ProtectedLayout";

const App = () => {
  return (
    <div className='overflow-hidden'>
      <AuthProvider>
        <Router>
          <Routes>
            <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <ProtectedLayout>
                      <Home />
                    </ProtectedLayout>
                  </ProtectedRoute>
                }
            />
            <Route
                path="/product/:id"
                element={
                  <ProtectedRoute>
                    <ProtectedLayout>
                      <ProductDetails />
                    </ProtectedLayout>
                  </ProtectedRoute>
                }
            />

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
};

export default App;
