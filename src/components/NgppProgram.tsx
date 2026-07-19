/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, ShieldCheck, ShieldAlert, X, Check, Handshake, 
  TrendingUp, Award, DollarSign, Brain, Users, ArrowRight, Zap 
} from 'lucide-react';

export default function NgppProgram() {
  const [hoveredBadge, setHoveredBadge] = useState<string | null>(null);

  const missionBadges = [
    {
      id: "m1",
      title: "Ye Naukri Nahi",
      tagline: "No Fixed Chains",
      desc: "Salary traps keep your growth locked. Here, you are your own boss with zero logging hours or standard office boss pressure.",
      accent: "from-red-500/10 to-transparent border-red-500/20 text-red-400",
      icon: X,
      badgeText: "NO EMPLOYEE CHAINS"
    },
    {
      id: "m2",
      title: "Ye Franchise Nahi",
      tagline: "No Heavy Stock Buying",
      desc: "No need to pay lakhs for territorial licensing, buying mandatory bulk inventory supplies, or establishing high-rent shops.",
      accent: "from-amber-500/10 to-transparent border-amber-550/20 text-amber-400",
      icon: X,
      badgeText: "NO CAPITAL BURDEN"
    },
    {
      id: "m3",
      title: "Ye MLM Nahi",
      tagline: "No Chain-Selling Scams",
      desc: "No binary tree networks or pyramid target pressure. Real b2b value from helping local physical parlor businesses modernize.",
      accent: "from-rose-500/10 to-transparent border-rose-500/20 text-rose-400",
      icon: X,
      badgeText: "STRICT B2B PRODUCTS"
    },
    {
      id: "m4",
      title: "Ye Bharat Ki Beauty Industry Ko Digital Banane Ka Mission Hai",
      tagline: "The Sovereign Tech Mission",
      desc: "Our sole purpose is to map lakhs of unorganized salons onto India's premier digital booking ledger, unlocking true recurring royalties.",
      accent: "from-emerald-500/10 to-transparent border-emerald-500/20 text-emerald-400",
      icon: Check,
      badgeText: "COOPERATIVE DIGITALIZATION"
    }
  ];

  const handleScrollToForm = () => {
    const target = document.querySelector('#contact-form-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Delay slightly to trigger the button click
      setTimeout(() => {
        const salesTabBtn = document.querySelector('#btn-form-tab-sales') as HTMLButtonElement;
        if (salesTabBtn) {
          salesTabBtn.click();
        }
      }, 550);
    }
  };

  return (
    <section className="relative py-24 bg-luxury-black bg-grid-bg border-b border-white/5 overflow-hidden" id="ngpp-program-section">
      
      {/* Background Neon Lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/5 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-[10%] left-[-10%] w-80 h-80 bg-gold-400/5 rounded-full blur-[110px] pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER WITH HINGLISH TAGLINE */}
        <div className="text-center max-w-4xl mx-auto mb-16 px-4">
          <span className="text-[11px] font-mono uppercase tracking-widest text-gold-450 bg-gold-550/5 px-3 py-1 rounded-full border border-gold-500/10 inline-block mb-4 font-bold">
            Nexora Growth Partner Program • NGPP
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium tracking-tight text-white leading-normal" id="ngpp-title-block">
            NEXORA GROWTH PARTNER PROGRAM<br />
            <span className="text-[#a855f7] bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-gold-400 to-[#d39d2c] font-bold">
              Salary Nahi. Growth Share.
            </span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-4 max-w-2xl mx-auto leading-relaxed font-sans">
            Forget typical sales agent salary limitations. Nexora models real, sustainable, and recursive royalty structures matching the compound expansion of India's beauty space.
          </p>
        </div>

        {/* MISSION BADGES GRID DISPLAY */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch mb-16">
          {missionBadges.map((badge) => {
            const Icon = badge.icon;
            const isHovered = hoveredBadge === badge.id;

            return (
              <div
                key={badge.id}
                onMouseEnter={() => setHoveredBadge(badge.id)}
                onMouseLeave={() => setHoveredBadge(null)}
                className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 bg-gradient-to-br ${badge.accent} flex flex-col justify-between relative overflow-hidden ${
                  isHovered 
                    ? 'scale-[1.02] shadow-[0_4px_30px_rgba(211,157,44,0.04)] ring-1 ring-gold-500/15' 
                    : 'bg-white/[0.01]'
                }`}
                id={`ngpp-badge-${badge.id}`}
              >
                {/* Micro particle helper glow */}
                {isHovered && (
                  <div className="absolute inset-0 bg-gold-500/5 opacity-40 blur-xl rounded-full" />
                )}

                <div className="relative z-10">
                  {/* Top line with Icon indicator */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[10px] font-mono uppercase tracking-widest font-bold opacity-80">
                      {badge.badgeText}
                    </span>
                    
                    <div className={`p-2 rounded-xl flex items-center justify-center shrink-0 border border-white/10 bg-black/40`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Primary text */}
                  <h3 className="text-xl sm:text-2xl font-display font-medium text-white tracking-tight mb-2">
                    {badge.title}
                  </h3>
                  
                  <p className="text-xs font-mono text-gold-450 mb-4 tracking-wide uppercase">
                    ✦ {badge.tagline}
                  </p>

                  <p className="text-gray-300 text-sm leading-relaxed font-sans mt-3">
                    {badge.desc}
                  </p>
                </div>

                {/* Simulated badge checkmark status */}
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                  <span className="text-gray-500">Node Status:</span>
                  <span className={badge.id === 'm4' ? 'text-emerald-400 font-bold' : 'text-rose-400 font-bold'}>
                    {badge.id === 'm4' ? '✓ APPROVED TARGET' : '❌ ELIMINATED MODEL'}
                  </span>
                </div>

              </div>
            );
          })}
        </div>

        {/* SALARY VS GROWTH COMPOSITE COMPARISON DECK */}
        <div className="bg-[#121214]/50 border border-white/5 rounded-3xl p-6 sm:p-8 relative overflow-hidden" id="ngpp-salary-vs-share">
          <div className="absolute inset-0 bg-[#08080a] opacity-60 -z-10" />
          <div className="absolute top-[-40%] right-[-10%] w-60 h-60 bg-gold-400/5 rounded-full blur-[80px] pointer-events-none" />

          <h3 className="text-lg font-display text-white mb-6 text-center sm:text-left flex items-center justify-center sm:justify-start space-x-2">
            <Sparkles className="w-5 h-5 text-gold-450" />
            <span>The Mindset Paradigm Swap: Salary vs. Growth Share</span>
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-black/40 p-6 rounded-2xl border border-white/5">
            
            {/* The Salary Trap Block */}
            <div className="p-5 rounded-xl border border-red-500/10 bg-red-950/5 text-left font-sans">
              <span className="text-[9px] font-mono text-red-400 block mb-2 uppercase font-bold">
                ⚠️ THE TRADITIONAL FIXED SALARY ROAD
              </span>
              <h4 className="text-base font-bold text-white mb-3">Locked Work Trap</h4>
              <ul className="space-y-2 text-xs text-gray-400">
                <li className="flex items-start space-x-2">
                  <span className="text-red-500 shrink-0 mt-0.5">•</span>
                  <span><strong>Fixed limits:</strong> No matter if your region earns crores, you take home the same fixed amount.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-500 shrink-0 mt-0.5">•</span>
                  <span><strong>Boundary locks:</strong> Forced to report to office bosses and work defined territorial zipcodes.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-500 shrink-0 mt-0.5">•</span>
                  <span><strong>Silent redundancy:</strong> When active sales campaigns end, your active retainer contract vanishes.</span>
                </li>
              </ul>
            </div>

            {/* The Nexora Royalty Share Block */}
            <div className="p-5 rounded-xl border border-gold-500/20 bg-gradient-to-br from-gold-950/10 to-transparent text-left font-sans relative">
              <div className="absolute top-2 right-3 font-mono text-[8px] bg-gold-500/20 text-gold-400 px-1.5 py-0.5 rounded animate-pulse">
                NGPP PROTOCOL
              </div>
              
              <span className="text-[9px] font-mono text-gold-400 block mb-2 uppercase font-bold">
                ✦ THE NEXORA GROWTH SHARE PATHWAY
              </span>
              <h4 className="text-base font-bold text-white mb-3">Self-Compounding Passive Royalties</h4>
              <ul className="space-y-2 text-xs text-gray-300">
                <li className="flex items-start space-x-2">
                  <span className="text-gold-400 shrink-0 mt-0.5">✓</span>
                  <span><strong>Passive Compound:</strong> Earn overrides from every booking ticket. Your efforts pile up month-on-month.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-gold-400 shrink-0 mt-0.5">✓</span>
                  <span><strong>Infinite Boundaries:</strong> Onboard premium flagships anywhere in India directly with digital links.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-gold-400 shrink-0 mt-0.5">✓</span>
                  <span><strong>Ecosystem Sovereignty:</strong> You own your node list registry forever. High security, zero cancel risk.</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Interactive CTA to join Program */}
          <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left font-sans">
              <span className="text-[9px] font-mono text-gray-500 uppercase block">Ecosystem Status:</span>
              <span className="text-xs font-bold text-emerald-400 font-mono flex items-center space-x-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                <span>Onboarding Live • Free Registration Open</span>
              </span>
            </div>

            <button
              onClick={handleScrollToForm}
              className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-gold-500 to-purple-600 rounded-xl text-xs font-bold text-white hover:brightness-110 flex items-center justify-center space-x-2 cursor-pointer shadow-lg active:scale-[0.99] transition-all uppercase tracking-widest font-sans"
              id="btn-ngpp-mission-cta"
            >
              <span>Become Growth Partner</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
