import logo from "../assets/img/logo-wetick.png"
import { FaAlignJustify } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import React from 'react'
import http from '../helpers/http'
import { useDispatch, useSelector } from "react-redux"
import { logout as logoutAction } from "../redux/reducers/auth"

const Header = () => {
    const [profile, setProfile] = React.useState({})
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const token = useSelector(state => state.auth.token)
    React.useEffect(() => {
        async function getProfileData() {
            const { data } = await http(token).get('/profile')
            console.log(data)
            setProfile(data.results)
        }
        if (token) {
            getProfileData()
        }
    }, [token, dispatch, navigate])

    const doLogout = () => {
        dispatch(logoutAction())
        navigate('/login')
    }

    return (
        <header className="bg-white">
            <div className="flex md:flex-row flex-col justify-between items-center min-h-[6rem] px-5 md:px-12 text-sm">
                <div className="w-full md:w-[unset] flex justify-between">
                    <div className="flex text-2xl">
                        <img src={logo} alt="Logo Wetick" />
                        <span className="flex items-center text-[#E14D2A]">
                            we
                        </span>
                        <span className="flex items-center text-[#48E0E4]">
                            tick
                        </span>
                    </div>
                    <div className="md:hidden">
                        <button id="btn-toggler" className="flex justify-center items-center h-full">
                            <i>
                                <FaAlignJustify size={30} />
                            </i>
                        </button>
                    </div>
                </div>
                <div id="menu" className="hidden md:block items-center justify-between flex-1">
                    <ul className="flex md:flex-row flex-col text-center text-sm gap-12 w-full justify-center">
                        <li>
                            <Link className='text-black fond-bold' to="/">Home</Link>
                        </li>
                        <li>
                            <Link className='text-black fond-bold' to="">Create Event</Link>
                        </li>
                        <li>
                            <Link className='text-black fond-bold' to="">Location</Link>
                        </li>
                    </ul>
                </div>
                {token ?
                    <div className='text-2xl'>
                        <div>{profile?.fullName}</div>
                        <button onClick={doLogout} className='btn btn-primary'>Logout</button>
                        <Link to='/profile' className="btn btn-primary">Profile</Link>
                    </div> :
                    <div className="flex items-center gap-3.5">
                        <div>
                            <Link className='text-black fond-bold' to="/login">Login</Link>
                        </div>
                        <div>
                            <button className='btn bg-[#FD841F] text-[#FFFFFF] border-orange-400 hover:border-primary hover:bg-primary'>Sign Up</button>
                        </div>
                    </div>}
            </div>
        </header>
    )
}

export default Header;