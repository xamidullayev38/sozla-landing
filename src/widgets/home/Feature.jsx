import React from "react";

import img from "@assets/img/features/phone.webp";
import GlobTitle from "@shared/ui/GlobTitle";
import { motion } from "framer-motion";
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
const leftVariants = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};
const rightVariants = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};
const Feature = () => {
  return (
    <section
      id="feature"
      className="
      w-full py-20
      bg-[#f5f7f6] dark:bg-[#0f172a]
      transition-colors duration-300
    "
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto mb-10 max-w-[530px]"
        >
          <GlobTitle>“So`zla” zamonaviy va samarali yechim</GlobTitle>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-10 items-center">
          <div className="flex flex-col gap-10">
            {featuresLeft.map((item, index) => (
              <motion.div
                key={item.id}
                variants={leftVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
              >
                <FeatureItem {...item} />
              </motion.div>
            ))}
          </div>

          <div className="relative flex justify-center items-center">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute w-[320px] h-[320px] rounded-full
                bg-primary/30 blur-[120px]
                dark:bg-primary/20
              "
            />

            <motion.img
              src={img}
              alt="phone"
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 w-[250px]"
            />
          </div>

          <div className="flex flex-col gap-10">
            {featuresRight.map((item, index) => (
              <motion.div
                key={item.id}
                variants={rightVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
              >
                <FeatureItem {...item} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
