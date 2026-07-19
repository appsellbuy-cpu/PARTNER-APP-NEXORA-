/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, Building, Users, Scissors, GraduationCap, 
  BookOpen, Truck, ShoppingBag, BadgePercent, Globe, 
  Briefcase, ChevronRight, CheckCircle2, Network, ShieldCheck
} from 'lucide-react';

export interface EcosystemNode {
  id: string;
  label: string;
  icon: any;
  color: string;
  borderColor: string;
  glowColor: string;
  badge: string;
  description: string;
  benefit: string;
}

interface EcosystemNetworkProps {
  layout?: 'hero' | 'section';
}

export default function EcosystemNetwork({ layout = 'section' }: EcosystemNetworkProps) {
  const [activeNodeId, setActiveNodeId] = useState<string>('salon-owners');
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [laserKey, setLaserKey] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Restart laser path animations of the ecosystem periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setLaserKey(prev => prev + 1);
    }, 12000);
    return () => clearInterval(interval);
  }, []);

  const nodes: EcosystemNode[] = [
    {
      id: "salon-owners",
      label: "Salon Owners",
      badge: "Commercial Node 01",
      icon: Building,
      color: "text-amber-400",
      borderColor: "border-amber-400/30",
      glowColor: "rgba(251,191,36,0.15)",
      description: "Indian salon masters securing instant WhatsApp scheduler booking feeds, local geographic map priority, active seat trackers, and continuous automated payouts.",
      benefit: "Eliminate expensive subscription rents and double-booking errors. Boost seat occupancy limit by 42%."
    },
    {
      id: "customers",
      label: "Customers",
      badge: "Demand Endpoint 02",
      icon: Users,
      color: "text-emerald-400",
      borderColor: "border-emerald-400/30",
      glowColor: "rgba(52,211,153,0.15)",
      description: "A digital booking terminal of localized consumers looking for nearby styling slots, professional staff catalogs, and certified beauty services.",
      benefit: "Schedule seats 24/7. Earn beauty multiplier reward points redeemable across any active local partner salon."
    },
    {
      id: "staff",
      label: "Staff",
      badge: "Operational Node 03",
      icon: Scissors,
      color: "text-indigo-400",
      borderColor: "border-indigo-400/30",
      glowColor: "rgba(129,140,248,0.15)",
      description: "Elite stylists, hair artists, and nail specialists handling their daily appointments, custom work shifts, and transparent commission reports on the go.",
      benefit: "Maintain dynamic portfolios, access clear real-time payout schedules, and receive tip and bonus cash instantly."
    },
    {
      id: "students",
      label: "Students",
      badge: "Aspiring Talent Node 04",
      icon: GraduationCap,
      color: "text-pink-400",
      borderColor: "border-pink-400/30",
      glowColor: "rgba(244,114,182,0.15)",
      description: "Ambitious styling candidates learning physical craft and cosmetic courses seeking direct workspace apprenticeships and internships.",
      benefit: "Get direct training opportunities inside approved flagships, view current industry guidelines, and land verified careers."
    },
    {
      id: "beauty-academies",
      label: "Beauty Academies",
      badge: "Educational Hub 05",
      icon: BookOpen,
      color: "text-purple-400",
      borderColor: "border-purple-400/30",
      glowColor: "rgba(192,132,252,0.15)",
      description: "Professional training colleges and standard sector institutes managing and authorizing student courses and portfolios.",
      benefit: "Onboard new students, publish certified skill lists, and route high-potential graduates straight into prime salon vacancies."
    },
    {
      id: "distributors",
      label: "Distributors",
      badge: "Supply Pipeline Node 06",
      icon: Truck,
      color: "text-cyan-400",
      borderColor: "border-cyan-400/30",
      glowColor: "rgba(34,211,238,0.15)",
      description: "Authorized regional wholesaling channels dispatching bulk developer formulas, shears, waxes, and parlor equipment to active member shops.",
      benefit: "Bypass typical mid-tier brokerage fees through direct automated stock replacement orders driven right by salon databases."
    },
    {
      id: "brands",
      label: "Brands",
      badge: "Commercial Alliance 07",
      icon: ShoppingBag,
      color: "text-rose-400",
      borderColor: "border-rose-400/30",
      glowColor: "rgba(251,113,133,0.15)",
      description: "Global cosmetic manufacturers and innovative national product ranges seeking premium launch spaces inside leading local beauty establishments.",
      benefit: "Inject menu items and retail banners straight into high-volume locations, tracking anonymous point-of-sale customer receipts."
    },
    {
      id: "sales-partners",
      label: "Sales Partners",
      badge: "Growth Catalysts 08",
      icon: BadgePercent,
      color: "text-yellow-400",
      borderColor: "border-yellow-400/30",
      glowColor: "rgba(250,204,21,0.15)",
      description: "Dynamic offline distributors and field professionals earning continuous percentages by helping nearby salons modernize with Nexora.",
      benefit: "Monitor active salon ledgers and collect lifetime recurring royalties from every transaction booked by your network."
    },
    {
      id: "district-partners",
      label: "District Partners",
      badge: "Ecosystem Guardians 09",
      icon: Globe,
      color: "text-sky-400",
      borderColor: "border-sky-400/30",
      glowColor: "rgba(56,189,248,0.15)",
      description: "District heads managing franchise operations, validating regional parlor registrations, and maintaining distribution protocols.",
      benefit: "Acquire master franchise licensing models and earn overriding transaction shares in your entire administrative area."
    },
    {
      id: "job-seekers",
      label: "Job Seekers",
      badge: "Career Endpoint 10",
      icon: Briefcase,
      color: "text-teal-400",
      borderColor: "border-teal-400/30",
      glowColor: "rgba(45,212,191,0.15)",
      description: "Certified hair cut specialists, beauticians, and front lobby coordinators searching for stable incomes and vetted salons.",
      benefit: "Instantly search verified hiring salons, present certified digital portfolios, and secure 1-click booking interviews."
    }
  ];

  const activeNode = nodes.find(n => n.id === activeNodeId) || nodes[0];

  // Symmetrical layout circle parameters for wheel display (Desktop)
  const getCoordinates = (index: number, total: number) => {
    const radius = 175; // Symmetrical radius
    const centerX = 250;
    const centerY = 240;
    const angle = (index * 2 * Math.PI) / total - Math.PI / 2; // Star-aligned starting at 12 o'clock
    return {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle)
    };
  };

  if (layout === 'hero') {
    // Elegant compressed version to fit the sidebar in Hero section cleanly
    return (
      <div className="w-full relative py-6" id="hero-mini-wheel">
        <div className="relative w-full max-w-[460px] aspect-square mx-auto rounded-3xl border border-white/5 bg-luxury-black/30 backdrop-blur-xl p-4 flex items-center justify-center overflow-visible shadow-2xl">
          
          {/* Symmetrical Web SVG lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 500 500">
            <defs>
              <radialGradient id="miniPurpleGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#a855f7" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Inner dynamic paths */}
            <circle cx="250" cy="240" r="85" fill="none" stroke="rgba(255,255,255,0.01)" strokeWidth="1" />
            <circle cx="250" cy="240" r="175" fill="none" stroke="rgba(255,255,255,0.015)" strokeWidth="1.5" strokeDasharray="6 6" />
            <circle cx="250" cy="240" r="45" fill="url(#miniPurpleGlow)" />

            {/* Connection lines to top 10 nodes */}
            {nodes.map((node, i) => {
              const coords = getCoordinates(i, nodes.length);
              const isSelected = activeNodeId === node.id || hoveredNodeId === node.id;
              return (
                <line
                  key={`hero-line-${node.id}`}
                  x1="250"
                  y1="240"
                  x2={coords.x}
                  y2={coords.y}
                  stroke={isSelected ? "#a855f7" : "rgba(255,255,255,0.05)"}
                  strokeWidth={isSelected ? "1.5" : "1"}
                  className="transition-all duration-300"
                />
              );
            })}
          </svg>

          {/* Central Orbit Sphere */}
          <button 
            className="absolute z-20 w-24 h-24 rounded-full border border-purple-500 bg-purple-950/80 backdrop-blur-md flex flex-col items-center justify-center shadow-[0_0_25px_rgba(168,85,247,0.3)] transition-all cursor-pointer"
            onClick={() => setActiveNodeId('salon-owners')}
          >
            <Sparkles className="w-5 h-5 text-gold-400 mb-1 animate-spin-slow" />
            <span className="text-[9px] font-bold tracking-widest text-[#d39d2c]">NEXORA</span>
            <span className="text-[7px] text-purple-400 font-mono tracking-widest uppercase">ACTIVE</span>
          </button>

          {/* Render the nodes around the central orbit */}
          {nodes.map((node, i) => {
            const coords = getCoordinates(i, nodes.length);
            const isSelected = activeNodeId === node.id;
            const Icon = node.icon;
            
            return (
              <motion.button
                key={`hero-node-${node.id}`}
                onClick={() => setActiveNodeId(node.id)}
                onMouseEnter={() => setHoveredNodeId(node.id)}
                onMouseLeave={() => setHoveredNodeId(null)}
                style={{
                  position: 'absolute',
                  left: `${(coords.x / 500) * 100}%`,
                  top: `${(coords.y / 500) * 100}%`,
                  transform: 'translate(-50%, -50%)',
                }}
                whileHover={{ scale: 1.15 }}
                className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 cursor-pointer ${
                  isSelected 
                    ? `${node.color} ${node.borderColor} bg-luxury-card shadow-[0_0_15px_${node.glowColor}] scale-110 z-20` 
                    : 'border-white/5 bg-[#121214] text-gray-400 hover:text-white'
                }`}
                id={`hero-wheel-node-${node.id}`}
                title={node.label}
              >
                <Icon className="w-4 h-4" />
                
                {/* Micro Label */}
                {isSelected && (
                  <span className="absolute -bottom-7 whitespace-nowrap bg-luxury-black/90 text-white font-mono text-[9px] px-1.5 py-0.5 rounded border border-white/5 z-30">
                    {node.label}
                  </span>
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
    );
  }

  // --- FULL DEDICATED SECTION 4 MODE ---
  return (
    <section className="relative py-24 bg-luxury-black bg-grid-bg border-b border-white/5 overflow-hidden" id="ecosystem-wheel-section">
      
      {/* Background Ambience Spheres */}
      <div className="absolute top-[10%] left-[-15%] w-96 h-96 bg-purple-900/10 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-15%] w-96 h-96 bg-gold-400/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-mono uppercase tracking-widest text-gold-450 bg-gold-550/5 px-3 py-1 rounded-full border border-gold-500/10 inline-block mb-4">
            Unified Beauty OS Network
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium tracking-tight text-white mb-4">
            Beauty Industry Ecosystem
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-sans">
            Every layer of the Indian wellness market connected on one unified framework. Experience real-time integration that drives automatic values between suppliers, stylists, and consumers.
          </p>
        </div>

        {/* ECOSYSTEM INTERACTIVE SPLIT HUB */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" ref={containerRef}>
          
          {/* THE DIGITAL WHEEL (Left 7 Columns) */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center">
            
            {/* Desktop Wheel Frame */}
            <div className="relative w-full max-w-[480px] aspect-square rounded-3xl border border-white/5 bg-[#121214]/30 backdrop-blur-3xl flex items-center justify-center p-4 shadow-2xl overflow-visible">
              
              {/* SVG connection grids */}
              <svg 
                className="absolute inset-0 w-full h-full pointer-events-none z-0" 
                viewBox="0 0 500 500"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <radialGradient id="sectionPurpleGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#a855f7" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Symmetrical target circles */}
                <circle cx="250" cy="240" r="100" fill="none" stroke="rgba(255,255,255,0.01)" strokeWidth="1" strokeDasharray="3 4" />
                <circle cx="250" cy="240" r="175" fill="none" stroke="rgba(255,255,255,0.02)" strokeWidth="1.5" strokeDasharray="6 6" />
                
                {/* Purple core glow halo */}
                <circle cx="250" cy="240" r="60" fill="url(#sectionPurpleGlow)" className="animate-pulse" />

                {/* Interactive laser wires flowing between nodes */}
                {nodes.map((node, i) => {
                  const coords = getCoordinates(i, nodes.length);
                  const isHighlighted = activeNodeId === node.id || hoveredNodeId === node.id;
                  
                  return (
                    <g key={`pathg-${node.id}`}>
                      {/* Standard link cable */}
                      <line
                        x1="250"
                        y1="240"
                        x2={coords.x}
                        y2={coords.y}
                        stroke={isHighlighted ? "#a855f7" : "rgba(255,255,255,0.05)"}
                        strokeWidth={isHighlighted ? "2" : "1"}
                        strokeDasharray={isHighlighted ? "none" : "4 4"}
                        className="transition-all duration-300"
                      />

                      {/* Moving laser tokens pulsing outwards to nodes */}
                      {isHighlighted && (
                        <circle r="4.5" fill="#d39d2c" className="glow-effect">
                          <animateMotion
                            key={`laser2-${node.id}-${laserKey}`}
                            dur={`${1.8 + i * 0.15}s`}
                            repeatCount="indefinite"
                            path={`M 250 240 L ${coords.x} ${coords.y}`}
                          />
                        </circle>
                      )}
                    </g>
                  );
                })}
              </svg>

              {/* The Central Sovereign Engine Capsule */}
              <button 
                className="absolute z-20 w-28 h-28 rounded-full border border-purple-500 bg-purple-950/90 text-white flex flex-col items-center justify-center text-center shadow-[0_0_35px_rgba(168,85,247,0.4)] transition-transform duration-300 transform hover:scale-105 active:scale-95 cursor-pointer"
                onClick={() => setActiveNodeId('salon-owners')}
                id="central-hub-button"
              >
                <div className="p-1 rounded-full bg-gold-450/10 mb-1 border border-gold-400/20">
                  <Network className="w-5 h-5 text-gold-400 animate-spin-slow" />
                </div>
                <span className="text-[11px] font-bold tracking-widest text-[#d39d2c]">NEXORA</span>
                <span className="text-[8px] text-purple-400 font-mono tracking-widest uppercase">ECOSYSTEM</span>
              </button>

              {/* Symmetrical Spacing Render Nodes */}
              {nodes.map((node, i) => {
                const coords = getCoordinates(i, nodes.length);
                const isSelected = activeNodeId === node.id;
                const isHovered = hoveredNodeId === node.id;
                const Icon = node.icon;

                return (
                  <motion.button
                    key={`wheel-node-${node.id}`}
                    onClick={() => setActiveNodeId(node.id)}
                    onMouseEnter={() => setHoveredNodeId(node.id)}
                    onMouseLeave={() => setHoveredNodeId(null)}
                    style={{
                      position: 'absolute',
                      left: `${(coords.x / 500) * 100}%`,
                      top: `${(coords.y / 500) * 100}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    whileHover={{ scale: 1.15 }}
                    className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-350 cursor-pointer ${
                      isSelected 
                        ? `${node.color} ${node.borderColor} bg-luxury-card shadow-[0_0_20px_${node.glowColor}] scale-110 z-20 border-2` 
                        : isHovered 
                        ? 'border-gray-400 bg-[#161618] text-white z-10' 
                        : 'border-white/5 bg-[#121214] text-gray-400 hover:text-white'
                    }`}
                    id={`btn-ecosystem-wheel-${node.id}`}
                  >
                    <Icon className="w-5 h-5" />
                    
                    {/* Floating micro-title badge */}
                    <span 
                      className={`absolute top-12 whitespace-nowrap text-[9px] font-mono px-1.5 py-0.5 rounded border transition-all duration-300 ${
                        isSelected 
                          ? 'text-white bg-black/90 border-gold-500/30 scale-105 font-bold' 
                          : 'text-gray-400 bg-black/40 border-transparent scale-95'
                      }`}
                    >
                      {node.label}
                    </span>
                  </motion.button>
                );
              })}

            </div>

            {/* Micro instruction text helper */}
            <p className="text-[11px] font-mono text-gray-500 mt-8 flex items-center space-x-1.5 justify-center">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-450 animate-ping" />
              <span>Tap outer nodes around the wheel to inspect cooperative advantages</span>
            </p>
          </div>

          {/* DYNAMIC CARD SIDEBAR DETAIL DISPLAY (Right 5 Columns) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeNodeId}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-b from-[#121214]/90 to-[#0e0e10]/95 border border-white/5 rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-2xl backdrop-blur-xl"
              >
                
                {/* Interactive left accent glow indicator */}
                <div 
                  className={`absolute left-0 top-0 h-full w-1.5 transition-all duration-500 ${
                    activeNodeId === 'salon-owners' ? 'bg-amber-400' :
                    activeNodeId === 'customers' ? 'bg-emerald-400' :
                    activeNodeId === 'staff' ? 'bg-indigo-400' :
                    activeNodeId === 'students' ? 'bg-pink-400' :
                    activeNodeId === 'beauty-academies' ? 'bg-purple-400' :
                    activeNodeId === 'distributors' ? 'bg-cyan-400' :
                    activeNodeId === 'brands' ? 'bg-rose-400' :
                    activeNodeId === 'sales-partners' ? 'bg-yellow-400' :
                    activeNodeId === 'district-partners' ? 'bg-sky-400' : 'bg-teal-400'
                  }`}
                />

                {/* Top tracking state label */}
                <div className="flex items-center justify-between mb-4 pl-1">
                  <span className={`text-[10px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded border ${
                    activeNodeId === 'salon-owners' ? 'border-amber-500/20 text-amber-400 bg-amber-500/5' :
                    activeNodeId === 'customers' ? 'border-emerald-500/20 text-emerald-400 bg-emerald-500/5' :
                    activeNodeId === 'staff' ? 'border-indigo-500/20 text-indigo-400 bg-indigo-500/5' :
                    activeNodeId === 'students' ? 'border-pink-500/20 text-pink-400 bg-pink-500/5' :
                    activeNodeId === 'beauty-academies' ? 'border-purple-500/20 text-purple-400 bg-purple-500/5' :
                    activeNodeId === 'distributors' ? 'border-cyan-500/20 text-cyan-400 bg-cyan-500/5' :
                    activeNodeId === 'brands' ? 'border-rose-500/20 text-rose-400 bg-rose-500/5' :
                    activeNodeId === 'sales-partners' ? 'border-yellow-500/20 text-yellow-400 bg-yellow-500/5' :
                    activeNodeId === 'district-partners' ? 'border-sky-500/20 text-sky-400 bg-sky-500/5' : 'border-teal-500/20 text-teal-400 bg-teal-500/5'
                  }`}>
                    {activeNode.badge}
                  </span>
                  
                  <span className="text-[10px] font-mono text-gray-500">
                    Sovereign Layer ✦
                  </span>
                </div>

                {/* Node Label Title */}
                <h3 className="text-2xl font-display font-medium text-white mb-4 pl-1 flex items-center space-x-2">
                  <span className={activeNode.color}>{activeNode.label}</span>
                </h3>

                {/* Descriptions Block */}
                <div className="space-y-6 pl-1 mt-4">
                  
                  <div>
                    <h4 className="text-[11px] font-mono uppercase tracking-wider text-gray-500 mb-1.5 font-bold">
                      Functional Core Definition
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed font-sans">
                      {activeNode.description}
                    </p>
                  </div>

                  <div className="bg-luxury-black/60 p-4 rounded-xl border border-white/5 relative">
                    <h4 className="text-[11px] font-mono uppercase tracking-wider text-gold-400 mb-1.5 font-bold">
                      Cooperative Leverage
                    </h4>
                    <p className="text-gray-200 text-xs sm:text-sm leading-relaxed font-sans italic border-l border-gold-500/30 pl-3">
                      "{activeNode.benefit}"
                    </p>
                  </div>

                  {/* Operational CTA router */}
                  <div className="pt-4 border-t border-white/5 mt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-xs text-gray-400 text-center sm:text-left">
                      Ready to utilize this node advantage?
                    </span>
                    
                    <a
                      href="#contact-form-section"
                      className="w-full sm:w-auto px-4 py-2 bg-gradient-to-r from-gold-500 to-purple-600 rounded-xl text-xs font-bold text-white text-center hover:opacity-90 transition-opacity whitespace-nowrap block"
                      id="btn-node-onboard-cta"
                    >
                      Initialize Onboarding ✦
                    </a>
                  </div>

                </div>

              </motion.div>
            </AnimatePresence>

            {/* Quick System Badge */}
            <div className="mt-4 p-4 rounded-xl border border-gold-500/15 bg-gold-550/5 flex items-start space-x-3">
              <ShieldCheck className="w-5 h-5 text-gold-450 shrink-0 mt-0.5" />
              <div className="text-xs text-gray-400 leading-relaxed font-sans">
                <span className="font-bold text-white block mb-0.5">Automated Ecosystem Sync</span>
                Transactions automatically calculate split coefficients, routing rewards to customers, royalties to sales agents, and stocks to distributors instantly.
              </div>
            </div>

          </div>

        </div>

        {/* SECTION BOTTOM TAGLINE HIGHLIGHT */}
        <div className="mt-16 bg-gradient-to-r from-purple-950/10 via-luxury-card to-gold-950/10 p-6 sm:p-8 rounded-3xl border border-white/10 text-center relative overflow-hidden" id="ecosystem-tagline-block">
          <div className="absolute inset-0 bg-[#060608] opacity-60 -z-10" />
          
          <span className="text-[10px] font-mono text-gold-400 uppercase tracking-widest block mb-2 font-bold">
            The Sovereign Formula
          </span>
          <h3 className="text-2xl sm:text-3xl font-display font-medium text-white mb-2">
            One Platform. Unlimited Opportunities.
          </h3>
          <p className="text-gray-400 text-xs sm:text-sm max-w-xl mx-auto font-sans">
            By aggregating salon operations, wholesale pipelines, student training programs, and customer reviews into a single digital ledger, Nexora serves as India's premier beauty market platform.
          </p>
        </div>

      </div>
    </section>
  );
}
