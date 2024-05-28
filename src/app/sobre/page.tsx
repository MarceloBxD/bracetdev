"use client";

import { ABOUT_DATA } from "@/data/about";
import ColorfulTitle from "../../../components/ColorfulTitle";
import { motion } from "framer-motion";
import Link from "next/link";
import Head from "next/head";

const Sobre = () => {
  return (
    <>
      <Head>
        <title>Marcelo Bracet // Sobre</title>
        <meta
          name="description"
          content="Marcelo Bracet é um desenvolvedor Front-end e estudante de Engenharia de Computação. Conheça mais sobre ele e seus projetos."
        />
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex container flex-col justify-center pt-32 text-white"
      >
        <ColorfulTitle
          colors={["#F5E9E2", "#E0BBA4"]}
          text={ABOUT_DATA.title}
        />
        {ABOUT_DATA.description}
        {ABOUT_DATA.projects.title}
        {ABOUT_DATA.projects.items.map((item) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            key={item.title}
          >
            <Link href={item.href}>
              <h2
                className="
              text-lg
              font-bold
              my-5
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
                from-[#F5E9E2]
                to-[#E0BBA4]
                rounded-md
                p-1
                text-black
                text-center
                transition-all
                duration-300
                ease-in-out
                hover:from-[#E0BBA4]
                hover:to-[#F5E9E2]
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
    </>
  );
};

export default Sobre;
