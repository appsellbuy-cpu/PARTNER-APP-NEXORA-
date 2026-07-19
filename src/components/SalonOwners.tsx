/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, Star, Calendar, Share2, TrendingUp, Sparkles, 
  MessageSquare, Database, QrCode, Gift, Award, Brain, 
  Laptop, Search, CheckCircle2, ChevronRight, Zap
} from 'lucide-react';

export default function SalonOwners() {
  const [hoveredBenefit, setHoveredBenefit] = useState<string | null>(null);
  const [selectedFeature, setSelectedFeature] = useState<string>("booking");

  const benefits = [
    {
      id: "b1",
      title: "More Customers",
      desc: "Get listed in our local discovery maps. Nexora guides fresh local styling seeker leads right to your doorstep.",
      impact: "Average 35% footfall increase",
      icon: Users,
      color: "text-amber-400 bg-amber-500/10 border-amber-500/20"
    },
    {
      id: "b2",
      title: "More Reviews",
      desc: "Automatic feedback loops trigger on service exit. Build trusted 5-star ratings without manual friction.",
      impact: "3x faster review collection",
      icon: Star,
      color: "text-purple-400 bg-purple-500/10 border-purple-500/20"
    },
    {
      id: "b3",
      title: "More Bookings",
      desc: "Let clients schedule chair seats 24/7. Auto-fill idle non-peak hours with custom slot offers.",
      impact: "45% increase in seat efficiency",
      icon: Calendar,
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
    },
    {
      id: "b4",
      title: "More Referrals",
      desc: "Dynamic credit engines reward your clients automatically when they refer their friends and network.",
      impact: "Viral customer acquisition",
      icon: Share2,
      color: "text-blue-400 bg-[#3b82f6]/10 border-[#3b82f6]/20"
    },
    {
      id: "b5",
      title: "More Revenue",
      desc: "Eliminate expensive subscription softwares. Maximize secondary retail upsell and member deposits.",
      impact: "Average ₹45,000+ extra monthly",
      icon: TrendingUp,
      color: "text-pink-400 bg-pink-500/10 border-pink-500/20"
    }
  ];

  const features = [
    {
      id: "booking",
      title: "Online Booking",
      subtitle: "24/7 Direct Seat Booking",
      description: "Allow clients to book their preferred services, date, and stylists directly from a neat WhatsApp link, custom web portal, or QR scan. Eliminates phone call friction entirely.",
      benefitText: "Fills slots while your staff is busy holding shears.",
      icon: Calendar,
      tag: "CORE SYSTEM"
    },
    {
      id: "whatsapp",
      title: "WhatsApp Automation",
      subtitle: "Silent Assistant",
      description: "Send automated booking reminders, booking confirmations, invoices, and feedback requests directly over official WhatsApp. Zero manuals needed from your reception desk.",
      benefitText: "98% read-rate compared to standard spam emails.",
      icon: MessageSquare,
      tag: "ENGAGEMENT"
    },
    {
      id: "crm",
      title: "Customer CRM",
      subtitle: "Intelligent Profile Memory",
      description: "Store service formulations (dye levels, style profiles, preferred hair oils), client spend history, birthday milestones, and custom stylist notes in a pristine database.",
      benefitText: "Deliver highly personal, elite services every visit.",
      icon: Database,
      tag: "RETENTION"
    },
    {
      id: "payments",
      title: "QR Payments",
      subtitle: "Zero Middleman Brokerage",
      description: "Direct-to-bank UPI and card payments integrated into your billing terminal. Customers scan, choose, and deposit. Instant settlement directly to your ledger.",
      benefitText: "Drop traditional 2% POS card rental fees.",
      icon: QrCode,
      tag: "FINANCES"
    },
    {
      id: "loyalty",
      title: "Loyalty Program",
      subtitle: "Autonomous Stamp & Point Engine",
      description: "Auto-reward points for spending, referrals, or booking off-peak slots. Points are saved to their digital wallet and redeemable on next checkout.",
      benefitText: "Incentivize long-term client retention automatically.",
      icon: Gift,
      tag: "MULTIPLIER"
    },
    {
      id: "membership",
      title: "Membership Program",
      subtitle: "Upfront Cash Deposits",
      description: "Sell premium membership wallets with tiered benefits (e.g., Load ₹5000, get ₹1000 credit bonus). Secure upfront luxury deposits for guaranteed future visits.",
      benefitText: "Boost your salon's weekly working capital cashflow.",
      icon: Award,
      tag: "CASH RESERVE"
    },
    {
      id: "analytics",
      title: "AI Analytics",
      subtitle: "Smart Trend Advisory",
      description: "Predict demand and manage staff roster allocations. Track stylist commission splits, popular services, low retail stock levels, and daily revenue statistics.",
      benefitText: "Smarter management replacing guessing games.",
      icon: Brain,
      tag: "DECISION OS"
    },
    {
      id: "reviews",
      title: "Review Engine",
      subtitle: "Reputation Auto-Booster",
      description: "Prompt consumers on service completion to post review comments. Seamlessly redirect happy clients to publish directly on Google Maps.",
      benefitText: "Stack dozens of organic 5-star ratings fast.",
      icon: Star,
      tag: "VIRAL RADIUS"
    },
    {
      id: "website",
      title: "Website Builder",
      subtitle: "Custom Brand Showcase",
      description: "Nexora auto-generates a high-converting, beautiful mobile website for your salon. Display stylist bios, catalogs, pricing lists, and direct buttons.",
      benefitText: "No developer required. Ready inside 2 minutes.",
      icon: Laptop,
      tag: "VISUAL FRONT"
    },
    {
      id: "seo",
      title: "SEO Visibility",
      subtitle: "Local Web Authority",
      description: "High-grade local optimization ranks your salon's digital booking page among nearby competitors. Capture search intent queries instantly.",
      benefitText: "Appear #1 when users map search 'best salon near me'.",
      icon: Search,
      tag: "DEMAND INGEST"
    }
  ];

  const activeFeature = features.find(f => f.id === selectedFeature) || features[0];
  const ActiveFeatureIcon = activeFeature.icon;

  const handleScrollToForm = () => {
    const target = document.querySelector('#contact-form-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative py-24 bg-[#08080a] border-b border-white/5 overflow-hidden" id="salon-owners-section">
      
      {/* Dynamic Background Graphics */}
      <div className="absolute top-[30%] right-[-10%] w-[380px] h-[380px] bg-gold-400/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[380px] h-[380px] bg-purple-900/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-mono uppercase tracking-widest text-gold-450 bg-gold-550/5 px-3 py-1 rounded-full border border-gold-500/10 inline-block mb-4">
            Master Node Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium tracking-tight text-white mb-4">
            Sovereign OS For Salon Owners
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-sans">
            Unleash the supreme combination of local discovery, smart automation, and direct payouts. We pack all operational advantages into a single unified workspace.
          </p>
        </div>

        {/* Benefits Cards Section */}
        <div className="mb-20">
          <div className="flex items-center space-x-2.5 mb-6 justify-center sm:justify-start border-b border-white/5 pb-3">
            <span className="h-2 w-2 rounded-full bg-gold-450 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-gray-400 font-bold">
              Key Strategic Benefits
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              const isHovered = hoveredBenefit === benefit.id;

              return (
                <div
                  key={benefit.id}
                  onMouseEnter={() => setHoveredBenefit(benefit.id)}
                  onMouseLeave={() => setHoveredBenefit(null)}
                  className={`p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                    isHovered 
                      ? 'border-gold-500/40 bg-luxury-card scale-[1.03] shadow-[0_4px_25px_rgba(211,157,44,0.06)]' 
                      : 'border-white/5 bg-[#0f0f12]/50'
                  }`}
                  id={`benefit-card-${benefit.id}`}
                >
                  <div>
                    {/* Icon Badge */}
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mb-4 ${benefit.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>

                    <h3 className="text-base font-display font-semibold text-white mb-2">
                      {benefit.title}
                    </h3>

                    <p className="text-xs text-gray-400 leading-relaxed font-sans mb-4">
                      {benefit.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/5">
                    <span className="block text-[10px] font-mono text-emerald-400 font-semibold tracking-wide uppercase">
                      🚀 {benefit.impact}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Features Split Panel Section (Left: Tabs List, Right: Live Interactive Card Detail) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-4">
          
          {/* Main Features Side Tab Panel (Left 7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-2.5 mb-6 justify-center sm:justify-start">
                <span className="h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
                <span className="text-xs font-mono uppercase tracking-widest text-gray-400 font-bold">
                  Built-In Platform Features
                </span>
                <span className="text-[10px] font-mono text-purple-400 px-2 py-0.5 rounded border border-purple-500/10">
                  Select and Explore
                </span>
              </div>

              {/* Responsive Grid list of 10 features requested */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" id="features-tabs-grid">
                {features.map((feature) => {
                  const Icon = feature.icon;
                  const isSelected = selectedFeature === feature.id;

                  return (
                    <button
                      key={feature.id}
                      onClick={() => setSelectedFeature(feature.id)}
                      className={`w-full text-left p-3.5 rounded-xl border flex items-center space-x-3 transition-all duration-200 cursor-pointer ${
                        isSelected 
                          ? 'bg-luxury-card border-gold-500/30 shadow-md ring-1 ring-gold-500/10' 
                          : 'bg-[#121215]/30 border-white/5 hover:border-white/10 hover:bg-[#121215]/60'
                      }`}
                      id={`feature-btn-${feature.id}`}
                    >
                      <div className={`p-1.5 rounded-lg shrink-0 ${
                        isSelected ? 'text-gold-400 bg-gold-500/10 border border-gold-500/20' : 'text-gray-500 bg-white/[0.01] border border-transparent'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className={`text-xs font-semibold ${isSelected ? 'text-white' : 'text-gray-400'}`}>
                            {feature.title}
                          </span>
                          {isSelected && (
                            <span className="text-[7px] font-mono bg-gold-450/10 text-[#d39d2c] px-1 rounded uppercase">
                              Active
                            </span>
                          )}
                        </div>
                        <span className="text-[9px] text-gray-500 font-mono block tracking-wide truncate">
                          {feature.tag}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom Dynamic Prompt */}
            <div className="mt-6 p-4 rounded-xl border border-white/5 bg-luxury-card/30 flex items-center justify-between">
              <span className="text-[10px] font-mono text-gray-500">
                10 Flagship features integrated directly inside Nexora. No plugins required.
              </span>
            </div>
          </div>

          {/* Core Interactive Detail Card Screen (Right 5 Cols) */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedFeature}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                className="bg-gradient-to-b from-luxury-card to-luxury-black border border-white/10 rounded-3xl p-6 sm:p-8 h-full flex flex-col justify-between shadow-2xl relative overflow-hidden"
              >
                {/* Central gradient sphere wrapper */}
                <div className="absolute top-[-20%] right-[-20%] w-60 h-60 bg-gold-500/5 rounded-full blur-[70px] pointer-events-none" />

                <div>
                  
                  {/* Decorative Header details */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-6">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-[#a855f7] bg-purple-500/5 px-2 py-0.5 rounded border border-purple-500/10">
                      Nexora Unified App
                    </span>
                    <span className="text-[10px] font-mono text-gray-500">
                      Module: {activeFeature.tag}
                    </span>
                  </div>

                  {/* Icon and Title Badge */}
                  <div className="flex items-center space-x-3 mb-5">
                    <div className="p-3 rounded-2xl bg-gold-500/10 border border-gold-500/20 text-gold-400">
                      <ActiveFeatureIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-gold-450 uppercase tracking-widest block font-bold">Feature Detail</span>
                      <h3 className="text-xl font-display font-medium text-white">{activeFeature.title}</h3>
                    </div>
                  </div>

                  {/* Subtitle tag */}
                  <p className="text-xs font-mono text-gold-400/90 bg-gold-500/5 px-2.5 py-1 rounded border border-gold-500/10 inline-block mb-5">
                    ✦ {activeFeature.subtitle}
                  </p>

                  {/* Major Description text */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-6 font-sans">
                    {activeFeature.description}
                  </p>

                  {/* Advantage Impact Quote */}
                  <div className="bg-[#0b0b0d] p-4 rounded-xl border border-white/5 relative">
                    <div className="absolute top-2 right-3 font-mono text-[8px] text-gray-500">
                      LIFT METRIC
                    </div>
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block mb-1.5 font-bold">
                      Business Outcome
                    </span>
                    <p className="text-xs text-white leading-relaxed font-sans font-medium italic border-l border-[#d39d2c]/30 pl-3">
                      "{activeFeature.benefitText}"
                    </p>
                  </div>

                </div>

                {/* Final Interactive CTA Area inside Card */}
                <div className="pt-6 border-t border-white/5 mt-8 flex flex-col gap-4">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-gray-500">Onboarding Cost:</span>
                    <span className="text-emerald-400 font-bold font-sans">₹0 Free Forever</span>
                  </div>

                  <button
                    onClick={handleScrollToForm}
                    className="w-full py-4 bg-gradient-to-r from-gold-500 hover:from-gold-400 to-purple-600 hover:to-purple-500 rounded-xl text-xs font-bold text-white text-center hover:shadow-lg hover:shadow-gold-500/10 transition-all flex items-center justify-center space-x-2 cursor-pointer uppercase tracking-widest"
                    id="btn-owners-grow-salon-cta"
                  >
                    <span>Grow My Salon</span>
                    <Zap className="w-3.5 h-3.5 fill-current text-white shrink-0" />
                  </button>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
