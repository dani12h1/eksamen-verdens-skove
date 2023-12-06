import React from "react";
import Image from "next/image";
import cover1 from "../../billeder/Hvadgørvi.png";
import blad from "../../billeder/Iconawesome-leaf.svg";

function page() {
  return (
    <>
      <main className='leading-7'>
        <section className='relative'>
          <Image src={cover1} className='w-full h-full' alt='Picture of global work' />
          <h1 className='text-white absolute top-[7rem] lg:pl-[6vw] pl-[6vw] lg:pt-[25vw]  md:pl-[6vw] md:pt-[20vw]'>Hvad gør vi</h1>
        </section>
        <div className=' pb-6 lg:m-28 md:m-22'>
          <section>
            <h2 className='pt-7'>Hvordan arbejder vi? </h2>
            <p className='lg:max-w-[1500px] md:max-w-[1000px] p-7'>Vi samarbejder med folk, som lever i og af skoven. I dag har Verdens Skove indsatser i Danmark, Latinamerika og Østafrika. Verdens Skove samarbejder med lokale partnerorganisationer i det globale syd og har dedikeret gruppe frivillige i Danmark. </p>
            <div className='bg-gray-200 p-5 rounded-2xl '>
              <div className='flex flex-col  items-center lg:flex-row '>
                <Image src={blad} className='w-8 h-18 ' alt='leafsvg' />
                <p className='ml-5 pb-4  mt-5'>Vi bremser den enorme CO2-forurening, der kommer fra skovrydning.</p>
              </div>

              <div className='flex flex-col items-center lg:flex-row '>
                <Image src={blad} className='w-8 h-18 ' alt='leafsvg' />
                <p className='ml-5 pb-4  mt-5'>Vi bevare regnskoven sammen med de mennesker, der bor i og omkring skoven.</p>
              </div>

              <div className='flex flex-col items-center lg:flex-row '>
                <Image src={blad} className='w-8 h-18' alt='leafsvg' />
                <p className='ml-5 pb-4  mt-5'>Vi redde de tusindvis af dyre- og plantearter, der lever i regnskoven.</p>
              </div>

              <div className='flex flex-col items-center lg:flex-row  '>
                <Image src={blad} className='w-8 h-18' alt='leafsvg' />
                <p className='ml-5 pb-4  mt-5'>Vi skaber større rigdom af dyr og planter i Danmark.</p>
              </div>
            </div>
          </section>
          <section className='w-full h-full  mx-auto  lg:pt-20 '>
            <div className=' flex-col justify-center pt-10 '>
              <h2 className='flex justify-center'>Sådan kan du støtte vores arbejde</h2>
            </div>

            <div className='grid gap-6 md:gap-3 lg:gap-10 lg:flex md:flex sm:justify-center '>
              <div className='shadow-xl rounded-[20px]'>
                <Image className='rounded-t-lg' src={blad} width={500} height={500} alt='Picture of workers ' />
                <div className='p-6'>
                  <h3>Doner til vores arbejde</h3>
                  <p>Giv et valgfrit beløb, og vær med til at redde skoven nu!</p>
                  <button className='text-orange'>Doner her →</button>
                </div>
              </div>
              <div className='shadow-xl rounded-[20px]'>
                <Image className='rounded-t-lg' src={blad} width={500} height={500} alt='Picture of totebag' />
                <div className='p-6'>
                  <h3>Besøg vores webshop</h3>
                  <p>Støt os ved køb af plakater, kaffe og meget mere bla bla</p>
                  <button className='text-orange'>Gå til webshop →</button>
                </div>
              </div>
              <div className='shadow-xl rounded-[20px] '>
                <Image className='rounded-t-lg' src={blad} width={500} height={500} alt='Picture of certificate' />
                <div className='p-6'>
                  <h3>Regnskovscertifikat</h3>
                  <p>Køb et stykke jord og hjælp med at bevare regnskoven</p>
                  <button className='text-orange '>Køb her →</button>
                </div>
              </div>
            </div>
            <div className='flex justify-center'>
              <button className='text-orange pt-6'>Se flere støttemuligheder →</button>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default page;
