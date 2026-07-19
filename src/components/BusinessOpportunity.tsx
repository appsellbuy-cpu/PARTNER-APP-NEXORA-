import React from 'react';
import { Briefcase, Zap, GraduationCap, TrendingUp, Award, MapPin } from 'lucide-react';

export default function BusinessOpportunity() {
  const benefits = [
    { name: "No Joining Fee", icon: Zap },
    { name: "No Investment", icon: Briefcase },
    { name: "Free Training", icon: GraduationCap },
    { name: "Activation Rewards", icon: TrendingUp },
    { name: "Growth Share", icon: TrendingUp },
    { name: "Leadership Status", icon: Award },
    { name: "District Partner", icon: MapPin },
  ];

  return (
    <section className="py-24 bg-[#0A0A0A]" id="business-opportunity">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-black text-white text-center mb-4 uppercase italic">
          SALARY KE LIYE KAAM MAT KARO.
        </h2>
        <h3 className="text-3xl md:text-5xl font-black text-gold-500 text-center mb-16 uppercase italic">
          APNA BEAUTY NETWORK BANAO.
        </h3>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-1 bg-gold-500/10 border border-gold-500/30 rounded-3xl p-8 flex flex-col items-center justify-center text-center">
            <span className="text-8xl font-black text-gold-500/20">01</span>
            <p className="text-white text-xl font-bold mt-4">Salesman meeting salon owners.</p>
          </div>
          <div className="md:col-span-1 bg-gold-500/10 border border-gold-500/30 rounded-3xl p-8 flex flex-col items-center justify-center text-center">
            <span className="text-8xl font-black text-gold-500/20">02</span>
            <p className="text-white text-xl font-bold mt-4">District network map.</p>
          </div>
          <div className="md:col-span-1 bg-gold-500/10 border border-gold-500/30 rounded-3xl p-8 flex flex-col items-center justify-center text-center">
            <span className="text-8xl font-black text-gold-500/20">03</span>
            <p className="text-white text-xl font-bold mt-4">Business growth ecosystem.</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <div key={i} className="p-6 bg-[#0c0c0f] border border-white/5 rounded-2xl flex flex-col items-center text-center hover:border-gold-500/30 transition-all">
              <b.icon className="w-10 h-10 text-gold-500 mb-4" />
              <span className="font-bold text-white text-sm uppercase tracking-wider">{b.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
