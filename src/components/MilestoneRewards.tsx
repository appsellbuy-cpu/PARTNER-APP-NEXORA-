/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Package, Shirt, Tablet, Laptop, Car, Award, ChevronRight, 
  Crown, Flame, Sparkles, CheckCircle2, ShieldCheck, Trophy, ArrowUpRight, X
} from 'lucide-react';

// Celebration Component
function CelebrationModal({ milestone, onClose }: { milestone: Milestone, onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="relative w-full max-w-lg p-8 rounded-3xl bg-[#0a0a0c] border border-gold-500/30 shadow-[0_0_50px_rgba(211,157,44,0.2)]"
          onClick={(e) => e.stopPropagation()}
        >
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-white">
            <X size={24} />
          </button>
          
          {/* Particles & Confetti */}
          {[...Array(60)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 rounded-sm"
              style={{
                backgroundColor: i % 3 === 0 ? '#eab308' : i % 3 === 1 ? '#f59e0b' : '#ffffff',
                left: '50%',
                top: '50%'
              }}
              initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
              animate={{ 
                x: (Math.random() - 0.5) * 600, 
                y: (Math.random() - 0.5) * 600,
                opacity: 0,
                rotate: Math.random() * 360,
                scale: Math.random() * 1.5 + 0.5
              }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
          ))}

          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-gold-500/20 rounded-full flex items-center justify-center mb-6 animate-pulse">
              <Trophy className="w-10 h-10 text-gold-450" />
            </div>
            <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2">Milestone Unlocked!</h3>
            <p className="text-gray-400 mb-6">{milestone.title}</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {milestone.rewards.map(r => (
                <span key={r} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gold-300 font-mono">{r}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

interface Milestone {
  count: number;
  id: string;
  title: string;
  rewards: string[];
  desc: string;
  icon: React.ComponentType<any>;
  tier: string;
  accent: string;
  badgeBg: string;
  iconColor: string;
  glowColor: string;
  image: string;
}

export default function MilestoneRewards() {
  const [activeShops, setActiveShops] = useState<number>(30);
  const [celebrationItem, setCelebrationItem] = useState<Milestone | null>(null);

  const milestones: Milestone[] = [
    {
      count: 25,
      id: "m_25",
      title: "Welcome Kit Activation",
      tier: "Rookie Partner",
      rewards: [
        "Premium Nexora Welcome Kit",
        "Gold-Embossed Partner Certificate",
        "Branded Corporate Notebooks",
        "Physical Demonstration Playbook"
      ],
      desc: "Start strong. Unlock an elegant corporate welcome kit containing offline presentation assets, credentials, and scripts custom-curated for salon owners.",
      icon: Package,
      accent: "border-amber-500/25 bg-amber-500/5",
      badgeBg: "bg-amber-500/10 text-amber-400 border-amber-500/20",
      iconColor: "text-amber-450",
      glowColor: "rgba(217, 119, 6, 0.15)",
      image: "/src/assets/images/milestone_welcome_kit_1781493809206.jpg"
    },
    {
      count: 50,
      id: "m_50",
      title: "Luxury Brand Merchandise",
      tier: "Expert Merchant",
      rewards: [
        "Tailored Minimalist Matte Black Polo",
        "Metallic Glowing Gold Chest Crest",
        "Sovereign Gold Executive Planner",
        "Indestructive Metal ID Credentials"
      ],
      desc: "Command authority. Carry an unmistakable physical brand presence during salon consultations with ultra-premium tailored executive attire.",
      icon: Shirt,
      accent: "border-purple-500/25 bg-purple-500/5",
      badgeBg: "bg-purple-500/10 text-purple-400 border-purple-500/20",
      iconColor: "text-purple-400",
      glowColor: "rgba(168, 85, 247, 0.15)",
      image: "/src/assets/images/milestone_lux_merch_1781494372084.jpg"
    },
    {
      count: 100,
      id: "m_100",
      title: "Digital Operations Tablet",
      tier: "Elite Growth Builder",
      rewards: [
        "Ultra-Thin Android Tablet Setup",
        "Pre-Installed Nexora OS Workspace",
        "Real-Time Partner Dashboard Console",
        "Priority Field Support Hotline"
      ],
      desc: "Onboard instantly on-the-spot. Showcase beautiful, live, interactive demos of the system to beauty specialists directly on a high-end tablet screen.",
      icon: Tablet,
      accent: "border-blue-500/25 bg-blue-500/5",
      badgeBg: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      iconColor: "text-blue-400",
      glowColor: "rgba(59, 130, 246, 0.15)",
      image: "/src/assets/images/milestone_tablet_1781493841161.jpg"
    },
    {
      count: 500,
      id: "m_500",
      title: "Elite Workstation Laptop",
      tier: "District Master Coordinator",
      rewards: [
        "High-Performance Pro Laptop",
        "Multi-Screen Analytics Suite",
        "Personalized Municipal Press Release",
        "Bi-Annual Elite Leadership Pass"
      ],
      desc: "Run a massive district cooperative. Crunch live volume data spreadsheets, analyze booking flow patterns, and expand scale with a developer-grade pro workstation.",
      icon: Laptop,
      accent: "border-cyan-500/25 bg-cyan-500/5",
      badgeBg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
      iconColor: "text-cyan-400",
      glowColor: "rgba(6, 182, 212, 0.15)",
      image: "/src/assets/images/milestone_laptop_1781493859171.jpg"
    },
    {
      count: 1000,
      id: "m_1000",
      title: "Titanium SUV & Hall of Fame",
      tier: "Sovereign Alliance Legend",
      rewards: [
        "Premium SUV Eligibility Voucher",
        "Gleaming Gold Championship Trophy",
        "Hall of Fame Permanent Induction",
        "Locked District Override Royalties"
      ],
      desc: "Apex status achieved. Command local municipal platform rights, claim weekly passive ledger overrides, and unlock sovereign supercar voucher incentives.",
      icon: Car,
      accent: "border-rose-500/30 bg-rose-500/5",
      badgeBg: "bg-rose-500/10 text-rose-450 border-rose-500/20",
      iconColor: "text-rose-450",
      glowColor: "rgba(244, 63, 94, 0.2)",
      image: "/src/assets/images/milestone_suv_1781493874661.jpg"
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

  // Find the highest milestone the user has unlocked based on input
  const currentUnlockedCount = milestones.filter(m => activeShops >= m.count).length;

  return (
    <section className="relative py-24 bg-[#050508] border-b border-white/5 overflow-hidden font-sans" id="milestone-rewards-section">
      
      {/* Background Cinematic Lighting Design */}
      <div className="absolute top-[20%] left-[-15%] w-[500px] h-[500px] bg-purple-900/[0.03] rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] right-[-15%] w-[500px] h-[500px] bg-gold-450/[0.03] rounded-full blur-[140px] pointer-events-none -z-10" />
      
      {/* Subtle tech background grids */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-35 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER BLOCK */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-gold-450 bg-gold-550/5 px-3 py-1 rounded-full border border-gold-500/20 inline-block mb-4 font-bold select-none">
            SECTION 9 // THE GOLDEN MILESTONE REWARDS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-white uppercase leading-tight mb-4">
            PREMIUM MILESTONE REWARD WALL
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-gold-500 to-purple-600 mx-auto mt-4 mb-6 rounded-full" />
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-sans max-w-2xl mx-auto font-normal">
            We reward system scaling at every critical operational interval. Expand your localized salon platform density to naturally level up your rewards from hand-assembled welcome suites to elite computational devices and high-end car eligibility.
          </p>
        </div>

        {/* TWO-COLUMN LAYOUT: INFOGRAPHIC IMAGE & DYNAMIC INTERACTIVE SIMULATOR */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20 max-w-6xl mx-auto">
          
          {/* LEFT: Premium Luxury Infographic Showcase Flyer (5 Columns) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#111115] to-[#0a0a0d] border border-white/5 p-6 rounded-[32px] flex flex-col justify-between relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-32 h-32 bg-purple-900/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/5">
                <span className="text-[9px] font-mono text-gold-450 uppercase tracking-widest font-black bg-gold-500/5 px-2.5 py-0.5 border border-gold-500/25 rounded">
                  OFFICIAL FLYER PRINT
                </span>
                <span className="text-[8.5px] font-mono text-gray-550">PREMIUM SYSTEM ASSET</span>
              </div>
              
              <h3 className="text-base font-bold text-white uppercase font-display tracking-wide">
                Nexora Official Reward Wall Map
              </h3>
              
              {/* Infographic Frame with metallic borders and glowing shadow */}
              <div className="relative aspect-[3/4] bg-[#070709] border border-gold-500/25 rounded-2xl overflow-hidden group shadow-[0_12px_40px_rgba(211,157,44,0.06)]">
                <img 
                  src="/src/assets/images/milestone_rewards_wall_1781491498833.jpg" 
                  alt="Nexora Premium Milestone Reward Wall Infographic Map" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-90 transition-transform duration-700 ease-out group-hover:scale-102"
                />
                
                {/* Embedded luxury indicators */}
                <div className="absolute top-3 right-3 bg-black/80 border border-purple-500/30 px-2 py-0.5 rounded text-[7px] font-mono text-purple-400 font-black tracking-widest uppercase">
                  ACTIVE HUD V4
                </div>
                
                <div className="absolute bottom-3 left-3 bg-black/80 border border-gold-500/30 px-2 py-0.5 rounded text-[7px] font-mono text-gold-450 font-black tracking-widest uppercase">
                  CURATED IN HQ
                </div>
              </div>

              <p className="text-[11px] text-gray-400 leading-relaxed font-sans pt-1">
                This diagram is printed officially in physical startup directories. It utilizes glassmorphic grid mapping and deep-backlight renders to illustrate exact hardware targets.
              </p>
            </div>

            <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[9px] font-mono text-gray-500">
              <span>*TARGETS VALIDATED BY PLATFORM</span>
              <span>EST. 2026 NEXORA CO.</span>
            </div>
          </div>

          {/* RIGHT: High-End Interactive Target Simulator & Progression Core (7 Columns) */}
          <div className="lg:col-span-7 bg-[#0b0b0e] border border-gold-500/15 p-6 sm:p-8 rounded-[32px] flex flex-col justify-between relative overflow-hidden shadow-2xl" id="milestone-interactive-evaluator">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gold-450/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="space-y-6">
              
              <div className="flex items-center justify-between pb-3 border-b border-white/5">
                <div className="flex items-center space-x-2">
                  <Flame className="w-4 h-4 text-amber-500 animate-pulse" />
                  <span className="text-[9.5px] font-mono text-gray-300 uppercase tracking-widest font-black">
                    DYNAMIC SYSTEM PROGRESS EVALUATION
                  </span>
                </div>
                <span className="text-[8px] font-mono text-gray-550 uppercase">SIMULATOR ACTIVE</span>
              </div>

              {/* Title & description */}
              <div>
                <h3 className="text-xl sm:text-2xl font-display font-black text-white uppercase tracking-tight">
                  Simulate Your Growth Target
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed font-sans mt-2">
                  Adjust coordinate handles representing your personalized co-operative salon size to analyze unlocked credentials, next phase thresholds, and secure priority eligibility.
                </p>
              </div>

              {/* Interactive Slide Control Box */}
              <div className="p-5 rounded-2xl bg-black border border-white/5 space-y-4">
                <div className="flex justify-between items-center font-mono text-xs text-gray-300">
                  <span>Predicted Active Salon Network Count:</span>
                  <span className="text-base font-black text-gold-450">{activeShops} Shops</span>
                </div>

                <div className="py-2">
                  <input 
                    type="range"
                    min="0"
                    max="1200"
                    step="5"
                    value={activeShops}
                    onChange={(e) => setActiveShops(Number(e.target.value))}
                    className="w-full h-1.5 rounded-lg accent-gold-500 bg-white/5 cursor-pointer"
                  />
                  
                  {/* Grid Labels matching target criteria */}
                  <div className="flex justify-between text-[8px] text-gray-550 mt-2 font-mono font-bold uppercase tracking-wider">
                    <span>0 START</span>
                    <span>25 WELCOME</span>
                    <span>50 HOODIE</span>
                    <span>100 TAB</span>
                    <span>500 LAPTOP</span>
                    <span>1000 CAR</span>
                  </div>
                </div>
              </div>

              {/* Live Upgrade Decision Card Panel */}
              {(() => {
                let ratingName = "Onboarding Associate";
                let badgeStyle = "bg-gray-500/10 text-gray-400 border-gray-500/20";
                let remainingMessage = "Onboard 25 active salons to claim your high-end Welcome Kit & gold certification!";
                let nextCountMessage = "25 active shops target";

                if (activeShops >= 1000) {
                  ratingName = "Sovereign Alliance Legend";
                  badgeStyle = "bg-rose-500/10 text-rose-400 border-rose-500/20";
                  remainingMessage = "Phenomenal! Your cooperative network qualifies for Titanium SUV voucher eligibility and custom weekly overrides!";
                  nextCountMessage = "Ultimate tier reached";
                } else if (activeShops >= 500) {
                  ratingName = "District Master Coordinator";
                  badgeStyle = "bg-cyan-500/10 text-cyan-400 border-cyan-500/20";
                  remainingMessage = `Superb scale! Just add ${1000 - activeShops} more active salon partners to secure Sovereign eligibility & Titanium SUV!`;
                  nextCountMessage = "1000 active shops target";
                } else if (activeShops >= 100) {
                  ratingName = "Elite Growth Builder";
                  badgeStyle = "bg-blue-500/10 text-blue-400 border-blue-500/20";
                  remainingMessage = `Excellent momentum! Add ${500 - activeShops} more active salons to secure your core-i7 workstation laptop!`;
                  nextCountMessage = "500 active shops target";
                } else if (activeShops >= 50) {
                  ratingName = "Expert Merchant";
                  badgeStyle = "bg-purple-500/10 text-purple-400 border-purple-500/20";
                  remainingMessage = `Great progress! Onboard ${100 - activeShops} more salons to unlock your Android Tablet operations kit!`;
                  nextCountMessage = "100 active shops target";
                } else if (activeShops >= 25) {
                  ratingName = "Rookie Partner";
                  badgeStyle = "bg-amber-500/10 text-amber-400 border-amber-500/20";
                  remainingMessage = `Nice start! Onboard ${50 - activeShops} more salons to claim custom high-fashion matte black polo merchandise!`;
                  nextCountMessage = "50 active shops target";
                }

                return (
                  <div className="space-y-4">
                    <div className="bg-[#111114] border border-white/5 p-4 rounded-xl flex items-center justify-between gap-4">
                      <div>
                        <span className="text-[8px] font-mono text-gray-550 block uppercase tracking-wider font-extrabold mb-1">CURRENT EVALUATION</span>
                        <span className="text-lg font-bold font-sans text-white tracking-tight block">
                          {ratingName}
                        </span>
                      </div>
                      
                      <span className={`px-2.5 py-1 rounded text-xs font-mono font-black uppercase border tracking-widest ${badgeStyle}`}>
                        {currentUnlockedCount} / 5 Tiers Unlocked
                      </span>
                    </div>

                    <div className="p-4 bg-purple-950/10 border border-purple-500/15 rounded-xl flex items-start gap-2.5">
                      <Sparkles className="w-4.5 h-4.5 text-purple-400 shrink-0 mt-0.5" />
                      <div className="font-sans text-xs text-gray-300 leading-relaxed">
                        <span className="block font-bold text-white mb-0.5 font-mono uppercase tracking-wide text-[9.5px]">Remaining Milestone Vector:</span>
                        {remainingMessage}
                      </div>
                    </div>
                  </div>
                );
              })()}

            </div>

            {/* Simulated CTA core */}
            <div className="pt-6 mt-8 border-t border-white/5 flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="text-left">
                <span className="text-[8px] font-mono text-gray-550 block uppercase font-bold leading-none">REGISTRATION ALLIANCE</span>
                <span className="text-[11px] text-gray-400 font-sans mt-1 block">Lock in your municipal coordinate node:</span>
              </div>

              <div className="flex gap-2 w-full sm:w-auto">
                <button
                  onClick={handleScrollToForm}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-gold-500 hover:from-gold-450 to-purple-600 text-white font-mono text-xs font-black uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-md select-none"
                  id="btn-milestone-interactive-lock"
                >
                  <Trophy className="w-3.5 h-3.5 text-yellow-300 animate-pulse fill-current shrink-0" />
                  <span>Secure Your Node Link</span>
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* METALLIC GOLD VERTICAL TRACK DISPLAY WALL GRID */}
        <div className="relative max-w-5xl mx-auto" id="infographic-milestones-grid-block">
          
          <AnimatePresence>
            {celebrationItem && (
              <CelebrationModal 
                milestone={celebrationItem} 
                onClose={() => setCelebrationItem(null)} 
              />
            )}
          </AnimatePresence>
          
          {/* Central Connecting Gold Line/Track on Desktop */}
          <div className="absolute top-0 bottom-0 left-[23px] md:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-amber-500/20 via-purple-500/30 to-emerald-500/10 rounded-full" />
          
          <div className="space-y-12">
            {milestones.map((m, idx) => {
              const MilestoneIcon = m.icon;
              const isUnlocked = activeShops >= m.count;
              const isEven = idx % 2 === 0;

              return (
                <motion.div 
                  key={m.id} 
                  className={`flex flex-col md:flex-row items-stretch gap-6 relative p-4 rounded-[32px] border border-transparent transition-all duration-300 cursor-pointer ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                  id={`leaderboard-partner-row-${m.id}`}
                  onClick={() => {
                    if (activeShops < m.count) {
                      setActiveShops(m.count);
                      setCelebrationItem(m);
                    }
                  }}
                  whileHover={{
                    borderColor: "rgba(211, 157, 44, 0.45)",
                    boxShadow: "0 0 45px rgba(211, 157, 44, 0.22), inset 0 0 25px rgba(211, 157, 44, 0.08)",
                    backgroundColor: "rgba(211, 157, 44, 0.025)"
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 220, 
                    damping: 24 
                  }}
                >
                  
                  {/* Central Timeline Badge (Absolute anchor on track line) */}
                  <div className="absolute left-[24px] md:left-1/2 -translate-x-1/2 top-4 w-11 h-11 rounded-full border bg-black flex items-center justify-center z-20 shadow-[0_0_15px_rgba(211,157,44,0.1)] transition-all">
                    <MilestoneIcon className={`w-4 h-4 ${isUnlocked ? m.iconColor : 'text-gray-550'}`} />
                  </div>

                  {/* Left or Right Content Card Side (Takes up half width on desktop) */}
                  <div className="w-full md:w-1/2 pl-14 md:pl-0 md:px-8">
                    
                    {/* Bento Grid Card frame of luxury standard */}
                    <motion.div 
                      layout
                      whileHover={{ 
                        scale: 1.02,
                        backgroundColor: "rgba(16, 14, 18, 0.98)",
                        boxShadow: `0 12px 36px rgba(168, 85, 247, 0.12), inset 0 0 16px ${m.glowColor}`,
                        borderColor: isUnlocked ? "rgba(211, 157, 44, 0.8)" : "rgba(255, 255, 255, 0.2)",
                        zIndex: 10
                      }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 260, 
                        damping: 20,
                        layout: { type: "spring", stiffness: 300, damping: 25 }
                      }}
                      className={`p-6 sm:p-8 rounded-[24px] border bg-[#09090c] transition-all duration-300 relative overflow-hidden flex flex-col justify-between h-full ${
                        isUnlocked ? 'border-gold-500/35 ring-1 ring-gold-500/10' : 'border-white/5 opacity-90'
                      }`}
                    >
                      {/* Purple ambient backlighting */}
                      {isUnlocked && (
                        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-900/[0.04] rounded-full blur-2xl pointer-events-none" />
                      )}

                      <div>
                        {/* Upper card meta row */}
                        <div className="flex items-center justify-between pb-3.5 border-b border-white/5 mb-5 select-none">
                          <span className={`px-2.5 py-0.5 rounded text-[8.5px] font-mono font-black uppercase border ${m.badgeBg}`}>
                            {m.count === 1000 ? '1,000+ Salons' : `${m.count} Salons Target`}
                          </span>
                          
                          <span className="text-[8.5px] font-mono text-gray-550 font-bold uppercase tracking-widest">
                            0{idx+1} MILESTONE
                          </span>
                        </div>

                        {/* Title block */}
                        <div className="mb-4">
                          <span className="text-[9px] font-mono text-gold-450 uppercase tracking-widest block font-black mb-1">
                            {m.tier}
                          </span>
                          <h4 className="text-lg font-black text-white uppercase tracking-wide font-display mt-0.5 leading-tight">
                            {m.title}
                          </h4>
                        </div>

                        <p className="text-xs text-gray-400 leading-relaxed font-sans mb-6">
                          {m.desc}
                        </p>

                        {/* Direct Rewards list */}
                        <div className="space-y-2 border-t border-white/5 pt-5 mb-4">
                          <span className="text-[8px] font-mono text-gray-550 block uppercase font-bold tracking-widest mb-2.5">
                            INCLUDED HARDWARE & ASSETS:
                          </span>
                          {m.rewards.map((rew, rk) => (
                            <div key={rk} className="flex items-start gap-2.5 text-xs text-gray-300 font-sans">
                              <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isUnlocked ? 'text-emerald-400' : 'text-gray-650'}`} />
                              <span>{rew}</span>
                            </div>
                          ))}
                        </div>

                      </div>

                      {/* Card Footer locked/unlocked indicator status state */}
                      <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono uppercase select-none mt-2">
                        <span className="text-gray-550">Node Lock State:</span>
                        {isUnlocked ? (
                          <div className="flex items-center gap-1 text-emerald-450 font-bold">
                            <ShieldCheck className="w-4.5 h-4.5 text-emerald-450 shrink-0" />
                            <span>✓ SECURED & UNLOCKED</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-1.5 text-gray-550 font-bold bg-white/5 px-2.5 py-1 rounded-lg border border-white/5 hover:border-gold-500/20 transition-all duration-300">
                            <div className="w-1.5 h-1.5 rounded-full bg-gold-450 animate-pulse mr-0.5" />
                            <span>CLICK TO SIMULATE UNLOCK</span>
                          </div>
                        )}
                      </div>

                    </motion.div>

                  </div>

                  {/* Visually stunning reward mockup image side */}
                  <div className="w-full md:w-1/2 pl-14 md:pl-0 md:px-8 flex items-center justify-center">
                    <motion.div
                      layout
                      whileHover={{ 
                        scale: 1.035,
                        boxShadow: `0 20px 50px rgba(211, 157, 44, 0.25), inset 0 0 25px ${m.glowColor}`,
                        borderColor: isUnlocked ? "rgba(211, 157, 44, 0.6)" : "rgba(211, 157, 44, 0.3)"
                      }}
                      transition={{ type: "spring", stiffness: 260, damping: 20 }}
                      className={`w-full aspect-[4/3] rounded-[24px] border overflow-hidden relative shadow-2xl bg-[#05055a]/5 transition-all duration-300 group ${
                        isUnlocked ? 'border-gold-500/20' : 'border-white/5 hover:border-gold-500/15'
                      }`}
                    >
                      {/* Premium card graphics */}
                      <img 
                        src={m.image} 
                        alt={m.title} 
                        referrerPolicy="no-referrer"
                        className={`w-full h-full object-cover transition-transform duration-700 ${
                          isUnlocked ? 'grayscale-0 brightness-110' : 'grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-95 contrast-[1.05] scale-101'
                        }`}
                      />
                      
                      {/* Locked Overlay mask */}
                      {!isUnlocked && (
                        <div className="absolute inset-0 bg-black/75 shadow-[inset_0_0_30px_rgba(0,0,0,0.8)] group-hover:bg-black/30 group-hover:backdrop-blur-none backdrop-blur-[1.5px] transition-all duration-500 flex flex-col items-center justify-center p-4 text-center">
                          <div className="w-10 h-10 rounded-full border border-white/10 bg-black flex items-center justify-center mb-2.5 text-gold-450 shadow-2xl group-hover:scale-110 group-hover:border-gold-500/40 transition-all duration-300">
                            <span className="text-xs group-hover:hidden">🔒</span>
                            <span className="text-xs hidden group-hover:inline animate-bounce">🔑</span>
                          </div>
                          <span className="text-[9.5px] font-mono tracking-widest text-[#d39d2c] font-black uppercase group-hover:text-white">
                            LEVEL LOCKED
                          </span>
                          <span className="text-[8px] text-gray-400 mt-1 uppercase font-bold tracking-wider group-hover:text-gold-450 group-hover:bg-black/85 group-hover:px-2 group-hover:py-0.5 group-hover:rounded-md transition-all duration-300">
                            Click to Unlock & Preview
                          </span>
                        </div>
                      )}

                      {/* Unlocked light indicator badge */}
                      {isUnlocked && (
                        <div className="absolute top-4 left-4 bg-[#0a0f0d]/90 border border-emerald-500/40 px-2.5 py-1 rounded-xl text-[8px] font-mono font-black uppercase text-emerald-400 tracking-wider flex items-center gap-1.5 backdrop-blur-xs shadow-md">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span>Unlocked</span>
                        </div>
                      )}

                      {/* Small gold reward title watermark in corner */}
                      <div className="absolute bottom-4 right-4 bg-black/85 border border-gold-500/20 px-3 py-1 rounded-xl text-[8.5px] font-mono font-black uppercase text-[#d39d2c] tracking-wider backdrop-blur-xs">
                        {m.count === 1000 ? 'SUV Reward Node' : `${m.count} Shops Tier`}
                      </div>

                    </motion.div>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
