import React from "react";
import Image from "next/image";
import truck from "../../billeder/truck.png";
import totebag from "../../billeder/totebag.png";
import certificat from "../../billeder/certifikat.png";
import bw from "../../billeder/blackwhite.png";
import pink from "../../billeder/pinkpeople.png";
import people from "../../billeder/peopleinforest.png";
import foresttruck from "../../billeder/treesandtruck.png";

const Card = () => {
  return (
    <>
      <main className=' leading-7'>
        <div className='bg-white p-4'>
          <section className='p-3 text-black'>
            <h1>Hvem er Verdens Skove? </h1>
            <p>Verdens Skove er en dansk miljøorganisation, der gennem 40 år har arbejdet for en verden med en rig skovnatur gennem bl.a. bevarelse af skovene. Vores fokus er på klima, biodiversitet og de oprindelige folks rettigheder. </p>
            <button className=' text-orange pt-2'>Læs mere →</button>
          </section>
          <section className='w-full h-full border-t-2 border-black'>
            <h1>Sådan kan du støtte vores arbejde</h1>
            <div className='m-3 flex-col justify-center'>
              <div>
                <Image src={truck} width={500} height={500} alt='Picture of workers' />
                <h3>Doner til vores arbejde</h3>
                <p className='p-2'>Giv et valgfrit beløb, og vær med til at redde skoven nu!</p>
                <button className='text-orange p-2'>Doner her →</button>
              </div>
              <div>
                <Image src={totebag} width={500} height={500} alt='Picture of totebag' />
                <h3>Besøg vores webshop</h3>
                <p>Støt os ved køb af plakater, kaffe og meget mere..</p>
                <button className='text-orange'>Gå til webshop →</button>
              </div>
              <div>
                <Image src={certificat} width={500} height={500} alt='Picture of certificate' />
                <h3>Regnskovscertifikat</h3>
                <p>Køb et stykke jord og hjælp med at bevare regnskoven</p>
                <button className='text-orange'>Køb her →</button>
              </div>
            </div>
            <button className='text-orange'>Se flere støttemuligheder →</button>
          </section>
          <section className='mb-12'></section>
          <section>
            <div>
              <div className='bg-slate-400'>
                <Image src={bw} width={500} height={500} alt='Picture of the old days' />
                <h1>Hvordan arbejder vi? </h1>
                <p>Vi samarbejde med folk, som lever i og af skoven. Vi arbejder i områder med særlig høj biodiversitet. I dag har Verdens Skove indsatser i Danmark, Latinamerika og Østafrika. Verdens Skove samarbejder med lokale partnerorganisationer i det globale syd og har dedikeret gruppe frivillige i Danmark. </p>
                <button className=' text-orange pt-2'>Læs mere →</button>
              </div>
            </div>
          </section>
          <section>
            <h1>Aktuelt nyt</h1>
            <div className='m-3 flex-col justify-center'>
              <div>
                <Image src={pink} width={500} height={500} alt='Picture of origin people' />
                <p>6 NOVEMBER 2023</p>
                <div>
                  <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-geo-alt-fill' viewBox='0 0 16 16'>
                    <path d='M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z' />
                  </svg>

                  <p>Pico Bonito </p>
                </div>
                <h3>Støtte af tolupanfolket</h3>
                <p> Oprindelige folk og civilsamfundet i Honduras blev ikke kun udfordret af sundhedsrelateret pres under COVID-19 pandemien.</p>
                <button className='text-orange pt-2'>Læs mere →</button>
              </div>
              <div>
                <Image src={people} width={500} height={500} alt='Picture of people in the forest' />
                <div>
                  <p>20 NOVEMBER 2023</p>
                  <div>
                    <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-geo-alt-fill' viewBox='0 0 16 16'>
                      <path d='M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z' />
                    </svg>
                    <p>Etiopien</p>
                  </div>
                </div>
                <h3>Nyt initiativ: forbedring af skovovervågning</h3>
                <p>Verdens Skove arbejder på et projekt i det sydvestlige Etiopien.</p>
                <button className='text-orange pt-2'>Læs mere →</button>
              </div>
              <Image src={foresttruck} width={500} height={500} alt='Picture of  forest and truck' />

              <div className='flex'>
                <p>18 SEPTEMBER 2023</p>
                <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-geo-alt-fill' viewBox='0 0 16 16'>
                  <path d='M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z' />
                </svg>
                <p>Bolivia</p>
              </div>
              <h3>Tropiske skove forsvinder</h3>
              <p>Nye tal viser en bekymrende udvikling i tab af skovdække i Bolivia. </p>
              <button className='text-orange pt-2'>Læs mere →</button>
              <div></div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Card;
