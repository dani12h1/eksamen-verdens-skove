"use client";

import React from "react";
import Navigation from "../../components/Navigation";
import Image from "next/image";
import Strategi from "../../billeder/strategi.png";
import Tree from "../../billeder/treesfromground.png";
import Frivillig from "../../billeder/Hvemervi.png";
import Footer from "../../components/Footer";
import Head from "next/head";

const Page = () => {
  return (
    <>
      <Head>
        <title></title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <section className="relative">
        <Image src={Frivillig} className="w-full h-full brightness-[0.7]" alt="Picture of global work" />
        <h1 className="text-white absolute top-[6rem] lg:pl-[6vw] pl-[6vw] lg:pt-[25vw]  md:pl-[6vw] md:pt-[20vw] pb-4">Hvem er vi?</h1>
      </section>

      <main className="leading-8">
        <div className="lg:mx-22 lg:p-5">
          <div className=" lg:p-0 mx-auto my-14 ">
            <section className="p-3 lg:mx-44 lg:my-20 flex">
              <div className="lg:max-w-[1000px] mx-auto">
                <h2 className="">Verdens Skove siden 1983 </h2>
                <p className="flex pb-3  md:pb-10 lg:pb-3 lg:text-[1.4rem]">I 40 år har Verdens Skove kæmpet for at bevare og informere om vigtigheden af at bevare verdens skove. Afskovning truer ikke kun klimaet, men også oprindelige folk og lokalsamfund. I 1983 tog visionære biologistuderende fra Aarhus affære ved at skabe bevidsthed om rydning af regnskove. Grundlæggelsen af Verdens Skove markerede starten på en vedvarende kamp for at bevare biodiversiteten globalt.</p>
              </div>
            </section>
          </div>
          <div>
            <section className="pb-3 lg:p-16 justify-center">
              <div className="p-5 lg:flex lg:flex-row md:flex-col md:p-10 lg:p-10 mx-0 rounded-2xl lg:justify-center items-center">
                <Image className="h-full w-full lg:max-w-[600px] md:max-w-[500px] mx-auto lg:order-2 " src={Strategi} alt="Picture of strategy" />
                <div className=" flex justify-center flex-col lg:order-1  ">
                  <h2 className="pt-12 md:pt-6 lg:pt-6">Verden Skoves mission og vision</h2>
                  <p className="lg:max-w-[700px]">
                    Den vision vi gerne vil arbejde for og derfor er vi stolte af at kunne præsentere en ny strategi, der skal sikre, at vi, de næste fem år, fortsat kan styrke skovens rolle og kæmpe for de mennesker, der lever i og med skoven.
                    <p>Verdens Skoves nye strategi har tre strategiske prioriteter: Grønne handlinger, et stærkt civilsamfund og politisk forandring. Grønne løsninger for mere klimahandling, global lighed og biodiversitet kræver, at vi mobiliserer civilsamfundet og skaber politisk velvilje. De tre strategiske prioriteter hænger uløseligt sammen og vil undervejs i strategiperioden gensidigt styrke hinanden. Det gælder i alle de lande, Verdens Skove arbejder i, inklusiv Danmark.</p>
                  </p>
                </div>
              </div>
            </section>

            <section className="pb-16 lg:p-10">
              <div className="p-5 lg:flex lg:flex-row md:flex-col md:p-10 lg:p-10 mx-0 rounded-2xl items-center">
                <Image className="h-full w-full lg:max-w-[600px] md:max-w-[500px] mx-auto order-1" src={Tree} alt="Picture of trees" />
                <div className="md:p-10 flex justify-center flex-col order-2 pt-5">
                  <h2 className="pt-10 md:pt-6 leading-[2.7rem] ">Verdens Skove internationalt og lokalt </h2>
                  <p className="max-w-[700px]">
                    Vi arbejder i områder med særlig høj biodiversitet sammen med vores partnere i Honduras, Nicaragua, Panama og Bolivia forsvarer vi regnskoven. Logikken bag vores løsninger er, at vi ser regnskoven som en ressource, der gennem bæredygtig anvendelse kan sikre, at regnskoven bliver bevaret for fremtidige generationer. I Danmark kæmper vi for at stoppe tabet af skovenes biologiske mangfoldighed. Vi vil skabe et nyt dansk landskab med mere vild skovnatur, der er rig på biologisk mangfoldighed. Vi hjælper virksomheder, stater og forbrugere med at tage ansvar ude og hjemme og sikrer derved en bæredygtig anvendelse af skovens ressourcer. Vi sætter skoven på den politiske dagsorden og oplyser om de problemer, der opstår - særligt i forhold til klimaet - når skovene ødelægges, og
                    den vilde natur forsvinder.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
        <section className="lg:pb-20 lg:p-16">
          <iframe className="lg:h-[80vh] md:h-[60vh] md:p-3 h-[30vh] w-full p-3   lg:p-8 mute" src="https://www.youtube.com/embed/xrN8A2zsf4Y"></iframe>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Page;
