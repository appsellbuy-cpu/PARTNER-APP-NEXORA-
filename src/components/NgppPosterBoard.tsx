/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, Award, Star, Trophy, Users, TrendingUp, Handshake, ShieldCheck, 
  Coins, Ban, CheckCircle, Flame, Gift, ArrowRight, MessageCircle, Laptop,
  Tablet, FileText, Shirt, Car, ChevronRight, PhoneCall, HeartHandshake
} from 'lucide-react';

export default function NgppPosterBoard() {
  const [partnerActiveShops, setPartnerActiveShops] = useState<number>(100);

  // Pillars from the top of the poster
  const programPillars = [
    {
      title: "Salary Nahi Growth Share",
      sub: "No fixed caps or salary traps. Earn direct recurring transaction overrides.",
      icon: Coins,
      tag: "FINANCIAL FREEDOM"
    },
    {
      title: "Shop Add Nahi Business Build Karo",
      sub: "Build a persistent digital network of smart active salons. True scalable legacy.",
      icon: TrendingUp,
      tag: "NETWORK SOVEREIGNTY"
    },
    {
      title: "Apne District Ka Growth Leader Bano",
      sub: "Earn premium overriding margins and manage regional merchant circles.",
      icon: Users,
      tag: "LEADERSHIP SCALE"
    },
    {
      title: "Recognition Power + Rewards",
      sub: "Elevate your ranking into the prestigious National Hall of Fame circles.",
      icon: Award,
      tag: "EXCLUSIVE RECOGNITION"
    }
  ];

  // Benefits from the middle of the poster
  const benefits = [
    { name: "One-Time Activation Bonus", desc: "Instantly claim ₹150 for each newly onboarded salon.", icon: Gift },
    { name: "Monthly Growth Share", desc: "Perpetual margin dividends on active booking tickets.", icon: Coins },
    { name: "Milestone Rewards", desc: "Gain high-end workspace assets automatically.", icon: Trophy },
    { name: "Hall Of Fame Recognition", desc: "Gain public PR press features as regional leader.", icon: Star },
    { name: "Leadership Opportunities", desc: "Override and mentor secondary junior developers.", icon: TrendingUp },
    { name: "Strong Partner Community", desc: "Collaborate and scale alongside India's elite masters.", icon: Users },
  ];

  // Milestones from the poster
  const posterMilestones = [
    {
      shops: 25,
      title: "Rookie Base Kit",
      reward: "Welcome Kit + Certificate",
      desc: "Receive customized sales pitches, hardcopy flyers, and an authorized frame license.",
      color: "border-blue-500/15 bg-blue-500/[0.02]",
      badge: "ROOKIE",
      icon: FileText,
      graphic: (
        <div className="relative w-16 h-12 shrink-0 bg-blue-950/40 border border-blue-500/20 rounded-lg flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent" />
          <FileText className="w-5 h-5 text-blue-400" />
          <div className="absolute bottom-1 right-1 px-1 py-0.2 bg-blue-500 text-black text-[6.5px] font-mono rounded leading-none font-bold">PDF KIT</div>
        </div>
      )
    },
    {
      shops: 50,
      title: "Official Merchandise",
      reward: "Official Nexora T-Shirt",
      desc: "Wear the absolute authority. Claim a custom comfortable black brand polo shirt.",
      color: "border-purple-500/15 bg-purple-500/[0.02]",
      badge: "PRO BRAND",
      icon: Shirt,
      graphic: (
        <div className="relative w-16 h-12 shrink-0 bg-purple-950/40 border border-purple-500/20 rounded-lg flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-transparent" />
          <Shirt className="w-5 h-5 text-purple-400" />
          <div className="absolute bottom-1 right-1 px-1 py-0.2 bg-purple-500 text-white text-[6.5px] font-mono rounded leading-none font-bold">POLO</div>
        </div>
      )
    },
    {
      shops: 100,
      title: "Digital Operations",
      reward: "Nexora Tablet + Growth Badge",
      desc: "Speed up physical salon visits. Showcase live web booking system screens.",
      color: "border-amber-500/15 bg-amber-500/[0.02]",
      badge: "ELITE OPERATIONS",
      icon: Tablet,
      graphic: (
        <div className="relative w-16 h-12 shrink-0 bg-amber-950/40 border border-amber-500/20 rounded-lg flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 to-transparent animate-pulse" />
          <Tablet className="w-5 h-5 text-amber-400" />
          <div className="absolute bottom-1 right-1 px-1 py-0.2 bg-amber-500 text-black text-[6.5px] font-mono rounded leading-none font-bold">O-TAB</div>
        </div>
      )
    },
    {
      shops: 500,
      title: "Platinum Field Kit",
      reward: "Branded Laptop + Platinum Partner",
      desc: "Process complex spreadsheets of hundreds of venues with high performance.",
      color: "border-emerald-500/15 bg-emerald-500/[0.02]",
      badge: "MASTER CONSULTANT",
      icon: Laptop,
      graphic: (
        <div className="relative w-16 h-12 shrink-0 bg-emerald-950/40 border border-emerald-500/20 rounded-lg flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-transparent" />
          <Laptop className="w-5 h-5 text-emerald-400" />
          <div className="absolute bottom-1 right-1 px-1 py-0.2 bg-emerald-500 text-black text-[6.5px] font-mono rounded leading-none font-bold">LAPTOP</div>
        </div>
      )
    },
    {
      shops: 1000,
      title: "District Business Partner",
      reward: "Car Reward Program Eligibility!",
      desc: "Secure lifetime overridden margins on an entire city district grid plus private car dividends.",
      color: "border-rose-500/25 bg-rose-500/[0.02] shadow-[0_0_15px_rgba(239,68,68,0.04)]",
      badge: "SOVEREIGN ALLIANCE LEGEND",
      icon: Car,
      graphic: (
        <div className="relative w-16 h-12 shrink-0 bg-rose-950/40 border border-rose-500/20 rounded-lg flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/10 to-transparent" />
          <Car className="w-5 h-5 text-rose-400" />
          <div className="absolute bottom-1 right-1 px-1 py-0.2 bg-rose-500 text-white text-[5.5px] font-mono rounded leading-none font-bold uppercase">SUV ELIGIBLE</div>
        </div>
      )
    }
  ];

  // Calculate dynamic projected earnings
  // Formula based on poster: 100 active shops = ₹10,000+ monthly potential!
  const calculatedEarningPotential = (partnerActiveShops / 100) * 10000;

  return (
    <section className="relative py-24 bg-[#050507] scroll-mt-20 border-b border-white/5 overflow-hidden" id="growth-poster-board">
      {/* Absolute Ambient Shadows */}
      <div className="absolute top-[5%] left-[5%] w-[450px] h-[450px] bg-gold-450/[0.02] rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-[20%] right-[-10%] w-96 h-96 bg-purple-500/[0.025] rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Poster Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16 px-4">
          <span className="text-[10px] font-mono uppercase tracking-widest text-gold-450 bg-gold-500/5 px-3 py-1 rounded-full border border-gold-500/25 inline-block mb-4 font-bold">
            SECTION 5 // CORE PLATFORM FLYER SYNC
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-white mb-4 uppercase">
            NEXORA GROWTH PARTNER PROGRAM
          </h2>
          <div className="inline-block px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/35 mb-6">
            <span className="text-xs sm:text-sm font-mono font-bold text-gold-450 uppercase tracking-widest">
              📢 YE NAUKRI NAHI, YE AVSAR HAI! (This is not a job, this is an opportunity!)
            </span>
          </div>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-sans max-w-3xl mx-auto font-normal">
            Understand exactly how Nexora empowers local physical brokers and digital marketers. Onboard salon nodes onto our beauty operating system, stack up automated transaction commissions, and trigger luxury milestone rewards.
          </p>
        </div>

        {/* HIGH-FIDELITY INTERACTIVE POSTER CONTAINER */}
        <div className="bg-[#0c0c0e] border border-gold-500/25 rounded-[36px] p-6 sm:p-10 relative overflow-hidden shadow-[0_0_50px_rgba(211,157,44,0.06)]" id="nexora-flyer-interactive-board">
          
          {/* Subtle luxury overlay watermark pattern */}
          <div className="absolute top-4 left-4 text-[9px] font-mono text-gray-700/45 select-none leading-none">
            NEXORA ALLIANCE LEDGER // VERSION 4 // SECURE
          </div>
          <div className="absolute bottom-4 right-6 text-[9px] font-mono text-gray-75 * 0.4 pointer-events-none select-none">
            © 2026 NEXORA SYSTEMS
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT AREA: INTERACTIVE CALCULATOR & CORE BENEFITS (7 Columns) */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Pillars (Four Pillars from poster) */}
              <div>
                <span className="text-[9.5px] font-mono text-gold-450 uppercase tracking-widest block mb-4 font-bold">
                  ✦ TARGET ALLIANCE PILLARS
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {programPillars.map((p, idx) => {
                    const PillarIcon = p.icon;
                    return (
                      <div key={idx} className="p-4 bg-black/40 border border-white/5 rounded-2xl flex items-start gap-3 hover:border-gold-500/15 transition-all">
                        <div className="p-2 bg-gold-500/5 text-gold-400 border border-gold-500/20 rounded-xl shrink-0">
                          <PillarIcon className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <span className="text-[7.5px] font-mono text-gray-500 block uppercase font-bold">{p.tag}</span>
                          <h4 className="text-xs font-bold text-white uppercase tracking-wide mt-0.5 leading-none">{p.title}</h4>
                          <p className="text-[10.5px] text-gray-450 leading-relaxed font-sans mt-1.5">{p.sub}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Dynamic Formula Display Block */}
              <div className="p-6 bg-gradient-to-r from-gold-950/15 via-[#111113] to-transparent border border-gold-500/20 rounded-3xl relative overflow-hidden" id="flyer-dynamic-calculator">
                <div className="absolute top-2 right-4 text-[8px] font-mono text-gold-450 uppercase animate-pulse font-black bg-gold-500/5 px-2 py-0.5 border border-gold-500/20 rounded">
                  JITNI ACTIVE SHOPS UTNA GROWTH SHARE
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
                  <div>
                    <span className="text-[8px] font-mono text-gray-500 block uppercase tracking-widest font-bold">PROJECTION SYSTEM MATTERS</span>
                    <h4 className="text-base font-black text-white uppercase tracking-wide font-mono">Simulate Earning Potential</h4>
                  </div>
                  
                  {/* Dynamic potential multiplier layout */}
                  <div className="bg-[#121214] border border-gold-500/20 p-2 rounded-xl text-center">
                    <span className="text-[8px] font-mono text-emerald-400 block font-bold">POTENTIAL</span>
                    <span className="text-sm font-black text-emerald-450 font-mono">
                      ₹{calculatedEarningPotential.toLocaleString()}+ / Month
                    </span>
                  </div>
                </div>

                {/* Slider input element */}
                <div className="space-y-2">
                  <input 
                    type="range"
                    min="10"
                    max="1000"
                    step="10"
                    value={partnerActiveShops}
                    onChange={(e) => setPartnerActiveShops(Number(e.target.value))}
                    className="w-full accent-gold-500 h-1.5 bg-white/5 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-[8px] font-mono text-gray-550 font-bold">
                    <span>10 ACTIVE SHOPS (₹1,000+)</span>
                    <span className="text-gold-450 font-bold">100 ACTIVE SHOPS (₹10,000+ Potential)*</span>
                    <span>1000 ACTIVE (₹1,00,000+)</span>
                  </div>
                </div>

                <p className="text-[10px] text-gray-400 font-sans leading-relaxed mt-4 border-t border-white/5 pt-3">
                  ✓ <b>Transparency Notice:</b> Earnings rely strictly on salons keeping their booking calendars active on the system. Zero complex downline recruitment matrices.
                </p>
              </div>

              {/* Program Benefits grid */}
              <div>
                <span className="text-[9.5px] font-mono text-gold-450 uppercase tracking-widest block mb-4 font-black">
                  ✦ SYSTEM-WIDE BENEFITS
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {benefits.map((b, i) => {
                    const BenIcon = b.icon;
                    return (
                      <div key={i} className="p-3 rounded-xl bg-black/35 border border-white/5 text-center flex flex-col items-center justify-center hover:border-gold-500/10 hover:bg-black/50 transition-all">
                        <BenIcon className="w-4 h-4 text-gold-450 mb-1.5 shrink-0" />
                        <h5 className="text-[10px] font-bold text-gray-200 uppercase leading-none truncate w-full">{b.name}</h5>
                        <p className="text-[8.5px] text-gray-500 leading-normal font-sans mt-1 text-center line-clamp-2">{b.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* RIGHT AREA: MILESTONE LISTINGS & OUTCOMES (5 Columns) */}
            <div className="lg:col-span-1 border-l border-white/5 h-full hidden lg:block" />

            <div className="lg:col-span-4 space-y-6">
              
              {/* Rewards Checklist */}
              <div>
                <span className="text-[9.5px] font-mono text-gold-450 uppercase tracking-widest block mb-4 font-black">
                  ✦ MILESTONE REWARDS ROADMAP
                </span>
                
                <div className="space-y-3" id="milestones-stream">
                  {posterMilestones.map((mil, idx) => {
                    const MilIcon = mil.icon;
                    const isPassed = partnerActiveShops >= mil.shops;

                    return (
                      <div 
                        key={idx}
                        className={`p-3.5 rounded-2xl border flex gap-3 transition-all relative overflow-hidden ${mil.color} ${
                          isPassed ? 'border-gold-500/25 bg-gold-950/[0.015]' : 'border-white/5'
                        }`}
                      >
                        {/* Visual checklist status circle */}
                        <div className="absolute top-2 right-2 flex items-center gap-1">
                          <span className={`text-[7px] font-mono font-bold px-1.5 py-0.2 rounded leading-none ${
                            isPassed ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-550/20' : 'bg-white/5 text-gray-500'
                          }`}>
                            {isPassed ? "CLAIMABLE" : "LOCKED"}
                          </span>
                        </div>

                        {/* Graphic replica mockup */}
                        {mil.graphic}

                        <div className="flex-1 min-w-0">
                          <span className="text-[7.5px] font-mono text-gold-450 uppercase font-black">{mil.shops} ACTIVE SHOPS</span>
                          <h5 className="text-[11.5px] font-bold text-white uppercase tracking-wide truncate">{mil.title}</h5>
                          <h6 className="text-[10px] font-mono text-emerald-450 font-bold lowercase mt-0.5">{mil.reward}</h6>
                          <p className="text-[9.5px] text-gray-500 leading-relaxed font-sans mt-1">{mil.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Our Pledge: Humara Vaada section */}
              <div className="p-4 bg-black/60 border border-gold-500/20 rounded-2xl">
                <span className="text-[8.5px] font-mono text-gold-450 block uppercase tracking-widest font-black text-center mb-3">
                  🤝 HUMARA VAADA (Our Guarantee)
                </span>
                <div className="grid grid-cols-2 gap-2 text-center text-[9px] font-mono">
                  <div className="p-2 rounded bg-[#101012] border border-white/5">
                    <span className="text-red-400 font-bold block">❌ JOINING FEE</span>
                    <span className="text-[8px] text-gray-500 uppercase mt-0.5 block leading-none">Kabhibhi Nahi</span>
                  </div>
                  <div className="p-2 rounded bg-[#101012] border border-white/5">
                    <span className="text-red-400 font-bold block">❌ INVESTMENT</span>
                    <span className="text-[8px] text-gray-500 uppercase mt-0.5 block leading-none">Zara-bhi Nahi</span>
                  </div>
                  <div className="p-2 rounded bg-[#101012] border border-white/5 col-span-2">
                    <span className="text-emerald-400 font-black block">✓ 100% TRANSPARENT SYST.</span>
                    <span className="text-[8px] text-gray-500 uppercase mt-0.5 block leading-none">Only active shop transactional earnings</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* FOOTER DIRECT ACTION BLOCK */}
          <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-left font-sans w-full md:w-auto">
              {/* WhatsApp round visual launcher */}
              <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-550/20 text-emerald-400 rounded-full flex items-center justify-center shrink-0">
                <MessageCircle className="w-6 h-6 fill-current animate-pulse" />
              </div>
              <div>
                <span className="text-[8px] font-mono text-emerald-400 block uppercase font-bold tracking-wider mb-0.5">DIRECT WHATSAPP DESK DIRECT</span>
                <h4 className="text-sm font-bold text-white uppercase tracking-wide leading-none">WhatsApp Us: +91 7852877721</h4>
                <p className="text-[11px] text-gray-400 leading-normal mt-1 font-sans">Apply instantly to join the nexora partner family today.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch gap-3 w-full md:w-auto">
              <a 
                href="https://wa.me/917852877721?text=Hi%20Nexora,%20I%20want%2520to%20apply%20as%20a%20Growth%20Partner."
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-black font-mono text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 uppercase tracking-widest shrink-0 text-center select-none"
              >
                <PhoneCall className="w-3.5 h-3.5 shrink-0" />
                <span>WhatsApp Now</span>
              </a>

              <a 
                href="#partner-program"
                className="px-6 py-3.5 bg-gold-450 hover:bg-gold-400 text-black font-mono text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 uppercase tracking-widest shrink-0 text-center select-none"
              >
                <span>Onboard Online</span>
                <ChevronRight className="w-4 h-4 shrink-0" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
