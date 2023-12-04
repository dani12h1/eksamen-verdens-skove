import React from "react";
import Image from "next/image";
import cover from "../../billeder/Globaltarbejde.png";
import honduras from "../../billeder/honduras.png";
import bolivia from "../../billeder/bolivia.png";
import etiopien from "../../billeder/eteopien.png";
import Nicaragua from "../../billeder/Nicaragua.png";
import Uganda from "../../billeder/Uganda.png";
import panama from "../../billeder/panama.png";

function globaltarbejde() {
  return (
    <>
      <main className='leading-7 '>
        <section className='relative'>
          <Image src={cover} width={500} height={500} alt='Picture of global work' />
          <h1 className='text-white absolute top-[7rem] left-2 '>Globlat Arbejde</h1>
        </section>
        <section className='p-6'>
          <section className=' pb-6'>
            <h2>Verdens Skove globalt</h2>
            <p>Gennem 30 år har Verdens Skove sammen med 200.000 danskere bevaret 88.300.000 m2, eller hvad der svarer til 12.362 fodboldbaner af regnskov i Costa Rica, Ecuador og Nicaragua. Dermed har Verdens Skove været med til at afværge den katastrofe, der truede regnskovene i slutningen af 80’erne.</p>
          </section>
          <section className=' bg-lys_grå'>
            <h2 className='p-3'>Her arbejder vi</h2>
            <div className='flex overflow-scroll p-4 gap-4'>
              <Image className='rounded-full border-2 border-gray-300 bg-white mb-4 w-32 h-32' src={honduras} alt='Picture of Honduras' />
              <Image className='rounded-full p-2 border-2 border-gray-300 bg-white mb-4 w-32 h-32' src={bolivia} alt='Picture of Bolivia' />
              <Image className='rounded-full p-2 border-2 border-gray-300 bg-white mb-4 w-32 h-32' src={etiopien} alt='Picture of Etiopien' />
              <Image className='rounded-full p-2 border-2 border-gray-300 bg-white mb-4 w-32 h-32' src={Nicaragua} alt='Picture of Nicaragua' />
              <Image className='rounded-full p-2 border-2 border-gray-300 bg-white mb-4 w-32 h-32' src={Uganda} alt='Picture of Uganda' />
              <Image className='rounded-full p-2 border-2 border-gray-300 bg-white mb-4 w-32 h-32' src={panama} alt='Picture of Panama' />
            </div>
          </section>
        </section>
      </main>
    </>
  );
}

export default globaltarbejde;
