import Header from '../components/Header'
import Footer from '../components/Footer'

const Payment = () => {
    return (
        <>
            <div>
                <Header />
            </div>
            <div className='flex flex-col'>
                <main>
                    <div className='flex flex-col md:flex-row justify-center gap-5 bg-white px-7 md:px-12 py-[70px] md:mx-24 md:mt-16 md:rounded-3xl text-sm'>
                        <section className='w-full md:w-[50%]'>
                            <div className='font-bold text-xl tracking-[1px] mb-12'>
                                Payment Method
                            </div>
                            <div className='flex items-center gap-4 mb-4 '>
                                <input type='radio' id='card' name='card' />
                                <img src='/assets/icon-card.png' alt='card' />
                                <label className='flex justify-between w-full' htmlFor='card'>Card<i data-feather='chevron-up'></i></label>
                            </div>
                            <div className='flex justify-center items-center gap-3.5 mb-4'>
                                <img className='w-[70%]' src='/assets/visa.png' alt='visa' />
                                <div className='border border-dashed border-[#FD841F] w-6 h-6 flex justify-center items-center'>
                                    <img src='/assets/plus.png' alt='plus' />
                                </div>
                            </div>
                            <div className='flex  items-center gap-4 mb-4'>
                                <input type='radio' id='bank' name='bank' />
                                <img src='/assets/icon-bank.png' alt='bank' />
                                <label className='flex justify-between w-full' htmlFor='bank'>Bank Transfer<i data-feather='chevron-down'></i></label>
                            </div>
                            <div className='flex items-center gap-4 mb-4'>
                                <input type='radio' id='retail' name='retail' />
                                <img src='/assets/icon-retail.png' alt='retail' />
                                <label className='flex justify-between w-full' htmlFor='retail'>Retail<i data-feather='chevron-down'></i></label>
                            </div>
                            <div className='flex items-center gap-4 mb-4'>
                                <input type='radio' id='e-money' name='e-money' />
                                <img src='/assets/icon-dolar.png' alt='retail' />
                                <label className='flex justify-between w-full' htmlFor='e-money'>E-Money<i data-feather='chevron-down'></i></label>
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
                                    Sights & Sounds Exhibition
                                </div>
                            </div>
                            <div className='flex justify-between mb-4'>
                                <div>
                                    Ticket Section
                                </div>
                                <div className='text-[#FD841F]'>
                                    VIP
                                </div>
                            </div>
                            <div className='flex justify-between mb-4'>
                                <div>
                                    Quantity
                                </div>
                                <div className='text-[#FD841F]'>
                                    2
                                </div>
                            </div>
                            <div className='flex justify-between mb-12'>
                                <div>
                                    Total Payment
                                </div>
                                <div className='text-[#FD841F]'>
                                    $70
                                </div>
                            </div>
                            <div>
                                <div>
                                    <button className='w-full h-14 border border-1 rounded-lg bg-[#FD841F] shadow-lg shadow-orange-500/50 text-white'>Payment</button>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}

export default Payment