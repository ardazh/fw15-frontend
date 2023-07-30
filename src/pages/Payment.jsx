import Header from "../components/Header"
import Footer from "../components/Footer"

import visacard from "../assets/img/visa-card.png"
import {BsCreditCardFill, BsBank2} from "react-icons/bs"
import {FiChevronUp, FiChevronDown} from "react-icons/fi"
import {IoStorefront} from "react-icons/io5"
import {FaDollarSign} from "react-icons/fa"
import { useLocation, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import http from "../helpers/http"
import React from "react"


const Payment = () => {
  const {state} = useLocation()
  const navigate = useNavigate()
  const token = useSelector((state) => state.auth.token)
  const [choosePayment, setChoosePayment] = React.useState(1)
  const doPayment = async(p) => {
    p.preventDefault()
    const {reservationId} = state
    const form = new URLSearchParams({
      reservationId,
      paymentMethodId: choosePayment 
    }).toString()
    console.log(form)
    const {data} = await http(token).post("/payment" ,form)
    if(data) {
      navigate("/my-booking", {replace: true})
    }
  }
  return (
    <>
      <div>
        <Header />
      </div>
      <div className='flex flex-col'>
        <main>
          <form onSubmit={doPayment} className='flex flex-col md:flex-row justify-center gap-5 bg-white px-7 md:px-12 py-[70px] md:mx-24 md:mt-16 md:rounded-3xl text-sm'>
            <section className='w-full md:w-[50%]'>
              <div className='font-bold text-xl tracking-[1px] mb-12'>
                Payment Method
              </div>
              <div className='flex items-center gap-2 mb-4 '>
                <input type='radio' value='1' onChange={(p) => setChoosePayment(p.target.value)} name='change-payment' defaultChecked='1' />
                <div>
                  <i>
                    <BsCreditCardFill size={25} />
                  </i>
                </div>
                <label className='flex justify-between w-full' htmlFor='card'>Card</label>
                <div>
                  <i>
                    <FiChevronUp size={20} />
                  </i>
                </div>
              </div>
              <div className='flex justify-center items-center gap-3.5 mb-4'>
                <img src={visacard} alt='' />
                <div className='min-w-[60px] w-[60px] h-[60px] border-dashed border-2 border-[#4c3f91] flex items-center justify-center rounded-2xl text-[#4c3f91] text-[36px]'>
                  <a href='#'>+</a>
                </div>
              </div>
              <div className='flex  items-center gap-4 mb-4'>
                <input type='radio' value='2' onChange={(p) => setChoosePayment(p.target.value)} name='change-payment' />
                <div>
                  <i className='text-[#FC1055]'>
                    <BsBank2 size={25} />
                  </i>
                </div>
                <label className='flex justify-between w-full' htmlFor='bank'>Bank Transfer</label>
                <div>
                  <i>
                    <FiChevronDown size={20} />
                  </i>
                </div>
              </div>
              <div className='flex items-center gap-4 mb-4'>
                <input type='radio' value='3' onChange={(p) => setChoosePayment(p.target.value)} name='change-payment' />
                <div>
                  <i className='text-[#FF8900]'>
                    <IoStorefront size={25} />
                  </i>
                </div>
                <label className='flex justify-between w-full' htmlFor='retail'>Retail</label>
                <div>
                  <i>
                    <FiChevronDown size={20} />
                  </i>
                </div>
              </div>
              <div className='flex items-center gap-4 mb-4'>
                <input type='radio' value='4' onChange={(p) => setChoosePayment(p.target.value)} name='change-payment' />
                <div>
                  <i className='text-[#3366FF]'>
                    <FaDollarSign size={25} />
                  </i>
                </div>
                <label className='flex justify-between w-full' htmlFor='e-money'>E-Money</label>
                <div>
                  <i className=''>
                    <FiChevronDown size={20} />
                  </i>
                </div>
              </div>
            </section>
            <section className='w-full md:w-[50%]'>
              <div className='font-bold text-xl tracking-[1px] mb-12'>
                Ticket Detail
              </div>
              <div className='flex justify-between'>
                <div>
                  Event
                </div>
                <div className='text-[#FD841F]'>
                  {state.eventName}
                </div>
              </div>
              <div className='flex justify-between mb-4'>
                <div>
                  Ticket Section
                </div>
                <div className='text-[#FD841F]'>
                  {state.sectionName}
                </div>
              </div>
              <div className='flex justify-between mb-4'>
                <div>
                  Quantity
                </div>
                <div className='text-[#FD841F]'>
                  {state.quantity}
                </div>
              </div>
              <div className='flex justify-between mb-12'>
                <div>
                  Total Payment
                </div>
                <div className='text-[#FD841F]'>
                  IDR{state.totalPayment}
                </div>
              </div>
              <div>
                <div>
                  <button type='submit' className='w-full h-14 border border-1 rounded-lg bg-[#FD841F] shadow-lg shadow-orange-500/50 text-white'>
                    Payment
                  </button>
                </div>
              </div>
            </section>
          </form>
        </main>
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default Payment
