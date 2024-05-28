"use client";

import { ABOUT_DATA } from "@/data/about";
import ColorfulTitle from "../../../components/ColorfulTitle";
import { motion } from "framer-motion";
import Link from "next/link";

const Sobre = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex container flex-col justify-center pt-32 text-white"
    >
      <ColorfulTitle colors={["#3A467E", "#202746"]} text={ABOUT_DATA.title} />
      {ABOUT_DATA.description}
      {ABOUT_DATA.projects.title}
      {ABOUT_DATA.projects.items.map((item) => (
        <div key={item.title}>
          <Link href={item.href}>
            <h2
              className="
              text-lg
              font-bold
              my-5
              underline
              cursor-pointer
              transition-all
              duration-300
              ease-in-out
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
                from-[#3A467E]
                to-[#202746]
                rounded-md
                p-1
                text-white
                text-center
                transition-all
                duration-300
                ease-in-out
                hover:from-[#202746]
                hover:to-[#3A467E]
              "
                key={tag}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </motion.div>
  );
};

export default Sobre;
