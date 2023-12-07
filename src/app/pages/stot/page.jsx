"use client";
import React, { useState } from "react";
import Image from "next/image";
import Navigation from "../../components/Navigation";
import hero from "../../billeder/herosplashphoto.jpeg";

// Your functional component
const Stot = () => {
  // State to track the selected amount
  const [selectedButton, setSelectedButton] = useState(null);

  // Function to handle button click and toggle selection
  const handleButtonClick = (button) => {
    setSelectedButton(button === setSelectedButton ? null : button);
  };

  // Return the JSX structure
  return (
    <>
      {/* Include the Navigation component */}
      <Navigation />

      {/* Main content */}
      <div className="relative">
        {/* Image */}
        <Image src={hero} className="w-full h-[100vh]" alt="Picture of global work" />

        {/* Text */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1 className="text-4xl font-bold">STØT VERDENS SKOVE</h1>
          <p className="text-lg">Dit bidrag gør en forskel</p>
        </div>

        {/* Box */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 bg-white shadow-md max-w-[600px] w-[80vw] h-[50vh] rounded-md">
          {/* Box content */}
          <p className="text-black pb-4">Vælg hvordan du vil støtte</p>
          <div className="">
            <label className="flex flex-row gap-2">
              <input className="accent-grå" type="radio" name="supportType" value="option1" />
              Enkelt donation
            </label>
            <label className="flex flex-row gap-2">
              <input className="accent-grå" type="radio" name="supportType" value="option2" />
              Støt fast
            </label>
          </div>
          <div className="flex gap-4 pt-5 justify-center">
            {/* Corrected button tags */}
            <button className={`border border-1 rounded-md p-1 w-20 text-center text-grå ${selectedButton === 100 ? "bg-lys_grå text-grå" : "bg-white"}`} onClick={() => handleButtonClick(100)}>
              100 kr
            </button>
            <button className={`border border-1 rounded-md p-1 w-20 text-center text-grå ${selectedButton === 200 ? "bg-lys_grå text-grå" : "bg-white"}`} onClick={() => handleButtonClick(200)}>
              200 kr
            </button>
            <button className={`border border-1 rounded-md p-1 w-20 text-center text-grå ${selectedButton === 300 ? "bg-lys_grå text-grå" : "bg-white"}`} onClick={() => handleButtonClick(300)}>
              300 kr
            </button>
          </div>
          <div className="pt-4 ">
            <label>
              <input className="border border-1 rounded-md p-2 w-56 text-grå" placeholder="Valgfrit beløb" type="text" />
            </label>
          </div>
          <form>
            <div className="flex gap-2 pt-4 ">
              <label className="flex flex-row gap-2">
                <input className="accent-grå" type="radio" name="supportType" value="option1" />
                Betalingskort
              </label>
              <label className="flex flex-row gap-2">
                <input className="accent-grå" type="radio" name="supportType" value="option2" />
                Mobilepay
              </label>
            </div>
          </form>
          <div className="pt-4">
            <button className="bg-orange px-2 py-2 rounded-lg hover:bg-hover_orange text-white ">STØT NU</button>
          </div>
        </div>
      </div>
    </>
  );
};

// Export your component
export default Stot;
