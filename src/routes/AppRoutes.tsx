import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Login from '../pages/Login'
import Signup from '../pages/Signup'

const AppRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="*" element={<p>There's nothing here: 404!</p>} />
            </Routes>
        </div>
    )
}

export default AppRoutes