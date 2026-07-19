/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building, Calendar, Gift, ArrowRight, TrendingUp, Sparkles, 
  Quote, ShieldCheck, Zap, Handshake, Scale 
} from 'lucide-react';

export default function ActivationReward() {
  const [activeTab, setActiveTab] = useState<'single' | 'hundred'>('single');

  const steps = [
    {
      id: 1,
      num: "01",
      title: "Shop Onboard Karo",
      subtitle: "Step 1",
      desc: "Connect local salon owners inside your physical territory and set up their digital booking link profile in Nexora.",
      icon: Building,
      badgeColor: "text-amber-400 bg-amber-500/10 border-amber-500/20"
    },
    {
      id: 2,
      num: "02",
      title: "15 Din Active Revenue Complete",
      subtitle: "Step 2",
      desc: "Maintain regular daily customer booking check-outs and transactions over a continuous fortnight period.",
      icon: Calendar,
      badgeColor: "text-purple-400 bg-purple-500/10 border-purple-500/20"
    },
    {
      id: 3,
      num: "03",
      title: "Reward Unlock",
      subtitle: "Step 3",
      desc: "Instant unlock authorization of your one-time partner reward split straight into your registered wallet ledger.",
      icon: Gift,
      badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
    }
  ];

  const handleScrollToForm = () => {
    const target = document.querySelector('#contact-form-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => {
        const salesTabBtn = document.querySelector('#btn-form-tab-sales') as HTMLButtonElement;
        if (salesTabBtn) {
          salesTabBtn.click();
        }
      }, 550);
    }
  };

  return (
    <section className="relative py-24 bg-[#08080a] border-b border-white/5 overflow-hidden" id="activation-reward-section">
      
      {/* Background Graphic Ambient Pools */}
      <div className="absolute top-[20%] right-[-15%] w-96 h-96 bg-purple-900/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-15%] w-96 h-96 bg-gold-400/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-mono uppercase tracking-widest text-gold-450 bg-gold-550/5 px-3 py-1 rounded-full border border-gold-500/10 inline-block mb-4 font-bold">
            Master Reward Trigger
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium tracking-tight text-white mb-4">
            One-Time Activation Reward
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-sans">
            Secure self-compounding bonuses fast. Our simple 3-step activation loop unlocks instant financial tokens the moment your newly listed salon reaches regular maturity limits.
          </p>
        </div>

        {/* STEP-BY-STEP FLOW PIPELINE */}
        <div className="relative mb-20">
          
          <div className="flex items-center space-x-2.5 mb-8 justify-center sm:justify-start border-b border-white/5 pb-3 select-none">
            <span className="h-2 w-2 rounded-full bg-gold-450 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-gray-400 font-bold">
              The 3-Step Success Cycle
            </span>
          </div>

          {/* Symmetrical step layout boxes connected by dynamic lines */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative items-stretch">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div 
                  key={step.id}
                  className="bg-gradient-to-b from-luxury-card to-luxury-black/35 border border-white/5 rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative"
                  id={`reward-step-${step.id}`}
                >
                  
                  {/* Rotating step numbers */}
                  <span className="absolute top-4 right-6 text-4xl sm:text-5xl font-mono font-bold tracking-tight text-white/5 pointer-events-none select-none">
                    {step.num}
                  </span>

                  <div>
                    {/* Header line icon badge */}
                    <div className="flex items-center space-x-3 mb-5">
                      <div className={`p-2 rounded-xl border ${step.badgeColor}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[9px] font-mono text-gold-400 uppercase tracking-widest block font-bold">
                          {step.subtitle}
                        </span>
                        <h4 className="text-base font-semibold text-white">
                          {step.title}
                        </h4>
                      </div>
                    </div>

                    <p className="text-xs text-gray-400 leading-relaxed font-sans">
                      {step.desc}
                    </p>
                  </div>

                  {/* Flow pipeline chevron between step boxes */}
                  {index < 2 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-6 -translate-y-1/2 z-10 w-4 h-4 text-gold-450 shrink-0 pointer-events-none">
                      <ArrowRight className="w-6 h-6 animate-pulse" />
                    </div>
                  )}

                  <div className="pt-4 border-t border-white/5 mt-6 text-[10px] font-mono text-gray-500 uppercase tracking-wider">
                    Status: Vetted Phase {step.num}
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* MATHEMATICAL EXAMPLE SHOWCASE WRAPPER */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-2">
          
          {/* LEFT: INTERACTIVE MATHEMATICAL CALCULATION DECK (7 Columns) */}
          <div className="lg:col-span-7 bg-[#121214]/50 border border-white/10 rounded-3xl p-6 sm:p-8 relative flex flex-col justify-between">
            <div className="absolute top-[-30%] right-[-10%] w-60 h-60 bg-gold-400/5 rounded-full blur-[80px] pointer-events-none" />
            
            <div>
              <div className="flex items-center justify-between pb-3 mb-6 border-b border-white/5">
                <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest font-bold flex items-center space-x-1">
                  <Scale className="w-3.5 h-3.5 mr-1" />
                  <span>Activation Reward Projections</span>
                </span>
                
                <span className="text-[10px] font-mono text-gray-500">
                  Select Projection Scale
                </span>
              </div>

              <h3 className="text-xl font-display text-white mb-3 tracking-tight">
                Self-Compounding Scale Mathematical Proof
              </h3>
              <p className="text-xs text-gray-400 leading-normal mb-8 font-sans">
                Review how your one-time activation payouts escalate rapidly as you onboarding multiple flagship beauty salons inside your municipal territory.
              </p>

              {/* Dynamic Interactive Tab Controls */}
              <div className="flex space-x-2 bg-black/40 p-1.5 rounded-2xl border border-white/5 mb-6">
                <button
                  onClick={() => setActiveTab('single')}
                  className={`flex-1 py-3 px-4 rounded-xl text-xs font-semibold font-mono tracking-widest uppercase transition-all duration-300 cursor-pointer flex items-center justify-center space-x-2 ${
                    activeTab === 'single'
                      ? 'bg-gold-500 text-luxury-black font-bold shadow-md'
                      : 'text-gray-400 hover:text-white'
                  }`}
                  id="tab-reward-single-salon"
                >
                  <Building className="w-3.5 h-3.5" />
                  <span>1 Onboarded Salon (Standard Example)</span>
                </button>
                
                <button
                  onClick={() => setActiveTab('hundred')}
                  className={`flex-1 py-3 px-4 rounded-xl text-xs font-semibold font-mono tracking-widest uppercase transition-all duration-300 cursor-pointer flex items-center justify-center space-x-2 ${
                    activeTab === 'hundred'
                      ? 'bg-[#a855f7] text-white font-bold shadow-md'
                      : 'text-gray-400 hover:text-white'
                  }`}
                  id="tab-reward-hundred-salons"
                >
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>100 Onboarded Salons (Scale Example)</span>
                </button>
              </div>

              {/* TAB ANIMATION PANEL CARDS */}
              <AnimatePresence mode="wait">
                {activeTab === 'single' ? (
                  <motion.div
                    key="single"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.2 }}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                    id="deck-calculation-single"
                  >
                    
                    <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                      <span className="text-[9px] font-mono text-gray-500 block uppercase">1. Shop Revenue</span>
                      <div className="text-xl font-bold text-white font-sans mt-1">₹15,000</div>
                      <p className="text-[9px] text-gray-400 mt-1">Salon's total gross active transaction bookings.</p>
                    </div>

                    <div className="p-4 bg-black/40 border border-[#a855f7]/20 rounded-2xl">
                      <span className="text-[9px] font-mono text-purple-400 block uppercase font-bold">2. Nexora Commission</span>
                      <div className="text-xl font-bold text-purple-400 font-sans mt-1">₹1,500</div>
                      <p className="text-[9px] text-gray-400 mt-1">10% Platform fee processed through ledger.</p>
                    </div>

                    <div className="p-4 bg-gold-450/10 border border-gold-500/30 rounded-2xl">
                      <span className="text-[9px] font-mono text-[#d39d2c] block uppercase font-bold text-left">3. Partner Payout Reward</span>
                      <div className="text-xl font-bold text-[#d39d2c] font-sans mt-1 text-left">₹150</div>
                      <p className="text-[9px] text-gray-400 mt-1 text-left">Instant 10% activation payout royalty cut.</p>
                    </div>

                  </motion.div>
                ) : (
                  <motion.div
                    key="hundred"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.2 }}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                    id="deck-calculation-hundred"
                  >
                    
                    <div className="p-4 bg-black/40 border border-white/5 rounded-2xl">
                      <span className="text-[9px] font-mono text-gray-500 block uppercase">1. Network Revenue</span>
                      <div className="text-xl font-bold text-white font-sans mt-1">₹15,00,000</div>
                      <p className="text-[9px] text-gray-400 mt-1">Lakhs of gross booking tickets scaled.</p>
                    </div>

                    <div className="p-4 bg-black/40 border border-[#a855f7]/20 rounded-2xl">
                      <span className="text-[9px] font-mono text-purple-400 block uppercase font-bold">2. Nexora Commissioned Net</span>
                      <div className="text-xl font-bold text-purple-400 font-sans mt-1">₹1,50,000</div>
                      <p className="text-[9px] text-gray-400 mt-1">Consolidated 10% network platform cut.</p>
                    </div>

                    <div className="p-4 bg-gold-450/10 border border-gold-500/30 rounded-2xl">
                      <span className="text-[9px] font-mono text-[#d39d2c] block uppercase font-bold text-left">3. Partner Rewards Yield</span>
                      <div className="text-xl font-bold text-[#d39d2c] font-sans mt-1 text-left">₹15,000</div>
                      <p className="text-[9px] text-gray-400 mt-1 text-left">Instant 10% overriding loyalty checkout cash.</p>
                    </div>

                  </motion.div>
                )}
              </AnimatePresence>

            </div>

            {/* Quick Micro Verification */}
            <div className="pt-6 border-t border-white/5 mt-8 flex items-center justify-between text-xs font-mono">
              <span className="text-gray-500">Scale factor calculated:</span>
              <span className="text-emerald-400 font-bold block">10.0% Continuous Rewards Quotient</span>
            </div>

          </div>

          {/* RIGHT: TESTIMONIAL SUCCESS QUOTE BLOCK (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="p-8 rounded-3xl border border-gold-500/20 bg-gradient-to-b from-[#121114] to-[#0a090b] relative flex flex-col justify-between h-full overflow-hidden shadow-2xl">
              <div className="absolute top-2 right-4 font-mono text-[7px] text-gold-400 bg-gold-450/10 px-2 py-0.5 rounded border border-gold-500/10 uppercase tracking-widest font-bold">
                PARTNER TESTIMONIAL
              </div>

              {/* Testimonial Quote Frame */}
              <div>
                <div className="p-2 rounded-xl bg-gold-500/10 border border-gold-400/20 text-[#d39d2c] w-10 h-10 flex items-center justify-center mb-6">
                  <Quote className="w-5 h-5 fill-current" />
                </div>

                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block mb-2 font-bold select-none">
                  Sovereign Witness Account
                </span>

                <blockquote className="text-[#fef08a] text-lg sm:text-xl font-medium leading-relaxed font-sans italic border-l-2 border-gold-450 pl-4 mb-6">
                  "Maine Company Ko ₹1.5 Lakh Revenue Generate Karke Diya Aur Mujhe ₹15,000 Reward Mila."
                </blockquote>
              </div>

              {/* Testimonial Signoff */}
              <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-white font-sans">Rahul Singh</h4>
                  <p className="text-[9px] font-mono text-gray-500 uppercase tracking-wider">East Bengaluru Growth Node Elite</p>
                </div>

                <button
                  onClick={handleScrollToForm}
                  className="py-2.5 px-4 bg-gradient-to-r from-gold-500 to-purple-600 rounded-xl text-[10px] font-bold text-white text-center hover:opacity-90 transition-opacity uppercase tracking-widest cursor-pointer flex items-center space-x-1 font-sans"
                  id="btn-reward-testimonial-join"
                >
                  <span>Build Network</span>
                  <Zap className="w-3 h-3 fill-current" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
