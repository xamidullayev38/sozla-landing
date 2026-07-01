import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Button from "../../shared/ui/Button";


const faqItems = [
  {
    question: "Bolam mustaqil foydalana oladimi ?",
    answer:
      "Ha, albatta. Ilova interfeysi 3-7 yoshli bolalar uchun maxsus loyihalashtirilgan. Undagi barcha amallar sodda va tushunarli bo'lib, bola kattalar yordamisiz ham mashqlarni bajara oladi.",
  },
  {
    question: "Ilova muammolarni hal qila oladimi ?",
    answer:
      "Ilova nutq o'stirishga yordam beruvchi mashqlar va tezaytishlarni o'z ichiga oladi. U professional logoped darslariga samarali qo'shimcha vosita bo'lib xizmat qiladi.",
  },
  {
    question: '"So\'zla" internetsiz ham ishlaydimi ?',
    answer:
      "Ha, ilovaning asosiy qismi internetsiz ishlaydi, ammo sun'iy intellekt va yangi darsliklarni yuklash uchun internet kerak bo'ladi.",
  },
  {
    question: "Qaysi yoshdan boshlab to'g'ri keladi ?",
    answer:
      "Ilovamiz asosan 3 yoshdan 7 yoshgacha bo'lgan bolalar uchun mo'ljallangan.",
  },
  {
    question: "Ilova ichida reklamalar bormi ?",
    answer:
      "Yo'q, bolalarning xavfsizligi uchun ilovada uchinchi tomon reklamalari mavjud emas.",
  },
  {
    question: "Topshiriqlarni ilova qanday tekshiradi ?",
    answer:
      "Tizim bolaning talaffuzini eshitish va tahlil qilish texnologiyasiga ega.",
  },
];



const FaqItem = ({ question, answer, isOpen, onClick }) => {

  return (

    <div
      className="
      border-b
      border-gray-200
      dark:border-slate-700
      "
    >


      <button

        onClick={onClick}

        className="
        w-full
        flex
        items-center
        justify-between
        py-6
        text-left
        "

      >

        <span
          className="
          text-lg
          font-semibold
          text-[#2D3142]
          dark:text-white
          "
        >
          {question}
        </span>



        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0
          }}
          transition={{
            duration:0.3
          }}
        >

          <ChevronDown
            className="
            text-green-500
            "
          />

        </motion.div>


      </button>




      <AnimatePresence>

        {
          isOpen && (

            <motion.div

              initial={{
                height:0,
                opacity:0
              }}

              animate={{
                height:"auto",
                opacity:1
              }}

              exit={{
                height:0,
                opacity:0
              }}

              transition={{
                duration:0.35
              }}

              className="
              overflow-hidden
              "

            >

              <p
                className="
                pb-6
                text-gray-500
                dark:text-gray-400
                leading-relaxed
                "
              >
                {answer}
              </p>


            </motion.div>

          )
        }


      </AnimatePresence>


    </div>

  )
}




export default function FAQSection(){

const [openIndex,setOpenIndex] = useState(null);


return (

<section className="
py-24
bg-white
dark:bg-slate-900
transition-colors
">


<div className="
container
mx-auto
px-4
max-w-4xl
">



<motion.div

initial={{
opacity:0,
y:-30
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

className="
text-center
mb-16
"

>

<h2 className="
text-4xl
md:text-5xl
font-bold
text-[#2D3142]
dark:text-white
mb-4
">
FAQ
</h2>


<p className="
text-gray-500
dark:text-gray-400
text-lg
">
Sizni qiziqtirgan va ko'p beriladigan savollar va ularning javoblari.
</p>


</motion.div>





<motion.div

initial={{
opacity:0
}}

whileInView={{
opacity:1
}}

viewport={{
once:true
}}

transition={{
delay:0.2
}}

className="
bg-gray-50
dark:bg-slate-800
rounded-3xl
px-8
"

>


{
faqItems.map((item,index)=>(

<FaqItem

key={index}

{...item}

isOpen={openIndex === index}

onClick={() =>
setOpenIndex(
 openIndex === index ? null : index
)
}

/>

))

}


</motion.div>





<motion.div

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

className="
mt-20
text-center
"

>


<h3 className="
text-3xl
font-bold
text-[#2D3142]
dark:text-white
mb-4
">

Yangi savollar uchun

</h3>


<p className="
text-gray-500
dark:text-gray-400
mb-8
">

Savolingiz bo'lsa biz bilan bog'laning

</p>


<Button>
Bog‘lanish
</Button>


</motion.div>



</div>


</section>

)

}