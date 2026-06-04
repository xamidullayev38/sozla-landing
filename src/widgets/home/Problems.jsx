import React from "react";
import { motion } from "framer-motion"; // [QO'SHILDI]
import GlobTitle from "./../../shared/ui/GlobTitle";
import ProblemCard from "./ProblemCard";

import { Globe, Banknote, Baby, Home } from "lucide-react";

export default function Problems() {
  const problems = [
    {
      id: 1,
      icon: Globe,
      title: "O'zbek tilidagi kontent",
      text: "O‘zbek tilidagi sifatli raqamli kontent yetarli emas. Mavjud ilovalarning aksariyati lokal til va madaniyatga moslashmagan.",
    },
    {
      id: 2,
      icon: Banknote,
      title: "Xizmatlar narxi",
      text: "Logoped xizmatlari sezilarli darajada qimmat. Doimiy mashg‘ulotlar katta xarajat talab qiladi.",
    },
    {
      id: 3,
      icon: Baby,
      title: "Zerikarli darslar",
      text: "Mashg‘ulotlar bolalar uchun zerikarli bo‘lishi mumkin. Motivatsiya pasayadi.",
    },
    {
      id: 4,
      icon: Home,
      title: "Uy sharoiti",
      text: "Uyda mustaqil shug‘ullanish uchun samarali vositalar yetarli emas.",
    },
  ];

  // 1. Ota konteyner uchun qoidalar: Bolalar ketma-ket chiqishini boshqaradi
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.35, // Har bir karta 0.15 soniya farq bilan ketma-ket chiqadi
      },
    },
  };

  // 2. Har bir karta uchun kirish qoidasi: Pastdan tepaga biroz siljib chiqadi
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 70, damping: 15 },
    },
  };

  return (
    <section className="py-20 dark:bg-gray-900 transition-colors duration-300 overflow-hidden">
      {/* Sarlavha yengil fade-in bo'lib chiqadi */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="pb-10 text-center"
      >
        <GlobTitle>Asosiy muammo</GlobTitle>
      </motion.div>

      {/* Kartalar joylashgan konteynerni motion.div ga o'zgartiramiz */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }} // Skrol bo'lganda 1 marta ishlaydi
        className="flex flex-wrap gap-6 justify-center"
      >
        {problems.map((item) => (
          // Har bir kartani motion.div bilan o'rab, unga hover effekti beramiz
          <motion.div
            key={item.id}
            variants={cardVariants}
            whileHover={{
              y: -8,
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.98 }}
            className="flex" // flex-wrap ichida kartalar bo'yini tenglashtirish uchun
          >
            <ProblemCard {...item} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
