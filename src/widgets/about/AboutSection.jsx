import React from "react";
import Title from "../../shared/ui/Title";
import SubText from "../../shared/ui/SubText";
import img from "@assets/img/placeholder.png";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-slate-900 transition-colors overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* TEXT */}
          <motion.div
            className="flex-1 order-2 lg:order-1"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            <Title className="text-4xl md:text-5xl font-bold text-[#2D3142] dark:text-white mb-8 leading-tight">
              Biz haqimizda (So`zla)
            </Title>

            <motion.div
              className="space-y-6 text-gray-500 dark:text-gray-400 text-lg leading-relaxed font-light"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >

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
              </SubText>

            </motion.div>
          </motion.div>


          {/* IMAGE */}
          <motion.div
            className="flex-1 order-1 lg:order-2 w-full"
            initial={{ opacity: 0, x: 80, scale: 0.9 }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1
            }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.9,
              ease: "easeOut"
            }}
          >

            <div className="relative group">

              {/* floating glow */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -inset-4 bg-green-500/10 rounded-[3rem] blur-2xl"
              />


              <motion.div
                whileHover={{
                  scale: 1.03,
                  rotate: -1
                }}
                transition={{
                  duration: 0.5
                }}
                className="relative overflow-hidden rounded-[2.5rem] shadow-2xl"
              >

                <motion.img
                  src={img}
                  alt="So'zla jamoasi ish jarayoni"
                  className="w-full h-auto object-cover"
                  whileHover={{
                    scale: 1.12
                  }}
                  transition={{
                    duration: 0.7
                  }}
                />


                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-[#2D3142]/30 to-transparent"
                />

              </motion.div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}