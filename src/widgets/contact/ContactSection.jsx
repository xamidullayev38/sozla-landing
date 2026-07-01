import { FiMail, FiPhone } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";
import { motion } from "framer-motion";

import Title from "../../shared/ui/Title";
import SubText from "../../shared/ui/SubText";


const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.9,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};


export default function ContactSection() {
  return (
    <section className="py-20 bg-gray-100 dark:bg-slate-900 transition-colors">

      <div className="container mx-auto px-4">


        {/* TITLE */}
        <motion.div
          initial={{
            opacity:0,
            y:-40
          }}
          whileInView={{
            opacity:1,
            y:0
          }}
          viewport={{
            once:true
          }}
          transition={{
            duration:0.7
          }}
          className="text-center mb-16"
        >

          <Title className="mb-5">
            Bog‘lanish
          </Title>


          <SubText className="text-gray-500 dark:text-gray-400 mt-2">
            Savollaringiz bormi? Biz bilan bog‘laning
          </SubText>


        </motion.div>



        {/* CARDS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once:true,
            amount:0.2
          }}
          variants={{
            visible:{
              transition:{
                staggerChildren:0.18
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >


          {/* EMAIL */}
          <ContactCard
            icon={
              <FiMail className="text-red-500 text-2xl"/>
            }
            iconStyle="bg-red-100 dark:bg-red-900/30"
            title="Elektron pochta"
            text="Hamkorlik yoki takliflar bo‘yicha bizga xat yozishingiz mumkin."
            link="email@example.com"
            href="mailto:email@example.com"
            variants={cardVariants}
          />


          {/* PHONE */}
          <ContactCard
            icon={
              <FiPhone className="text-gray-700 dark:text-gray-200 text-2xl"/>
            }
            iconStyle="bg-gray-100 dark:bg-gray-700"
            title="Telefon"
            text="Ilova bo‘yicha savollaringizga telefon orqali javob beramiz."
            link="+998 (XX) XXX-XX-XX"
            href="tel:+998000000000"
            variants={cardVariants}
          />


          {/* TELEGRAM */}
          <ContactCard
            icon={
              <FaTelegramPlane className="text-blue-500 text-2xl"/>
            }
            iconStyle="bg-blue-100 dark:bg-blue-900/30"
            title="Telegram"
            text="Bizga to‘g‘ridan-to‘g‘ri yozing, mutaxassislarimiz tezda javob beradi."
            link="@sozla_support"
            href="https://t.me/sozla_support"
            variants={cardVariants}
          />


        </motion.div>

      </div>

    </section>
  );
}



function ContactCard({
  icon,
  iconStyle,
  title,
  text,
  link,
  href,
  variants
}) {

  return (

    <motion.div
      variants={variants}
      whileHover={{
        y:-12,
        scale:1.03
      }}
      transition={{
        duration:0.35
      }}
      className="
      group flex flex-col items-center p-8 rounded-2xl
      bg-white dark:bg-slate-800
      shadow-sm hover:shadow-xl
      border border-transparent
      transition-all
      "
    >


      <motion.div

        whileHover={{
          rotate:12,
          scale:1.1
        }}

        className={`
          w-16 h-16 flex items-center justify-center
          rounded-full mb-6
          ${iconStyle}
        `}
      >

        {icon}

      </motion.div>



      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
        {title}
      </h3>


      <p className="
        text-gray-500 dark:text-gray-400
        text-sm mt-3 text-center max-w-xs
      ">
        {text}
      </p>


      <a
        href={href}
        target={href.includes("t.me") ? "_blank" : undefined}
        className="
        text-blue-600 dark:text-blue-400
        mt-4 font-medium hover:underline
        "
      >
        {link}
      </a>


    </motion.div>

  )
}