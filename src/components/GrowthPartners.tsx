/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Briefcase, Gift, ShieldAlert, Award, Star, Globe, 
  TrendingUp, CheckCircle2, DollarSign, BookOpen, MapPin, 
  Users, Layers, Zap, ChevronRight, UserCheck, MessageCircle,
  Smartphone, Map, HelpCircle, Network, Flame, Check, ShieldCheck
} from 'lucide-react';

export default function GrowthPartners() {
  const [activeGraphicTab, setActiveGraphicTab] = useState<string>("meeting");
  const [salonCount, setSalonCount] = useState<number>(35);
  const [avgTicket, setAvgTicket] = useState<number>(900);

  // Exact 6 Benefits requested
  const coreBenefits = [
    {
      title: "No Joining Fee",
      badge: "₹0 ZERO RISK ENTRY",
      desc: "Absolutely free registration. No registration tokens, setup fees, or periodic subscription locks are enforced.",
      icon: UserCheck,
      color: "from-amber-500/20 to-amber-600/5 border-amber-500/30 text-amber-400"
    },
    {
      title: "No Investment",
      badge: "100% ASSET-LIGHT",
      desc: "Start earning immediately. No inventory purchases, commercial space rentals, or down-payments required.",
      icon: Gift,
      color: "from-purple-500/20 to-purple-600/5 border-purple-500/30 text-purple-400"
    },
    {
      title: "Training",
      badge: "NEXORA ACADEMY",
      desc: "Unlock comprehensive partner pitch books, live salon demonstration scripts, and automated boarding templates.",
      icon: BookOpen,
      color: "from-emerald-500/20 to-emerald-600/5 border-emerald-500/30 text-emerald-400"
    },
    {
      title: "Growth Share",
      badge: "PERPETUAL DIVIDENDS",
      desc: "Secure 1.2% recurring commissions on every client booking processed by your onboarded salons. True wealth compound.",
      icon: CoinsIcon,
      color: "from-blue-500/20 to-blue-600/5 border-blue-500/30 text-blue-400"
    },
    {
      title: "Leadership Status",
      badge: "HALL OF FAME PRIVILEGE",
      desc: "Earn designated advisor medals, professional ID badges, and lead premium salon owner development sessions.",
      icon: Award,
      color: "from-pink-500/20 to-pink-600/5 border-pink-505/30 text-pink-400"
    },
    {
      title: "District Partner Path",
      badge: "CITY SOVEREIGN",
      desc: "Level up your active network size to gain master regional licenses, override sublevel partner commissions, and secure car payouts.",
      icon: Layers,
      color: "from-cyan-500/20 to-cyan-600/5 border-cyan-500/30 text-cyan-400"
    }
  ];

  // Simulator formula: gross monthly trade value * 1.2% override margin
  const potentialEarning = Math.round(salonCount * 8 * 30 * avgTicket * 0.012);

  const handleScrollToForm = () => {
    const target = document.querySelector('#contact-form-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Trigger click to active Sales Partner input/tab in common registration form
      setTimeout(() => {
        const salesTabBtn = document.querySelector('#btn-form-tab-sales') as HTMLButtonElement;
        if (salesTabBtn) {
          salesTabBtn.click();
        }
      }, 550);
    }
  };

  return (
    <section className="relative py-24 bg-[#08080a] border-b border-white/5 overflow-hidden" id="growth-partners-section">
      
      {/* Dynamic Background Graphics */}
      <div className="absolute top-[20%] left-[-15%] w-[450px] h-[450px] bg-purple-900/5 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] right-[-15%] w-[450px] h-[450px] bg-gold-450/5 rounded-full blur-[110px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SUPER BOLD, DEFIANT HINDI SYSTEM HEADLINE - SABSE STRONG SECTION */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#a855f7] bg-purple-550/5 px-3 py-1 rounded-full border border-purple-500/10 inline-block mb-5 font-bold">
            SECTION 7 // HIGH-YIELD SALES COMMAND
          </span>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-black tracking-tight text-white uppercase leading-none" id="salesmen-heading-block">
            <span className="text-red-500 block text-2xl sm:text-3xl md:text-4xl tracking-wider font-mono font-black italic mb-3 animate-pulse">
              ⚠️ SALARY KE LIYE KAAM MAT KARO!
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gold-200 to-gold-450 drop-shadow-[0_2px_10px_rgba(255,255,255,0.05)]">
              APNA BEAUTY NETWORK BANAO
            </span>
          </h2>

          <div className="h-1.5 w-32 bg-gradient-to-r from-red-600 via-gold-550 to-purple-600 mx-auto mt-6 rounded-full" />

          <p className="text-gray-400 text-sm sm:text-base mt-6 max-w-3xl mx-auto leading-relaxed font-sans font-normal">
            Fixed corporate salarised jobs keep you trapped with low caps. In modern business, wealth belongs to the platform owners. Onboard local high-density beauty studios onto our OS, manage district merchant terminals, and establish continuous passive overrides on every client checkout.
          </p>
        </div>

        {/* THREE CORE REQUESTED VISUALS (Meeting, District Map, Expansion Tree) */}
        <div className="bg-[#0c0c0f] border border-gold-500/15 rounded-[36px] p-6 sm:p-10 mb-16 relative overflow-hidden shadow-[0_0_40px_rgba(211,157,44,0.03)]">
          <div className="absolute top-4 right-6 text-[8px] font-mono text-gray-600 select-none">
            INTELLIGENT VISUAL CAD ENGINE V4
          </div>
          
          {/* Visual switcher tab control buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 select-none">
            {[
              { id: "meeting", label: "Meeting Salon Owners", icon: Users, badge: "FIELD ACTION" },
              { id: "map", label: "District Map Radar", icon: Map, badge: "GEO DISTRIBUTION" },
              { id: "expansion", label: "Network Expansion Graphic", icon: Network, badge: "PASSIVE MULTIPLIER" }
            ].map((tab) => {
              const TabIcon = tab.icon;
              const isSelected = activeGraphicTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveGraphicTab(tab.id)}
                  className={`px-4 sm:px-6 py-3 rounded-xl border flex items-center gap-2 transition-all cursor-pointer ${
                    isSelected 
                      ? 'bg-gold-500/10 border-gold-450 text-white font-mono font-black' 
                      : 'bg-black/30 border-white/5 text-gray-400 hover:text-white hover:border-white/10'
                  }`}
                  id={`btn-graphic-tab-${tab.id}`}
                >
                  <TabIcon className={`w-4 h-4 ${isSelected ? 'text-gold-450' : 'text-gray-500'}`} />
                  <div className="text-left leading-none">
                    <span className="text-[10px] sm:text-xs block uppercase tracking-wide leading-none">{tab.label}</span>
                    <span className="text-[7.5px] text-gray-550 font-mono block mt-0.5 font-bold uppercase tracking-wider">{tab.badge}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Graphical display container board */}
          <div className="min-h-[280px] sm:min-h-[350px] bg-black/60 rounded-2xl border border-white/5 p-4 sm:p-8 flex flex-col justify-center items-center relative overflow-hidden" id="active-graphic-viewport">
            
            <AnimatePresence mode="wait">
              
              {/* VISUAL REPRESENTATION 1: MEETING SALON OWNERS */}
              {activeGraphicTab === "meeting" && (
                <motion.div 
                  key="meeting"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25 }}
                  className="w-full max-w-3xl flex flex-col md:flex-row gap-6 items-center text-left"
                >
                  {/* Left Side: Mock Illustration block */}
                  <div className="relative w-full md:w-3/5 aspect-video bg-[#0d0d10] border border-gold-500/20 rounded-2xl p-5 overflow-hidden flex flex-col justify-between shrink-0">
                    <div className="absolute top-0 right-0 w-36 h-36 bg-gold-450/5 rounded-full blur-2xl pointer-events-none" />
                    
                    {/* Simulated App screen on a styled hand-held tablet */}
                    <div className="flex items-center justify-between pb-3 border-b border-white/5 text-[9px] font-mono text-gray-500">
                      <span>CLIENT: LUXE SALON INC</span>
                      <span className="text-emerald-400 font-bold">● ONLINE PROJECTION</span>
                    </div>

                    <div className="space-y-3.5 my-4">
                      {/* Dialogue Simulated Node */}
                      <div className="flex gap-3 items-start">
                        <div className="w-8 h-8 rounded-lg bg-pink-500/10 border border-pink-500/20 text-pink-400 font-mono font-bold text-[10px] flex items-center justify-center shrink-0">
                          SO
                        </div>
                        <div className="p-2.5 rounded-r-xl rounded-bl-xl bg-[#141417] border border-white/5 text-[11px] font-sans text-gray-300 leading-normal">
                          <span className="text-amber-400 font-bold block mb-1">Salon Owner (Meera Sen)</span>
                          "If clients make cashless direct bookings on Nexora, do I get immediate settlement directly into my banking account?"
                        </div>
                      </div>

                      <div className="flex gap-3 items-start justify-end">
                        <div className="p-2.5 rounded-l-xl rounded-br-xl bg-gold-500/10 border border-gold-500/20 text-[11px] font-sans text-gray-200 leading-normal text-right">
                          <span className="text-[#a855f7] font-bold block mb-1 text-right">Growth Partner (Rahul)</span>
                          "Yes! Plus, Nexora's dynamic automated off-peak engine fills your vacant seats by discounting idle chairs automatically!"
                        </div>
                        <div className="w-8 h-8 rounded-lg bg-gold-550/10 border border-gold-500/20 text-gold-450 font-mono font-bold text-[10px] flex items-center justify-center shrink-0">
                          GP
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-white/5 flex justify-between items-center text-[8.5px] font-mono text-gray-550 leading-none">
                      <span>✓ PRESENTING LIVE WEB OS DEMO</span>
                      <span className="text-gold-450 font-bold uppercase">₹0 Setup Confirmed</span>
                    </div>
                  </div>

                  {/* Right Side: Narrative explanation */}
                  <div className="w-full md:w-2/5 space-y-4 font-sans">
                    <span className="text-[9px] font-mono text-gold-450 px-2 py-0.5 rounded border border-gold-500/20 bg-gold-500/5 uppercase font-bold">Pitch Simulation</span>
                    <h3 className="text-lg sm:text-xl font-bold font-display text-white uppercase tracking-tight">Onboard Salon Franchisees Easily</h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Salon owners are desperately looking to cut expensive developer portal commissions and manage client calendars smoothly. 
                    </p>
                    <ul className="space-y-1.5 text-[11px] text-gray-300 font-mono">
                      <li className="flex items-center gap-1.5 text-emerald-400">
                        <Check className="w-3.5 h-3.5" />
                        <span>Present ₹0 Software Platform Setup</span>
                      </li>
                      <li className="flex items-center gap-1.5 text-emerald-400">
                        <span>✓ Fill idle parlor seats instantly</span>
                      </li>
                      <li className="flex items-center gap-1.5 text-emerald-400">
                        <span>✓ Guarantee 2x booking flow</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              )}

              {/* VISUAL REPRESENTATION 2: DISTRICT MAP RADAR */}
              {activeGraphicTab === "map" && (
                <motion.div 
                  key="map"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25 }}
                  className="w-full max-w-3xl flex flex-col md:flex-row gap-6 items-center text-left"
                >
                  {/* Left Side: Mock Interactive SVG map network */}
                  <div className="relative w-full md:w-3/5 aspect-video bg-[#0d0d10] border border-white/5 rounded-2xl p-4 overflow-hidden flex items-center justify-center shrink-0 select-none">
                    <div className="absolute inset-0 bg-cover bg-center opacity-[0.03] bg-[url('https://maps.googleapis.com/maps/api/staticmap')]" />
                    
                    {/* SVG Interactive District Node Network Map mockup */}
                    <svg className="w-full h-full max-h-[180px] text-gray-650" viewBox="0 0 400 200" fill="none">
                      {/* Connection pathways */}
                      <path d="M100,50 L200,100 M200,100 L300,60 M200,100 L160,150 M200,100 L250,165" stroke="rgba(211,157,44,0.3)" strokeWidth="1.5" strokeDasharray="4,4" className="animate-[dash_10s_linear_infinite]" />
                      
                      {/* Pulsing focal radar circles */}
                      <circle cx="200" cy="100" r="16" fill="rgba(211,157,44,0.12)" stroke="rgba(211,157,44,0.5)" strokeWidth="1.5" className="animate-ping" style={{ transformOrigin: '200px 100px' }} />
                      <circle cx="200" cy="100" r="6" fill="#ca8a04" stroke="#ffffff" strokeWidth="1.5" />
                      
                      {/* Pin Node A */}
                      <circle cx="100" cy="50" r="4" fill="#a855f7" />
                      <text x="100" y="40" fill="#a855f7" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">IND_NAGAR (12 SH_)*</text>
                      
                      {/* Pin Node B */}
                      <circle cx="300" cy="60" r="4" fill="#3b82f6" />
                      <text x="300" y="52" fill="#3b82f6" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">KORAM_GALA (22 SH_)</text>
                      
                      {/* Pin Node C */}
                      <circle cx="160" cy="150" r="4" fill="#10b981" />
                      <text x="160" y="162" fill="#10b981" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">JAYAN_AGAR (8 SH_)</text>

                      {/* Pin Node D */}
                      <circle cx="250" cy="165" r="4" fill="#ec4899" />
                      <text x="250" y="177" fill="#ec4899" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">HSR_LAYOUT (14 SH_)</text>
                    </svg>

                    <div className="absolute bottom-2.5 left-3 text-[8px] font-mono text-gray-500 uppercase font-bold">
                      ACTIVE DISTRICT COORDINATOR HUB ACCELERATION
                    </div>
                  </div>

                  {/* Right Side: Narrative explanation */}
                  <div className="w-full md:w-2/5 space-y-4 font-sans">
                    <span className="text-[9px] font-mono text-blue-400 px-2 py-0.5 rounded border border-blue-500/20 bg-blue-500/5 uppercase font-bold">Territorial Router</span>
                    <h3 className="text-lg sm:text-xl font-bold font-display text-white uppercase tracking-tight">Claim Your Micro-District Node</h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Nexora assigns secure regional coordinates to elite partners. Claim administrative control of your municipal district to track live transactions.
                    </p>
                    <ul className="space-y-1.5 text-[11px] text-gray-300 font-mono">
                      <li>✓ Locked regional territory rights</li>
                      <li>✓ Manage junior localized field associates</li>
                      <li>✓ Collect master overrides on regional turnover</li>
                    </ul>
                  </div>
                </motion.div>
              )}

              {/* VISUAL REPRESENTATION 3: NETWORK EXPANSION GRAPHIC */}
              {activeGraphicTab === "expansion" && (
                <motion.div 
                  key="expansion"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25 }}
                  className="w-full max-w-3xl flex flex-col md:flex-row gap-6 items-center text-left"
                >
                  {/* Left Side: Mock Interactive Tree diagram */}
                  <div className="relative w-full md:w-3/5 aspect-video bg-[#0d0d10] border border-white/5 rounded-2xl p-4 overflow-hidden flex flex-col justify-between shrink-0 select-none">
                    
                    {/* Visual tree branching representation */}
                    <div className="flex-1 flex gap-2 items-center justify-center py-4">
                      {/* Seed Node */}
                      <div className="p-2 sm:p-3 bg-gold-500/10 border border-gold-500/30 rounded-xl text-center shrink-0">
                        <span className="text-[8px] font-mono text-gold-450 uppercase block font-black">YOU (GP)</span>
                        <span className="text-[10px] font-bold text-white block mt-0.5 leading-none">1 Partner</span>
                      </div>

                      {/* Line connector symbol */}
                      <div className="h-0.5 w-6 bg-gold-450/40 shrink-0" />

                      {/* District branching */}
                      <main className="space-y-2 shrink-0">
                        <div className="p-1.5 sm:p-2 bg-purple-500/10 border border-purple-500/30 rounded-lg text-center">
                          <span className="text-[7.5px] font-mono text-purple-300 block leading-none font-bold">5 DISTRICTS</span>
                        </div>
                        <div className="p-1.5 sm:p-2 bg-blue-500/10 border border-blue-500/30 rounded-lg text-center">
                          <span className="text-[7.5px] font-mono text-blue-300 block leading-none font-bold">100+ CO-OP SHOPS</span>
                        </div>
                      </main>

                      {/* Line connector symbol */}
                      <div className="h-0.5 w-6 bg-gold-450/40 shrink-0" />

                      {/* Ultimate Outcomes */}
                      <div className="p-2 sm:p-3 bg-emerald-500/10 border border-emerald-550/20 rounded-xl text-center shrink-0">
                        <span className="text-[8px] font-mono text-emerald-400 block font-bold leading-none">PASSIVE VOL.</span>
                        <span className="text-xs font-black text-white block mt-1 leading-none">₹12,000+ PM*</span>
                        <span className="text-[7px] text-gray-500 block leading-none mt-1 font-mono">1.2% Overrides</span>
                      </div>
                    </div>

                    <p className="text-[8px] font-mono text-gray-550 text-center leading-none mt-2 uppercase">
                      Branch multiplier calculations: Salons * Transactions/Day * 30 Days * ticket yield
                    </p>
                  </div>

                  {/* Right Side: Narrative explanation */}
                  <div className="w-full md:w-2/5 space-y-4 font-sans">
                    <span className="text-[9px] font-mono text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20 bg-emerald-500/5 uppercase font-bold">Scaling Dynamics</span>
                    <h3 className="text-lg sm:text-xl font-bold font-display text-white uppercase tracking-tight">Compound Network Overrides</h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      You are not trading active field hours for flat payments. As your connected salons secure online booking volume, your ledger overrides automatically accumulate daily.
                    </p>
                    <ul className="space-y-1.5 text-[11px] text-gray-300 font-mono">
                      <li>✓ Infinite referral networks supported</li>
                      <li>✓ Continuous payment ledger security</li>
                      <li>✓ Fully transferable licensing rights</li>
                    </ul>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>

          </div>

        </div>

        {/* 6 CORE STRATEGIC BENEFITS GRID CARD */}
        <div className="mb-16">
          <div className="flex items-center space-x-2.5 mb-8 justify-center select-none">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-450 animate-pulse" />
            <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-gray-400 font-black">
              ✦ CORE SALES MANIFESTO PRIVILEGES
            </h3>
            <span className="h-1.5 w-1.5 rounded-full bg-gold-450 animate-pulse" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="salesmen-benefits-manifesto">
            {coreBenefits.map((b, idx) => {
              const BenIcon = b.icon;
              return (
                <div 
                  key={idx} 
                  className={`p-6 rounded-3xl border bg-gradient-to-tr from-[#111114] via-[#09090b] to-transparent hover:border-gold-500/30 hover:scale-[1.01] transition-all flex flex-col justify-between group ${b.color}`}
                >
                  <div>
                    {/* Upper decorative wrapper */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-2xl bg-black/40 border border-white/5 text-gold-450">
                        <BenIcon className="w-5 h-5 group-hover:animate-pulse" />
                      </div>
                      <span className="text-[8px] font-mono bg-white/5 text-gray-400 px-2 py-0.5 rounded border border-white/5 font-extrabold tracking-wider">
                        0{idx+1} MODULE
                      </span>
                    </div>

                    <span className="text-[8.5px] font-mono text-gold-450 uppercase block font-black leading-none tracking-widest mb-1.5">{b.badge}</span>
                    <h4 className="text-base font-black text-white uppercase tracking-wide font-display mb-3">{b.title}</h4>
                    <p className="text-xs text-gray-400 leading-relaxed font-sans">{b.desc}</p>
                  </div>

                  {/* Tiny aesthetic feedback */}
                  <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[8px] font-mono text-gray-500">
                    <span>STATUS: CONTRACT VERIFIED</span>
                    <span>✓ ACTIVATE</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ROYALTY ESTIMATOR & PRIMARY REGISTRATION CALL OUT SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-4">
          
          {/* LEFT: Royal commission forecast slider (7 columns) */}
          <div className="lg:col-span-7 bg-gradient-to-tr from-[#121215] to-[#0a0a0c] border border-gold-550/15 p-6 sm:p-8 rounded-[30px] flex flex-col justify-between relative overflow-hidden" id="salesmen-royalty-simulator">
            <div className="absolute top-[-30%] left-[-20%] w-72 h-72 bg-gold-450/5 rounded-full blur-[90px] pointer-events-none" />
            
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-white/5 mb-6">
                <span className="text-[9px] font-mono uppercase tracking-widest text-gold-450 bg-gold-500/5 px-2.5 py-0.5 border border-gold-500/20 rounded">
                  FINANCIAL LEDGER CALCULATOR
                </span>
                <span className="text-[8px] font-mono text-gray-550">PROJECTION ENGINE</span>
              </div>

              <h4 className="text-lg font-black text-white uppercase tracking-wide font-display mb-2">Simulate Your Regional Royalty Yield</h4>
              <p className="text-xs text-gray-400 leading-normal font-sans mb-6">
                Adjust slider coordinates representing onboarding density below to forecast your true recurring yield overrides (estimating direct 1.2% base network royalties).
              </p>

              {/* Slider Controls */}
              <div className="space-y-5 font-mono text-xs text-gray-300">
                
                {/* Salon Nodes Slider */}
                <div className="space-y-1">
                  <div className="flex justify-between items-center text-[11px]">
                    <span>1. Onboarded Active Salon Nodes:</span>
                    <span className="text-gold-450 font-black">{salonCount} Salons</span>
                  </div>
                  <input 
                    type="range"
                    min="3"
                    max="150"
                    step="1"
                    value={salonCount}
                    onChange={(e) => setSalonCount(Number(e.target.value))}
                    className="w-full h-1.5 rounded-lg accent-gold-500 bg-white/5 cursor-pointer"
                  />
                  <div className="flex justify-between text-[8px] text-gray-550 leading-none">
                    <span>3 SHOP GRID</span>
                    <span>150 ACTIVE NETWORK</span>
                  </div>
                </div>

                {/* Ticket Average Slider */}
                <div className="space-y-1 pt-1">
                  <div className="flex justify-between items-center text-[11px]">
                    <span>2. Average Salon Client Service Invoice:</span>
                    <span className="text-gold-450 font-black">₹{avgTicket}</span>
                  </div>
                  <input 
                    type="range"
                    min="300"
                    max="2200"
                    step="50"
                    value={avgTicket}
                    onChange={(e) => setAvgTicket(Number(e.target.value))}
                    className="w-full h-1.5 rounded-lg accent-gold-500 bg-white/5 cursor-pointer"
                  />
                  <div className="flex justify-between text-[8px] text-gray-550 leading-none">
                    <span>₹300 MINIMUM</span>
                    <span>₹2,200 LUXURY AVERAGE</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Dynamic Forecast Outcome Card representation */}
            <div className="mt-8 p-4 bg-black/50 border border-gold-500/20 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[8px] font-mono text-gray-550 uppercase tracking-wider block font-bold leading-none mb-1">STABLE PASSIVE RETENTION FORECAST</span>
                <span className="text-[10px] text-gray-400 block font-sans">Monthly Overrides (1.2% override processed)</span>
                <span className="text-2xl font-black text-emerald-450 font-mono tracking-tight mt-1.5 block">
                  ₹{potentialEarning.toLocaleString('en-IN')}+ / Month
                </span>
              </div>

              <div className="p-3 bg-[#111113] border border-white/5 rounded-xl shrink-0 font-mono text-right text-[8.5px] text-gray-500 leading-relaxed max-w-[200px] text-left">
                *Based on conservative average check-out load of 8 haircuts/beauty services per day processed continuously for 30 calendar days.
              </div>
            </div>

          </div>

          {/* RIGHT: Call-to-action Become Partner (5 columns) */}
          <div className="lg:col-span-1 border-l border-white/5 h-full hidden lg:block" />

          <div className="lg:col-span-4 bg-gradient-to-b from-[#111113] to-black border border-white/5 rounded-[30px] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden" id="salesmen-action-pitch-card">
            <div className="absolute top-[-20%] right-[-20%] w-60 h-60 bg-purple-550/5 rounded-full blur-[65px] pointer-events-none" />

            <div className="space-y-4">
              <span className="text-[9px] font-mono text-[#a855f7] bg-purple-550/5 px-2 py-0.5 rounded border border-purple-500/10 inline-block uppercase font-bold">
                FAST REGISTRATION ACT
              </span>
              <h4 className="text-lg font-black text-white uppercase tracking-wide font-display mt-2 leading-tight">Become a Secure Growth Partner Today</h4>
              <p className="text-xs text-gray-405 leading-relaxed font-sans mb-4">
                Claim your municipal micro-coordinates. Receive hardcopy pamphlets, dynamic software system walk-through tools, and active regional support.
              </p>

              <div className="space-y-2.5 pt-2">
                {[
                  "Absolute ₹0 setup / no hidden down-payments",
                  "Direct live WhatsApp sales desk helpline support",
                  "100% transparent blockchain-style co-operative ledger"
                ].map((val, key) => (
                  <div key={key} className="flex items-start gap-2 text-xs font-sans text-gray-300">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{val}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <button 
                onClick={handleScrollToForm}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-gold-500 hover:from-gold-450 to-[#a855f7] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all hover:brightness-115 flex items-center justify-center gap-1.5 h-12 cursor-pointer shadow-md select-none"
                id="btn-salesmen-direct-apply"
              >
                <Zap className="w-3.5 h-3.5 fill-current shrink-0 animate-pulse text-white" />
                <span>Become Growth Partner</span>
              </button>

              <a 
                href="https://wa.me/917852877721?text=Hi%2520Nexora,%20I%20am%20interested%20in%20joining%20as%20a%20Sales%20Growth%20Partner." 
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 rounded-xl border border-emerald-500/20 hover:border-emerald-500/35 bg-emerald-550/5 hover:bg-emerald-550/10 text-emerald-405 font-mono text-[10px] uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer select-none text-center h-11"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Direct WhatsApp Helpline</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

// Minimal local helper icon since coins isn't directly matching lucide standard sometimes
function CoinsIcon(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="8" cy="8" r="6" />
      <circle cx="18" cy="18" r="4" />
      <path d="M12 18a6 6 0 0 0-6-6" />
    </svg>
  );
}
