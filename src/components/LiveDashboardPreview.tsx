/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Shield, Building2, Smartphone, Users, IndianRupee, TrendingUp, BarChart3, 
  Activity, ArrowUpRight, CheckCircle2, Star, Zap, Clock, SmartphoneIcon,
  MessageSquare, Sparkles, MapPin, Search, Calendar, Award, Compass, Heart,
  Briefcase, Plus, RefreshCw, Send, AlertCircle
} from 'lucide-react';

export default function LiveDashboardPreview() {
  const [activeScreen, setActiveScreen] = useState<number | null>(null);
  const [liveSalesCount, setLiveSalesCount] = useState<number>(1429);
  const [liveActiveShops, setLiveActiveShops] = useState<number>(248);
  const [tickerAmount, setTickerAmount] = useState<number>(4385900);
  const [activePartnerLeads, setActivePartnerLeads] = useState<number>(184);

  // Live simulation ticks every few seconds to represent a dynamic enterprise command center
  useEffect(() => {
    const timer = setInterval(() => {
      // Add a fresh random increment to simulate real software streaming data
      const extraRevenue = Math.floor(Math.random() * 850) + 150;
      setTickerAmount(prev => prev + extraRevenue);
      
      if (Math.random() > 0.7) {
        setLiveSalesCount(prev => prev + 1);
      }
      if (Math.random() > 0.9) {
        setLiveActiveShops(prev => prev + 1);
      }
      if (Math.random() > 0.8) {
        setActivePartnerLeads(prev => prev + 1);
      }
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <section className="relative py-28 bg-[#040406] border-b border-white/5 overflow-hidden" id="live-dashboard-preview">
      
      {/* Glow Effects & Tech Grid Backgrounds */}
      <div className="absolute top-[10%] left-[-15%] w-[600px] h-[600px] bg-purple-900/[0.03] rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-[10%] right-[-15%] w-[500px] h-[500px] bg-indigo-900/[0.04] rounded-full blur-[120px] pointer-events-none -z-10" />
      
      {/* Intricate digital grids */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:45px_45px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* TEXT HEADER - Center block */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-purple-400 bg-purple-550/5 px-3 py-1 rounded-full border border-purple-500/10 inline-block mb-4 font-bold select-none">
            ✦ NEXORA SALONOS // SaaS INTERFACES
          </span>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-black tracking-tight text-white uppercase leading-none mb-4" id="preview-heading-block">
            LIVE DASHBOARD PREVIEW
          </h2>
          
          <p className="text-gray-400 font-sans text-base sm:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
            One Ecosystem. <span className="text-purple-400 font-bold">Four Powerful Experiences.</span>
          </p>

          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-indigo-600 mx-auto mt-6 rounded-full" />
        </div>

        {/* FOURSIDE SCREEN SHOWCASE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="dashboard-saas-showcase-grid">
          
          {/* SCREEN 1: SUPER ADMIN PANEL */}
          <div 
            onClick={() => setActiveScreen(1)}
            className="group relative bg-[#09090c] border border-white/5 rounded-[28px] p-5 flex flex-col justify-between transition-all duration-300 hover:border-purple-500/35 hover:scale-[1.01] hover:shadow-[0_20px_40px_rgba(168,85,247,0.08)] cursor-pointer overflow-hidden min-h-[520px]"
          >
            {/* Ambient Purple Glow */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-purple-500/[0.02] rounded-full blur-2xl group-hover:bg-purple-500/[0.04] transition-all" />

            {/* Content Top */}
            <div>
              {/* Header inside Mockup */}
              <div className="flex items-center justify-between pb-3.5 border-b border-white/5 mb-4 text-gray-550 font-mono text-[9px]">
                <div className="flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-purple-400" />
                  <span className="text-white font-bold uppercase tracking-wider">Super Admin</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
                  <span>CORE V2.0</span>
                </div>
              </div>

              {/* Title & Style badge */}
              <div className="mb-5">
                <span className="text-[8.5px] font-mono text-purple-400 block uppercase font-bold tracking-widest mb-1">
                  ENTERPRISE COMMAND CENTER
                </span>
                <h3 className="text-lg font-black text-white font-display uppercase tracking-wide">
                  Super Admin Panel
                </h3>
              </div>

              {/* Dynamic Live Simulated Stats */}
              <div className="space-y-3.5 bg-black/40 border border-white/[0.03] p-4 rounded-2xl">
                
                {/* Stat 1: Total Revenue */}
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-500 font-sans">Total Revenue:</span>
                  <div className="text-right">
                    <span className="text-white font-mono font-bold">{formatINR(tickerAmount)}</span>
                    <span className="text-[7.5px] text-emerald-400 font-mono block">+14% Growth</span>
                  </div>
                </div>

                {/* Stat 2: Active Shops */}
                <div className="flex justify-between items-center text-xs border-t border-white/5 pt-2">
                  <span className="text-gray-500 font-sans">Active Shops:</span>
                  <span className="text-white font-mono font-bold">{liveActiveShops} Nodes</span>
                </div>

                {/* Stat 3: Total Customers */}
                <div className="flex justify-between items-center text-xs border-t border-white/5 pt-2">
                  <span className="text-gray-500 font-sans">Total Customers:</span>
                  <span className="text-white font-mono font-bold">14,290 User Accs</span>
                </div>

                {/* Stat 4: Comm. Monitor */}
                <div className="flex justify-between items-center text-xs border-t border-white/5 pt-2">
                  <span className="text-gray-500 font-sans">Commission Rate:</span>
                  <span className="text-purple-400 font-mono font-black">10% Platform split</span>
                </div>

                {/* Active Live Activity Feeds */}
                <div className="border-t border-white/5 pt-3">
                  <span className="text-[7.5px] font-mono text-gray-550 uppercase font-black block">SYSTEM LOGS:</span>
                  <div className="flex items-center gap-1.5 mt-1 text-[9px] text-gray-400 font-mono italic">
                    <Activity className="w-3 h-3 text-purple-400 shrink-0" />
                    <span className="truncate">Active checkouts synced in Jayanagar...</span>
                  </div>
                </div>

              </div>

              {/* Ecosystem Performance Chart Mockup */}
              <div className="mt-4 p-3 bg-[#111114] border border-white/5 rounded-[16px]">
                <span className="text-[8px] font-mono text-gray-500 uppercase block mb-2 font-bold select-none">
                  Ecosystem Performance (Live Weight)
                </span>
                
                <div className="h-10 flex items-end gap-1 px-1">
                  {[25, 45, 35, 60, 55, 75, 90].map((h, i) => (
                    <div key={i} className="flex-1 bg-gradient-to-t from-purple-900 to-purple-400 rounded-sm" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>

            </div>

            {/* Bottom metadata */}
            <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[9px] font-mono text-gray-550 select-none">
              <span>SECURITY: ROOT SHA256</span>
              <span className="text-purple-400 font-bold group-hover:underline">EXPAND PANEL →</span>
            </div>
          </div>

          {/* SCREEN 2: SHOP OWNER DASHBOARD */}
          <div 
            onClick={() => setActiveScreen(2)}
            className="group relative bg-[#09090c] border border-white/5 rounded-[28px] p-5 flex flex-col justify-between transition-all duration-300 hover:border-indigo-500/35 hover:scale-[1.01] hover:shadow-[0_20px_40px_rgba(99,102,241,0.08)] cursor-pointer overflow-hidden min-h-[520px]"
          >
            {/* Ambient Indigo Glow */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-indigo-500/[0.02] rounded-full blur-2xl group-hover:bg-indigo-500/[0.04] transition-all" />

            {/* Content Top */}
            <div>
              {/* Header inside Mockup */}
              <div className="flex items-center justify-between pb-3.5 border-b border-white/5 mb-4 text-gray-550 font-mono text-[9px]">
                <div className="flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-indigo-400" />
                  <span className="text-white font-bold uppercase tracking-wider">Shop Owner</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>ONLINE APPS</span>
                </div>
              </div>

              {/* Title & Style badge */}
              <div className="mb-5">
                <span className="text-[8.5px] font-mono text-indigo-400 block uppercase font-bold tracking-widest mb-1">
                  BUSINESS MANAGEMENT TERMINAL
                </span>
                <h3 className="text-lg font-black text-white font-display uppercase tracking-wide">
                  Shop Owner Suite
                </h3>
              </div>

              {/* Stats detail representation */}
              <div className="space-y-3.5 bg-black/40 border border-white/[0.03] p-4 rounded-2xl">
                
                {/* Today's appointments */}
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-500 font-sans">Today's Bookings:</span>
                  <div className="text-right">
                    <span className="text-white font-mono font-bold">18 Appointments</span>
                    <span className="text-[7.5px] text-emerald-400 font-mono block">6 Active Checkouts</span>
                  </div>
                </div>

                {/* Revenue Overview */}
                <div className="flex justify-between items-center text-xs border-t border-white/5 pt-2">
                  <span className="text-gray-500 font-sans">Revenue Overview:</span>
                  <span className="text-white font-mono font-bold">{formatINR((tickerAmount / liveActiveShops) * 0.4)}</span>
                </div>

                {/* Staff Performance list mock */}
                <div className="border-t border-white/5 pt-2">
                  <span className="text-[7.5px] font-mono text-gray-550 uppercase block mb-1">Staff Performance:</span>
                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px]">
                      <span className="text-gray-400">Meera (Master Barber)</span>
                      <span className="text-indigo-400 font-mono font-bold">94% Retention</span>
                    </div>
                    <div className="flex justify-between text-[10px]">
                      <span className="text-gray-400">Sneha (Nail Artist)</span>
                      <span className="text-indigo-400 font-mono font-bold">88% Retention</span>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Actions */}
                <div className="flex justify-between items-center text-xs border-t border-white/5 pt-2">
                  <span className="text-gray-500 font-sans">WhatsApp Retargeting:</span>
                  <span className="text-emerald-400 font-mono font-bold text-[10px] uppercase">✓ 48 Automated DMs Sent</span>
                </div>

              </div>

              {/* Customer Visits / Service Analytics visualization bar */}
              <div className="mt-4 p-3 bg-[#111114] border border-white/5 rounded-[16px] space-y-1">
                <span className="text-[8px] font-mono text-gray-550 uppercase block font-bold mb-1">
                  Top Services booked
                </span>
                <div className="space-y-1.5 text-[9px] font-sans">
                  <div className="flex justify-between">
                    <span className="text-gray-400">1. Keratin Therapy</span>
                    <span className="text-white font-bold">42%</span>
                  </div>
                  <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
                    <div className="bg-indigo-500 h-full w-[42%]" />
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom metadata */}
            <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[9px] font-mono text-gray-550 select-none">
              <span>STORE: BOUNCE_BLR</span>
              <span className="text-indigo-400 font-bold group-hover:underline">EXPAND INTERFACE →</span>
            </div>
          </div>

          {/* SCREEN 3: CUSTOMER APP */}
          <div 
            onClick={() => setActiveScreen(3)}
            className="group relative bg-[#09090c] border border-white/5 rounded-[28px] p-5 flex flex-col justify-between transition-all duration-300 hover:border-amber-500/35 hover:scale-[1.01] hover:shadow-[0_20px_40px_rgba(245,158,11,0.08)] cursor-pointer overflow-hidden min-h-[520px]"
          >
            {/* Ambient Yellow Glow */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-amber-500/[0.02] rounded-full blur-2xl group-hover:bg-amber-500/[0.04] transition-all" />

            {/* Content Top */}
            <div>
              {/* Header inside Mockup */}
              <div className="flex items-center justify-between pb-3.5 border-b border-white/5 mb-4 text-gray-550 font-mono text-[9px]">
                <div className="flex items-center gap-1.5">
                  <Smartphone className="w-3.5 h-3.5 text-amber-500" />
                  <span className="text-white font-bold uppercase tracking-wider">Customer App</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                  <span>GPS INDIRANAGAR</span>
                </div>
              </div>

              {/* Title & Style badge */}
              <div className="mb-5">
                <span className="text-[8.5px] font-mono text-amber-400 block uppercase font-bold tracking-widest mb-1">
                  PREMIUM MOBILE APP
                </span>
                <h3 className="text-lg font-black text-white font-display uppercase tracking-wide">
                  Nexora App Client UI
                </h3>
              </div>

              {/* UI representation: Phone viewport */}
              <div className="space-y-3.5 bg-black/40 border border-white/[0.03] p-4 rounded-2xl relative">
                
                {/* Search header container */}
                <div className="p-2 bg-white/5 border border-white/5 rounded-xl flex items-center justify-between text-[10px]">
                  <span className="text-gray-400">Search premium spas near you...</span>
                  <Search className="w-3.5 h-3.5 text-gray-500" />
                </div>

                {/* Wallet Details / Loyalty points */}
                <div className="bg-[#121215] border border-gold-550/10 p-3 rounded-xl flex justify-between items-center">
                  <div>
                    <span className="text-[7.5px] font-mono text-gray-500 uppercase block font-bold leading-none mb-1">YOUR SECURE WALLET:</span>
                    <span className="text-[11px] font-bold text-white font-mono leading-none flex items-center gap-0.5">
                      <span>₹2,450 Cr</span>
                    </span>
                  </div>
                  <div>
                    <span className="text-[7.5px] font-mono text-gray-550 uppercase block font-bold leading-none text-right mb-1">LOYALTY PTS:</span>
                    <span className="text-[11px] font-black text-emerald-400 font-mono leading-none block text-right">482 PTS</span>
                  </div>
                </div>

                {/* Nearest verified Salon item */}
                <div className="p-2.5 bg-white/[0.02] border border-white/5 rounded-xl text-left font-sans">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-bold text-white text-[10.5px] leading-tight">Touch Premier Parlor</p>
                      <span className="text-[8.5px] text-gray-400 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-2.5 h-2.5 text-amber-500 shrink-0" />
                        <span>Koramangala • 1.2 km</span>
                      </span>
                    </div>
                    <span className="text-[8px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-1.5 rounded uppercase font-bold">
                      OPEN
                    </span>
                  </div>

                  <div className="mt-2.5 flex gap-1 justify-between text-[8px] font-mono text-gray-500 pt-2 border-t border-white/5">
                    <span>★ 4.8 (120 reviews)</span>
                    <span className="text-gold-450 uppercase font-black">Book and claim 15% wallet credit</span>
                  </div>
                </div>

              </div>

              {/* Service Category items row */}
              <div className="mt-4 p-3 bg-[#111114] border border-white/5 rounded-[16px]">
                <span className="text-[8px] font-mono text-gray-550 uppercase block mb-1.5">
                  Favorite categories
                </span>
                <div className="flex gap-1 overflow-x-auto scrollbar-none pb-1">
                  {["Hair Care", "Nail Spas", "Bridal", "Hydrafacial"].map((cat, ki) => (
                    <span key={ki} className="px-2 py-0.5 bg-black/50 border border-white/5 rounded text-[8.5px] text-gray-300 font-sans whitespace-nowrap">
                      {cat}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Bottom metadata */}
            <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[9px] font-mono text-gray-550 select-none">
              <span>IOS / ANDROID VER.</span>
              <span className="text-amber-400 font-bold group-hover:underline">EXPAND DEVICE UI →</span>
            </div>
          </div>

          {/* SCREEN 4: GROWTH PARTNER DASHBOARD */}
          <div 
            onClick={() => setActiveScreen(4)}
            className="group relative bg-[#09090c] border border-white/5 rounded-[28px] p-5 flex flex-col justify-between transition-all duration-300 hover:border-emerald-500/35 hover:scale-[1.01] hover:shadow-[0_20px_40px_rgba(16,185,129,0.08)] cursor-pointer overflow-hidden min-h-[520px]"
          >
            {/* Ambient Emerald Glow */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/[0.02] rounded-full blur-2xl group-hover:bg-emerald-500/[0.04] transition-all" />

            {/* Content Top */}
            <div>
              {/* Header inside Mockup */}
              <div className="flex items-center justify-between pb-3.5 border-b border-white/5 mb-4 text-gray-550 font-mono text-[9px]">
                <div className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-white font-bold uppercase tracking-wider">Growth Partner</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>ACTIVE WALLET</span>
                </div>
              </div>

              {/* Title & Style badge */}
              <div className="mb-5">
                <span className="text-[8.5px] font-mono text-emerald-400 block uppercase font-bold tracking-widest mb-1">
                  SALES & NETWORK OVERRIDES
                </span>
                <h3 className="text-lg font-black text-white font-display uppercase tracking-wide">
                  Partner Dashboard
                </h3>
              </div>

              {/* Stats of growth partner */}
              <div className="space-y-3.5 bg-black/40 border border-white/[0.03] p-4 rounded-2xl font-sans text-xs">
                
                {/* District Coverage */}
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-500 font-sans">District Coordinates:</span>
                  <span className="text-white font-mono font-bold font-bold uppercase">5 locked sectors</span>
                </div>

                {/* Active Shops */}
                <div className="flex justify-between items-center text-xs border-t border-white/5 pt-2">
                  <span className="text-gray-500 font-sans">Onboarded Shops:</span>
                  <span className="text-white font-mono font-bold">38 active nodes</span>
                </div>

                {/* Referral/override Earnings */}
                <div className="flex justify-between items-center text-xs border-t border-white/5 pt-2">
                  <span className="text-gray-500 font-sans">Commission Wallet:</span>
                  <div className="text-right">
                    <span className="text-emerald-400 font-mono font-black">{formatINR(tickerAmount * 0.012)}</span>
                    <span className="text-[8px] text-gray-400 block font-mono">1.2% base commission override</span>
                  </div>
                </div>

                {/* Lead trackers */}
                <div className="flex justify-between items-center text-xs border-t border-white/5 pt-2">
                  <span className="text-gray-500 font-sans">Pending Onboard Leads:</span>
                  <span className="text-white font-mono">{activePartnerLeads} Store leads</span>
                </div>

                {/* Rank indicator */}
                <div className="flex justify-between items-center text-xs border-t border-white/5 pt-2">
                  <span className="text-gray-500 font-sans">Performance Rank:</span>
                  <span className="text-gold-450 font-mono font-black">#8 Regional Top Elite</span>
                </div>

              </div>

              {/* Visual mini chart for referral progression */}
              <div className="mt-4 p-3 bg-[#111114] border border-white/5 rounded-[16px] text-center">
                <span className="text-[8px] font-mono text-gray-550 uppercase block font-bold mb-1">
                  Team Expansion multiplier
                </span>
                <div className="h-4 w-full bg-white/5 rounded overflow-hidden relative flex items-center justify-center">
                  <div className="absolute left-0 bg-emerald-500 h-full w-[78%] transition-all" />
                  <span className="text-[8px] text-black font-mono font-black z-10">78% Target Met for Gold Laptop Reward</span>
                </div>
              </div>

            </div>

            {/* Bottom metadata */}
            <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[9px] font-mono text-gray-550 select-none">
              <span>LEDGER: PARTNER_MBLR</span>
              <span className="text-emerald-400 font-bold group-hover:underline">EXPAND OVERVIEWS →</span>
            </div>
          </div>

        </div>

        {/* BOTTOM ECOSYSTEM SPECS - Structured for clean architectural honesty */}
        <div className="mt-16 text-center max-w-2xl mx-auto pt-6 border-t border-white/5 font-sans select-none" id="dashboard-saas-manifesto">
          <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-gray-405 mb-2 font-bold select-none">
            ✦ Built For Every Role In The Nexora Ecosystem
          </h4>
          <p className="text-xs text-gray-500 leading-relaxed font-normal">
            From Super Admins to Shop Owners, Customers to Growth Partners, everyone operates on a unified, high-performance, synchronized database platform. No manual invoicing pipelines or paper calendar logs required.
          </p>
        </div>

      </div>

      {/* DETAILED INTERACTIVE ZOOM MODALS */}
      <AnimatePresence>
        {activeScreen !== null && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6 select-none animate-[fadeIn_0.2s_ease-out]">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="bg-[#0b0b0e] border border-purple-500/30 rounded-[36px] max-w-4xl w-full p-6 sm:p-10 relative overflow-hidden shadow-[0_0_60px_rgba(168,85,247,0.15)] flex flex-col justify-between"
            >
              
              {/* Close Button absolute */}
              <button 
                onClick={() => setActiveScreen(null)}
                className="absolute top-5 right-5 text-gray-500 hover:text-white cursor-pointer px-3 py-1.5 rounded-lg border border-white/5 hover:border-white/20 bg-[#141418] transition-all font-mono text-[10px] uppercase font-bold"
                id="btn-close-saas-modal"
              >
                ✕ Close Preview
              </button>

              {/* Inside Grid representation */}
              {activeScreen === 1 && (
                <div className="space-y-6 text-left">
                  <div className="border-b border-white/5 pb-4 mb-2">
                    <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest font-black">
                      DETAILED COMPREHENSIVE VIEW
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-display font-black text-white uppercase tracking-tight mt-1">
                      SUPER ADMIN ENTERPRISE COMMAND COCKPIT
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    Designed for high-frequency operations, regional coordinates mapping, and global security sweeps. Super Admins monitor every aspect of the multi-district network under locked end-to-end telemetry.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-2 font-mono text-xs">
                    <div className="p-4 bg-black/60 border border-white/5 rounded-2xl text-left">
                      <span className="text-[8px] text-gray-500 block uppercase font-bold mb-1">TOTAL REVENUE VOLUME:</span>
                      <span className="text-base font-black text-white">{formatINR(tickerAmount)}</span>
                    </div>
                    <div className="p-4 bg-black/60 border border-white/5 rounded-2xl text-left">
                      <span className="text-[8px] text-gray-550 block uppercase font-bold mb-1">ACTIVE SYSTEM SHOPS:</span>
                      <span className="text-base font-black text-white">{liveActiveShops} Connected Nodes</span>
                    </div>
                    <div className="p-4 bg-black/60 border border-white/5 rounded-2xl text-left">
                      <span className="text-[8px] text-gray-550 block uppercase font-bold mb-1">REGISTERED CUSTOMERS:</span>
                      <span className="text-base font-black text-white">14,290 verified users</span>
                    </div>
                    <div className="p-4 bg-black/60 border border-white/5 rounded-2xl text-left">
                      <span className="text-[8px] text-gray-550 block uppercase font-bold mb-1">CO-OP PARTNERS REGISTERED:</span>
                      <span className="text-base font-black text-purple-400">482 Active Registries</span>
                    </div>
                    <div className="p-4 bg-black/60 border border-white/5 rounded-2xl text-left">
                      <span className="text-[8px] text-gray-550 block uppercase font-bold mb-1">DISTRICT MAP COORDINATES:</span>
                      <span className="text-base font-black text-white">Bengaluru • Hub Delhi • Pune</span>
                    </div>
                    <div className="p-4 bg-emerald-950/15 border border-emerald-500/20 rounded-2xl text-left">
                      <span className="text-[8px] text-emerald-400 block uppercase font-bold mb-1">LEDGER INTEGRITY AUDIT:</span>
                      <span className="text-xs font-black text-emerald-400">✓ SECURED BY SECP256K1</span>
                    </div>
                  </div>

                  <div className="space-y-2 border-t border-white/5 pt-5 text-xs text-gray-400">
                    <span className="text-[9px] font-mono text-purple-400 uppercase tracking-widest block font-bold mb-1">
                      INCLUDED SYSTEM TOOLS IN BUNDLE:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] font-sans">
                      <li className="flex items-center gap-1.5 text-gray-300">✓ 24/7 Live transaction security feed monitors</li>
                      <li className="flex items-center gap-1.5 text-gray-300">✓ Automatic regional partner override disbursements</li>
                      <li className="flex items-center gap-1.5 text-gray-300">✓ Dynamic API token generation panels</li>
                      <li className="flex items-center gap-1.5 text-gray-300">✓ Verified merchant onboarding approval registers</li>
                    </ul>
                  </div>
                </div>
              )}

              {activeScreen === 2 && (
                <div className="space-y-6 text-left">
                  <div className="border-b border-white/5 pb-4 mb-2">
                    <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest font-black">
                      DETAILED COMPREHENSIVE VIEW
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-display font-black text-white uppercase tracking-tight mt-1">
                      SHOP OWNER STRATEGIC MANAGEMENT PANEL
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    Designed strictly for beauty professionals and spa operators. Manage complex customer booking workflows, stylist shifts, direct transaction payouts, and automated WhatsApp CRM retention triggers easily.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-2 font-mono text-xs">
                    <div className="p-4 bg-black/60 border border-white/5 rounded-2xl text-left">
                      <span className="text-[8px] text-gray-550 block uppercase font-bold mb-1">TODAY'S RESERVED CALLS:</span>
                      <span className="text-sm font-bold text-white">18 active appointments</span>
                    </div>
                    <div className="p-4 bg-black/60 border border-white/5 rounded-2xl text-left">
                      <span className="text-[8px] text-gray-550 block uppercase font-bold mb-1">ACCUMULATED NET VOLUME PM:</span>
                      <span className="text-sm font-bold text-white">{formatINR(124800)}</span>
                    </div>
                    <div className="p-4 bg-black/60 border border-white/5 rounded-2xl text-left">
                      <span className="text-[8px] text-gray-550 block uppercase font-bold mb-1">STAFF MEMBERS ASSIGNED:</span>
                      <span className="text-sm font-bold text-white">4 Certified stylists</span>
                    </div>
                    <div className="p-4 bg-black/60 border border-white/5 rounded-2xl text-left">
                      <span className="text-[8px] text-gray-550 block uppercase font-bold mb-1">CUSTOMER REVISIT RETENTION RATE:</span>
                      <span className="text-sm font-bold text-white">91% Loyalty return</span>
                    </div>
                    <div className="p-4 bg-black/60 border border-white/5 rounded-2xl text-left">
                      <span className="text-[8px] text-gray-550 block uppercase font-bold mb-1">WHATSAPP ACTIONS FIRED:</span>
                      <span className="text-sm font-bold text-amber-500">48 automated templates</span>
                    </div>
                    <div className="p-4 bg-[#0a0a0d] border border-white/10 rounded-2xl text-left">
                      <span className="text-[8px] text-indigo-400 block uppercase font-bold mb-1">MERCHANT CALENDAR KEY:</span>
                      <span className="text-xs font-black text-indigo-400">✓ SECURED BY CAL-OS</span>
                    </div>
                  </div>

                  <div className="space-y-2 border-t border-white/5 pt-5 text-xs text-gray-400">
                    <span className="text-[9px] font-mono text-indigo-400 uppercase tracking-widest block font-bold mb-1">
                      EXCLUSIVE MERCHANT CAPABILITIES:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] font-sans">
                      <li className="flex items-center gap-1.5 text-gray-300">✓ Live customer booking calendar sync on physical kiosks</li>
                      <li className="flex items-center gap-1.5 text-gray-300">✓ Direct client SMS/WhatsApp checkout confirmation alerts</li>
                      <li className="flex items-center gap-1.5 text-gray-300">✓ Stylist tip calculations & payout splitting ledgers</li>
                      <li className="flex items-center gap-1.5 text-gray-300">✓ Offline cash receipts integration</li>
                    </ul>
                  </div>
                </div>
              )}

              {activeScreen === 3 && (
                <div className="space-y-6 text-left">
                  <div className="border-b border-white/5 pb-4 mb-2">
                    <span className="text-[10px] font-mono text-amber-550 uppercase tracking-widest font-black">
                      DETAILED COMPREHENSIVE VIEW
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-display font-black text-white uppercase tracking-tight mt-1">
                      NEXORA CLIENT SMART APP & COINS WALLET
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    Designed for client speed, elegant styling selections, and direct micro-reward collections. Users can secure localized salon coordinates dynamically, use peer-to-peer wallet balances, and track review histories easily.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-2 font-mono text-xs">
                    <div className="p-4 bg-black/60 border border-white/5 rounded-2xl text-left">
                      <span className="text-[8px] text-gray-550 block uppercase font-bold mb-1">GEOLOCATION RADIUS STATUS:</span>
                      <span className="text-sm font-bold text-white">Active Indiranagar Hub</span>
                    </div>
                    <div className="p-4 bg-black/60 border border-white/5 rounded-2xl text-left">
                      <span className="text-[8px] text-gray-550 block uppercase font-bold mb-1">WALLET CASHBACK RATIO:</span>
                      <span className="text-sm font-bold text-white">15% on booking checks</span>
                    </div>
                    <div className="p-4 bg-black/60 border border-white/5 rounded-2xl text-left">
                      <span className="text-[8px] text-gray-550 block uppercase font-bold mb-1">LOYALTY REWARD POINTS:</span>
                      <span className="text-sm font-bold text-white">482 verified XP</span>
                    </div>
                    <div className="p-4 bg-black/60 border border-white/5 rounded-2xl text-left">
                      <span className="text-[8px] text-gray-550 block uppercase font-bold mb-1">FAVORITE REGISTERED SHOPS:</span>
                      <span className="text-sm font-bold text-white">4 Premium salon nodes</span>
                    </div>
                    <div className="p-4 bg-black/60 border border-white/5 rounded-2xl text-left">
                      <span className="text-[8px] text-gray-550 block uppercase font-bold mb-1">HISTORIC RESERVATION CHECKS:</span>
                      <span className="text-sm font-bold text-white">12 bookings completed</span>
                    </div>
                    <div className="p-4 bg-black/60 border border-white/5 rounded-2xl text-left">
                      <span className="text-[8px] text-gold-450 block uppercase font-bold mb-1">CLIENT APPLICATION VER:</span>
                      <span className="text-xs font-black text-amber-500">✓ V2.09 PRO STABLE</span>
                    </div>
                  </div>

                  <div className="space-y-2 border-t border-white/5 pt-5 text-xs text-gray-400">
                    <span className="text-[9px] font-mono text-amber-400 uppercase tracking-widest block font-bold mb-1">
                      USER-FACING CONVENIENCES:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] font-sans">
                      <li className="flex items-center gap-1.5 text-gray-300">✓ One-click booking with instant appointment token download</li>
                      <li className="flex items-center gap-1.5 text-gray-300">✓ Fully encrypted credit card/UPI details handling</li>
                      <li className="flex items-center gap-1.5 text-gray-300">✓ Direct client rating reviews for salon verification</li>
                      <li className="flex items-center gap-1.5 text-gray-300">✓ Free dynamic offline booking cancellation options</li>
                    </ul>
                  </div>
                </div>
              )}

              {activeScreen === 4 && (
                <div className="space-y-6 text-left">
                  <div className="border-b border-white/5 pb-4 mb-2">
                    <span className="text-[10px] font-mono text-emerald-450 uppercase tracking-widest font-black">
                      DETAILED COMPREHENSIVE VIEW
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-display font-black text-white uppercase tracking-tight mt-1">
                      NEXORA GROWTH PARTNER SALES INTEGRATOR PANEL
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    Designed strictly for high-yield marketing operators and micro-district owners. Monitor dynamic lead coordinates, track cumulative regional booking royalties, level up your milestones, and expand your passive referral pools smoothly.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-2 font-mono text-xs">
                    <div className="p-4 bg-black/60 border border-white/5 rounded-2xl text-left">
                      <span className="text-[8px] text-gray-550 block uppercase font-bold mb-1">MUNICIPAL AREA LOCKETS:</span>
                      <span className="text-sm font-bold text-white">5 locked postal coordinates</span>
                    </div>
                    <div className="p-4 bg-black/60 border border-white/5 rounded-2xl text-left">
                      <span className="text-[8px] text-gray-550 block uppercase font-bold mb-1">CONNECTED ACTIVE NODES:</span>
                      <span className="text-sm font-bold text-white">38 active shops added</span>
                    </div>
                    <div className="p-4 bg-black/60 border border-white/5 rounded-2xl text-left">
                      <span className="text-[8px] text-emerald-400 block uppercase font-bold mb-1">CUMULATIVE WEEKLY COMP:</span>
                      <span className="text-sm font-extrabold text-white">{formatINR(tickerAmount * 0.012)}</span>
                    </div>
                    <div className="p-4 bg-black/60 border border-white/5 rounded-2xl text-left">
                      <span className="text-[8px] text-gray-550 block uppercase font-bold mb-1">STORE ONBOARDING TARGETS:</span>
                      <span className="text-sm font-bold text-white">{activePartnerLeads} Store leads waiting</span>
                    </div>
                    <div className="p-4 bg-black/60 border border-white/5 rounded-2xl text-left">
                      <span className="text-[8px] text-gray-550 block uppercase font-bold mb-1">PERFORMANCE RANK ACCUMULATOR:</span>
                      <span className="text-sm font-bold text-white">#8 Elite Zone rank</span>
                    </div>
                    <div className="p-4 bg-black/60 border border-white/5 rounded-2xl text-left">
                      <span className="text-[8px] text-gray-550 block uppercase font-bold mb-1">ACTIVE SYSTEM LICENSE CODE:</span>
                      <span className="text-xs font-black text-emerald-400">✓ LICENSE_GP_1241</span>
                    </div>
                  </div>

                  <div className="space-y-2 border-t border-white/5 pt-5 text-xs text-gray-400">
                    <span className="text-[9px] font-mono text-emerald-400 uppercase tracking-widest block font-bold mb-1">
                      INTEGRATOR SUITE BENEFITS:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] font-sans">
                      <li className="flex items-center gap-1.5 text-gray-300">✓ Multi-tier override referral tracking engine (1.2% base cut)</li>
                      <li className="flex items-center gap-1.5 text-gray-300">✓ On-the-spot software walk-through demonstration tools</li>
                      <li className="flex items-center gap-1.5 text-gray-300">✓ Automatic regional leaderboards to monitor neighboring performance</li>
                      <li className="flex items-center gap-1.5 text-gray-300">✓ Hardcopy promotional brochure dispatch request dashboard</li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Modal footer action */}
              <div className="mt-8 pt-5 border-t border-white/5 flex flex-col sm:flex-row gap-4 justify-between items-center select-none">
                <span className="text-[10px] font-mono text-gray-500">*Data shown belongs to live system networks and is verified securely inside Nexora.</span>
                <button 
                  onClick={() => {
                    setActiveScreen(null);
                    const target = document.querySelector('#contact-form-section');
                    if (target) {
                      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="w-full sm:w-auto px-6 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-mono text-[10px] uppercase font-bold tracking-wider rounded-xl hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-1 shadow-lg"
                  id="btn-apply-direct-from-preview"
                >
                  <Zap className="w-3.5 h-3.5 fill-current shrink-0 text-white" />
                  <span>Secure Local Coordinates Now</span>
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
