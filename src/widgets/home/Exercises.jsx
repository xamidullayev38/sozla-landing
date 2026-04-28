import React from "react";

import phone1 from "@assets/img/exercise/phone2.png";
import GlobTitle from '../../shared/ui/GlobTitle';
import ShowCase from "./ShowCase";

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

        <GlobTitle className="text-center mb-10">Qiziqarli mashg'ulotlar</GlobTitle>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

          {/* LEFT - TEXT */}
          <div className="flex-1 max-w-[520px] space-y-8">
            {features.map((item, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* RIGHT - IMAGES */}
          <div className="flex-1 flex items-end justify-center gap-6">
            
            <img
              src={phone1}
              alt="app screen 2"
              className="max-w-[620px] w-full object-contain"
            />

          </div>

        </div>
      </div>

      <ShowCase />
    </section>
  );
};

export default Exercices;