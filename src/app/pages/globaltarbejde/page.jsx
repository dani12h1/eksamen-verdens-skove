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
import Navigation from "../../components/Navigation";

function globaltarbejde() {
  return (
    <>
      <Navigation />
      <main className="leading-7 ">
        <section className="relative">
          <Image src={cover} className="w-full h-full" alt="Picture of global work" />
          <h1 className="text-white absolute top-[7rem] lg:pl-[6vw] pl-[6vw] lg:pt-[25vw]  md:pl-[6vw] md:pt-[20vw]">Globlat Arbejde</h1>
        </section>
        <section className="p-6 mx-22 my-14">
          <section className=" pb-6 ">
            <h2 className="flex justify-center">Verdens Skove globalt</h2>
            <p className="flex text-center pb-10">Gennem 30 år har Verdens Skove sammen med 200.000 danskere bevaret 88.300.000 m2, eller hvad der svarer til 12.362 fodboldbaner af regnskov i Costa Rica, Ecuador og Nicaragua. Dermed har Verdens Skove været med til at afværge den katastrofe, der truede regnskovene i slutningen af 80’erne.</p>
          </section>
          <section className="bg-lys_grå">
            <h2 className="p-6">Her arbejder vi</h2>
            <div className="flex overflow-scroll p-6 gap-5">
              <div className="rounded-full">
                <Image className="rounded-full mb-4 border-gray border-2 min-w-[120px] min-h-[120px]  " src={honduras} alt="Picture of Honduras" />
                <p className="flex justify-center">Honduras</p>
              </div>
              <div>
                <Image className="rounded-full mb-4 border-gray border-2 min-w-[120px] min-h-[120px] " src={bolivia} alt="Picture of Bolivia" />
                <p className="flex justify-center"> Bolivia</p>
              </div>
              <div>
                <Image className="rounded-full mb-4 border-gray border-2 min-w-[120px] min-h-[120px] " src={etiopien} alt="Picture of Etiopien" />
                <p className="flex justify-center">Etiopien</p>
              </div>
              <div>
                <Image className="rounded-full mb-4 border-gray border-2 min-w-[120px] min-h-[120px] " src={Nicaragua} alt="Picture of Nicaragua" />
                <p className="flex justify-center">Nicaragua</p>
              </div>
              <div>
                <Image className="rounded-full mb-4 border-gray border-2 min-w-[120px] min-h-[120px] " src={Uganda} alt="Picture of Uganda" />
                <p className="flex justify-center">Uganda</p>
              </div>
              <div>
                <Image className="rounded-full mb-4 border-gray border-2 min-w-[120px] min-h-[120px] " src={panama} alt="Picture of Panama" />
                <p className="flex justify-center">Panama</p>
              </div>
            </div>
          </section>
          <section>
            <div className="lg:flex lg:p-10 md:flex md:p-10 md:pt-16 pt-10">
              <div className="lg:order-2 md:order-2">
                <Image src={skov} alt="Picture of reainforest" />
              </div>
              <div className="lg:flex lg:flex-col lg:justify-center lg:p-9 lg:order- md:flex md:flex-col md:justify-center md:p-9 md:order-1 ">
                <h2 className="pt-5">Hvorfor er regnskovene vigtige?</h2>
                <p className="lg:max-w-[1500px]">Regnskove er afgørende for planetens sundhed og menneskers overlevelse. De huser en unik biodiversitet, med over halvdelen af verdens arter, og er en kilde til medicin og fødevarer. Regnskovene regulerer lokalt og globalt klima ved at producere regn, binde CO2 og forhindre drivhusgasudledning. Desuden er de nøglen til ferskvand, og millioner af mennesker afhænger af dem for deres levebrød. Skovrydning truer ikke kun arter, men destabiliserer også økosystemer og påvirker klimaet. </p>
                <button className="text-orange pt-5 lg:flex lg:justify-start md:flex md:justify-start">Læs mere →</button>
              </div>
            </div>
            <div className="lg:flex lg:p-10 md:flex md:p-10">
              <div>
                <Image src={mandiflod} alt="Picture of man in boat" />
              </div>

              <div className="lg:flex lg:flex-col lg:justify-center lg:p-9 md:flex md:flex-col md:justify-center md:p-9 lg:max-w-[1000px]">
                <h2 className="pt-5"> Hvordan vi støtter de oprindelige folk</h2>
                <p className="lg:max-w-[1500px]">Oprindelige folk er afgørende samarbejdspartnere for Verdens Skoves bevaringsarbejde i regnskovene. De bebor mange af verdens tilbageværende regnskove, og forskning viser, at skove bevares bedre, hvor oprindelige folk har jordrettigheder. Deres livsstil, mindre afhængig af industriel produktion og vækst, spiller en nøglerolle. Verdens Skove arbejder for at sikre juridiske rettigheder til skovene for oprindelige folk og presse for respekt fra nybyggere, virksomheder og myndigheder. </p>
                <button className="text-orange pt-5 lg:flex lg:justify-start md:flex md:justify-start">Læs mere →</button>
              </div>
            </div>
          </section>
        </section>
      </main>
      <Footer className="p-0" />
    </>
  );
}

export default globaltarbejde;
