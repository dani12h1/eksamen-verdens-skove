import React from "react";
import Accordion from "../../components/Accordion";
import Navigation from "../../components/Navigation";
import Image from "next/image";
import Frivillig from "../../billeder/Frivillig.png";
import Frivillig_2 from "../../billeder/frivillige.png";
import Footer from "../../components/Footer";

function page() {
  return (
    <>
      <Navigation />
      <section className='relative'>
        <Image src={Frivillig} className='w-full h-full brightness-[0.6]' alt='Picture of global work' />
        <h1 className='text-white absolute top-[7rem] lg:pl-[6vw] pl-[6vw] lg:pt-[25vw]  md:pl-[6vw] md:pt-[20vw] pb-4'>Bliv frivillig</h1>
      </section>

      <main className='leading-7 '>
        <div className=' lg:p-0 mx-auto my-14 '>
          <section className='p-3 lg:mx-44 lg:my-20 flex'>
            <div className='lg:max-w-[1000px] mx-auto'>
              <h2 className=' text-center  leading-8'>Hvorfor blive frivillig hos Verdens Skove? </h2>
              <p className='flex text-center pb-10 p-3 md:pb-20'>Brænder du for en rig skovnatur? Synes du også skoven og naturen har alt for lidt plads? Både i Danmark, i vores bevidsthed og i Verden? Kunne du tænke dig at gøre noget ved det? Hvad end du er miljøaktivist, dokumentarist eller bare elsker skoven, så er du mere end velkommen som frivillig i Verdens Skove. Vi arbejder for den gode sag med at sætte skoven på dagsordenen i forskellige sammenhænge (se vores arbejdsgrupper nedenfor). Som frivillig i Verdens Skove kan du få erfaring med formidling, kampagneføring, eventmageri, fundraising, politisk arbejde og meget mere - alt imens du deltager i kampen for at redde verdens skove.</p>
            </div>
          </section>
        </div>
        <div className='pb-32 '>
          <Accordion className='' />
        </div>

        <div className='lg:flex flex-row  justify-center pb-20 p-3'>
          <Image src={Frivillig_2} className='mb-2 lg:mx-4' alt='Picture of global work' />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default page;
