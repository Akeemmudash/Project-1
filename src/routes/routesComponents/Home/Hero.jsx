import { useEffect, useState } from "react";
import featureImage1 from "../../../assets/feature_img1.png";
import featureImage2 from "../../../assets/feature_img2.png";
import featureImage3 from "../../../assets/feature_img3.png";
import Button from "../../../components/Button";
function HeroHeading() {
  const [changingText, setChangingText] = useState("yourself");
  const [index, setIndex] = useState(0);
  const texts = ["yourself", "Men", "Women", "Kids"];
  useEffect(() => {
    setChangingText(texts[index]);
    const timer = setTimeout(() => {
      if (index < texts.length - 1) setIndex(index + 1);
      else setIndex(0);
    }, 1500);
    return () => {
      clearTimeout(timer);
    };
  }, [index]);
  return (
    <h1 className="font-bold  text-2xl 2xs:text-3xl xs:text-4xl sm:text-5xl md:text-6xl text-center">
      Get the best for{" "}
      <span key={changingText} className="fadeIn">
        {changingText}
      </span>
    </h1>
  );
}
export default function Hero() {
  return (
    <section id="hero" className="hero md:container mx-auto mb-28 ">
      <hgroup className="mb-10">
        <h2 className=" 2xs:text-lg xs:text-xl sm:text-2xl text-center  mb-3 sm:mb-6">
          Your body deserves Comfort
        </h2>
        <HeroHeading />
      </hgroup>
      <div className="text-center">
        <Button
          to="shop-products"
          color="black"
          className="mr-3 font-bold text-base sm:text-lg w-32 2xs:w-40 xs:w-48 sm:w-56"
        >
          Shop Now
        </Button>

        <Button className="font-bold text-base sm:text-lg  w-32 2xs:w-40 xs:w-48 sm:w-56">
          Learn more
        </Button>
      </div>
      <div className="mx-4 xs:mx-8 sm:mx-28 mt-12">
        <HeroImages />
      </div>
    </section>
  );
}

function HeroImages() {
  return (
    <div className="flex justify-center items-end">
      <div className="flex items-end h-full">
        <img src={featureImage1} alt="" className="mx-auto " />
      </div>
      <div className="flex items-end h-full">
        <img src={featureImage2} alt="" className="mx-auto" />
      </div>
      <div className="flex items-end h-full">
        <img src={featureImage3} alt="" className="mx-auto " />
      </div>
    </div>
  );
}
