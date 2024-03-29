import logo from "../assets/img/Once-ticket.png"
import { FaFacebookSquare, FaWhatsappSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className='bg-white md:bg-[#F4F7FF] pt-20'>
      <div className='flex flex-col gap-7 px-7 md:px-32'>
        <div className='flex flex-col gap-7 md:gap-0 md:flex-row justify-between'>
          <div className='flex flex-col gap-5'>
            <div className='flex justify-start items-center'>
              <div className='inline-block rounded-full p-[2px]' >
                <img src={logo} className='w-16 h-16 object-cover border-4 rounded-full' />
              </div>
              <div>
                <p className='text-2xl font-semibold text-orange-400 tracking-[1px]'>
                    Once Ticket
                </p>
              </div>
            </div>
            <div className='flex flex-col gap-3'>
              <p className='font-medium text-sm'>Find events you love with our</p>
              <div className='flex flex-row gap-2.5'>
                <FaFacebookSquare />
                <FaWhatsappSquare />
                <FaInstagramSquare />
                <FaTwitterSquare />
              </div>
            </div>
          </div>
          <div>
            <p className='font-semibold text-base tracking-[1px]'>Wetick</p>
            <p className='text-[#C1C5D0] tracking-[1px] mt-5'>About Us</p>
            <p className='text-[#C1C5D0] tracking-[1px] mt-5'>Features</p>
            <p className='text-[#C1C5D0] tracking-[1px] mt-5'>Blog</p>
            <p className='text-[#C1C5D0] tracking-[1px] mt-5'>Payments</p>
            <p className='text-[#C1C5D0] tracking-[1px] mt-5'>Mobile App</p>
          </div>
          <div>
            <p className='font-semibold text-base tracking-[1px]'>Features</p>
            <p className='text-[#C1C5D0] tracking-[1px] mt-5'>Booking</p>
            <p className='text-[#C1C5D0] tracking-[1px] mt-5'>Create Event</p>
            <p className='text-[#C1C5D0] tracking-[1px] mt-5'>Discover</p>
            <p className='text-[#C1C5D0] tracking-[1px] mt-5'>Register</p>
          </div>
          <div>
            <p className='font-semibold text-base tracking-[1px]'>Company</p>
            <p className='text-[#C1C5D0] tracking-[1px] mt-5'>Partnership</p>
            <p className='text-[#C1C5D0] tracking-[1px] mt-5'>Help</p>
            <p className='text-[#C1C5D0] tracking-[1px] mt-5'>Terms of Service</p>
            <p className='text-[#C1C5D0] tracking-[1px] mt-5'>Privacy Policy</p>
            <p className='text-[#C1C5D0] tracking-[1px] mt-5'>Sitemap</p>
          </div>
        </div>
        <div className=''>
          <p className='font-semibold text-base'>&copy;2020 Oncetick All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
