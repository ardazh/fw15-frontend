import Header from "../components/Header"
import Footer from "../components/Footer"

const EditProfile = () => {
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
            <div>
                <Footer />
            </div>
        </>
    )
}

export default EditProfile;