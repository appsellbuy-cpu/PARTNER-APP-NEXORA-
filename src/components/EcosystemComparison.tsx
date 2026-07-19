/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  XCircle, CheckCircle2, AlertTriangle, AlertCircle, Sparkles, TrendingUp, 
  Calendar, Users, Award, Star, Share2, Clipboard, ChevronRight, HelpCircle, 
  Layers, Database, Smartphone, BookOpen, Clock, Activity, MessageSquare
} from 'lucide-react';

export default function EcosystemComparison() {
  const [activeTab, setActiveTab] = useState<'before' | 'after'>('after');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const beforeItems = [
    {
      id: "b1",
      title: "Manual Diary",
      subtitle: "The Old-school Paper Register",
      description: "Double-booking errors, illegible handwriting scratchpads, and missed phone calls during busy hours.",
      icon: BookOpen,
    },
    {
      id: "b2",
      title: "No Customer Database",
      subtitle: "Sinking Client Retention",
      description: "No record of service histories, hair-color formulas, past fees, or preferences. Every visit starts from zero.",
      icon: Database,
    },
    {
      id: "b3",
      title: "No Reviews",
      subtitle: "Silent Satisfied Clients",
      description: "Happy customers leave without sharing. Zero online feedback mechanism to prove quality and bring new footfall.",
      icon: MessageSquare,
    },
    {
      id: "b4",
      title: "No Referrals",
      subtitle: "Dead Word-of-Mouth",
      description: "No automated tool to incentivize clients to recommend your salon to friends, family, and colleagues.",
      icon: Share2,
    },
    {
      id: "b5",
      title: "No Growth Tracking",
      subtitle: "Midnight Accounting Stress",
      description: "Manually calculating cash at midnight with zero predictive insights into busy staff slots or low retail stocks.",
      icon: Activity,
    },
    {
      id: "b6",
      title: "Low Visibility",
      subtitle: "Invisible to Online Seekers",
      description: "Losing prime high-value local beauty leads to corporate chains who use automated online booking.",
      icon: Users,
    }
  ];

  const afterItems = [
    {
      id: "a1",
      title: "Online Booking",
      subtitle: "24/7 Smart Scheduler",
      description: "Direct-to-chair scheduling via WhatsApp & custom links. Keeps your calendars full automatically.",
      icon: Calendar,
      accent: "text-emerald-400 bg-emerald-500/10 border-emerald-500/25"
    },
    {
      id: "a2",
      title: "Customer Database",
      subtitle: "Intelligent Client Profiles",
      description: "Access complete service histories, previous dye formulations, spend telemetry, and custom dates.",
      icon: Database,
      accent: "text-gold-450 bg-gold-450/10 border-gold-450/25"
    },
    {
      id: "a3",
      title: "Reviews Engine",
      subtitle: "Automatic Reputation Booster",
      description: "Auto-trigger feedback requests via WhatsApp post-service, automatically listing best reviews publicly.",
      icon: Star,
      accent: "text-purple-400 bg-purple-500/10 border-purple-500/25"
    },
    {
      id: "a4",
      title: "Referral Network",
      subtitle: "Direct-to-Wallet Royalties",
      description: "Incentivize your clients with a recursive credit engine. When they refer, both win balance rewards.",
      icon: Share2,
      accent: "text-[#3b82f6] bg-[#3b82f6]/10 border-[#3b82f6]/25"
    },
    {
      id: "a5",
      title: "AI Growth Insights",
      subtitle: "Predictive Business Coach",
      description: "Smarter stock levels, precise price setting suggestions, and automatic ideal staffing recommendations.",
      icon: Sparkles,
      accent: "text-[#ec4899] bg-[#ec4899]/10 border-[#ec4899]/25"
    },
    {
      id: "a6",
      title: "Revenue Dashboard",
      subtitle: "Real-time Profit Analytics",
      description: "Instant payouts, staff commission breakdowns, and digital ledger statistics in a highly readable interface.",
      icon: TrendingUp,
      accent: "text-emerald-400 bg-emerald-500/10 border-emerald-500/25"
    }
  ];

  return (
    <section className="relative py-24 border-t border-b border-white/5 bg-luxury-black bg-grid-bg overflow-hidden" id="why-nexora">
      
      {/* Background Ambience Lights */}
      <div className="absolute top-[20%] left-[-10%] w-96 h-96 bg-red-900/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-96 h-96 bg-gold-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading with Hinglish translation requested */}
        <div className="text-center max-w-4xl mx-auto mb-16 px-4">
          <span className="text-[11px] font-mono uppercase tracking-widest text-gold-450 bg-gold-550/5 px-3 py-1 rounded-full border border-gold-500/10 inline-block mb-4">
            Ecosystem Sovereignty
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium tracking-tight text-white leading-normal" id="why-nexora-title">
            Beauty Industry <span className="text-red-500 font-semibold italic">Broken Hai.</span><br />
            <span className="text-[#a855f7] bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-gold-400 to-[#d39d2c] font-bold">
              Nexora Usse Connect Kar Raha Hai.
            </span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-4 max-w-2xl mx-auto leading-relaxed font-sans">
            Traditional standalone software extracts heavy monthly cash fees while isolating your shop. Nexora brings complete cooperative digital transformation.
          </p>
        </div>

        {/* Mobile Filter Tabs: Before vs After */}
        <div className="flex md:hidden justify-center space-x-2 mb-8 bg-white/5 p-1 rounded-xl max-w-xs mx-auto border border-white/5">
          <button
            onClick={() => setActiveTab('before')}
            className={`flex-1 py-2 px-4 rounded-lg text-xs font-mono font-semibold transition-all duration-300 ${
              activeTab === 'before' 
                ? 'bg-red-500/10 text-red-400 border border-red-500/20' 
                : 'text-gray-400 hover:text-white'
            }`}
            id="tab-before-button"
          >
            ❌ Before Nexora
          </button>
          <button
            onClick={() => setActiveTab('after')}
            className={`flex-1 py-2 px-4 rounded-lg text-xs font-mono font-semibold transition-all duration-300 ${
              activeTab === 'after' 
                ? 'bg-gold-500 text-luxury-black font-bold' 
                : 'text-gray-400 hover:text-white'
            }`}
            id="tab-after-button"
          >
            ✦ After Nexora
          </button>
        </div>

        {/* Desktop dual side-by-side split comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* COLUMN 1: BEFORE NEXORA (Broken Model) */}
          <div className={`space-y-6 transition-all duration-500 ${
            activeTab === 'before' ? 'block' : 'hidden md:block'
          }`} id="pane-before-nexora">
            <div className="rounded-3xl border border-red-500/15 bg-gradient-to-b from-[#1c1c1c] to-red-950/5 p-6 sm:p-8 h-full flex flex-col justify-between">
              
              <div>
                {/* Header card info */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 rounded-2xl bg-red-950/20 border border-red-500/20 flex items-center justify-center text-red-500 shrink-0">
                    <XCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-red-400 uppercase tracking-widest block font-bold">Traditional Chaos</span>
                    <h3 className="text-xl font-display font-medium text-white" id="before-card-title">Before Nexora</h3>
                  </div>
                </div>

                {/* Subtitle tag */}
                <p className="text-xs font-mono text-red-400/80 bg-red-950/30 px-3 py-1.5 rounded-lg border border-red-500/10 inline-block mb-8">
                  ⚠️ High Friction • Offline Gaps • Customer Leakage
                </p>

                {/* Six broken items requested */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {beforeItems.map((item) => {
                    const Icon = item.icon;
                    const isHovered = hoveredCard === item.id;
                    return (
                      <div 
                        key={item.id}
                        onMouseEnter={() => setHoveredCard(item.id)}
                        onMouseLeave={() => setHoveredCard(null)}
                        className={`p-4 rounded-2xl bg-[#141414] border transition-all duration-300 ${
                          isHovered 
                            ? 'border-red-500/30 bg-[#161313] scale-[1.02]' 
                            : 'border-white/5 bg-white/[0.01]'
                        }`}
                        id={`card-before-${item.id}`}
                      >
                        <div className="flex items-center space-x-2.5 mb-2">
                          <div className="p-1.5 rounded bg-red-500/5 border border-red-500/10 text-red-400/80 shrink-0">
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className="text-xs font-mono font-bold text-red-400 block line-through decoration-red-500/50">
                            {item.title}
                          </span>
                        </div>
                        <h4 className="text-xs font-medium text-gray-200 mb-1">{item.subtitle}</h4>
                        <p className="text-[11px] text-gray-400 leading-normal font-sans">{item.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Status footer for this pane */}
              <div className="border-t border-white/5 pt-6 mt-8">
                <div className="p-4 rounded-xl bg-red-950/10 border border-red-500/10 flex items-start space-x-3 text-xs text-red-400 leading-normal">
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-500" />
                  <div>
                    <span className="font-bold block mb-0.5">Disconnected Growth Trap</span>
                    Paper diaries are lost, clients disappear forever, and there's no system to bring them back.
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* COLUMN 2: AFTER NEXORA (Connected Success) */}
          <div className={`space-y-6 transition-all duration-500 ${
            activeTab === 'after' ? 'block' : 'hidden md:block'
          }`} id="pane-after-nexora">
            <div className="rounded-3xl border border-gold-500/20 bg-gradient-to-b from-[#1c1c1c] to-gold-950/5 p-6 sm:p-8 h-full flex flex-col justify-between shadow-[0_0_50px_rgba(211,157,44,0.03)] selection:bg-purple-500 selection:text-white">
              
              <div>
                {/* Header card info */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 rounded-2xl bg-gold-400/10 border border-gold-400/30 flex items-center justify-center text-gold-400 shrink-0 animate-pulse">
                    <Sparkles className="w-6 h-6 text-gold-400" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest block font-bold">Nexora Unified OS</span>
                    <h3 className="text-xl font-display font-medium text-white" id="after-card-title">After Nexora</h3>
                  </div>
                </div>

                {/* Subtitle tag */}
                <p className="text-xs font-mono text-gold-400 bg-gold-500/10 px-3 py-1.5 rounded-lg border border-gold-500/20 inline-block mb-8">
                  ✦ Complete Connect • Customer Retention • Automated Profit
                </p>

                {/* Six digital transformation items requested */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {afterItems.map((item) => {
                    const Icon = item.icon;
                    const isHovered = hoveredCard === item.id;
                    return (
                      <div 
                        key={item.id}
                        onMouseEnter={() => setHoveredCard(item.id)}
                        onMouseLeave={() => setHoveredCard(null)}
                        className={`p-4 rounded-2xl border transition-all duration-300 ${
                          isHovered 
                            ? 'border-gold-500/40 bg-gold-500/5 scale-[1.02] shadow-[0_4px_20px_rgba(211,157,44,0.05)]' 
                            : 'border-white/5 bg-[#141414]'
                        }`}
                        id={`card-after-${item.id}`}
                      >
                        <div className="flex items-center space-x-2.5 mb-2">
                          <div className={`p-1.5 rounded ${item.accent} flex items-center justify-center shrink-0`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <span className="text-xs font-mono font-bold text-white block">
                            {item.title}
                          </span>
                        </div>
                        <h4 className="text-xs font-semibold text-gold-400 mb-1">{item.subtitle}</h4>
                        <p className="text-[11px] text-gray-300 leading-normal font-sans">{item.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Status footer for this pane */}
              <div className="border-t border-white/5 pt-6 mt-8">
                <div className="p-4 rounded-xl bg-gold-500/5 border border-gold-500/15 flex items-start space-x-3 text-xs text-gold-400 leading-normal">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-gold-400" />
                  <div>
                    <span className="font-bold text-white block mb-0.5">The Sovereign Digital transformation</span>
                    Every element is linked. Clients schedule, are stored, referred, reviewed, and grow. All inside one ledger.
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Visual: Before vs After Salon Transformation (Decorative Interactive Slide Box requested) */}
        <div className="mt-16 bg-[#161616] p-6 sm:p-8 rounded-3xl border border-white/5 relative overflow-hidden" id="salon-visual-comparison">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-550/5 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10">
            <h4 className="text-sm font-mono text-gold-400 uppercase tracking-widest mb-2 flex items-center justify-center sm:justify-start space-x-2">
              <Layers className="w-4 h-4 text-gold-400" />
              <span>Interactive Visual Comparison</span>
            </h4>
            <h3 className="text-xl sm:text-2xl font-display font-medium text-white text-center sm:text-left mb-6">
              Before vs After Salon Transformation
            </h3>

            {/* Split view simulator */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-black/40 p-6 rounded-2xl border border-white/5">
              
              {/* Left Side (Before State - Visualized schematically) */}
              <div className="lg:col-span-5 p-6 rounded-xl border border-red-500/10 bg-red-950/5 relative text-left">
                <div className="absolute top-2 right-3 px-2 py-0.5 rounded bg-red-500/10 text-red-500 font-mono text-[9px] uppercase tracking-wider">
                  BEFORE STATE
                </div>
                
                <h5 className="font-mono text-xs text-red-400 font-bold mb-4 uppercase">🗂️ THE CHAOTIC INK RECORD</h5>
                
                <div className="space-y-3 font-mono text-[11px] text-gray-500">
                  <div className="p-2 sm:p-3 rounded bg-black/60 border border-dashed border-red-500/10">
                    <p className="line-through text-red-500/60 font-bold">[10:00 AM] Priya S. - Hair color split (NOT SURE?)</p>
                    <p className="text-[9px] text-red-400/80">⚠️ Risk: Lost color records. Client angry next month.</p>
                  </div>
                  <div className="p-2 sm:p-3 rounded bg-black/60 border border-dashed border-red-500/10">
                    <p className="line-through text-red-500/60 font-bold">[11:30 AM] Ashok K. - Cut & Trim (No database entry)</p>
                    <p className="text-[9px] text-red-400/80">⚠️ Risk: Missing contact info. No review sent.</p>
                  </div>
                  <div className="p-2 sm:p-3 rounded bg-black/60 border border-dashed border-red-500/10">
                    <p className="line-through text-red-500/60 font-bold">[02:15 PM] DOUBLE-BOOKED (Manual Diary Error)</p>
                    <p className="text-[9px] text-red-400/80">⚠️ Critical Friction: Two clients at same chair.</p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-red-500/10 flex items-center justify-between text-[10px] font-mono text-red-500">
                  <span>● Manual registers are full</span>
                  <span>Visibility: Invisible 🌐</span>
                </div>
              </div>

              {/* Central Arrow/Transformation element */}
              <div className="lg:col-span-2 flex flex-row lg:flex-col items-center justify-center space-x-3 lg:space-x-0 lg:space-y-3 py-2 text-center">
                <div className="h-[2px] lg:h-12 w-12 lg:w-[2px] bg-red-500/40" />
                <div className="p-3.5 rounded-full bg-gold-450 text-luxury-black font-bold text-xs tracking-wider border border-white/10 animate-bounce">
                  ✨ TRANSFORM ✨
                </div>
                <div className="h-[2px] lg:h-12 w-12 lg:w-[2px] bg-gold-500/40" />
              </div>

              {/* Right Side (After State - Live dashboard preview) */}
              <div className="lg:col-span-5 p-6 rounded-xl border border-gold-500/20 bg-gradient-to-br from-gold-950/10 to-transparent relative text-left">
                <div className="absolute top-2 right-3 px-2 py-0.5 rounded bg-gold-500/20 text-gold-400 font-mono text-[9px] uppercase tracking-wider animate-pulse">
                  NEXORA ACTIVE
                </div>

                <h5 className="font-mono text-xs text-gold-400 font-bold mb-4 uppercase">📱 THE BEAUTY OS INTERFACE</h5>

                <div className="space-y-3 font-sans text-xs">
                  
                  {/* Dynamic scheduler slot mockup */}
                  <div className="p-3 rounded-lg bg-[#1a1a1a] border border-gold-500/10 hover:border-gold-500/30 transition-all">
                    <div className="flex justify-between items-start mb-1.5">
                      <span className="font-mono text-[10px] text-gold-400">10:00 AM SCHEDULED</span>
                      <span className="px-1.5 py-0.5 rounded bg-purple-500/10 text-purple-400 font-mono text-[8px]">DIGITAL LOCK</span>
                    </div>
                    <p className="text-white font-bold">Priya Sen (The Royal Parlour)</p>
                    <p className="text-[10px] text-gray-400">Formula Logged: Matte Burgundy L'Oreal Hair treatment</p>
                    
                    {/* Auto review link and checkmark */}
                    <div className="mt-2 pt-2 border-t border-white/5 flex justify-between items-center text-[9px] font-mono text-emerald-400">
                      <span>✓ Review Request Triggered</span>
                      <span>Earned Credits: 50 pts</span>
                    </div>
                  </div>

                  {/* Dynamic review notification */}
                  <div className="p-2 bg-[#1a1a1a] border border-[#22c55e]/10 rounded-lg flex items-center space-x-2">
                    <div className="p-1 rounded bg-[#22c55e]/10 text-emerald-400">
                      <Star className="w-3.5 h-3.5 fill-current" />
                    </div>
                    <div>
                      <p className="text-[10px] text-white font-semibold">Automatic 5★ Star Review Posted</p>
                      <p className="text-[9px] text-gray-400">"Priya Sen shared booking referral link with 3 friends!"</p>
                    </div>
                  </div>

                </div>

                <div className="mt-4 pt-3 border-t border-gold-500/15 flex items-center justify-between text-[10px] font-mono text-gold-400">
                  <span>● Database Connected</span>
                  <span>AI Growth Trend: +24% 📈</span>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
