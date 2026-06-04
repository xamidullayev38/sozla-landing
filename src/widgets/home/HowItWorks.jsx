import React from "react";

import phoneMockup from "@assets/img/work/phone2.png";
import GlobTitle from "@shared/ui/GlobTitle";
import { motion } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "Profil yarating",
    desc: "Bola haqida asosiy ma’lumotlarni kiriting va uning nutq darajasini aniqlashni boshlang.",
  },
  {
    id: 2,
    title: "Individual mashg‘ulotlar",
    desc: "Ilova bolaning darajasiga moslashtirilgan mashqlar va interaktiv o‘yinlar taqdim etadi.",
  },
  {
    id: 3,
    title: "Mukammal natijaga erishing",
    desc: "Doimiy mashg‘ulotlar orqali bola nutqi yanada ravon bo‘ladi.",
  },
];
const stepVariants = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const HowItWorks = () => {
  return (
    <section className="bg-gray-50 dark:bg-[#0F172A] py-16 lg:py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mx-auto pb-10 lg:pb-14"
        >
          <GlobTitle>Ilova qanday ishlaydi</GlobTitle>
        </motion.div>

        {/* CONTENT */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full flex justify-center lg:justify-start"
          >
            <motion.img
              src={phoneMockup}
              alt="app preview"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="max-w-[280px] sm:max-w-[340px] md:max-w-[420px] lg:max-w-[520px] xl:max-w-[620px] w-full object-contain"
            />
          </motion.div>

          {/* STEPS */}
          <div className="relative w-full max-w-[520px]">
            <div className="space-y-10 sm:space-y-12">
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  variants={stepVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.2,
                  }}
                  className="flex items-start gap-4 sm:gap-6 relative"
                >
                  {/* LINE */}
                  {index < steps.length - 1 && (
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: "100%" }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1,
                        delay: index * 0.3,
                      }}
                      className="
                        absolute left-[18px]
                        top-10
                        w-[2px]
                        bg-primary/30
                      "
                    />
                  )}

                  {/* NUMBER */}
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                    }}
                    className="
                      z-10 flex items-center justify-center
                      w-9 h-9 sm:w-10 sm:h-10
                      rounded-full bg-primary text-white
                      text-sm sm:text-base font-semibold shrink-0
                    "
                  >
                    {step.id}
                  </motion.div>

                  {/* TEXT */}
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white">
                      {step.title}
                    </h3>
                    <p className="mt-1 sm:mt-2 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
