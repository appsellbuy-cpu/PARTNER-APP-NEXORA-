import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star, TrendingUp, CheckCircle2 } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative pt-24 pb-20 bg-[#040405] text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Main Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-8"
        >
          <span className="block">AAPKA SALON ACHHA HAI.</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-600">
            PAR KYA LOGON KO USKE BAARE ME PATA HAI?
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto"
        >
          Har Din Hazaron Salon Khali Kursiyon Ke Saath Baithte Hain. Isi Problem Ko Solve Karne Ke Liye Bana Hai 
          <span className="text-white font-bold"> NEXORA SALONOS</span>, India's Beauty Industry Growth Ecosystem.
        </motion.p>

        {/* Center Split Visual */}
        <div className="mb-16">
          <img src="/src/assets/images/salon_transformation_comparison_1781495455705.jpg" alt="Salon Transformation" className="rounded-3xl border border-white/10 w-full" />
        </div>

        {/* Transformation Flow */}
        <div className="flex justify-center items-center gap-4 text-xs font-mono text-gray-500 uppercase mb-16 overflow-x-auto p-4">
          <span>No Visibility</span> <ArrowRight size={16}/> <span>No Bookings</span> <ArrowRight size={16}/> <span>More Revenue</span>
        </div>

        {/* CTA */}
        <div className="flex gap-4 justify-center">
          <button className="px-8 py-4 bg-gold-500 text-black font-bold uppercase rounded-xl">GROW MY SALON</button>
          <button className="px-8 py-4 border border-white/20 font-bold uppercase rounded-xl">WATCH DEMO</button>
        </div>
      </div>
    </section>
  );
}
