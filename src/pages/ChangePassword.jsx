import Header from "../components/Header"
import Footer from "../components/Footer"

const ChangePassword = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className='flex'>
        <aside className='hidden md:block w-60 mx-16 my-12'>
          <div className='flex gap-3.5 mb-14'>
            <div>
              <div className='inline-block rounded-full p-[2px] bg-gradient-to-r from-cyan-500 to-blue-500'>
                <img className='w-11 h-11 object-cover rounded-full border-2 border-white' src='/assets/profile1.jpg' alt='profile1' />
              </div>
            </div>
            <div>
              <div className='text-sm'>
                                Kim Ji-soo
              </div>
              <div className='text-xs'>
                                Entrepreneur, ID
              </div>
            </div>
          </div>
          <ul>
            <li className='flex gap-7 mb-8 text-sm'><i data-feather='user'></i>Profile</li>
            <li>
              <ul className='ml-7'>
                <li className='flex gap-7 mb-8 text-sm'><i data-feather='credit-card'></i>Card</li>
                <a href='/profile-edit-profile.html'>
                  <li className='flex gap-7 mb-8 text-sm'><i data-feather='edit-3'></i>Edit Profile</li>
                </a>
                <a href='/profile-change-password.html'>
                  <li className='flex gap-7 mb-8 text-sm'><i data-feather='unlock'></i>Change Password</li>
                </a>
              </ul>
            </li>
            <a href='/my-booking.html'>
              <li className='flex gap-7 mb-8 text-sm'><i data-feather='list'></i>My Booking</li>
            </a>
            <a href='/my-wishlist.html'>
              <li className='flex gap-7 mb-8 text-sm'><i data-feather='heart'></i>My Wishlist</li>
            </a>
            <li className='flex gap-7 mb-8 text-sm'><i data-feather='settings'></i>Settings</li>
            <li className='flex gap-7 mb-8 text-sm text-[#F03800]'><i data-feather='log-out'></i>Logout</li>
          </ul>
        </aside>
        <main className='flex-1 my-12 text-sm'>
          <div className='bg-white px-12 py-11 rounded-2xl mr-16 h-[750px]'>
            <div className='text-xl font-bold tracking-wider mb-12 text-2xl'>Change Password</div>
            <form className='flex flex-col gap-8'>
              <div className='flex items-center gap-16'>
                <label className='w-40' htmlFor='old-password'>Old Password</label>
                <input className='flex-1 h-14 px-7 border border-[#C1C5D0] rounded-lg' type='password' name='old-password' id='old-password' placeholder='Input Old Password ...' />
              </div>
              <div className='flex items-center gap-16'>
                <label className='w-40' htmlFor='old-password'>New Password</label>
                <input className='flex-1 h-14 px-7 border border-[#C1C5D0] rounded-lg' type='password' name='old-password' id='old-password' placeholder='Input New Password ...' />
              </div>
              <div className='flex items-center gap-16'>
                <label className='w-40' htmlFor='old-password'>Confirm Password</label>
                <input className='flex-1 h-14 px-7 border border-[#C1C5D0] rounded-lg' type='password' name='old-password' id='old-password' placeholder='Input Confirm Password ...' />
              </div>
              <div>
                <button className='bg-[#FD841F] h-14 w-full rounded-2xl text-white shadow-lg shadow-orange-500/50' type='submit'>Update</button>
              </div>
            </form>
          </div>
        </main>
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default ChangePassword
