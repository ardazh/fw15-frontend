import Header from '../components/Header'
import Footer from '../components/Footer'

const ChangePassword = () => {
    return (
        <>
            <div>
                <Header />
            </div>
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
                <main className="flex-1 my-12 text-sm">
                    <div className="bg-white px-12 py-11 rounded-2xl mr-16 h-[750px]">
                        <div className="flex justify-between">
                            <div className="text-xl font-bold tracking-wider mb-12 text-xl">My Booking</div>
                            <div className="flex justify-center items-center border-2 w-[125px] h-12 bg-[#FFE15D] rounded-xl gap-4 text-[#F49D1A]"><i data-feather="calendar"></i>March</div>
                        </div>
                        <div className="flex justify-center items-center">
                            <div className="flex flex-col justify-center items-center mt-60">
                                <div className="text-xl tracking-[1px]">
                                    No tickets bought
                                </div>
                                <div className="flex justify-center text-center text-sm text-[#B3B8B8] w-80 h-[62px] tracking-[0.5px] gap-5">
                                    It appears you haven’t bought any tickets yet. Maybe try searching these?
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}

export default ChangePassword;