"use client";

import React from "react";
import * as Accordion from "@radix-ui/react-accordion";

const AccordionDemo = () => {
  <Accordion.Root className="bg-mauve6 w-[300px] rounded-md shadow-[0_2px_10px] shadow-black/5" type="single" defaultValue="item-1" collapsible>
    <Accordion.Item value="item-1">
      <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
      <Accordion.Content>Yes. It adheres to the WAI-ARIA design pattern.</Accordion.Content>
    </Accordion.Item>

    <Accordion.Item value="item-2">
      <Accordion.Trigger>Is it unstyled?</Accordion.Trigger>
      <Accordion.Content>Yes. Its unstyled by default, giving you freedom over the look and feel.</Accordion.Content>
    </Accordion.Item>

    <Accordion.Item value="item-3">
      <Accordion.Trigger>Can it be animated?</Accordion.Trigger>
      <Accordion.Content>Yes! You can animate the Accordion with CSS or JavaScript.</Accordion.Content>
    </Accordion.Item>
  </Accordion.Root>;
};

export default AccordionDemo;
