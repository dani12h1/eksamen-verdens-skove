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
import nyhed2 from "../../billeder/nyhed2.png";
import nyhed3 from "../../billeder/nyhed3.png";

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
            <div className="absolute top-[24rem] lg:top-52 md:top-52 w-full h-full flex justify-center lg:justify-end md:justify-end md:pr-20 lg:pr-48  items-center ">
              <ProgressBar className="" />
            </div>
          </div>
        </section>

        <div className="bg-white  lg:m-0 ">
          <section className="p-2 pt-18 lg:pt-0 pb-10 text-black flex flex-col lg:m-28 md:m-22 m-4">
            <h2 className="lg:pt-6 pt-[30rem] md:pt-[6rem]  md:pt[6rem]">Hvem er Verdens Skove? </h2>
            <p className="max-w-[1000px] lg:text-[1.4rem]  mb-5">Verdens Skove er en dansk miljøorganisation, der gennem 40 år har arbejdet for en verden med en rig skovnatur gennem bl.a. bevarelse af skovene. Vores fokus er på klima, biodiversitet og de oprindelige folks rettigheder. </p>
            <div className="">
              <Link href="hvemervi" className="text-orange ">
                Læs mere →
              </Link>
            </div>
          </section>
          <section className="w-full h-full  mx-auto  border-black m-4">
            <div className=" flex-col justify-center pt-10 m-4">
              <h2 className="flex justify-center">Sådan kan du støtte vores arbejde</h2>
            </div>

            <div className="grid gap-6 md:gap-3 lg:gap-10 lg:flex md:flex-row sm:justify-center  md:m-4 m-4">
              <div className="shadow-xl rounded-[10px] h-[520px] lg:w-[450px] sm:w-full">
                <Image className="rounded-t-lg object-cover  w-full h-[300px] " src={truck} width={500} height={500} alt="Picture of workers " />
                <div className="p-6">
                  <h3>Doner til vores arbejde</h3>
                  <p>Giv et valgfrit beløb, og vær med til at redde skoven nu!</p>

                  <div className="mx-auto pt-10 ">
                    <Link href="stot" className="text-orange text-[1.5rem] ">
                      Doner her →
                    </Link>
                  </div>
                </div>
              </div>
              <div className="shadow-xl rounded-[10px] h-[520px] lg:w-[450px] sm:w-full">
                <Image className="rounded-t-lg object-cover  w-full h-[300px]" src={totebag} width={500} height={500} alt="Picture of totebag" />
                <div className="p-6">
                  <h3>Besøg vores webshop</h3>
                  <p>Støt naturen ved køb af plakater, kaffe og meget mere..</p>

                  <div className="mx-auto pt-10 ">
                    <Link href="#" className="text-orange text-[1.5rem] ">
                      Gå til webshop →
                    </Link>
                  </div>
                </div>
              </div>
              <div className="shadow-xl rounded-[10px] h-[520px] lg:w-[450px] sm:w-full">
                <Image className="rounded-t-lg object-cover  w-full h-[300px] " src={certificat} width={500} height={500} alt="Picture of certificate" />
                <div className="p-6">
                  <h3>Regnskovscertifikat</h3>
                  <p>Køb et stykke jord og hjælp med at bevare regnskoven nu.</p>

                  <div className="mx-auto pt-10 ">
                    <Link href="#" className="text-orange text-[1.5rem] ">
                      Køb her →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="py-10 text-center">
              <Link href="soedankandustoetteos" className="text-orange  ">
                Se flere støttemuligheder →
              </Link>
            </div>
          </section>
          <section className="bg-gray-200 lg:justify-center 4 lg:flex lg:flex-row md:flex-col md:p-10 mx-0 pb-16 lg:p-10">
            <div className="p-5 lg:flex lg:flex-row md:flex-col md:p-10 lg:p-10 mx-auto rounded-2xl items-center">
              <Image className="h-full w-full  lg:max-w-[400px] md:max-w-[500px] mx-auto" src={bw} alt="Picture of there is not planet b" />
              <div className="md:p-8 flex justify-center flex-col order-2 ">
                <h2 className="pt-10 md:pt-6 ">Hvordan arbejder vi? </h2>
                <p className="max-w-[700px] ">Vi samarbejder med folk, som lever i og af skoven, og arbejder i områder med særlig høj biodiversitet. I dag har Verdens Skove indsatser i Danmark, Latinamerika og Østafrika. Verdens Skove samarbejder med lokale partnerorganisationer i det globale syd og har dedikeret gruppe frivillige i Danmark.</p>
                <Link href="globaltarbejde" className="text-orange  pt-4">
                  Læs mere →
                </Link>
              </div>
            </div>
          </section>

          <section className="lg:pb-28 pl-6">
            <h2 className="flex pt-12 lg:pt-28 justify-center">Aktuelt nyt</h2>
            <div className="flex lg:pl-[4vw]">
              <div className="flex overflow-scroll h-[100%]">
                <div className=" flex gap-4 justify-center">
                  <div className=" w-[23rem] border-2  rounded-[10px] bg-hvid ">
                    <Image className="rounded-t-[10px]" src={pink} alt="Picture of origin people" />
                    <div className="flex p-4 justify-between">
                      <p>6 DECEMBER 2023</p>
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
                      <button className="text-orange hover:text-hover_orange text-[1.5rem] ">Læs mere →</button>
                    </div>
                  </div>

                  <div className="w-[23rem]  relative border-2  rounded-[10px] bg-hvid">
                    <Image className="rounded-t-[10px]" src={people} alt="Picture of people in the forest" />
                    <div className="flex p-4 justify-between">
                      <p>6 NOVEMBER 2023</p>
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

                      <button className="text-orange  hover:text-hover_orange text-[1.5rem] absolute bottom-4">Læs mere →</button>
                    </div>
                  </div>

                  <div className="w-[23rem] relative border-2  rounded-[10px] bg-hvid">
                    <Image className="rounded-t-[10px]" src={foresttruck} alt="Picture of forest and truck" />
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
                      <button className="text-orange hover:text-hover_orange absolute bottom-4 text-[1.5rem] ">Læs mere →</button>
                    </div>
                  </div>

                  <div className="w-[23rem] relative  border-2 rounded-[10px] bg-hvid">
                    <Image className="rounded-t-[10px]" src={danskernes} alt="Picture of animal" />
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
                      <button className="text-orange  hover:text-hover_orange absolute bottom-4 justify-end text-[1.5rem]">Læs mere →</button>
                    </div>
                  </div>

                  <div className="w-[23rem] relative  border-2 rounded-[10px] bg-hvid">
                    <Image className="rounded-t-[10px]" src={nyhed3} alt="Picture of animal" />
                    <div className="flex p-4 justify-between">
                      <p>23 JULI 2023</p>
                      <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                        </svg>
                        <p>DANMARK</p>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3>Et naturbeskyttet Danmark</h3>
                      <p>Danmark skal have en biodiversitetslov, der sikrer etablering af 30 procent beskyttet natur på land og til havs i 2030. </p>
                      <button className="text-orange  hover:text-hover_orange absolute bottom-4 justify-end text-[1.5rem]">Læs mere →</button>
                    </div>
                  </div>

                  <div className="w-[23rem] relative  border-2 rounded-[10px] bg-hvid">
                    <Image className="rounded-t-[10px]" src={nyhed2} alt="Picture of animal" />
                    <div className="flex p-4 justify-between">
                      <p>11 JUNI 2023</p>
                      <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                        </svg>
                        <p>Tanzania</p>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3>Den vilde natur opløses</h3>
                      <p>Hvorfor registrerer vi ikke naturens forringelse? Hvorfor udbedrer vi ikke de skader, vi har påført kloden? </p>
                      <button className="text-orange  hover:text-hover_orange absolute bottom-4 justify-end text-[1.5rem]">Læs mere →</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" text-center">
              <button className="text-orange  hover:text-hover_orange pt-14 text-[1.5rem]">Flere artikler →</button>
            </div>
          </section>
        </div>

        <Footer className="p-0" />
      </main>
    </>
  );
};

export default Card;
