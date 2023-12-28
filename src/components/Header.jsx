import { useState, useRef, useEffect } from "react";
import LogoImage from "../assets/byc_logo.svg";
import SearchIcon from "../assets/search-icon.svg";
import User from "../assets/user-icon.png";
import Favorite from "../assets/heart-icon.png";
import Cart from "../assets/cart-icon.png";
import { Form } from "react-router-dom";
import { Navlink } from "../routes/Root";

export default function Header({
  handleShowSidebar,
  handleHideSidebar,
}) {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const windowWidthRef = useRef(window.innerWidth);
  const searchRef = useRef(null);

  function toggleSearchBar() {
    setShowSearchBar((prev) => !prev);
  }
  useEffect(() => {
    if (showSearchBar) {
      searchRef.current && searchRef.current.focus();
    }
  }, [showSearchBar]);
  useEffect(() => {
    const handleResize = () => {
      windowWidthRef.current = window.innerWidth;
      if (windowWidthRef.current > 1023) {
        handleHideSidebar();
      }
    };
  
    // Initial setup
    handleResize();
  
    // Add event listener
    window.addEventListener("resize", handleResize);
  
    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array, meaning the effect runs once after the initial render
  
 
  return (
    <header className="py-7 px-4 relative flex lg:block items-center">
      <div className="hamburger inline-block lg:hidden">
        <button onClick={handleShowSidebar}>
          <span className="rounded-full flex items-center justify-center">
            <span>
              <span className="h-1 w-5 xs:w-6  rounded-sm bg-red-500 block mb-1"></span>
              <span className="h-1 w-3 xs:w-4  rounded-sm bg-black block mb-1"></span>
              <span className="h-1 w-1 xs:w-2  rounded-sm bg-red-500 block"></span>
            </span>
          </span>
        </button>
      </div>
     

      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {showSearchBar ? (
          <Form className="">
            <div className="relative">
              <input
                ref={searchRef}
                onBlur={toggleSearchBar}
                type="search"
                id="search-bar"
                role="search"
                placeholder="Search Products"
                className="search-bar focus:outline-none border-b-black border-b-2 w-32 2xs:w-40 xs:min-w-[400px] animate-[linear_6s_ease-in-out] placeholder:text-black ps-2 pe-10"
              />
              <span className="absolute inline-block right-0 -translate-y-1/2 top-1/2">
                {" "}
                <button type="button" className="block w-max">
                  <img src={SearchIcon} className=" w-5 xs:w-max" />
                </button>
              </span>
            </div>
          </Form>
        ) : (
          <Logo />
        )}
      </span>
      <nav className="inline-block ml-auto lg:w-full">
        <ul className="flex list-unstyled  items-center">
          <div className="hidden lg:flex w-full">
            <li>
              <Navlink to="shop-products" className="mr-3">
                Shop Products
              </Navlink>
            </li>
            <li>
              <Navlink to="blog" className="mr-4">
                Blog
              </Navlink>
            </li>
            <li>
              <Navlink to="faq" className="">
                FAQ
              </Navlink>
            </li>

            <li className="ms-auto">
              <Navlink to="about" className="mr-4">
                About Us
              </Navlink>
            </li>
            <li>
              <Navlink to="contact" className="mr-4">
                Contact
              </Navlink>
            </li>
          </div>
          {!showSearchBar && (
            <button
              className="mr-2 xs:mr-4"
              onClick={toggleSearchBar}
              aria-label="search"
            >
              <img src={SearchIcon} className="w-5 xs:w-6" />
            </button>
          )}
          <span className="mr-2 xs:mr-4" role="button" aria-label="user">
            <img src={User} className="w-5 xs:w-6" />
          </span>
          <span className="mr-2 xs:mr-4" role="button" aria-label="favorite">
            <img src={Favorite} className="w-5 xs:w-6 " />
          </span>
          <span className="" role="button" aria-label="cart">
            <img src={Cart} className="w-5 xs:w-6" />
          </span>
          <span></span>
          <span></span>
        </ul>
      </nav>
    </header>
  );
}

export function Logo() {
  return (
    <Navlink to="/">
      <img src={LogoImage} alt="Logo" className="w-14 xs:w-max" />
    </Navlink>
  );
}
