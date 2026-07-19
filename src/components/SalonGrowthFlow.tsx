/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowDown, Sparkles, Building, Search, Calendar, MessageSquare, 
  TrendingUp, Award, Plus, Equal, Globe, CheckCircle2, ChevronRight, Play, Pause
} from 'lucide-react';

interface FlowStep {
  id: number;
  title: string;
  badge: string;
  description: string;
  subText: string;
  icon: any;
  color: string;
  bgGlow: string;
}

export default function SalonGrowthFlow() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [loopEnabled, setLoopEnabled] = useState<boolean>(true);

  const steps: FlowStep[] = [
    {
      id: 1,
      badge: "Step 01",
      title: "Salon Joins Nexora",
      description: "Quick 2-minute onboarding with zero upfront joining setup. Your salon brand registers on the Nexora Beauty network.",
      subText: "✓ Free joining  ✓ Instantly active profile",
      icon: Building,
      color: "text-amber-400 bg-amber-500/10 border-amber-500/25",
      bgGlow: "from-amber-500/5 to-transparent"
    },
    {
      id: 2,
      badge: "Step 02",
      title: "Online Profile",
      description: "Beautiful, professional digital menu is automatically generated showing your top stylists, dynamic price list, and luxury portfolio.",
      subText: "✓ Dedicated URL link  ✓ Digital Price Ledger",
      icon: Globe,
      color: "text-blue-400 bg-blue-500/10 border-blue-500/25",
      bgGlow: "from-blue-500/5 to-transparent"
    },
    {
      id: 3,
      badge: "Step 03",
      title: "Customers Discover",
      description: "Local customers in your area find your available seats, peak-hour promotions, and available slots via localized maps.",
      subText: "✓ Peak local visibility  ✓ Free map search listing",
      icon: Search,
      color: "text-purple-400 bg-purple-500/10 border-purple-500/25",
      bgGlow: "from-purple-500/5 to-transparent"
    },
    {
      id: 4,
      badge: "Step 04",
      title: "Bookings Increase",
      description: "Customers book salon appointments instantly. Automated booking confirmations are fired directly inside their WhatsApp chats.",
      subText: "✓ Empty seats filled  ✓ Automated WhatsApp updates",
      icon: Calendar,
      color: "text-pink-400 bg-pink-500/10 border-pink-500/25",
      bgGlow: "from-pink-500/5 to-transparent"
    },
    {
      id: 5,
      badge: "Step 05",
      title: "Reviews Increase",
      description: "Nexora sends elegant post-service feedback links directly. Happy clients submit glowing ratings at checkout.",
      subText: "✓ Direct 5-star builder  ✓ Quick checkouts",
      icon: MessageSquare,
      color: "text-[#3b82f6] bg-[#3b82f6]/10 border-[#3b82f6]/25",
      bgGlow: "from-blue-500/5 to-transparent"
    },
    {
      id: 6,
      badge: "Step 06",
      title: "Google Ranking Improves",
      description: "Glow reviews automatically sync with maps. Dominate surrounding rivals and skyrocket to the top spot of search results.",
      subText: "✓ Dominates local SEO  ✓ Premium verified badge",
      icon: Award,
      color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/25",
      bgGlow: "from-indigo-500/5 to-transparent"
    },
    {
      id: 7,
      badge: "Step 07",
      title: "Revenue Grows",
      description: "Zero-idle slots, lifetime passive overrides, and elimination of software monthly rents lead directly to massive monthly profits.",
      subText: "✓ Maximum profits  ✓ Zero software rent fees",
      icon: TrendingUp,
      color: "text-[#22c55e] bg-[#22c55e]/10 border-[#22c55e]/25",
      bgGlow: "from-emerald-500/5 to-transparent"
    }
  ];

  // Auto loop through the steps
  useEffect(() => {
    let interval: any = null;
    if (loopEnabled) {
      interval = setInterval(() => {
        setActiveStep(current => (current + 1) % steps.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [loopEnabled, steps.length]);

  const activeStepData = steps[activeStep];

  return (
    <section className="relative py-24 bg-[#060608] scroll-mt-20 border-b border-white/5" id="growth-flow">
      {/* Background ambient lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold-500/5 rounded-full blur-[90px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Headline Block with modern aesthetic */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-mono uppercase tracking-widest text-gold-450 bg-gold-500/5 px-3 py-1 rounded-full border border-gold-500/20 inline-block mb-4 font-bold">
            SECTION 3 // SALON GROWTH TIMELINE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-white mb-4 uppercase">
            NEXORA KAISE SALON KO GROW KARTA HAI
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-sans font-normal">
            Step-by-step visual flywheel showing exactly how our ecosystem takes your physical shop online, fills empty chairs, and multiplies your income on autopilot.
          </p>
        </div>

        {/* Visual Horizontal Timeline Indicator Bar (For desktop/tabs) */}
        <div className="hidden lg:flex items-center justify-between mb-12 bg-[#0c0c0e] border border-white/5 p-4 rounded-2xl relative">
          <div className="absolute left-12 right-12 top-1/2 h-0.5 bg-white/5 -translate-y-1/2 z-0" />
          <div 
            className="absolute left-12 top-1/2 h-0.5 bg-gradient-to-r from-gold-500 to-purple-500 -translate-y-1/2 z-0 transition-all duration-500" 
            style={{ width: `${(activeStep / (steps.length - 1)) * 90}%` }}
          />

          {steps.map((s, idx) => {
            const IconComponent = s.icon;
            const isSelected = activeStep === idx;
            const isCompleted = activeStep > idx;
            
            return (
              <button
                key={s.id}
                onClick={() => {
                  setActiveStep(idx);
                  setLoopEnabled(false);
                }}
                className="relative z-10 flex flex-col items-center cursor-pointer group"
                id={`btn-timeline-indicator-${idx}`}
              >
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${
                    isSelected 
                      ? 'bg-gold-500 border-gold-500 text-black scale-110 shadow-[0_0_15px_rgba(211,157,44,0.4)]' 
                      : isCompleted
                        ? 'bg-purple-950/40 border-purple-500 text-purple-400'
                        : 'bg-[#121214] border-white/10 text-gray-400 group-hover:border-white/20'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                </div>
                <span className={`text-[9px] font-mono font-bold mt-2 uppercase tracking-wider transition-colors duration-300 ${
                  isSelected ? 'text-gold-450' : 'text-gray-500'
                }`}>
                  {s.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Interactive Flow Diagram Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Timeline Node Flow Map (Left 7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            
            {/* Steps stream */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" id="growth-timeline-step-nodes">
              {steps.map((step, idx) => {
                const Icon = step.icon;
                const isSelected = activeStep === idx;
                return (
                  <button
                    key={step.id}
                    onClick={() => {
                      setActiveStep(idx);
                      setLoopEnabled(false); // Stop loop when user manually interacts
                    }}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-300 relative overflow-hidden flex items-start space-x-3 cursor-pointer ${
                      isSelected 
                        ? 'bg-[#0f0f11] border-gold-500/30' 
                        : 'bg-[#09090b]/45 border-white/5 hover:border-white/10 hover:bg-[#0c0c0e]'
                    }`}
                    id={`btn-growth-step-${idx}`}
                  >
                    {/* Visual Connector Downwards arrow icon on hover/active */}
                    {idx < steps.length - 1 && (
                      <div className="absolute right-3.5 bottom-3 text-gray-700/60 font-mono text-[9px] flex items-center gap-0.5">
                        <ArrowDown className="w-3 h-3 text-gold-500/40 animate-bounce" />
                      </div>
                    )}
 
                    {/* Sequential step icon with status colors */}
                    <div className={`p-2.5 rounded-xl shrink-0 mt-0.5 border ${
                      isSelected ? step.color : 'text-gray-500 border-white/5 bg-white/[0.01]'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
 
                    <div className="min-w-0 flex-1">
                      <span className={`text-[9px] font-mono tracking-widest block uppercase mb-0.5 ${
                        isSelected ? 'text-gold-450 font-bold' : 'text-gray-650'
                      }`}>
                        {step.badge}
                      </span>
                      <h3 className={`text-sm font-bold font-mono uppercase tracking-wide truncate ${
                        isSelected ? 'text-white' : 'text-gray-400'
                      }`}>
                        {step.title}
                      </h3>
                    </div>
                  </button>
                );
              })}
            </div>
 
            <div className="p-4 rounded-xl border border-white/5 bg-[#09090b]/40 flex flex-col sm:flex-row gap-3 items-center justify-between">
              <span className="text-[10px] font-mono text-gray-450 flex items-center space-x-1.5 text-center sm:text-left">
                <span className="w-2 h-2 rounded-full bg-gold-450 animate-ping" />
                <span>Interact manually to review each stage of the salon journey.</span>
              </span>
              
              <button 
                onClick={() => setLoopEnabled(!loopEnabled)}
                className="text-[10px] font-mono text-gold-450 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1 rounded-lg flex items-center gap-1.5 cursor-pointer max-w-fit"
                id="btn-growth-toggle-loop"
              >
                {loopEnabled ? (
                  <>
                    <Pause className="w-2.5 h-2.5 text-gold-400 fill-current" />
                    <span>Pause Loop</span>
                  </>
                ) : (
                  <>
                    <Play className="w-2.5 h-2.5 text-emerald-400 fill-current" />
                    <span>Resume Auto-Loop</span>
                  </>
                )}
              </button>
            </div>
          </div>
 
          {/* Core Interactive Detail Card Screen (Right 5 Cols) */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.3 }}
                className={`bg-gradient-to-b ${activeStepData.bgGlow} via-[#09090b] to-[#040405] border border-gold-500/20 rounded-3xl p-6 sm:p-8 h-full flex flex-col justify-between shadow-2xl relative overflow-hidden`}
                id="growth-step-detail-board"
              >
                <div className="absolute top-[5%] right-[5%] w-32 h-32 bg-gold-500/5 rounded-full blur-2xl pointer-events-none" />

                <div>
                  
                  {/* Category marker */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-6">
                    <span className="text-[10px] font-mono text-[#a855f7] bg-purple-500/5 px-2 py-0.5 rounded border border-purple-500/10 font-bold">
                      SYSTEM FLYWHEEL STAGE
                    </span>
                    <span className="text-[10px] font-mono text-gray-500">
                      Phase: {activeStepData.id} / 7
                    </span>
                  </div>
 
                  {/* Flow Badge */}
                  <div className="text-xs font-mono font-bold text-gold-450 tracking-widest uppercase mb-2 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-gold-450 animate-pulse" />
                    <span>{activeStepData.badge} • Core Milestone</span>
                  </div>
 
                  {/* Flow Title */}
                  <h3 className="text-xl sm:text-2xl font-display font-black text-white mb-4 uppercase tracking-wide">
                    {activeStepData.title}
                  </h3>
 
                  {/* Flow Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-6 font-sans">
                    {activeStepData.description}
                  </p>
 
                  {/* Quick checks list block */}
                  <div className="bg-[#050507] p-4 rounded-2xl border border-white/5">
                    <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest block mb-2 font-bold">
                      SYSTEM METRICS ACHIEVED
                    </span>
                    <div className="space-y-2">
                      {activeStepData.subText.split('  ').map((check, index) => (
                        <div key={index} className="flex items-center space-x-2 text-xs text-gray-300 font-sans">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span className="font-medium">{check.replace('✓ ', '')}</span>
                        </div>
                      ))}
                    </div>
                  </div>
 
                </div>
 
                {/* Simulated Growth Outcomes Panel */}
                <div className="pt-8 border-t border-white/5 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-left font-sans w-full sm:w-auto">
                    <span className="text-[9px] font-mono text-gray-500 uppercase block tracking-wider">PROJECTED SALES LIFT</span>
                    <span className="text-sm font-black text-emerald-400 font-mono mt-0.5 block">
                      {activeStep === 0 ? "Zero upfront setup" :
                       activeStep === 1 ? "10x menu views" :
                       activeStep === 2 ? "+22% peak-hour fill" :
                       activeStep === 3 ? "2x rating accumulation" :
                       activeStep === 4 ? "#1 Local search match" :
                       activeStep === 5 ? "Viral referrals active" :
                       "₹45,000 extra monthly profits"}
                    </span>
                  </div>
                  
                  <a
                    href="#partner-program"
                    className="w-full sm:w-auto px-5 py-3 bg-gold-500 hover:bg-gold-400 rounded-xl text-xs font-mono font-bold text-black text-center transition-all uppercase tracking-wider shrink-0"
                    id="btn-growth-cta"
                  >
                    Grow Salon Now →
                  </a>
                </div>
 
              </motion.div>
            </AnimatePresence>
          </div>
 
        </div>
 
      </div>
    </section>
  );
}
