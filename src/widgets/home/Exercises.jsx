import React from "react";

import phone1 from "@assets/img/exercise/phone2.png";
import GlobTitle from "../../shared/ui/GlobTitle";
import ShowCase from "./ShowCase";
import { motion } from "framer-motion";

const titleVariant = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

const itemVariant = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const features = [
  {
    title: "Har bir harf uchun mashg‘ulotlar",
    desc: "Alifbo harflarining barchasi uchun qiziqarli mashqlar to‘plami.",
  },
  {
    title: "Talaffuz mashqlari",
    desc: "R SH kabi talaffuzi qiyin bo‘lgan harflar uchun alohida yondashuvdagi mashg‘ulotlar to‘plami.",
  },
  {
    title: "Turli multfilm qahramonlariga taqlid",
    desc: "Mashhur multfilm qahramonlari bolalarning e’tiborini tortish uchun yaxshi vosita hisoblanadi.",
  },
  {
    title: "Logoped video darsliklari",
    desc: "Qo‘shimcha tarzda kuchli logoped mutaxassislarining video darsliklari taqdim etiladi.",
  },
];

const Exercices = () => {
  return (
    <section className="bg-[#F8FAFC] dark:bg-[#0F172A] py-20">
      <div className="container mx-auto">
        <motion.div
          variants={titleVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <GlobTitle className="text-center mb-10">
            Qiziqarli mashg'ulotlar
          </GlobTitle>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* LEFT - TEXT */}
          <div className="flex-1 max-w-[520px] space-y-8">
            {features.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                }}
              >
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* RIGHT - IMAGES */}
          <div className="flex-1 flex items-end justify-center">
            <div className="relative flex-1 flex items-end justify-center">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.25, 0.4, 0.25],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  w-[380px]
                  h-[380px]
                  rounded-full
                  bg-primary/20
                  blur-[120px]
                "
              />
              <motion.img
                src={phone1}
                alt="app screen"
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                }}
                animate={{
                  y: [0, -12, 0],
                  rotate: [-1.5, 1.5, -1.5],
                }}
                whileHover={{
                  scale: 1.03,
                  rotate: 0,
                }}
                transition={{
                  y: {
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                  rotate: {
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                className="max-w-[620px] w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <ShowCase />
    </section>
  );
};

export default Exercices;
