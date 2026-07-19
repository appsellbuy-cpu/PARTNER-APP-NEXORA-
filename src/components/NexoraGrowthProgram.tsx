import React from 'react';
import { motion } from 'motion/react';
import { Target, Zap, TrendingUp, Award, MapPin, DollarSign } from 'lucide-react';

export default function NexoraGrowthProgram() {
  const steps = [
    { title: "Shop Onboard", icon: Target },
    { title: "15 Days Active Revenue", icon: Zap },
    { title: "Activation Reward", icon: DollarSign },
    { title: "7 Day Growth Share", icon: TrendingUp },
    { title: "Milestone Rewards", icon: Award },
    { title: "District Business Partner", icon: MapPin },
  ];

  return (
    <section className="py-24 bg-[#050505] border-t border-gold-500/10" id="ngpp-infographic">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-black text-white text-center mb-16 uppercase italic">
          NEXORA <span className="text-gold-500">GROWTH PARTNER PROGRAM</span>
        </h2>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto mb-24">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold-500 to-transparent" />
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className={`relative flex items-center mb-12 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="absolute left-0 md:left-1/2 w-12 h-12 rounded-full bg-[#0A0A0A] border-2 border-gold-500 flex items-center justify-center transform -translate-x-6 md:-translate-x-6">
                <step.icon className="text-gold-500" size={20} />
              </div>
              <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="bg-[#0c0c0f] border border-white/5 p-6 rounded-2xl">
                  <h4 className="text-white font-bold text-lg uppercase tracking-wider">{step.title}</h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Earnings Examples */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#0c0c0f] to-[#151518] p-10 rounded-3xl border border-gold-500/20">
          <h3 className="text-2xl font-black text-white uppercase mb-8 text-center text-gold-500 italic">EARNINGS POTENTIAL</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { level: "Entry", reward: "₹5,000", desc: "Per Shop Activation" },
              { level: "Growth", reward: "₹25,000+", desc: "Monthly Recurring" },
              { level: "District", reward: "₹1,00,000+", desc: "Systemic Override" },
            ].map((ex, i) => (
              <div key={i} className="text-center p-6 border border-white/5 rounded-2xl bg-black/30">
                <div className="text-gold-400 font-bold uppercase text-xs mb-2">{ex.level}</div>
                <div className="text-3xl font-black text-white mb-1">{ex.reward}</div>
                <div className="text-gray-500 text-sm">{ex.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
