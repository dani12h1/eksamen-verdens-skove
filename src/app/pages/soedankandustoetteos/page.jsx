import React from "react";
import Navigation from "../../components/Navigation";
import Image from "next/image";
import cover2 from "../../billeder/unsplash.png";
import truck from "../../billeder/truck.png";
import totebag from "../../billeder/totebag.png";
import certificat from "../../billeder/certifikat.png";
import testamente from "../../billeder/testamenter.png";
import mobil from "../../billeder/mobil.png";
import hsnds from "../../billeder/hands.png";
import Footer from "../../components/Footer";
import Link from "next/link";

function page() {
  return (
    <>
      <Navigation />
      <section className="relative">
        <Image src={cover2} className="w-full h-full" alt="Picture of global work" />
        <h1 className="text-white absolute top-[7rem] lg:pl-[6vw] pl-[6vw] lg:pt-[25vw]  md:pl-[6vw] md:pt-[20vw] pb-4">Sådan kan du støtte os</h1>
      </section>

      <main className="leading-7 ">
        <div className=" lg:p-0 mx-22 my-14">
          <section className="p-3 lg:mx-44 lg:my-20">
            <div className="mx-auto lg:max-w-[1000px]">
              <h2 className="flex justify-center">Dine penge gør en kæmpe forskel </h2>
              <p className="flex text-center pb-10 p-8 md:pb-10">Brænder du for Når du støtter os, er du med til at bremse den enorme CO2-forurening, der kommer fra skovrydning, bevare regnskoven sammen med de mennesker, der bor i og omkring skoven, redde de tusindvis af dyre- og plantearter, der lever i regnskoven og skaber større rigdom af dyr og planter i Danmark.</p>
            </div>
          </section>
        </div>
        <div className="m-9 grid gap-6 md:gap-3 lg:gap-10 lg:flex md:flex sm:justify-center ">
          <div className="shadow-xl rounded-[20px] min-h-[400px] max-w-[500px] ">
            <Image className="rounded-t-lg " src={truck} width={500} height={500} alt="Picture of workers " />
            <div className="p-6">
              <h3>Doner til vores arbejde</h3>
              <p>Giv et valgfrit beløb, og vær med til at redde skoven nu!</p>

              <div className="mx-auto ">
                <Link href="stot" className="text-orange text-lg ">
                  Doner her →
                </Link>
              </div>
            </div>
          </div>
          <div className="shadow-xl rounded-[20px] min-h-[400px] max-w-[500px]">
            <Image className="rounded-t-lg" src={totebag} width={500} height={500} alt="Picture of totebag" />
            <div className="p-6">
              <h3>Besøg vores webshop</h3>
              <p>Støt os ved køb af plakater, kaffe og meget mere bla bla</p>

              <Link href="#" className="text-orange text-lg ">
                Gå til webshop →
              </Link>
            </div>
          </div>
          <div className="shadow-xl rounded-[20px] min-h-[400px] max-w-[500px] ">
            <Image className="rounded-t-lg" src={certificat} width={500} height={500} alt="Picture of certificate" />
            <div className="p-6">
              <h3>Regnskovscertifikat</h3>
              <p>Køb et stykke jord og hjælp med at bevare regnskoven</p>

              <Link href="#" className="text-orange text-lg ">
                Køb her →
              </Link>
            </div>
          </div>
        </div>

        <div className="m-9 pt-20 pb-20 grid gap-6 md:gap-3 lg:gap-10 lg:flex md:flex sm:justify-center ">
          <div className="shadow-xl rounded-[20px] min-h-[400px] max-w-[500px]">
            <Image className="rounded-t-lg " src={mobil} width={500} height={500} alt="Picture of greenspeak " />
            <div className="p-6 ">
              <h3>Greenspeak</h3>
              <p>Støt skoven gennem dit mobilregning med Greenspeak</p>
              <Link href="#" className="text-orange text-lg ">
                Læs mere →
              </Link>
            </div>
          </div>
          <div className="shadow-xl rounded-[20px] min-h-[400px] max-w-[500px]">
            <Image className="rounded-t-lg max-h-[250px] max-w-[500px]" src={hsnds} width={500} height={500} alt="Picture of hands" />
            <div className="p-6 ">
              <h3>Skriv under</h3>
              <p>Støt os ved køb af plakater, kaffe og meget mere bla bla tøt os ved køb af plakater, kaffe og meget mere. </p>
              <Link href="#" className="text-orange text-lg ">
                Læs mere →
              </Link>
            </div>
          </div>
          <div className="shadow-xl rounded-[20px] min-h-[400px] max-w-[500px]">
            <Image className="rounded-t-lg" src={testamente} width={500} height={500} alt="Picture of testamente" />
            <div className="p-6 ">
              <h3>Testamenter penge</h3>
              <p>Køb et stykke jord og hjælp med at bevare regnskoven</p>
              <Link href="#" className="text-orange text-lg ">
                Læs mere →
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default page;
