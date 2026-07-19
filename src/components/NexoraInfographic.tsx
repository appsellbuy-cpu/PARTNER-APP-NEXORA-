import React from 'react';
import { Building2, Users, Calendar, Star, Heart, CreditCard, PieChart, Search, ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';

export default function NexoraInfographic() {
  const nodes = [
    { name: "Salon Owners", icon: Building2 },
    { name: "Customers", icon: Users },
    { name: "Bookings", icon: Calendar },
    { name: "Reviews", icon: Star },
    { name: "Referrals", icon: Heart },
    { name: "Payments", icon: CreditCard },
    { name: "Growth Analytics", icon: PieChart },
    { name: "Google Visibility", icon: Search },
  ];

  const flow = ["Salon Joins Nexora", "Customers Discover", "Bookings Increase", "Reviews Increase", "Referrals Increase", "Revenue Grows"];

  return (
    <section className="py-24 bg-[#0A0A0A] border-y border-white/5" id="infographic">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-black text-white text-center mb-16 uppercase italic">
          NEXORA <span className="text-gold-500">KYA KARTA HAI?</span>
        </h2>

        {/* Center Node Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {nodes.map((node, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-4 bg-[#0F0F12] border border-gold-500/10 rounded-2xl flex flex-col items-center gap-3 text-gray-300 hover:text-gold-400 transition-colors"
            >
              <node.icon size={24} />
              <span className="text-xs font-bold uppercase">{node.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Growth Flow */}
        <div className="max-w-xs mx-auto space-y-2">
          {flow.map((step, i) => (
            <div key={i} className="flex flex-col items-center">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="w-full text-center py-4 px-6 bg-gradient-to-r from-gold-500/10 to-transparent border border-gold-500/20 rounded-xl text-white font-bold"
              >
                {step}
              </motion.div>
              {i < flow.length - 1 && <ArrowDown className="text-gold-600 my-1" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
