import Header from "../components/Header"
import Footer from "../components/Footer"
import picture from "../assets/img/picture.png"
import { FaSearch, FaMapMarkerAlt, FaArrowRight, FaArrowLeft } from "react-icons/fa"
import { GoPrimitiveDot } from "react-icons/go"
import { HiOutlineMinus } from "react-icons/hi"
import React from "react"
import moment from "moment"
import http from "../helpers/http"
import { Link } from "react-router-dom"


const Home = () => {
  const [events, setEvents] = React.useState([])
  const [cities, setCities] = React.useState([])
  const [categories, setCategories] = React.useState([])
  const [eventCategories, setEventCategories] = React.useState([])
  const [partners, setPartners] = React.useState([])
  async function getDataEventCategory(name) {
    const { data } = await http().get("/events?limit=3", { params: { searchCategory: name } })
    setEventCategories(data.results)
  }
  React.useEffect(() => {
    async function getData() {
      const { data } = await http().get("/events")
      setEvents(data.results)
    }
    getData()
    getDataEventCategory()

    async function getDataCities() {
      const { data } = await http().get("/city")
      setCities(data.results)
    }
    getDataCities()

    async function getPartners() {
      const { data } = await http().get("/partners")
      setPartners(data.results)
    }
    getPartners()

    async function getDataCategory() {
      const { data } = await http().get("/category")
      setCategories(data.results)
    }
    getDataCategory()
  }, [])
  return (
    <>
      <div className='h-screen bg-primary'>
        <div>
          <Header />
        </div>
        <div className="flex flex-col bg-primary bg-[url('/src/assets/img/bubble.png')] bg-no-repeat bg-cover w-full h-full">
          <div className='flex-1 flex justify-center gap-48'>
            <div className='flex flex-col justify-center items-center pl-10'>
              <div className='text-white text-6xl tracking-normal tracking-wide ml-8'>
                                Find events you love with our
              </div>
              <div className='flex justify-center items-center gap-4 bg-white w-[600px] h-[75px] rounded-2xl overflow-hidden'>
                <i> <FaSearch /> </i>
                <input className=' bg-white border-none outline-none' type='text' placeholder='Search Event...' />
                <i> <FaMapMarkerAlt /> </i>
                <input className=' bg-white border-none outline-none' type='text' placeholder='Where?' />
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
            <button className='flex justify-center rounded-lg items-center bg-white h-11 w-11 hover:bg-secondary hover:text-white'>
              <i className='text-[#C1C5D0] hover:text-white'>
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
            <button className='flex justify-center rounded-lg items-center bg-white h-11 w-11 hover:bg-secondary hover:text-white'>
              <i className='text-[#C1C5D0] hover:text-white'>
                <FaArrowRight size={25} />
              </i>
            </button>
          </div>
          <div className='flex justify-end items-center w-full '>
            <div className='flex flex-end gap-5 w-[95%] scrollbar-hide overflow-scroll overflow-y-hidden object-cover '>
              {events.map(event => {
                return (
                  <Link to={`/detail-events/${event.id}`} key={`event-${event.id}`}>
                    <div>
                      <div className='overflow-hidden rounded-3xl w-[260px] h-[350px] mt-14 relative bg-green-400' >
                        {/* <img className='w-full h-full object-cover' src={`http://localhost:8888/uploads/${event.picture}`} /> */}
                        {event?.picture && (
                          <img className='w-full h-full object-cover' src={event.picture.startsWith("https") ? event.picture : `${import.meta.env.VITE_BACKEND_URL}/uploads/${event.picture}`} alt='' />
                        )}
                        <div>
                          <div className='absolute bottom-0 text-white flex flex-col gap-5 p-5 bg-gradient-to-t from-[#000000] from-5%'>
                            <div>{moment(event.date).format("LLLL")}</div>
                            <div className='font-bold text-2xl tracking-wide'>{event.title}</div>
                            <div className='flex'>
                              <div className='w-12 h-12 rounded-full overflow-hidden border-2 -ml-2'>
                                <img className='object-cover w-full h-full' src='https://i.pravatar.cc/28' alt='profile1' />
                              </div>
                              <div className='w-12 h-12 rounded-full overflow-hidden border-2 -ml-2'>
                                <img className='object-cover w-full h-full' src='https://i.pravatar.cc/28' alt='profile2' />
                              </div>
                              <div className='w-12 h-12 rounded-full overflow-hidden border-2 -ml-2'>
                                <img className='object-cover w-full h-full' src='https://i.pravatar.cc/28' alt='profile3' />
                              </div>
                              <div className='w-12 h-12 rounded-full overflow-hidden border-2 -ml-2'>
                                <img className='object-cover w-full h-full' src='https://i.pravatar.cc/28' alt='profile4' />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
          <div className='flex justify-center items-center text-white mt-[17px]'>
            <button className='btn btn-secondary w-[170px] h-8 bg-[#FD841F] rounded-xl outline-none text-sm text-white hover:bg-primary'>
                            See All
            </button>
          </div>
          <div className='px-12'>
            <div className="bg-[#FFE15D] mt-44 px-[68px] py-[74px] border rounded-3xl bg-[url('/src/assets/img/bubble.png')] bg-no-repeat bg-cover">
              <div className='bg-[#FD841F] mt-11 w-40 h-[30px] flex justify-center items-center rounded-full'>
                <div className='flex justify-center items-center rounded-full border-none outline-none text-white bg-orange-400 border h-7 w-[150px] gap-3'>
                  <i>
                    <HiOutlineMinus size={50} />
                  </i>
                  <div>
                                        LOCATION
                  </div>
                </div>
              </div>
              <div className='h-[580px] lg:h-auto overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 lg:gap-12 xl:gap-16'>
                <div>
                  <div className='text-4xl flex flex-col tracking-wide w-[214px] mt-6 py-1 tracking-wide'>
                                        Discover<br /> Events<br /> Near You<br />
                  </div>
                </div>
                {cities.map((city) => {
                  return (
                    <React.Fragment key={`cities-${city.id}`}>
                      <div className='flex flex-col items-center gap-[15px] font-medium text-base leading-6 tracking-[1px] text-white' >
                        {/* <img src={`http://localhost:8888/uploads/${city.picture}`} alt='jakarta' /> */}
                        {city?.picture && (
                          <img className='w-full h-full object-cover' src={city.picture.startsWith("https") ? city.picture : `${import.meta.env.VITE_BACKEND_URL}/uploads/${city.picture}`} alt='' />
                        )}
                        <div className='capitalize'>{city.name}</div>
                      </div>
                    </React.Fragment>
                  )
                })}
              </div>
              <div className='flex justify-center mt-[89px] mb-[73px] '>
                <button className='btn w-[170px] h-8 bg-white rounded-xl text-sm hover:bg-secondary hover:text-white hover:border-secondary'>
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
                    <button onClick={() => getDataEventCategory(category.name)} className='hover:text-primary hover:border-b-2 hover:border-primary'>
                      {category.name}
                    </button>
                  </div>
                )
              })}
            </div>
            <div className='flex gap-5 mt-12'>
              {eventCategories.map((event) => {
                return (
                  <Link to={`/detail-events/${event.id}`} key={`event-category-${event.id}`}>
                    <div>
                      <div className='overflow-hidden rounded-3xl w-64 h-52 mt-14 relative bg-green-400'>
                        {/* <img className='w-full h-full object-cover' src={`http://localhost:8888/uploads/${event.picture}`} /> */}
                        {event?.picture && (
                          <img className='w-full h-full object-cover' src={event.picture.startsWith("https") ? event.picture : `${import.meta.env.VITE_BACKEND_URL}/uploads/${event.picture}`} alt='' />
                        )}
                        <div>
                          <div className='absolute bottom-0 text-white flex flex-col gap-3 p-5 bg-gradient-to-t from-[#000000] from-5%'>
                            <div>{moment(event.date).format("LLLL")}</div>
                            <div className='font-bold text-xs tracking-wide'>{event.title}</div>
                            <div className='flex'>
                              <div className='w-8 h-8 rounded-full overflow-hidden border-2 -ml-2'>
                                <img className='object-cover w-full h-full' src='https://i.pravatar.cc/28' alt='profile1' />
                              </div>
                              <div className='w-8 h-8 rounded-full overflow-hidden border-2 -ml-2'>
                                <img className='object-cover w-full h-full' src='https://i.pravatar.cc/28' alt='profile2' />
                              </div>
                              <div className='w-8 h-8 rounded-full overflow-hidden border-2 -ml-2'>
                                <img className='object-cover w-full h-full' src='https://i.pravatar.cc/28' alt='profile3' />
                              </div>
                              <div className='w-8 h-8 rounded-full overflow-hidden border-2 -ml-2'>
                                <img className='object-cover w-full h-full' src='https://i.pravatar.cc/28' alt='profile4' />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              })}
              {eventCategories.length < 1 && (
                <div className='texts-center font-bold text-3xl'>
                                    No Events Available
                </div>
              )}
            </div>
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
            <div className='font-semibold text-4xl tracking-[1px] mt-6 text-[#FFFFFF]'>
                            Our Trusted Partners
            </div>
            <div className='text-xs tracking-[0.5px] mt-3.5 text-[#C1C5D0]'>
                            By companies like :
            </div>
            <div className='flex gap-16'>
              {partners.map(partner => {
                return (
                  <React.Fragment key={`partners-${partner.id}`}>
                    <div className='flex justify-center items-center gap-16 mt-12 mb-24'>
                      {/* <img src={`http://localhost:8888/uploads/${partner.picture}`} alt='sponsor1' /> */}
                      {partner?.picture && (
                        <img className='w-full h-full object-cover' src={partner.picture.startsWith("https") ? partner.picture : `${import.meta.env.VITE_BACKEND_URL}/uploads/${partner.picture}`} alt='' />
                      )}
                    </div>
                  </React.Fragment>
                )
              })}
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div >
    </>
  )
}

export default Home
