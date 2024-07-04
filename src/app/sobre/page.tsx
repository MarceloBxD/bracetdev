"use client";

import { ABOUT_DATA } from "@/data/about";
import ColorfulTitle from "../../../components/ColorfulTitle";
import { motion } from "framer-motion";
import Link from "next/link";
import Command from "../../../components/Command";
import { useCommand } from "@/contexts/CommandContext";

const Sobre = () => {
  const { showCommandBar } = useCommand();

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex container flex-col justify-center pt-32 text-white"
      >
        <ColorfulTitle
          colors={["#92BFB1", "#FFFFFF"]}
          text={ABOUT_DATA.title}
        />
        {ABOUT_DATA.description}
        {ABOUT_DATA.projects.title}
        {ABOUT_DATA.projects.items.map((item, index) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="my-5"
            key={index}
            viewport={{ amount: 0.5 }}
          >
            <Link href={item.href}>
              <h2
                className="
              text-lg
              font-bold
              relative
              my-5
              tracking-wider
              cursor-pointer
              underline
            "
              >
                {item.title}
              </h2>
            </Link>
            <p>{item.description}</p>
            <ul
              className="
            grid
            grid-cols-2
            gap-2
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-6
            xl:grid-cols-8
            mt-5
          "
            >
              {item.tags.map((tag) => (
                <li
                  className="
                text-sm
                bg-gradient-to-r
                from-[#92BFB1]
                to-[#FFFFFF]
                rounded-md
                p-1
                text-black
                font-semibold
                text-center
                transition-all
                duration-300
                ease-in-out
                hover:from-[#FFFFFF]
                hover:to-[#92BFB1]
              "
                  key={tag}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
      {showCommandBar && <Command />}
    </>
  );
};

export default Sobre;
