/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, Users, CalendarCheck, Network, Star, Quote, ChevronRight, 
  Sparkles, ShieldCheck, ArrowUpRight, Trophy, HeartHandshake, Smile,
  Activity, ArrowRight, Server, CheckCircle2, MapPin, Zap, Award, Globe
} from 'lucide-react';

interface MetricCard {
  id: string;
  value: string;
  targetNum: number;
  prefix: string;
  suffix: string;
  label: string;
  subValue: string;
  icon: React.ComponentType<any>;
  description: string;
  sparklineData: number[];
  color: string;
  glow: string;
}

interface Testimonial {
  id: string;
  name: string;
  role: string;
  shopName: string;
  location: string;
  avatar: string;
  rating: number;
  quote: string;
  badge: string;
  statsLabel: string;
}

interface LiveEvent {
  id: string;
  type: 'salon' | 'booking' | 'commission' | 'academy' | 'distributor';
  message: string;
  time: string;
  badgeColor: string;
}

export default function SocialProof() {
  const [activeTab, setActiveTab] = useState<'all' | 'owners' | 'partners' | 'customers'>('all');
  const [hoveredMetric, setHoveredMetric] = useState<string | null>(null);
  
  // Real-time ticking indicators
  const [salonsCount, setSalonsCount] = useState<number>(1042);
  const [customersCount, setCustomersCount] = useState<number>(108390);
  const [bookingsCount, setBookingsCount] = useState<number>(514802);
  const [partnersCount, setPartnersCount] = useState<number>(264);

  // Live Activity Feed Elements
  const [liveEvents, setLiveEvents] = useState<LiveEvent[]>([
    {
      id: 'evt-1',
      type: 'salon',
      message: 'Glamour House Spa registered as Active Node',
      time: 'Just now',
      badgeColor: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20'
    },
    {
      id: 'evt-2',
      type: 'booking',
      message: 'HydraFacial booking cleared at Bounce Premier',
      time: '1m ago',
      badgeColor: 'bg-pink-500/10 text-pink-400 border-pink-500/20'
    },
    {
      id: 'evt-3',
      type: 'commission',
      message: 'Commission payout routed to Partner GP-4821',
      time: '3m ago',
      badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
    },
    {
      id: 'evt-4',
      type: 'academy',
      message: 'Stylist Meera Sethi completed Master Certification',
      time: '5m ago',
      badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20'
    },
    {
      id: 'evt-5',
      type: 'distributor',
      message: 'L\'Oréal Authorized Distributor linked node BLR',
      time: '8m ago',
      badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20'
    }
  ]);

  // Network map nodes state for interactive highlighting
  const [hoveredMapNode, setHoveredMapNode] = useState<string | null>(null);

  // Periodic simulated live ticks
  useEffect(() => {
    const interval = setInterval(() => {
      // Random incremental ticks representing live production scale
      setSalonsCount(prev => prev + (Math.random() > 0.8 ? 1 : 0));
      setCustomersCount(prev => prev + Math.floor(Math.random() * 3) + 1);
      setBookingsCount(prev => prev + Math.floor(Math.random() * 5) + 2);
      setPartnersCount(prev => prev + (Math.random() > 0.95 ? 1 : 0));

      // Append new event to live activity feed and shift old ones
      const eventPool: Omit<LiveEvent, 'id' | 'time'>[] = [
        {
          type: 'booking',
          message: 'Stylist reservation checked in at Monsoon Parlor',
          badgeColor: 'bg-pink-500/10 text-pink-400 border-pink-500/20'
        },
        {
          type: 'commission',
          message: 'Direct wallet override of ₹1,840 settled',
          badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
        },
        {
          type: 'salon',
          message: 'Green Trends Salon authorized new billing terminal',
          badgeColor: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20'
        },
        {
          type: 'academy',
          message: 'Barber Grooming Academy graduated 12 specialists',
          badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20'
        },
        {
          type: 'distributor',
          message: 'Estée Lauder local franchise linked inventory checkout',
          badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20'
        }
      ];

      const selectedEvent = eventPool[Math.floor(Math.random() * eventPool.length)];
      setLiveEvents(prev => [
        {
          id: `evt-${Date.now()}`,
          ...selectedEvent,
          time: 'Just now'
        },
        ...prev.map(evt => {
          if (evt.time === 'Just now') return { ...evt, time: '1m ago' };
          if (evt.time === '1m ago') return { ...evt, time: '3m ago' };
          if (evt.time === '3m ago') return { ...evt, time: '5m ago' };
          if (evt.time === '5m ago') return { ...evt, time: '8m ago' };
          return { ...evt, time: '12m ago' };
        }).slice(0, 4) // Keep up to 5 events
      ]);

    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const metrics: MetricCard[] = [
    {
      id: "metric-salons",
      value: salonsCount.toLocaleString(),
      targetNum: 1000,
      prefix: "",
      suffix: "+",
      label: "Active Salons",
      subValue: "Verified Outlets",
      icon: Building2,
      description: "Premium salons, spas, and aesthetic lounges connected to our ledger.",
      sparklineData: [45, 52, 60, 58, 65, 78, 85, 95, 105],
      color: "text-indigo-400",
      glow: "hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] hover:border-indigo-500/30"
    },
    {
      id: "metric-customers",
      value: customersCount.toLocaleString(),
      targetNum: 100000,
      prefix: "",
      suffix: "+",
      label: "Active Customers",
      subValue: "Registered User Accounts",
      icon: Users,
      description: "Direct end-consumers transacting via Nexora mobile smartphone app.",
      sparklineData: [32, 48, 55, 68, 72, 85, 90, 110, 125],
      color: "text-purple-400",
      glow: "hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:border-purple-500/30"
    },
    {
      id: "metric-bookings",
      value: bookingsCount.toLocaleString(),
      targetNum: 500000,
      prefix: "",
      suffix: "+",
      label: "Total Bookings",
      subValue: "Reservations Met",
      icon: CalendarCheck,
      description: "Frictionless checkout tickets dispatched, verified and audited by AI.",
      sparklineData: [50, 70, 85, 110, 140, 180, 220, 280, 310],
      color: "text-rose-400",
      glow: "hover:shadow-[0_0_30px_rgba(244,63,94,0.15)] hover:border-rose-500/30"
    },
    {
      id: "metric-partners",
      value: partnersCount.toLocaleString(),
      targetNum: 250,
      prefix: "",
      suffix: "+",
      label: "Growth Partners",
      subValue: "District Promoters",
      icon: Network,
      description: "Independent business coordinates operators receiving daily passive overrides.",
      sparklineData: [20, 30, 45, 50, 68, 82, 101, 115, 130],
      color: "text-emerald-400",
      glow: "hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] hover:border-emerald-500/30"
    },
    {
      id: "metric-rating",
      value: "4.9",
      targetNum: 4.9,
      prefix: "",
      suffix: " ★",
      label: "Average Rating",
      subValue: "Verified Client Reviews",
      icon: Star,
      description: "Unmatched operational satisfaction rate computed across Google & Apple stores.",
      sparklineData: [92, 94, 95, 96, 97, 98, 99, 99, 100],
      color: "text-amber-400",
      glow: "hover:shadow-[0_0_30px_rgba(245,158,11,0.15)] hover:border-amber-500/30"
    }
  ];

  const testimonials: Testimonial[] = [
    {
      id: "t-owner-1",
      name: "Vikram Sethi",
      role: "Managing Director",
      shopName: "Bounce Premier Salons",
      location: "Bengaluru, Indiranagar",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120&h=120",
      rating: 5,
      quote: "Switching our ledger system to Nexora SalonOS completely transformed our seat utilization. Stylist downtime decreased by 18%, and client booking frequency skyrocketed.",
      badge: "6 verified locations",
      statsLabel: "Owners"
    },
    {
      id: "t-owner-2",
      name: "Anjali Deshmukh",
      role: "Founder & Creative Lead",
      shopName: "The Nail Lounge",
      location: "Mumbai, Bandra West",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120&h=120",
      rating: 5,
      quote: "Before Nexora, calculating custom profit-shares for nail specialists was a manual chore. The central dashboard calculates perfect ledger shares transparently.",
      badge: "88% Retention Rate",
      statsLabel: "Owners"
    },
    {
      id: "t-owner-3",
      name: "Karan Johar",
      role: "Operations Supervisor",
      shopName: "Somatheeram Certified Wellness",
      location: "Delhi, South Ext",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=120&h=120",
      rating: 5,
      quote: "Our walk-in queues used to look disorganized. Integrating 1-Click bookings lets spa clients clear appointments of all categories. Absolute game changer.",
      badge: "₹12L Month Net",
      statsLabel: "Owners"
    },
    {
      id: "t-partner-1",
      name: "Rahul Sen",
      role: "Regional District Overseer",
      shopName: "Bengaluru East Alliance",
      location: "East Karnataka District",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120&h=120",
      rating: 5,
      quote: "Holding a Nexora Leadership badge drives great weekly income. The 1.2% base royalty override from each checkout in my district has been incredibly robust and transparent.",
      badge: "310+ Partner Nodes",
      statsLabel: "Partners"
    },
    {
      id: "t-partner-2",
      name: "Preeti Nair",
      role: "Verified Growth Ambassador",
      shopName: "Delhi NCR Alliance Network",
      location: "Connaught Place Hub",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120&h=120",
      rating: 5,
      quote: "Bridging 14 spas into District status unlocked the High-End Workstation Laptop and corporate welcome key fob within 5 working days. The transparent dashboard builds serious trust.",
      badge: "Tier 4 Unlocked",
      statsLabel: "Partners"
    },
    {
      id: "t-customer-1",
      name: "Meera Patel",
      role: "Premium Wallet Holder",
      shopName: "Regular VIP Client",
      location: "Pune, Koregaon Park",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120&h=120",
      rating: 5,
      quote: "I book hair wellness styling in under 8 seconds. The wallet cashback is immediately usable for my next manicure. Entire process is safe, fast and rewarding.",
      badge: "12 Bookings • Verified User",
      statsLabel: "Customers"
    }
  ];

  const filteredTestimonials = testimonials.filter(t => {
    if (activeTab === 'all') return true;
    if (activeTab === 'owners') return t.statsLabel === 'Owners';
    if (activeTab === 'partners') return t.statsLabel === 'Partners';
    if (activeTab === 'customers') return t.statsLabel === 'Customers';
    return true;
  });

  return (
    <section className="relative py-28 bg-[#050508] border-b border-white/5 overflow-hidden" id="social-proof-section-premium">
      
      {/* Background Neon Glow Accents */}
      <div className="absolute top-[15%] left-[20%] w-[500px] h-[500px] bg-purple-900/[0.03] rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] right-[15%] w-[600px] h-[600px] bg-indigo-900/[0.04] rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* Futuristic digital geometric background grids */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_55%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER BLOCK */}
        <div className="text-center max-w-4xl mx-auto mb-20" id="social-proof-header">
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-purple-400 bg-purple-500/5 px-3 py-1 rounded-full border border-purple-500/20 inline-block mb-4 font-bold select-none">
            SECTION 12 // INDUSTRY VALIDATION GRID
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black tracking-tight text-white uppercase leading-none">
            TRUSTED BY THE BEAUTY INDUSTRY
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-500 via-indigo-500 to-rose-500 mx-auto mt-4 mb-5 rounded-full" />
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-sans">
            Growing Every Day. <span className="text-purple-400 font-semibold">Powered By Real Businesses.</span> Built For Long-Term Success.
          </p>
        </div>

        {/* METALLIC DOUBLE BENTO EXPANSION: MAIN VISUAL ECOSYSTEM MAP & LIVE ACTIVITY FEED */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
          
          {/* LEFT: Complete SaaS Ecosystem Map - Animated (7 Columns) */}
          <div className="lg:col-span-7 bg-[#09090c] border border-white/5 p-6 sm:p-8 rounded-[36px] relative overflow-hidden flex flex-col justify-between shadow-2xl">
            <div className="absolute inset-0 bg-radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(168,85,247,0.03),transparent_100%) pointer-events-none" />
            
            {/* Upper Info Row */}
            <div className="flex items-center justify-between pb-4 border-b border-white/5 select-none z-10">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-purple-400 animate-spin-slow" />
                <span className="text-[10px] font-mono text-gray-300 uppercase tracking-widest font-black">
                  NEXORA LIVE SYNCHRONIZED SYSTEM MAP
                </span>
              </div>
              <span className="text-[8px] font-mono text-gray-550 bg-purple-500/10 px-2 py-0.5 border border-purple-500/20 rounded uppercase">
                Interactive Grid v4.1
              </span>
            </div>

            {/* HIGH-END INTERACTIVE HYPER-DETAILED SVG MAP CANVAS */}
            <div className="relative h-[320px] sm:h-[380px] flex items-center justify-center my-6">
              
              {/* Radial Network Orbits Background */}
              <div className="absolute w-[240px] h-[240px] border border-white/[0.02] rounded-full animate-[spin_40s_linear_infinite]" />
              <div className="absolute w-[360px] h-[360px] border border-white/[0.01] border-dashed rounded-full animate-[spin_60s_linear_infinite]" />

              {/* Glowing SVG Lasers & Connections */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <defs>
                  <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#a855f7" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#6366f1" stopOpacity="0.2" />
                  </linearGradient>
                  <linearGradient id="roseGrad" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#a855f7" stopOpacity="0.2" />
                  </linearGradient>
                </defs>

                {/* laser pointer lines connecting map parts to center coordinate */}
                {/* Salon Coordinate line */}
                <line x1="50%" y1="50%" x2="20%" y2="25%" stroke="url(#purpleGrad)" strokeWidth="1.5" strokeDasharray="3 5" className="animate-[dash_10s_linear_infinite]" />
                {/* Customer Coordinate line */}
                <line x1="50%" y1="50%" x2="80%" y2="25%" stroke="url(#roseGrad)" strokeWidth="1.5" strokeDasharray="4 6" />
                {/* Partner Coordinate line */}
                <line x1="50%" y1="50%" x2="20%" y2="75%" stroke="url(#roseGrad)" strokeWidth="1.5" />
                {/* Booking Coordinate line */}
                <line x1="50%" y1="50%" x2="80%" y2="75%" stroke="url(#purpleGrad)" strokeWidth="1.5" strokeDasharray="3 5" />
              </svg>

              {/* CORE HUB: CENTRAL NEXORA PLATFORM NODE */}
              <div 
                className="absolute w-20 h-20 rounded-full bg-gradient-to-b from-[#181822] to-[#0d0d12] border-2 border-purple-500 flex flex-col items-center justify-center p-2 text-center shadow-[0_0_40px_rgba(168,85,247,0.3)] z-20 group transition-transform duration-300 transform hover:scale-105"
                onMouseEnter={() => setHoveredMapNode('center')}
                onMouseLeave={() => setHoveredMapNode(null)}
              >
                <span className="text-[10px] text-purple-400 font-mono font-black tracking-widest leading-none select-none">NEXORA</span>
                <span className="text-[7.5px] text-gray-400 font-mono block select-none mt-1 uppercase font-bold text-[6.5px]">CORE_GATEWAY</span>
                <span className="absolute -inset-2 rounded-full border border-purple-500/20 animate-ping pointer-events-none" />
              </div>

              {/* FLOATING SATELLITE NODES */}
              {/* NODE 1: SALONS COORDINATES (TOP LEFT) */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                onMouseEnter={() => setHoveredMapNode('salon')}
                onMouseLeave={() => setHoveredMapNode(null)}
                className={`absolute top-[15%] left-[10%] sm:left-[15%] p-4 rounded-2xl bg-black/80 border transition-all duration-300 z-10 text-left ${
                  hoveredMapNode === 'salon' ? 'border-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.2)]' : 'border-white/5'
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-indigo-500/10 rounded-lg border border-indigo-500/20">
                    <Building2 className="w-4 h-4 text-indigo-400" />
                  </div>
                  <div>
                    <span className="text-[8px] font-mono text-gray-550 block uppercase leading-none mb-1">NODE // 01</span>
                    <span className="text-xs font-bold text-white block font-display uppercase tracking-wider">SALON REGISTRY</span>
                  </div>
                </div>
                {hoveredMapNode === 'salon' && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="pt-2 mt-2 border-t border-white/5 text-[9px] text-gray-400 max-w-[140px] font-sans leading-relaxed">
                    1,042+ live shops streaming reservations directly onto our decentralized network ledger.
                  </motion.div>
                )}
              </motion.div>

              {/* NODE 2: CUSTOMERS ACCS (TOP RIGHT) */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                onMouseEnter={() => setHoveredMapNode('customer')}
                onMouseLeave={() => setHoveredMapNode(null)}
                className={`absolute top-[15%] right-[10%] sm:right-[15%] p-4 rounded-2xl bg-black/80 border transition-all duration-300 z-10 text-right ${
                  hoveredMapNode === 'customer' ? 'border-pink-500 shadow-[0_0_20px_rgba(244,63,94,0.2)]' : 'border-white/5'
                }`}
              >
                <div className="flex items-center gap-2 justify-end">
                  <div className="text-right">
                    <span className="text-[8px] font-mono text-gray-550 block uppercase leading-none mb-1">NODE // 02</span>
                    <span className="text-xs font-bold text-white block font-display uppercase tracking-wider">CLIENT ACCOUNTS</span>
                  </div>
                  <div className="p-2 bg-pink-500/10 rounded-lg border border-pink-500/20">
                    <Users className="w-4 h-4 text-pink-400" />
                  </div>
                </div>
                {hoveredMapNode === 'customer' && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="pt-2 mt-2 border-t border-white/5 text-[9px] text-gray-400 max-w-[140px] font-sans leading-relaxed ml-auto">
                    108,390 client accounts booking hair, makeup, spa sessions via UPI/Cards wallet.
                  </motion.div>
                )}
              </motion.div>

              {/* NODE 3: DISTRICT OVERRIDES (BOTTOM LEFT) */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                onMouseEnter={() => setHoveredMapNode('partner')}
                onMouseLeave={() => setHoveredMapNode(null)}
                className={`absolute bottom-[10%] left-[8%] sm:left-[12%] p-4 rounded-2xl bg-black/80 border transition-all duration-300 z-10 text-left ${
                  hoveredMapNode === 'partner' ? 'border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.2)]' : 'border-white/5'
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                    <Network className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-[8px] font-mono text-gray-550 block uppercase leading-none mb-1">NODE // 03</span>
                    <span className="text-xs font-bold text-white block font-display uppercase tracking-wider">PARTNERS OVERRIDE</span>
                  </div>
                </div>
                {hoveredMapNode === 'partner' && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="pt-2 mt-2 border-t border-white/5 text-[9px] text-gray-400 max-w-[140px] font-sans leading-relaxed">
                    264 growth partners overseeing locked grid postal codes, collecting overrides daily.
                  </motion.div>
                )}
              </motion.div>

              {/* NODE 4: BOOKING ENGINE (BOTTOM RIGHT) */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                onMouseEnter={() => setHoveredMapNode('booking')}
                onMouseLeave={() => setHoveredMapNode(null)}
                className={`absolute bottom-[10%] right-[8%] sm:right-[12%] p-4 rounded-2xl bg-black/80 border transition-all duration-300 z-10 text-right ${
                  hoveredMapNode === 'booking' ? 'border-rose-500 shadow-[0_0_20px_rgba(239,68,68,0.2)]' : 'border-white/5'
                }`}
              >
                <div className="flex items-center gap-2 justify-end">
                  <div className="text-right">
                    <span className="text-[8px] font-mono text-gray-550 block uppercase leading-none mb-1">NODE // 04</span>
                    <span className="text-xs font-bold text-white block font-display uppercase tracking-wider">BOOKING ROUTER</span>
                  </div>
                  <div className="p-2 bg-rose-500/10 rounded-lg border border-rose-500/20">
                    <CalendarCheck className="w-4 h-4 text-rose-450" />
                  </div>
                </div>
                {hoveredMapNode === 'booking' && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="pt-2 mt-2 border-t border-white/5 text-[9px] text-gray-400 max-w-[140px] font-sans leading-relaxed ml-auto">
                    514,800+ reservations routed effortlessly with modern automatic slot management.
                  </motion.div>
                )}
              </motion.div>

            </div>

            {/* Bottom Info Status Row of Central Map */}
            <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[9px] font-mono text-gray-500 select-none">
              <span className="mb-2 sm:mb-0">✦ CENTRAL MAP DEPLOYED SECURELY ON ROOT INSTANCE</span>
              <span className="text-purple-400 font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                LIVE STREAMING NETWORK CODES
              </span>
            </div>
          </div>

          {/* RIGHT: High-End Live Activity Event Broadcaster Feed (5 Columns) */}
          <div className="lg:col-span-5 bg-[#0b0b0e] border border-white/5 p-6 rounded-[36px] flex flex-col justify-between relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-36 h-36 bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3.5 border-b border-white/5">
                <div className="flex items-center gap-1.5">
                  <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
                  <span className="text-[10px] font-mono text-gray-300 uppercase tracking-widest font-black">
                    NEXORA LEDGER EVENT STREAM
                  </span>
                </div>
                <span className="text-[8px] font-mono text-gray-550 uppercase">REAL-TIME</span>
              </div>

              <div>
                <h3 className="text-xl font-display font-black text-white uppercase tracking-tight">
                  Ecosystem Activity Feed
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed font-sans mt-1">
                  Witness direct production-level operations processed across districts as they settle inside our secure database nodes.
                </p>
              </div>

              {/* Dynamic Scrolling/Transitioning Notifications List */}
              <div className="space-y-3 pt-2">
                <AnimatePresence initial={false}>
                  {liveEvents.map((evt) => (
                    <motion.div
                      key={evt.id}
                      initial={{ opacity: 0, x: 20, height: 0 }}
                      animate={{ opacity: 1, x: 0, height: 'auto' }}
                      exit={{ opacity: 0, x: -20, height: 0 }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                      className="p-3 bg-black/40 border border-white/5 rounded-xl flex items-start justify-between gap-3 text-left hover:border-purple-500/20 transition-all cursor-pointer"
                    >
                      <div className="flex items-start gap-2.5">
                        <div className={`mt-0.5 px-2 py-0.5 rounded text-[8px] font-mono font-black uppercase border tracking-wider shrink-0 ${evt.badgeColor}`}>
                          {evt.type}
                        </div>
                        <p className="text-[11px] text-gray-300 font-sans leading-relaxed">
                          {evt.message}
                        </p>
                      </div>
                      
                      <span className="text-[8px] font-mono text-gray-500 shrink-0 select-none pt-0.5 whitespace-nowrap">
                        {evt.time}
                      </span>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

            </div>

            {/* Simulated telemetry audit stats */}
            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[9px] font-mono text-gray-500 select-none">
              <span>LEDGER DEPOSITS AUTH: SECP256</span>
              <span className="text-emerald-400 font-black">✓ CONNECTED IN real-time</span>
            </div>
          </div>

        </div>

        {/* TOP METRICS GLASSMORPHIC STATISTIC CARD BOARD */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-20" id="premium-metrics-row">
          {metrics.map((m) => {
            const IconComp = m.icon;
            const isHovered = hoveredMetric === m.id;

            return (
              <motion.div
                key={m.id}
                onMouseEnter={() => setHoveredMetric(m.id)}
                onMouseLeave={() => setHoveredMetric(null)}
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ type: "spring", stiffness: 350, damping: 22 }}
                className={`p-6 bg-[#0a0a0d] border border-white/5 rounded-[24px] flex flex-col justify-between text-left relative overflow-hidden group transition-all duration-300 ${m.glow}`}
                id={`stat-premium-card-${m.id}`}
              >
                {/* Subtle backlighting neon glow */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/[0.01] rounded-full group-hover:bg-purple-500/[0.03] transition-all pointer-events-none" />

                <div>
                  {/* Icon & Sub-Tag line */}
                  <div className="flex items-center justify-between mb-5 select-none">
                    <div className="p-2.5 bg-white/5 rounded-xl border border-white/5 group-hover:bg-white/10 group-hover:border-white/10 transition-all">
                      <IconComp className={`w-4.5 h-4.5 ${m.color}`} />
                    </div>
                    <span className="text-[8.5px] font-mono text-gray-550 uppercase tracking-widest font-black bg-white/5 px-2 py-0.5 border border-white/5 rounded">
                      VERIFIED NODE
                    </span>
                  </div>

                  {/* Large Premium Simulated Counter Value */}
                  <h3 className="text-2xl sm:text-3xl font-mono font-black text-white tracking-tight flex items-baseline leading-none mb-1">
                    <span>{m.prefix}</span>
                    <span className="font-sans font-black">{m.value}</span>
                    <span className={`text-base font-bold ${m.color}`}>{m.suffix}</span>
                  </h3>

                  <p className="text-[11px] font-sans font-black text-white/90 uppercase tracking-wider block mb-3.5 select-none mt-0.5">
                    {m.label}
                  </p>

                  <p className="text-[11px] text-gray-400 leading-relaxed font-sans font-semibold mb-5">
                    {m.description}
                  </p>
                </div>

                {/* MINI SPARKLINE VECTOR GRAPH MOCK */}
                <div className="mt-4 pt-4 border-t border-white/5">
                  <span className="text-[7.5px] font-mono text-gray-550 uppercase block mb-1.5 font-black tracking-widest select-none">
                    SCALE GROWTH CURVE:
                  </span>
                  
                  <div className="h-8 flex items-end gap-1 px-1">
                    {m.sparklineData.map((h, i) => (
                      <div 
                        key={i} 
                        className={`flex-1 bg-gradient-to-t rounded-sm transition-all duration-500 ${
                          isHovered 
                            ? 'from-purple-900 to-purple-400 opacity-100' 
                            : 'from-gray-900 to-gray-550 opacity-40'
                        }`} 
                        style={{ height: `${h * 0.7}%` }} 
                      />
                    ))}
                  </div>

                  <div className="flex justify-between items-center text-[8px] font-mono text-gray-550 mt-2 select-none font-bold">
                    <span>LAST 12 MONTHS</span>
                    <span className="text-emerald-400 uppercase font-black">↑ Exponential</span>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* SUCCESS WALL TESTIMONIAL GRID BOARD */}
        <div className="bg-[#0b0b0e] border border-white/5 rounded-[36px] p-6 sm:p-10 text-left relative overflow-hidden mb-16" id="social-proof-testimonials-premium">
          <div className="absolute top-0 left-0 w-48 h-48 bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-white/5 mb-8">
            <div>
              <span className="text-[9px] font-mono text-purple-400 uppercase font-black tracking-widest block mb-1 font-bold">
                PLATFORM EXCELLENCE PORTALS
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black font-display text-white uppercase tracking-tight">
                Vetted Insights from the Ecosystem
              </h3>
            </div>

            {/* Testimonials category views tab list (At least 44px min touch targets) */}
            <div className="flex items-center gap-1 bg-black/40 p-1 rounded-xl border border-white/5 shrink-0 select-none">
              <button
                onClick={() => setActiveTab('all')}
                className={`py-2 px-3.5 rounded-lg text-xs font-mono font-black uppercase cursor-pointer transition-all min-h-[40px] flex items-center justify-center ${
                  activeTab === 'all'
                    ? 'bg-purple-500 text-white font-bold border border-purple-500/25 shadow-md'
                    : 'text-gray-400 hover:text-white'
                }`}
                id="btn-proof-tab-all"
              >
                <span>ALL SIDES</span>
              </button>
              <button
                onClick={() => setActiveTab('owners')}
                className={`py-2 px-3.5 rounded-lg text-xs font-mono font-black uppercase cursor-pointer transition-all min-h-[40px] flex items-center justify-center ${
                  activeTab === 'owners'
                    ? 'bg-purple-500 text-white font-bold border border-purple-500/25 shadow-md'
                    : 'text-gray-400 hover:text-white'
                }`}
                id="btn-proof-tab-owners"
              >
                <span>Salon Owners</span>
              </button>
              <button
                onClick={() => setActiveTab('partners')}
                className={`py-2 px-3.5 rounded-lg text-xs font-mono font-black uppercase cursor-pointer transition-all min-h-[40px] flex items-center justify-center ${
                  activeTab === 'partners'
                    ? 'bg-purple-500 text-white font-bold border border-purple-500/25 shadow-md'
                    : 'text-gray-400 hover:text-white'
                }`}
                id="btn-proof-tab-partners"
              >
                <span>Partners</span>
              </button>
              <button
                onClick={() => setActiveTab('customers')}
                className={`py-2 px-3.5 rounded-lg text-xs font-mono font-black uppercase cursor-pointer transition-all min-h-[40px] flex items-center justify-center ${
                  activeTab === 'customers'
                    ? 'bg-purple-500 text-white font-bold border border-purple-500/25 shadow-md'
                    : 'text-gray-400 hover:text-white'
                }`}
                id="btn-proof-tab-customers"
              >
                <span>Customers</span>
              </button>
            </div>
          </div>

          {/* Testimonial Cards List representing rich portfolio content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="wait">
              {filteredTestimonials.map((t, index) => (
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3, delay: index * 0.04 }}
                  className="bg-black/40 border border-white/5 p-6 rounded-[24px] flex flex-col justify-between hover:border-purple-500/20 hover:bg-black/60 transition-all hover:shadow-[0_12px_30px_rgba(168,85,247,0.05)] relative min-h-[260px]"
                  id={`testimonial-premium-card-${t.id}`}
                >
                  <Quote className="absolute top-5 right-5 w-10 h-10 text-white/[0.015] pointer-events-none" />

                  <div>
                    {/* Stars ratings block */}
                    <div className="flex items-center justify-between border-b border-white/5 pb-3 mb-4 select-none">
                      <div className="flex items-center gap-1">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-1 px-2 py-0.5 rounded text-[8px] font-mono font-black uppercase border bg-purple-500/10 text-purple-400 border-purple-500/20">
                        <Award className="w-2.5 h-2.5 text-purple-400 shrink-0" />
                        <span>{t.badge}</span>
                      </div>
                    </div>

                    {/* Description Quote Body */}
                    <p className="text-xs text-gray-300 leading-relaxed font-sans italic mb-6">
                      "{t.quote}"
                    </p>
                  </div>

                  {/* Profile info block */}
                  <div className="pt-4 border-t border-white/5 flex items-center gap-3">
                    <img 
                      src={t.avatar} 
                      alt={t.name}
                      referrerPolicy="no-referrer"
                      className="w-10 h-10 rounded-full object-cover border border-white/10 shrink-0 select-none grayscale hover:grayscale-0 transition-all duration-300"
                    />
                    
                    <div className="text-left">
                      <div className="flex items-center gap-1">
                        <p className="text-xs font-bold text-white leading-none font-display uppercase tracking-wide">{t.name}</p>
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      </div>
                      <p className="text-[10px] text-gray-500 font-sans mt-1 leading-tight">{t.role}</p>
                      
                      <span className="text-[8.5px] text-purple-400 font-mono mt-0.5 leading-none block font-black">
                        {t.shopName}
                      </span>
                      
                      <span className="text-[7.5px] text-gray-450 font-mono mt-1 leading-none block uppercase">
                        {t.location}
                      </span>
                    </div>
                  </div>

                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>

        {/* BOTTOM METADATA MANIFESTO */}
        <div className="text-center max-w-4xl mx-auto pt-8 border-t border-white/5 select-none" id="social-proof-footer">
          <h4 className="text-sm font-sans font-black tracking-tight text-white uppercase mb-2">
            Thousands Trust Nexora. Every Day The Ecosystem Grows Stronger.
          </h4>
          <p className="text-xs text-gray-400 leading-relaxed font-sans max-w-2xl mx-auto">
            From salons and customers to partners and brands, Nexora is building one connected beauty ecosystem that creates growth, transparency and massive scale overrides for everyone.
          </p>
        </div>

      </div>
    </section>
  );
}
