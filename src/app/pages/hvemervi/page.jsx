"use client";

import React from "react";
import Navigation from "../../components/Navigation";
import Image from "next/image";
import Strategi from "../../billeder/strategi.png";
import Tree from "../../billeder/treesfromground.png";
import Frivillig from "../../billeder/Hvemervi.png";
import Footer from "../../components/Footer";

const Page = () => {
  return (
    <>
      <Navigation />
      <section className='relative'>
        <Image src={Frivillig} className='w-full h-full brightness-50 ' alt='Picture of global work' />
        <h1 className='text-white absolute top-[7rem] lg:pl-[6vw] pl-[6vw] lg:pt-[25vw]  md:pl-[6vw] md:pt-[20vw] pb-4'>Hvem er vi?</h1>
      </section>

      <main className='leading-7 '>
        <div className='lg:mx-22'>
          <div className=' lg:p-0 mx-auto my-14 '>
            <section className='p-3 lg:mx-44 lg:my-20 flex'>
              <div className='lg:max-w-[1000px] mx-auto'>
                <h2 className=' text-center  leading-8'>VERDENS SKOVE SIDEN 1983 </h2>
                <p className='flex text-center pb-10 p-3 md:pb-20'>I år, 2023, er det 40 år siden, at Verdens Skove blev grundlagt. I dag er det velkendt, at afskovning skader klimaet, koster oprindelige folk og andre lokale deres hjem, og at det er en af de væsentligste årsager til den hurtigste udryddelse af arter, siden meteoren ramte jorden for 66 millioner år siden. I 1983 var problemerne med rydning af de tropiske skove derimod ikke kendt blandt danskerne. En gruppe entusiastiske og modige biologistuderende fra Aarhus ønskede derfor at sætte rydning af regnskove på dagsordenen og øge indsatsen for at bevare verdens skove. De grundlagde derfor foreningen og lige siden har vi kæmpet for artsrige skove kloden over..</p>
              </div>
            </section>
          </div>
          <div>
            <section className='pb-16 '>
              <div className='p-5 lg:flex lg:flex-row md:flex-col md:p-10 lg:p-10 mx-0 rounded-2xl lg:justify-center items-center'>
                <Image className='h-full w-full lg:max-w-[400px] md:max-w-[500px] mx-auto lg:order-2 ' src={Strategi} alt='Picture of the old days' />
                <div className=' md:p-20 flex justify-center flex-col lg:order-1  '>
                  <h2 className='pt-12 md:pt-6 lg:pt-6'>Verden Skoves mission og vision</h2>
                  <p className=''>Den vision vil vi gerne arbejde for og derfor er vi stolte af at kunne præsentere en ny strategi, der skal sikre, at vi, de næste fem år, fortsat kan styrke skovens rolle og kæmpe for de mennesker, der lever i og med skoven. Verdens Skoves nye strategi har tre strategiske prioriteter: Grønne handlinger, et stærkt civilsamfund og politisk forandring. Grønne løsninger for mere klimahandling, global lighed og biodiversitet kræver, at vi mobiliserer civilsamfundet og skaber politisk velvilje. De tre strategiske prioriteter hænger uløseligt sammen og vil undervejs i strategiperioden gensidigt styrke hinanden. Det gælder i alle de lande, Verdens Skove arbejder i, inklusiv Danmark </p>
                </div>
              </div>
            </section>

            <section className='pb-16'>
              <div className='p-5 lg:flex lg:flex-row md:flex-col md:p-10 lg:p-10 mx-0 rounded-2xl items-center'>
                <Image className='h-full w-full lg:max-w-[400px] md:max-w-[500px] mx-auto order-1' src={Tree} alt='Picture of the old days' />
                <div className='md:p-20 flex justify-center flex-col order-2 '>
                  <h2 className='pt-12 md:pt-6 lg:pt-6'>Verdens Skove internationalt og lokalt </h2>
                  <p className=''>
                    Vi arbejder i områder med særlig høj biodiversitet sammen med vores partnere i Honduras, Nicaragua, Panama og Bolivia forsvarer vi regnskoven. Logikken bag vores løsninger er, at vi ser regnskoven som en ressource, der gennem bæredygtig anvendelse kan sikre, at regnskoven bliver bevaret for fremtidige generationer. I Danmark kæmper vi for at stoppe tabet af skovenes biologiske mangfoldighed. Vi vil skabe et nyt dansk landskab med mere vild skovnatur, der er rig på biologisk mangfoldighed. Vi hjælper virksomheder, stater og forbrugere med at tage ansvar ude og hjemme og sikrer derved en bæredygtig anvendelse af skovens ressourcer. Vi sætter skoven på den politiske dagsorden og oplyser om de problemer, der opstår - særligt i forhold til klimaet - når skovene ødelægges, og
                    den vilde natur forsvinder.{" "}
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
        <section className='pb-20'>
          <iframe className='lg:h-[80vh] md:h-[60vh] md:p-3 h-[30vh] w-full p-3   lg:p-8 mute' src='https://www.youtube.com/embed/xrN8A2zsf4Y'></iframe>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Page;
