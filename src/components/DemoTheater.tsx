/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, Pause, RefreshCw, Scissors, Users, Route, 
  ArrowRight, ShieldCheck, Cpu, Terminal, Sparkles, Building 
} from 'lucide-react';

interface DemoStep {
  title: string;
  actor: string;
  description: string;
  consoleLogs: string[];
  systemMetrics: { label: string; value: string }[];
  accentColor: string;
}

export default function DemoTheater() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [timerProgress, setTimerProgress] = useState<number>(0);

  const steps: DemoStep[] = [
    {
      title: 'Customer Books Off-Peak Slot',
      actor: 'Beauty Customer → Salon Entry',
      description: 'A customer books an appointment at an empty chair slot during quiet Tuesday hours. Nexoras dynamic algorithmic scheduler optimizes the rate to pull in localized footfall.',
      consoleLogs: [
        'INIT: Client coordinates queried within 4km radius...',
        'QUERY: Fetching non-peak slots for "The Golden Comb" barber node...',
        'ALGO: Scheduling 45% off-peak rate incentive applied instantly.',
        'RESERVE: Slot confirmed at 14:15. Booking token: #NX-882910.'
      ],
      systemMetrics: [
        { label: 'Footfall Lift', value: '+35% expected' },
        { label: 'Booking Latency', value: '42ms' },
        { label: 'Optimized Discount', value: '₹220 saved' }
      ],
      accentColor: 'border-gold-450 bg-gold-950/20 text-gold-400'
    },
    {
      title: 'Instant Revenue Split & Passive Royalties',
      actor: 'Nexora Ledger Engine → Payouts',
      description: 'The transaction is processed safely. Nexora Core processes the ledger instantly: 98.75% is direct-deposited to the Salon Owner, and a 1.25% passive recurring royalty slice routes to the Sales Partner who referred them.',
      consoleLogs: [
        'SETTLE: Processing digital fee split for token #NX-882910...',
        'LEDGER_A: Routing ₹592.50 straight to Salon Owner virtual node.',
        'LEDGER_B: Routing ₹7.50 passive commission slice to Sales Partner #SP-101.',
        'COMM_SYS: Cumulative passive wallet for Vijay Sharma updated (+₹7.50).'
      ],
      systemMetrics: [
        { label: 'Owner Settlement', value: 'Immediate' },
        { label: 'Royalty Routed', value: '1.25% Passive' },
        { label: 'Security Protocols', value: 'AES-256 Lock' }
      ],
      accentColor: 'border-purple-500 bg-purple-950/20 text-purple-400'
    },
    {
      title: 'Automated Stock Replacement Trigger',
      actor: 'Salon OS Stock Control → Local Distributor',
      description: 'As the hairdressing service concludes, SalonOS tracks that the local Matrix luxury color supply has dipped below 15%. Nexora immediately compiles an optimized supply order, transmitting it to the local Distributor.',
      consoleLogs: [
        'TELEM: Inventory level for "Matrix Tone-Cool Shampoo" dips below 15% threshold.',
        'ROUTE: Generating automated regional bulk-purchase requisition order...',
        'MATCH: Localized Distributor #DIST-82 matches stock availability.',
        'TRANSMIT: Supply shipment authorized. Order dispatched for delivery.'
      ],
      systemMetrics: [
        { label: 'Inventory Level', value: 'Dips to 12% (Alert)' },
        { label: 'Supplier Connection', value: 'Direct Route' },
        { label: 'Logistics SLA', value: '4-hour shipping' }
      ],
      accentColor: 'border-indigo-500 bg-indigo-950/20 text-indigo-400'
    },
    {
      title: 'Cooperative Brand Cashback & Tokens',
      actor: 'Cosmetics Giant → Customer Retention',
      description: 'The manufacturing cosmetics giant spots the raw consumption wave inside our ecosystem ledger. They release instant cashbacks directly to the salon, and award loyalty tokens to the client.',
      consoleLogs: [
        'BRAND_INTEL: Supply consumption data matched in L\'Oreal regional dashboard.',
        'INSIGHTS: Retail consumption uptick spotted. Brand releases cashbacks.',
        'CASHBACK: ₹50 credited to "The Golden Comb" Salon OS co-op reserves.',
        'REWARD_COIN: 10 universal beauty tokens issued to customer wallet.'
      ],
      systemMetrics: [
        { label: 'Cooperative Cashback', value: '₹50 credited' },
        { label: 'Customer Retention', value: '92% Projected' },
        { label: 'Universals Coins Issued', value: '10 Tokens' }
      ],
      accentColor: 'border-pink-500 bg-pink-950/20 text-pink-400'
    }
  ];

  // Auto progression trigger
  useEffect(() => {
    let interval: any = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setTimerProgress(prev => {
          if (prev >= 100) {
            setActiveStep(current => (current + 1) % steps.length);
            return 0;
          }
          return prev + 1.25; // Speed multiplier for intervals
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying, activeStep, steps.length]);

  const handleStepClick = (index: number) => {
    setActiveStep(index);
    setTimerProgress(0);
    setIsPlaying(false);
  };

  const activeData = steps[activeStep];

  return (
    <div className="relative py-24 bg-luxury-black/95 scroll-mt-20" id="interactive-demo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header display */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl text-left">
            <span className="text-[11px] font-mono uppercase tracking-widest text-purple-400 bg-purple-500/5 px-3 py-1 rounded-full border border-purple-500/10 inline-block mb-3">
              Interactive Blueprint Live Demo
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-white mb-4">
              Watch The Ecosystem In Action
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Step into our virtual network theater to witness how Nexora integrates individual salon triggers into automated cash-flow and procurement pipelines in real-time.
            </p>
          </div>

          {/* Player controls */}
          <div className="flex items-center space-x-3 shrink-0">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center space-x-2 px-5 py-2.5 rounded-lg border border-white/5 bg-luxury-gray hover:bg-white/10 text-xs font-semibold text-white font-mono"
              id="btn-demo-play-pause"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-gold-400" />
                  <span>Pause Loop</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Resume Loop</span>
                </>
              )}
            </button>
            <button
              onClick={() => {
                setActiveStep(0);
                setTimerProgress(0);
                setIsPlaying(true);
              }}
              className="p-2.5 rounded-lg border border-white/5 bg-luxury-gray text-gray-400 hover:text-white"
              title="Reset Simulator"
              id="btn-demo-reset"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Simulator layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Timeline and indicators (Left 4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              {steps.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => handleStepClick(idx)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-300 relative overflow-hidden flex items-start space-x-3 cursor-pointer ${
                      isActive 
                        ? 'bg-luxury-card border-gold-500/30' 
                        : 'bg-transparent border-white/5 hover:border-white/10 hover:bg-white/5'
                    }`}
                    id={`btn-demo-step-${idx}`}
                  >
                    {/* Progress tracking line overlay */}
                    {isActive && isPlaying && (
                      <div 
                        className="absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-gold-500 to-purple-600 transition-all duration-100" 
                        style={{ width: `${timerProgress}%` }}
                      />
                    )}

                    {/* Step index */}
                    <div className={`w-6 h-6 rounded-md flex items-center justify-center font-mono text-[11px] font-bold shrink-0 mt-0.5 ${
                      isActive 
                        ? 'bg-gradient-to-tr from-gold-500 to-purple-600 text-white' 
                        : 'bg-white/5 text-gray-500'
                    }`}>
                      0{idx + 1}
                    </div>

                    <div>
                      <h4 className={`text-xs font-mono font-medium tracking-wider mb-0.5 ${isActive ? 'text-gold-400' : 'text-gray-400'}`}>
                        {step.actor}
                      </h4>
                      <h3 className={`text-sm font-semibold transition-colors ${isActive ? 'text-white' : 'text-gray-500'}`}>
                        {step.title}
                      </h3>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Simulated Live Statistics */}
            <div className="p-4 rounded-xl bg-luxury-card border border-white/5 flex items-center justify-between">
              <div className="flex items-center space-x-2.5">
                <Cpu className="w-5 h-5 text-purple-400 animate-pulse shrink-0" />
                <div className="text-left">
                  <span className="text-[10px] font-mono text-gray-500 uppercase block leading-none">Simulation State</span>
                  <span className="text-xs font-semibold text-white font-mono mt-0.5 inline-block">NODE_WEB_ACTIVE</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-mono text-gray-500 uppercase block leading-none">Network Latency</span>
                <span className="text-xs font-semibold text-emerald-400 font-mono mt-0.5 inline-block">12ms (Optimal)</span>
              </div>
            </div>
          </div>

          {/* Interactive Simulation Terminal Screen (Right 8 cols) */}
          <div className="lg:col-span-8 bg-luxury-card border border-white/5 rounded-2xl overflow-hidden flex flex-col justify-between p-6 shadow-2xl relative">
            {/* Visual glow overlay */}
            <div className="absolute top-0 right-0 w-44 h-44 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Terminal header */}
              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-5">
                <div className="flex items-center space-x-2">
                  <Terminal className="w-4 h-4 text-gold-400" />
                  <span className="text-xs text-gray-300 font-mono font-medium">
                    NexoraOS Trace Console // {activeData.actor}
                  </span>
                </div>
                <div className="flex items-center space-x-1.5 select-none">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
                </div>
              </div>

              {/* Narrator summary */}
              <div className="mb-6">
                <h4 className="text-lg font-display font-semibold text-white mb-2 flex items-center space-x-2">
                  <span>{activeData.title}</span>
                  <Sparkles className="w-4 h-4 text-[#d39d2c]" />
                </h4>
                <p className="text-sm text-gray-300 leading-relaxed max-w-2xl font-sans">
                  {activeData.description}
                </p>
              </div>

              {/* Console Logs */}
              <div className="bg-luxury-black border border-white/5 rounded-xl p-5 font-mono text-xs text-purple-300/90 space-y-2 relative overflow-hidden shadow-inner">
                {activeData.consoleLogs.map((log, index) => (
                  <motion.div
                    key={`${activeStep}-log-${index}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.15 }}
                    className="flex items-start space-x-2"
                  >
                    <span className="text-gray-600 selection:bg-purple-800 shrink-0">~ $</span>
                    <span className="select-text leading-relaxed tracking-wide text-gray-200">
                      {log.startsWith('INIT:') || log.startsWith('RESERVE:') || log.startsWith('TELEM:') || log.startsWith('CASHBACK:') 
                        ? <strong className="text-gold-400 font-bold">{log.slice(0, log.indexOf(':') + 1)}</strong>
                        : log.startsWith('ALGO:') || log.startsWith('SETTLE:') || log.startsWith('LEDGER_A:') || log.startsWith('LEDGER_B:') || log.startsWith('ROUTE:') || log.startsWith('MATCH:') || log.startsWith('TRANSMIT:') || log.startsWith('BRAND_INTEL:') || log.startsWith('REWARD_COIN:')
                        ? <strong className="text-purple-400 font-bold">{log.slice(0, log.indexOf(':') + 1)}</strong>
                        : null
                      }
                      {log.slice(log.indexOf(':') + 1)}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Metrics Panel */}
            <div className="mt-6 pt-5 border-t border-white/5">
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block mb-3">Telemetry Output metrics</span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {activeData.systemMetrics.map((met, index) => (
                  <div key={index} className="p-3 rounded-xl bg-white/5 border border-white/5 flex flex-col justify-between">
                    <span className="text-[10px] font-mono text-gray-400">{met.label}</span>
                    <span className="text-sm font-semibold text-white mt-1 font-mono">{met.value}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
