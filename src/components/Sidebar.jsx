// import logo from '../assets/img/logo-wetick.png'
// import { FaAlignJustify } from 'react-icons/fa'
// import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import React from 'react'
import http from '../helpers/http'
import { useDispatch, useSelector } from 'react-redux'
import { logout as logoutAction,setErrorMessage } from '../redux/reducers/auth'
import Image from './Image'
import defaultImage from '../assets/img/default.jpg'
const Sidebar = () => {
    const [profile, setProfile] = React.useState({})
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const token = useSelector(state => state.auth.token)
    React.useEffect(() => {
        async function getProfileData() {
            const fallback = (message)=> {
                dispatch(logoutAction())
                dispatch(setErrorMessage(message))
                navigate('/login')
            }
            const { data } = await http(token, fallback).get('/profile')
            console.log(data)
            setProfile(data.results)
        }
        if(token) {
            getProfileData()
        }
    }, [token, dispatch, navigate])

    // const doLogout = () => {
    //     dispatch(logoutAction())
    //     navigate('/login')
    // }
    return (
        <aside className='hidden md:block w-[400px] mx-16 my-12'>
            <div className='flex gap-3.5 mb-14'>
                <div>
                    <div className='inline-block rounded-full p-[2px] bg-gradient-to-r from-cyan-500 to-blue-500'>
                        {/* <img className='w-11 h-11 object-cover rounded-full border-2 border-white' src={`http://localhost:8888/uploads/${profile?.picture}`} alt='profile1' /> */}
                        <Image className='w-12 h-12 object-cover border-4 border-white rounded-full' src={profile?.picture || null} defaultImg={defaultImage} />
                    </div>
                </div>
                <div>
                    <div className='text-sm text-black'>
                        {profile?.fullName}
                    </div>
                    <div className='text-xs text-black'>
                        {profile?.email}
                    </div>
                </div>
            </div>
            <ul>
                <li className='flex gap-7 mb-8 text-sm'><i data-feather='user'></i>Profile</li>
                <li>
                    <ul className='ml-7'>
                        <li className='flex gap-7 mb-8 text-sm'><i data-feather='credit-card'></i>Card</li>
                        <a href='/profile-edit-profile.html'>
                            <li className='flex gap-7 mb-8 text-sm'><i data-feather='edit-3'></i>Edit Profile</li>
                        </a>
                        <a href='/profile-change-password.html'>
                            <li className='flex gap-7 mb-8 text-sm'><i data-feather='unlock'></i>Change Password</li>
                        </a>
                    </ul>
                </li>
                <a href='/my-booking.html'>
                    <li className='flex gap-7 mb-8 text-sm'><i data-feather='list'></i>My Booking</li>
                </a>
                <a href='/my-wishlist.html'>
                    <li className='flex gap-7 mb-8 text-sm'><i data-feather='heart'></i>My Wishlist</li>
                </a>
                <li className='flex gap-7 mb-8 text-sm'><i data-feather='settings'></i>Settings</li>
                <li className='flex gap-7 mb-8 text-sm text-[#F03800]'><i data-feather='log-out'></i>Logout</li>
            </ul>
        </aside>
    )
}

export default Sidebar