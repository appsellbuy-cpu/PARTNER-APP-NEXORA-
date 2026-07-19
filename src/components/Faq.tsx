/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronDown, HelpCircle, Network, CheckCircle2, 
  Sparkles, ShieldCheck, HeartHandshake, Zap, Award
} from 'lucide-react';

interface FaqData {
  id: string;
  question: string;
  answer: string;
  badge?: string;
}

export default function Faq() {
  const [expandedId, setExpandedId] = useState<string | null>("faq-salonos");

  const faqs: FaqData[] = [
    {
      id: "faq-salonos",
      question: "What is Nexora SalonOS?",
      answer: "Nexora SalonOS is an advanced, premium cloud operating system purpose-built for modern beauty salons, spa chains, parlours, and barbershops. It integrates automated booking slot scheduling, active staff commissions, central digital payment checking, and live stock orders into a single, high-performance visual dashboard.",
      badge: "Core Platform"
    },
    {
      id: "faq-only-salons",
      question: "Is Nexora only for salons?",
      answer: "No. The Nexora network is a fully connected beauty business ecosystem. While SalonOS handles physical operations, the platform connects high-end luxury salons, regional growth partners, wholesale cosmetic brands, barbershops, certified stylist academies, and local customers under one unified transaction framework.",
      badge: "Ecosystem"
    },
    {
      id: "faq-parlours",
      question: "Can beauty parlours join?",
      answer: "Yes, absolutely. Any local beauty parlour can onboard to SalonOS. Parlours can immediately automate check-ins, eliminate empty booking chairs during off-peak slots, accept all digital cards & UPI payments, and market directly to verified nearby customers.",
      badge: "Parlours"
    },
    {
      id: "faq-barbershops",
      question: "Can barbershops join?",
      answer: "Yes. From premium grooming lounges to traditional barbershops, operators use our seat allocation engine to track stylist shifts, coordinate walk-ins with real-time slot bookings, and secure residual client retention with integrated loyalty programs.",
      badge: "Barbershops"
    },
    {
      id: "faq-bookings",
      question: "How do bookings work?",
      answer: "Our system eliminates scheduling friction. Local customers browse active salons on the Nexora Client Dashboard, secure slots in real-time with card/UPI checkout, and book their preferred stylist. The request synchronizes onto the merchant dashboard instantly with zero overlapping gaps.",
      badge: "Bookings"
    },
    {
      id: "faq-partners",
      question: "How do Growth Partners earn?",
      answer: "Growth Partners are the local operators of Nexora's district nodes. They secure residual revenue overrides of up to 1.2% base royalty on all digital checkout volumes processed across the salon clusters they register. They also unlock premium milestone tech hardware (laptops, key fobs) and incentive status.",
      badge: "Earning Engine"
    },
    {
      id: "faq-customer-app",
      question: "Is there a customer app?",
      answer: "Yes. The premium Nexora Customer Hub provides verified users with one-click slot matching, transparent treatment logs, digital cash-back wallet overrides, direct stylist scheduling, and seamless checkout approvals.",
      badge: "Customer Hub"
    },
    {
      id: "faq-distributors",
      question: "Can distributors join?",
      answer: "Yes. Wholesale product distributors and verified cosmetic brands link directly into our SalonOS automated replenishment board. Whenever terminal checks indicate inventory has dipped below safety parameters, an auto-order routes directly to the supply channel.",
      badge: "Logistics Sync"
    },
    {
      id: "faq-academy",
      question: "Is training available through Academy?",
      answer: "Yes. The integrated Nexora Academy offers stylized vocational onboarding, standard platform operations courses, and master stylist credentials. This confirms that all connected salons meet high-end global beauty and customer service benchmarks.",
      badge: "Academy"
    },
    {
      id: "faq-get-started",
      question: "How do I get started?",
      answer: "Getting started takes under 2 minutes. Enter your business coordinates in our Dual Alliance Registration form below. Simply choose 'Join SalonOS' as an active shop, or check 'Become Growth Partner' to secure your district's exclusive transaction override rights.",
      badge: "Activation"
    }
  ];

  return (
    <section className="relative py-28 bg-[#040406] border-b border-white/5 overflow-hidden" id="faq-section-premium">
      {/* Background neon violet highlights and grids */}
      <div className="absolute inset-0 bg-[#040406]" />
      <div className="absolute top-[5%] left-[50%] -translate-x-1/2 w-[700px] h-[700px] bg-purple-900/[0.04] rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/25 to-transparent pointer-events-none" />

      {/* Futuristic digital grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(147,51,234,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.012)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* UPPER HEADER HEADLINES */}
        <div className="text-center mb-16" id="faq-header-content">
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-purple-400 bg-purple-500/5 px-3 py-1 rounded-full border border-purple-500/20 inline-block mb-4 font-bold select-none">
            SECTION 13 // RESOLUTION CENTER
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white uppercase tracking-tight leading-none">
            Frequently Asked Questions
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-4 mb-5 rounded-full" />
          <p className="text-gray-400 text-sm leading-relaxed max-w-xl mx-auto font-sans">
            Everything You Need To Know About Nexora
          </p>
        </div>

        {/* ACCORDION FAQ CONTAINER with luxury violet glowing glassmorphism cards */}
        <div className="space-y-4" id="faq-accordions-group">
          {faqs.map((faq) => {
            const isExpanded = expandedId === faq.id;

            return (
              <div 
                key={faq.id} 
                className={`bg-[#0a0a0d]/60 border backdrop-blur-md rounded-2xl overflow-hidden transition-all duration-300 ${
                  isExpanded 
                    ? 'border-purple-500/35 shadow-[0_0_25px_rgba(168,85,247,0.12)] bg-[#0d0a14]/50' 
                    : 'border-white/5 hover:border-purple-500/15 hover:bg-[#0a0a0d]/90'
                }`}
                id={`faq-accordion-item-${faq.id}`}
              >
                {/* Accordion Trigger row (Ensures target area fits usability guideline) */}
                <button
                  onClick={() => setExpandedId(isExpanded ? null : faq.id)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer transition-all hover:bg-white/[0.01] min-h-[50px]"
                  id={`btn-toggle-faq-${faq.id}`}
                >
                  <div className="flex items-center gap-4 pr-4">
                    {/* Unique layout identifier logo */}
                    <div className={`p-2 rounded-lg text-[9px] font-mono font-black leading-none select-none tracking-wider shrink-0 uppercase border ${
                      isExpanded 
                        ? 'bg-purple-500/15 text-purple-400 border-purple-500/30' 
                        : 'bg-white/5 text-gray-400 border-transparent'
                    }`}>
                      {faq.badge}
                    </div>
                    <span className="text-sm sm:text-base font-bold font-display text-white tracking-wide">
                      {faq.question}
                    </span>
                  </div>
                  
                  {/* Rotating Chevron icon with neon violet highlights */}
                  <div className={`p-1.5 rounded-full border transition-all ${
                    isExpanded ? 'border-purple-500/30 bg-purple-500/5' : 'border-white/5'
                  }`}>
                    <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-purple-405' : ''}`} />
                  </div>
                </button>

                {/* Expanded Content with Framer Motion */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: 'easeOut' }}
                      className="overflow-hidden border-t border-white/5"
                    >
                      <div className="p-6 text-xs sm:text-sm text-gray-300 leading-relaxed font-sans bg-purple-950/[0.05] select-text">
                        <p>{faq.answer}</p>

                        {/* Security check footer */}
                        <div className="mt-4 flex items-center gap-2 text-[9px] font-mono text-gray-550 justify-end uppercase select-none font-bold">
                          <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
                          <span>Nexora Verified Knowledge Base Node</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* BOTTOM METRIC SUMMARY BANNER with Neon Violet borders */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-purple-500/[0.04] to-indigo-500/[0.04] border border-purple-500/20 flex flex-col sm:flex-row items-center justify-between gap-6 text-left" id="faq-cta-callout">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-purple-500/5 border border-purple-500/20 rounded-2xl shrink-0">
              <Zap className="w-5 h-5 text-purple-400 animate-pulse" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white tracking-tight uppercase">
                Ready to Join the Tech Revolution?
              </h4>
              <p className="text-xs text-gray-400 mt-1 font-sans font-medium">
                Whether you run an upscale beauty shop or want to secure regional overrides, we have a gateway ready.
              </p>
            </div>
          </div>
          <a
            href="#alliance-registration"
            className="py-3 px-6 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-black text-xs rounded-xl cursor-pointer hover:opacity-90 transition-all font-mono uppercase tracking-wider whitespace-nowrap inline-flex items-center gap-1.5 min-h-[44px] shadow-[0_4px_15px_rgba(168,85,247,0.25)] border border-purple-500/30"
            id="faq-cta-btn-go-calc"
          >
            <span>GO TO FORM GATEWAY</span>
            <ChevronDown className="w-3.5 h-3.5 -rotate-90" />
          </a>
        </div>

      </div>
    </section>
  );
}
