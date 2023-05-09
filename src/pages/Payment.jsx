import {Link} from 'react-router-dom'
import logo from "../assets/img/logo-wetick.png"
import {FaAlignJustify, FaFacebookSquare, FaWhatsappSquare, FaInstagramSquare, FaTwitterSquare} from 'react-icons/fa'

const Payment = ()=> {
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
            <div className="flex flex-col">
        <main>
            <div className="flex flex-col md:flex-row justify-center gap-5 bg-white px-7 md:px-12 py-[70px] md:mx-24 md:mt-16 md:rounded-3xl text-sm">
                <section className="w-full md:w-[50%]">
                    <div className="font-bold text-xl tracking-[1px] mb-12">
                        Payment Method
                    </div>
                    <div className="flex items-center gap-4 mb-4 ">
                        <input type="radio" id="card" name="card" />
                        <img src="/assets/icon-card.png" alt="card" />
                        <label className="flex justify-between w-full" for="card">Card<i data-feather="chevron-up"></i></label>
                    </div>
                    <div className="flex justify-center items-center gap-3.5 mb-4">
                        <img className="w-[70%]" src="/assets/visa.png" alt="visa" />
                        <div className="border border-dashed border-[#FD841F] w-6 h-6 flex justify-center items-center">
                            <img src="/assets/plus.png" alt="plus" />
                        </div>
                    </div>
                    <div className="flex  items-center gap-4 mb-4">
                        <input type="radio" id="bank" name="bank" />
                        <img src="/assets/icon-bank.png" alt="bank" />
                        <label className="flex justify-between w-full" for="bank">Bank Transfer<i data-feather="chevron-down"></i></label>
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                        <input type="radio" id="retail" name="retail" />
                        <img src="/assets/icon-retail.png" alt="retail" />
                        <label className="flex justify-between w-full" for="retail">Retail<i  data-feather="chevron-down"></i></label>
                    </div>
                    <div className="flex items-center gap-4 mb-4">
                        <input type="radio" id="e-money" name="e-money" />
                        <img src="/assets/icon-dolar.png" alt="retail" />
                        <label className="flex justify-between w-full" for="e-money">E-Money<i data-feather="chevron-down"></i></label>
                    </div>
                </section>
                <section className="w-full md:w-[50%]">
                    <div className="font-bold text-xl tracking-[1px] mb-12">
                        Ticket Detail
                    </div>
                    <div className="flex justify-between">
                        <div>
                            Event
                        </div>
                        <div className="text-[#FD841F]">
                            Sights & Sounds Exhibition
                        </div>
                    </div>
                    <div className="flex justify-between mb-4">
                        <div>
                            Ticket Section
                        </div>
                        <div className="text-[#FD841F]">
                            VIP
                        </div>
                    </div>
                    <div className="flex justify-between mb-4">
                        <div>
                            Quantity
                        </div>
                        <div className="text-[#FD841F]">
                            2
                        </div>
                    </div>
                    <div className="flex justify-between mb-12">
                        <div>
                            Total Payment
                        </div>
                        <div className="text-[#FD841F]">
                            $70
                        </div>
                    </div>
                    <div>
                        <div>
                            <button className="w-full h-14 border border-1 rounded-lg bg-[#FD841F] shadow-lg shadow-orange-500/50 text-white">Payment</button>
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

export default Payment;