import React from 'react';
import { Star, CheckCircle, MapPin, Building, ShieldCheck, Award } from 'lucide-react';

export default function TrustSection() {
  const stats = [
    { label: "Partner Salons", value: "1,000+" },
    { label: "Satisfied Customers", value: "50,000+" },
    { label: "Bookings Processed", value: "100,000+" },
    { label: "Partner Network", value: "PAN-India" },
  ];

  const testimonials = [
    { 
      name: "Anita Sharma", 
      role: "Director & Founder",
      salon: "Elite Looks Salon & Spa", 
      location: "Indiranagar, Bengaluru",
      rating: "5.0 ★★★★★",
      text: "Nexora changed how I manage my salon. The automated WhatsApp confirmations reduced no-shows by 85%, and live revenue analytics give me complete control.",
      image: "/src/assets/images/director_portrait_anita_1793106054728.jpg",
      storefront: "/src/assets/images/storefront_luxe_bounce_1793106057586.jpg",
      verified: "VERIFIED DIRECTRESS",
      metrics: "3.2x Revenue Growth"
    },
    { 
      name: "Rahul Verma", 
      role: "Owner & Master Barber",
      salon: "Modern Cutz Barbershop", 
      location: "Connaught Place, Delhi",
      rating: "5.0 ★★★★★",
      text: "The Smart CRM & Loyalty feature is absolute gold! Clients love earning XP points on visits and our repeat booking rate jumped to 91% in just 3 months.",
      image: "/src/assets/images/director_portrait_rahul_1793106055712.jpg",
      storefront: "/src/assets/images/storefront_luxe_bounce_1793106057586.jpg",
      verified: "VERIFIED DIRECTOR",
      metrics: "+91% Repeat Visits"
    },
  ];

  return (
    <section className="py-24 bg-[#050505] border-b border-white/10 relative overflow-hidden select-none" id="trust">
      {/* Ambient background glows */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-gold-500/[0.03] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-purple-900/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-black text-white text-center mb-16 uppercase font-display tracking-tight">
          GROWING <span className="text-gold-500 italic">BEAUTY NETWORK</span>
        </h2>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 text-center">
          {stats.map((s, i) => (
            <div key={i} className="p-6 bg-[#0c0c0f] border border-white/5 rounded-3xl hover:border-gold-500/30 transition-all shadow-xl">
              <div className="text-3xl md:text-4xl font-black text-gold-500 mb-2 font-mono">{s.value}</div>
              <div className="text-gray-400 uppercase tracking-widest text-xs font-mono font-bold">{s.label}</div>
            </div>
          ))}
        </div>

        {/* FEATURED DIRECTOR TESTIMONIAL CARDS WITH PORTRAITS & STOREFRONTS */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-[#0c0c0f] border border-white/10 p-8 rounded-3xl relative flex flex-col justify-between hover:border-gold-500/40 hover:shadow-[0_20px_40px_rgba(211,157,44,0.1)] transition-all group">
              
              <div>
                {/* Header Badge */}
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/5">
                  <div className="flex items-center gap-2 text-emerald-400 font-mono text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{t.verified}</span>
                  </div>
                  <span className="text-gold-400 font-mono text-xs font-bold">{t.rating}</span>
                </div>

                <p className="text-gray-300 italic text-sm sm:text-base leading-relaxed mb-8">
                  "{t.text}"
                </p>
              </div>

              {/* Director Profile & Storefront Snapshot */}
              <div className="pt-6 border-t border-white/5 flex items-center justify-between gap-4">
                
                {/* Portrait + Info */}
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden border border-gold-500/30 shadow-md shrink-0">
                    <img 
                      src={t.image} 
                      alt={t.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-white font-bold text-base font-display">{t.name}</div>
                    <div className="text-gold-400 text-xs font-medium">{t.role}</div>
                    <div className="text-gray-500 text-[11px] flex items-center gap-1 mt-0.5 font-mono">
                      <Building className="w-3 h-3 text-purple-400" />
                      <span>{t.salon}</span>
                    </div>
                  </div>
                </div>

                {/* Storefront Snapshot */}
                <div className="hidden sm:block relative w-24 aspect-[16/10] rounded-xl overflow-hidden border border-white/10 shrink-0">
                  <img 
                    src={t.storefront} 
                    alt={t.salon} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute bottom-1 right-1 text-[7px] font-mono text-gold-400 bg-black/80 px-1 rounded">
                    ACTIVE STORE
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
