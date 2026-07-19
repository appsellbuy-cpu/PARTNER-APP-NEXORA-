import React from 'react';
import { CheckCircle2, Zap, Briefcase, Phone } from 'lucide-react';

export default function NexoraPoster() {
  return (
    <div className="w-[1080px] h-[1350px] bg-[#0A0A0A] text-white p-12 flex flex-col items-center font-sans">
      {/* Header */}
      <h1 className="text-7xl font-black text-center uppercase tracking-tighter mb-8">
        SABHI SALON <span className="text-gold-500">OWNER</span> KI <span className="text-gold-500">PROBLEM!</span>
      </h1>

      {/* Split Section */}
      <div className="grid grid-cols-2 gap-8 w-full mb-12">
        <div className="bg-red-950/20 border-2 border-red-900/50 p-8 rounded-3xl">
          <h2 className="text-3xl font-bold mb-4">🤔 Jab customer sab ek saath aate hai</h2>
          <p className="text-xl text-gray-300">Aur unme se 50% chale jaate hai...</p>
          <div className="mt-8 bg-red-600 text-white text-center py-2 font-bold text-xl uppercase">
            10 CUSTOMER EK SAATH - 50% CHALE JAATE HAI
          </div>
        </div>
        <div className="bg-zinc-900 border-2 border-zinc-700 p-8 rounded-3xl">
          <h2 className="text-3xl font-bold mb-4">😟 Fir jab time hota hai</h2>
          <p className="text-xl text-gray-300">Tab customer nahi aate...</p>
          <div className="mt-8 bg-zinc-700 text-white text-center py-2 font-bold text-xl uppercase">
            SEAT KHALI PADTI HAI - CUSTOMER NAHI AATE
          </div>
        </div>
      </div>

      {/* Solution Section */}
      <div className="flex flex-col items-center mb-12">
        <div className="flex items-center gap-4 text-green-400 text-6xl font-black mb-4">
          <CheckCircle2 size={60} /> SOLUTION? JI HA!
        </div>
        <div className="bg-gold-500 text-black text-4xl font-black uppercase px-8 py-4 rounded-xl">
          AB SAB KO AAP TIME SE BULAYE
        </div>
      </div>

      {/* Features */}
      <div className="grid grid-cols-3 gap-8 w-full mb-12">
        {['Online Booking Scheduling', 'WhatsApp Confirmation', 'Customer Reminder System'].map(f => (
          <div key={f} className="flex flex-col items-center gap-4 p-6 bg-zinc-800 rounded-2xl">
            <Zap className="text-gold-400" size={40} />
            <span className="text-center font-bold text-lg">{f}</span>
          </div>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="w-full bg-gradient-to-r from-gold-600 to-yellow-500 text-black p-8 rounded-3xl flex justify-between items-center">
        <div>
          <h3 className="text-4xl font-black uppercase">WHATSAPP NOW!</h3>
          <p className="text-7xl font-bold flex items-center gap-4"><Phone size={50} /> 7852877721</p>
        </div>
        <div className="text-right">
          <span className="text-5xl font-black uppercase bg-white px-6 py-2 rounded-2xl">100% FREE</span>
        </div>
      </div>
    </div>
  );
}
