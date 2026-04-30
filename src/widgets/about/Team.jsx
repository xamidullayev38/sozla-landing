import React from "react";
import profile from "@assets/img/profile.png"
const teamMembers = [
  {
    name: "Saidkamol",
    role: "Frontend developer",
    bio: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    image: profile, 
  },
  {
    name: "Bekzod",
    role: "UX/UI Designer",
    bio: "So`zla ilovasining interfeysi va UX jihatdan qulayligiga javobgar shaxs.",
    image: profile,
  },
  {
    name: "Hasan",
    role: "Product Manager",
    bio: "Former PM for Linear, Lambda School, and On Deck.",
    image: profile,
  },
  {
    name: "Husan",
    role: "Frontend Developer",
    bio: "Former frontend dev for Linear, Coinbase, and Postscript.",
    image: profile,
  },
];

const TeamCard = ({ name, role, bio, image }) => (
  <div className="group relative flex flex-col items-center p-8 rounded-[2.5rem] bg-[#f0f7ee] dark:bg-green-900/10 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-green-200/50 dark:hover:shadow-none">
    
    <div className="w-32 h-32 rounded-full bg-gray-200 mb-6 overflow-hidden border-4 border-white dark:border-slate-800 shadow-sm transition-transform duration-500 group-hover:scale-110">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
      />
    </div>

    <h3 className="text-xl font-bold text-[#2D3142] dark:text-white mb-1">
      {name}
    </h3>
    <p className="text-green-600 dark:text-green-400 font-medium mb-4">
      {role}
    </p>
    <p className="text-gray-500 dark:text-gray-400 text-center text-sm leading-relaxed max-w-[200px]">
      {bio}
    </p>

    <div className="absolute bottom-6 w-0 h-1 bg-green-500 rounded-full transition-all duration-500 group-hover:w-12" />
  </div>
);

export default function TeamSection() {
  return (
    <section className="py-24 bg-white dark:bg-slate-900 transition-colors">
      <div className="container mx-auto px-4 max-w-6xl">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2D3142] dark:text-white mb-6">
            Bizning jamoa
          </h2>
          <p className="max-w-2xl mx-auto text-gray-500 dark:text-gray-400 text-lg">
            Our philosophy is simple — hire a team of diverse, passionate people 
            and foster a culture that empowers you to do you best work.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
        
      </div>
    </section>
  );
}