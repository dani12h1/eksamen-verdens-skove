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
import danskernes from "../../billeder/danskernes.jpeg";
import ProgressBar from "../../components/progressBar";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Link from "next/link";
import Head from "next/head";

const Card = () => {
  return (
    <>
      <main className="leading-12 ">
        <Navigation />
        <section className="relative ">
          <div className="relative lg:top-[40vh] md:top-[30vh]">
            <h1 className="absolute text-white p-5 pt-10 z-[1] lg:max-w-[50vw] md:max-w-[45vw] lg:pl-[8vw] lg:pt-0 md:pt-0 ">Red skovene, før planeten mister pusten </h1>
          </div>
          <div className="relative brightness-[0.7]">
            <Image className="h-[62vh] lg:h-[85vh]  lg:w-full lg:object-cover" src={hero} alt="Picture of workers" />
          </div>
          <div className="lg:flex">
            <div className="absolute top-[18rem] lg:top-52 md:top-52 w-full h-full flex justify-center lg:justify-end md:justify-end md:pr-28 lg:pr-48  items-center ">
              <ProgressBar className="" />
            </div>
          </div>
        </section>

        <div className="bg-white m-4 lg:m-28 md:m-22">
          <section className="p-2 pt-18 lg:pt-0 pb-10 text-black flex flex-col">
            <h2 className=" text-3xl lg:pt-6 pt-[24rem]  md:pt[6rem]">Hvem er Verdens Skove? </h2>
            <p className="max-w-[1000px]  mb-5">Verdens Skove er en dansk miljøorganisation, der gennem 40 år har arbejdet for en verden med en rig skovnatur gennem bl.a. bevarelse af skovene. Vores fokus er på klima, biodiversitet og de oprindelige folks rettigheder. </p>
            <div className="">
              <Link href="hvemervi" className="text-orange text-lg ">
                Læs mere →
              </Link>
            </div>
          </section>
          <section className="w-full h-full  mx-auto  lg:pt-20 border-black">
            <div className=" flex-col justify-center pt-10 ">
              <h2 className="flex justify-center">Sådan kan du støtte vores arbejde</h2>
            </div>

            <div className="grid gap-6 md:gap-3 lg:gap-10 lg:flex md:flex sm:justify-center ">
              <div className="shadow-xl rounded-[20px]">
                <Image className="rounded-t-lg lg:max-h-[400px]" src={truck} width={500} height={500} alt="Picture of workers " />
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
              <div className="shadow-xl rounded-[20px]">
                <Image className="rounded-t-lg" src={totebag} width={500} height={500} alt="Picture of totebag" />
                <div className="p-6">
                  <h3>Besøg vores webshop</h3>
                  <p>Støt os ved køb af plakater, kaffe og meget mere bla bla</p>

                  <div className="mx-auto ">
                    <Link href="#" className="text-orange text-lg ">
                      Gå til webshop →
                    </Link>
                  </div>
                </div>
              </div>
              <div className="shadow-xl rounded-[20px] ">
                <Image className="rounded-t-lg" src={certificat} width={500} height={500} alt="Picture of certificate" />
                <div className="p-6">
                  <h3>Regnskovscertifikat</h3>
                  <p>Køb et stykke jord og hjælp med at bevare regnskoven</p>

                  <div className="mx-auto ">
                    <Link href="#" className="text-orange text-lg ">
                      Køb her →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="py-10 text-center">
              <Link href="soedankandustoetteos" className="text-orange text-lg ">
                Se flere støttemuligheder →
              </Link>
            </div>
          </section>
          <section className="mb-12"></section>
          <section>
            <div>
              <div className="bg-gray-200 p-5 lg:flex lg:flex-row md:flex-col md:p-10 lg:p-10 mx-0 rounded-2xl">
                <Image className="h-full w-full lg:max-w-[400px] md:max-w-[500px] mx-auto" src={bw} alt="Picture of the old days" />
                <div className=" md:p-20 flex justify-center flex-col">
                  <h2 className="pt-12 md:pt-6 lg:pt-6">Hvordan arbejder vi? </h2>
                  <p className="">Vi samarbejde med folk, som lever i og af skoven. Vi arbejder i områder med særlig høj biodiversitet. I dag har Verdens Skove indsatser i Danmark, Latinamerika og Østafrika. Verdens Skove samarbejder med lokale partnerorganisationer i det globale syd og har dedikeret gruppe frivillige i Danmark. </p>
                  <div>
                    <div className="mx-auto pt-8 ">
                      <Link href="hvadgorvi" className="text-orange text-lg ">
                        Læs mere →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="lg:pb-28">
            <h2 className="flex pt-12 lg:pt-28 justify-center">Aktuelt nyt</h2>
            <div className="flex justify-center">
              <div className="flex overflow-scroll h-[100%]">
                <div className=" flex gap-4 justify-center ">
                  <div className=" w-[23rem] border-2  rounded-[20px]">
                    <Image className="rounded-t-[20px]" src={pink} alt="Picture of origin people" />
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
                      <button className="text-orange text-lg ">Læs mere →</button>
                    </div>
                  </div>
                  <div className="w-[23rem]  relative border-2  rounded-[20px]">
                    <Image className="rounded-t-[20px]" src={people} alt="Picture of people in the forest" />
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

                      <button className="text-orange text-lg absolute bottom-4">Læs mere →</button>
                    </div>
                  </div>

                  <div className="w-[23rem] relative border-2  rounded-[20px] ">
                    <Image className="rounded-t-[20px]" src={foresttruck} alt="Picture of forest and truck" />
                    <div className="flex p-4 justify-between">
                      <p>18 SEPTEMBER 2023</p>
                      <div className="flex ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                        </svg>
                        <p>Bolivia</p>
                      </div>
                    </div>
                    <div className="p-4  ">
                      <h3>Tropiske skove forsvinder</h3>
                      <p>Nye tal viser en bekymrende udvikling i tab af skovdække i Bolivia. </p>
                      <button className="text-orange absolute bottom-4 text-lg ">Læs mere →</button>
                    </div>
                  </div>
                  <div className="w-[23rem] relative  border-2 rounded-[20px]">
                    <Image className="rounded-t-[20px]" src={danskernes} alt="Picture of animal" />
                    <div className="flex p-4 justify-between">
                      <p>03 AUGUST 2023</p>
                      <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                        </svg>
                        <p>Costa Rica</p>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3>”Danskernes regnskov”</h3>
                      <p>Nye tal viser en bekymrende udvikling i tab af skovdække i Bolivia. Landet er et af de steder i verden, kun overgået af Brasilien. </p>
                      <button className="text-orange absolute bottom-4 justify-end text-lg">Læs mere →</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" text-center">
              <button className="text-orange pt-14 text-lg">Flere artikler →</button>
            </div>
          </section>
        </div>

        <Footer className="p-0" />
      </main>
    </>
  );
};

export default Card;
