import React from "react";

import phoneMockup from "@assets/img/work/phone2.png";
import GlobTitle from "@shared/ui/GlobTitle";

const steps = [
  {
    id: 1,
    title: "Profil yarating",
    desc: "Bola haqida asosiy ma’lumotlarni kiriting va uning nutq darajasini aniqlashni boshlang. Tizim dastlabki baholash orqali individual yondashuvni shakllantiradi.",
  },
  {
    id: 2,
    title: "Individual mashg‘ulotlar",
    desc: "Ilova bolaning darajasiga moslashtirilgan mashqlar va interaktiv o‘yinlar taqdim etadi. Har bir mashg‘ulot nutqni bosqichma-bosqich rivojlantirishga qaratilgan.",
  },
  {
    id: 3,
    title: "Mukammal natijaga erishing",
    desc: "Doimiy va bosqichma-bosqich mashg‘ulotlar orqali bola nutqi yanada ravon va aniq bo‘lib boradi. Har bir dars uning talaffuzini yaxshilashga yordam beradi.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-gray-50 dark:bg-[#0F172A] py-16">
      <div className="container">
        <div className="text-center mx-auto pb-10">
          <GlobTitle>Ilova qanday ishlaydi</GlobTitle>
        </div>

        <div className="flex items-center justify-between">
          {/* LEFT - IMAGE */}
          <div className="flex justify-center lg:justify-start">
            <img
              src={phoneMockup}
              alt="app preview"
              className="max-w-[620px] w-full object-contain"
            />
          </div>

          {/* RIGHT - STEPS */}
          <div className="relative">
            <div className="space-y-10">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-start gap-5 relative">
                  {/* Chiziq — oxirgi elementda yo'q */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-[19px] top-10 bottom-[-40px] w-[2px] bg-primary/30 z-0"></div>
                  )}

                  {/* Number */}
                  <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-semibold shadow-md shrink-0">
                    {step.id}
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400 max-w-[420px]">
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
