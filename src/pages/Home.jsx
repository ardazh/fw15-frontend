import {Link} from 'react-router-dom'
import logo from "../assets/img/logo-wetick.png"
import picture from "../assets/img/picture.png"
import {FaAlignJustify, FaFacebookSquare, FaWhatsappSquare, FaInstagramSquare, FaTwitterSquare, FaSearch, FaMapMarkerAlt, FaArrowRight} from 'react-icons/fa'


const Home = ()=> {
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
                            <div className='text-white text-6xl tracking-normal'>
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
                        <div className='flex justify-center items-center'>
                            <img src={picture} />
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