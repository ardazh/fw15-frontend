import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import ForgotPassword from './pages/ForgotPassword'
import DetailEvents from './pages/DetailEvents'
import Booking from './pages/Booking'
import Payment from './pages/Payment'
import Profile from './pages/Profile'
import ChangePassword from './pages/ChangePassword'
import MyBooking from './pages/MyBooking'
import MyWishlist from './pages/MyWishlist'

import { store,persistor } from './redux/store'
import PrivateRoute from './components/PrivateRoute'
import {PersistGate} from 'redux-persist/integration/react'

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
                        <Route path='/booking' element={<Booking />} />
                        <Route path='/payment' element={<Payment />} />
                        <Route path='/profile' element={<PrivateRoute><Profile /></PrivateRoute>} />
                        <Route path='/change-password' element={<ChangePassword />} />
                        <Route path='/my-booking' element={<MyBooking />} />
                        <Route path='/my-wishlist' element={<MyWishlist />} />
                    </Routes>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    )
}

export default App