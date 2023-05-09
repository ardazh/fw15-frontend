import {Link} from 'react-router-dom'
import logo from "../assets/img/logo-wetick.png"
import {FaAlignJustify, FaFacebookSquare, FaWhatsappSquare, FaInstagramSquare, FaTwitterSquare} from 'react-icons/fa'

const EditProfile = ()=> {
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
            <div className="flex-1 md:my-12">
                <div className="flex flex-col-reverse items-center lg:flex-row lg:justify-between lg:gap-11 bg-white px-12 lg:py-11 rounded-2xl md:mr-16">
                    <section className="w-full lg:w-[60%]">
                        <div className="text-xl font-bold tracking-wider mb-12 text-xl">Profile</div>
                        <form className="flex flex-col gap-8 text-sm">
                            <div className="flex flex-col justify-start items-start lg:flex-row lg:items-center  gap-5 lg:gap-10">
                                <label className="w-36" for="old-password">Name</label>
                                <input className="h-14 w-full px-7 border border-[#777777] rounded-lg" type="username" name="username" id="user-name" placeholder="Kim Ji-soo" />
                            </div>
                            <div className=" flex flex-col justify-start items-start lg:flex-row lg:items-center gap-5 lg:gap-16">
                                <div className="w-32">
                                    Username
                                </div>
                                <div className="flex justify-start gap-4">
                                    <div className="text-[#777777]">
                                            @jisoo
                                    </div>
                                        <a href="/edit">Edit</a>
                                </div>
                            </div>
                            <div className="flex flex-col justify-start items-start lg:flex-row lg:items-center gap-5 lg:gap-16">
                                <div className="w-32">
                                    Email
                                </div>
                                <div className="flex flex-col justify-start gap-4">
                                    <div className="flex items-center gap-7">
                                        <div className="text-[#777777]">
                                            jisoo@gmail.com
                                        </div>
                                        <a href="/edit">Edit</a>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col justify-start items-start lg:flex-row lg:items-center gap-5 lg:gap-16">
                                <div className="w-32">
                                    Phone Number
                                </div>
                                <div className="flex justify-start gap-4">
                                    <div className="text-[#777777]">
                                        081234567890
                                    </div>
                                    <a href="/edit">Edit</a>
                                </div>
                            </div>
                            <div className="flex flex-col justify-start items-start lg:flex-row lg:items-center gap-5 lg:gap-16">
                                <div className="w-32">
                                    Gender
                                </div>
                                <div className="flex gap-12">
                                    <div className="flex gap-2">
                                        <input className="rounded-full" type="radio" id="male" name="male" />
                                        <label className="text-[#777777]" for="male">Male</label>
                                    </div>
                                    <div className="flex gap-2">
                                        <input className="rounded-full" type="radio" id="female" name="female" />
                                        <label className="text-[#777777]" for="female">Female</label>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col justify-start items-start lg:flex-row lg:items-center gap-5 lg:gap-12">
                                <label className="w-32" for="profession">Profession</label>
                                <select className="h-14 w-full px-7 border border-[#C1C5D0] rounded-lg" name="profession" id="profession">
                                    <option value="enterpreneur">Entrepreneur</option>
                                </select>
                            </div>
                            <div className="flex flex-col justify-start items-start lg:flex-row lg:items-center gap-5 lg:gap-12">
                                <label className="w-32" for="profession">Nationality</label>
                                <select className="h-14 w-full px-7 border border-[#C1C5D0] rounded-lg" name="profession" id="profession">
                                    <option value="enterpreneur">Indonesia</option>
                                </select>
                            </div>
                            <div className="flex flex-col justify-start items-start lg:flex-row lg:items-center gap-5 lg:gap-16">
                                <div className="w-32">
                                    Birthday Date
                                </div>
                                <div className="flex gap-4">
                                    <div className="text-[#777777]">
                                        03 / 01 / 1995
                                    </div>
                                    <a href="/edit">Edit</a>
                                </div>
                            </div>
                            <div>
                                <button className="bg-[#FD841F] w-[315px] h-[61px] rounded-2xl text-white shadow-lg shadow-orange-500/50 mb-7" type="submit">Update</button>
                            </div>
                        </form>
                    </section>
                    <section className="w-full lg:w-[40%] pt-20 flex items-center justify-center">
                        <div>
                            <div className="flex justify-center mb-12">
                                <img src="/assets/choose-photo.png" alt="choose-photo" />
                            </div>
                            <div className="mb-3.5 hidden md:block">
                                <button className="border-2 border-[#FD841F] w-full h-10 rounded-lg text-[#FD841F] text-sm" type="submit">Choose Photo</button>
                            </div>
                            <div className="text-[#777777] text-xs mb-3.5 hidden md:block">
                                Image size: max, 2 MB
                            </div>
                            <div className="text-[#777777] text-xs mb-3.5 hidden md:block">
                                Image formats: .JPG, .JPEG, .PNG
                            </div>
                        </div>
                    </section>
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
        </>
    )
}

export default EditProfile;