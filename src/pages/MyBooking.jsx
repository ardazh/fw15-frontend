import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { useSelector } from "react-redux";
import React from "react";
import http from "../helpers/http";
import { FiCalendar } from "react-icons/fi";
import moment from "moment";
import { Helmet } from "react-helmet";

const MyBooking = () => {
  const [myBooking, setMyBooking] = React.useState([]);
  const token = useSelector((state) => state.auth.token);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPage, setTotalPage] = React.useState("");

  React.useEffect(() => {
    async function getEventByMe() {
      const { data } = await http(token).get(
        `/history?page=${currentPage}&limit=4&sort=id&sortBy=DESC`
      );
      setTotalPage(data.totalPage);
      setMyBooking(data.results);
    }
    if (token) {
      getEventByMe();
    }
  }, [token, setMyBooking, currentPage]);
  console.log(myBooking);

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage + 1 <= totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    <>
      <div>
        <Helmet>
          <title>My Booking | OnceTicket</title>
        </Helmet>
      </div>
      <div className="bg-[#F4F7FF]">
        <div>
          <Header />
        </div>
        <div className="flex">
          <Sidebar />
          <main className="p-8 w-full">
            <div className="flex flex-col p-8 rounded-md bg-white min-h-[900px] w-full relative">
              <div className="flex justify-between">
                <div className="font-bold tracking-wider mb-12 text-xl">
                  My Booking
                </div>
                <div className="flex justify-center items-center border-2 w-[125px] h-12 bg-[#FFE15D] rounded-xl gap-4 text-[#F49D1A]">
                  <i>
                    <FiCalendar size={25} />
                  </i>
                  March
                </div>
              </div>
              <div className="flex flex-col">
                {myBooking.map((booking) => {
                  return (
                    <>
                      <div
                        className="flex items-center justify-start gap-6 border-b-2 py-7"
                        key={`reservation-${booking.id}`}
                      >
                        <div className="flex flex-col items-center justify-center gap-3">
                          <div className="w-[50px] h-[75px] flex flex-col items-center justify-center rounded-2xl bg-white shadow-lg">
                            <div className="text-sm font-semibold text-[#FF8900]">
                              {moment(booking?.date).format("DD")}
                            </div>
                            <div className="text-xs font-medium text-[#C1C5D0]">
                              {moment(booking?.date).format("LLLL").slice(0, 3)}
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start text-[#373A42] gap-[5px]">
                          <div className="text-2xl font-semibold tracking-[2px] mb-3.5 capitalize">
                            {booking?.title}
                          </div>
                          <div className="text-xs tracking-[0.5px] capitalize">
                            {booking?.location}, Indonesia
                          </div>
                          <div className="text-xs tracking-[0.5px]">
                            {moment(booking?.date).format("LLLL")}
                          </div>
                          <div className="text-xs traacking-[0.5px] text-[#FD841F]">
                            <a href="#">Detail</a>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
              <div>
                {myBooking.length < 1 && (
                  <div className="flex flex-col justify-center items-center mt-60">
                    <div className="text-xl tracking-[1px]">
                      No tickets bought
                    </div>
                    <div className="flex justify-center text-center text-sm text-[#B3B8B8] w-80 h-[62px] tracking-[0.5px] gap-5">
                      It appears you haven&apos;t bought any tickets yet. Maybe
                      try searching these?
                    </div>
                  </div>
                )}
                {myBooking.length >= 1 && (
                  <div className=" flex justify-end items-center gap-4 right-12 bottom-12 absolute">
                    <div className="text-secondary">
                      Page {currentPage} of {totalPage}
                    </div>
                    <button
                      onClick={handlePrev}
                      className="btn btn-secondary text-white capitalize"
                    >
                      Prev
                    </button>
                    <button
                      onClick={handleNext}
                      className="btn btn-primary text-white capitalize"
                    >
                      Next
                    </button>
                  </div>
                )}
              </div>
            </div>
          </main>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default MyBooking;
