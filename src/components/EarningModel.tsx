/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, Gift, Coins, Trophy, Landmark, ArrowRight, CheckCircle, 
  MapPin, ShieldCheck, HelpCircle, Laptop, Tablet, Shirt, Car, ChevronRight, Play
} from 'lucide-react';

export default function EarningModel() {
  const [activeStepId, setActiveStepId] = useState<number>(0);

  const steps = [
    {
      id: 0,
      phase: "PHASE 01",
      title: "Activation Reward",
      tagline: "Instant Onboarding Cash Injection",
      shortDesc: "Get paid instantly as soon as a newly onboarded beauty studio finishes setup.",
      bonus: "₹150 Per Salon Added",
      payoutFrequency: "Real-time Direct Payout",
      details: [
        "Earn 100% upfront rewards for physical setup guidance.",
        "Triggers automatically upon the salon receiving their custom booking calendar linkage.",
        "Zero limits on physical onboardings. Add 10 salons today, claim ₹1,500 immediately.",
        "Includes authorized shop verification and QR poster installation."
      ],
      icon: Gift,
      color: "from-amber-500/20 to-amber-600/5 text-amber-400 border-amber-500/30",
      accentGlow: "bg-amber-550/5",
    },
    {
      id: 1,
      phase: "PHASE 02",
      title: "7 Day Growth Share",
      tagline: "Ultra-Fast Rolling Royalty Multiplier",
      shortDesc: "Earn dynamic, recurring platform commissions split directly into your cash ledger.",
      bonus: "1.2% Overriding Commission",
      payoutFrequency: "Every 7 Days Rolling",
      details: [
        "Collect direct overriding cuts on all credit card, UPI, or cash bookings at connected parlors.",
        "Processed every single week (7-day lifecycle ledger audit). No monthly waiting queues.",
        "Fully passive payout. As long as users book hair styling appointments, you earn compound dividends.",
        "Fully viewable real-time inside your core Partner Wallet terminal."
      ],
      icon: Coins,
      color: "from-purple-500/20 to-purple-600/5 text-purple-400 border-purple-500/30",
      accentGlow: "bg-purple-600/5",
    },
    {
      id: 2,
      phase: "PHASE 03",
      title: "Milestones",
      tagline: "Self-Compounding Tech Asset Rewards",
      shortDesc: "Unlock critical operations equipment absolutely free as your connected network expands.",
      bonus: "welcome kit • tab • laptop",
      payoutFrequency: "Claimed Instantly On Target",
      details: [
        "25 Active Salons: Claim custom marketing welcome kit, hardcopy pitches, and official credentials.",
        "50 Active Salons: Claim premium high-tensile black Nexora polo merchandise.",
        "100 Active Salons: Claim a high-performance operations tablet for physical walk-throughs.",
        "500 Active Salons: Claim a professional workspace laptop for database tracking."
      ],
      icon: Trophy,
      color: "from-blue-500/20 to-blue-600/5 text-blue-450 border-blue-500/30",
      accentGlow: "bg-blue-550/5",
    },
    {
      id: 3,
      phase: "PHASE 04",
      title: "District Partner",
      tagline: "Sovereign Municipal Micro-Ownership",
      shortDesc: "Escalate into regional leadership boards to secure overriding commissions on entire city sectors.",
      bonus: "Regional Franchise Rights + SUV Payout Fund",
      payoutFrequency: "Monthly Retainer + Master Margin",
      details: [
        "Command absolute administrative rights over locked postal zip codes.",
        "Earn up to 0.4% secondary override commissions on other minor general partners' network pools.",
        "Qualify directly for Nexora's Titanium SUV Car Reward program.",
        "Represent the official franchise at corporate beauty sector board sessions."
      ],
      icon: Landmark,
      color: "from-emerald-500/20 to-emerald-600/5 text-emerald-400 border-emerald-500/30",
      accentGlow: "bg-emerald-550/5",
    }
  ];

  const activeStep = steps[activeStepId];

  return (
    <section className="relative py-24 bg-[#040406] border-b border-white/5 overflow-hidden" id="earning-model-infographic">
      
      {/* Background Graphic elements representing gold threads */}
      <div className="absolute top-[15%] left-[-10%] w-[500px] h-[500px] bg-gold-450/[0.02] rounded-full blur-[140px] pointer-events-none -s-10" />
      <div className="absolute bottom-[10%] right-[-10%] w-[400px] h-[400px] bg-purple-900/[0.03] rounded-full blur-[110px] pointer-events-none -s-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-gold-450 bg-gold-500/5 px-3 py-1 rounded-full border border-gold-500/20 inline-block mb-4 font-bold">
            SECTION 8 // GOLD EARNING BLUEPRINT
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-white uppercase leading-tight mb-4">
            THE SYSTEMATIC EARNING MODEL
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-sans font-normal">
            Understand the complete path of the Nexora Growth Partner Program. We have engineered a hyper-transparent, linear timeline that moves you from instant onboarding bounties and rolling weekly shares to high-end devices and supreme regional coordination rights.
          </p>
        </div>

        {/* 4-PHASE HORIZONTAL GOLD TIMELINE BAR (Desktop style) */}
        <div className="mb-12 relative max-w-5xl mx-auto px-6 hidden md:block">
          {/* Background Connecting Gold Track Line */}
          <div className="absolute top-1/2 -translate-y-1/2 left-16 right-16 h-1 bg-gradient-to-r from-amber-500/10 via-purple-500/20 to-emerald-500/10 rounded-full" />
          
          <div className="grid grid-cols-4 gap-4 relative z-10 select-none">
            {steps.map((st, index) => {
              const StepIcon = st.icon;
              const isSelected = activeStepId === index;
              
              return (
                <button
                  key={st.id}
                  onClick={() => setActiveStepId(index)}
                  className="flex flex-col items-center text-center focus:outline-none cursor-pointer group"
                  id={`btn-earning-step-${st.id}`}
                >
                  {/* Outer circle with animated golden neon halo */}
                  <div className={`w-14 h-14 rounded-full border flex items-center justify-center transition-all duration-300 ${
                    isSelected 
                      ? 'bg-black border-gold-450 scale-110 shadow-[0_0_20px_rgba(211,157,44,0.25)]' 
                      : 'bg-[#0f0f12] border-white/10 hover:border-white/20 group-hover:scale-105'
                  }`}>
                    <StepIcon className={`w-5 h-5 transition-colors ${
                      isSelected ? 'text-gold-450' : 'text-gray-400 group-hover:text-white'
                    }`} />
                  </div>

                  {/* Indicator Arrow for Sequence Flow */}
                  {index < 3 && (
                    <div className="absolute top-1/2 -translate-y-1/2 ml-[22%] text-gold-500/35 hidden lg:block">
                      <ArrowRight className="w-4 h-4 shrink-0 animate-pulse" />
                    </div>
                  )}

                  {/* Label Text block */}
                  <span className={`text-[9.5px] font-mono uppercase font-black tracking-widest mt-4 block ${
                    isSelected ? 'text-gold-450' : 'text-gray-500 group-hover:text-gray-300'
                  }`}>
                    {st.phase}
                  </span>
                  <h4 className={`text-xs font-bold uppercase mt-1 ${
                    isSelected ? 'text-white font-black' : 'text-gray-400 group-hover:text-gray-200'
                  }`}>
                    {st.title}
                  </h4>
                </button>
              );
            })}
          </div>
        </div>

        {/* MOBILE LAYOUT TIMELINE NAVIGATION TABS */}
        <div className="md:hidden flex overflow-x-auto gap-2 pb-4 scrollbar-hide mb-8 select-none">
          {steps.map((st, idx) => {
            const isSelected = activeStepId === idx;
            return (
              <button
                key={st.id}
                onClick={() => setActiveStepId(idx)}
                className={`px-4 py-2.5 rounded-xl border shrink-0 text-left cursor-pointer ${
                  isSelected 
                    ? 'bg-gold-500/10 border-gold-450 text-white font-mono text-xs font-bold' 
                    : 'bg-black border-white/5 text-gray-400 text-[11px]'
                }`}
                id={`btn-earning-step-mob-${st.id}`}
              >
                <div className="text-[8px] font-mono text-gold-450 block uppercase tracking-wider">{st.phase}</div>
                <div className="font-bold uppercase mt-0.5 whitespace-nowrap">{st.title}</div>
              </button>
            );
          })}
        </div>

        {/* TWO COLUMN CONTENT PLATFORM GRID: Detail Panel & Generated Flyer image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* LEFT SIDE: DYNAMIC EARNING PHASE PANELS (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-[#0a0a0d] border border-white/5 rounded-[32px] p-6 sm:p-8 relative overflow-hidden shadow-2xl">
            {/* Background lighting */}
            <div className={`absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl opacity-50 transition-all ${activeStep.accentGlow}`} />

            <div className="relative z-10 space-y-6">
              
              {/* Step indicator header */}
              <div className="flex items-center justify-between pb-3 border-b border-white/5">
                <div className="flex items-center space-x-2">
                  <span className="text-[10px] font-mono text-gold-450 bg-gold-500/5 px-2.5 py-0.5 border border-gold-500/20 rounded font-black uppercase">
                    {activeStep.phase} ACTIVE
                  </span>
                  <span className="h-1 w-1 rounded-full bg-gray-600" />
                  <span className="text-[9px] font-mono text-gray-500 font-bold uppercase tracking-wider">
                    NGPP CORE PIPELINE
                  </span>
                </div>
                
                {/* Rolling indicator for sequence */}
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-gray-450">
                  <span className="font-black text-white">{activeStep.id + 1}</span>
                  <span>/</span>
                  <span>4 Steps</span>
                </div>
              </div>

              {/* Title group */}
              <div>
                <span className="text-[9px] font-mono text-purple-400 uppercase tracking-widest block font-bold mb-1">{activeStep.tagline}</span>
                <h3 className="text-2xl sm:text-3xl font-display font-black text-white uppercase tracking-tight leading-none">
                  {activeStep.title}
                </h3>
                <p className="text-sm font-sans text-gray-300 leading-relaxed mt-3">
                  {activeStep.shortDesc}
                </p>
              </div>

              {/* Quick Specs Key-Value Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 text-left font-sans">
                  <span className="text-[8.5px] font-mono text-gray-500 block uppercase font-bold mb-1 leading-none">PROJECTED MARGIN BONUS</span>
                  <span className="text-sm font-bold font-mono text-white tracking-wide uppercase">{activeStep.bonus}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 text-left font-sans">
                  <span className="text-[8.5px] font-mono text-gray-500 block uppercase font-bold mb-1 leading-none">PAYOUT FREQUENCY CYCLE</span>
                  <span className="text-sm font-bold font-mono text-emerald-450 tracking-wide uppercase">{activeStep.payoutFrequency}</span>
                </div>
              </div>

              {/* Bullet details check items */}
              <div className="space-y-2.5 pt-3">
                <span className="text-[9px] font-mono text-gold-450 uppercase tracking-widest block font-black">
                  ✦ PROCESS MATRIX PROTOCOLS
                </span>
                
                <div className="space-y-2">
                  {activeStep.details.map((detail, k) => (
                    <div key={k} className="flex items-start gap-2 text-[12px] text-gray-300 font-sans leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Bottom linear pipeline status arrows indicator (mimics a gold timeline breadcrumb) */}
            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between font-mono text-[9px] text-gray-550">
              <div className="flex items-center gap-1">
                <span>Next Step:</span>
                <span className="text-gray-400 font-bold uppercase">
                  {activeStepId < 3 ? steps[activeStepId + 1].title : "District Partner Cap"}
                </span>
              </div>
              
              {activeStepId < 3 ? (
                <button 
                  onClick={() => setActiveStepId(prev => prev + 1)}
                  className="flex items-center gap-1 text-gold-450 hover:text-white transition-colors cursor-pointer font-bold uppercase"
                  id="btn-earning-next-phase"
                >
                  <span>Advance Pipeline</span>
                  <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                </button>
              ) : (
                <span className="text-emerald-400 font-bold uppercase">✓ Ultimate Alliance Peak Verified</span>
              )}
            </div>

          </div>

          {/* RIGHT SIDE: PREMIUM METALLIC GEOMETRIC INFOGRAPHIC EMBED (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-black border border-white/5 rounded-[32px] p-6 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-32 h-32 bg-gold-450/5 rounded-full blur-2xl pointer-events-none" />
            
            <div className="space-y-4">
              <span className="text-[9px] font-mono text-gold-450 uppercase tracking-widest block font-bold">
                ✦ HIGH FIDELITY DIAGRAM PROMPT MATCH
              </span>
              <h4 className="text-sm font-bold text-gray-200 uppercase tracking-wide font-display">
                Nexora Official Growth Flyer Map
              </h4>
              
              {/* Generated Image Wrapper with premium gold frame border */}
              <div className="relative aspect-auto bg-[#0b0b0e] border border-gold-500/25 rounded-2xl overflow-hidden group shadow-lg">
                <img 
                  src="/src/assets/images/earning_model_timeline_1781490857175.jpg"
                  alt="Nexora Gold Earning Model Timeline Infographic"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover opacity-90 group-hover:scale-102 transition-transform duration-500"
                />
                
                {/* Absolute status label on picture */}
                <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-black/80 border border-gold-500/20 rounded text-[7px] font-mono text-gold-450 uppercase tracking-wider font-extrabold select-none">
                  SECURE LEDGER V4
                </div>
              </div>

              <p className="text-[11.5px] text-gray-400 leading-normal font-sans">
                This blueprint illustrates the physical operational milestones. From welcome kits to a dedicated field laptop, each node ensures your beauty co-operative grows consistently.
              </p>
            </div>

            {/* Master sign up prompt */}
            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between gap-4 text-[10px] font-mono text-gray-550 leading-relaxed">
              <span>*Rewards are fully governed by verified salon activation metrics inside the co-operative.</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
