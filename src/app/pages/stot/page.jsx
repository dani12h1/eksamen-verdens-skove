"use client";
import React, { useState } from "react";
import Image from "next/image";
import Navigation from "../../components/Navigation";
import hero from "../../billeder/stot.png";
import Head from "next/head";

const Stot = () => {
  // State to track the selected amount and support type
  const [selectedButton, setSelectedButton] = useState(null);
  const [supportType, setSupportType] = useState("");

  // Function to handle button click and toggle selection
  const handleButtonClick = (button) => {
    setSelectedButton(button === selectedButton ? null : button);
  };

  // Function to handle radio button change for support type
  const handleSupportTypeChange = (event) => {
    setSupportType(event.target.value);
  };

  // Function to handle input field change
  const handleInputFieldChange = (event) => {
    // Remove the toggle only if "Enkelt donation" is not selected
    if (!isStotFastSelected) {
      setSelectedButton(null);
    }

    // Additional logic to clear selection if something is written in the input field
    const inputValue = event.target.value.trim();
    if (inputValue !== "") {
      setSelectedButton(null);
    }
  };

  // Determine if "Støt fast" is selected
  const isStotFastSelected = supportType === "option2";

  return (
    <>
      <body>
        <Head>
          <title>hej</title>
        </Head>

        <Navigation />
        {/* bg */}
        <main
          className="bg-gray-400 h-full w-screen flex justify-center items-center"
          style={{
            backgroundImage: `url(${hero.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* wrap om container 1 og 2 */}
          <div className="grid lg:grid-rows-2 lg:grid-cols-2 grid-cols-1 grid-rows-1 lg:ml-[15vw] ">
            {/* Your content goes here */}
            <div className="lg:flex lg:flex-col grid grid-rows lg:items-end mt-22 mx-auto">
              {/* boks 1 */}
              <div className="mt-20 lg:flex lg:flex-col  flex flex-col mx-auto lg:mr-[2rem] ">
                <h2 className="text-center">STØT VERDENS SKOVE</h2>
                <p className="text-center ">Dit bidrag gør en forskel</p>
              </div>
              {/* boks 2 */}
              <div className=" p-10 bg-white rounded-lg bg-opacity-80 mx-8 my-10 lg:w-[450px] lg:h-[500px] lg:max-w-[500px] max-w-[310px] text-[20px]">
                <p className="text-black pb-4">Vælg hvordan du vil støtte</p>
                <form>
                  <div className="">
                    <label className="flex flex-row gap-2">
                      <input className="accent-grå" type="radio" name="supportType" value="option1" checked={supportType === "option1"} onChange={handleSupportTypeChange} />
                      Enkelt donation
                    </label>
                    <label className="flex flex-row gap-2">
                      <input className="accent-grå" type="radio" name="supportType" value="option2" checked={supportType === "option2"} onChange={handleSupportTypeChange} />
                      Støt fast
                    </label>
                  </div>
                </form>
                <div className="flex gap-4 pt-5">
                  <button className={`border border-1 rounded-lg p-1 w-20 text-center text-grå ${selectedButton === 100 ? "bg-orange text-hvid" : "bg-white"}`} onClick={() => handleButtonClick(100)}>
                    100 kr
                  </button>
                  <button className={`border border-1 rounded-lg p-1 w-20 text-center text-grå ${selectedButton === 200 ? "bg-orange text-hvid" : "bg-white"}`} onClick={() => handleButtonClick(200)}>
                    200 kr
                  </button>
                  <button className={`border border-1 rounded-lg p-1 w-20 text-center text-grå ${selectedButton === 300 ? "bg-orange text-hvid" : "bg-white"}`} onClick={() => handleButtonClick(300)}>
                    300 kr
                  </button>
                </div>
                <div className="pt-4 ">
                  <label>
                    <input className="border border-1 rounded-lg p-2 w-56 text-grå" placeholder="Valgfrit beløb" type="text" onChange={handleInputFieldChange} />
                  </label>
                </div>

                <form>
                  <div className="lg:flex-row md:flex flex-col gap-2 pt-4">
                    <label className="flex flex-row gap-2">
                      <input className="accent-grå" type="radio" name="supportType" value="option3" />
                      Betalingskort
                    </label>
                    <label className="flex flex-row gap-2">
                      <input className="accent-grå" type="radio" name="supportType" value="option4" />
                      Mobilepay
                    </label>
                  </div>
                </form>
                <form>
                  {isStotFastSelected && (
                    <div className="lg:flex-row md:flex flex-col gap-2">
                      <label className="flex flex-row gap-2">
                        <input className="accent-grå" type="radio" name="supportType" value="option5" />
                        Månedligt
                      </label>
                      <label className="flex flex-row gap-2">
                        <input className="accent-grå" type="radio" name="supportType" value="option6" />
                        Årligt
                      </label>
                    </div>
                  )}
                </form>

                <div className="pt-4">
                  <button className="bg-orange px-2 py-2 rounded-lg hover:bg-hover_orange text-white ">STØT NU</button>
                </div>
              </div>
            </div>
            {/* container 2 */}
            <div className="lg:flex lg:flex-col md:flex-col grid grid-rows  mt-22 lg:justify-start pr-[20vw] max-w-[500px]">
              {/* boks 1 */}
              <div className=" p-8 bg-white shadow-md rounded-lg bg-opacity-80 flex flex-col justify-center mx-8 my-2 lg:mt-28 h-[30vh] lg:w-[300px] max-w-[450px]">
                <h3>Enkelt donation</h3>
                <p>Alle donationer tæller, selv de helt små beløb. </p>
              </div>
              {/* boks 2 */}
              <div className=" p-8 bg-white shadow-md rounded-lg bg-opacity-80 flex flex-col justify-center mx-8  my-10 lg:h-[30vh] h-[40vh] lg:w-[300px] w-[85vw] max-w-[450px] ">
                <h3>Støt fast</h3>
                <p>Dit faste bidrag betyder, at vi kan lægge langsigtede strategier for vores indsats. På den måde er du med til at skabe et stærkt grundlag for vores arbejde.</p>
              </div>
            </div>
          </div>
        </main>
      </body>
    </>
  );
};

export default Stot;
