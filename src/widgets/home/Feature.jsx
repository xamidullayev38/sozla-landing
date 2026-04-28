import React from "react";

import img from "@assets/img/features/phone.webp";
import GlobTitle from "@shared/ui/GlobTitle";

const featuresLeft = [
  {
    id: 1,
    title: "O’zbekona va milliy",
    desc: "Ilova 100% o‘zbek tilida va o‘zbekona milliylikni o‘zida aks ettirgan.",
  },
  {
    id: 2,
    title: "Pulingizni tejang",
    desc: "Uy sharoitida hech qanday kurslarga bormasdan pulingizni va vaqtingizni tejang.",
  },
];

const featuresRight = [
  {
    id: 3,
    title: "Qiziqarli mashg‘ulotlar",
    desc: "Bolalarni o‘ziga jalb qila oladigan qulay interfeys va qiziqarli o‘yin va mashqlar.",
  },
  {
    id: 4,
    title: "Qulaylik",
    desc: "Uy sharoitida shug‘ullanish uchun qulay va samarali mobil ilova.",
  },
];

const FeatureItem = ({ id, title, desc }) => {
  return (
    <div className="flex items-start gap-4">
      {/* Number */}
      <div
        className="
        min-w-[45px] h-[45px] flex items-center justify-center rounded-xl font-semibold
        bg-primary/10 text-primary
        dark:bg-primary/20 dark:text-green-400
      "
      >
        {id}
      </div>

      {/* Text */}
      <div>
        <h3
          className="
          text-gray-800 dark:text-gray-100
          font-semibold text-lg
        "
        >
          {title}
        </h3>

        <p
          className="
          text-gray-500 dark:text-gray-400
          text-sm mt-1 leading-relaxed
        "
        >
          {desc}
        </p>
      </div>
    </div>
  );
};

const Feature = () => {
  return (
    <section
      className="
      w-full py-20
      bg-[#f5f7f6] dark:bg-[#0f172a]
      transition-colors duration-300
    "
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="mx-auto mb-10 max-w-[530px]">
          <GlobTitle>“So`zla” zamonaviy va samarali yechim </GlobTitle>
        </div>
        <div className="grid md:grid-cols-3 gap-10 items-center">
          <div className="flex flex-col gap-10">
            {featuresLeft.map((item) => (
              <FeatureItem key={item.id} {...item} />
            ))}
          </div>

          <div className="relative flex justify-center items-center">
            <div
              className="
              absolute w-[320px] h-[320px] rounded-full
              bg-primary/30 blur-[120px]
              dark:bg-primary/20
            "
            />

            <img
              src={img}
              alt="phone"
              className="
              relative z-10 w-[250px]
              transition-transform duration-500
              hover:scale-105
            "
            />
          </div>

          <div className="flex flex-col gap-10">
            {featuresRight.map((item) => (
              <FeatureItem key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
