import {Link} from 'react-router-dom'
import logo from "../assets/img/logo-wetick.png"
import {FiAlignJustify, FiHeart, FiClock, FiMapPin} from 'react-icons/fi'
import {FaFacebookSquare, FaWhatsappSquare, FaInstagramSquare, FaTwitterSquare} from 'react-icons/fa'

const DetailEvents = ()=> {
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
                                <FiAlignJustify size={30}/>
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
            <div className="flex flex-col">
            <main>
                <div className="flex flex-col md:flex-row justify-center px-7 md:px-12 gap-10 bg-white py-14 mx-0 sm:mx-12 md:mx-24 md:mt-16 md:rounded-3xl">
                    <section className="flex flex-col gap-12 justify-start items-center w-full md:w-[40%]">
                        <div className="rounded-3xl overflow-hidden ">
                            <img src="" alt="picture1" />
                        </div>
                        <div className="flex justify-center gap-2">
                            <div>
                                <i>
                                    <FiHeart size={20}/>
                                </i>
                            </div>
                            <div className="text-xl tracking-[1px]">
                                Add to Wishlist
                            </div>
                        </div>
                    </section>
                    <section className="w-full md:w-[60%]">
                        <div className="text-2xl tracking-[2px] mb-7">
                            Sights & Sounds Exhibition
                        </div>
                        <div className="flex justify-between gap-3 text-sm font-medium tracking-[1px] mb-7 lg:max-w-[70%]">
                            <div className="flex gap-2">
                                <div>
                                    <i>
                                        <FiMapPin size={20}/>
                                    </i>
                                </div>
                                <div>
                                    Jakarta, Indonesia
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <div>
                                <i>
                                    <FiClock size={20}/>
                                </i> 
                                </div>
                                <div>
                                    Wed, 15 Nov, 4:00 PM
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 mb-12">
                            <div className="text-sm font-medium tracking-[0.5px]">
                                Attendees
                            </div>
                            <div className="flex">
                                <div className="w-7 h-7 rounded-full overflow-hidden border-2 -ml-2">
                                    <img className="object-cover w-full h-full" src="" alt="profile1" />
                                </div>
                                <div className="w-7 h-7 rounded-full overflow-hidden border-2 -ml-2">
                                    <img className="object-cover w-full h-full" src="" alt="profile2" />
                                </div>
                                <div className="w-7 h-7 rounded-full overflow-hidden border-2 -ml-2">
                                    <img className="object-cover w-full h-full" src="" alt="profile3" />
                                </div>
                                <div className="w-7 h-7 rounded-full overflow-hidden border-2 -ml-2 relative">
                                    <div className="absolute w-full h-full bg-[rgba(255,225,93,0.5)] text-[10px]">+99</div>
                                    <img className="object-cover w-full h-full" src="" alt="profile4" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3.5 mb-6">
                            <div className="text-xl tracking-[1px]">
                                Event Detail
                            </div>
                            <div className="text-xs font-normal text-[#373A42BF] max-w-[462px]">
                                After his controversial art exhibition `Tear and Consume` back in November 2018, in which guests were invited to tear up…
                            </div>
                            <div className="font-medium text-xs text-[#FD841F]">
                                Read More
                            </div>
                        </div>
                        <div className="flex flex-col gap-3.5 mb-12">
                            <div className="text-xl tracking-[1px]">
                                Location
                            </div>
                            <div>
                                <img src="" alt="mapslocatiton" />
                            </div>
                        </div>
                        <div>
                            <div className="text-white text-base">
                                <button className="w-full md:max-w-[350px] h-14 border border-1 rounded-lg bg-[#FD841F] shadow-lg shadow-orange-500/50" type="submit">Buy Tickets</button>
                            </div>
                        </div>
                    </section>
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

export default DetailEvents;