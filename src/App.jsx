import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Provider } from "react-redux"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import ForgotPassword from "./pages/ForgotPassword"
import DetailEvents from "./pages/DetailEvents"
import Booking from "./pages/Booking"
import Payment from "./pages/Payment"
import Profile from "./pages/Profile"
import ChangePassword from "./pages/ChangePassword"
import MyBooking from "./pages/MyBooking"
import MyWishlist from "./pages/MyWishlist"
import ManageEvents from "./pages/ManageEvents"

import { store,persistor } from "./redux/store"
import PrivateRoute from "./components/PrivateRoute"
import {PersistGate} from "redux-persist/integration/react"

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/forgot-password' element={<ForgotPassword />} />
            <Route path='/detail-events/:id' element={<DetailEvents />} />
            <Route path='/booking/:id' element={<PrivateRoute><Booking /></PrivateRoute>} />
            <Route path='/payment' element={<PrivateRoute><Payment /></PrivateRoute>} />
            <Route path='/profile' element={<PrivateRoute><Profile /></PrivateRoute>} />
            <Route path='/change-password' element={<PrivateRoute><ChangePassword /></PrivateRoute>} />
            <Route path='/my-booking' element={<PrivateRoute><MyBooking /></PrivateRoute>} />
            <Route path='/manage-events' element={<PrivateRoute><ManageEvents /></PrivateRoute>} />
            <Route path='/my-wishlist' element={<PrivateRoute><MyWishlist /></PrivateRoute>} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
}

export default App
