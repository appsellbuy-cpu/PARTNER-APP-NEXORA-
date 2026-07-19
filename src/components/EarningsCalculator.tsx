/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Calculator, IndianRupee, HelpCircle, Trophy, Sparkles, TrendingUp, Compass, ArrowRight 
} from 'lucide-react';

export default function EarningsCalculator() {
  const [activeTab, setActiveTab] = useState<'salesman' | 'owner'>('salesman');
  
  // Salesman states
  const [salonsReferred, setSalonsReferred] = useState<number>(15);
  const [monthlyBookingSpent, setMonthlyBookingSpent] = useState<number>(300000); // 3 lakh
  
  // Salon Owner states
  const [currentRevenue, setCurrentRevenue] = useState<number>(400000); // 4 lakh
  const [unfilledDailySlots, setUnfilledDailySlots] = useState<number>(6);
  const [averageTicketSize, setAverageTicketSize] = useState<number>(600);

  // Formatting helpers
  const formatRupee = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(value);
  };

  // Calculations for Sales Partner passive commissions
  // Sales partner earns customized commissions based on total volumes routed through SalonOS
  // Direct referral commission + indirect distributor stock referral average = 1.25% of overall transaction volume
  const partnerMonthlyPassiveEarnings = salonsReferred * (monthlyBookingSpent * 0.0125);
  const partnerAnnualEarnings = partnerMonthlyPassiveEarnings * 12;

  const getPartnerRank = (count: number) => {
    if (count < 10) return { name: 'Ecosystem Associate', color: 'text-gray-400', desc: 'Starting your passive income journey in local sectors.', badge: 'Bronze' };
    if (count < 30) return { name: 'Gold Growth Partner', color: 'text-gold-400', desc: 'Unlocking recurring monthly brand stocking kickbacks.', badge: 'Gold' };
    return { name: 'Sovereign Network Lead', color: 'text-purple-400', desc: 'Receiving premium distribution commissions and multi-district bonuses.', badge: 'Sovereign' };
  };

  const partnerRank = getPartnerRank(salonsReferred);

  // Calculations for Salon Owner ROI
  // Unfilled slot rate fill efficiency = 45% of unfilled slots retrieved using Nexora smart incentives.
  const estimatedRetrievedSlotsMonthly = Math.round(unfilledDailySlots * 30 * 0.45);
  const monthlyRetrievedRevenue = estimatedRetrievedSlotsMonthly * averageTicketSize;
  const standardSoftwareSaving = 3500; // Average cost of subscriptions saved
  const totalMonthlyBenefits = monthlyRetrievedRevenue + standardSoftwareSaving;
  const annualBenefit = totalMonthlyBenefits * 12;

  return (
    <div className="relative py-20 bg-luxury-black/90">
      {/* Decorative gradient glowing blur behind calculators */}
      <div className="absolute top-[30%] left-[20%] w-80 h-80 bg-purple-600/10 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[20%] w-80 h-80 bg-gold-400/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Container header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-mono uppercase tracking-widest text-gold-400 bg-gold-500/5 px-3 py-1 rounded-full border border-gold-400/20 inline-block mb-3">
            Real-Time Economics
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-white mb-4">
            Ecosystem Profit Simulator
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            See the raw commercial power of connecting salons, distributors, and brands. Choose your track to calculate potential recurring passive profits or ROI efficiency.
          </p>

          {/* Toggle buttons */}
          <div className="mt-8 inline-flex p-1 bg-luxury-gray border border-white/5 rounded-xl">
            <button
              onClick={() => setActiveTab('salesman')}
              className={`flex items-center space-x-2 px-6 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 font-display ${
                activeTab === 'salesman'
                  ? 'bg-gradient-to-r from-gold-500 to-purple-600 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
              id="btn-calc-tab-salesman"
            >
              <Trophy className="w-4 h-4 shrink-0" />
              <span>For Beauty Salesmen</span>
            </button>
            <button
              onClick={() => setActiveTab('owner')}
              className={`flex items-center space-x-2 px-6 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 font-display ${
                activeTab === 'owner'
                  ? 'bg-gradient-to-r from-gold-500 to-purple-600 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white'
              }`}
              id="btn-calc-tab-owner"
            >
              <TrendingUp className="w-4 h-4 shrink-0" />
              <span>For Salon Owners</span>
            </button>
          </div>
        </div>

        {/* Dynamic Track Panel */}
        {activeTab === 'salesman' ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            key="salesman"
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
          >
            {/* Input Controls (Left 7 cols) */}
            <div className="lg:col-span-7 bg-luxury-card border border-white/5 p-6 sm:p-8 rounded-3xl flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-display font-medium text-white mb-2 flex items-center space-x-2">
                  <Calculator className="w-5 h-5 text-gold-500" />
                  <span>Growth Partner Earnings</span>
                </h3>
                <p className="text-xs text-gray-400 mb-8 leading-relaxed font-sans">
                  Convert local relationships with barber shops, makeup centers, and salons into lifetime recurring passive commission structures. Refer once—earn continuously.
                </p>

                {/* Control 1 */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-xs sm:text-sm font-medium text-gray-300 flex items-center space-x-1.5">
                      <span>Total Salons Referred:</span>
                      <span className="text-[10px] bg-[#d39d2c]/10 text-gold-400 border border-gold-500/20 px-2 py-0.5 rounded font-mono font-bold">
                        {salonsReferred} spaces
                      </span>
                    </label>
                    <span className="text-xs font-mono text-gray-500 select-none">Goal: 50+</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    step="1"
                    value={salonsReferred}
                    onChange={(e) => setSalonsReferred(parseInt(e.target.value))}
                    className="w-full accent-gold-500 h-1.5 bg-luxury-black rounded-lg cursor-pointer"
                    id="slider-referrals"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-gray-500 mt-2 select-none">
                    <span>1 Referral</span>
                    <span>50 Refers</span>
                    <span>100 Refers</span>
                  </div>
                </div>

                {/* Control 2 */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-xs sm:text-sm font-medium text-gray-300 flex items-center space-x-1.5">
                      <span>Average Monthly Billing routed per salon:</span>
                      <span className="text-[10px] bg-purple-500/10 text-purple-400 border border-purple-500/20 px-2 py-0.5 rounded font-mono font-bold">
                        {formatRupee(monthlyBookingSpent)}
                      </span>
                    </label>
                  </div>
                  <input
                    type="range"
                    min="50000"
                    max="1000000"
                    step="25000"
                    value={monthlyBookingSpent}
                    onChange={(e) => setMonthlyBookingSpent(parseInt(e.target.value))}
                    className="w-full accent-purple-600 h-1.5 bg-luxury-black rounded-lg cursor-pointer"
                    id="slider-billing"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-gray-500 mt-2 select-none">
                    <span>₹50,000</span>
                    <span>₹5,000,000</span>
                    <span>₹10,00,000</span>
                  </div>
                </div>
              </div>

              {/* Security info disclaimer */}
              <div className="mt-8 pt-6 border-t border-white/5 flex items-start space-x-2.5">
                <Compass className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <p className="text-[11px] text-gray-400 leading-relaxed">
                  *Commissions are computed over direct digital bookings and product supply restock cycles routed through Nexora. Higher referred volumes unlock premium tiers yielding up to 2.5% of overall regional transacted values.
                </p>
              </div>
            </div>

            {/* Simulated Outputs (Right 5 cols) */}
            <div className="lg:col-span-5 bg-gradient-to-b from-gold-950/15 via-luxury-card to-luxury-black border border-gold-500/15 rounded-3xl p-6 sm:p-8 flex flex-col justify-between glow-gold-effect">
              <div>
                <div className="text-center pb-6 border-b border-white/5">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-gold-400">Estimated Passive Payola</span>
                  <div className="text-3xl sm:text-4xl font-display font-bold text-metallic-gold mt-2">
                    {formatRupee(partnerMonthlyPassiveEarnings)}
                  </div>
                  <span className="text-xs text-gray-400">Received every month dynamically</span>
                </div>

                <div className="py-6 border-b border-white/5 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400">Annualized passive income:</span>
                    <span className="text-sm font-semibold font-mono text-white">
                      {formatRupee(partnerAnnualEarnings)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400">Investment Required:</span>
                    <span className="text-xs font-semibold font-mono text-emerald-400 uppercase">
                      ₹0 (No investment)
                    </span>
                  </div>
                </div>

                {/* Partner Rank Badge */}
                <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/5 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-1.5 text-[9px] font-bold font-mono tracking-wider bg-gold-500/20 text-gold-400 rounded-bl border-l border-b border-gold-500/20 uppercase">
                    {partnerRank.badge} Tier
                  </div>
                  <h4 className={`text-base font-display font-semibold ${partnerRank.color} mb-1 flex items-center space-x-1.5`}>
                    <span>{partnerRank.name}</span>
                    <Sparkles className="w-3.5 h-3.5" />
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed font-sans">
                    {partnerRank.desc} Reach 30+ referred salons to achieve premium Sovereign status.
                  </p>
                </div>
              </div>

              <div className="pt-8">
                <a
                  href="#contact-form-section"
                  className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-gold-500 hover:bg-gold-400 text-luxury-black text-sm font-bold shadow-lg shadow-gold-500/10 transition-all duration-300 group"
                  id="btn-calc-apply-partner"
                >
                  <span>Become Growth Partner Now</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            key="owner"
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
          >
            {/* Input Controls (Left 7 cols) */}
            <div className="lg:col-span-7 bg-luxury-card border border-white/5 p-6 sm:p-8 rounded-3xl flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-display font-medium text-white mb-2 flex items-center space-x-2">
                  <Calculator className="w-5 h-5 text-purple-400" />
                  <span>SalonOS Member ROI Optimizer</span>
                </h3>
                <p className="text-xs text-gray-400 mb-8 leading-relaxed font-sans">
                  Recover empty slots using algorithmic client matching, automate inventory routes directly to suppliers, and shred high software lease charges. Only pay when you grow.
                </p>

                {/* Control 1 */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-xs sm:text-sm font-medium text-gray-300 flex items-center space-x-1.5">
                      <span>Salon's Average Monthly Billing:</span>
                      <span className="text-[10px] bg-purple-500/10 text-purple-400 border border-purple-500/20 px-2 py-0.5 rounded font-mono font-bold">
                        {formatRupee(currentRevenue)}
                      </span>
                    </label>
                  </div>
                  <input
                    type="range"
                    min="50000"
                    max="1500000"
                    step="25000"
                    value={currentRevenue}
                    onChange={(e) => setCurrentRevenue(parseInt(e.target.value))}
                    className="w-full accent-purple-600 h-1.5 bg-luxury-black rounded-lg cursor-pointer"
                    id="slider-salon-rev"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-gray-500 mt-2 select-none">
                    <span>₹50,000</span>
                    <span>₹7,50,000</span>
                    <span>₹15,00,000</span>
                  </div>
                </div>

                {/* Control 2 \& 3 in Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <label className="text-xs font-medium text-gray-300 flex items-center space-x-1.5">
                        <span>Daily Unfilled Chairs/Slots:</span>
                        <span className="text-[10px] bg-amber-500/10 text-amber-500 px-1.5 py-0.5 rounded font-mono font-bold">
                          {unfilledDailySlots} seats
                        </span>
                      </label>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="20"
                      step="1"
                      value={unfilledDailySlots}
                      onChange={(e) => setUnfilledDailySlots(parseInt(e.target.value))}
                      className="w-full accent-gold-500 h-1.5 bg-luxury-black rounded-lg cursor-pointer"
                      id="slider-slots"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <label className="text-xs font-medium text-gray-300 flex items-center space-x-1.5">
                        <span>Average Price / Ticket Size:</span>
                        <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 rounded font-mono font-bold">
                          {formatRupee(averageTicketSize)}
                        </span>
                      </label>
                    </div>
                    <input
                      type="range"
                      min="200"
                      max="5000"
                      step="50"
                      value={averageTicketSize}
                      onChange={(e) => setAverageTicketSize(parseInt(e.target.value))}
                      className="w-full accent-slate-400 h-1.5 bg-luxury-black rounded-lg cursor-pointer animate-pulse"
                      id="slider-ticket"
                    />
                  </div>
                </div>
              </div>

              {/* Verification and pricing clarity */}
              <div className="mt-8 pt-6 border-t border-white/5 flex items-start space-x-2.5">
                <HelpCircle className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <p className="text-[11px] text-gray-400 leading-relaxed font-sans">
                  *ROI recovery calculation uses standard 45% efficiency in filling empty off-peak slots with local geo-targeted client notifications. Savings includes standard ₹3,500 monthly booking portal subscription package cancellations.
                </p>
              </div>
            </div>

            {/* Simulated Outputs (Right 5 cols) */}
            <div className="lg:col-span-5 bg-gradient-to-b from-purple-950/15 via-luxury-card to-luxury-black border border-purple-500/15 rounded-3xl p-6 sm:p-8 flex flex-col justify-between glow-gold-effect">
              <div>
                <div className="text-center pb-6 border-b border-white/5">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-purple-400">Estimated Monthly Revenue Lift</span>
                  <div className="text-3xl sm:text-4xl font-display font-bold text-purple-300 mt-2">
                    {formatRupee(totalMonthlyBenefits)}
                  </div>
                  <span className="text-xs text-gray-400">Additional recurring profit unlocked</span>
                </div>

                <div className="py-6 border-b border-white/5 space-y-4 font-sans text-xs">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">From smart off-peak bookings:</span>
                    <span className="font-semibold text-white font-mono">{formatRupee(monthlyRetrievedRevenue)}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">From subscription software savings:</span>
                    <span className="font-semibold text-emerald-400 font-mono">+ {formatRupee(standardSoftwareSaving)}/mo</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Annual net benefit increase:</span>
                    <span className="font-semibold text-gold-400 font-mono text-sm">{formatRupee(annualBenefit)}</span>
                  </div>
                </div>

                <div className="mt-6 p-4 rounded-xl bg-purple-950/5 border border-purple-500/10 text-xs text-gray-300 leading-relaxed font-sans">
                  <strong className="text-purple-400 font-medium">SalonOS Member Perks:</strong> By dropping flat software rentals and switching to shared local client booking gains, you protect your cash reserves while scaling with automated brand kickbacks.
                </div>
              </div>

              <div className="pt-8">
                <a
                  href="#contact-form-section"
                  className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-sm font-bold shadow-lg shadow-purple-500/20 transition-all duration-300 group"
                  id="btn-calc-apply-salon"
                >
                  <span>Register SalonOS Membership</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        )}

      </div>
    </div>
  );
}
