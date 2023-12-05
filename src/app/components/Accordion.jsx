"use client";

import React from "react";

import * as Accordion from "@radix-ui/react-accordion";

const AccordionDemo = () => (
  <div className="flex gap-4 bg-orange justify-center items-center ">
    <Accordion.Root className="bg-mauve6 w-[300px] rounded-md shadow-[0_2px_10px] shadow-black/5" type="single" defaultValue="item-1" collapsible>
      <Accordion.Item value="item-1" className=" flex flex-col justify-center">
        <Accordion.Trigger>Ballade 1</Accordion.Trigger>
        <Accordion.Content>Yes. It adheres to the WAI-ARIA design pattern.</Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="item-2" className=" flex flex-col justify-center">
        <Accordion.Trigger>Ballade 2</Accordion.Trigger>
        <Accordion.Content>Yes. Its unstyled by default, giving you freedom over the look and feel.</Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="item-3" className=" flex flex-col justify-center">
        <Accordion.Trigger>Ballade 3</Accordion.Trigger>
        <Accordion.Content>Yes! You can animate the Accordion with CSS or JavaScript.</Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  </div>
);

export default AccordionDemo;
