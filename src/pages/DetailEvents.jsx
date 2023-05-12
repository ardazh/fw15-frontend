import Header from '../components/Header'
import Footer from '../components/Footer'
import { FiHeart, FiClock, FiMapPin } from 'react-icons/fi'
import { useParams } from 'react-router-dom'
import React from 'react'
import http from '../helpers/http'
import moment from 'moment'

const DetailEvents = () => {
    const { id } = useParams()
    const [eventDetail, setEventDetail] = React.useState({})
    React.useEffect(() => {
        const getEventData = async (id) => {
            const { data } = await http().get(`/events/${id}`)
            setEventDetail(data.results)
        }
        if (id) {
            getEventData(id)
        }
    }, [id])
    return (
        <div>
            <div>
                <Header />
            </div>
            <div className="flex flex-col">
                <main>
                    <div className="flex flex-col md:flex-row justify-center px-7 md:px-12 gap-10 bg-white py-14 mx-0 sm:mx-12 md:mx-24 md:mt-16 md:rounded-3xl">
                        <section className="flex flex-col gap-12 justify-start items-center w-full md:w-[40%]">
                            <div className="rounded-3xl overflow-hidden ">
                                <img src={`http://localhost:8888/uploads/${eventDetail?.picture}`} alt="picture1" />
                            </div>
                            <div className="flex justify-center gap-2">
                                <div>
                                    <i>
                                        <FiHeart size={20} />
                                    </i>
                                </div>
                                <div className="text-xl tracking-[1px]">
                                    Add to Wishlist
                                </div>
                            </div>
                        </section>
                        <section className="w-full md:w-[60%]">
                            <div className="text-2xl tracking-[2px] mb-7">
                                {eventDetail?.title}
                            </div>
                            <div className="flex justify-between gap-3 text-sm font-medium tracking-[1px] mb-7 lg:max-w-[70%]">
                                <div className="flex gap-2">
                                    <div>
                                        <i>
                                            <FiMapPin size={20} />
                                        </i>
                                    </div>
                                    <div>
                                        {eventDetail?.location}
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <div>
                                        <i>
                                            <FiClock size={20} />
                                        </i>
                                    </div>
                                    <div>
                                        {moment(eventDetail.date).format('LLLL')}
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3 mb-12">
                                <div className="text-sm font-medium tracking-[0.5px]">
                                    Attendees
                                </div>
                                <div className="flex">
                                    <div className="w-7 h-7 rounded-full overflow-hidden border-2 -ml-2">
                                        <img className="object-cover w-full h-full" src="https://i.pravatar.cc/28" alt="profile1" />
                                    </div>
                                    <div className="w-7 h-7 rounded-full overflow-hidden border-2 -ml-2">
                                        <img className="object-cover w-full h-full" src="https://i.pravatar.cc/28" alt="profile2" />
                                    </div>
                                    <div className="w-7 h-7 rounded-full overflow-hidden border-2 -ml-2">
                                        <img className="object-cover w-full h-full" src="https://i.pravatar.cc/28" alt="profile3" />
                                    </div>
                                    <div className="w-7 h-7 rounded-full overflow-hidden border-2 -ml-2 relative">
                                        <div className="absolute w-full h-full bg-[rgba(255,225,93,0.5)] text-[10px]">+99</div>
                                        <img className="object-cover w-full h-full" src="https://i.pravatar.cc/28" alt="profile4" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3.5 mb-6">
                                <div className="text-xl tracking-[1px]">
                                    Event Detail
                                </div>
                                <div className="text-xs font-normal text-[#373A42BF] max-w-[462px]">
                                    {eventDetail?.descriptions}
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
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default DetailEvents;