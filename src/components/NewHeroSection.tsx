import React from 'react';
import { motion } from 'motion/react';
import { Check, X } from 'lucide-react';

export default function NewHeroSection() {
  return (
    <section className="relative pt-24 pb-20 bg-[#08080a] text-white" id="hero-section">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Headline */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6"
          >
            <span className="block italic">AAPKA SALON ACHHA HAI.</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-600">
              PAR KYA LOGON KO USKE BAARE ME PATA HAI?
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto"
          >
            Har Din Hazaron Salon Khali Kursiyon Ke Saath Baithte Hain.
          </motion.p>
        </div>

        {/* Split Screen Visual */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Left: Old Salon */}
          <div className="bg-red-950/10 border border-red-900/30 p-8 rounded-3xl relative overflow-hidden">
            <h3 className="text-3xl font-bold mb-6 text-red-500 uppercase italic tracking-tighter">THE OLD WAY</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center gap-3"><X className="text-red-500" /> No Online Booking</li>
              <li className="flex items-center gap-3"><X className="text-red-500" /> No Customer Database</li>
              <li className="flex items-center gap-3"><X className="text-red-500" /> No Reviews</li>
              <li className="flex items-center gap-3"><X className="text-red-500" /> No Repeat Customers</li>
              <li className="flex items-center gap-3"><X className="text-red-500" /> No Referral System</li>
            </ul>
          </div>

          {/* Right: Modern Salon */}
          <div className="bg-gold-500/5 border border-gold-500/20 p-8 rounded-3xl relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 bg-gold-500 text-black font-black uppercase text-xl rounded-bl-3xl">Nexora Powered</div>
            <h3 className="text-3xl font-bold mb-6 text-gold-500 uppercase italic tracking-tighter">THE NEW WAY</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center gap-3"><Check className="text-gold-500" /> Online Booking Scheduling</li>
              <li className="flex items-center gap-3"><Check className="text-gold-500" /> Smart CRM & Database</li>
              <li className="flex items-center gap-3"><Check className="text-gold-500" /> Verified Reviews</li>
              <li className="flex items-center gap-3"><Check className="text-gold-500" /> Customer Retention Loops</li>
              <li className="flex items-center gap-3"><Check className="text-gold-500" /> Referral Growth System</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="flex gap-4 justify-center">
          <button className="px-8 py-4 bg-gradient-to-r from-gold-500 to-purple-600 text-white font-bold uppercase rounded-xl hover:brightness-110 transition-all">Join SalonOS Now</button>
        </div>
      </div>
    </section>
  );
}
