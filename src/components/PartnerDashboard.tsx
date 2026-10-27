/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import SalonRevenueChart from './SalonRevenueChart';
import { 
  Building, CheckCircle, ShieldAlert, Award, TrendingUp, IndianRupee, 
  HelpCircle, Sparkles, Clock, LineChart, Cpu, ArrowRight, UserCheck, 
  PiggyBank, ArrowDownRight, ArrowUpRight, Lock, EyeOff, LayoutDashboard, ChevronRight,
  Gem, Crown, ShieldCheck
} from 'lucide-react';

interface PartnerProfile {
  id: string;
  name: string;
  avatar: string;
  city: string;
  tier: string;
  shopsAdded: number;
  activeShops: number;
  revenueGenerated: number;
  nexoraEarnings: number; // usually 10% of revenue
  yourEarningsPercentage: number; // 1.2% or similar
  pendingEarnings: number;
  thisWeekPayout: number;
  lifetimeEarnings: number;
  nextMilestone: string;
}

export default function PartnerDashboard() {
  const [selectedPartnerId, setSelectedPartnerId] = useState<string>('p1');
  const [simulatedShopsAddition, setSimulatedShopsAddition] = useState<number>(0);

  const partnersList: PartnerProfile[] = [
    {
      id: "p1",
      name: "Rahul Singh",
      avatar: "RS",
      city: "Bengaluru Hub",
      tier: "District Elite",
      shopsAdded: 48,
      activeShops: 38,
      revenueGenerated: 1520000,
      nexoraEarnings: 152000,
      yourEarningsPercentage: 1.2, // 1.2% royalty rate
      pendingEarnings: 14500,
      thisWeekPayout: 4800,
      lifetimeEarnings: 142000,
      nextMilestone: "50 Active Shops (Official Nexora T-Shirt)"
    },
    {
      id: "p2",
      name: "Kriya Gupta",
      avatar: "KG",
      city: "Delhi Region",
      tier: "Sovereign Node",
      shopsAdded: 39,
      activeShops: 31,
      revenueGenerated: 1240000,
      nexoraEarnings: 124000,
      yourEarningsPercentage: 1.2,
      pendingEarnings: 11200,
      thisWeekPayout: 3900,
      lifetimeEarnings: 115000,
      nextMilestone: "50 Active Shops (Official Nexora T-Shirt)"
    },
    {
      id: "p3",
      name: "Sneha Reddy",
      avatar: "SR",
      city: "Hyderabad Tech",
      tier: "Elite Partner",
      shopsAdded: 27,
      activeShops: 21,
      revenueGenerated: 840000,
      nexoraEarnings: 84000,
      yourEarningsPercentage: 1.2,
      pendingEarnings: 7400,
      thisWeekPayout: 2800,
      lifetimeEarnings: 78000,
      nextMilestone: "25 Active Shops (Welcome Kit Activation)"
    },
    {
      id: "p4",
      name: "Saurav Kumar",
      avatar: "SK",
      city: "Patna Central",
      tier: "Rookie Partner",
      shopsAdded: 14,
      activeShops: 10,
      revenueGenerated: 320000,
      nexoraEarnings: 32000,
      yourEarningsPercentage: 1.2,
      pendingEarnings: 3100,
      thisWeekPayout: 1200,
      lifetimeEarnings: 28000,
      nextMilestone: "25 Active Shops (Welcome Kit Activation)"
    }
  ];

  const currentPartner = partnersList.find(p => p.id === selectedPartnerId) || partnersList[0];

  // Calculations that reflect simulated additions
  const finalShopsAdded = currentPartner.shopsAdded + simulatedShopsAddition;
  // Standard active ratio
  const activeRatio = currentPartner.activeShops / currentPartner.shopsAdded;
  const finalActiveShops = Math.round(finalShopsAdded * activeRatio);
  
  const additionalRevenue = simulatedShopsAddition * 35000; // 35k average per salon added
  const finalRevenueGenerated = currentPartner.revenueGenerated + additionalRevenue;
  const finalNexoraEarnings = Math.round(finalRevenueGenerated * 0.10); // 10% Nexora Revenue
  const finalYourEarnings = Math.round(finalRevenueGenerated * 0.012); // 1.2% royalty base
  const finalPendingEarnings = currentPartner.pendingEarnings + Math.round(additionalRevenue * 0.004);
  const finalThisWeekPayout = currentPartner.thisWeekPayout + Math.round(additionalRevenue * 0.008);
  const finalLifetimeEarnings = currentPartner.lifetimeEarnings + Math.round(additionalRevenue * 0.012);

  const getRankName = (activeCount: number) => {
    if (activeCount >= 1000) return "Sovereign Alliance Legend";
    if (activeCount >= 500) return "District Master Node";
    if (activeCount >= 100) return "Elite Growth Builder";
    if (activeCount >= 50) return "Pro Merchant";
    if (activeCount >= 25) return "Rookie Partner";
    return "Growth Associate";
  };

  const getNextMilestoneText = (activeCount: number) => {
    if (activeCount >= 1000) return "Leadership Circle Hall Of Fame (Direct Car Reward)";
    if (activeCount >= 500) return "1000+ Active Shops (District Business Partner + Car Eligibility)";
    if (activeCount >= 100) return "500 Active Shops (Branded Core i7 Laptop & Platinum Status)";
    if (activeCount >= 50) return "100 Active Shops (High-Performance Tablet + Growth Builder Badge)";
    if (activeCount >= 25) return "50 Active Shops (Official Nexora T-Shirt)";
    return "25 Active Shops (Welcome Kit Activation)";
  };

  const finalRank = getRankName(finalActiveShops);
  const finalNextMilestone = getNextMilestoneText(finalActiveShops);

  const badgeConfigurations = [
    {
      id: "platinum",
      label: "Platinum Status",
      threshold: 500,
      icon: Gem,
      color: "from-purple-400 to-indigo-500",
      glow: "shadow-[0_0_15px_rgba(168,85,247,0.35)]",
      border: "border-purple-500/30 bg-purple-950/10",
      lockedBorder: "border-white/5 bg-white/[0.01]",
      desc: "Unlocked at 500+ Active salons"
    },
    {
      id: "district",
      label: "District Partner",
      threshold: 1000,
      icon: ShieldCheck,
      color: "from-amber-400 to-yellow-500",
      glow: "shadow-[0_0_15px_rgba(234,179,8,0.35)]",
      border: "border-yellow-500/30 bg-yellow-950/10",
      lockedBorder: "border-white/5 bg-white/[0.01]",
      desc: "Unlocked at 1000+ Active salons"
    },
    {
      id: "leadership",
      label: "Leadership Circle",
      threshold: 1000,
      icon: Crown,
      color: "from-rose-500 to-pink-500",
      glow: "shadow-[0_0_15px_rgba(244,63,94,0.35)]",
      border: "border-rose-500/30 bg-rose-950/10",
      lockedBorder: "border-white/5 bg-white/[0.01]",
      desc: "Unlocked at 1000+ Active salons"
    }
  ];

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  const handleResetSimulation = () => {
    setSimulatedShopsAddition(0);
  };

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
    <section className="relative py-24 bg-[#060608] border-b border-white/5 overflow-hidden" id="partner-dashboard-section">
      
      {/* Background radial soft ambient glows */}
      <div className="absolute top-[10%] left-[-20%] w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[15%] right-[-20%] w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER BLOCK */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#d39d2c] bg-gold-550/5 px-3 py-1 rounded-full border border-gold-500/10 inline-block mb-4 font-bold">
            SECTION 12 • Partners Console
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium tracking-tight text-white mb-4">
            Growth Partner Dashboard
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-sans">
            A comprehensive, high-security command center. Track your connected salon network performance, calculate live override splits, inspect upcoming milestone rewards, and review your status real-time.
          </p>
        </div>

        {/* COMPREHENSIVE SECURITY BANNERS NOTIFYING USER THAT PRIVACY LAWS IN STATE STOP PROFITS FROM OUTING */}
        <div className="mb-10 bg-amber-500/10 border border-amber-500/25 rounded-2xl p-4 flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-4 max-w-4xl mx-auto">
          <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[#amber-400] text-center">
            <EyeOff className="w-5 h-5 text-amber-500" />
          </div>
          <div>
            <span className="text-[10px] font-mono font-bold text-amber-500 uppercase tracking-widest block mb-0.5">
              Strict Confidentiality protocol
            </span>
            <p className="text-xs text-gray-300 leading-normal font-sans">
              <span className="text-yellow-250 font-bold">Shop Profit Data Visible Nahi Hoga (Private Record Laws):</span> In compliance with regional merchant financial ledger protection structures, individual shop retail markup profits remain protected. Only your direct volume Performance Metrics remain visible.
            </p>
          </div>
        </div>

        {/* CONTAINER BOARD */}
        <div className="bg-[#0e0e11] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
          
          {/* Header Controls within Board */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-8 mb-8 border-b border-white/5 gap-6">
            
            {/* Choose Partner */}
            <div>
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest font-bold">
                Select Active Node Witness Simulation:
              </span>
              <div className="flex flex-wrap gap-2 mt-2">
                {partnersList.map((partner) => (
                  <button
                    key={partner.id}
                    onClick={() => {
                      setSelectedPartnerId(partner.id);
                      setSimulatedShopsAddition(0); // reset simulation count on switcher
                    }}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold flex items-center space-x-2 transition-all cursor-pointer border ${
                      selectedPartnerId === partner.id
                        ? 'bg-gold-500 border-gold-500 text-black font-bold'
                        : 'bg-black/40 border-white/5 text-gray-400 hover:text-white'
                    }`}
                    id={`btn-dashboard-select-${partner.id}`}
                  >
                    <div className="w-4 h-4 rounded-full bg-white/15 flex items-center justify-center font-mono text-[8px] font-bold">
                      {partner.avatar}
                    </div>
                    <span>{partner.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Simulated Increment Sliders to exhibits gamification values */}
            <div className="bg-black/40 border border-white/5 p-4 rounded-2xl flex flex-col sm:flex-row items-center gap-4 text-left shrink-0">
              <div className="space-y-1">
                <span className="text-[9px] font-mono text-gold-400 uppercase tracking-widest block font-bold">
                  Onboard Shop Emulator
                </span>
                <p className="text-[10px] text-gray-400 font-sans max-w-[200px] leading-tight">
                  Simulate adding beauty salons to view automatic metrics updates.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
                <button
                  onClick={() => setSimulatedShopsAddition(prev => Math.max(0, prev - 100))}
                  disabled={simulatedShopsAddition === 0}
                  className="px-2 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white disabled:opacity-40 text-[10px] font-bold hover:bg-white/10 active:scale-[0.97] transition-all cursor-pointer font-mono"
                  id="btn-emulator-decrement-100"
                >
                  -100
                </button>
                <button
                  onClick={() => setSimulatedShopsAddition(prev => Math.max(0, prev - 1))}
                  disabled={simulatedShopsAddition === 0}
                  className="px-2 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white disabled:opacity-40 text-[10px] font-bold hover:bg-white/10 active:scale-[0.97] transition-all cursor-pointer font-mono"
                  id="btn-emulator-decrement"
                >
                  -1
                </button>
                
                <div className="px-3.5 py-1.5 bg-black/80 rounded-lg text-xs font-mono font-bold text-white min-w-[70px] text-center border border-white/5">
                  +{simulatedShopsAddition} Shops
                </div>

                <button
                  onClick={() => setSimulatedShopsAddition(prev => prev + 1)}
                  className="px-2 py-1.5 rounded-lg bg-gold-450/10 border border-gold-400/20 text-[#d39d2c] text-[10px] font-bold hover:bg-gold-500 hover:text-black active:scale-[0.97] transition-all cursor-pointer font-mono"
                  id="btn-emulator-increment"
                >
                  +1
                </button>
                <button
                  onClick={() => setSimulatedShopsAddition(prev => prev + 100)}
                  className="px-2 py-1.5 rounded-lg bg-gold-450/10 border border-gold-400/20 text-[#d39d2c] text-[10px] font-bold hover:bg-gold-500 hover:text-black active:scale-[0.97] transition-all cursor-pointer font-mono"
                  id="btn-emulator-increment-100"
                >
                  +100
                </button>
                <button
                  onClick={() => setSimulatedShopsAddition(prev => prev + 600)}
                  className="px-2 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] font-bold hover:bg-purple-600 hover:text-white active:scale-[0.97] transition-all cursor-pointer font-mono"
                  id="btn-emulator-increment-600"
                >
                  +600
                </button>

                {simulatedShopsAddition > 0 && (
                  <button
                    onClick={handleResetSimulation}
                    className="text-[9px] font-mono text-rose-450 underline hover:text-rose-400 ml-2 cursor-pointer"
                    id="btn-emulator-reset"
                  >
                    Reset
                  </button>
                )}
              </div>
            </div>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* LEFT PROFILE CARD (3 columns) */}
            <div className="lg:col-span-4 bg-black/40 border border-white/5 rounded-2xl p-6 flex flex-col justify-between text-left relative">
              <div className="absolute top-2 right-4 font-mono text-[8px] text-gold-450">
                ACTIVE STATUS
              </div>

              <div className="space-y-6">
                {/* Visual Avatar */}
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-gold-500 to-purple-800 text-white font-display text-xl font-bold flex items-center justify-center border border-gold-500/20">
                    {currentPartner.avatar}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-sans">{currentPartner.name}</h3>
                    <p className="text-xs text-gray-400 font-mono uppercase">{currentPartner.city}</p>
                  </div>
                </div>

                {/* Sub-status boxes */}
                <div className="space-y-3.5 pt-4 border-t border-white/5">
                  <div>
                    <span className="text-[9px] font-mono text-gray-550 uppercase font-bold block">Current Rank Tier:</span>
                    <div className="text-base font-bold text-gold-450 font-display flex items-center space-x-1.5 mt-0.5">
                      <Award className="w-4 h-4 text-gold-400 shrink-0" />
                      <span>{finalRank}</span>
                    </div>
                  </div>

                  {/* DYNAMIC VISUAL BADGES WITH FRAMER MOTION POP */}
                  <div className="pt-3 border-t border-white/5">
                    <span className="text-[9px] font-mono text-gray-550 uppercase font-bold block mb-2">
                      Leadership Credentials:
                    </span>
                    <div className="grid grid-cols-3 gap-2">
                      {badgeConfigurations.map(badge => {
                        const BadgeIcon = badge.icon;
                        const isUnlocked = finalActiveShops >= badge.threshold;
                        
                        return (
                          <div key={badge.id} className="relative group">
                            <motion.div
                              layout
                              whileHover={{ scale: isUnlocked ? 1.05 : 0.98 }}
                              animate={{ 
                                scale: isUnlocked ? [1, 1.08, 1] : 0.95,
                                filter: isUnlocked ? "grayscale(0%)" : "grayscale(100%)",
                                borderColor: isUnlocked ? "rgba(211, 157, 44, 0.4)" : "rgba(255, 255, 255, 0.05)"
                              }}
                              transition={{ 
                                type: "spring",
                                stiffness: 280,
                                damping: 15,
                                filter: { duration: 0.3 }
                              }}
                              className={`p-2 rounded-xl border flex flex-col items-center justify-center text-center transition-all cursor-help relative overflow-hidden h-[68px] ${
                                isUnlocked 
                                  ? `${badge.border} ${badge.glow}` 
                                  : `${badge.lockedBorder} opacity-40 hover:opacity-60`
                              }`}
                              id={`dynamic-badge-${badge.id}`}
                            >
                              {/* Ambient Glowing Aura for Unlocked Badges */}
                              {isUnlocked && (
                                <motion.div 
                                  animate={{ opacity: [0.12, 0.25, 0.12] }}
                                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                                  className={`absolute inset-0 bg-gradient-to-tr ${badge.color} opacity-15`} 
                                />
                              )}
                              
                              <BadgeIcon className={`w-4 h-4 mb-1.5 ${isUnlocked ? 'text-white' : 'text-gray-500'}`} />
                              <span className={`text-[8.5px] font-sans font-bold leading-none select-none tracking-tight ${isUnlocked ? 'text-white' : 'text-gray-550'}`}>
                                {badge.label}
                              </span>

                              {/* Tiny Status Dot/Lock Indicator */}
                              <div className="absolute top-1 right-1">
                                {isUnlocked ? (
                                  <motion.div 
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ repeat: Infinity, duration: 2 }}
                                    className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" 
                                  />
                                ) : (
                                  <Lock className="w-1.5 h-1.5 text-gray-600 block" />
                                )}
                              </div>
                            </motion.div>

                            {/* Floating Micro Glass Tooltip */}
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-44 p-2.5 bg-black/95 border border-white/10 rounded-lg text-[9px] leading-snug font-sans text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 shadow-xl snap-center text-center">
                              <p className="font-bold text-white mb-0.5">{badge.label}</p>
                              <p className="text-gray-400">
                                {isUnlocked 
                                  ? `✓ Active! Verified at ${badge.threshold}+ active salons.` 
                                  : `🔒 Locked. Requires ${badge.threshold} active shops (Current: ${finalActiveShops}).`
                                }
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <span className="text-[9px] font-mono text-gray-550 uppercase font-bold block">Nexora Ledger Address:</span>
                    <div className="text-xs text-gray-400 font-mono bg-black/65 p-2 rounded border border-white/5 mt-1 select-all">
                      NX_COOP_0x2026_{currentPartner.id}_F8C
                    </div>
                  </div>

                  <div>
                    <span className="text-[9px] font-mono text-gray-550 uppercase font-bold block">System status:</span>
                    <div className="flex items-center space-x-1.5 mt-1 text-[11px] font-semibold text-emerald-400">
                      <CheckCircle className="w-4 h-4" />
                      <span>Direct Overriding Royalty Certified (1.2%)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/5 mt-8">
                <p className="text-[10px] text-gray-400 italic">
                  "Only vetted performance metrics are verified. Salon markup balances remain fully localized."
                </p>
                <button
                  onClick={handleScrollToForm}
                  className="w-full py-2.5 bg-white/5 hover:bg-white/10 text-white border border-white/15 text-[10px] font-bold font-mono uppercase tracking-widest rounded-xl transition-all mt-4 flex items-center justify-center space-x-1.5 cursor-pointer"
                  id="btn-dashboard-profile-expand"
                >
                  <span>Claim Territory Access</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

            {/* RIGHT METRICS Bento/Grid (8 columns) */}
            <div className="lg:col-span-8 flex flex-col justify-between">
              
              {/* Note about Simulator active state */}
              {simulatedShopsAddition > 0 && (
                <div className="mb-4 text-xs font-mono text-gold-400 bg-gold-450/10 border border-gold-550/25 px-4 py-2.5 rounded-xl text-left flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Sparkles className="w-4 h-4 text-yellow-405 animate-spin" />
                    <span>Viewing simulated calculations (+{simulatedShopsAddition} Shops added)</span>
                  </div>
                  <button onClick={handleResetSimulation} className="underline text-[10px] font-bold text-white hover:text-gold-450">
                    Reset Emulator
                  </button>
                </div>
              )}

              {/* Grid of the 10 core metrics the user specified */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                
                {/* 1. Shops Added */}
                <div className="bg-black/30 border border-white/5 p-4 rounded-xl text-left flex flex-col justify-between h-28 relative overflow-hidden">
                  <span className="text-[9px] font-mono text-gray-500 uppercase block font-bold">1. Shops Added</span>
                  <div>
                    <div className="text-2xl font-bold text-white font-mono">{finalShopsAdded}</div>
                    <span className="text-[9px] font-mono text-gray-400 uppercase">Onboarded Registries</span>
                  </div>
                  <Building className="absolute bottom-2 right-2 w-10 h-10 text-white/[0.02]" />
                </div>

                {/* 2. Active Shops */}
                <div className="bg-black/30 border border-white/5 p-4 rounded-xl text-left flex flex-col justify-between h-28 relative overflow-hidden">
                  <span className="text-[9px] font-mono text-purple-400 uppercase block font-bold">2. Active Shops</span>
                  <div>
                    <div className="text-2xl font-bold text-purple-400 font-mono">{finalActiveShops}</div>
                    <span className="text-[9px] font-mono text-gray-400 uppercase">Sustaining Fortnight active</span>
                  </div>
                  <CheckCircle className="absolute bottom-2 right-2 w-10 h-10 text-purple-400/[0.02]" />
                </div>

                {/* 3. Revenue Generated */}
                <div className="bg-black/30 border border-white/5 p-4 rounded-xl text-left flex flex-col justify-between h-28 relative overflow-hidden">
                  <span className="text-[9px] font-mono text-gray-500 uppercase block font-bold">3. Revenue Generated</span>
                  <div>
                    <div className="text-xl font-bold text-white font-mono">{formatCurrency(finalRevenueGenerated)}</div>
                    <span className="text-[9px] font-mono text-gray-400 uppercase">Gross Booking tickets routed</span>
                  </div>
                  <LineChart className="absolute bottom-2 right-2 w-10 h-10 text-white/[0.02]" />
                </div>

                {/* 4. Nexora Earnings */}
                <div className="bg-black/30 border border-white/5 p-4 rounded-xl text-left flex flex-col justify-between h-28 relative overflow-hidden">
                  <span className="text-[9px] font-mono text-purple-400 uppercase block font-bold">4. Nexora Earnings</span>
                  <div>
                    <div className="text-xl font-bold text-purple-400 font-mono">{formatCurrency(finalNexoraEarnings)}</div>
                    <span className="text-[9px] font-mono text-gray-400 uppercase">10% Platform fee booked</span>
                  </div>
                  <Cpu className="absolute bottom-2 right-2 w-10 h-10 text-purple-400/[0.02]" />
                </div>

                {/* 5. Your Earnings */}
                <div className="bg-gold-450/5 border border-gold-500/20 p-4 rounded-xl text-left flex flex-col justify-between h-28 relative overflow-hidden">
                  <span className="text-[9px] font-mono text-gold-400 uppercase block font-bold">5. Your Earnings (Recurring)</span>
                  <div>
                    <div className="text-xl font-bold text-gold-400 font-mono">{formatCurrency(finalYourEarnings)}</div>
                    <span className="text-[9px] font-mono text-gray-400 uppercase">1.2% Override royalty yield</span>
                  </div>
                  <IndianRupee className="absolute bottom-2 right-2 w-10 h-10 text-gold-500/[0.02]" />
                </div>

                {/* 6. Pending Earnings */}
                <div className="bg-black/30 border border-white/5 p-4 rounded-xl text-left flex flex-col justify-between h-28 relative overflow-hidden">
                  <span className="text-[9px] font-mono text-gray-500 uppercase block font-bold">6. Pending Earnings</span>
                  <div>
                    <div className="text-xl font-bold text-white font-mono">{formatCurrency(finalPendingEarnings)}</div>
                    <span className="text-[9px] font-mono text-gray-400 uppercase">Awaiting ledger clearance</span>
                  </div>
                  <Clock className="absolute bottom-2 right-2 w-10 h-10 text-white/[0.02]" />
                </div>

                {/* 7. This Week Payout */}
                <div className="bg-black/30 border border-white/5 p-4 rounded-xl text-left flex flex-col justify-between h-28 relative overflow-hidden">
                  <span className="text-[9px] font-mono text-emerald-450 uppercase block font-bold">7. This Week Payout</span>
                  <div>
                    <div className="text-xl font-bold text-emerald-400 font-mono">{formatCurrency(finalThisWeekPayout)}</div>
                    <span className="text-[9px] font-mono text-gray-400 uppercase">Releasing on Fri 18:00 IST</span>
                  </div>
                  <ArrowUpRight className="absolute bottom-2 right-2 w-10 h-10 text-emerald-400/[0.02]" />
                </div>

                {/* 8. Lifetime Earnings */}
                <div className="bg-black/30 border border-emerald-500/15 p-4 rounded-xl text-left flex flex-col justify-between h-28 relative overflow-hidden">
                  <span className="text-[9px] font-mono text-emerald-450 uppercase block font-bold">8. Lifetime Earnings</span>
                  <div>
                    <div className="text-xl font-bold text-emerald-400 font-mono">{formatCurrency(finalLifetimeEarnings)}</div>
                    <span className="text-[9px] font-mono text-gray-400 uppercase">Consolidated gross payout</span>
                  </div>
                  <PiggyBank className="absolute bottom-2 right-2 w-10 h-10 text-emerald-500/[0.02]" />
                </div>

                {/* 9. Current Rank */}
                <div className="bg-black/30 border border-white/5 p-4 rounded-xl text-left flex flex-col justify-between h-28 relative overflow-hidden">
                  <span className="text-[9px] font-mono text-[#d39d2c] block uppercase font-bold">9. Current Rank</span>
                  <div>
                    <div className="text-md font-bold text-white truncate max-w-[170px]" title={currentPartner.tier}>{currentPartner.tier}</div>
                    <span className="text-[9px] font-mono text-gray-500 uppercase block mt-0.5">Based on active shops</span>
                  </div>
                  <Award className="absolute bottom-2 right-2 w-10 h-10 text-gold-400/[0.02]" />
                </div>

              </div>

              {/* 10. Next Milestone Block (Span whole remaining layout) */}
              <div className="mt-4 p-5 bg-gradient-to-r from-[#141210] to-[#010103] border border-gold-550/35 rounded-2xl text-left flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-[9px] font-mono text-gold-450 uppercase block font-bold tracking-widest">
                    10. Next Milestone Target
                  </span>
                  <h4 className="text-sm font-bold text-white font-sans mt-1">
                    {finalNextMilestone}
                  </h4>
                  <p className="text-[11px] text-gray-400 font-sans mt-0.5">
                    Maintain active shops and sustain minimum fortnight client checkout rates to auto-unlock this upgrade tier assets.
                  </p>
                </div>
                
                <span className="px-3.5 py-1.5 bg-gold-500 text-black font-mono font-bold uppercase rounded-lg text-xs shrink-0 tracking-wider">
                  ACTIVE
                </span>
              </div>
              
              <SalonRevenueChart />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
