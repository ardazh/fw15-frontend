import Header from "../components/Header"
import Footer from "../components/Footer"
import sketch from "../assets/img/sketch.png"

import {BiSort} from "react-icons/bi"
import { IoTicket } from "react-icons/io5"
import { HiPlus, HiMinus } from "react-icons/hi"
import React from "react"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import http from "../helpers/http"

const Booking = () => {
  const {id: eventId } = useParams()
  const navigate = useNavigate()
  const [section, setSection] = React.useState([])
  const [filledSection, setFilledSection] = React.useState({
    id: 0,
    quantity: 0,
  })
  const token = useSelector((state) => state.auth.token)

  const increment = (id) => {
    if (filledSection.quantity >= 2) {
      setFilledSection({ id, quantity: 2 })
    } else {
      setFilledSection({ id, quantity: filledSection.quantity + 1 })
    }
  }
  const decrement = (id) => {
    if (filledSection.quantity <= 0) {
      setFilledSection({ id, quantity: 0 })
    } else {
      setFilledSection({ id, quantity: filledSection.quantity - 1 })
    }
  }
  console.log(filledSection)
  React.useEffect(() => {
    const getSection = async () => {
      const {data} = await http(token).get("/section")
      setSection(data.results)
    }
    getSection()
  }, [token])

  const doBooking = async () => {
    const form = new URLSearchParams({
      eventId,
      sectionId: filledSection.id,
      quantity: filledSection.quantity
    }).toString()

    const {data} = await http(token).post("/reservations", form)
    // console.log(data.results)
    // return
    navigate("/payment", {
      state: {
        eventId,
        eventName: data.results.events.title,
        reservationId: data.results.id,
        sectionName: data.results.sectionName,
        quantity: data.results.quantity,
        totalPayment: data.results.totalPrice 
      },
      replace: true
    })
  }

  const selectedSection = filledSection && section.filter((item) => item.id === filledSection.id)[0]
  return (
    <>
      <div>
        <Header />
      </div>
      <main className='flex flex-col items-center md:mt-16'>
        <div className='w-100% md:w-[95%] lg:w-[75%]'>
          <div className='flex flex-col md:flex-row justify-start lg:gap-11 bg-white md:rounded-3xl w-full px-7 lg:px-12 py-12'>
            <section className='w-full lg:w-[40%] h-[85%] '>
              <div className='w-full'>
                <img src={sketch} alt='sketch' />
              </div>
            </section>
            <section className='w-full lg:w-[60%]'>
              <div className='flex items-center justify-between mb-14'>
                <div className='text-xl tracking-[1px] font-bold'>
                      Tickets
                </div>
                <div className='flex justify-center items-center gap-3.5 text-xs '>
                  <div className='text-[#FC1055]'>
                        BY PRICE
                  </div>
                  <div className='flex justify-center items-center w-[45px] h-[45px] rounded-[5px] bg-[#FFF] shadow-md'>
                    <i className='text-[#3366FF]'>
                      <BiSort size={27} />
                    </i>
                  </div>
                </div>
              </div>
              {section.map((item) => (
                <div className='flex flex-col gap-7 w-full' key={`section-select-${item.id}`}>
                  <div className='flex items-start justify-start gap-4 w-full'>
                    <div className='w-[50px]'>
                      <i className='text-[#f54242]'>
                        <IoTicket size={27} />
                      </i>
                    </div>
                    <div className='flex flex-col gap-2.5 w-[60%]'>
                      <div className='text-sm font-bold tracking-[2px]'>
                           SECTION {item.name}, ROW 1
                      </div>
                      <div className='text-xs font-medium text-[#BDC0C4]'>
                          12 Seats available
                      </div>
                      <div className=''>
                          Quantity
                      </div>
                    </div>
                    <div className='flex justify-end w-[30%]'>
                      <div className='flex flex-col items-center gap-2.5'>
                        <div className='font-bold'>
                            IDR{item.price}
                        </div>
                        <div className='text-xs font-medium text-[#BDC0C4]'>
                            per person
                        </div>
                        <div className='flex gap-5'>
                          <button onClick={() => decrement(item.id)} className='border-2 rounded-md'>
                            <i className='text-[#C1C5D0]'>
                              <HiMinus size={17} />
                            </i>
                          </button>
                          <div className='text-xs text-[#373a42] font-semibold tracking-[1px] capitalize mt-2'>{item.id === filledSection.id ? filledSection.quantity : 0}</div>
                          <button onClick={() => increment(item.id)} className='border-2 rounded-md'>
                            <i className='text-[#C1C5D0]'>
                              <HiPlus size={17} />
                            </i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div>
                <div className='flex justify-between tracking-[0.5px] mb-4'>
                  <div className='text-sm font-bold'>
                    Ticket Section
                  </div>
                  <div className='text-sm text-[#FD841F] tracking-[0.5px]'>
                    {selectedSection?.name || "-"}
                  </div>
                </div>
              </div>
              <div>
                <div className='flex justify-between tracking-[0.5px] mb-4'>
                  <div className='text-sm font-bold'>
                    Quantity
                  </div>
                  <div className='text-sm text-[#FD841F] tracking-[0.5px]'>
                    {filledSection?.quantity}
                  </div>
                </div>
              </div>
              <div>
                <div className='flex justify-between tracking-[0.5px] mb-12'>
                  <div className='text-sm font-bold'>
                    Total Payment
                  </div>
                  <div className='text-sm text-[#FD841F] tracking-[0.5px]'>
                    {selectedSection?.price * filledSection?.quantity || "0"}
                  </div>
                </div>
              </div>
              <div className='self-center'>
                <div>
                  <button onClick={doBooking} className='w-full md:max-w-full lg:max-w-[350px] h-14 border border-1 rounded-lg bg-[#FD841F] shadow-lg shadow-orange-500/50'>Checkout</button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default Booking
