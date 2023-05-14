import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ForgotPassword from './pages/ForgotPassword'
import DetailEvents from './pages/DetailEvents'
import Booking from './pages/Booking'
import Payment from './pages/Payment'
import Profile from './pages/Profile'
import ChangePassword from './pages/ChangePassword'
import MyBooking from './pages/MyBooking'
import MyWishlist from './pages/MyWishlist'

import { store } from './redux/store'

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/sign-up' element={<Signup />} />
                    <Route path='/forgot-password' element={<ForgotPassword />} />
                    <Route path='/detail-events/:id' element={<DetailEvents />} />
                    <Route path='/booking' element={<Booking />} />
                    <Route path='/payment' element={<Payment />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/change-password' element={<ChangePassword />} />
                    <Route path='/my-booking' element={<MyBooking />} />
                    <Route path='/my-wishlist' element={<MyWishlist />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}

export default App