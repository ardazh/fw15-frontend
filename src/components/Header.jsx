import logo from '../assets/img/logo-wetick.png'
import { FaAlignJustify } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import React from 'react'
import http from '../helpers/http'
import { useDispatch, useSelector } from 'react-redux'
import { logout as logoutAction } from '../redux/reducers/auth'

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
        <header className='bg-white'>
            <div className='flex md:flex-row flex-col justify-between items-center min-h-[6rem] px-5 md:px-12 text-sm'>
                <div className='w-full md:w-[unset] flex justify-between'>
                    <Link to='/' className='flex text-2xl'>
                        <img src={logo} alt='Logo Wetick' />
                        <span className='flex items-center text-[#E14D2A]'>
                            we
                        </span>
                        <span className='flex items-center text-[#48E0E4]'>
                            tick
                        </span>
                    </Link>
                    <div className='md:hidden'>
                        <button id='btn-toggler' className='flex justify-center items-center h-full'>
                            <i>
                                <FaAlignJustify size={30} />
                            </i>
                        </button>
                    </div>
                </div>
                <div id='menu' className='hidden md:block items-center justify-between flex-1'>
                    <ul className='flex md:flex-row flex-col text-center text-sm gap-12 w-full justify-center'>
                        <li>
                            <Link className='text-black fond-bold hover:text-primary hover:border-b-2 hover:border-primary' to='/'>Home</Link>
                        </li>
                        <li>
                            <Link className='text-black fond-bold hover:text-primary hover:border-b-2 hover:border-primary' to=''>Create Event</Link>
                        </li>
                        <li>
                            <Link className='text-black fond-bold hover:text-primary hover:border-b-2 hover:border-primary' to=''>Location</Link>
                        </li>
                    </ul>
                </div>
                {token ?
                    <div className='flex text-lg items-center gap-3'>
                        <div>
                            <div className='inline-block rounded-full p-[2px] bg-gradient-to-r from-cyan-500 to-blue-500'>
                                <img className='w-11 h-11 object-cover rounded-full border-2 border-white' src={`http://localhost:8888/uploads/${profile?.picture}`} alt='profile1' />
                            </div>
                        </div>
                        <Link to='/profile'>{profile?.fullName}</Link>
                        <button onClick={doLogout} className='btn btn-primary text-md capitalize'>Logout</button>
                    </div> :
                    <div className='flex items-center gap-3.5'>
                        <div>
                            <Link className='text-black fond-bold hover:text-primary hover:border-primary' to='/login'>Login</Link>
                        </div>
                        <Link to='/sign-up'>
                            <button className='btn btn-secondary text-[#FFFFFF] border-orange-400 hover:border-primary hover:bg-primary'>Sign Up</button>
                        </Link>
                    </div>}
            </div>
        </header>
    )
}

export default Header