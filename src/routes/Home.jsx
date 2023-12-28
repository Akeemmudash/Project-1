import { createContext } from "react";
import { Outlet } from "react-router-dom";
import ProductImage1 from "../assets/productImg1.png";
import ProductImage2 from "../assets/productImg2.png";
import ProductImage3 from "../assets/productImg3.png";
import "swiper/css";
import { NewArrivals } from "./routesComponents/Home/NewArrivals";
import { Collections } from "./routesComponents/Home/Collections";
import { Category } from "./routesComponents/Home/Category";
import Hero from "./routesComponents/Home/Hero";
import HomeBlog from "./routesComponents/Home/HomeBlog";
export const ProductsContext = createContext(null);

export default function Home() {
  const data = [
    {
      name: "WOWEN PANTS",
      price: 2800,
      id: "BYC-501LMS",
      imgUrl: ProductImage1,
    },
    {
      name: "WOWEN PANTS",
      price: 2800,
      id: "BYC-501LMS",
      imgUrl: ProductImage2,
    },
    {
      name: "WOWEN PANTS",
      price: 2800,
      id: "BYC-501LMS",
      imgUrl: ProductImage3,
    },
    {
      name: "WOWEN PANTS",
      price: 2800,
      id: "BYC-501LMS",
      imgUrl: ProductImage2,
    },
  ];

  return (
    <ProductsContext.Provider value={data}>
      <Hero />
      <NewArrivals />
      <Collections />
      <Category />
      <HomeBlog />
    </ProductsContext.Provider>
  );
}
