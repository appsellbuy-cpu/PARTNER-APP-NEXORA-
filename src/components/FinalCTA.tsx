/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, Users, Network, ShieldCheck, Zap, MessageSquare, ArrowUpRight, 
  MapPin, Sparkles, HelpCircle, ChevronRight, Server, Play, Heart, Award
} from 'lucide-react';

export default function FinalCTA() {
  const [activeTab, setActiveTab] = useState<'salon' | 'partner' | 'distributor'>('salon');
  const [particles, setParticles] = useState<Array<{ id: number; left: number; top: number; delay: number; scale: number; duration: number }>>([]);

  const ctaSilhouettes = [
    { title: "SALON OWNERS", desc: "Digitalize billing seats", icon: Building2 },
    { title: "BEAUTY PARLOURS", desc: "Automate walk-in queues", icon: Award },
    { title: "BARBERS", desc: "Direct client schedulers", icon: Sparkles },
    { title: "SALES PROFESSIONALS", desc: "Build royalty district nodes", icon: Network },
    { title: "DISTRIBUTORS", desc: "Replenish automated inventory", icon: Server },
    { title: "BEAUTY BRANDS", desc: "Direct-to-outlet access", icon: ShieldCheck },
    { title: "CUSTOMERS", desc: "One-click safe booking checkout", icon: Users }
  ];

  useEffect(() => {
    // Generate static floating particles for high-end digital atmosphere
    const computedParticles = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
      scale: Math.random() * 1.5 + 0.5,
      duration: Math.random() * 12 + 8
    }));
    setParticles(computedParticles);
  }, []);

  // WhatsApp simulation action
  const handleWhatsAppAction = () => {
    const message = encodeURIComponent("Hello Nexora, I want to join the Digital Beauty Revolution! Salon Owner Ho?");
    window.open(`https://wa.me/919999999999?text=${message}`, '_blank');
  };

  return (
    <section className="relative py-32 bg-[#020204] overflow-hidden select-none border-b border-white/5" id="final-cta-climax-stage">
      
      {/* Massive depth and cinematic lighting background */}
      <div className="absolute inset-0 bg-radial-gradient(circle_at_50%_45%,rgba(147,51,234,0.065),transparent_65%) pointer-events-none" />
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[850px] h-[850px] bg-purple-900/[0.045] rounded-full blur-[140px] pointer-events-none -z-10" />
      
      {/* Dynamic digital space lines */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-purple-950/[0.1] to-transparent pointer-events-none -z-10" />

      {/* Floating Holographic Particle Fields */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ 
              opacity: [0.1, 0.45, 0.1], 
              y: [-12, -70, -12],
              x: [-10, 10, -10]
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "linear"
            }}
            className="absolute rounded-full bg-purple-400"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: `${2.5 * p.scale}px`,
              height: `${2.5 * p.scale}px`,
              filter: "blur(1px)"
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* CENTER VISUAL: FUTURISTIC CONNECTED CITY ECOSYSTEM STAGE */}
        <div className="relative flex flex-col items-center justify-center text-center max-w-5xl mx-auto mb-20" id="futuristic-ecosystem-city">
          
          {/* Pulsing energy waves container */}
          <div className="absolute top-[120px] sm:top-[160px] w-full max-w-[500px] h-[320px] flex items-center justify-center pointer-events-none">
            <div className="absolute w-[180px] h-[180px] border border-purple-500/25 rounded-full animate-ping-slow pointer-events-none" style={{ animationDuration: '6s' }} />
            <div className="absolute w-[280px] h-[280px] border border-purple-500/10 rounded-full animate-ping-slow pointer-events-none" style={{ animationDuration: '9s' }} />
            <div className="absolute w-[380px] h-[380px] border-2 border-indigo-500/[0.04] rounded-full animate-ping-slow pointer-events-none" style={{ animationDuration: '14s' }} />
          </div>

          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-purple-400 bg-purple-500/10 px-4 py-1.5 rounded-full border border-purple-500/25 inline-block mb-3.5 font-black">
            NEXORA GLOBAL RECONCILIATION GATEWAY
          </span>

          {/* MAIN VIBRANT HEADLINE WITH VIOLET GLOW */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black text-white uppercase tracking-tight leading-none text-shadow-[0_0_50px_rgba(168,85,247,0.35)] drop-shadow-[0_4px_30px_rgba(147,51,234,0.45)] select-text">
            BEAUTY INDUSTRY <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-purple-200 via-white to-purple-400 bg-clip-text text-transparent">DIGITAL HO RAHI HAI</span>
          </h1>

          {/* SUBHEADLINE WITH PERFECT HIGH-IMPACT LAYOUT */}
          <div className="mt-8 space-y-1.5" id="final-subheadline-matrix">
            <p className="text-gray-400 text-base sm:text-xl font-sans tracking-wide">
              Salon Owner Ho? <span className="text-white font-black mx-1">•</span> Salesman Ho? <span className="text-white font-black mx-1">•</span> Distributor Ho?
            </p>
            <p className="text-lg sm:text-2xl font-mono font-black text-purple-400 uppercase tracking-widest mt-1.5">
              Nexora Network Ka Hissa Bano.
            </p>
          </div>

          {/* INTERACTIVE HUB SYSTEM LAYOUT MAP */}
          <div className="relative w-full max-w-[650px] h-[190px] my-10 flex items-center justify-center">
            
            {/* CENTRAL LOGO WITH ELECTRIC GLOW */}
            <motion.div 
              animate={{ 
                boxShadow: ["0 0 20px rgba(168,85,247,0.3)", "0 0 45px rgba(168,85,247,0.65)", "0 0 20px rgba(168,85,247,0.3)"] 
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute w-24 h-24 rounded-full bg-gradient-to-b from-[#181822] to-[#0a0a0f] border-2 border-purple-500 flex flex-col items-center justify-center p-3 text-center z-30 shadow-[0_0_35px_rgba(168,85,247,0.4)]"
            >
              <div className="font-display font-black text-white text-[13px] tracking-widest leading-none">NEXORA</div>
              <div className="text-[7.5px] font-mono text-gray-400 uppercase mt-1 tracking-wider font-bold">ECOSYSTEM</div>
              <div className="absolute inset-0 rounded-full border border-purple-500/10 animate-ping" />
            </motion.div>

            {/* CONNECTIVITY LINES / ORBITS */}
            <div className="absolute inset-0 flex items-center justify-between px-2 sm:px-6 pointer-events-none select-none">
              
              {/* Left Side Connectors */}
              <div className="space-y-4 text-left">
                <div className="flex items-center gap-2 p-1.5 bg-black/60 border border-purple-500/10 rounded-lg backdrop-blur-sm shadow-md">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                  <span className="text-[9px] font-mono text-gray-300 font-bold">SALON STATIONS</span>
                </div>
                <div className="flex items-center gap-2 p-1.5 bg-black/60 border border-purple-500/10 rounded-lg backdrop-blur-sm shadow-md translate-x-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
                  <span className="text-[9px] font-mono text-gray-300 font-bold">ACTIVE CUSTOMERS</span>
                </div>
                <div className="flex items-center gap-2 p-1.5 bg-black/60 border border-purple-500/10 rounded-lg backdrop-blur-sm shadow-md">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                  <span className="text-[9px] font-mono text-gray-300 font-bold">DISTRICT LEADERS</span>
                </div>
              </div>

              {/* Right Side Connectors */}
              <div className="space-y-4 text-right">
                <div className="flex items-center gap-2 p-1.5 bg-black/60 border border-purple-500/10 rounded-lg backdrop-blur-sm shadow-md justify-end">
                  <span className="text-[9px] font-mono text-gray-300 font-bold">VOCATIONAL ACADEMY</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <div className="flex items-center gap-2 p-1.5 bg-black/60 border border-purple-500/10 rounded-lg backdrop-blur-sm shadow-md -translate-x-4 justify-end">
                  <span className="text-[9px] font-mono text-gray-300 font-bold">SUPPLY DISTRIBUTORS</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                </div>
                <div className="flex items-center gap-2 p-1.5 bg-black/60 border border-purple-500/10 rounded-lg backdrop-blur-sm shadow-md justify-end">
                  <span className="text-[9px] font-mono text-gray-300 font-bold">VACANT JOBS</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
                </div>
              </div>

            </div>

          </div>

          {/* ACTION BUTTON GRID IN LINE WITH CLINICAL STANDARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 w-full max-w-4xl px-4 mt-8" id="climax-cta-actions">
            
            {/* BUTTON 1: JOIN SALONOS */}
            <a
              href="#alliance-registration"
              className="group py-4 px-6 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-black text-sm rounded-2xl cursor-pointer transition-all duration-300 shadow-[0_0_30px_rgba(168,85,247,0.35)] flex items-center justify-center gap-2.5 min-h-[52px] border border-purple-400/20 active:scale-95"
              id="btn-final-cta-join-salonos"
            >
              <Zap className="w-4.5 h-4.5 text-white animate-pulse" />
              <span className="font-mono tracking-widest uppercase">JOIN SALONOS</span>
              <ChevronRight className="w-4 h-4 text-white group-hover:translate-x-1.5 transition-transform" />
            </a>

            {/* BUTTON 2: BECOME GROWTH PARTNER */}
            <a
              href="#alliance-registration"
              className="group py-4 px-6 bg-[#0c0c0f]/85 border-2 border-purple-500/30 hover:border-purple-500 text-white font-black text-sm rounded-2xl cursor-pointer transition-all duration-300 hover:bg-[#121217]/90 flex items-center justify-center gap-2.5 min-h-[52px] active:scale-95"
              id="btn-final-cta-partner"
            >
              <Network className="w-4.5 h-4.5 text-purple-400 group-hover:rotate-12 transition-transform" />
              <span className="font-mono tracking-widest uppercase">BECOME PARTNER</span>
              <ArrowUpRight className="w-4.5 h-4.5 text-purple-400 group-hover:translate-y-[-2px] group-hover:translate-x-[2px] transition-transform" />
            </a>

            {/* BUTTON 3: WHATSAPP NOW */}
            <button
              onClick={handleWhatsAppAction}
              className="group py-4 px-6 bg-emerald-950/20 border-2 border-emerald-500/35 hover:bg-emerald-500 hover:text-black hover:border-emerald-500 text-emerald-450 font-black text-sm rounded-2xl cursor-pointer transition-all duration-300 flex items-center justify-center gap-2.5 min-h-[52px] active:scale-95 shadow-[0_0_20px_rgba(16,185,129,0.08)]"
              id="btn-final-cta-whatsapp"
            >
              <MessageSquare className="w-4.5 h-4.5 group-hover:scale-115 transition-transform" />
              <span className="font-mono tracking-widest uppercase">WHATSAPP NOW</span>
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            </button>

          </div>

        </div>

        {/* VISUAL STORYTELLING SILHOUETTE PANEL */}
        <div className="bg-[#07070b]/40 border border-white/5 rounded-[36px] p-6 sm:p-10 mb-16 relative overflow-hidden text-center" id="visual-storytelling-manifesto">
          <div className="absolute inset-0 bg-radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.01),transparent_80%) pointer-events-none" />
          
          <span className="text-[9px] font-mono tracking-widest text-purple-505 uppercase block mb-3 font-bold select-none">
            ✦ HIGH RES MASSIVE SYSTEM CONVERGENCE MOVEMENT
          </span>
          <h3 className="text-xl sm:text-2xl font-black font-display text-white uppercase mb-8" id="manifesto-card-headline">
            EVERYONE IS JOINING THE NETWORK
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
            {ctaSilhouettes.map((sil, index) => {
              const SilIcon = sil.icon;
              return (
                <div 
                  key={index}
                  className="p-4 bg-black/40 border border-white/[0.04] rounded-2xl flex flex-col items-center text-center hover:border-purple-500/20 hover:bg-black/80 transition-all cursor-pointer group"
                  id={`silhouette-card-${index}`}
                >
                  <div className="p-3 bg-purple-500/5 group-hover:bg-purple-500/10 border border-purple-500/10 group-hover:border-purple-500/20 rounded-xl mb-3.5 transition-all text-purple-400 group-hover:text-purple-350">
                    <SilIcon className="w-5 h-5" />
                  </div>
                  <h4 className="text-[10px] font-mono text-white tracking-widest uppercase leading-snug font-black">
                    {sil.title}
                  </h4>
                  <p className="text-[9px] text-gray-500 mt-1 leading-normal font-sans font-medium">
                    {sil.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex justify-center items-center gap-2 select-none text-[10px] font-mono text-gray-550 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-ping" />
            <span>GLOBAL TRANSACTIONS SETTLING SIMULTANEOUSLY PRE-VITE CORE</span>
          </div>
        </div>

        {/* BOTTOM MOVEMENT CLOSING EMBLEM */}
        <div className="text-center max-w-lg mx-auto pt-4 border-t border-white/5 select-none" id="final-cta-closing-footer">
          <p className="text-xs sm:text-sm font-sans font-black tracking-widest text-white uppercase">
            The Future Of Beauty Business Is Connected.
          </p>
          <span className="text-[10px] font-mono text-purple-400 block mt-1 uppercase font-bold tracking-widest">
            Powered By Nexora.
          </span>
        </div>

      </div>
    </section>
  );
}
