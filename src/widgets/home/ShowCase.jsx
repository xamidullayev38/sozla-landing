import React from "react";
import ai from "@assets/img/ai.png";
import games from "@assets/img/games.png";
import { motion } from "framer-motion";

const cardVariant = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};
const ShowCase = () => {
  return (
    <section className="bg-[#F8FAFC] dark:bg-[#0F172A] py-12 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* LEFT CARD - AI */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{
              y: -8,
            }}
            className="
              group
              flex-1
              min-h-[450px]
              lg:min-h-[550px]
              bg-[#EAF3E5]
              dark:bg-[#1E293B]
              rounded-[32px]
              pt-10
              px-6
              lg:px-10
              flex
              flex-col
              items-center
              overflow-hidden
            "
          >
            <h3 className="text-2xl lg:text-3xl font-semibold text-center text-gray-800 dark:text-white max-w-[300px] mb-8">
              Sun'iy intellekt yordamchi
            </h3>
            <div className="mt-auto w-full flex justify-center">
              <motion.img
                src={ai}
                alt="ai screen"
                whileHover={{
                  scale: 1.04,
                }}
                transition={{
                  duration: 0.4,
                }}
                className="
                  w-full
                  max-w-[450px]
                  h-auto
                  object-contain
                  object-bottom
                "
              />
            </div>
          </motion.div>

          {/* RIGHT CARD - Games */}
          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
            }}
            whileHover={{
              y: -8,
            }}
            className="flex-1 min-h-[450px] lg:min-h-[550px] bg-[#EAF3E5] dark:bg-[#1E293B] rounded-[32px] pt-10 px-6 lg:px-10 flex flex-col items-center overflow-hidden transition-all"
          >
            <h3 className="text-2xl lg:text-3xl font-semibold text-center text-gray-800 dark:text-white max-w-[300px] mb-8">
              10 ga yaqin o'yinlar to'plami
            </h3>
            <div className="mt-auto w-full flex justify-center">
              <img
                src={games}
                alt="game screen"
                className="w-full max-w-[450px] h-auto object-contain object-bottom"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ShowCase;
