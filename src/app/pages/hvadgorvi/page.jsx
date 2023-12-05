import React from "react";
import Image from "next/image";
import cover1 from "../../billeder/Hvadgørvi.png";

function page() {
  return (
    <>
      <main className='leading-7 p-5'>
        <section className='relative'>
          <Image src={cover1} className='w-full h-full' alt='Picture of global work' />
          <h1 className='text-white absolute top-[7rem] lg:pl-[6vw] pl-[6vw] lg:pt-[25vw]  md:pl-[6vw] md:pt-[20vw]'>Hvad gør vi</h1>
        </section>
        <section className=' pb-6'>
          <h2 className='pt-5'>Hvordan arbejder vi? </h2>
          <p className='lg:max-w-[1500px] md:max-w-[1000px]'>Vi samarbejder med folk, som lever i og af skoven. I dag har Verdens Skove indsatser i Danmark, Latinamerika og Østafrika. Verdens Skove samarbejder med lokale partnerorganisationer i det globale syd og har dedikeret gruppe frivillige i Danmark. </p>
        </section>
      </main>
    </>
  );
}

export default page;
