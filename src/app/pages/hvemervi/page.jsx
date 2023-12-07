"use client";

import React from "react";
import Navigation from "../../components/Navigation";
import Image from "next/image";
import Strategi from "../../billeder/strategi.png";
import Tree from "../../billeder/treesfromground.png";
import Frivillig from "../../billeder/Hvemervi.png";
import Footer from "../../components/Footer";
import YouTube from "react-youtube";

function page() {
  const opts = {
    height: "315",
    width: "560",
    playerVars: {
      // Add any additional player parameters here
      autoplay: 1,
    },
  };

  const videoId = "xrN8A2zsf4Y";

  return (
    <>
      <Navigation />
      <section className='relative'>
        <Image src={Frivillig} className='w-full h-full brightness-50 ' alt='Picture of global work' />
        <h1 className='text-white absolute top-[7rem] lg:pl-[6vw] pl-[6vw] lg:pt-[25vw]  md:pl-[6vw] md:pt-[20vw] pb-4'>Hvem er vi?</h1>
      </section>

      <main className='leading-7 '>
        <div className=' lg:p-0 mx-auto my-14 '>
          <section className='p-3 lg:mx-44 lg:my-20 flex'>
            <div className='lg:max-w-[1000px] mx-auto'>
              <h2 className=' text-center  leading-8'>VERDENS SKOVE SIDEN 1983 </h2>
              <p className='flex text-center pb-10 p-3 md:pb-20'>I år, 2023, er det 40 år siden, at Verdens Skove blev grundlagt. I dag er det velkendt, at afskovning skader klimaet, koster oprindelige folk og andre lokale deres hjem, og at det er en af de væsentligste årsager til den hurtigste udryddelse af arter, siden meteoren ramte jorden for 66 millioner år siden. I 1983 var problemerne med rydning af de tropiske skove derimod ikke kendt blandt danskerne. En gruppe entusiastiske og modige biologistuderende fra Aarhus ønskede derfor at sætte rydning af regnskove på dagsordenen og øge indsatsen for at bevare verdens skove. De grundlagde derfor foreningen og lige siden har vi kæmpet for artsrige skove kloden over..</p>
            </div>
          </section>
        </div>
        <section>
          <div className='p-5 lg:flex lg:flex-row md:flex-col md:p-10 lg:p-10 mx-0 rounded-2xl'>
            <Image className='h-full w-full lg:max-w-[400px] md:max-w-[500px] mx-auto order-1' src={Strategi} alt='Picture of the old days' />
            <div className=' md:p-20 flex justify-center flex-col order-2'>
              <h2 className='pt-12 md:pt-6 lg:pt-6'>Verden Skoves mission og vision</h2>
              <p className=''>Vi samarbejde med folk, som lever i og af skoven. Vi arbejder i områder med særlig høj biodiversitet. I dag har Verdens Skove indsatser i Danmark, Latinamerika og Østafrika. Verdens Skove samarbejder med lokale partnerorganisationer i det globale syd og har dedikeret gruppe frivillige i Danmark. </p>
            </div>
          </div>
        </section>
        <section>
          <div className='p-5 lg:flex lg:flex-row md:flex-col md:p-10 lg:p-10 mx-0 rounded-2xl'>
            <Image className='h-full w-full lg:max-w-[400px] md:max-w-[500px] mx-auto order-2' src={Tree} alt='Picture of the old days' />
            <div className=' md:p-20 flex justify-center flex-col order-1'>
              <h2 className='pt-12 md:pt-6 lg:pt-6'>Verden Skoves mission og vision</h2>
              <p className=''>Vi samarbejde med folk, som lever i og af skoven. Vi arbejder i områder med særlig høj biodiversitet. I dag har Verdens Skove indsatser i Danmark, Latinamerika og Østafrika. Verdens Skove samarbejder med lokale partnerorganisationer i det globale syd og har dedikeret gruppe frivillige i Danmark. </p>
            </div>
          </div>
        </section>
        <section className='flex justify-center lg:h-auto lg:w-auto w-full h-full pb-10'>
          <YouTube
            videoId={videoId}
            opts={opts}
            onReady={(event) => event.target.playVideo()} // Auto-play when the video is ready
          />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default page;
