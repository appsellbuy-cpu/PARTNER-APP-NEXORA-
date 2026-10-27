import React, { useState } from 'react';
import { 
  Calendar, Users, MessageSquareText, CreditCard, Gift, Star, 
  BrainCircuit, Globe, BarChart3, ChevronRight, Sparkles, CheckCircle, Smartphone, Monitor
} from 'lucide-react';

export default function ProductShowcase() {
  const [activeModule, setActiveModule] = useState<number | null>(null);

  const modules = [
    { 
      name: "Booking Management", 
      icon: Calendar, 
      tag: "REAL-TIME CALENDAR",
      desc: "Instant 24/7 online client bookings with automated slot conflict prevention & staff shift sync.",
      image: "/src/assets/images/booking_app_mockup_1793106033209.jpg",
      device: "Mobile App & Kiosk"
    },
    { 
      name: "WhatsApp Automation", 
      icon: MessageSquareText, 
      tag: "AI RETARGETING",
      desc: "Automated booking confirmations, re-engagement offers, and instant client feedback workflows.",
      image: "/src/assets/images/whatsapp_automation_mockup_1793106033429.jpg",
      device: "Smart Assistant"
    },
    { 
      name: "Customer CRM", 
      icon: Users, 
      tag: "RETENTION SUITE",
      desc: "Deep client analytics, visit histories, preferred stylists, and automatic birthday reward triggers.",
      image: "/src/assets/images/smart_crm_mockup_1793106034199.jpg",
      device: "Desktop SaaS"
    },
    { 
      name: "QR Payments", 
      icon: CreditCard, 
      tag: "INSTANT SETTLEMENT",
      desc: "Seamless UPI/Card checkout scanning with instant tips split & digital receipt delivery.",
      image: "/src/assets/images/qr_payment_mockup_1793106033453.jpg",
      device: "Smart Terminal"
    },
    { 
      name: "Membership & Loyalty", 
      icon: Gift, 
      tag: "PASSES & XP",
      desc: "Tiered VIP memberships, monthly recurring billing, and reward point redemptions.",
      image: "/src/assets/images/booking_app_mockup_1793106033209.jpg",
      device: "Mobile Wallet"
    },
    { 
      name: "AI Growth Insights", 
      icon: BrainCircuit, 
      tag: "PREDICTIVE ENGINE",
      desc: "AI-driven staff performance forecasting, inventory alerts, and revenue velocity projections.",
      image: "/src/assets/images/financial_ledger_preview_1793106034588.jpg",
      device: "Analytics Cockpit"
    },
    { 
      name: "Review Engine", 
      icon: Star, 
      tag: "5-STAR AUTOMATION",
      desc: "Auto-request Google reviews post-checkout to systematically boost local salon reputation.",
      image: "/src/assets/images/smart_crm_mockup_1793106034199.jpg",
      device: "Automated Bot"
    },
    { 
      name: "Website Builder & SEO", 
      icon: Globe, 
      tag: "ORGANIC DISCOVERY",
      desc: "Custom branded salon website with local Google Maps SEO optimization built right in.",
      image: "/src/assets/images/storefront_luxe_bounce_1793106057586.jpg",
      device: "Web Platform"
    }
  ];

  return (
    <section className="py-24 bg-[#050507] border-y border-white/10 relative overflow-hidden select-none" id="product-showcase">
      {/* Background ambient luxury lighting */}
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-purple-900/[0.04] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-gold-500/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-gold-400 bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/20 font-bold inline-flex items-center gap-1.5 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            UNIFIED SALONOS ARCHITECTURE
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase font-display tracking-tight leading-none mb-4">
            EK PLATFORM. <br />
            <span className="text-gold-500 italic">POORA SALON CONTROL.</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base font-sans max-w-xl mx-auto mt-2">
            Explore Nexora's enterprise modules engineered to automate operations, accelerate repeat client visits, and boost gross revenue.
          </p>
        </div>

        {/* SHOWCASE GRID WITH MOCKUPS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((m, i) => (
            <div 
              key={i} 
              onClick={() => setActiveModule(i)}
              className="group bg-[#09090c] border border-white/10 rounded-3xl p-5 flex flex-col justify-between hover:border-gold-500/40 hover:shadow-[0_20px_40px_rgba(211,157,44,0.12)] transition-all duration-300 cursor-pointer overflow-hidden relative"
            >
              {/* Subtle Ambient Hover Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/[0.02] rounded-full blur-2xl group-hover:bg-gold-500/[0.06] transition-all" />

              <div>
                {/* Header Meta Row */}
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[8.5px] font-mono text-gold-400 bg-gold-500/10 px-2 py-0.5 rounded border border-gold-500/20 font-bold uppercase tracking-wider">
                    {m.tag}
                  </span>
                  <span className="text-[9px] font-mono text-gray-500 flex items-center gap-1">
                    <Smartphone className="w-3 h-3 text-purple-400" />
                    {m.device}
                  </span>
                </div>

                {/* Module Title */}
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="p-2 bg-black/60 border border-gold-500/20 rounded-xl text-gold-400 group-hover:scale-110 transition-transform">
                    <m.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-white text-base font-display uppercase tracking-wider">
                    {m.name}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-xs leading-relaxed font-sans mb-4">
                  {m.desc}
                </p>

                {/* HIGH-IMPACT APP MOCKUP FRAME */}
                <div className="relative aspect-[16/9] bg-black rounded-2xl border border-white/10 overflow-hidden group-hover:border-gold-500/30 transition-all shadow-lg">
                  <img 
                    src={m.image} 
                    alt={m.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
                  <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center text-[8px] font-mono text-gray-300 bg-black/70 px-2 py-1 rounded backdrop-blur-xs">
                    <span>NEXORA UI V2.0</span>
                    <span className="text-gold-400 font-bold">PREVIEW →</span>
                  </div>
                </div>
              </div>

              {/* Footer CTA */}
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-gray-400 group-hover:text-gold-400 transition-colors">
                <span>INCLUDED IN SUITE</span>
                <ChevronRight className="w-4 h-4 text-gold-500 group-hover:translate-x-1 transition-transform" />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
