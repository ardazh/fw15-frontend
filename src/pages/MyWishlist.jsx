import Header from "../components/Header"
import Footer from "../components/Footer"
import Sidebar from "../components/Sidebar"
import React from "react"
import http from "../helpers/http"
import { useSelector } from "react-redux"
import moment from "moment"
import { FiHeart } from "react-icons/fi"

const MyWishlist = () => {
  const [myWishlist, setMyWishlist] = React.useState([])
  const token = useSelector(state => state.auth.token)

  const getWishlist = React.useCallback( async () => {
    const {data} = await http(token).get("/wishlists")
    setMyWishlist(data.results)
  },[token]
  )

  React.useEffect(() => {
    if(token){
      getWishlist()
    }
  }, [token, getWishlist])

  const addRemoveWishlist = async (eventId) => {
    try{
      const id = {eventId: eventId}
      const qString = new URLSearchParams(id).toString()
      const {data} = await http(token).post("/wishlists", qString)
      if(data.results){
        getWishlist()
      }
    }catch (err) {
      const message = err?.response?.data?.message
      if(message){
        console.log(message)
      }
    }
  }

  return (
    <div className='bg-[#F4F7FF]'>
      <div>
        <Header />
      </div>
      <main className='flex'>
        <Sidebar />
        <div className='flex-1 my-12'>
          <div className='bg-white px-9 lg:px-12 py-9 lg:py-11 rounded-2xl md:min-h-[650px]'>
            <div className='flex mb-7'>
              <div className='font-bold tracking-wider text-xl'>My Wishlist</div>
            </div>
            {myWishlist.map((wishlist) =>{
              return(
                <div className='flex items-center justify-start gap-6 border-b-2 py-7' key={`my-key-${wishlist?.id}`}>
                  <div className='flex flex-col items-center justify-center gap-[5px]'>
                    <div className='w-[50px] h-[75px] flex flex-col items-center justify-center rounded-2xl bg-white shadow-lg'>
                      <div className='text-[#FF8900] font-semibold text-sm'>
                        {moment(wishlist?.date).format("DD")}
                      </div>
                      <div className='font-medium text-xs'>
                        {moment(wishlist?.date).format("LLLL").slice(0, 3)}
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col items-start justify-start text-[#373A42] gap-[5px] w-full'>
                    <div className='text-2xl font-semibold tracking-[2px] mb-4 capitalize'>
                      {wishlist?.title}
                    </div>
                    <div className='text-xs tracking-[0.5px] capitalize'>
                      {wishlist?.location}
                    </div>
                    <div className='text-xs tracking-[0.5px]'>
                      {moment(wishlist?.date).format("LLLL")}
                    </div>
                    <div className='text-xs traacking-[0.5px] text-[#FD841F]'>
                      <a href='#'>Detail</a>
                    </div>
                  </div>
                  <div className=''>
                    <div className='flex items-center justify-center h-[50px] w-[50px] text-[#FD841F]'>
                      <button onClick={() => addRemoveWishlist(wishlist?.eventId)}>
                        <i className=''>
                          <FiHeart size={25} />
                        </i>
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
            <div>
              {myWishlist.length < 1 && (
                <div className=' h-full flex flex-col items-center justify-center gap-7 '>
                  <div className='font-semibold text-2xl text-secondary'>No Wishlist Found</div>
                  <div className='font-medium text base max-w-[300px] text-center'>It seems that you haven&apos;t added any wishlists yet. Maybe try looking for this?</div>
                </div>
              )}
            </div>
            {/* <div className='flex mb-12'>
              <div className='flex flex-col mr-6'>
                <div className='text-center text-[#FF8900] text-sm'>
                                    15
                </div>
                <div className='font-medium text-xs'>
                                    Wed
                </div>
              </div>
              <div className='flex flex-col mr-[350px]'>
                <div className='text-2xl tracking-[2px] w-96 -mt-6 mb-4'>
                                    Sights & Sounds Exhibition
                </div>
                <div className='font-normal text-xs text-[#373A42BF]'>
                  <div>
                                        Jakarta, Indonesia
                  </div>
                  <div>
                                        Wed, 15 Nov, 4:00 PM
                  </div>
                </div>
              </div>
              <div className='w-6 h-6 flex'>
                <img src='/assets/heart.png' alt='heart' />
              </div>
            </div>
            <div className='flex mb-12'>
              <div className='flex flex-col mr-6'>
                <div className='text-center text-[#FF8900] text-sm'>
                                    15
                </div>
                <div className='font-medium text-xs'>
                                    Wed
                </div>
              </div>
              <div className='flex flex-col mr-[350px]'>
                <div className='text-2xl tracking-[2px] w-96 -mt-6 mb-4'>
                                    Sights & Sounds Exhibition
                </div>
                <div className='font-normal text-xs text-[#373A42BF]'>
                  <div>
                                        Jakarta, Indonesia
                  </div>
                  <div>
                                        Wed, 15 Nov, 4:00 PM
                  </div>
                </div>
              </div>
              <div className='w-6 h-6 flex'>
                <img src='/assets/heart.png' alt='heart' />
              </div>
            </div>
            <div className='flex mb-12'>
              <div className='flex flex-col mr-6'>
                <div className='text-center text-[#FF8900] text-sm'>
                                    15
                </div>
                <div className='font-medium text-xs'>
                                    Wed
                </div>
              </div>
              <div className='flex flex-col mr-[350px]'>
                <div className='text-2xl tracking-[2px] w-96 -mt-6 mb-4'>
                                    Sights & Sounds Exhibition
                </div>
                <div className='font-normal text-xs text-[#373A42BF]'>
                  <div>
                                        Jakarta, Indonesia
                  </div>
                  <div>
                                        Wed, 15 Nov, 4:00 PM
                  </div>
                </div>
              </div>
              <div className='w-6 h-6 flex'>
                <img src='/assets/heart.png' alt='heart' />
              </div>
            </div>
            <div className='flex mb-12'>
              <div className='flex flex-col mr-6'>
                <div className='text-center text-[#FF8900] text-sm'>
                                    15
                </div>
                <div className='font-medium text-xs'>
                                    Wed
                </div>
              </div>
              <div className='flex flex-col mr-[350px]'>
                <div className='text-2xl tracking-[2px] w-96 -mt-6 mb-4'>
                                    Sights & Sounds Exhibition
                </div>
                <div className='font-normal text-xs text-[#373A42BF]'>
                  <div>
                                        Jakarta, Indonesia
                  </div>
                  <div>
                                        Wed, 15 Nov, 4:00 PM
                  </div>
                </div>
              </div>
              <div className='w-6 h-6 flex'>
                <img src='/assets/heart.png' alt='heart' />
              </div>
            </div> */}
          </div>
        </div>
      </main>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default MyWishlist
