/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import React from 'react';
import { motion } from 'motion/react';
import { XCircle, CheckCircle, ChevronRight, AlertTriangle, Sparkles, TrendingUp } from 'lucide-react';

export default function RealProblemVsSolution() {
  const oldSalonPoints = [
    { text: "Empty Chairs", desc: "No walk-ins on weekdays, idle staff eating up fixed costs.", label: "LOSS" },
    { text: "Manual Diary", desc: "Bookings written on paper registers. High double-booking risks.", label: "INEFFICIENT" },
    { text: "No Customer Database", desc: "No record of who visited, their contact numbers, or preferences.", label: "BLIND" },
    { text: "No Reviews", desc: "Zero online reputation or local high stakes ratings.", label: "INVISIBLE" },
    { text: "No Referrals", desc: "Lacking customer loyalty incentives or reward growth models.", label: "STAGNANT" }
  ];

  const nexoraPoints = [
    { text: "Online Booking", desc: "1-Click high-speed reservations populated on a live calendar.", label: "AUTOMATED" },
    { text: "QR Payments", desc: "Instant checkout integrated directly linked to your business account.", label: "SEAMLESS" },
    { text: "Reviews Engine", desc: "Automated feedback loops driving higher local rankings.", label: "5-STAR RATING" },
    { text: "Smart CRM", desc: "Know customer choices, birthday reminders and direct outreach.", label: "VALUABLE" },
    { text: "Loyalty Protocol", desc: "Reward circles that incentivize higher recurring revisits.", label: "LOYALTY" },
    { text: "Growth Dashboard", desc: "Track earnings, chairs active, and referrals in real-time.", label: "MONITOR" }
  ];

  return (
    <section className="relative py-24 bg-[#040405] scroll-mt-20 border-b border-white/5" id="real-problem-section">
      {/* Cinematic subtle light spots */}
      <div className="absolute top-[10%] left-[20%] w-96 h-96 bg-red-500/5 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-[15%] right-[20%] w-96 h-96 bg-emerald-500/5 rounded-full blur-[110px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-mono uppercase tracking-widest text-gold-450 bg-gold-500/5 px-3 py-1 rounded-full border border-gold-500/20 inline-block mb-4 font-bold">
            SECTION 4 // REAL INDUSTRY PROBLEM VS NEXT-GEN SOLUTION
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-white mb-4 uppercase">
            REAL PROBLEM: TRADITIONAL VS NEXORA DIGITAL
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-sans font-normal">
            Why some salons stay trapped in manual chaos while Nexora-powered luxury brands scale with automated bookings, higher customer retention, and recurring royalties.
          </p>
        </div>

        {/* Dynamic Split Screen Canvas Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* LEFT COLUMN: OLD SALON (TRADITIONAL CHAOS) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#09090b]/40 border border-red-500/15 rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden backdrop-blur-md"
            id="panel-traditional-salon"
          >
            {/* Background Red Highlight overlay */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/[0.02] rounded-full blur-xl pointer-events-none" />

            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-6">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-500" />
                  <span className="text-[10.5px] font-mono text-red-400 uppercase tracking-widest font-black">
                    Traditional Offline Salon
                  </span>
                </div>
                <span className="text-[8px] font-mono text-red-500 bg-red-500/10 border border-red-500/25 px-2 py-0.5 rounded font-black">
                  LAGGING
                </span>
              </div>

              {/* Title & Description of Old Model */}
              <h3 className="text-2xl font-display font-bold text-white mb-3 uppercase tracking-wide flex items-center gap-2">
                <span>OLD SALON</span>
                <span className="text-xs text-red-500 font-mono font-normal tracking-normal lowercase">(chaos & loss)</span>
              </h3>
              <p className="text-sm text-gray-450 leading-relaxed font-sans mb-6">
                Stuck handling high-stress daily booking problems using legacy diary logs, losing potential nearby customers to digital rivals, while empty chairs bleed rental overhead budgets.
              </p>

              {/* Points checklist */}
              <div className="space-y-3 mb-8">
                {oldSalonPoints.map((pt, i) => (
                  <div key={i} className="flex gap-3.5 p-3 rounded-xl bg-black/35 border border-red-500/5 hover:border-red-500/20 transition-all">
                    <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-gray-200 uppercase tracking-wide font-mono">
                          ❌ {pt.text}
                        </span>
                        <span className="text-[7.5px] font-mono bg-red-950/20 border border-red-900/30 text-red-450 px-1 py-0.2 rounded font-semibold leading-none uppercase">
                          {pt.label}
                        </span>
                      </div>
                      <p className="text-[11px] text-gray-500 leading-normal mt-0.5 font-sans">
                        {pt.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Generated Image Component: Old Barber Shop */}
            <div className="mt-4 relative group rounded-2xl overflow-hidden border border-red-500/10">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10 pointer-events-none" />
              <img 
                src="/src/assets/images/old_barber_shop_1781490020968.jpg" 
                alt="Traditional Old Salon Manual Booking" 
                className="w-full h-48 object-cover grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 left-4 z-20 font-mono text-[9.5px] text-gray-400">
                <span>Traditional shop with empty waiting lines</span>
              </div>
            </div>

          </motion.div>

          {/* RIGHT COLUMN: NEXORA SALON (THE NEXT-GEN REVOLUTION) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#0b0b0d] border border-gold-500/25 rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-[0_0_30px_rgba(211,157,44,0.06)] backdrop-blur-md"
            id="panel-nexora-salon"
          >
            {/* Background Gold Highlight overlay */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/[0.015] rounded-full blur-2xl pointer-events-none" />

            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-6">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-gold-450 animate-pulse" />
                  <span className="text-[10.5px] font-mono text-gold-450 uppercase tracking-widest font-black">
                    Nexora Authorized SalonOS
                  </span>
                </div>
                <span className="text-[8px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 px-2 py-0.5 rounded font-black flex items-center gap-1">
                  <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                  AUTOMATED GROWING
                </span>
              </div>

              {/* Title & Description of Nexora Model */}
              <h3 className="text-2xl font-display font-bold text-white mb-3 uppercase tracking-wide flex items-center gap-2">
                <span>NEXORA SALON</span>
                <span className="text-xs text-gold-450 font-mono font-normal tracking-normal uppercase">(Ecosystem Growth)</span>
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed font-sans mb-6">
                Complete dynamic cloud control. We equip physical venues with modern digital reservation links, instant checkout features, viral map review loops, and lifetime promotional tools.
              </p>

              {/* Points checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {nexoraPoints.map((pt, i) => (
                  <div key={i} className="flex gap-2.5 p-3 rounded-xl bg-[#121215]/60 border border-gold-500/10 hover:border-gold-500/30 hover:bg-[#121215] transition-all">
                    <CheckCircle className="w-4.5 h-4.5 text-emerald-400 shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <div className="flex items-center gap-1 flex-wrap">
                        <span className="text-xs font-bold text-white uppercase tracking-wide font-mono leading-tight">
                          ✅ {pt.text}
                        </span>
                      </div>
                      <span className="text-[7.5px] font-mono bg-gold-400/5 border border-gold-500/15 text-gold-450 px-1 py-0.2 rounded font-semibold leading-none uppercase mt-1 block w-fit">
                        {pt.label}
                      </span>
                      <p className="text-[10px] text-gray-400 leading-normal mt-1 font-sans">
                        {pt.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Generated Image Component: Modern Luxury Salon */}
            <div className="mt-4 relative group rounded-2xl overflow-hidden border border-gold-500/20">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10 pointer-events-none" />
              <img 
                src="/src/assets/images/modern_luxury_salon_1781490036647.jpg" 
                alt="Modern Luxury high-tech salon interior" 
                className="w-full h-48 object-cover group-hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-3 left-4 right-4 z-20 flex items-center justify-between font-mono text-[9.5px]">
                <span className="text-gold-450 font-bold">Premium aesthetic beauty terminal layout</span>
                <span className="text-emerald-400 flex items-center gap-1 font-bold">
                  <TrendingUp className="w-3 h-3 text-emerald-400" />
                  +42% Average Revenue
                </span>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
