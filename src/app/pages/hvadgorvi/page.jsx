import React from "react";
import Image from "next/image";
import Navigation from "../../components/Navigation";
import cover1 from "../../billeder/Hvadgørvi.png";
import blad from "../../billeder/Iconawesome-leaf.svg";
import politik from "../../billeder/politik.png";
import vild from "../../billeder/dansk.png";
import klima from "../../billeder/klima.png";
import globalt from "../../billeder/globalt.png";
import planetb from "../../billeder/planetb.png";
import hand from "../../billeder/hand.png";
import karlo from "../../billeder/karlo.png";
import plakat from "../../billeder/plakat.png";
import Footer from "../../components/Footer";

function page() {
  return (
    <>
      <Navigation />
      <main className='leading-7 '>
        <section className='relative'>
          <Image src={cover1} className='w-full h-full brightness-[0.6]' alt='Picture of global work' />
          <h1 className='text-white absolute top-[7rem] lg:pl-[6vw] pl-[6vw] lg:pt-[25vw]  md:pl-[6vw] md:pt-[20vw]'>Hvad gør vi</h1>
        </section>

        <div className=' pb-4  md:m-22'>
          <section className='p-4 lg:p-14 md:p-12' style={{ textAlign: "center" }}>
            <h2 className='pt-7 p-7'>Hvordan arbejder vi? </h2>
            <p className='mx-auto lg:pb-10 lg:max-w-[800px] md:max-w-[800px] p-7'>Vi samarbejder med folk, som lever i og af skoven. I dag har Verdens Skove indsatser i Danmark, Latinamerika og Østafrika. Verdens Skove samarbejder med lokale partnerorganisationer i det globale syd og har dedikeret gruppe frivillige i Danmark. </p>
          </section>
          <section>
            <div className='bg-gray-200 p-7 '>
              <div className='flex flex-col  items-center lg:flex-row lg:pl-12'>
                <Image src={blad} className='w-8 h-18 ' alt='leafsvg' />
                <p className='ml-5 pb-4 mt-5'>Vi bremser den enorme CO2-forurening, der kommer fra skovrydning.</p>
              </div>

              <div className='flex flex-col items-center lg:flex-row lg:pl-12'>
                <Image src={blad} className='w-8 h-18 ' alt='leafsvg' />
                <p className='ml-5 pb-4  mt-5'>Vi bevare regnskoven sammen med de mennesker, der bor i og omkring skoven.</p>
              </div>

              <div className='flex flex-col items-center lg:flex-row lg:pl-12'>
                <Image src={blad} className='w-8 h-18' alt='leafsvg' />
                <p className='ml-5 pb-4  mt-5'>Vi redde de tusindvis af dyre- og plantearter, der lever i regnskoven.</p>
              </div>

              <div className='flex flex-col items-center lg:flex-row lg:pl-12'>
                <Image src={blad} className='w-8 h-18' alt='leafsvg' />
                <p className='ml-5 pb-4  mt-5'>Vi skaber større rigdom af dyr og planter i Danmark.</p>
              </div>
            </div>
          </section>
          <section className='w-full h-full  mx-auto  lg:pt-20 p-12 mb-12 pb-10'>
            <div className=' flex-col justify-center pt-10 '>
              <h2 className='flex justify-center'>Vores arbejdsområder</h2>
            </div>

            <div className='gap-9 md:gap-3 lg:gap-10 lg:flex md:grid md:grid-cols-2 md:grid-rows-2 '>
              <div className='shadow-xl rounded-lg mb-10'>
                <Image className='rounded-t-lg' src={vild} width={500} height={500} alt='Picture of nature ' />
                <div className='p-6 '>
                  <h3>Vild Dansk Natur</h3>
                  <button className='text-orange'>Læs mere →</button>
                </div>
              </div>

              <div className='shadow-xl rounded-lg mb-10'>
                <Image className='rounded-t-lg' src={politik} width={500} height={500} alt='Picture of politics' />
                <div className='p-6'>
                  <h3>Politisk Udvikling</h3>
                  <button className='text-orange'>Læs mere →</button>
                </div>
              </div>
              <div className='shadow-xl rounded-lg mb-10'>
                <Image className='rounded-t-lg' src={klima} width={500} height={500} alt='Picture of poster' />
                <div className='p-6'>
                  <h3>Klima</h3>
                  <button className='text-orange '>Læs mere →</button>
                </div>
              </div>

              <div className='shadow-xl rounded-lg mb-10'>
                <Image className='rounded-t-lg' src={globalt} width={500} height={500} alt='Picture of global work' />
                <div className='p-6'>
                  <h3>Globalt Arbejde</h3>
                  <button className='text-orange '>Læs mere →</button>
                </div>
              </div>
            </div>
          </section>
        </div>
        <section>
          <div>
            <div className='bg-gray-200 p-5 lg:flex lg:flex-row md:flex-col md:p-10 lg:p-10 mx-0 '>
              <Image className='h-full w-full lg:max-w-[400px] md:max-w-[500px] mx-auto' src={planetb} alt='Picture of there is not planet b' />
              <div className=' md:p-20 flex justify-center flex-col'>
                <h2 className='pt-12 md:pt-6 lg:pt-6'>Hvad kan du gøre? </h2>
                <p className=''>De menneskeskabte klimaforandringer er resultatet af overdreven ressourceforbrug, der overstiger planetens kapacitet, og CO2-udledning, der overbelaster atmosfæren. En gennemsnitsdansker kræver tre jordkloder. For at reducere klimapåvirkningen anbefales alternativer som cykling eller offentlig transport.</p>
                <div>
                  <button className='text-orange pt-2 md:pt-10 lg:pt-10 flex justify-start'>Læs mere →</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className=' pb-6 lg:m-28 md:m-22'>
          <section className='  mx-auto   '>
            <div className=' flex-col justify-center pt-3 '>
              <h2 className='flex justify-center lg:pb-20'>Kampagner</h2>
            </div>

            <div className='grid gap-10 md:gap-3 lg:gap-10 lg:flex md:flex sm:justify-center '>
              <div className='shadow-xl rounded-lg'>
                <Image className='rounded-t-lg' src={hand} width={500} height={500} alt='Picture of hand ' />
                <div className='p-6'>
                  <h3>KANALSAGEN</h3>
                  <button className='text-orange'>Læs mere →</button>
                </div>
              </div>
              <div className='shadow-xl rounded-lg'>
                <Image className='rounded-t-lg' src={karlo} width={500} height={500} alt='Picture of development' />
                <div className='p-6'>
                  <h3>STOP KAFFE, DER RYDDER REGNSKOV</h3>
                  <button className='text-orange'>Læs mere →</button>
                </div>
              </div>
              <div className='shadow-xl rounded-lg '>
                <Image className='rounded-t-lg' src={plakat} width={500} height={500} alt='Picture of climate' />
                <div className='p-6'>
                  <h3>Regnskoven om søerne</h3>
                  <button className='text-orange '>Læs mere →</button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default page;
