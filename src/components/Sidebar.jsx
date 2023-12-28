import { NavLink } from "react-router-dom";
import { Logo } from "./Header";
import { useRef } from "react";

import { Transition } from "react-transition-group";

export default function Sidebar({ handleHideSidebar, showSidebar }) {
  const nodeRef = useRef(null);
  const duration = 300;
  const defaultStyle = {
    transition: `transform ${duration}ms ease-in-out`,
    transform: "translateX(-150%)",
  };
  const transitionStyles = {
    entering: { transform: "translateX(0%)" },
    entered: { transform: "translateX(0%)" },
    exiting: { transform: "translateX(-150%)" },
    exited: { transform: "translateX(-150%)" },
  };
  return (
   
    <Transition in={showSidebar} mountOnEnter={true} unmountOnExit={true} timeout={duration}>
      {(state) => (
        <aside
          ref={nodeRef}
          className=" sidebar w-72 bg-white min-h-screen  h-full text-black  fixed top-0 left-0 z-40 p-2"
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          <div className="flex justify-center mt-6 relative">
            <Logo />
            <div className="close-button absolute right-0 top-1/2 -translate-y-1/2">
              <button
                className="relative w-7 h-7 rounded-full"
                onClick={handleHideSidebar}
              >
                <span className="h-[2px] rounded-sm w-5 bg-black block absolute -translate-x-1/2 left-1/2 top-1/2 -translate-y-1/2 rotate-45"></span>
                <span className="h-[2px] rounded-sm w-5 bg-black block absolute  -translate-x-1/2 left-1/2 top-1/2 -translate-y-1/2 -rotate-45"></span>
              </button>
            </div>
          </div>

          <ul className="mt-20">
            <li className="mb-2">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  `block py-2 ps-4  ${
                    isActive
                      ? "rounded-lg text-white bg-black"
                      : isPending
                      ? "bg-slate-400 text-white"
                      : "text-black bg-white"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink
                to="shop-products"
                className={({ isActive, isPending }) =>
                  `block py-2 ps-4 ${
                    isActive
                      ? "rounded-lg text-white bg-black"
                      : isPending
                      ? "bg-slate-400 text-white"
                      : "text-black bg-white"
                  }`
                }
              >
                Shop Products
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink
                to="about"
                className={({ isActive, isPending }) =>
                  `block py-2 ps-4 ${
                    isActive
                      ? "rounded-lg text-white bg-black"
                      : isPending
                      ? "bg-slate-400 text-white"
                      : "text-black bg-white"
                  }`
                }
              >
                About
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink
                to="blog"
                className={({ isActive, isPending }) =>
                  `block py-2 ps-4 ${
                    isActive
                      ? "rounded-lg text-white bg-black"
                      : isPending
                      ? "bg-slate-400 text-white"
                      : "text-black bg-white"
                  }`
                }
              >
                Blog
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink
                to="faq"
                className={({ isActive, isPending }) =>
                  `block py-2 ps-4 ${
                    isActive
                      ? "rounded-lg text-white bg-black"
                      : isPending
                      ? "bg-slate-400 text-white"
                      : "text-black bg-white"
                  }`
                }
              >
                FAQ
              </NavLink>
            </li>
          </ul>
        </aside>
      )}
    </Transition>
   
  );
}
