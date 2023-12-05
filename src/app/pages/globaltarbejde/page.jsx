import React from "react";
import Image from "next/image";
import cover from "../../billeder/Globaltarbejde.png";
import honduras from "../../billeder/honduras.png";
import bolivia from "../../billeder/bolivia.png";
import etiopien from "../../billeder/etiopien.png";
import Nicaragua from "../../billeder/nicaragua.png";
import Uganda from "../../billeder/uganda.png";
import panama from "../../billeder/panama.png";
import skov from "../../billeder/globalrarb1.png";
import mandiflod from "../../billeder/flodmand.png";
import Footer from "../../components/Footer";

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
            <div className='flex overflow-scroll p-6 gap-5 '>
              <div>
                <Image className='rounded-full mb-4 border-gray border-2 ' src={honduras} alt='Picture of Honduras' />
                <p>Honduras</p>
              </div>
              <div>
                <Image className='rounded-full mb-4border-gray border-2' src={bolivia} alt='Picture of Bolivia' />
                <p>Bolivia</p>
              </div>
              <div>
                <Image className='rounded-full mb-4 border-gray border-2' src={etiopien} alt='Picture of Etiopien' />
                <p>Etiopien</p>
              </div>
              <div>
                <Image className='rounded-full mb-4 border-gray border-2' src={Nicaragua} alt='Picture of Nicaragua' />
                <p>Nicaragua</p>
              </div>
              <div>
                <Image className='rounded-full mb-4 border-gray border-2' src={Uganda} alt='Picture of Uganda' />
                <p>Uganda</p>
              </div>
              <div>
                <Image className='rounded-full mb-4 border-gray border-2' src={panama} alt='Picture of Panama' />
                <p>Panama</p>
              </div>
            </div>
          </section>
          <section>
            <div>
              <Image src={skov} alt='Picture of reainforest' />
            </div>
            <div className='lg:'>
              <h2 className='pt-5'>Hvorfor er regnskovene vigtige?</h2>
              <p>Regnskove er afgørende for planetens sundhed og menneskers overlevelse. De huser en unik biodiversitet, med over halvdelen af verdens arter, og er en kilde til medicin og fødevarer. Regnskovene regulerer lokalt og globalt klima ved at producere regn, binde CO2 og forhindre drivhusgasudledning. Desuden er de nøglen til ferskvand, og millioner af mennesker afhænger af dem for deres levebrød. Skovrydning truer ikke kun arter, men destabiliserer også økosystemer og påvirker klimaet. </p>
              <button className='text-orange pt-5'>Læs mere →</button>
            </div>
          </section>
          <section>
            <div>
              <Image src={mandiflod} alt='Picture of man in boat' />
            </div>
            <div>
              <h2 className='pt-5'>Hvordan vi støtter de oprindelige folk</h2>
              <p>Oprindelige folk er afgørende samarbejdspartnere for Verdens Skoves bevaringsarbejde i regnskovene. De bebor mange af verdens tilbageværende regnskove, og forskning viser, at skove bevares bedre, hvor oprindelige folk har jordrettigheder. Deres livsstil, mindre afhængig af industriel produktion og vækst, spiller en nøglerolle. Verdens Skove arbejder for at sikre juridiske rettigheder til skovene for oprindelige folk og presse for respekt fra nybyggere, virksomheder og myndigheder. </p>
              <button className='text-orange pt-5'>Læs mere →</button>
            </div>
          </section>
        </section>
      </main>
      <Footer className='p-0' />
    </>
  );
}

export default globaltarbejde;
