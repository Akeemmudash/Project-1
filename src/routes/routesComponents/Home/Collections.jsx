import collectionImage1 from "../../../assets/collection_img1.png";
import collectionImage2 from "../../../assets/collection_img2.png";
import collectionImage3 from "../../../assets/collection_img3.png";
import  Button  from "../../../components/Button";

export function Collections() {
  return (
    <section className="collections md:container mx-auto mb-28 ">
      <div className="layout grid grid-cols-2  gap-2">
        <div className="border w-full h-full bg-slate-50 flex items-center justify-center aspect-square">
          <div className="max-w-sm flex items-center">
            <div className=" px-2 xs:px-4  md:px-6">
            <h3 className="font-bold text-xs  xs:text-base sm:text-xl md:text-2xl text-gray-500">
              BYC Collection 2021
            </h3>
            <h2 className="font-bold xs:text-2xl sm:text-4xl md:text-5xl ">BYC Collection </h2>
            <p className="  mb-3 sm:mb-7 md:mb-11 sm:text-base xs:text-xs text-[10px] leading-[1.2]">
              The best everyday option in a Super Saver range within a
              reasonable price. It is our responsibility to keep you 100 percent
              stylish. Be smart & trendy with us.
            </p>
            <Button className="w-24 sm:w-40 md:w-56 text-xs sm:text-sm md:text-base">Explore</Button>
          </div>
          </div>
        </div>
        <div className="bg-slate-50 flex justify-center border items-end w-full h-full aspect-square">
          <img
            src={collectionImage1}
            alt=""
            className="w-full h-full object-cover object-left"
          />
        </div>
        <div className="bg-slate-50 flex justify-center border items-end w-full h-full aspect-square">
          <img src={collectionImage2} alt="" className="w-full h-full object-cover object-left" />
        </div>
        <div className="bg-slate-50 flex justify-center border items-end w-full h-full aspect-square">
          <img src={collectionImage3} alt="" className="w-full h-full object-cover object-left" />
        </div>
      </div>
      <div className=" mt-14 mx-auto text-center">
        <Button to="shop-products" className="font-bold w-40 md:w-56">
          View all
        </Button>
      </div>
    </section>
  );
}
