/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Crown, Award, Eye, Users, PhoneCall, TrendingUp, ShieldCheck, 
  ChevronRight, CircleDot, ArrowRight, Star, Quote
} from 'lucide-react';

interface Benefit {
  id: string;
  title: string;
  badge: string;
  desc: string;
  icon: React.ComponentType<any>;
  colorClass: string;
  borderClass: string;
}

export default function DistrictBusinessPartner() {
  const benefits: Benefit[] = [
    {
      id: "b_leadership",
      title: "Leadership Status",
      badge: "District Master Override",
      desc: "Receive regional master override rights. Commandeer active consulting nodes within your district and command passive residual royalties from general ticket growth across your municipal territory.",
      icon: Crown,
      colorClass: "text-gold-450 bg-gold-550/5",
      borderClass: "border-gold-500/20"
    },
    {
      id: "b_badge",
      title: "Partner Badge",
      badge: "Gold Verification",
      desc: "Unlock the physical Gold Cryptographic Badge alongside the digital verified passport. Establish supreme, undisputed authority during premium chain pitches and enterprise salon consultations.",
      icon: ShieldCheck,
      colorClass: "text-emerald-400 bg-emerald-500/5",
      borderClass: "border-emerald-500/15"
    },
    {
      id: "b_visibility",
      title: "Local Visibility",
      badge: "Media Syndicate PR",
      desc: "Be featured directly on Nexora's master map directories and geo-targeted search tools. Receive localized leads routed straight to your communication console automatically.",
      icon: Eye,
      colorClass: "text-purple-400 bg-purple-500/5",
      borderClass: "border-purple-500/15"
    },
    {
      id: "b_events",
      title: "Networking Events",
      badge: "Annual Retreats & Summits",
      desc: "Gain guaranteed priority passes to exclusive annual physical leadership roundtables, high-net-worth dinners, and closed-door corporate growth strategy circles.",
      icon: Users,
      colorClass: "text-blue-400 bg-blue-500/5",
      borderClass: "border-blue-500/15"
    },
    {
      id: "b_support",
      title: "Priority Support",
      badge: "24/7 Elite Hotlines",
      desc: "Say goodbye to traditional waitlines. Access a dedicated regional WhatsApp concierge helpdesk with direct lines to platform operations for expedited salon setups.",
      icon: PhoneCall,
      colorClass: "text-amber-500 bg-amber-500/5",
      borderClass: "border-amber-500/15"
    },
    {
      id: "b_multipliers",
      title: "Growth Multipliers",
      badge: "Compounding ROI",
      desc: "Multiply volume earnings with recurring regional speed bonuses. Reaching performance benchmarks boosts your royalty bracket from 1.2% base clear to premier leadership tiers.",
      icon: TrendingUp,
      colorClass: "text-rose-400 bg-rose-500/5",
      borderClass: "border-rose-500/15"
    }
  ];

  const handleScrollToForm = () => {
    const target = document.querySelector('#contact-form-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => {
        const salesTabBtn = document.querySelector('#btn-form-tab-sales') as HTMLButtonElement;
        if (salesTabBtn) {
          salesTabBtn.click();
        }
      }, 550);
    }
  };

  return (
    <section className="relative py-24 bg-luxury-black border-b border-white/5 overflow-hidden" id="district-partner-section">
      
      {/* Visual Ambient Atmosphere Backgrounds */}
      <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-purple-900/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-96 h-96 bg-gold-400/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* UPPER ANCHOR LABEL */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-mono uppercase tracking-widest text-gold-450 bg-gold-550/5 px-3 py-1 rounded-full border border-gold-500/10 inline-block mb-5 font-bold">
            SECTION 13 • District Leadership
          </span>
          
          {/* MANTRA TYPOGRAPHY */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium tracking-tight text-white mb-2 leading-tight">
            Build Your District.<br />
            <span className="text-gold-450 hover:text-gold-400 cursor-default transition-all">Build Your Network.</span><br />
            Build Your Income.
          </h2>
          
          <div className="w-16 h-[2px] bg-gradient-to-r from-gold-500 to-purple-500 mx-auto my-6" />
          
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-sans">
            As a qualified District Business Partner, you shape local cosmetics & beauty-service digitization. Commandeer active nodes, enjoy passive overrides, and lock in the ultimate elite privileges.
          </p>
        </div>

        {/* COMPREHENSIVE BENEFITS BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch mb-16" id="district-benefits-grid">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            
            return (
              <div
                key={benefit.id}
                className={`p-6 sm:p-8 rounded-3xl bg-[#121214]/40 border ${benefit.borderClass} hover:bg-[#121214]/80 transition-all duration-300 flex flex-col justify-between group text-left relative overflow-hidden`}
                id={`district-benefit-card-${benefit.id}`}
              >
                {/* Micro corner highlight */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/[0.01] rounded-full blur-[25px] pointer-events-none group-hover:bg-white/[0.02] transition-all" />

                <div>
                  
                  {/* Icon & Mini Badge Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-2xl border ${benefit.borderClass} ${benefit.colorClass} shrink-0 group-hover:scale-105 transition-transform duration-250`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    
                    <span className="text-[9px] font-mono bg-white/5 border border-white/5 text-gray-400 px-2 py-0.5 rounded uppercase font-bold tracking-wider">
                      {benefit.badge}
                    </span>
                  </div>

                  {/* Benefit Title */}
                  <h4 className="text-lg font-bold text-white mb-3 group-hover:text-gold-450 transition-colors">
                    {benefit.title}
                  </h4>

                  {/* Detail Description */}
                  <p className="text-xs text-gray-400 leading-relaxed font-sans mb-6">
                    {benefit.desc}
                  </p>

                </div>

                {/* Footer system check */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between font-mono text-[9px] text-gray-500 uppercase select-none">
                  <span>Certified Merit</span>
                  <span className="text-emerald-450 font-bold flex items-center space-x-1">
                    <CircleDot className="w-1.5 h-1.5 bg-emerald-400 text-emerald-400 rounded-full inline-block mr-1 leading-none select-none tracking-normal" />
                    <span>Active Privilege</span>
                  </span>
                </div>

              </div>
            );
          })}
        </div>

        {/* QUOTE AND CALL TO ACTION CONTAINER */}
        <div className="bg-[#121214]/30 border border-white/5 p-8 rounded-3xl text-center max-w-4xl mx-auto relative overflow-hidden" id="district-partner-callout">
          <div className="absolute top-[10%] right-[10%] w-32 h-32 bg-gold-400/[0.02] rounded-full blur-[30px] pointer-events-none" />
          
          <Quote className="w-8 h-8 text-gold-500/20 mx-auto mb-4" />
          
          <h4 className="text-base font-semibold text-white font-display mb-2">
            "The District Program turns salon networks into stable sovereign infrastructure assets."
          </h4>
          <p className="text-xs text-gray-400 max-w-2xl mx-auto mb-6 leading-relaxed">
            Ready to secure exclusive master node distribution rights for your municipal zip code? Partner applications are reviewed by regional platform directors on a rolling basis.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleScrollToForm}
              className="w-full sm:w-auto px-6 py-3.5 bg-gold-500 hover:bg-gold-400 active:scale-[0.98] text-black font-bold text-xs uppercase tracking-widest font-mono rounded-xl transition-all cursor-pointer flex items-center justify-center space-x-2"
              id="btn-district-apply-cta"
            >
              <span>Apply For Master Node</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            
            <a 
              href="#milestone-rewards-section" 
              className="text-xs font-mono text-gray-400 hover:text-white transition-all underline px-3 py-2 cursor-pointer"
              id="btn-district-learn-milestones"
            >
              Inspect Milestone Targets
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
