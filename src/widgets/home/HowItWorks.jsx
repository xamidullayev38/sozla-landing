import React from "react";

import phoneMockup from "@assets/img/work/phone2.png";
import GlobTitle from "@shared/ui/GlobTitle";

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

const HowItWorks = () => {
  return (
    <section className="bg-gray-50 dark:bg-[#0F172A] py-16 lg:py-20">
      <div className="container">

        {/* TITLE */}
        <div className="text-center mx-auto pb-10 lg:pb-14">
          <GlobTitle>Ilova qanday ishlaydi</GlobTitle>
        </div>

        {/* CONTENT */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* IMAGE */}
          <div className="w-full flex justify-center lg:justify-start">
            <img
              src={phoneMockup}
              alt="app preview"
              className="max-w-[280px] sm:max-w-[340px] md:max-w-[420px] lg:max-w-[520px] xl:max-w-[620px] w-full object-contain"
            />
          </div>

          {/* STEPS */}
          <div className="relative w-full max-w-[520px]">

            <div className="space-y-10 sm:space-y-12">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-start gap-4 sm:gap-6 relative">

                  {/* LINE */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-[18px] top-10 bottom-[-40px] w-[2px] bg-primary/30"></div>
                  )}

                  {/* NUMBER */}
                  <div className="z-10 flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary text-white text-sm sm:text-base font-semibold shrink-0">
                    {step.id}
                  </div>

                  {/* TEXT */}
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white">
                      {step.title}
                    </h3>
                    <p className="mt-1 sm:mt-2 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;