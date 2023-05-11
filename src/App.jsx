import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import ForgotPassword from "./pages/ForgotPassword"
import DetailEvents from "./pages/DetailEvents"
import Booking from "./pages/Booking"
import Payment from "./pages/Payment"
import EditProfile from "./pages/EditProfile"
import ChangePassword from "./pages/ChangePassword"
import MyBooking from "./pages/MyBooking"
import MyWishlist from "./pages/MyWishlist"

const App = ()=> {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/sign-up" element={<Signup />} />
    <Route path="/forgot-password" element={<ForgotPassword />} />
    <Route path="/detail-events/:id" element={<DetailEvents />} />
    <Route path="/booking" element={<Booking />} />
    <Route path="/payment" element={<Payment />} />
    <Route path="/edit-profile" element={<EditProfile />} />
    <Route path="/change-password" element={<ChangePassword />} />
    <Route path="/my-booking" element={<MyBooking />} />
    <Route path="/my-wishlist" element={<MyWishlist />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App