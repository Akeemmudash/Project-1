// import paypal from "../assets/Paypal.svg";
import masterCard from "../assets/MasterCard.svg";
import visa from "../assets/Visa.svg";
import mail from "../assets/Mail.svg";
import phone from "../assets/Phone.svg";
import youtube from "../assets/youtube.svg";
import twitter from "../assets/twitter.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import Arrow from "../assets/Arrow-white.svg";
import { Form, Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#212121] text-white  bottom-0 w-full px-4  py-9 mt-44" id="footer">
      <section className="grid  sm:grid-cols-3 lg:grid-cols-6 justify-center md:container mx-auto">
        <div className="mr-8">
          <h6 className="md:text-lg font-semibold">Company Info</h6>
          <ul className="text-sm leading-7">
            <li>
              <Link to="about" className="hover:underline text-xs sm:text-sm">
                About Us
              </Link>
            </li>
            <li>
              <Link to="" className="hover:underline text-xs sm:text-sm">
                Affiliate
              </Link>
            </li>
            <li>
              <Link to="blog" className="hover:underline text-xs sm:text-sm">
                Fashion Blog
              </Link>
            </li>
          </ul>
        </div>
        <div className="mr-8">
          <h6 className="md:text-lg font-semibold">Help & Support</h6>
          <ul className="text-sm leading-7">
            <li>
              <Link to="about" className="hover:underline text-xs sm:text-sm">
                Shopping Info
              </Link>
            </li>
            <li>
              <Link to="" className="hover:underline text-xs sm:text-sm">
                Refunds
              </Link>
            </li>
            <li>
              <Link to="" className="hover:underline text-xs sm:text-sm">
                How to Order
              </Link>
            </li>
            <li>
              <Link to="" className="hover:underline text-xs sm:text-sm">
                How to Track
              </Link>
            </li>
            <li>
              <Link to="" className="hover:underline text-xs sm:text-sm">
                Size Guides
              </Link>
            </li>
          </ul>
        </div>
        <div className="">
          <h6 className="md:text-lg font-semibold">Customer Care</h6>
          <ul className="text-sm leading-7">
            <li>
              <Link to="contact" className="hover:underline text-xs sm:text-sm">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="" className="hover:underline text-xs sm:text-sm">
                Payment Methods
              </Link>
            </li>
            <li>
              <ul className="flex gap-2 mb-2">
                <li>
                  <Link>
                    {/* <img src={paypal} alt="" /> */}
                  </Link>
                </li>
                <li>
                  <Link>
                    <img src={masterCard} alt="" />
                  </Link>
                </li>
                <li>
                  <Link>
                    <img src={visa} alt="" />
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div
          className="
         mb-10 col-span-3 row-start-1 lg:col-start-4 lg:ml-auto
    "
        >
          <h6 className="text-lg font-bold mb-4">Signup For The latest News</h6>
          <Form>
            <div className="border border-white flex min-w-[250px] ">
              <input
                type="email"
                name="subscribe-email"
                id=""
                className="border-none bg-inherit py-2 px-2 outline-none flex-1"
                placeholder="Enter Email"
              />
              <button className=" text-center flex items-center h-full px-3 py-4 font-bold">
                <img src={Arrow} alt="" className="text-white" />
              </button>
            </div>
          </Form>
          <div className="mt-4">
            <p className="text-sm leading-6">
              <span>
                <img src={mail} alt="" className="inline-block" />
              </span>
              <span>
                {" "}
                <a
                  href="mailto:bycafrica@gmail.com"
                  className="hover:underline"
                >
                  {" "}
                  bycafrica@gmail.com{" "}
                </a>
              </span>
            </p>
            <p className="text-sm leading-6">
              <span>
                <img src={phone} alt="" className="inline-block" />
              </span>{" "}
              <span>
                <a href="tel:+2348101375376" className="hover:underline">
                  +2348101375376
                </a>
                {"; "}
                <a href="tel:+2349053403403" className="hover:underline">
                  +2349053403403
                </a>
              </span>
            </p>
          </div>
        </div>
      </section>
      <section className="flex items-center flex-col mt-10">
        <div className="socials mb-4">
          <ul className="flex gap-3">
            <li className="bg-white inline-flex w-12 h-12 rounded-full justify-center items-center">
              <a href="">
                <img src={facebook} alt="" />
              </a>
            </li>
            <li className="bg-white inline-flex w-12 h-12 rounded-full justify-center items-center">
              <a href="">
                <img src={instagram} alt="" />
              </a>
            </li>
            <li className="bg-white inline-flex w-12 h-12 rounded-full justify-center items-center">
              <a href="">
                <img src={twitter} alt="" />
              </a>
            </li>
            <li className="bg-white inline-flex w-12 h-12 rounded-full justify-center items-center">
              <a href="">
                <img src={youtube} alt="" />
              </a>
            </li>
          </ul>
        </div>
        <hr className="bg-white h-[2px] w-full block my-5" />
        <p className="text-xs">All rights Reserved copyright bycafrica 2021.</p>
      </section>
    </footer>
  );
}
