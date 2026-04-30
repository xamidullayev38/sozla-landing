import React from "react";
import Title from "../../shared/ui/Title";
import SubText from "../../shared/ui/SubText";
import img from "@assets/img/placeholder.png"
export default function AboutSection() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-slate-900 transition-colors overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          <div className="flex-1 order-2 lg:order-1">
            <Title className="text-4xl md:text-5xl font-bold text-[#2D3142] dark:text-white mb-8 leading-tight">
              Biz haqimizda (So`zla)
            </Title>
            
            <div className="space-y-6 text-gray-500 dark:text-gray-400 text-lg leading-relaxed font-light">
              <SubText>
                "So'zla" startapi — bu dizayn, ishlab chiqish va strategiya bo'yicha 4 kishilik 
                professional jamoa tomonidan yaratilgan murakkab va funksional yechim. 
                Biz nutq buzilishlarini davolash va korreksiyalash sohasidagi zamonaviy 
                texnologiyalarning yetishmasligi muammosini hal qilish uchun birlashdik.
              </SubText>
              
              <SubText>
                Biz foydalanuvchilarimizga sun'iy intellekt va ilmiy tekshirilgan uslublarni 
                birlashtirgan noyob platformani taqdim etamiz. Ilovamiz foydalanuvchiga 
                real vaqt rejimida yordam beradi va jarayonni qiziqarli o'yinga aylantiradi. 
                Kichik, ammo dinamik jamoamiz doimiy rivojlanish va sifatni oshirish ustida ishlamoqda.
              </SubText>
            </div>
          </div>

          {/* RASM QISMI (Hover effekti bilan) */}
          <div className="flex-1 order-1 lg:order-2 w-full">
            <div className="relative group">
              {/* Orqa fondagi dekorativ elementlar */}
              <div className="absolute -inset-4 bg-green-500/10 rounded-[3rem] blur-2xl group-hover:bg-green-500/20 transition-all duration-700" />
              
              {/* Asosiy rasm konteyneri */}
              <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl transition-transform duration-700 group-hover:scale-[1.02] group-hover:-rotate-1">
                <img 
                  src={img} 
                  alt="So'zla jamoasi ish jarayoni" 
                  className="w-full h-auto scale-110 object-cover transform transition-transform duration-700 group-hover:scale-125"
                />
                
                {/* Rasm ustidagi yengil "overlay" qatlam */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D3142]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}