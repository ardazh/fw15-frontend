import { Link } from 'react-router-dom'
import logo from "../assets/img/logo-wetick.png"
import picture from "../assets/img/picture.png"
import { FaAlignJustify, FaFacebookSquare, FaWhatsappSquare, FaInstagramSquare, FaTwitterSquare, FaSearch, FaMapMarkerAlt, FaArrowRight, FaArrowLeft } from 'react-icons/fa'
import { GoPrimitiveDot } from 'react-icons/Go'
import { HiOutlineMinus } from 'react-icons/Hi'
import React from "react";
import axios from 'axios'
import moment from 'moment'


const Home = () => {
    const [events, setEvents] = React.useState([])
    const [cities, setCities] = React.useState([])
    const [categories, setCategories] = React.useState([])
    // const [eventCategories, setEventCategories] = React.useState([])
    const [partners, setPartners] = React.useState([])
    React.useEffect(() => {
        async function getData() {
            const { data } = await axios.get('http://localhost:8888/events')
            setEvents(data.results)
        }
        getData()
    }, [])
    React.useEffect(() => {
        async function getDataCities() {
            const { data } = await axios.get('http://localhost:8888/city')
            setCities(data.results)
        }
        getDataCities()
    }, [])
    React.useEffect(() => {
        async function getDataCategory() {
            const { data } = await axios.get('http://localhost:8888/category')
            setCategories(data.results)
        }
        getDataCategory()
    }, [])
    // React.useEffect(() => {
    //     async function getDataEventCategory() {
    //         const { data } = await axios.get('http://localhost:8888/eventCategory')
    //         setEventCategories(data.results)
    //     }
    //     getDataEventCategory()
    // }, [])
    React.useEffect(() => {
        async function getPartners() {
            const { data } = await axios.get('http://localhost:8888/partners')
            setPartners(data.results)
        }
        getPartners()
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
                        <div className="flex items-center gap-3.5">
                            <div>
                                <Link className='text-black fond-bold' to="/login">Login</Link>
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
                                <i> <FaSearch /> </i>
                                <input className=' bg-white border-none outline-none' type="text" placeholder='Search Event...' />
                                <i> <FaMapMarkerAlt /> </i>
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
                    <div className='flex justify-center items-center rounded-full border-none outline-none text-white bg-orange-400 border h-7 w-[150px] gap-3'>
                        <i>
                            <HiOutlineMinus size={50} />
                        </i>
                        <div>
                            EVENT
                        </div>
                    </div>
                    <div className='font-semibold text-4xl text-black mt-6'>
                        Event For You
                    </div>
                    <div className='flex items-center gap-16 mt-[50px]'>
                        <button className='flex justify-center rounded-lg items-center bg-white h-11 w-11'>
                            <i className='text-[#C1C5D0]'>
                                <FaArrowLeft size={20} />
                            </i>
                        </button>
                        <div className='flex flex-col items-center text-[#C1C5D0]'>
                            <div className='text-sm'>
                                30
                            </div>
                            <div className='text-xs'>
                                Sun
                            </div>
                        </div>
                        <div className='flex flex-col items-center text-[#C1C5D0]'>
                            <div className='text-sm'>
                                1
                            </div>
                            <div className='text-xs'>
                                Mon
                            </div>
                        </div>
                        <div className='flex justify-center items-center border border-[#FF8900] rounded-lg h-[75px] w-[50px]'>
                            <div className='flex flex-col items-center text-[#FF8900]'>
                                <div className='text-sm'>
                                    2
                                </div>
                                <div className='text-xs'>
                                    Tue
                                </div>
                                <div>
                                    <i>
                                        <GoPrimitiveDot />
                                    </i>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col items-center text-[#C1C5D0]'>
                            <div className='text-sm'>
                                3
                            </div>
                            <div className='text-xs'>
                                Wed
                            </div>
                        </div>
                        <div className='flex flex-col items-center text-[#C1C5D0]'>
                            <div className='text-sm'>
                                4
                            </div>
                            <div className='text-xs'>
                                Thu
                            </div>
                        </div>
                        <button className='flex justify-center rounded-lg items-center bg-orange-400 h-11 w-11'>
                            <i className='text-white'>
                                <FaArrowRight size={25} />
                            </i>
                        </button>
                    </div>
                    <div className='flex justify-end items-center w-full '>
                        <div className='flex flex-end gap-5 w-[95%] scrollbar-hide overflow-scroll overflow-y-hidden object-cover '>
                            {events.map(event => {
                                return (
                                    <div key={event.id}>
                                        <div className="overflow-hidden rounded-3xl w-[260px] h-[350px] mt-14 relative bg-green-400" >
                                            <img className="w-full h-full object-cover" src={`http://localhost:8888/uploads/${event.picture}`} />
                                            <div>
                                                <div className="absolute bottom-0 text-white flex flex-col gap-5 p-5 bg-gradient-to-t from-[#000000] from-5%">
                                                    <div>{moment(event.date).format('LLLL')}</div>
                                                    <div className="font-bold text-2xl tracking-wide">{event.title}</div>
                                                    <div className="flex">
                                                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 -ml-2">
                                                            <img className="object-cover w-full h-full" src="https://i.pravatar.cc/28" alt="profile1" />
                                                        </div>
                                                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 -ml-2">
                                                            <img className="object-cover w-full h-full" src="https://i.pravatar.cc/28" alt="profile2" />
                                                        </div>
                                                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 -ml-2">
                                                            <img className="object-cover w-full h-full" src="https://i.pravatar.cc/28" alt="profile3" />
                                                        </div>
                                                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 -ml-2">
                                                            <img className="object-cover w-full h-full" src="https://i.pravatar.cc/28" alt="profile4" />
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
                    <div className='flex justify-center items-center border border-[#FF8900] rounded-md w-[255px] h-10 text-[#FF8900] mt-[17px]'>
                        <button className='border-none outline-none'>
                            See All
                        </button>
                    </div>
                    <div className="px-12">
                        <div className="bg-[#FFE15D] mt-44 px-[68px] py-[74px] border rounded-3xl bg-[url('/src/assets/img/bubble.png')] bg-no-repeat bg-cover">
                            <div className="bg-[#FD841F] mt-11 w-40 h-[30px] flex justify-center items-center rounded-full">
                                <div className='flex justify-center items-center rounded-full border-none outline-none text-white bg-orange-400 border h-7 w-[150px] gap-3'>
                                    <i>
                                        <HiOutlineMinus size={50} />
                                    </i>
                                    <div>
                                        LOCATION
                                    </div>
                                </div>
                            </div>
                            <div className="h-[580px] lg:h-auto overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 lg:gap-12 xl:gap-16">
                                <div>
                                    <div className="text-4xl flex flex-col tracking-wide w-[214px] mt-6 py-1 tracking-wide">
                                        Discover<br /> Events<br /> Near You<br />
                                    </div>
                                </div>
                                {cities.map((city) => {
                                    return (
                                        <React.Fragment key={`cities-${city.id}`}>
                                            <div className="flex flex-col items-center gap-[15px] font-medium text-base leading-6 tracking-[1px] text-white" >
                                                <img src={`http://localhost:8888/uploads/${city.picture}`} alt="jakarta" />
                                                <div className='capitalize'>{city.name}</div>
                                            </div>
                                        </React.Fragment>
                                    )
                                })}
                            </div>
                            <div className="flex justify-center mt-[89px] mb-[73px]">
                                <button className="w-[255px] h-[40px] bg-white rounded-xl text-sm">
                                    See All
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='flex justify-center items-center rounded-full border-none outline-none text-white bg-orange-400 border h-7 w-[150px] gap-3 mt-[175px]'>
                            <i>
                                <HiOutlineMinus size={40} />
                            </i>
                            <div>
                                CATEGORY
                            </div>
                        </div>
                        <div className='font-semibold text-4xl text-black mt-6'>
                            Browse Events By Category
                        </div>
                        <div className='flex gap-24 mt-12'>
                            {categories.map((category) => {
                                return (
                                    <div key={`categories-${category.id}`}>
                                        <button className='hover:text-primary hover:border-b-2 hover:border-primary'>
                                            {category.name}
                                        </button>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className='flex gap-6 justify-center mt-14'>
                        <button className='flex justify-center rounded-lg items-center bg-white h-11 w-11'>
                            <i className='text-[#C1C5D0]'>
                                <FaArrowLeft size={20} />
                            </i>
                        </button>
                        <div className="overflow-hidden rounded-3xl w-[300px] h- mt-14 relative">
                            <img className="w-full h-3/6 object-cover" src="" alt="banner1" />
                            <div>
                                <div className="absolute bottom-0 h-3/6 text-white flex flex-col justify-center bg-[#E14D2A] p-5">
                                    <div className="text-sm">Wed, 15 Nov, 4:00 PM</div>
                                    <div className="font-bold text-[22px] tracking-wide">Sights & Sounds Exhibition</div>
                                </div>
                                <div className="absolute flex -mt-4 ml-5">
                                    <div className="w-7 h-7 rounded-full overflow-hidden border-2 -ml-2">
                                        <img className="object-cover w-full h-full" src="https://i.pravatar.cc/28" alt="profile1" />
                                    </div>
                                    <div className="w-7 h-7 rounded-full overflow-hidden border-2 -ml-2">
                                        <img className="object-cover w-full h-full" src="https://i.pravatar.cc/28" alt="profile2" />
                                    </div>
                                    <div className="w-7 h-7 rounded-full overflow-hidden border-2 -ml-2">
                                        <img className="object-cover w-full h-full" src="https://i.pravatar.cc/28" alt="profile3" />
                                    </div>
                                    <div className="w-7 h-7 rounded-full overflow-hidden border-2 -ml-2">
                                        <img className="object-cover w-full h-full" src="https://i.pravatar.cc/28" alt="profile4" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className='flex justify-center rounded-lg items-center bg-orange-400 h-11 w-11'>
                            <i className='text-[#C1C5D0]'>
                                <FaArrowRight size={20} />
                            </i>
                        </button>
                    </div>
                    <div className="flex flex-col w-full items-center h-[450px] bg-[#FD841F] mt-44 bg-[url('/src/assets/img/bubble.png')] bg-no-repeat bg-cover">
                        <div className='flex justify-center items-center rounded-full border-none outline-none text-white bg-orange-400 border h-7 w-[150px] gap-3 mt-[85px] text-[#FFFFFF]'>
                            <i>
                                <HiOutlineMinus size={40} />
                            </i>
                            <div>
                                PARTNER
                            </div>
                        </div>
                        <div className="font-semibold text-4xl tracking-[1px] mt-6 text-[#FFFFFF]">
                            Our Trusted Partners
                        </div>
                        <div className="text-xs tracking-[0.5px] mt-3.5 text-[#C1C5D0]">
                            By companies like :
                        </div>
                        <div className='flex gap-16'>
                            {partners.map(partner => {
                                return (
                                    <React.Fragment key={`partners-${partner.id}`}>
                                        <div className="flex justify-center items-center gap-16 mt-12 mb-24">
                                            <img src={`http://localhost:8888/uploads/${partner.picture}`} alt="sponsor1" />
                                        </div>
                                    </React.Fragment>
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
            </div >
        </>
    )
}

export default Home;