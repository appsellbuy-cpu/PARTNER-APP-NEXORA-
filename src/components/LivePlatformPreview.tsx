/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Smartphone, Building, ShieldCheck, Cpu, Calendar, Star, IndianRupee, 
  Users, TrendingUp, DollarSign, Layers, CheckCircle, Clock, Search,
  Compass, Heart, MapPin, ChevronRight, MessageSquare, Award, ArrowUpRight,
  PieChart, Activity, Bell, Lock, RefreshCcw, Sparkles
} from 'lucide-react';

interface Booking {
  id: string;
  customerName: string;
  service: string;
  salon: string;
  time: string;
  status: 'Confirmed' | 'Pending' | 'Completed';
  amount: number;
}

interface Review {
  id: string;
  customerName: string;
  rating: number;
  comment: string;
  service: string;
  time: string;
}

export default function LivePlatformPreview() {
  const [activeTab, setActiveTab] = useState<'customer' | 'salon' | 'partner' | 'admin'>('customer');
  const [selectedCity, setSelectedCity] = useState<string>('Bengaluru');
  const [simulatedBookingsCount, setSimulatedBookingsCount] = useState<number>(142);
  const [ratingFilter, setRatingFilter] = useState<number>(0);

  // Core metrics required: Bookings, Revenue, Reviews, Customers, Growth Score, Commissions, Network Size
  const stats = {
    bookings: simulatedBookingsCount,
    revenue: 358400 + (simulatedBookingsCount - 142) * 1250,
    reviewsCount: 88,
    reviewsAverage: 4.8,
    customers: 1240 + (simulatedBookingsCount - 142),
    growthScore: 94,
    commissionsRate: 10, // 10% platform, 1.2% partner
    partnerCommissions: Math.round((358400 + (simulatedBookingsCount - 142) * 1250) * 0.012),
    networkSize: 48 // Active salon nodes
  };

  const sampleBookings: Booking[] = [
    { id: "b1", customerName: "Priya Sharma", service: "Balayage & Hair Spa", salon: "Bounce Premier Salon", time: "Today, 16:30", status: 'Confirmed', amount: 4800 },
    { id: "b2", customerName: "Ananya Iyer", service: "Luxury French Manicure", salon: "The Polish Lounge", time: "Today, 18:00", status: 'Pending', amount: 1800 },
    { id: "b3", customerName: "Arjun Verma", service: "Classic Trim & Royal Shave", salon: "Truefitt & Hill", time: "Tomorrow, 11:00", status: 'Confirmed', amount: 2500 },
    { id: "b4", customerName: "Sneha Kapoor", service: "Deep Tissue Aromatherapy", salon: "Taj Jiva Wellness Spa", time: "Tomorrow, 15:00", status: 'Confirmed', amount: 3800 }
  ];

  const sampleReviews: Review[] = [
    { id: "r1", customerName: "Meera Patel", rating: 5, comment: "Absolutely stellar session. The digital booking was instantaneous and seamless!", service: "Keratin Treatment", time: "1 hour ago" },
    { id: "r2", customerName: "Rohan Das", rating: 5, comment: "Fabulous service, the barbers here hold direct master-tier certification.", service: "Beard Sculpture", time: "3 hours ago" },
    { id: "r3", customerName: "Ritu Sen", rating: 4, comment: "Great hygiene standard, checking out via Nexora Wallet saved 15% override credits.", service: "Hydrafacial Pro", time: "A day ago" }
  ];

  const categories = ["Hair Stylists", "Nails", "Spa & Wellness", "Barbers", "Aesthetics"];

  const incrementBooking = () => {
    setSimulatedBookingsCount(prev => prev + 1);
  };

  const resetSimulator = () => {
    setSimulatedBookingsCount(142);
  };

  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <section className="relative py-24 bg-[#060608] border-b border-white/5 overflow-hidden" id="live-platform-preview-section">
      
      {/* Background radial effects */}
      <div className="absolute top-[30%] left-[-20%] w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-20%] w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#d39d2c] bg-gold-550/5 px-3 py-1 rounded-full border border-gold-500/10 inline-block mb-4 font-bold">
            SECTION 16 • SYSTEM CORES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium tracking-tight text-white mb-4">
            Live Platform Preview
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-sans">
            Experience our multi-dimensional beauty utility in real-time. Toggle back-and-forth between client and operator hubs to see how real-time reservations instantly update the system metrics ledger.
          </p>
        </div>

        {/* METRICS HUD ACCENT BAR (Contains the 7 required data points in highly visual real-time slots) */}
        <div className="mb-10 bg-black/40 border border-white/10 rounded-3xl p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse inline-block" />
              Operational Ledger Sync (7 Core Metrics Live)
            </span>
            <div className="flex items-center gap-3">
              <button 
                onClick={incrementBooking} 
                className="px-2.5 py-1 bg-gold-500 hover:bg-gold-450 active:scale-[0.98] text-black font-semibold font-mono text-[10px] uppercase rounded-lg transition-all cursor-pointer flex items-center gap-1"
                id="btn-preview-inc-booking"
              >
                <span>+ Simulate Booking</span>
                <Sparkles className="w-3 h-3" />
              </button>
              {simulatedBookingsCount > 142 && (
                <button 
                  onClick={resetSimulator} 
                  className="p-1 px-2 border border-white/10 text-gray-400 hover:text-white rounded-lg text-[9px] transition-all font-mono flex items-center gap-1 cursor-pointer"
                  id="btn-preview-reset"
                >
                  <RefreshCcw className="w-2.5 h-2.5" />
                  <span>Reset</span>
                </button>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
            {/* 1. Bookings */}
            <div className="bg-white/[0.02] border border-white/5 p-3 rounded-xl hover:bg-white/[0.04] transition-all">
              <span className="text-[9px] font-mono text-gray-550 block uppercase">1. Bookings</span>
              <div className="text-lg font-bold text-white font-mono mt-0.5">{stats.bookings}</div>
              <span className="text-[8px] font-mono text-emerald-400 uppercase font-semibold">Today Real-time</span>
            </div>
            {/* 2. Revenue */}
            <div className="bg-white/[0.02] border border-white/5 p-3 rounded-xl hover:bg-white/[0.04] transition-all">
              <span className="text-[9px] font-mono text-gray-550 block uppercase">2. Revenue</span>
              <div className="text-lg font-bold text-white font-mono mt-0.5 truncate" title={formatINR(stats.revenue)}>
                {formatINR(stats.revenue)}
              </div>
              <span className="text-[8px] font-mono text-emerald-400 uppercase font-semibold">Gross Volume</span>
            </div>
            {/* 3. Reviews */}
            <div className="bg-white/[0.02] border border-white/5 p-3 rounded-xl hover:bg-white/[0.04] transition-all">
              <span className="text-[9px] font-mono text-gray-550 block uppercase">3. Reviews</span>
              <div className="text-lg font-bold text-gold-450 font-mono mt-0.5 flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-gold-500 text-gold-500" />
                <span>{stats.reviewsAverage}</span>
              </div>
              <span className="text-[8px] font-mono text-gray-400 uppercase">{stats.reviewsCount} verified</span>
            </div>
            {/* 4. Customers */}
            <div className="bg-white/[0.02] border border-white/5 p-3 rounded-xl hover:bg-white/[0.04] transition-all">
              <span className="text-[9px] font-mono text-gray-550 block uppercase">4. Customers</span>
              <div className="text-lg font-bold text-white font-mono mt-0.5">{stats.customers}</div>
              <span className="text-[8px] font-mono text-gray-400 uppercase">Active wallets</span>
            </div>
            {/* 5. Growth Score */}
            <div className="bg-white/[0.02] border border-white/5 p-3 rounded-xl hover:bg-white/[0.04] transition-all">
              <span className="text-[9px] font-mono text-purple-400 block uppercase">5. Growth Score</span>
              <div className="text-lg font-bold text-purple-400 font-mono mt-0.5">{stats.growthScore}%</div>
              <span className="text-[8px] font-mono text-purple-500 uppercase font-semibold">Territory target</span>
            </div>
            {/* 6. Commissions */}
            <div className="bg-white/[0.02] border border-white/5 p-3 rounded-xl hover:bg-white/[0.04] transition-all w-all">
              <span className="text-[9px] font-mono text-gold-400 block uppercase">6. Commissions</span>
              <div className="text-lg font-bold text-gold-450 font-mono mt-0.5 truncate" title={formatINR(stats.partnerCommissions)}>
                {formatINR(stats.partnerCommissions)}
              </div>
              <span className="text-[8px] font-mono text-gold-450 uppercase font-semibold">1.2% Override</span>
            </div>
            {/* 7. Network Size */}
            <div className="bg-white/[0.02] border border-white/5 p-3 rounded-xl hover:bg-white/[0.04] transition-all col-span-2 sm:col-span-1">
              <span className="text-[9px] font-mono text-gray-550 block uppercase">7. Network Size</span>
              <div className="text-lg font-bold text-white font-mono mt-0.5">{stats.networkSize}</div>
              <span className="text-[8px] font-mono text-gray-400 uppercase">Partner nodes</span>
            </div>
          </div>
        </div>

        {/* TAB CONTROLS */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveTab('customer')}
            className={`px-5 py-3 rounded-2xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer border ${
              activeTab === 'customer'
                ? 'bg-gradient-to-r from-gold-500 to-amber-500 border-gold-500 text-black font-bold shadow-lg'
                : 'bg-[#121214]/60 border-white/5 text-gray-400 hover:text-white hover:border-white/10'
            }`}
            id="btn-platform-tab-customer"
          >
            <Smartphone className="w-4 h-4" />
            <span>Customer App</span>
          </button>

          <button
            onClick={() => setActiveTab('salon')}
            className={`px-5 py-3 rounded-2xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer border ${
              activeTab === 'salon'
                ? 'bg-gradient-to-r from-gold-500 to-amber-500 border-gold-500 text-black font-bold shadow-lg'
                : 'bg-[#121214]/60 border-white/5 text-gray-400 hover:text-white hover:border-white/10'
            }`}
            id="btn-platform-tab-salon"
          >
            <Building className="w-4 h-4" />
            <span>Salon Dashboard</span>
          </button>

          <button
            onClick={() => setActiveTab('partner')}
            className={`px-5 py-3 rounded-2xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer border ${
              activeTab === 'partner'
                ? 'bg-gradient-to-r from-gold-500 to-amber-500 border-gold-500 text-black font-bold shadow-lg'
                : 'bg-[#121214]/60 border-white/5 text-gray-400 hover:text-white hover:border-white/10'
            }`}
            id="btn-platform-tab-partner"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Growth Partner Dashboard</span>
          </button>

          <button
            onClick={() => setActiveTab('admin')}
            className={`px-5 py-3 rounded-2xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer border ${
              activeTab === 'admin'
                ? 'bg-gradient-to-r from-gold-500 to-amber-500 border-gold-500 text-black font-bold shadow-lg'
                : 'bg-[#121214]/60 border-white/5 text-gray-400 hover:text-white hover:border-white/10'
            }`}
            id="btn-platform-tab-admin"
          >
            <Cpu className="w-4 h-4" />
            <span>Admin Dashboard</span>
          </button>
        </div>

        {/* CONTAINER WINDOW PANEL WITH SUBMIT INTERACTION MOCKS */}
        <div className="bg-[#0e0e11] border border-white/10 rounded-3xl p-6 sm:p-8 min-h-[500px] flex flex-col justify-between shadow-2xl relative">
          
          {/* Top bezel layout decoration */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-[#16161a] py-1 px-4 rounded-full border border-white/5 font-mono text-[9px] text-gray-500 uppercase select-none">
            <span className="w-2 h-2 rounded-full bg-red-500/50 block" />
            <span className="w-2 h-2 rounded-full bg-yellow-500/50 block" />
            <span className="w-2 h-2 rounded-full bg-green-500/50 block" />
            <span className="ml-2">nexora_kernel_v2.09.sh</span>
          </div>

          <div className="pt-6">
            <AnimatePresence mode="wait">
              {activeTab === 'customer' && (
                <motion.div
                  key="customer-preview"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
                >
                  {/* Left Column: Handheld Emulator */}
                  <div className="lg:col-span-5 flex justify-center">
                    <div className="w-72 bg-black border-[6px] border-white/15 rounded-[40px] p-4 relative shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] overflow-hidden">
                      {/* Notch */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-5 bg-black rounded-b-xl border-x border-b border-white/5 z-20 flex items-center justify-center">
                        <div className="w-12 h-1 bg-white/20 rounded-full" />
                      </div>

                      {/* Phone Home Screen */}
                      <div className="relative pt-6 h-[460px] flex flex-col justify-between text-left">
                        
                        {/* Header */}
                        <div>
                          <div className="flex items-center justify-between mt-2 mb-4">
                            <div className="flex items-center gap-1 text-[10px] text-gray-400 font-mono">
                              <MapPin className="w-3 h-3 text-gold-500" />
                              <span>{selectedCity} Hub</span>
                            </div>
                            <div className="w-6 h-6 rounded-full bg-white/10 border border-white/15 flex items-center justify-center font-mono text-[8px] font-bold text-white">
                              U3
                            </div>
                          </div>

                          <div className="relative mb-4">
                            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-500" />
                            <input 
                              type="text" 
                              placeholder="Search hair spa, salon near you..." 
                              disabled
                              className="w-full bg-white/5 border border-white/5 rounded-lg py-1.5 pl-7 pr-2 text-[10px] text-white opacity-60"
                            />
                          </div>

                          {/* Quick categories */}
                          <div className="flex items-center gap-1 overflow-x-auto pb-2 scrollbar-none mb-4">
                            {categories.map((cat, idx) => (
                              <span key={idx} className="px-2 py-0.5 roundedbg bg-white/5 border border-white/5 text-[8px] text-gray-300 whitespace-nowrap">
                                {cat}
                              </span>
                            ))}
                          </div>

                          {/* Featured salon */}
                          <div className="bg-white/[0.02] border border-white/10 rounded-xl p-2.5 relative overflow-hidden group">
                            <div className="absolute top-1 right-1 py-0.5 px-1.5 text-[6px] font-mono font-bold text-black bg-gold-500 rounded uppercase">
                              Verified
                            </div>
                            <h5 className="font-bold text-[10px] text-white font-sans">Bounce Premier</h5>
                            <p className="text-[8px] text-gray-400 mt-0.5 flex items-center gap-1">
                              <Star className="w-2.5 h-2.5 fill-gold-500 text-gold-500" />
                              <span>4.9 (120+ Bookings) • Indiranagar</span>
                            </p>
                            <div className="w-full h-14 bg-white/5 rounded-lg mt-2 flex items-center justify-center relative overflow-hidden">
                              <span className="text-[7px] text-gray-500 uppercase font-mono tracking-widest z-10">Ambient Salon Mock</span>
                              <div className="absolute inset-x-0 bottom-0 py-1 bg-black/60 text-center font-mono text-[8px] text-gold-450">
                                Global styling specialists
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Booking Prompt */}
                        <div className="bg-[#121214] border border-gold-500/10 p-2.5 rounded-xl space-y-2 mt-4">
                          <div className="flex justify-between items-center">
                            <span className="text-[8px] font-mono text-gold-450 uppercase font-bold">1 Click Reservation</span>
                            <span className="text-[8px] font-mono text-white">₹1,800 total</span>
                          </div>
                          <button 
                            onClick={incrementBooking}
                            className="w-full py-1.5 bg-gradient-to-r from-gold-500 to-amber-500 hover:brightness-110 active:scale-[0.98] text-black font-bold font-mono text-[9px] uppercase rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1"
                          >
                            <span>Book Now & Earn Coins</span>
                            <ChevronRight className="w-3 h-3" />
                          </button>
                          <p className="text-[7px] text-gray-500 text-center leading-none">
                            Taps simulate actual Booking metric increments above.
                          </p>
                        </div>

                      </div>
                    </div>
                  </div>

                  {/* Right Column: Key Details explaining the integration */}
                  <div className="lg:col-span-7 space-y-6 text-left flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-gold-450 uppercase tracking-widest font-bold">
                        Dimension One • The Client Interface
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white font-display mt-2">
                        Immersive, frictionless user experience.
                      </h3>
                      <p className="text-sm text-gray-400 leading-relaxed font-sans mt-3">
                        From the digital customer app, customers explore professional listings sorted by real-time geolocation. They can select verified salons, filter through certified beauty therapists, and checkout in <span className="text-emerald-400 font-semibold font-mono">1-tap</span> using their secure biometric wallet.
                      </p>
                    </div>

                    <div className="space-y-4">
                      {/* Interactive cities switch */}
                      <div>
                        <span className="text-[9px] font-mono text-gray-550 uppercase font-bold block mb-2">Simulated client city node:</span>
                        <div className="flex flex-wrap gap-2">
                          {["Bengaluru", "Delhi NCR", "Mumbai", "Hyderabad", "Pune"].map((city) => (
                            <button
                              key={city}
                              onClick={() => setSelectedCity(city)}
                              className={`py-1.5 px-3 rounded-xl text-[10px] font-semibold font-mono transition-all border ${
                                selectedCity === city 
                                  ? 'bg-white/10 border-white/20 text-white font-bold' 
                                  : 'bg-black/40 border-white/5 text-gray-500 hover:text-white'
                              }`}
                            >
                              {city}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Displaying Live metric connection */}
                      <div className="bg-white/5 border border-white/15 p-4 rounded-2xl">
                        <h4 className="text-xs font-bold text-white flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-emerald-450 shrink-0" />
                          <span>Connected Metrics Stream</span>
                        </h4>
                        <p className="text-[11px] text-gray-400 font-sans mt-1">
                          When clients place bookings in our consumer interface, the platform automatically routes the payment through smart ledger systems, triggering automatic metric calculations in the <span className="text-[#d39d2c] font-bold">Salon Dashboard</span> and <span className="text-[#d39d2c] font-bold">Growth Partner Dashboard</span> models instantly.
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-gray-500">
                      <span>CLIENT APP LIVE SIMULATOR</span>
                      <span className="text-[#d39d2c]">VERIFIED LEDGER DIRECT CONSOLE</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'salon' && (
                <motion.div
                  key="salon-preview"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch text-left"
                >
                  {/* Left Column: Salon Dashboard Mock */}
                  <div className="lg:col-span-7 space-y-6">
                    <div>
                      <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest font-bold">
                        Dimension Two • Store Intelligence
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white font-display mt-2">
                        Empower beauty masters. Track scheduling & tickets.
                      </h3>
                      <p className="text-sm text-gray-400 leading-relaxed font-sans mt-3">
                        The merchant panel provides store owners with instant overviews of incoming salon/spa appointments, booking revenues, stylist calendars, and local customer loyalty cards.
                      </p>
                    </div>

                    {/* Integrated mini scheduler preview */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-mono text-gray-550 uppercase font-bold">Recent Booking Tickets:</span>
                        <span className="text-[9px] font-mono text-emerald-400 animate-pulse font-bold uppercase">4 Live Reservations</span>
                      </div>
                      
                      <div className="space-y-2">
                        {sampleBookings.map((b) => (
                          <div key={b.id} className="bg-black/40 border border-white/5 p-3 rounded-xl flex items-center justify-between text-xs font-sans">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-lg bg-purple-500/15 flex items-center justify-center font-mono text-xs font-bold text-purple-400">
                                {b.id.toUpperCase()}
                              </div>
                              <div>
                                <p className="font-semibold text-white">{b.customerName}</p>
                                <p className="text-[10px] text-gray-500 font-mono">{b.service} at {b.salon}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="font-semibold text-white font-mono">{formatINR(b.amount)}</p>
                              <div className="flex items-center gap-1 justify-end mt-0.5">
                                <span className={`w-1.5 h-1.5 rounded-full ${b.status === 'Confirmed' ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                                <span className="text-[9px] font-mono text-gray-500">{b.status}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Operational Stats Card */}
                  <div className="lg:col-span-5 bg-black/40 border border-white/5 rounded-2xl p-6 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-white/5">
                        <span className="text-[10px] font-mono text-gray-500 uppercase font-bold">MEMBER SALON OVERVIEW</span>
                        <span className="px-2 py-0.5 bg-purple-950/20 border border-purple-500/20 text-purple-400 rounded-md font-mono text-[9px] font-semibold">BOUNCE_HUB_BLR</span>
                      </div>

                      <div className="space-y-3 pt-2">
                        <div>
                          <span className="text-[9px] font-mono text-gray-550 uppercase block font-bold">Estimated Fortnight Salon Revenue:</span>
                          <div className="text-2xl font-bold font-mono text-white mt-0.5">{formatINR(stats.revenue / 2)}</div>
                        </div>

                        <div>
                          <span className="text-[9px] font-mono text-gray-550 uppercase block font-bold">Unique Local Customers Keyed:</span>
                          <div className="text-base font-bold font-mono text-white mt-0.5">{Math.round(stats.customers / 4)} Customers</div>
                        </div>

                        <div>
                          <span className="text-[9px] font-mono text-gray-550 uppercase block font-bold">Net Reviews (Nexora System):</span>
                          <div className="text-sm font-bold text-gold-450 mt-1 flex items-center gap-1 font-mono">
                            <Star className="w-4 h-4 text-gold-500 fill-gold-500 inline" />
                            <span>{stats.reviewsAverage} / 5 Stars ({stats.reviewsCount} verified reviews)</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/5 mt-6 space-y-3">
                      <p className="text-[10px] text-gray-400 italic font-sans leading-normal">
                        "Your proprietary client reviews and individual styling commissions are cryptographically isolated. System overrides cannot be modified by third parties."
                      </p>
                      <button 
                        onClick={incrementBooking}
                        className="w-full py-2 bg-gradient-to-r from-purple-800 to-indigo-900 border border-white/10 hover:border-purple-500 text-white font-bold font-mono text-[10px] uppercase tracking-wider rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5"
                      >
                        <span>Simulate Quick Guest booking Ticket</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'partner' && (
                <motion.div
                  key="partner-preview"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch text-left"
                >
                  {/* Left Column: Key explanations */}
                  <div className="lg:col-span-5 bg-black/40 border border-white/5 rounded-2xl p-6 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-white/5">
                        <span className="text-[10px] font-mono text-gold-400 uppercase font-bold">ROYALTY SPLIT INTERACTION</span>
                        <span className="px-2 py-0.5 bg-gold-450/10 border border-gold-500/25 text-gold-450 rounded-md font-mono text-[9px] font-semibold">1.2% Override</span>
                      </div>

                      <div className="space-y-3 pt-2 font-sans text-xs">
                        <div>
                          <span className="text-[9px] font-mono text-gray-550 uppercase block font-bold">Growth Partner Royalties:</span>
                          <div className="text-2xl font-bold font-mono text-gold-450 mt-0.5">{formatINR(stats.partnerCommissions)}</div>
                        </div>

                        <div>
                          <span className="text-[9px] font-mono text-gray-550 uppercase block font-bold">Network Connected Size:</span>
                          <div className="text-base font-bold font-mono text-white mt-0.5">{stats.networkSize} Active Salon Nodes</div>
                        </div>

                        <div>
                          <span className="text-[9px] font-mono text-gray-550 uppercase block font-bold">Network Growth Score:</span>
                          <div className="text-sm font-bold text-emerald-400 mt-0.5 font-mono">{stats.growthScore}% (Optimal pacing)</div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/5 mt-6 space-y-3">
                      <p className="text-[10px] text-gray-400 leading-relaxed font-sans">
                        Partners track their connection network size, check weekly payout cycles, monitor physical gift milestones (Branded core i7 Laptops, welcome kits), and trace localized franchise overrides.
                      </p>
                      <button
                        onClick={() => {
                          const target = document.querySelector('#partner-dashboard-section');
                          if (target) {
                            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          }
                        }}
                        className="w-full py-2.5 bg-gold-500 hover:bg-gold-400 text-black font-bold font-mono text-[10px] uppercase tracking-widest rounded-xl transition-all text-center cursor-pointer"
                      >
                        Inspect Vetted Dashboard Tab
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Live Network Node Tree mockup */}
                  <div className="lg:col-span-7 space-y-6">
                    <div>
                      <span className="text-[10px] font-mono text-gold-450 uppercase tracking-widest font-bold">
                        Dimension Three • Connected Alliance
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white font-display mt-2">
                        Direct franchise royalty overrides.
                      </h3>
                      <p className="text-sm text-gray-400 leading-relaxed font-sans mt-3">
                        The Growth Partner console focuses on regional scale metrics: overall team size, total connected salon volume, active overrides, and cumulative lifetime partner payout schedules.
                      </p>
                    </div>

                    {/* Simple geometric visual simulator representing the node network mapping */}
                    <div className="bg-black/50 border border-white/10 p-5 rounded-2xl text-center space-y-4">
                      <div className="flex justify-between items-center text-[10px] font-mono text-gray-400">
                        <span>Active Partner Territory Map</span>
                        <span className="text-gold-450 font-bold">Secure Node Witness</span>
                      </div>

                      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 py-4">
                        <div className="w-14 h-14 rounded-2xl bg-gold-500 text-black flex flex-col items-center justify-center font-bold relative shadow-lg">
                          <ShieldCheck className="w-5 h-5 mb-0.5" />
                          <span className="font-mono text-[8px] leading-tight font-bold">YOU</span>
                          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[#121214] block" />
                        </div>

                        <div className="w-8 h-[2px] bg-white/10 border-dashed" />

                        <div className="grid grid-cols-3 gap-3">
                          {[
                            { name: "Node_BLR_01", volume: "₹1,52,000", active: true },
                            { name: "Node_DEL_02", volume: "₹1,24,000", active: true },
                            { name: "Node_HYD_03", volume: "₹84,000", active: false }
                          ].map((node, index) => (
                            <div key={index} className={`p-2 rounded-xl border text-center font-mono ${node.active ? 'border-purple-500/20 bg-purple-950/10' : 'border-white/5 bg-black/40 opacity-40'}`}>
                              <span className="text-[8px] text-gray-400 font-bold block">{node.name}</span>
                              <span className={`text-[10px] font-bold mt-1 block ${node.active ? 'text-purple-400' : 'text-gray-500'}`}>{node.volume}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="text-[10px] text-gray-400 leading-normal">
                        Simulated live aggregate network transaction volumes flow instantly to your accounting register.
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'admin' && (
                <motion.div
                  key="admin-preview"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch text-left"
                >
                  {/* Left Column: Admin controls summary mockup */}
                  <div className="lg:col-span-6 space-y-6">
                    <div>
                      <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest font-bold">
                        Dimension Four • Sovereign Core operations
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white font-display mt-2">
                        Direct platform administration.
                      </h3>
                      <p className="text-sm text-gray-400 leading-relaxed font-sans mt-3">
                        The Master Admin cockpit provides systemic control grids. View cumulative platform-level fee bookings, audit recent merchant verification codes, process pending override clearance schedules, and dispatch local PR campaigns.
                      </p>
                    </div>

                    {/* 3 simple direct admin logs */}
                    <div className="space-y-2">
                      <span className="text-[9px] font-mono text-gray-550 uppercase font-bold block">Systemic Activity Stream Audit:</span>
                      
                      <div className="bg-black/40 border border-white/5 p-3 rounded-xl font-mono text-[10px] text-gray-400 space-y-1.5 leading-tight">
                        <p className="text-emerald-450 font-bold flex items-center gap-1.5">
                          <CheckCircle className="w-3.5 h-3.5" />
                          <span>[OK] Core database transaction ledger sync</span>
                        </p>
                        <p className="text-gray-500">
                          Authorized wallet clearance for ₹14,200 pending overrides in Node Bengaluru.
                        </p>
                      </div>

                      <div className="bg-black/40 border border-white/5 p-3 rounded-xl font-mono text-[10px] text-gray-400 space-y-1.5 leading-tight">
                        <p className="text-purple-400 font-bold flex items-center gap-1.5">
                          <Activity className="w-3.5 h-3.5" />
                          <span>[SYNC] New styling professional CV indexed in Hub Delhi</span>
                        </p>
                        <p className="text-gray-500">
                          CV forwarded to 4 neighborhood premium franchise partner boards.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Platform Audit Grid Card */}
                  <div className="lg:col-span-6 bg-black/40 border border-white/5 rounded-2xl p-6 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-white/5">
                        <span className="text-[10px] font-mono text-gray-500 uppercase font-bold">NEXORA PLATFORM LEDGER MASTER</span>
                        <span className="px-2 py-0.5 bg-rose-950/20 border border-rose-500/20 text-rose-450 rounded-md font-mono text-[9px] font-semibold">ROOT STATUS</span>
                      </div>

                      <div className="space-y-3 pt-2 font-sans text-xs">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <span className="text-[9px] font-mono text-gray-550 uppercase block font-bold">Total Platform Bookings:</span>
                            <div className="text-lg font-bold font-mono text-white mt-0.5">{stats.bookings}</div>
                          </div>
                          <div>
                            <span className="text-[9px] font-mono text-gray-550 uppercase block font-bold">Cumulative Net Volume:</span>
                            <div className="text-lg font-bold font-mono text-white mt-0.5 truncate">{formatINR(stats.revenue)}</div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <span className="text-[9px] font-mono text-gray-550 uppercase block font-bold">Platform commission fees (10%):</span>
                            <div className="text-lg font-bold font-mono text-purple-400 mt-0.5">{formatINR(stats.revenue * 0.10)}</div>
                          </div>
                          <div>
                            <span className="text-[9px] font-mono text-gray-550 uppercase block font-bold">Estimated Partner Overrides (1.2%):</span>
                            <div className="text-lg font-bold font-mono text-gold-450 mt-0.5">{formatINR(stats.partnerCommissions)}</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/5 mt-6 flex flex-col sm:flex-row gap-3">
                      <button 
                        onClick={incrementBooking} 
                        className="flex-1 py-2 bg-purple-500 hover:bg-purple-600 font-semibold font-mono text-[10px] text-white uppercase rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1"
                      >
                        <span>Simulate Block transaction</span>
                      </button>
                      <button 
                        onClick={resetSimulator} 
                        className="py-2 px-3 bg-white/5 hover:bg-white/10 text-gray-300 font-semibold font-mono text-[10px] uppercase rounded-xl transition-all cursor-pointer border border-white/5"
                      >
                        Reset Mock Engine
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Interactive footer details */}
          <div className="mt-8 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-[11px] font-sans text-gray-400 gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Real-time WebSocket feed verified. No server-side latency.</span>
            </div>
            
            <a 
              href="#partner-dashboard-section" 
              className="text-gold-450 hover:text-white font-semibold font-mono uppercase tracking-wider underline cursor-pointer"
            >
              Verify Active District Partner Node →
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
