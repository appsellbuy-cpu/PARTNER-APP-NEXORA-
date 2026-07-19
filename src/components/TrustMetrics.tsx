/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldAlert, BadgeCheck, Coins, Landmark, Sparkles, 
  ChevronDown, HelpCircle, CheckCircle2, Award, Zap 
} from 'lucide-react';
import { FaqItem } from '../types';

export default function TrustMetrics() {
  const [activeFaqCategory, setActiveFaqCategory] = useState<'partner' | 'salon' | 'general'>('general');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const trustBadges = [
    {
      title: 'Free Joining',
      metric: '₹0 Upfront Cost',
      desc: 'No activation dues, registration lockups, or subscription packages. We only score when your salon expands billing volumes.',
      icon: Award,
      badgeColor: 'border-gold-500/20 text-gold-400 bg-gold-500/5'
    },
    {
      title: 'No Investment',
      metric: 'Zero Capital Lock',
      desc: 'Sales Partners face zero financial friction. Avoid buying sample cases, licensing territory, or warehouse stocking commitments.',
      icon: Coins,
      badgeColor: 'border-purple-500/20 text-purple-400 bg-purple-500/5'
    },
    {
      title: 'Growth Ecosystem',
      metric: 'P2P Relationship Ledgers',
      desc: 'We are not standard bookkeeping tools. Nexora links booking flows directly down to distribution stock, cutting middlemen leaks.',
      icon: Landmark,
      badgeColor: 'border-indigo-500/20 text-indigo-400 bg-indigo-500/5'
    },
    {
      title: 'Recurring Opportunities',
      metric: 'Continuous Royalty Split',
      desc: 'Earn royalties for life. Every transaction made by your referred salons routes a passive commission back to you.',
      icon: Zap,
      badgeColor: 'border-pink-500/20 text-pink-400 bg-pink-500/5'
    }
  ];

  const faqItems: FaqItem[] = [
    {
      category: 'partner',
      question: 'How do Sales Partners earn passive income with Nexora?',
      answer: 'Sales Partners introduce local Salon Owners, Barber Shops, or Spas to the Nexora ecosystem. Once a salon logs into our system, the partner coordinates their custom setup. Whenever a client books or a distributor fulfills an inventory supply restock, 1.25% of the overall transact-value is split and piped instantly to the referring partner’s royalty wallet.'
    },
    {
      category: 'partner',
      question: 'Is there any quota or mandatory inventory to represent Nexora?',
      answer: 'No. Nexora is a decentralized network, not an MLM. We do not manufacture cosmetic products ourselves, meaning field partners are strictly advisors. You do not purchase stock or hit forced onboarding quotas.'
    },
    {
      category: 'salon',
      question: 'Are there really zero subscription costs for salons?',
      answer: "Yes, 100%. Traditional salon apps charge flat ₹2,000 to ₹5,000 monthly rentals regardless of bookings. Nexora SalonOS is entirely free to install. We do not extract fees from empty chairs; our ecosystem thrives purely by charging a tiny transaction split only on additional traffic we retrieve for your off-peak seats."
    },
    {
      category: 'salon',
      question: 'Can I keep my existing cosmetic distributor while using SalonOS?',
      answer: 'Absolutely! SalonOS coordinates with your existing distributors. They simply download our free distributor ledger and receive auto-stocking alerts immediately, reducing delays and lowering delivery costs for everyone.'
    },
    {
      category: 'general',
      question: 'Who backs the Nexora Beauty Ecosystem?',
      answer: "Nexora is built by beauty tech pioneers and financial ledger engineers committed to protecting local Indian salon operators from high software rents. We are building India's largest localized beauty commerce and relationship layer."
    },
    {
      category: 'general',
      question: 'What is the "Ecosystem Trust Clause"?',
      answer: 'We provide 100% telemetry transparency. Every booking split, brand cashback award, and distributor invoice is logged cleanly in your virtual ledger with direct download permissions, guaranteeing zero hidden costs or delay terms.'
    }
  ];

  const filteredFaqs = faqItems.filter(item => item.category === activeFaqCategory);

  return (
    <div className="relative py-24 bg-luxury-black/90 scroll-mt-20" id="trust">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Trust Badges Display */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-mono uppercase tracking-widest text-gold-400 bg-gold-400/5 px-3 py-1 rounded-full border border-gold-400/10 inline-block mb-3">
            Ecosystem Security & Pillar
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-medium text-white mb-4">
            Built On Unshakeable Trust
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Nexora is engineered to elevate, not exploit. We strip financial risk entirely, providing complete economic safety for both our field partners and salon managers.
          </p>
        </div>

        {/* 4 Trust Badges in Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {trustBadges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-luxury-card border border-white/5 p-6 rounded-2xl flex flex-col justify-between hover:border-gold-500/20 transition-colors duration-300 relative group glow-gold-effect"
              >
                <div>
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-5 ${badge.badgeColor}`}>
                    <Icon className="w-5 h-5 shrink-0" />
                  </div>
                  
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block mb-1">
                    {badge.metric}
                  </span>
                  
                  <h3 className="text-base font-display font-semibold text-white mb-2">
                    {badge.title}
                  </h3>
                  
                  <p className="text-xs text-gray-400 leading-relaxed font-sans">
                    {badge.desc}
                  </p>
                </div>
                
                {/* Decorative glow marker bottom-right */}
                <div className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full bg-gold-500 opacity-20 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            );
          })}
        </div>

        {/* High-Fidelity Categorized FAQ System */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8">
          
          {/* FAQ Navigation Sidebar (Left 4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-luxury-card border border-white/5 p-6 rounded-2xl text-left">
              <h3 className="text-lg font-display font-medium text-white mb-2 flex items-center space-x-2">
                <HelpCircle className="w-5 h-5 text-purple-400" />
                <span>Frequently Answered</span>
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed font-sans mb-6">
                Still exploring? Toggle category streams to view detailed network mechanisms for your role.
              </p>

              {/* Toggles */}
              <div className="space-y-2 flex flex-col">
                {[
                  { id: 'general', title: 'General Ecosystem' },
                  { id: 'partner', title: 'Sales Partner Program' },
                  { id: 'salon', title: 'SalonOS Membership Setup' }
                ].map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveFaqCategory(cat.id as any);
                      setExpandedFaq(null);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 font-mono ${
                      activeFaqCategory === cat.id
                        ? 'bg-gradient-to-r from-gold-500/10 to-purple-600/10 text-white border-l-2 border-gold-500 pl-3 bg-white/5'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                    id={`btn-faq-cat-${cat.id}`}
                  >
                    {cat.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Micro banner guaranteeing platform secure transparency */}
            <div className="p-4 rounded-xl border border-white/5 bg-luxury-gray text-xs text-gray-400 flex items-start space-x-2.5">
              <BadgeCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>We pledge a zero-spam environment. Your personal numbers and client lists remain fully encrypted and are never rented to advertising networks.</span>
            </div>
          </div>

          {/* Accordion List (Right 8 cols) */}
          <div className="lg:col-span-8 space-y-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFaqCategory}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="space-y-3"
              >
                {filteredFaqs.map((item, idx) => {
                  const isExpanded = expandedFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="bg-luxury-card border border-white/5 rounded-2xl overflow-hidden"
                    >
                      <button
                        onClick={() => setExpandedFaq(isExpanded ? null : idx)}
                        className="w-full flex items-center justify-between p-5 text-left text-sm sm:text-base font-semibold text-white hover:bg-white/5 transition-colors cursor-pointer"
                        id={`btn-faq-item-${idx}`}
                      >
                        <span className="pr-4">{item.question}</span>
                        <ChevronDown className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-gold-400' : ''}`} />
                      </button>

                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden border-t border-white/5 bg-luxury-black/30"
                          >
                            <div className="p-5 text-xs sm:text-sm text-gray-300 leading-relaxed font-sans select-text">
                              {item.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </div>
  );
}
