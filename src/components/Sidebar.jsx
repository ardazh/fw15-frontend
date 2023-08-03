import { Link, useNavigate } from "react-router-dom"
import React from "react"
import http from "../helpers/http"
import { useDispatch, useSelector } from "react-redux"
import { logout as logoutAction,setWarningMessage } from "../redux/reducers/auth"
import Image from "./Image"
import defaultImage from "../assets/img/default.jpg"
import { setDataProfile } from "../redux/reducers/profile"

import { FiCreditCard, FiEdit3, FiHeart, FiList, FiLogOut, FiPlusCircle, FiSettings, FiUnlock, FiUser } from "react-icons/fi"


const Sidebar = () => {
  // const [profile, setProfile] = React.useState({})
  const profile = useSelector(state => state.profile.dataProfile)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const token = useSelector(state => state.auth.token)
  React.useEffect(() => {
    async function getProfileData() {
      const fallback = (message)=> {
        dispatch(logoutAction())
        dispatch(setWarningMessage(message))
        navigate("/login")
      }
      const { data } = await http(token, fallback).get("/profile")
      dispatch(setDataProfile(data.results))
    }
    if(token) {
      getProfileData()
    }
  }, [token, dispatch, navigate])

  const doLogout = () => {
    dispatch(logoutAction())
    navigate("/login")
  }
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
        <li className='flex gap-7 mb-8 text-sm'>
          <Link className='flex items-center gap-6' to='/profile'>
            <i>
              <FiUser size={22} />
            </i>
              Profile
          </Link>
        </li>
        <li>
          <ul className='ml-7'>
            <li className='flex gap-7 mb-8 text-sm'>
              <a className='flex items-center gap-6' href='#'>
                <i>
                  <FiCreditCard size={22} />
                </i>
                  Card
              </a>
            </li>
            <a className='flex items-center gap-6' href=''>
              <li className='flex gap-7 mb-8 text-sm'>
                <i>
                  <FiEdit3 size={22} />
                </i>
                  Edit Profile
              </li>
            </a>
            <Link className='flex items-center gap-6' to='/change-password'>
              <li className='flex gap-7 mb-8 text-sm'>
                <i>
                  <FiUnlock size={22} />
                </i>
                  Change Password
              </li>
            </Link>
          </ul>
        </li>
        <Link className='flex items-center gap-6' to='/manage-events'>
          <li className='flex gap-7 mb-8 text-sm'>
            <i>
              <FiPlusCircle size={22} />
            </i>
              Create Event
          </li>
        </Link>
        <Link className='flex items-center gap-6' to='/my-booking'>
          <li className='flex gap-7 mb-8 text-sm'>
            <i>
              <FiList size={22} />
            </i>
              My Booking
          </li>
        </Link>
        <Link className='flex items-center gap-6' to='/my-wishlist'>
          <li className='flex gap-7 mb-8 text-sm'>
            <i>
              <FiHeart size={22} />
            </i>
              My Wishlist
          </li>
        </Link>
        <a className='flex items-center gap-6' href='#'>
          <li className='flex gap-7 mb-8 text-sm'>
            <i>
              <FiSettings size={22} />
            </i>
              Setting
          </li>
        </a>
        <button onClick={doLogout} className='flex gap-7 mb-8 text-sm text-[#F03800]'>
          <i>
            <FiLogOut size={22} />
          </i>
        Logout
        </button>
      </ul>
    </aside>
  )
}

export default Sidebar
