import { useContext } from "react";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { VisaProfile } from "./components/context/Context";

function App() {
  const { allVisa, loading } = useContext(VisaProfile);

  if (loading) {
    return <div className="text-2xl font-italic font-bold">Loading.......</div>;
  }

  console.log("is there infoOoo app", allVisa);

  return (
    <div>
      <div>
        <Swiper
          slidesPerView={1}
          modules={[Navigation, Pagination, Autoplay]}
          navigation={true}
          pagination={{ el: ".custom-pagination", clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
        >
          <SwiperSlide>
            <img
              className="w-full h-[600px]"
              src="/banner/Screenshot_1.png"
              alt="Slider-1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-[600px]"
              src="/banner/tv2.png"
              alt="Slider-1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-[600px]"
              src="/banner/tv3.png"
              alt="Slider-1"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-[600px]"
              src="/banner/tv4.png"
              alt="Slider-1"
            />
          </SwiperSlide>
          <div className="custom-pagination absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-2 z-20"></div>
        </Swiper>
      </div>
      <div className="bg-[#B7D0B1] rounded-4xl ">
        <p className="text-4xl font-bold text-center pt-20">Latest Visa</p>
        <div className="grid grid-cols-3 gap-4 pt-20 pb-30 mx-10">
          {allVisa.map((item, index) => (
            <div key={index} className="bg-[#1E472A] ">
              <img
                className="w-[500px]  h-[300px] object-cover rounded-bl-[200px]"
                src={item.image}
                alt={item.country}
              />
              <div className="p-6  h-[250px] space-y-2">
                <p className="text-xl font-bold">{item.country}</p>
                <p className="line-clap-3">{item.description}</p>
                <div className="flex justify-between text-black font-bold">
                  <p>{item.fee}</p>
                  <p>{item.visaType}</p>
                </div>
                <div className="flex gap-20 justify-center text-black font-bold">
                  <p>{item.validity}</p>
                  <p>{item.processing_time}</p>
                </div>
                <div className="flex justify-center items-center">
                  <button className="border px-5 py-2 font-bold cursor-pointer">
                    See Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center ">
          <a
            href="/all-visa"
            className="text-xl border px-10 py-3 mb-10 bg-[#1E472A] cursor-pointer"
          >
            See all visas
          </a>
        </div>
      </div>
      <div className="flex flex-row items-center gap-10 my-30 overflow-hidden ">
        <p className="text-3xl w-4/5 italic text-center font-bold px-10">
          "Below this section there will be a button called “See all
          visas”.Clicking this button will take the user to the All visas page"
        </p>
        <img
          className="w-full h-[600px] object-contain"
          src="/other/banner.jpg"
          alt="banner"
        />
      </div>
    </div>
  );
}

export default App;
