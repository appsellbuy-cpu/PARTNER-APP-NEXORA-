import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, ArrowRight, Search, Calendar, BarChart3, Users, ShoppingBag, TrendingUp, 
  Sparkles, Globe, ShieldCheck, Check, X, Maximize2
} from 'lucide-react';

export default function NewHeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('DISCOVERY');

  const categories = [
    { name: "DISCOVERY", icon: Search, label: "Search Salons" },
    { name: "BOOK", icon: Calendar, label: "Instant Appointments" },
    { name: "BUILD", icon: BarChart3, label: "SalonOS Tech" },
    { name: "HIRE", icon: Users, label: "Job Portal" },
    { name: "SELL", icon: ShoppingBag, label: "Products & Supplies" },
    { name: "GROW", icon: TrendingUp, label: "Growth Partner" },
  ];

  const valueProps = [
    { number: "5+", title: "Key User Groups", subtitle: "Customers, Salons, Pros, Partners & Brands" },
    { number: "One", title: "Connected Ecosystem", subtitle: "Unified digital beauty infrastructure" },
    { number: "Infinite", title: "Business Opportunities", subtitle: "Recurring growth & revenue models" },
    { number: "Beauty", title: "A Bigger Industry", subtitle: "Growing together across PAN-India" },
  ];

  const handleScrollToSection = (id: string) => {
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative pt-24 pb-16 bg-[#040406] text-white overflow-hidden select-none" id="new-hero-section">
      
      {/* Ambient background lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gold-500/[0.04] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-purple-900/[0.05] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* BRAND NEW GENERATED HERO BANNER IMAGE */}
        <div className="mb-12 relative group">
          
          <div className="relative rounded-3xl border border-gold-500/30 overflow-hidden bg-[#0a0a0e] shadow-[0_0_60px_rgba(211,157,44,0.2)] group-hover:border-gold-500/60 transition-all duration-500">
            
            {/* Newly Generated Custom Nexora Hero Banner Image */}
            <img 
              src="/src/assets/images/nexora_hero_banner_1793106996784.jpg" 
              alt="Nexora - The Global Beauty Growth Network Hero Banner" 
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.01]"
            />

            {/* Subtle Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 pointer-events-none" />

            {/* Expand Image Modal Action */}
            <button
              onClick={() => setIsImageModalOpen(true)}
              className="absolute top-4 right-4 bg-black/80 hover:bg-black border border-gold-500/40 text-gold-400 p-2.5 rounded-xl backdrop-blur-md transition-all cursor-pointer shadow-xl flex items-center gap-1.5 text-xs font-mono font-bold"
              id="btn-expand-hero-image"
            >
              <Maximize2 className="w-4 h-4" />
              <span className="hidden sm:inline">VIEW FULL RES</span>
            </button>

            {/* Top Left Badge */}
            <div className="absolute top-4 left-4 bg-black/80 border border-gold-500/30 text-gold-400 px-3 py-1 rounded-xl text-[10px] font-mono font-black uppercase tracking-wider backdrop-blur-md flex items-center gap-1.5 shadow-xl">
              <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
              <span>NEXORA ECOSYSTEM V2.0</span>
            </div>

          </div>

        </div>

        {/* INTERACTIVE HERO TEXT & CTA CONTROLS */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 font-mono text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Sparkles className="w-3.5 h-3.5" />
            THE GLOBAL BEAUTY GROWTH NETWORK
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black font-display uppercase tracking-tight leading-tight mb-6"
          >
            Beauty Industry Ko <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-amber-300 to-gold-500 italic">
              Connect Karna Hai.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-sans mb-8"
          >
            Nexora customers, beauty businesses, professionals, Growth Partners, brands aur suppliers ko ek connected digital ecosystem main le raha hai.
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <button 
              onClick={() => handleScrollToSection('#ecosystem-network')}
              className="px-8 py-4 bg-gradient-to-r from-gold-500 to-amber-600 hover:from-gold-400 hover:to-amber-500 text-black font-black uppercase tracking-wider text-xs sm:text-sm rounded-2xl transition-all shadow-[0_0_30px_rgba(211,157,44,0.3)] cursor-pointer flex items-center gap-2 group"
              id="btn-explore-ecosystem"
            >
              <span>Explore Ecosystem</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button 
              onClick={() => setIsVideoOpen(true)}
              className="px-8 py-4 bg-black/60 hover:bg-black border border-white/15 hover:border-gold-500/40 text-white font-bold uppercase tracking-wider text-xs sm:text-sm rounded-2xl transition-all cursor-pointer flex items-center gap-2.5 backdrop-blur-md"
              id="btn-watch-hero-video"
            >
              <div className="w-6 h-6 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center">
                <Play className="w-3 h-3 fill-current ml-0.5" />
              </div>
              <span>Watch Video</span>
            </button>
          </motion.div>

        </div>

        {/* FEATURED CATEGORY NAVIGATION BAR */}
        <div className="bg-[#0a0a0e] border border-white/10 rounded-2xl p-2 mb-12 shadow-2xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 text-center">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.name;

              return (
                <button
                  key={cat.name}
                  onClick={() => {
                    setActiveCategory(cat.name);
                    if (cat.name === 'BUILD') handleScrollToSection('#salon-revenue-performance');
                    if (cat.name === 'GROW') handleScrollToSection('#partner-dashboard-section');
                    if (cat.name === 'HIRE') handleScrollToSection('#beauty-job-portal');
                  }}
                  className={`p-3 rounded-xl transition-all cursor-pointer flex flex-col items-center justify-center gap-1.5 border ${
                    isActive 
                      ? 'bg-gold-500/15 border-gold-500/40 text-gold-400 shadow-[0_0_15px_rgba(211,157,44,0.15)]' 
                      : 'bg-black/40 border-transparent text-gray-400 hover:text-white hover:border-white/10'
                  }`}
                  id={`btn-category-${cat.name.toLowerCase()}`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'text-gold-400' : 'text-gray-500'}`} />
                  <span className="font-mono text-[10px] font-black uppercase tracking-wider block">
                    {cat.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* BOTTOM VALUE PROPOSITION CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {valueProps.map((vp, idx) => (
            <div key={idx} className="bg-gradient-to-b from-[#111116] to-[#09090c] border border-white/10 p-5 rounded-2xl flex items-center gap-4 hover:border-gold-500/30 transition-all shadow-xl">
              <div className="text-3xl font-black text-gold-400 font-mono shrink-0">
                {vp.number}
              </div>
              <div>
                <h4 className="text-white font-bold text-sm font-display uppercase tracking-wide">
                  {vp.title}
                </h4>
                <p className="text-gray-400 text-xs font-sans mt-0.5">
                  {vp.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* FULL-RES IMAGE ZOOM MODAL */}
      <AnimatePresence>
        {isImageModalOpen && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-6xl w-full bg-[#0a0a0e] border border-gold-500/40 rounded-3xl p-4 overflow-hidden shadow-2xl"
            >
              <button 
                onClick={() => setIsImageModalOpen(false)}
                className="absolute top-4 right-4 bg-black/80 hover:bg-black text-white p-2 rounded-xl border border-white/20 z-10 cursor-pointer font-mono text-xs uppercase"
              >
                ✕ Close Preview
              </button>
              
              <img 
                src="/src/assets/images/nexora_hero_banner_1793106996784.jpg" 
                alt="High Res Nexora Hero Banner" 
                className="w-full h-auto rounded-2xl"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* VIDEO PREVIEW MODAL */}
      <AnimatePresence>
        {isVideoOpen && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full bg-[#0a0a0e] border border-gold-500/40 rounded-3xl p-8 text-center overflow-hidden shadow-2xl"
            >
              <button 
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 bg-black/80 text-white p-2 rounded-xl border border-white/20 cursor-pointer font-mono text-xs uppercase"
              >
                ✕ Close Video
              </button>

              <div className="w-16 h-16 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center mx-auto mb-4 animate-pulse">
                <Play className="w-8 h-8 fill-current ml-1" />
              </div>

              <h3 className="text-2xl font-black text-white uppercase font-display mb-2">
                Nexora Ecosystem Walkthrough
              </h3>
              <p className="text-gray-400 text-sm max-w-md mx-auto mb-6">
                Watch how Nexora connects beauty clients, salon owners, professionals, and Growth Partners into one digital platform.
              </p>

              <div className="aspect-video bg-black rounded-2xl border border-white/10 flex items-center justify-center relative overflow-hidden">
                <img 
                  src="/src/assets/images/nexora_hero_banner_1793106996784.jpg" 
                  alt="Video Thumbnail" 
                  className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-gold-400 font-mono text-sm font-bold bg-black/80 px-4 py-2 rounded-xl border border-gold-500/30">
                    ▶ CLICK TO START INTERACTIVE DEMO TOUR
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
