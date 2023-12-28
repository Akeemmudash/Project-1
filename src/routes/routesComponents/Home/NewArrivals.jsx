import maleWears from "../../../assets/male_underwears.png";
import femaleWears from "../../../assets/female_underwears.png";
import underwears from "../../../assets/underwears.png";
import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
export function NewArrivals() {
  return (
    <section className="md:container mx-auto mb-28">
      <h2 className=" text-2xl sm:text-3xl text-center mb-14 font-bold">
        Checkout BYC New Arrivals
      </h2>
      <div className="">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={2}
          spaceBetween={20}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          autoplay={{
            duration: 2000,
          }}
        >
          <SwiperSlide>
            <div className="bg-slate-50">
              <Link to="">
                <img src={maleWears} alt="" />
                <div className="bg-white pt-8">
                  <h4 className="text-base xs:text-lg md:text-2xl font-semibold mb-2">
                    Men Underwears
                  </h4>
                  <p className="">Parturient Venenatis Etiam</p>
                </div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-slate-50">
              <Link to="">
                <img src={femaleWears} alt="" />
                <div className="bg-white pt-8">
                  <h4 className=" text-base xs:text-lg md:text-2xl font-semibold mb-2">
                    Women Underwears
                  </h4>
                  <p className="">Parturient Venenatis Etiam</p>
                </div>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-slate-50">
              <Link to="">
                <img src={underwears} alt="" />
                <div className="bg-white pt-8">
                  <h4 className=" text-base xs:text-lg md:text-2xl font-semibold mb-2">
                    Underwears
                  </h4>
                  <p className="">Parturient Venenatis Etiam</p>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="mt-14 sm:mt-20 text-center">
        <Button className="mx-auto block font-semibold w-40 md:w-56">
          View all
        </Button>
      </div>
    </section>
  );
}
