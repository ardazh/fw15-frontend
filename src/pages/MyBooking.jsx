import {Link} from 'react-router-dom'
import logo from "../assets/img/logo-wetick.png"
import {FaAlignJustify, FaFacebookSquare, FaWhatsappSquare, FaInstagramSquare, FaTwitterSquare} from 'react-icons/fa'

const ChangePassword = ()=> {
    return (
        <>
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
                        <Link className='text-primary fond-bold' to="/">Home</Link>

                        </li>
                        <li>
                        <Link className='text-primary fond-bold' to="">Create Event</Link>
                        </li>
                        <li>
                        <Link className='text-primary fond-bold' to="">Location</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center gap-3.5">
                    <div className="inline-block rounded-full text-sm bg-gradient-to-r from-cyan-500 to-blue-500">
                        <img className="w-11 h-11 object-cover rounded-full border-2 border-white" src="" alt="profile1" />
                    </div>
                    <div>
                        Kim Ji-soo
                    </div>
                </div>
            </div>
            </header>
            <div className="flex">
                <aside className="hidden md:block w-60 mx-16 my-12">
                    <div className="flex gap-3.5 mb-14">
                        <div>
                            <div className="inline-block rounded-full p-[2px] bg-gradient-to-r from-cyan-500 to-blue-500">
                                <img className="w-11 h-11 object-cover rounded-full border-2 border-white" src="/assets/profile1.jpg" alt="profile1" />
                            </div>
                        </div>
                        <div>
                            <div className="text-sm">
                                Kim Ji-soo
                            </div>
                            <div className="text-xs">
                                Entrepreneur, ID
                            </div>
                        </div>
                    </div>
                    <ul>
                        <li className="flex gap-7 mb-8 text-sm"><i data-feather="user"></i>Profile</li>
                        <li>
                            <ul className="ml-7">
                                <li className="flex gap-7 mb-8 text-sm"><i data-feather="credit-card"></i>Card</li>
                                <a href="/profile-edit-profile.html">
                                    <li className="flex gap-7 mb-8 text-sm"><i data-feather="edit-3"></i>Edit Profile</li>
                                </a>
                                <a href="/profile-change-password.html">
                                    <li className="flex gap-7 mb-8 text-sm"><i data-feather="unlock"></i>Change Password</li>
                                </a>
                            </ul>
                        </li>
                        <a href="/my-booking.html">
                            <li className="flex gap-7 mb-8 text-sm"><i data-feather="list"></i>My Booking</li>
                        </a>
                        <a href="/my-wishlist.html">
                            <li className="flex gap-7 mb-8 text-sm"><i data-feather="heart"></i>My Wishlist</li>
                        </a>
                        <li className="flex gap-7 mb-8 text-sm"><i data-feather="settings"></i>Settings</li>
                        <li className="flex gap-7 mb-8 text-sm text-[#F03800]"><i data-feather="log-out"></i>Logout</li>
                    </ul>
                </aside>
                <main className="flex-1 my-12 text-sm">
                <div className="bg-white px-12 py-11 rounded-2xl mr-16 h-[750px]">
                    <div className="flex justify-between">
                        <div className="text-xl font-bold tracking-wider mb-12 text-xl">My Booking</div>
                        <div className="flex justify-center items-center border-2 w-[125px] h-12 bg-[#FFE15D] rounded-xl gap-4 text-[#F49D1A]"><i data-feather="calendar"></i>March</div>
                    </div>
                    <div className="flex justify-center items-center">
                        <div className="flex flex-col justify-center items-center mt-60">
                            <div className="text-xl tracking-[1px]">
                                No tickets bought
                            </div>
                            <div className="flex justify-center text-center text-sm text-[#B3B8B8] w-80 h-[62px] tracking-[0.5px] gap-5">
                                It appears you haven’t bought any tickets yet. Maybe try searching these?
                            </div>
                        </div>
                    </div>
                </div>
            </main>
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
        </>
    )
}

export default ChangePassword;