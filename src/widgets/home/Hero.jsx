import React from "react";
import Title from "../../shared/ui/Title";
import SubText from "../../shared/ui/SubText";
import heroImg from "@assets/img/hero/phone.png";
import { motion } from "framer-motion";
export default function Hero() {
  const textVariant = {
    hidden: {
      opacity: 0,
      x: -40,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };
  const imageVariant = {
    hidden: {
      opacity: 0,
      x: 40,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <section className="min-h-[100dvh] flex items-center py-12 md:py-20 bg-white dark:bg-[#0F172A] transition">
      <div className="container">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          {/* TEXT */}
          <motion.div
            variants={textVariant}
            initial="hidden"
            animate="visible"
            className="max-w-[600px] flex flex-col items-center md:items-start text-center md:text-left"
          >
            <Title className="w-full mb-4 md:mb-6">
              Nutqni rivojlantirishning zamonaviy usuli.
            </Title>

            <SubText className="w-full leading-relaxed">
              Farzandingizning nutq boyligini oshirish va talaffuzini
              to‘g‘rilash uchun maxsus metodika asosida ishlab chiqilgan
              interaktiv o‘yinlar to‘plami. Professional logopedlar tavsiyasi
              endi sizning smartfoningizda.
            </SubText>
          </motion.div>

          <motion.div
            variants={imageVariant}
            initial="hidden"
            animate="visible"
            className="relative flex justify-center"
          >
            <img
              src={heroImg}
              alt="phone"
              className="z-20 w-[280px] md:w-[400px] lg:w-[530px]"
            />
            <div className="absolute z-10 top-11 right-8 w-[400px] h-[400px] bg-[#65B741]/50 dark:bg-[#6CC24A]/30 rounded-full blur-[180px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
