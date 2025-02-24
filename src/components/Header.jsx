import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const getUrl = useLocation().pathname;
  const navigate = useNavigate();

  //change nav color while scrolling
  const [colorWhileScroll, setColorWhileScroll] = useState(false);
  // if (getUrl === "/book-a-demo") {
  //   () => setColorWhileScroll(true);
  // }
  const changeColor = () => {
    if (window.scrollY >= 70) {
      setColorWhileScroll(true);
    } else {
      setColorWhileScroll(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  //toggle options for mobile
  const [toggleOptions, setToggleOptions] = useState(false);

  const handleOnClickForToggleOptions = () => {
    setToggleOptions(true);
  };

  return (
    <div
      className={
        colorWhileScroll
          ? `bg-white/75 backdrop-blur-xl text-black fixed top-0 w-full transition-all z-50 font-semibold shadow-sm`
          : `fixed top-0 w-full z-50 text-white`
      }
      style={
        getUrl === "/book-a-demo"
          ? { backgroundColor: "white", color: "black" }
          : {}
      }
    >
      <nav className="w-[90%] mx-auto flex justify-between items-center h-16">
        <img
          src="/logo.png"
          alt="logo"
          className={
            getUrl === "/book-a-demo" || colorWhileScroll
              ? "w-32 invert-100 cursor-pointer"
              : "w-32 cursor-pointer"
          }
          onClick={() => navigate("/")}
        />

        <ul className="lg:flex hidden justify-between items-center gap-10">
          <li className="hover:opacity-75 transition-all">
            <Link to="/" className="text-[15px] px-3 py-1.5">
              Home
            </Link>
          </li>
          <li className="hover:opacity-75 transition-all">
            <a href="/#table-images" className="text-[15px] px-3 py-1.5">
              Phone Call Agent
            </a>
          </li>
          <li className="hover:opacity-75 transition-all">
            <a href="#features" className="text-[15px] px-3 py-1.5">
              Features
            </a>
          </li>
          <li className="hover:opacity-75 transition-all">
            <Link to="/book-a-demo" className="text-[15px] px-3 py-1.5">
              Enterprise
            </Link>
          </li>
        </ul>

        <div className="flex justify-between items-center gap-4">
          <Link
            to="/book-a-demo"
            className={
              colorWhileScroll
                ? "hidden lg:block bg-black text-white px-5 py-2 rounded-full hover:bg-black/90 transition-all text-[14px]"
                : "hidden lg:block bg-white text-black px-5 py-2 rounded-full hover:bg-white/90 transition-all text-[14px]"
            }
          >
            Book a demo
          </Link>

          <button 
            className="lg:hidden p-2" 
            onClick={() => setToggleOptions(!toggleOptions)}
            aria-label="Menu"
          >
            <div className="flex flex-col gap-1">
              <span className={`w-5 h-0.5 bg-current ${toggleOptions ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`w-5 h-0.5 bg-current ${toggleOptions ? 'hidden' : ''}`}></span>
              <span className={`w-5 h-0.5 bg-current ${toggleOptions ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>
      </nav>

      {toggleOptions && (
        <div className="w-full h-screen overflow-hidden bg-white/90 backdrop-blur-2xl fixed top-0 left-0 z-[100]">
          <div className="flex flex-col h-full p-6">
            <div className="flex justify-end">
              <button 
                className="p-2" 
                onClick={() => setToggleOptions(false)}
              >
                <RxCross2 className="w-8 h-8 text-black" />
              </button>
            </div>
            
            <ul className="flex flex-col items-center justify-center flex-1 gap-8">
              <li className="text-[20px] text-black font-medium hover:opacity-75 transition-all">
                <Link to="/" onClick={() => setToggleOptions(false)}>
                  Home
                </Link>
              </li>
              <li className="text-[20px] text-black font-medium hover:opacity-75 transition-all">
                <a href="/#table-images" onClick={() => setToggleOptions(false)}>
                  Phone Call Agent
                </a>
              </li>
              <li className="text-[20px] text-black font-medium hover:opacity-75 transition-all">
                <a href="#features" onClick={() => setToggleOptions(false)}>
                  Features
                </a>
              </li>
              <li className="text-[20px] text-black font-medium hover:opacity-75 transition-all">
                <Link 
                  to="/book-a-demo" 
                  onClick={() => setToggleOptions(false)}
                >
                  Enterprise
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
