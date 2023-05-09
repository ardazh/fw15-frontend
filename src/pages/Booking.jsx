import {Link} from 'react-router-dom'
import logo from "../assets/img/logo-wetick.png"
import sketch from "../assets/img/sketch.png"
import {FaAlignJustify, FaFacebookSquare, FaWhatsappSquare, FaInstagramSquare, FaTwitterSquare} from 'react-icons/fa'

const Booking = ()=> {
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
            <main className="flex flex-col items-center md:mt-16">
                <div className="w-100% md:w-[95%] lg:w-[75%]">
                    <div className="flex flex-col md:flex-row justify-start lg:gap-11 bg-white md:rounded-3xl w-full px-7 lg:px-12 py-12">
                        <section className="w-full lg:w-[40%] h-[70%] ">
                            <div className="w-full">
                                <img src={sketch} alt="sketch" />
                            </div>
                            <div>
                                
                            </div>
                        </section>
                        <section className="w-full lg:w-[60%]">
                            <div className="flex items-center justify-between mb-14">
                                <div className="text-xl tracking-[1px] font-bold">
                                    Tickets
                                </div>
                                <div className="flex justify-center items-center gap-3.5 text-xs ">
                                    <div className="text-[#FC1055]">
                                        BY PRICE
                                    </div>
                                    <div className="w-6 h-6">
                                        <img src="/assets/filter-price.png" alt="filter-price" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-7 w-full">
                                <div className="flex items-start justify-start gap-4 w-full">
                                    <div className="w-[50px]">
                                        <img src="/assets/row1.png" alt="row1" />
                                    </div>
                                    <div className="flex flex-col gap-2.5 w-[60%]">
                                        <div className="text-sm font-bold tracking-[2px]">
                                            SECTION REG, ROW 1
                                        </div>
                                        <div className="text-xs font-medium text-[#BDC0C4]">
                                            12 Seats available
                                        </div>
                                        <div className="">
                                            Quantity
                                        </div>
                                    </div>
                                    <div className="flex justify-end w-[30%]">
                                        <div className="flex flex-col items-center gap-2.5">
                                            <div className="font-bold">
                                                $15
                                            </div>
                                            <div className="text-xs font-medium text-[#BDC0C4]">
                                                per person
                                            </div>
                                            <div className="flex gap-5">
                                                <div className="border border-2 rounded-md">
                                                    <img src="/assets/minus.png" alt="minus" />
                                                </div>
                                                <p>0</p>
                                                <div className="border border-2 rounded-md">
                                                    <img src="/assets/plus.png" alt="plus" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start justify-start gap-4 w-full">
                                    <div className="w-[50px]">
                                        <img src="/assets/row1.png" alt="row1" />
                                    </div>
                                    <div className="flex flex-col gap-2.5 w-[60%]">
                                        <div className="text-sm font-bold tracking-[2px]">
                                            SECTION REG, ROW 1
                                        </div>
                                        <div className="text-xs font-medium text-[#BDC0C4]">
                                            12 Seats available
                                        </div>
                                        <div className="">
                                            Quantity
                                        </div>
                                    </div>
                                    <div className="flex justify-end w-[30%]">
                                        <div className="flex flex-col items-center gap-2.5">
                                            <div className="font-bold">
                                                $15
                                            </div>
                                            <div className="text-xs font-medium text-[#BDC0C4]">
                                                per person
                                            </div>
                                            <div className="flex gap-5">
                                                <div className="border border-2 rounded-md">
                                                    <img src="/assets/minus.png" alt="minus" />
                                                </div>
                                                <p>0</p>
                                                <div className="border border-2 rounded-md">
                                                    <img src="/assets/plus.png" alt="plus" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start justify-start gap-4 w-full">
                                    <div className="w-[50px]">
                                        <img src="/assets/row1.png" alt="row1" />
                                    </div>
                                    <div className="flex flex-col gap-2.5 w-[60%]">
                                        <div className="text-sm font-bold tracking-[2px]">
                                            SECTION REG, ROW 1
                                        </div>
                                        <div className="text-xs font-medium text-[#BDC0C4]">
                                            12 Seats available
                                        </div>
                                        <div className="">
                                            Quantity
                                        </div>
                                    </div>
                                    <div className="flex justify-end w-[30%]">
                                        <div className="flex flex-col items-center gap-2.5">
                                            <div className="font-bold">
                                                $15
                                            </div>
                                            <div className="text-xs font-medium text-[#BDC0C4]">
                                                per person
                                            </div>
                                            <div className="flex gap-5">
                                                <div className="border border-2 rounded-md">
                                                    <img src="/assets/minus.png" alt="minus" />
                                                </div>
                                                <p>0</p>
                                                <div className="border border-2 rounded-md">
                                                    <img src="/assets/plus.png" alt="plus" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between tracking-[0.5px] mb-4">
                                    <div className="text-sm font-bold">
                                        Ticket Section
                                    </div>
                                    <div className="text-sm text-[#FD841F] tracking-[0.5px]">
                                        VIP
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between tracking-[0.5px] mb-4">
                                    <div className="text-sm font-bold">
                                        Quantity
                                    </div>
                                    <div className="text-sm text-[#FD841F] tracking-[0.5px]">
                                        2
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between tracking-[0.5px] mb-12">
                                    <div className="text-sm font-bold">
                                        Total Payment
                                    </div>
                                    <div className="text-sm text-[#FD841F] tracking-[0.5px]">
                                        $70
                                    </div>
                                </div>
                            </div>
                            <div className="self-center">
                                <div>
                                    <button className="w-full md:max-w-full lg:max-w-[350px] h-14 border border-1 rounded-lg bg-[#FD841F] shadow-lg shadow-orange-500/50">Checkout</button>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
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

export default Booking;