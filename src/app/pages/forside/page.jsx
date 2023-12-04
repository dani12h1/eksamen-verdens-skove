import React from "react";
import Image from "next/image";
import truck from "../../billeder/truck.png";
import totebag from "../../billeder/totebag.png";
import certificat from "../../billeder/certifikat.png";
import bw from "../../billeder/blackwhite.png";
import pink from "../../billeder/pinkpeople.png";
import people from "../../billeder/peopleinforest.png";
import foresttruck from "../../billeder/treesandtruck.png";
import hero from "../../billeder/herosplashphoto.jpeg";
import ProgressBar from "../../components/progressBar";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

const Card = () => {
  return (
    <>
      <main className="leading-12">
        <Navigation />
        <section className="relative">
          <div className="relative lg:top-[40vh]">
            <h1 className="absolute text-white p-5 pt-10 z-50 text-[2rem] lg:text-[3.5rem] lg:max-w-[50vw] md:max-w-[50vw] lg:pl-[8vw] lg:pt-48 ">Red skovene, før planeten mister pusten </h1>
          </div>
          <div className="relative">
            <Image className="h-[62vh] lg:h-full lg:w-full" src={hero} alt="Picture of workers" />
          </div>
          <div className="lg:flex">
            <div className="absolute top-52 lg:top-32 w-full h-full flex justify-center lg:justify-end md:justify-end md:pr-40   lg:pr-52  items-center">
              <ProgressBar className="" />
            </div>
          </div>
        </section>

        <div className="bg-white p-4 pt-40 lg:p-32">
          <section className="p-3 text-black">
            <h1 className="">Hvem er Verdens Skove? </h1>
            <p>Verdens Skove er en dansk miljøorganisation, der gennem 40 år har arbejdet for en verden med en rig skovnatur gennem bl.a. bevarelse af skovene. Vores fokus er på klima, biodiversitet og de oprindelige folks rettigheder. </p>
            <button className=" text-orange pt-2">Læs mere →</button>
          </section>
          <section className="w-full h-full border-t-2 border-black">
            <div className=" flex-col justify-center ">
              <h1>Sådan kan du støtte vores arbejde</h1>
            </div>

            <div className="grid gap-4 lg:flex md:flex sm:justify-center">
              <div className="shadow-xl">
                <Image src={truck} width={500} height={500} alt="Picture of workers" />
                <div className="p-6">
                  <h3>Doner til vores arbejde</h3>
                  <p>Giv et valgfrit beløb, og vær med til at redde skoven nu!</p>
                  <button className="text-orange pt-16">Doner her →</button>
                </div>
              </div>
              <div className="shadow-xl">
                <Image src={totebag} width={500} height={500} alt="Picture of totebag" />
                <div className="p-6">
                  <h3>Besøg vores webshop</h3>
                  <p>Støt os ved køb af plakater, kaffe og meget mere..</p>
                  <button className="text-orange pt-16">Gå til webshop →</button>
                </div>
              </div>
              <div className="shadow-xl ">
                <Image src={certificat} width={500} height={500} alt="Picture of certificate" />
                <div className="p-6">
                  <h3>Regnskovscertifikat</h3>
                  <p>Køb et stykke jord og hjælp med at bevare regnskoven</p>
                  <button className="text-orange pt-16">Køb her →</button>
                </div>
              </div>
            </div>

            <button className="text-orange pt-6">Se flere støttemuligheder →</button>
          </section>
          <section className="mb-12"></section>
          <section>
            <div>
              <div className="bg-gray-200 p-5 lg:flex md:flex md:p-10 lg:p-10">
                <Image className="h-auto w-auto" src={bw} alt="Picture of the old days" />
                <div className=" md:p-8">
                  <h1 className="pt-12 md:pt-6 lg:pt-6">Hvordan arbejder vi? </h1>
                  <p>Vi samarbejde med folk, som lever i og af skoven. Vi arbejder i områder med særlig høj biodiversitet. I dag har Verdens Skove indsatser i Danmark, Latinamerika og Østafrika. Verdens Skove samarbejder med lokale partnerorganisationer i det globale syd og har dedikeret gruppe frivillige i Danmark. </p>
                  <button className="text-orange pt-2 md:pt-10 lg:pt-10">Læs mere →</button>
                </div>
              </div>
            </div>
          </section>
          <section className="">
            <h2 className="flex justify-center">Aktuelt nyt</h2>
            <div className="flex overflow-scroll lg:justify-center">
              <div className=" flex justify-center gap-4">
                <div className=" w-80 shadow-xl">
                  <Image src={pink} alt="Picture of origin people" />
                  <div className="flex p-4 justify-between">
                    <p>6 NOVEMBER 2023</p>
                    <div className="flex">
                      <svg className="" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                      </svg>
                      <p>Pico Bonito </p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3>Støtte af tolupanfolket</h3>
                    <p> Oprindelige folk og civilsamfundet i Honduras blev ikke kun udfordret af sundhedsrelateret pres under COVID-19 pandemien.</p>
                    <button className="text-orange pt-2">Læs mere →</button>
                  </div>
                </div>
                <div className=" w-80 shadow-xl">
                  <Image src={people} alt="Picture of people in the forest" />
                  <div className="flex p-4 justify-between">
                    <p>20 NOVEMBER 2023</p>
                    <div className="flex">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                      </svg>
                      <p>Etiopien</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3>Nyt initiativ: forbedring af skovovervågning</h3>
                    <p>Verdens Skove arbejder på et projekt i det sydvestlige Etiopien.</p>

                    <button className="text-orange pt-2">Læs mere →</button>
                  </div>
                </div>

                <div className="w-80 shadow-xl">
                  <Image src={foresttruck} alt="Picture of forest and truck" />
                  <div className="flex p-4 justify-between">
                    <p>18 SEPTEMBER 2023</p>
                    <div className="flex">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                      </svg>
                      <p>Bolivia</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3>Tropiske skove forsvinder</h3>
                    <p>Nye tal viser en bekymrende udvikling i tab af skovdække i Bolivia. </p>
                    <button className="text-orange pt-2">Læs mere →</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer className="p-0" />
      </main>
    </>
  );
};

export default Card;
