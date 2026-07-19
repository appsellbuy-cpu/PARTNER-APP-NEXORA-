/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, Calendar, Gift, Percent, Heart, Award, Wallet, 
  Sparkles, Star, CheckCircle, Users, ChevronRight, Compass,
  Clock, Shield, ArrowRight, Smartphone, Wifi, Battery, AlertCircle
} from 'lucide-react';

interface AppScreen {
  id: string;
  name: string;
  badge: string;
  heading: string;
  tagline: string;
  description: string;
  color: string;
  icon: any;
  renderScreen: () => React.JSX.Element;
}

export default function SalonCustomers() {
  const [activeScreenId, setActiveScreenId] = useState<string>("nearby-salons");

  const screens: AppScreen[] = [
    {
      id: "nearby-salons",
      name: "Nearby Salons",
      badge: "Discovery Engine",
      heading: "Local Beauty Map Radar",
      tagline: "Explore Verified Luxury Salons in Your Sector",
      description: "Discover certified premium parlours, aesthetic spas, and nail rooms nearby. Filter by master stylist skills, customer ratings, and immediate seat availabilities.",
      color: "from-amber-500/20 to-amber-600/5 border-amber-500/30 text-amber-400",
      icon: MapPin,
      renderScreen: () => (
        <div className="space-y-3.5" id="screen-discovery">
          {/* Header element */}
          <div className="flex items-center justify-between px-1">
            <span className="text-[10px] uppercase tracking-wider font-bold text-gray-400 font-mono">2 Salons Nearby</span>
            <span className="text-[8px] bg-amber-500/10 text-amber-450 border border-amber-500/20 px-1.5 py-0.2 rounded font-mono font-bold">1.2 KM Radar</span>
          </div>

          {[
            {
              name: "Luxe Parlour & Day Spa",
              distance: "1.2 km away",
              rating: "4.9",
              reviews: "1,420+",
              loc: "Indiranagar, Bangalore",
              slots: "3 vacant seats",
              bgColor: "border-gold-500/30 bg-gold-950/10",
              logoLetters: "LX"
            },
            {
              name: "Aura Unisex Hair Studio",
              distance: "2.4 km away",
              rating: "4.8",
              reviews: "850+",
              loc: "Koramangala, Bangalore",
              slots: "Waitlist active",
              bgColor: "border-white/5 bg-white/[0.01]",
              logoLetters: "AR"
            }
          ].map((sal, idx) => (
            <div 
              key={idx} 
              className={`p-3 rounded-2xl border text-left flex gap-3 transition-all ${sal.bgColor}`}
            >
              {/* Logo block */}
              <div className="w-10 h-10 rounded-xl bg-black border border-white/10 flex items-center justify-center font-display font-black text-xs text-gold-450 shrink-0 select-none">
                {sal.logoLetters}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-1">
                  <h5 className="text-[11.5px] font-bold text-white uppercase tracking-wide truncate">{sal.name}</h5>
                  <div className="flex items-center gap-0.5 text-xs text-emerald-400 font-mono shrink-0 font-bold">
                    <Star className="w-3 h-3 fill-current text-amber-450 shrink-0" />
                    <span>{sal.rating}</span>
                  </div>
                </div>
                <p className="text-[9px] text-gray-400 flex items-center gap-1 mt-0.5 font-sans">
                  <MapPin className="w-3 h-3 text-red-500 shrink-0" />
                  <span className="truncate">{sal.loc} • {sal.distance}</span>
                </p>
                <div className="mt-2 flex items-center justify-between text-[8px] font-mono">
                  <span className="text-gray-550 lowercase">{sal.reviews} verified reviews</span>
                  <span className={`px-1.5 py-0.2 rounded font-bold uppercase leading-none ${
                    sal.slots.includes('vacant') 
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                      : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                  }`}>
                    {sal.slots}
                  </span>
                </div>
              </div>
            </div>
          ))}

          {/* Prompt Map Circle */}
          <div className="h-20 rounded-2xl border border-white/5 bg-luxury-black/90 relative overflow-hidden flex items-center justify-center text-center">
            <div className="absolute inset-0 bg-cover bg-center opacity-10 bg-[url('https://maps.googleapis.com/maps/api/staticmap')]" />
            <div className="absolute w-8 h-8 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center animate-ping" />
            <div className="absolute w-4 h-4 rounded-full bg-gold-450 border border-white flex items-center justify-center z-10 shadow-lg" />
            <span className="text-[9px] font-mono text-gray-500 relative z-20 mt-8 uppercase font-bold">Dynamic radar lock matches</span>
          </div>
        </div>
      )
    },
    {
      id: "booking",
      name: "Booking",
      badge: "Direct Seat Reserving",
      heading: "No-wait Salon Appointments",
      tagline: "Lock Your Chair in 1-Click & Sync With Stylists",
      description: "Directly view active chair timings today. Pick your custom styles, book level-5 master experts, and lock slot instantly. Automated confirmation codes dispatch straight into your WhatsApp.",
      color: "from-purple-500/20 to-purple-600/5 border-purple-500/30 text-purple-400",
      icon: Calendar,
      renderScreen: () => (
        <div className="space-y-3.5 text-left" id="screen-booking">
          <div className="flex items-center justify-between px-1">
            <span className="text-[10px] uppercase tracking-wider font-bold text-gray-400 font-mono">Book Slot</span>
            <span className="text-[8px] bg-purple-550/15 text-purple-400 border border-purple-500/20 px-1.5 py-0.2 rounded font-mono font-bold">Luxe Salon</span>
          </div>

          {/* Service picker mockup */}
          <div className="p-3 bg-black/40 border border-purple-500/15 rounded-2xl">
            <span className="text-[8px] font-mono text-purple-450 block mb-1.5 uppercase font-black">1. Selected Service Class</span>
            <div className="flex items-center justify-between">
              <div>
                <h5 className="text-[11px] font-bold text-white uppercase tracking-wide">Advance Razor Cut & Beard Wash</h5>
                <span className="text-[9px] text-gray-500 block font-mono mt-0.5">Duration: 45 Minutes • Includes Wash</span>
              </div>
              <span className="text-xs font-mono font-black text-gold-450 shrink-0">₹1,200</span>
            </div>
          </div>

          {/* Stylist Selector */}
          <div className="p-3 bg-white/[0.01] border border-white/5 rounded-2xl">
            <span className="text-[8px] font-mono text-gray-500 block mb-1.5 uppercase font-bold">2. Master Stylist Assigned</span>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-purple-500/10 text-purple-450 border border-purple-500/30 flex items-center justify-center font-mono font-bold text-xs select-none">
                  SK
                </div>
                <div>
                  <h6 className="text-[10.5px] font-bold text-white uppercase tracking-wide">Sanjay Kumar</h6>
                  <span className="text-[8px] font-mono text-amber-450 block">Rating: 4.9★ • Level-5 Master Expert</span>
                </div>
              </div>
              <Heart className="w-3.5 h-3.5 text-red-500 fill-current shrink-0" />
            </div>
          </div>

          {/* Timing Select */}
          <div className="p-2.5 bg-gradient-to-r from-purple-950/20 to-transparent border border-purple-500/20 rounded-xl flex items-center justify-between text-[9.5px]">
            <div className="flex items-center gap-1.5 font-mono text-purple-400 font-bold uppercase">
              <Clock className="w-3.5 h-3.5 shrink-0 animate-pulse" />
              <span>Mon, 11:30 AM Available</span>
            </div>
            <span className="text-[8.5px] font-mono bg-emerald-500/15 border border-emerald-500/20 text-emerald-400 px-1 py-0.2 rounded font-black uppercase">Vacant</span>
          </div>

          {/* CTA Lock Button */}
          <button className="w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-mono text-[10px] font-bold uppercase tracking-wider transition-all shadow-md shadow-purple-950/30 text-center select-none cursor-pointer flex items-center justify-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-purple-250 shrink-0" />
            <span>Lock Seat & Get Ticket</span>
          </button>
        </div>
      )
    },
    {
      id: "offers",
      name: "Offers",
      badge: "Slow-Chair Deals",
      heading: "Off-Peak Discounts",
      tagline: "Save up to 45% by Filling Vacant Off-Peak Slot Chairs",
      description: "Auto-detect regional slow business days and times. Pick highly discounted parlor slots offered by leading franchises to optimize staff seat utilization.",
      color: "from-blue-500/20 to-blue-600/5 border-blue-500/30 text-blue-400",
      icon: Percent,
      renderScreen: () => (
        <div className="space-y-3.5 text-left" id="screen-offers">
          <div className="flex items-center justify-between px-1">
            <span className="text-[10px] uppercase tracking-wider font-bold text-gray-400 font-mono">Slow Chair Coupons</span>
            <span className="text-[8px] bg-blue-550/15 text-blue-400 border border-blue-500/20 px-1.5 py-0.2 rounded font-mono font-bold">Active Today</span>
          </div>

          <div className="p-3 bg-blue-950/20 border border-blue-500/20 rounded-2xl relative overflow-hidden">
            {/* Visual shine */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 rounded-full blur-md" />
            <div className="absolute top-2 right-2 px-1.5 py-0.2 text-[7.5px] font-mono bg-blue-500 text-white font-bold rounded">HOT DISCOUNT</div>
            <span className="text-[8px] font-mono text-blue-300 block uppercase tracking-wider leading-none">Mon-Thurs • 12pm - 4pm Only</span>
            <h4 className="text-sm font-black text-white mt-1 uppercase tracking-wide">45% FLAT OFF-PEAK</h4>
            <p className="text-[9px] text-gray-400 leading-normal mt-1 font-sans">Get 45% reduction when unlocking appointments with Sanjay Kumar or Amit Sharma before weekends.</p>
          </div>

          {/* Vouchers layout */}
          <div className="p-2.5 rounded-xl border border-dashed border-white/10 bg-black/40 flex items-center justify-between">
            <div>
              <span className="text-[8px] font-mono text-gray-500 uppercase block font-bold">COPY PROMOCODE</span>
              <span className="text-[10.5px] font-black text-gold-450 font-mono uppercase">NEX_PEAK_45</span>
            </div>
            <button className="px-2.5 py-1 text-[8.5px] bg-[#16161a] border border-white/10 text-gray-300 rounded hover:text-white font-mono uppercase font-bold cursor-pointer">
              Apply
            </button>
          </div>

          <div className="p-3 bg-white/[0.01] border border-white/5 rounded-xl flex items-center justify-between text-[10px]">
            <span className="text-gray-400 font-mono">Original: ₹1,500</span>
            <span className="text-emerald-400 font-bold">Nexora Price: ₹825</span>
          </div>
        </div>
      )
    },
    {
      id: "rewards",
      name: "Rewards",
      badge: "Seeding Loyalty",
      heading: "Self-Compounding Nex Coins",
      tagline: "Refer and Earn Cash Royalty Balance Loops",
      description: "Never carry physical stamp loyalty cards again. Save automatically with digital ledger coins returned to your secure loyalty wallet screen at check-out.",
      color: "from-emerald-500/20 to-emerald-600/5 border-emerald-500/30 text-emerald-450",
      icon: Gift,
      renderScreen: () => (
        <div className="space-y-3.5 text-left" id="screen-rewards">
          <div className="flex items-center justify-between px-1">
            <span className="text-[10px] uppercase tracking-wider font-bold text-gray-400 font-mono">Cooperative Loyalty Ledger</span>
            <Gift className="w-3.5 h-3.5 text-emerald-400" />
          </div>

          {/* Coins Credit Card style */}
          <div className="p-4 rounded-2xl bg-gradient-to-tr from-[#0b170e] to-[#040405] border border-emerald-500/20 relative overflow-hidden">
            <div className="absolute top-2 right-2 text-[8px] font-mono bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-1.5 py-0.2 rounded font-bold">ACTIVE VALUE</div>
            <span className="text-[8.5px] font-mono text-gray-500 uppercase font-black block tracking-wider mb-2">My Co-Op Reserves</span>
            <div className="text-2xl font-bold text-white tracking-tight leading-none flex items-baseline gap-1.5">
              <span>1,850</span>
              <span className="text-[10px] font-mono text-emerald-450 uppercase font-bold">Nex Coins</span>
            </div>
            <p className="text-[9px] text-gray-400 leading-normal mt-2">1 Coin = ₹1 cash value. Active and fully deductible at checkout inside any Nexora salon network partners.</p>
          </div>

          {/* Fast milestones checklist */}
          <div className="p-3 bg-black/45 border border-white/5 rounded-xl space-y-2">
            <span className="text-[8px] font-mono text-gray-550 block uppercase font-bold">Point Generators Enabled</span>
            {[
              { rule: "Weekday booking multiplier", points: "+150 coins", status: "Active" },
              { rule: "Post-onboarding review", points: "+50 coins", status: "Done" }
            ].map((mil, idx) => (
              <div key={idx} className="flex items-center justify-between text-[9px] font-mono">
                <span className="text-gray-400">✓ {mil.rule}</span>
                <span className="text-emerald-400 font-bold">{mil.points}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: "wallet",
      name: "Wallet",
      badge: "Unified Payments",
      heading: "Nexora Pay Universal",
      tagline: "Instant Balance Syncing & 1-Swipe Spot Checks",
      description: "Manage pre-funded client deposits. Connect unified financial wallets with member hubs to checkout without carrying actual debit cards using secure dynamic QR codes.",
      color: "from-teal-500/20 to-teal-600/5 border-teal-500/30 text-teal-400",
      icon: Wallet,
      renderScreen: () => (
        <div className="space-y-3.5 text-left" id="screen-wallet">
          <div className="flex items-center justify-between px-1">
            <span className="text-[10px] uppercase tracking-wider font-bold text-gray-400 font-mono">Nexora Pay API</span>
            <Wallet className="w-3.5 h-3.5 text-teal-400" />
          </div>

          {/* Balance sheet */}
          <div className="p-3.5 rounded-2xl bg-[#0a1212]/90 border border-teal-500/20">
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-[8px] font-mono text-gray-550 uppercase tracking-widest block font-bold">Ledger Balance</span>
                <span className="text-xl font-bold font-mono text-white">₹2,480.00</span>
              </div>
              <span className="text-[8px] font-mono text-teal-400 bg-teal-500/10 border border-teal-500/20 px-1.5 py-0.5 rounded font-black uppercase">UPI Connected</span>
            </div>

            {/* Quick action triggers */}
            <div className="grid grid-cols-2 gap-2">
              <button className="py-1.5 rounded-lg bg-teal-500 text-black text-[9px] font-mono font-bold uppercase cursor-pointer text-center">Add Funds</button>
              <button className="py-1.5 rounded-lg bg-[#16161a] border border-white/5 text-gray-300 text-[9px] font-mono uppercase hover:text-white cursor-pointer text-center">Scan QR</button>
            </div>
          </div>

          {/* Last transaction logs */}
          <div className="p-3 bg-black/40 border border-white/5 rounded-xl space-y-2">
            <span className="text-[8px] font-mono text-gray-500 block uppercase font-bold">RECENT TRANSACTION LEDGER</span>
            <div className="flex items-center justify-between text-[9px] font-mono">
              <div>
                <h6 className="text-[#e2e8f0] font-sans font-bold">Hair Coloring @ Luxe Parlour</h6>
                <p className="text-[7.5px] text-gray-550 mt-0.5">Jun 14, 2026 • 2:30 PM</p>
              </div>
              <span className="font-bold text-red-400">-₹1,150.00</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "membership",
      name: "Membership",
      badge: "VIP Core Tier",
      heading: "Ecosystem Titanium Pass",
      tagline: "Premium Club Privilege at Franchise Branches",
      description: "Unlock private lounge rights and birthday packages. Fund local salon deposit reserves to instantly tier up your client status and receive lifelong custom services.",
      color: "from-indigo-500/20 to-indigo-600/5 border-indigo-500/30 text-indigo-400",
      icon: Award,
      renderScreen: () => (
        <div className="space-y-3.5 text-left" id="screen-membership">
          <div className="flex items-center justify-between px-1">
            <span className="text-[10px] uppercase tracking-wider font-bold text-gray-400 font-mono">Core Client Status</span>
            <span className="text-[8px] bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-1.5 py-0.2 rounded font-mono font-bold">VIP VIP</span>
          </div>

          {/* VIP Metal card mockup */}
          <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-900 to-slate-950 border border-white/10 relative overflow-hidden shadow-xl">
            {/* Hologram details */}
            <div className="absolute top-2 right-2 px-1.5 py-0.2 bg-white/10 text-[7px] font-mono uppercase rounded text-indigo-200 tracking-widest font-black">TITANIUM LEVEL</div>
            <span className="text-[8px] font-mono uppercase text-indigo-350 tracking-wider block mb-3 font-bold">Nexora Universal Salon Pass</span>
            <div className="flex justify-between items-end">
              <div>
                <span className="text-[8px] text-indigo-200 block">CARDHOLDER</span>
                <span className="text-xs font-bold text-white tracking-wide uppercase font-sans">SALLY CHATTERJEE</span>
              </div>
              <div className="text-right">
                <span className="text-[8px] text-indigo-205 block font-mono">VIP CLUB VAL</span>
                <span className="text-xs font-bold font-mono text-white">₹10,000</span>
              </div>
            </div>
          </div>

          {/* Loyalty privileges info list */}
          <div className="p-3 bg-[#111114]/80 border border-white/5 rounded-xl space-y-2 text-[9.5px]">
            <span className="text-[8px] font-mono text-gray-500 block uppercase font-black">TITANIUM BENEFIT MATRIX</span>
            <div className="space-y-1.5">
              <p className="text-gray-350">✓ Free beverage and VIP lounge entry at flagship outlets</p>
              <p className="text-gray-350">✓ Guaranteed priority styler queues (no wait times)</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "favorite-staff",
      name: "Favorite Staff",
      badge: "Hairstylist Bookmarks",
      heading: "Artist Loyalty Tracker",
      tagline: "Follow Top Cosmetological Experts & Reserve Early",
      description: "Quick-access premium cosmetologists and top hair designers. Check stylist rosters, inspect ratings, and lock their weekly spots before calendars sell out.",
      color: "from-rose-500/20 to-rose-600/5 border-rose-500/30 text-rose-450",
      icon: Heart,
      renderScreen: () => (
        <div className="space-y-3.5 text-left" id="screen-staff">
          <div className="flex items-center justify-between px-1">
            <span className="text-[10px] uppercase tracking-wider font-bold text-gray-400 font-mono">My Bookmarked Stylists</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-current" />
          </div>

          {/* Stylists rows */}
          {[
            { name: "Vikram Sharma", desc: "Expert Hair Stylist & Colorer", rank: "Level 5 Master", rating: "4.9", rev: "480 bookings" },
            { name: "Nikita Singh", desc: "Nail Art & Micro-Tinting Expert", rank: "Level 4 Senior", rating: "4.8", rev: "310 bookings" }
          ].map((st, i) => (
            <div key={i} className="p-3 rounded-2xl bg-black/45 border border-white/5 hover:border-rose-500/20 transition-all flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20 flex items-center justify-center font-mono font-bold text-xs select-none">
                  {st.name.split(' ').map(n=>n[0]).join('')}
                </div>
                <div>
                  <h6 className="text-[11px] font-bold text-white uppercase tracking-wide leading-none">{st.name}</h6>
                  <span className="text-[8px] text-gray-500 block mt-1 font-sans">{st.desc} • {st.rank}</span>
                </div>
              </div>

              <div className="text-right shrink-0">
                <div className="flex items-center gap-0.5 text-amber-450 text-[10px] font-mono font-bold justify-end">
                  <Star className="w-3 h-3 fill-current" />
                  <span>{st.rating}</span>
                </div>
                <span className="text-[7.5px] font-mono text-gray-600 block mt-0.5 uppercase">{st.rev}</span>
              </div>
            </div>
          ))}
        </div>
      )
    }
  ];

  const activeScreen = screens.find(s => s.id === activeScreenId) || screens[0];
  const ActiveScreenComponent = activeScreen.renderScreen;

  return (
    <section className="relative py-24 bg-luxury-black/95 border-b border-white/5 overflow-hidden" id="for-customers-section">
      
      {/* Background Graphic Ambient Lighting Glows */}
      <div className="absolute top-[20%] left-[-15%] w-96 h-96 bg-purple-900/5 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] right-[-15%] w-96 h-96 bg-gold-550/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#a855f7] bg-purple-550/5 px-3 py-1 rounded-full border border-purple-500/10 inline-block mb-4 font-bold">
            SECTION 6 // DYNAMIC CLIENT ADVANTAGE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-white mb-4 uppercase">
            NEXORA FOR CUSTOMERS
          </h2>
          <p className="text-gray-405 text-sm sm:text-base leading-relaxed font-sans font-normal">
            Transforming local salon discovery into a luxury high-speed dynamic mobile experience. Find elite hair masters, pay directly via unified wallets, and earn real-money cashback loops on every single booking.
          </p>
        </div>

        {/* Dynamic Split Screen Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* LEFT SIDE: SELECTION LIST (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center space-x-2.5 mb-6 justify-center sm:justify-start select-none">
                <span className="h-2 w-2 rounded-full bg-gold-450 animate-pulse" />
                <span className="text-[11px] font-mono uppercase tracking-widest text-gray-400 font-bold">
                  Sovereign Client Advantage Modules
                </span>
                <span className="text-[8px] font-mono text-gold-450 px-2 py-0.5 rounded border border-gold-500/20 bg-gold-500/5 font-bold">
                  {screens.length} Screens Active
                </span>
              </div>

              {/* Grid block of 7 requested app modules */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" id="customers-screens-selection">
                {screens.map((sc) => {
                  const Icon = sc.icon;
                  const isSelected = activeScreenId === sc.id;

                  return (
                    <button
                      key={sc.id}
                      onClick={() => setActiveScreenId(sc.id)}
                      className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center space-x-3 cursor-pointer group ${
                        isSelected 
                          ? 'bg-luxury-card border-gold-500/35 shadow-[0_0_15px_rgba(211,157,44,0.06)] scale-[1.01]' 
                          : 'bg-[#121214]/50 border-white/5 hover:border-white/10 hover:bg-[#121214]'
                      }`}
                      id={`btn-customer-screen-${sc.id}`}
                    >
                      <div className={`p-2 rounded-xl border shrink-0 transition-all ${
                        isSelected 
                          ? sc.color 
                          : 'text-gray-500 bg-[#0f0f12] border-white/5 group-hover:border-white/10 text-gray-400'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className={`text-[12.5px] font-bold uppercase font-mono tracking-wide truncate ${isSelected ? 'text-white' : 'text-gray-400'}`}>
                            {sc.name}
                          </span>
                        </div>
                        <span className="text-[8.5px] font-mono text-gray-500 uppercase block tracking-widest mt-0.5 leading-none">
                          {sc.badge}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom client policy banner */}
            <div className="p-4 rounded-xl border border-white/5 bg-[#121214]/30 flex flex-col sm:flex-row gap-3 items-center justify-between">
              <span className="text-[10px] font-mono text-gray-450 text-center sm:text-left leading-relaxed">
                🛡️ All bookings verified on the secure Nexora Salon Ledger. Cash tokens redeemable at any certified local member beauty parlour inside the country.
              </span>
            </div>
          </div>

          {/* RIGHT SIDE: PREMIUM SMARTPHONE CONTAINER MOCKUP (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col justify-center items-center" id="phone-mockup-wrapper">
            
            {/* Elegant Smartphone Outer Frame Chassis */}
            <div className="relative w-full max-w-[320px] aspect-[9/19.5] bg-[#000000] rounded-[44px] p-3.5 border-4 border-gray-750 shadow-2xl flex flex-col shadow-gold-550/5">
              
              {/* Premium Phone Details: Speakers, Camera Notch, Side volume switches */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-40 flex items-center justify-center">
                {/* Speaker mesh & lens */}
                <div className="w-12 h-1 bg-gray-800 rounded-full mb-1" />
                <div className="w-2.5 h-2.5 rounded-full bg-gray-900 border border-gray-850 ml-3" />
              </div>

              {/* Side physical button accents */}
              <div className="absolute top-20 -left-1 w-1 h-8 bg-gray-700 rounded-r" />
              <div className="absolute top-32 -left-1 w-1 h-8 bg-gray-700 rounded-r" />
              <div className="absolute top-24 -right-1 w-1 h-12 bg-gray-700 rounded-l" />

              {/* Phone Status Bar Row */}
              <div className="w-full flex justify-between items-center px-4 pt-1 pb-1.5 text-[8.5px] font-mono text-gray-400 select-none z-30 relative bg-black rounded-t-[32px]">
                <span>19:25 IST</span>
                <div className="flex items-center gap-1.5">
                  <Wifi className="w-3 h-3" />
                  <span className="font-bold">5G</span>
                  <Battery className="w-3.5 h-3.5 text-emerald-450 fill-current" />
                </div>
              </div>

              {/* Smartphone Glowing Screen Area */}
              <div className="flex-1 bg-[#050507] rounded-[30px] p-4 pt-6 overflow-hidden relative border border-white/5 flex flex-col justify-between" id="phone-app-screen">
                {/* Background flow glows */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-gold-550/5 rounded-full blur-2xl pointer-events-none -z-10" />
                
                {/* Screen content area */}
                <div className="flex-1 overflow-y-auto pr-0.5 space-y-4 font-mono select-none flex flex-col justify-between">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeScreenId}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.25 }}
                      className="flex-1 flex flex-col justify-between min-h-[300px]"
                    >
                      <div>
                        {/* Upper module identity */}
                        <div className="pb-3 border-b border-white/5 mb-4 flex items-center justify-between">
                          <span className="text-[8px] tracking-widest text-gold-450 font-bold uppercase leading-none">
                            NEXORA MOBILE OS
                          </span>
                          <span className="text-[7.5px] text-gray-550">
                            VERIFIED CLIENT APP
                          </span>
                        </div>

                        {/* Title of the active screen */}
                        <div className="flex items-center gap-2 mb-3">
                          <div className={`p-1.5 rounded-lg border text-gold-450 bg-gold-500/5 border-gold-500/20`}>
                            <activeScreen.icon className="w-3.5 h-3.5 shrink-0" />
                          </div>
                          <div>
                            <span className="text-[7.5px] text-purple-400 uppercase tracking-widest block font-bold leading-none">{activeScreen.badge}</span>
                            <h4 className="text-[14px] font-black tracking-tight text-white m-0 uppercase leading-normal mt-0.5">{activeScreen.name}</h4>
                          </div>
                        </div>

                        {/* Active screen specific elements rendering */}
                        <div className="mt-1">
                          <ActiveScreenComponent />
                        </div>
                      </div>

                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Bottom interactive navigation menu icons bar (mimics consumer app bar) */}
                <div className="mt-4 pt-3 border-t border-white/5 flex justify-between items-center text-[8.5px] text-gray-550 select-none bg-black/40 px-2 rounded-xl py-2 shrink-0">
                  <div className="flex flex-col items-center cursor-pointer gap-0.5 text-gold-450">
                    <Compass className="w-3.5 h-3.5" />
                    <span className="text-[7.5px] scale-90 font-bold">Discover</span>
                  </div>
                  <div className="flex flex-col items-center cursor-pointer gap-0.5 hover:text-white">
                    <Calendar className="w-3.5 h-3.5" />
                    <span className="text-[7.5px] scale-90">Bookings</span>
                  </div>
                  <div className="flex flex-col items-center cursor-pointer gap-0.5 hover:text-white">
                    <Wallet className="w-3.5 h-3.5" />
                    <span className="text-[7.5px] scale-90">Wallet</span>
                  </div>
                  <div className="flex flex-col items-center cursor-pointer gap-0.5 hover:text-white">
                    <Heart className="w-3.5 h-3.5" />
                    <span className="text-[7.5px] scale-90">Artists</span>
                  </div>
                </div>

              </div>

              {/* iPhone style Gesture Indicator bar at absolute bottom */}
              <div className="w-24 h-1 bg-gray-600 rounded-full mx-auto mt-2 mb-1 shrink-0 select-none" />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
