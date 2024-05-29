"use client";

import React from "react";
import ColorfulTitle from "../../../components/ColorfulTitle";
import { motion } from "framer-motion";
import { SETUP_DATA } from "@/data/setup";

interface Item {
  title: string;
  review: string;
  tags: string[];
}

interface SectionProps {
  title: string;
  items: Item[];
}

interface SetupData {
  title: string;
  review: string;
  equipments?: SectionProps;
  keyboards?: SectionProps;
  desktop?: SectionProps;
  monitors?: SectionProps;
}

const Section: React.FC<SectionProps> = ({ title, items }) => (
  <>
    <ColorfulTitle colors={["#F5E9E1", "#EBD1C1"]} text={title} />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-8 md:my-5 ">
      {items.map((item, index) => (
        <div key={index} className="rounded-lg p-5 shadow-md shadow-white">
          <h1 className="text-xl font-bold text-white">{item.title}</h1>
          <p className="text-md mt-5 text-white">{item.review}</p>
          <div className="flex flex-wrap mt-5">
            {item.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="bg-gray-300 text-black rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </>
);

const Sobre: React.FC = () => {
  const setupData: SetupData = SETUP_DATA;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex container flex-col justify-center pt-32 text-white"
    >
      <ColorfulTitle colors={["#F5E9E1", "#EBD1C1"]} text={setupData.title} />
      {setupData.review}

      {setupData.equipments && <Section {...setupData.equipments} />}
      {setupData.keyboards && <Section {...setupData.keyboards} />}
      {setupData.desktop && <Section {...setupData.desktop} />}
      {setupData.monitors && <Section {...setupData.monitors} />}
    </motion.div>
  );
};

export default Sobre;
