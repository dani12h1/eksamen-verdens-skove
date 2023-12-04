"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logo from "../billeder/logoskyggenyggetygge.svg";
import { GiHamburgerMenu } from "react-icons/gi";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="h-26 bg-[#507D66] text-hvid z-[1000]">
      <nav className="relative px-2 py-6">
        <div className="container mx-auto flex justify-between items-center">
          <Image className="" src={Logo} width="200" height="150" alt="Logo" />

          <ul className="hidden md:flex space-x-6 pl-[20vw]">
            <li className="flex relative group">
              <Link href="#" className="mr-1">
                Om os
              </Link>
              {/* Submenu starter */}
              <ul className="absolute bg-[#507D66] p-3 w-52 top-[7.1vh] transform scale-0 group-hover:scale-100 transition duration-500⁄ ease-in-out origin-top shadow-lg text-white border-t-8 border-[#E6863B]">
                <li className="text-lg hover:text-[#E6863B] leading-8">
                  <Link href="#">Hvem er Verdens Skove?</Link>
                </li>
                <li className="text-sm hover:text-[#E6863B]  leading-8">
                  <Link href="#">Hvad gør vi?</Link>
                </li>
                <li className="text-sm hover:text-[#E6863B]  leading-8">
                  <Link href="#">Kontakt os</Link>
                </li>
              </ul>
              {/* Submenu slutter */}
            </li>
            <li className="flex relative group">
              <Link href="#" className="mr-1">
                Støt
              </Link>
              {/* Submenu starter */}
              <ul className="absolute bg-[#507D66] p-3 w-52 top-[7.1vh]  transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top shadow-lg text-white border-t-8 border-[#E6863B]">
                <li className="text-smleading-8 hover:text-[#E6863B] ">
                  <Link href="#">Sådan kan du støtte os</Link>
                </li>
                <li className="text-sm hover:text-[#E6863B]  leading-8">
                  <Link href="#">Støt som virksomhed</Link>
                </li>
              </ul>
              {/* Submenu slutter */}
            </li>
            <li>
              <Link href="#">Bliv frivillig</Link>
            </li>
            <li>
              <Link href="#">Webshop</Link>
            </li>
          </ul>

          <Link href="#" className="bg-[#E6863B] px-5 py-3 rounded-lg hover:bg-hover_orange text-white hidden md:flex font-bold text-[1.5rem]" role="button">
            STØT NU
          </Link>

          {/* Mobile menu icon */}
          <button id="mobile-icon" className="md:hidden" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            ) : (
              <GiHamburgerMenu className="text-4xl pr-2" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"} flex justify-center mt-3 w-full`}>
          <div className="mobile-menu absolute top-23 w-full">
            <ul className="bg-gray-100 shadow-lg leading-9  h-screen text-black">
              <li className="border-b-2 border-white">
                <Link href="#" className="block pl-11">
                  Om os
                </Link>
                {/* Submenu starter */}
                <ul className="bg-white text-gray-800 w-full">
                  <li className="text-sm leading-8 font-normal hover:text-[#E6863B]">
                    <Link className="block pl-16" href="#">
                      Hvem er Verdens Skove?
                    </Link>
                  </li>
                  <li className="text-sm leading-8 font-normal hover:text-[#E6863B]">
                    <Link className="block pl-16" href="#">
                      Digital marketing
                    </Link>
                  </li>
                  <li className="text-sm leading-8 font-normal hover:text-[#E6863B]">
                    <Link className="block pl-16" href="#">
                      Hvad gør vi?
                    </Link>
                  </li>
                  <li className="text-sm leading-8 font-normal hover:text-[#E6863B]">
                    <Link className="block pl-16" href="#">
                      Kontakt os
                    </Link>
                  </li>
                </ul>
                {/* Submenu slutter */}
              </li>
              <li className="border-b-2 border-white">
                <Link href="#" className="block pl-11">
                  Støt
                </Link>
                {/* Submenu starter */}
                <ul className="bg-white text-gray-800 w-full">
                  <li className="text-sm leading-8 font-normal hover:text-[#E6863B]">
                    <Link className="block pl-16" href="#">
                      Sådan kan du støtte os
                    </Link>
                  </li>
                  <li className="text-sm leading-8 font-normal hover:text-[#E6863B]">
                    <Link className="block pl-16" href="#">
                      Støt som virksomhed
                    </Link>
                  </li>
                </ul>
                {/* Submenu slutter */}
              </li>
              <li className="border-b-2 border-white hover:text-[#E6863B]">
                <Link href="#" className="block pl-7">
                  Bliv Frivillig
                </Link>
              </li>
              <li className="border-b-2 border-white hover:text-[#E6863B]">
                <Link href="#" className="block pl-7">
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
