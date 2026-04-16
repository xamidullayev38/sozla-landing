import React from "react";
import Title from "../../shared/ui/Title";
import SubText from "../../shared/ui/SubText";
import heroImg from "@assets/img/hero/phone.png";

export default function Hero() {
  return (
    <section className="py-12 md:py-20 bg-white dark:bg-[#0F172A] transition">
      <div className="container">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          {/* TEXT */}
          <div className="max-w-[600px] flex flex-col items-center md:items-start text-center md:text-left">
            <Title className="w-full mb-4 md:mb-6">
              Nutqni rivojlantirishning zamonaviy usuli.
            </Title>

            <SubText className="w-full leading-relaxed">
              Farzandingizning nutq boyligini oshirish va talaffuzini
              to‘g‘rilash uchun maxsus metodika asosida ishlab chiqilgan
              interaktiv o‘yinlar to‘plami. Professional logopedlar tavsiyasi
              endi sizning smartfoningizda.
            </SubText>
          </div>

          {/* IMAGE */}
          <div className="relative flex justify-center">
            <img
              src={heroImg}
              alt="phone"
              className="z-20 w-[280px] md:w-[400px] lg:w-[530px]"
            />

            <div className="absolute z-10 top-11 right-8 w-[400px] h-[400px] bg-[#65B741]/50 dark:bg-[#6CC24A]/30
                rounded-full blur-[180px]"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
