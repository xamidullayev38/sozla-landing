import React from "react";
import Button from "../shared/ui/Button";

const faqItems = [
  {
    question: "Bolam mustaqil foydalana oladimi ?",
    answer: "Ha, albatta. Ilova interfeysi 3-7 yoshli bolalar uchun maxsus loyihalashtirilgan. Undagi barcha amallar sodda va tushunarli bo'lib, bola kattalar yordamisiz ham mashqlarni bajara oladi.",
  },
  {
    question: "Ilova muammolarni hal qila oladimi ?",
    answer: "Ilova nutq o'stirishga yordam beruvchi mashqlar va tezaytishlarni o'z ichiga oladi. U professional logoped darslariga samarali qo'shimcha vosita bo'lib xizmat qiladi.",
  },
  {
    question: '"So\'zla" internetsiz ham ishlaydimi ?',
    answer: "Ha, ilovaning asosiy qismi o'yinlar topshiriqlar internetsiz ishlaydi ammo sun`iy intelekt va yangi darsliklarni yuklab olish uchun internet kerak boladi.",
  },
  {
    question: "Qaysi yoshdan boshlab to'g'ri keladi ?",
    answer: "Ilovamiz asosan nutqi shakllanayotgan 3 yoshdan 7 yoshgacha bo'lgan bolalar uchun mo'ljallangan. Maktabga tayyorgarlik ko'rayotgan bolajonlar uchun ham juda foydali.",
  },
  {
    question: "Ilova ichida reklamalar bormi ?",
    answer: "Yo'q, biz bolalarning xavfsizligi va e'tiborini chalg'itmaslikni birinchi o'ringa qo'yamiz. Ilovada hech qanday uchinchi tomon reklamalari yoki bolalar uchun zararli havolalar mavjud emas.",
  },
  {
    question: "Topshiriqlarni ilova qanday tekshiradi ?",
    answer: "Bizning tizimimiz bolaning talaffuzini eshitish va tahlil qilish texnologiyasiga ega. Bola so'zni noto'g'ri aytsa, ilova qaytadan takrorlashga undaydi.",
  },
];

const FaqCard = ({ question, answer }) => (
  <div className="group relative p-8 rounded-3xl transition-all duration-500 hover:-translate-y-2">
    {/* 1. Orqa fondagi effekt (faqat hoverda ko'rinadi) */}
    <div className="absolute inset-0 bg-green-50/50 dark:bg-green-900/10 rounded-3xl opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-500 -z-10" />
    
    {/* 2. Savol qismi */}
    <h3 className="text-[19px] font-bold text-[#2D3142] dark:text-white mb-4 leading-tight transition-colors duration-300 group-hover:text-green-700 dark:group-hover:text-green-400">
      {question}
    </h3>
    
    {/* 3. Javob qismi */}
    <p className="text-[15px] text-gray-500 dark:text-gray-400 leading-relaxed font-light">
      {answer}
    </p>

    {/* 4. Pastki dekorativ chiziq (ixtiyoriy) */}
    <div className="w-0 group-hover:w-12 h-1 bg-green-500 mt-6 transition-all duration-500 rounded-full" />
  </div>
);

export default function FAQSection() {
  return (
    <section className="py-24 bg-white dark:bg-slate-900 transition-colors">
      <div className="container mx-auto px-4 max-w-6xl">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D3142] dark:text-white mb-4">
            FAQ
          </h2>
          <p className="max-w-2xl mx-auto text-gray-500 text-lg dark:text-gray-400">
            Sizni qiziqtirgan va ko'p beriladigan savollar va ularning javoblari.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faqItems.map((item, index) => (
            <FaqCard key={index} {...item} />
          ))}
        </div>

        <div className="mt-28 text-center">
          <h3 className="text-3xl font-bold text-[#2D3142] dark:text-white mb-4">
            Yangi savollar uchun
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mb-10 text-lg">
            Savolingiz bo'lsa quyidagi aloqa vositalari orqali bizga bog'laning
          </p>
          
          <Button >
            Bog‘lanish
          </Button>
        </div>
      </div>
    </section>
  );
}