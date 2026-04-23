import React from "react";
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

  return (
    <section className="py-20 dark:bg-gray-900 transition-colors duration-300">
      <div className="pb-10 text-center">
        <GlobTitle>Asosiy muammo</GlobTitle>
      </div>

      <div className="flex flex-wrap gap-6 justify-center">
        {problems.map((item) => (
          <ProblemCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}