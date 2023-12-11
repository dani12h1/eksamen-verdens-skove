"use client";

import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";

const AccordionDemo = () => (
  <div className="flex justify-center items-center leading-7 text-[18px] font-[font:var(--font-sintony)]">
    <Accordion.Root className="lg:w-[50vw] w-[93vw] lg:w[80vw] md:w[60vw]  rounded-md" collapsible>
      <Accordion.Item value="item-1" className="flex flex-col mb-4 bg-lys_grå text-grå rounded-xl">
        <Accordion.Trigger className="flex p-4 justify-between">
          Lokalgrupper i Aarhus, Odense og København <ChevronDownIcon className="" />
        </Accordion.Trigger>
        <Accordion.Content className=" p-4">Her arbejder vi primært med at oplyse om Verdens Skoves arbejde for at bevare regnskoven. Det gør vi via events og andet oplysende arbejde, hvor vi også fortæller om hvor vigtig skovene verden over er for naturen, for biodiversiteten og for menneskene. Vi finder selv på de events vi laver eller svarer på invitationer til arrangementer, hvor vi taler skovens stemme.</Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="item-2" className="flex flex-col mb-4 bg-lys_grå text-grå rounded-xl">
        <Accordion.Trigger className="flex justify-between p-4">
          Dansk Natur-gruppen <ChevronDownIcon className="" />
        </Accordion.Trigger>
        <Accordion.Content className="p-4">I Dansk Natur-gruppen (DKN) arbejder vi for en vildere natur i Danmark med mere urørt skov og mere plads til biodiversiteten. Vi arbejder for at vi får store, vilde naturområder, hvor de trængte arter kan leve og trives. Det gør vi via oplysende artikler og kampagner, ligesåvel som vi gennem råd og netværk forsøger at påvirke politikerne til at ændre holdning til hvordan naturen og skoven i Danmark skal forvaltes.</Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="item-3" className="flex flex-col mb-4 bg-lys_grå text-grå rounded-xl">
        <Accordion.Trigger className="flex justify-between p-4">
          Klimagruppen <ChevronDownIcon className="" />
        </Accordion.Trigger>
        <Accordion.Content className="p-4">Klimagruppen arbejder vi for at sætte skovenes rolle i kampen mod de globale klimaforandringer på dagsordenen. Det gør vi via events og oplysningskampagner, blandt andet om hvordan danskernes forbrug påvirker regnskoven og dermed klimaet. Derudover arbejder vi ligeledes for at sætte skovene på dagsordenen i både dansk og international klimapolitik.</Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="item-4" className="flex flex-col mb-4 bg-lys_grå text-grå rounded-xl">
        <Accordion.Trigger className="flex justify-between p-4">
          Den globale biodiversitetsgruppe <ChevronDownIcon className="" />
        </Accordion.Trigger>
        <Accordion.Content className="p-4">I den globale biodiversitetsgruppe arbejder vi for at sætte biodiversitet på den politiske globale dagsorden. Vi ønsker at lægge politisk pres på den danske regering til at blive et foregangsland i det internationale forhandlinger mod en mere vild og beskyttet natur. Vi arbejder både med de politiske forhandlinger og den biologiske udvikling, hvor vi følger udviklingen med den accelererende nedgang i antallet af arter, der lige nu foregår på verdensplan. Derfor er vores fokus primært at sikre ambitiøse internationale målsætninger for at stoppe biodiversitetsnedgangen gennem skovbevarelse samt at sikre oprindelige folks rettigheder derigennem.</Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  </div>
);

export default AccordionDemo;
