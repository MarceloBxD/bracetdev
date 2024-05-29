"use client";

import React from "react";
import ColorfulTitle from "../../../components/ColorfulTitle";
import { motion } from "framer-motion";
import { SETUP_DATA } from "@/data/setup";
import { useCommand } from "@/contexts/CommandContext";
import Command from "../../../components/Command";

interface Item {
  title: string;
  review: string;
  tags: string[];
}

interface SectionProps {
  title: JSX.Element | string;
  items: Item[];
}

interface SetupData {
  title: JSX.Element | string;
  review: JSX.Element | string;
  equipments?: SectionProps;
  keyboards?: SectionProps;
  desktop?: SectionProps;
  monitors?: SectionProps;
}

const Section: React.FC<SectionProps> = ({ title, items }) => (
  <>
    {typeof title === "string" ? (
      <ColorfulTitle colors={["#F5E9E1", "#EBD1C1"]} text={title} />
    ) : (
      title
    )}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ amount: 0.5 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10"
    >
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-transparent my-2 rounded-lg p-5 shadow-md shadow-slate-500"
        >
          <h1 className="text-xl font-bold text-white">{item.title}</h1>
          <p className="text-md text-white mt-5">{item.review}</p>
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
    </motion.div>
  </>
);

const Sobre: React.FC = () => {
  const setupData: SetupData = SETUP_DATA;
  const { showCommandBar } = useCommand();

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex container flex-col justify-center pt-32 text-white"
      >
        {typeof setupData.title === "string" ? (
          <ColorfulTitle
            colors={["#F5E9E1", "#EBD1C1"]}
            text={setupData.title}
          />
        ) : (
          setupData.title
        )}
        {setupData.review}

        {setupData.equipments && <Section {...setupData.equipments} />}
        {setupData.keyboards && <Section {...setupData.keyboards} />}
        {setupData.desktop && <Section {...setupData.desktop} />}
        {setupData.monitors && <Section {...setupData.monitors} />}
      </motion.div>
      {showCommandBar && <Command />}
    </>
  );
};

export default Sobre;
