import React from 'react';
import { Calendar, Users, MessageSquareText, CreditCard, Gift, Star, BrainCircuit, Globe, BarChart3, Settings } from 'lucide-react';

export default function ProductShowcase() {
  const modules = [
    { name: "Booking Management", icon: Calendar },
    { name: "Customer CRM", icon: Users },
    { name: "WhatsApp Automation", icon: MessageSquareText },
    { name: "QR Payments", icon: CreditCard },
    { name: "Membership", icon: Gift },
    { name: "Loyalty Program", icon: Star },
    { name: "Review Engine", icon: Star },
    { name: "AI Insights", icon: BrainCircuit },
    { name: "Website Builder", icon: Globe },
    { name: "SEO Visibility", icon: BarChart3 },
  ];

  return (
    <section className="py-24 bg-black" id="product-showcase">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-white uppercase mb-16">
          EK PLATFORM.<br />
          <span className="text-gold-500">POORA SALON CONTROL.</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {modules.map((m, i) => (
            <div key={i} className="p-6 bg-[#0c0c0f] border border-white/5 rounded-2xl flex flex-col items-center hover:border-gold-500/30 transition-all">
              <m.icon className="w-10 h-10 text-gold-450 mb-4" />
              <span className="font-bold text-white text-sm uppercase tracking-wider">{m.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
