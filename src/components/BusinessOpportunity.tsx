import React from 'react';
import { Briefcase, Zap, GraduationCap, TrendingUp, Award, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';

export default function BusinessOpportunity() {
  const benefits = [
    { name: "No Joining Fee", icon: Zap },
    { name: "Zero Investment", icon: Briefcase },
    { name: "Free Training", icon: GraduationCap },
    { name: "Activation Rewards", icon: TrendingUp },
    { name: "Growth Share", icon: TrendingUp },
    { name: "Leadership Status", icon: Award },
    { name: "District Partner", icon: MapPin },
  ];

  return (
    <section className="py-24 bg-[#0A0A0A] border-b border-white/10 relative overflow-hidden select-none" id="business-opportunity">
      {/* Background Lighting */}
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-purple-900/[0.04] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-gold-500/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADLINE */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-gold-400 bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/20 font-bold inline-flex items-center gap-1.5 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            ENTREPRENEURIAL PARTNER ALLIANCE
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white text-center uppercase font-display tracking-tight leading-none mb-3">
            SALARY KE LIYE KAAM MAT KARO.
          </h2>
          <h3 className="text-3xl md:text-5xl font-black text-gold-500 text-center uppercase font-display italic">
            APNA BEAUTY NETWORK BANAO.
          </h3>
        </div>

        {/* HIGH-IMPACT VISUAL MOCKUP CARDS FOR BUSINESS ECOSYSTEM */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          
          {/* Visual 1: Sales Partner Meeting Snapshot */}
          <div className="bg-[#0c0c0f] border border-white/10 rounded-3xl p-6 flex flex-col justify-between hover:border-gold-500/40 hover:shadow-[0_20px_40px_rgba(211,157,44,0.1)] transition-all group overflow-hidden">
            <div>
              <div className="flex justify-between items-center mb-4 pb-2 border-b border-white/5">
                <span className="text-[9px] font-mono text-gold-400 font-bold uppercase tracking-wider">01 • FIELD CONSULTATION</span>
                <span className="text-xs text-gold-500 font-mono font-bold">100% SUCCESS</span>
              </div>
              <h4 className="text-lg font-bold text-white font-display uppercase mb-2">Sales Onboarding In Action</h4>
              <p className="text-gray-400 text-xs leading-relaxed font-sans mb-4">
                Demonstrate live SalonOS dashboards directly to luxury salon directors and lock in instant system onboardings.
              </p>
              
              {/* Photo Frame */}
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 group-hover:border-gold-500/30 transition-all shadow-lg">
                <img 
                  src="/src/assets/images/sales_meeting_snapshot_1793106057635.jpg" 
                  alt="Sales Partner Demonstration" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-2 left-2 text-[8px] font-mono text-gold-400 bg-black/80 px-2 py-0.5 rounded">
                  AUTHENTIC FIELD SNAPSHOT
                </div>
              </div>
            </div>
          </div>

          {/* Visual 2: District Network Coordinates Map */}
          <div className="bg-[#0c0c0f] border border-white/10 rounded-3xl p-6 flex flex-col justify-between hover:border-purple-500/40 hover:shadow-[0_20px_40px_rgba(168,85,247,0.1)] transition-all group overflow-hidden">
            <div>
              <div className="flex justify-between items-center mb-4 pb-2 border-b border-white/5">
                <span className="text-[9px] font-mono text-purple-400 font-bold uppercase tracking-wider">02 • TERRITORY LOCK</span>
                <span className="text-xs text-purple-400 font-mono font-bold">LOCKED SECTORS</span>
              </div>
              <h4 className="text-lg font-bold text-white font-display uppercase mb-2">District Network Map</h4>
              <p className="text-gray-400 text-xs leading-relaxed font-sans mb-4">
                Claim exclusive municipal territory coordinates and earn perpetual overriding royalties on every salon checkout.
              </p>
              
              {/* Photo Frame */}
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 group-hover:border-purple-500/30 transition-all shadow-lg">
                <img 
                  src="/src/assets/images/storefront_luxe_bounce_1793106057586.jpg" 
                  alt="District Network Storefront" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-2 left-2 text-[8px] font-mono text-purple-300 bg-black/80 px-2 py-0.5 rounded">
                  BANGALORE & DELHI SECTORS
                </div>
              </div>
            </div>
          </div>

          {/* Visual 3: Business Growth Ecosystem & Ledger */}
          <div className="bg-[#0c0c0f] border border-white/10 rounded-3xl p-6 flex flex-col justify-between hover:border-emerald-500/40 hover:shadow-[0_20px_40px_rgba(16,185,129,0.1)] transition-all group overflow-hidden">
            <div>
              <div className="flex justify-between items-center mb-4 pb-2 border-b border-white/5">
                <span className="text-[9px] font-mono text-emerald-400 font-bold uppercase tracking-wider">03 • PASSIVE OVERRIDES</span>
                <span className="text-xs text-emerald-400 font-mono font-bold">1.2% OVERRIDE</span>
              </div>
              <h4 className="text-lg font-bold text-white font-display uppercase mb-2">Business Growth Ledger</h4>
              <p className="text-gray-400 text-xs leading-relaxed font-sans mb-4">
                Watch your passive commission wallet compound automatically with real-time transaction streaming logs.
              </p>
              
              {/* Photo Frame */}
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 group-hover:border-emerald-500/30 transition-all shadow-lg">
                <img 
                  src="/src/assets/images/financial_ledger_preview_1793106034588.jpg" 
                  alt="Financial Ledger Preview" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-2 left-2 text-[8px] font-mono text-emerald-400 bg-black/80 px-2 py-0.5 rounded">
                  PASSIVE OVERRIDE ENGINE
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* BENEFIT BADGES GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {benefits.map((b, i) => (
            <div key={i} className="p-5 bg-[#0c0c0f] border border-white/5 rounded-2xl flex flex-col items-center text-center hover:border-gold-500/30 hover:shadow-lg transition-all">
              <b.icon className="w-8 h-8 text-gold-500 mb-3" />
              <span className="font-bold text-white text-xs uppercase tracking-wider font-mono">{b.name}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
