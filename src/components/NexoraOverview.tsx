import React from 'react';
import { Building2, Users, Network, TrendingUp } from 'lucide-react';

export default function NexoraOverview() {
  return (
    <section className="py-24 bg-[#08080a]" id="nexora-nazar-mein">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-black text-white text-center mb-16 uppercase">Nexora Ek Nazar Mein</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Salon Owner", desc: "More Customers, More Revenue.", icon: Building2 },
            { title: "Customer", desc: "Easy Discovery, Easy Booking.", icon: Users },
            { title: "Growth Partner", desc: "Shop Add Karo, Growth Share Pao.", icon: Network },
            { title: "Brand", desc: "Expand Your Network.", icon: TrendingUp },
          ].map((item, i) => (
            <div key={i} className="bg-[#0c0c0f] p-8 rounded-3xl border border-white/5 hover:border-gold-500/20 transition-all">
              <item.icon className="w-10 h-10 text-gold-450 mb-6" />
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
