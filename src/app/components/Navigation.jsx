"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Logo from "../billeder/logoskyggenyggetygge.svg";
import { GiHamburgerMenu } from "react-icons/gi";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const submenuRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenMenu(null);
  };

  const handleMobileToggle = (index) => {
    if (isMobileMenuOpen) {
      // If the same submenu is clicked again, close it
      setOpenMenu((prevOpenMenu) => (prevOpenMenu === index ? null : index));
    } else {
      // If mobile menu is closed, toggle the mobile menu and set the submenu
      setIsMobileMenuOpen(true);
      setOpenMenu(index);
    }
  };

  const handleToggle = (index) => {
    setOpenMenu((prevOpenMenu) => (prevOpenMenu === index ? null : index));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Lukker submenu, hvis der klikkes ved siden af
      if (submenuRef.current && !submenuRef.current.contains(event.target)) {
        setOpenMenu(null);
      }
    };

    // Attach the event listener to the document body
    document.body.addEventListener("click", handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, [submenuRef]);

  return (
    <header className="h-26 bg-[#507D66] text-white z-[10000]">
      <nav className="relative px-2 py-6">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="forside">
            <Image src={Logo} width={200} height={150} alt="Logo" />
          </Link>

          <ul className="hidden md:hidden lg:flex space-x-6 pl-[20vw]">
            <li className="flex relative group" ref={submenuRef}>
              <Link href="#" className="mr-1" onClick={() => handleToggle(0)}>
                Om os
              </Link>
              <ul className={`submenu absolute bg-[#507D66] space-y-4 p-6 w-[350px] h-62 top-[240%] transform ${openMenu === 0 ? "scale-100" : "scale-0"} transition duration-200 ease-in-out origin-top shadow-lg text-white border-t-8 border-orange z-[100001]`}>
                <li className="text-lg hover:text-orange leading-8">
                  <Link href="hvemervi">Hvem er Verdens Skove?</Link>
                </li>
                <li className="text-lg hover:text-orange leading-10">
                  <Link href="hvadgorvi">Hvad gør vi?</Link>
                </li>
                <li className="text-lg hover:text-orange leading-10">
                  <Link className="leading-25" href="#">
                    Kontakt os
                  </Link>
                </li>
              </ul>
            </li>

            <li className="flex relative group" ref={submenuRef}>
              <Link href="#" className="mr-1" onClick={() => handleToggle(1)}>
                Støt
              </Link>
              <ul className={`submenu absolute bg-[#507D66] space-y-4 p-6 w-[350px] h-62 top-[240%] transform ${openMenu === 1 ? "scale-100" : "scale-0"} transition duration-200 ease-in-out origin-top shadow-lg text-white border-t-8 border-orange z-[100001]`}>
                <li className="text-lg leading-8 hover:text-orange ">
                  <Link href="soedankandustoetteos">Sådan kan du støtte os</Link>
                </li>
                <li className="text-lg hover:text-orange">
                  <Link href="#">Støt som virksomhed</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link href="blivfrivillig">Bliv frivillig</Link>
            </li>

            <li>
              <Link href="#">Webshop</Link>
            </li>
          </ul>

          <Link href="stot" className="bg-orange px-5 py-3 rounded-lg hover:bg-hover_orange text-white hidden lg:flex font-bold text-[1.5rem]" role="button">
            STØT NU
          </Link>

          <button id="mobile-icon" className="lg:hidden" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-x w-14 h-14" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            ) : (
              <GiHamburgerMenu className="text-4xl pr-2 w-12 h-12" />
            )}
          </button>
        </div>

        <div className={`lg:hidden ${isMobileMenuOpen ? "block " : "hidden"} flex justify-center mt-3 w-full`}>
          <div className="mobile-menu absolute top-23 w-full z-[100001]">
            <ul className="bg-gray-100 shadow-lg leading-9 h-screen text-black">
              <li className="border-b-2 border-white">
                <Link href="hvadgorvi" className="block pl-11" onClick={() => handleMobileToggle(0)}>
                  Om os
                </Link>
                <ul className={`bg-white text-gray-800 w-full ${openMenu === 1 ? "block" : "hidden"}`}>
                  <li className="text-sm leading-8 font-normal hover:text-[#E6863B]">
                    <Link className="block pl-16 p-3" href="hvemervi">
                      Hvem er Verdens Skove?
                    </Link>
                  </li>

                  <li className="text-sm leading-8 font-normal hover:text-[#E6863B]">
                    <Link className="block pl-16 p-3" href="hvadgorvi">
                      Hvad gør vi?
                    </Link>
                  </li>
                  <li className="text-sm leading-8 font-normal hover:text-[#E6863B]">
                    <Link className="block pl-16 p-3" href="#">
                      Kontakt os
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="border-b-2 border-white ">
                <Link href="#" className="block pl-11" onClick={() => handleMobileToggle(1)}>
                  Støt
                </Link>
                <ul className={`bg-white text-gray-800 w-full ${openMenu === 1 ? "block" : "hidden"}`}>
                  <li className="text-sm leading-8 font-normal hover:text-[#E6863B]">
                    <Link className="block pl-16 p-3" href="såedankandustoetteos">
                      Sådan kan du støtte os
                    </Link>
                  </li>
                  <li className="text-sm leading-8 font-normal hover:text-[#E6863B]">
                    <Link className="block pl-16 p-3" href="#">
                      Støt som virksomhed
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="border-b-2 border-white ">
                <Link href="blivfrivillig" className="block pl-7">
                  Bliv Frivillig
                </Link>
              </li>

              <li className="border-b-2 border-white">
                <Link href="#" className="block pl-7 ">
                  Webshop
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
