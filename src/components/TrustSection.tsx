import React from 'react';

export default function TrustSection() {
  const stats = [
    { label: "Salons", value: "1000+" },
    { label: "Customers", value: "50,000+" },
    { label: "Bookings", value: "100,000+" },
    { label: "Partner Network", value: "Growing" },
  ];

  const testimonials = [
    { name: "Anita Sharma", salon: "Elite Looks", text: "Nexora changed how I manage my salon." },
    { name: "Rahul Verma", salon: "Modern Cutz", text: "The CRM feature is absolute gold!" },
  ];

  return (
    <section className="py-24 bg-[#050505]" id="trust">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-black text-white text-center mb-16 uppercase italic">
          GROWING <span className="text-gold-500">BEAUTY NETWORK</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 text-center">
          {stats.map((s, i) => (
            <div key={i} className="p-6">
              <div className="text-4xl md:text-5xl font-black text-gold-500 mb-2">{s.value}</div>
              <div className="text-gray-400 uppercase tracking-widest text-sm">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-[#0c0c0f] border border-white/5 p-8 rounded-3xl">
              <p className="text-gray-300 italic mb-6">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gold-500/20 rounded-full" />
                <div>
                  <div className="text-white font-bold">{t.name}</div>
                  <div className="text-gold-500 text-sm">{t.salon}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
