import { NavLink, useOutlet, useNavigation } from "react-router-dom";
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import {routes} from "../main"
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { useRef, useState } from "react";
import { createContext } from "react";
export const Overlay = createContext();
export default function Root() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const outlet = useOutlet();
  const { nodeRef } =
  routes.find((route) => route.path === location.pathname) ?? {}
  function handleShowSidebar() {
    setShowSidebar(true);
    setShowOverlay(true);
    document.body.style.overflow = "clip";
  }
  function handleHideSidebar() {
    setShowSidebar(false);
    setShowOverlay(false);
    document.body.style.overflow = "auto";
  }
  return (
    <>
      <Overlay.Provider value={[showOverlay, setShowOverlay]}>
        {<Sidebar handleHideSidebar={handleHideSidebar} showSidebar={showSidebar} />}
          <Header
            showSidebar={showSidebar}
            handleHideSidebar={handleHideSidebar}
            handleShowSidebar={handleShowSidebar}
          />
           <SwitchTransition>
          <CSSTransition
            key={location.pathname}
            nodeRef={nodeRef}
            timeout={300}
            classNames="page"
            unmountOnExit
          >
            {(state) => (
            <main className="px-4 sm:mt-16 mt-10" ref={nodeRef}>
            {outlet}
           </main>
            )}
          </CSSTransition>
        </SwitchTransition>
         

          <Footer />
        {showOverlay && (
          <div
            onClick={handleHideSidebar}
            className="overlay  top-0 bottom-0 absolute bg-black w-full h-full opacity-50 min-h-screen z-30"
          ></div>
        )}
      </Overlay.Provider>
    </>
  );
}

export function Navlink({ children, className, to }) {
  return (
    <NavLink
      to={to}
      className={({ isActive, isPending }) =>
        isPending
          ? "pending"
          : isActive
          ? `border-b text-red-800 pointer-events-none ${className}`
          : className
      }
    >
      {children}
    </NavLink>
  );
}
