import { useEffect, useState, useContext, useRef } from "react";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowLeft from "../../../assets/Arrow_Left.svg";
import ArrowRight from "../../../assets/Arrow_Right.svg";
import { ProductsContext } from "../../Home";
import Button from "../../../components/Button";

export function Category() {
  return (
    <section className="md:container mb-28 mx-auto">
      <h2 className=" text-2xl md:text-3xl  font-bold text-center mb-6">
        Shop By Category
      </h2>
      <div className="">
        <nav className="category-nav text-lg flex justify-center gap-2 mb-6">
          <button className="hover:underline hover:text-gray-500 decoration-gray-500 underline-offset-[14px] ">
            For Women
          </button>
          <button className="hover:underline hover:text-gray-500 decoration-gray-500 underline-offset-[14px] ">
            For Men
          </button>
          <button className="hover:underline hover:text-gray-500 decoration-gray-500 underline-offset-[14px]">
            For Kids
          </button>
        </nav>
        <div className="category-item mx-auto flex gap-2 justify-center mb-10 md:mb-20">
          <NavLink className="p-2 border hover:bg-red-600  hover:text-white">
            T-Shirt
          </NavLink>
          <NavLink className="p-2 border hover:bg-red-600  hover:text-white">
            Singlet
          </NavLink>
          <NavLink className="p-2 border hover:bg-red-600  hover:text-white">
            Pants
          </NavLink>
          <NavLink className="p-2 border hover:bg-red-600  hover:text-white">
            Boxers
          </NavLink>
        </div>
      </div>

      <HomeProducts />
      <div className="text-center mt-14">
        <Button to="shop-products" className="font-semibold w-40 sm:w-56">
          View all
        </Button>
      </div>
    </section>
  );
}
function HomeProducts() {
  const data = useContext(ProductsContext);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.on("slideChange", () => {
        setIsBeginning(swiperRef.current.isBeginning);
        setIsEnd(swiperRef.current.isEnd);
      });
    }
  }, [swiperRef]);
  return (
    <div className="mx-4 lg:mx-24 relative">
      <Swiper
        spaceBetween={20}
        slidesPerView={2}
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {data.map((productData, index) => (
          <SwiperSlide key={productData.id + index}>
            <HomeProductCard
              imgUrl={productData.imgUrl}
              name={productData.name}
              price={productData.price}
              id={productData.id}

            ></HomeProductCard>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-nav-buttons  flex ">
        <div
          className={`swiper-prev-button absolute top-1/2 -translate-y-1/2 justify-center -left-[3%] xs:-left-[8%] z-10 ${
            isBeginning ? "disabled" : ""
          }`}
        >
          <button
            onClick={() => swiperRef.current.slidePrev()}
            className={isBeginning ? "disabled" : ""}
          >
            <img
              src={ArrowLeft}
              alt="Left Navigation Button"
              className="w-14 h-14  lg:w-20 lg:h-20"

            />
          </button>
        </div>
        <div
          className={`swiper-next-button absolute top-1/2 -translate-y-1/2 justify-center -right-[3%]  xs:-right-[8%] z-10 ${
            isEnd ? "disabled" : ""
          }`}
        >
          <button
            onClick={() => swiperRef.current.slideNext()}
            className={isEnd ? "disabled" : ""}
          >
            <img
              src={ArrowRight}
              alt="Right Navigation Button"
             className="w-14 h-14  lg:w-20 lg:h-20"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
function HomeProductCard({ imgUrl, name, price, id }) {
  const ItemPrice = `₦${price.toLocaleString()}.00`;
  return (
    <div>
      <div className="img mb-7">
        <img src={imgUrl} alt="" className="h-44 sm:h-52 lg:h-72 object-cover mx-auto" />
      </div>
      <div className="">
        <h5 className="text-base font-semibold inline mr-auto">{name}</h5>{" "}
        <span className="">{id}</span>
      </div>
      <p>{ItemPrice}</p>
    </div>
  );
}
