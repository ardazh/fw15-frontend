import {Link} from 'react-router-dom'
import logo from "../assets/img/logo-wetick.png"
import picture from "../assets/img/picture.png"
import {FaAlignJustify, FaFacebookSquare, FaWhatsappSquare, FaInstagramSquare, FaTwitterSquare, FaSearch, FaMapMarkerAlt, FaArrowRight} from 'react-icons/fa'
import React from "react";
import axios from 'axios'
import moment from 'moment'


const Home = ()=> {
    const [events, setEvents] = React.useState([])
    React.useEffect(()=>{
        async function getData(){
            const {data} = await axios.get('http://localhost:8888/events')
            setEvents(data.results)
        }
        getData()
    }, [])
    return (
        <>
            <div className='h-screen'>
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
                                    <FaAlignJustify size={30}/>
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
                    <div className="flex items-center gap-3.5">
                        <div>
                            <Link className='text-primary fond-bold' to="/login">Login</Link>
                        </div>
                        <div>
                            <button className='btn bg-[#FD841F] text-[#FFFFFF] border-orange-400 hover:border-primary hover:bg-primary'>Sign Up</button>
                        </div>
                    </div>
                </div>
                </header>
                <div className="flex flex-col bg-[#E14D2A] bg-[url('/src/assets/img/bubble.png')] bg-no-repeat bg-cover w-full h-full">
                    <div className='flex-1 flex justify-center gap-48'>
                        <div className='flex flex-col justify-center items-center pl-10'>
                            <div className='text-white text-6xl tracking-normal tracking-wide ml-8'>
                                Find events you love with our
                            </div>
                            <div className='flex justify-center items-center gap-4 bg-white w-[600px] h-[75px] rounded-2xl overflow-hidden'>
                                <i> <FaSearch/> </i>
                                <input className=' bg-white border-none outline-none' type="text" placeholder='Search Event...' />
                                <i> <FaMapMarkerAlt/> </i>
                                <input className=' bg-white border-none outline-none' type="text" placeholder='Where?' />
                                <button className='flex justify-center rounded-lg items-center bg-orange-400 h-11 w-11'>
                                    <i className='text-white'>
                                        <FaArrowRight size={25} />
                                    </i>
                                </button>
                            </div>
                        </div>
                        <div className='flex justify-center items-end'>
                            <img src={picture} />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center gap-6 mt-44'>
                    <div className='flex justify-center items-center rounded-full border-none outline-none text-white bg-orange-400 border h-7 w-[150px]'>
                        EVENT
                    </div>
                    <div className='font-semibold text-4xl text-black'>
                        Event For You
                    </div>
                    <div className='flex justify-end items-center w-full '>
                        <div className='flex flex-end gap-5 w-[95%] scrollbar-hide overflow-scroll overflow-y-hidden  object-cover '>
                        {events.map(event => {
                        return (
                                <div key={event.id}>
                                    <div className="overflow-hidden rounded-3xl w-[260px] h-[350px] mt-14 relative bg-green-400" >
                                        <img className="w-full h-full object-cover" src={`http://localhost:8888/uploads/${event.picture}`}/>
                                        <div>
                                            <div className="absolute bottom-0 text-white flex flex-col gap-5 p-5 bg-gradient-to-t from-[#000000] from-5%">
                                            <div>{moment(event.date).format('LLLL')}</div>
                                            <div className="font-bold text-2xl tracking-wide">{event.title}</div>
                                            <div className="flex">
                                                <div className="w-12 h-12 rounded-full overflow-hidden border-2 -ml-2">
                                                    <img className="object-cover w-full h-full" src="https://i.pravatar.cc/28" alt="profile1"/>
                                                </div>
                                                <div className="w-12 h-12 rounded-full overflow-hidden border-2 -ml-2">
                                                    <img className="object-cover w-full h-full" src="https://i.pravatar.cc/28" alt="profile2"/>
                                                </div>
                                                <div className="w-12 h-12 rounded-full overflow-hidden border-2 -ml-2">
                                                    <img className="object-cover w-full h-full" src="https://i.pravatar.cc/28" alt="profile3"/>
                                                </div>
                                                <div className="w-12 h-12 rounded-full overflow-hidden border-2 -ml-2">
                                                    <img className="object-cover w-full h-full" src="https://i.pravatar.cc/28" alt="profile4"/>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        </div>
                    </div>
                </div>
                <footer className="bg-white md:bg-[#F4F7FF] pt-20">
                <div className="flex flex-col gap-7 px-7 md:px-32">
                <div className="flex flex-col gap-7 md:gap-0 md:flex-row justify-between">
                    <div className="flex flex-col gap-5">
                        <div className="flex justify-start items-center">
                            <div>
                                <img src={logo} alt="Logo Wetick" />
                            </div>
                            <div>
                                <span className="text-[#E14D2A]">we</span>
                                <span className="text-[#48E0E4]">tick</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <p className="font-medium text-sm">Find events you love with our</p>
                            <div className="flex flex-row gap-2.5">
                                <FaFacebookSquare />
                                <FaWhatsappSquare />
                                <FaInstagramSquare />
                                <FaTwitterSquare />
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="font-semibold text-base tracking-[1px]">Wetick</p>
                        <p className="text-[#C1C5D0] tracking-[1px] mt-5">About Us</p>
                        <p className="text-[#C1C5D0] tracking-[1px] mt-5">Features</p>
                        <p className="text-[#C1C5D0] tracking-[1px] mt-5">Blog</p>
                        <p className="text-[#C1C5D0] tracking-[1px] mt-5">Payments</p>
                        <p className="text-[#C1C5D0] tracking-[1px] mt-5">Mobile App</p>
                    </div>
                    <div>
                        <p className="font-semibold text-base tracking-[1px]">Features</p>
                        <p className="text-[#C1C5D0] tracking-[1px] mt-5">Booking</p>
                        <p className="text-[#C1C5D0] tracking-[1px] mt-5">Create Event</p>
                        <p className="text-[#C1C5D0] tracking-[1px] mt-5">Discover</p>
                        <p className="text-[#C1C5D0] tracking-[1px] mt-5">Register</p>
                    </div>
                    <div>
                        <p className="font-semibold text-base tracking-[1px]">Company</p>
                        <p className="text-[#C1C5D0] tracking-[1px] mt-5">Partnership</p>
                        <p className="text-[#C1C5D0] tracking-[1px] mt-5">Help</p>
                        <p className="text-[#C1C5D0] tracking-[1px] mt-5">Terms of Service</p>
                        <p className="text-[#C1C5D0] tracking-[1px] mt-5">Privacy Policy</p>
                        <p className="text-[#C1C5D0] tracking-[1px] mt-5">Sitemap</p>
                    </div>
                </div>
                <div className="">
                    <p className="font-semibold text-base">&copy;2020 Wetick All Rights Reserved</p>
                </div>
            </div>

                </footer>
            </div>
        </>
    )
}

export default Home;