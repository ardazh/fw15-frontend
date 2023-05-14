import Header from '../components/Header'
import Footer from '../components/Footer'
import sketch from '../assets/img/sketch.png'


const Booking = () => {
    return (
        <>
            <div>
                <Header />
            </div>
            <main className='flex flex-col items-center md:mt-16'>
                <div className='w-100% md:w-[95%] lg:w-[75%]'>
                    <div className='flex flex-col md:flex-row justify-start lg:gap-11 bg-white md:rounded-3xl w-full px-7 lg:px-12 py-12'>
                        <section className='w-full lg:w-[40%] h-[70%] '>
                            <div className='w-full'>
                                <img src={sketch} alt='sketch' />
                            </div>
                            <div>

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
                                    <div className='w-6 h-6'>
                                        <img src='/assets/filter-price.png' alt='filter-price' />
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-7 w-full'>
                                <div className='flex items-start justify-start gap-4 w-full'>
                                    <div className='w-[50px]'>
                                        <img src='/assets/row1.png' alt='row1' />
                                    </div>
                                    <div className='flex flex-col gap-2.5 w-[60%]'>
                                        <div className='text-sm font-bold tracking-[2px]'>
                                            SECTION REG, ROW 1
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
                                                $15
                                            </div>
                                            <div className='text-xs font-medium text-[#BDC0C4]'>
                                                per person
                                            </div>
                                            <div className='flex gap-5'>
                                                <div className='border border-2 rounded-md'>
                                                    <img src='/assets/minus.png' alt='minus' />
                                                </div>
                                                <p>0</p>
                                                <div className='border border-2 rounded-md'>
                                                    <img src='/assets/plus.png' alt='plus' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-start justify-start gap-4 w-full'>
                                    <div className='w-[50px]'>
                                        <img src='/assets/row1.png' alt='row1' />
                                    </div>
                                    <div className='flex flex-col gap-2.5 w-[60%]'>
                                        <div className='text-sm font-bold tracking-[2px]'>
                                            SECTION REG, ROW 1
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
                                                $15
                                            </div>
                                            <div className='text-xs font-medium text-[#BDC0C4]'>
                                                per person
                                            </div>
                                            <div className='flex gap-5'>
                                                <div className='border border-2 rounded-md'>
                                                    <img src='/assets/minus.png' alt='minus' />
                                                </div>
                                                <p>0</p>
                                                <div className='border border-2 rounded-md'>
                                                    <img src='/assets/plus.png' alt='plus' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-start justify-start gap-4 w-full'>
                                    <div className='w-[50px]'>
                                        <img src='/assets/row1.png' alt='row1' />
                                    </div>
                                    <div className='flex flex-col gap-2.5 w-[60%]'>
                                        <div className='text-sm font-bold tracking-[2px]'>
                                            SECTION REG, ROW 1
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
                                                $15
                                            </div>
                                            <div className='text-xs font-medium text-[#BDC0C4]'>
                                                per person
                                            </div>
                                            <div className='flex gap-5'>
                                                <div className='border border-2 rounded-md'>
                                                    <img src='/assets/minus.png' alt='minus' />
                                                </div>
                                                <p>0</p>
                                                <div className='border border-2 rounded-md'>
                                                    <img src='/assets/plus.png' alt='plus' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className='flex justify-between tracking-[0.5px] mb-4'>
                                    <div className='text-sm font-bold'>
                                        Ticket Section
                                    </div>
                                    <div className='text-sm text-[#FD841F] tracking-[0.5px]'>
                                        VIP
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='flex justify-between tracking-[0.5px] mb-4'>
                                    <div className='text-sm font-bold'>
                                        Quantity
                                    </div>
                                    <div className='text-sm text-[#FD841F] tracking-[0.5px]'>
                                        2
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='flex justify-between tracking-[0.5px] mb-12'>
                                    <div className='text-sm font-bold'>
                                        Total Payment
                                    </div>
                                    <div className='text-sm text-[#FD841F] tracking-[0.5px]'>
                                        $70
                                    </div>
                                </div>
                            </div>
                            <div className='self-center'>
                                <div>
                                    <button className='w-full md:max-w-full lg:max-w-[350px] h-14 border border-1 rounded-lg bg-[#FD841F] shadow-lg shadow-orange-500/50'>Checkout</button>
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