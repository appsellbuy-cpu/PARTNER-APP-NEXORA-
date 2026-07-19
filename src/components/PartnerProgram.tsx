import React from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, ChevronRight, Zap, Briefcase
} from 'lucide-react';

export default function PartnerProgram() {
  return (
    <section className="relative py-24 bg-[#08080a] border-b border-white/5 overflow-hidden" id="partner-program-section">
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-gold-450/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#a855f7] bg-purple-550/5 px-3 py-1 rounded-full border border-purple-500/10 inline-block mb-5 font-bold">
            SECTION 8 // PARTNER PROGRAM
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-black tracking-tight text-white uppercase leading-none">
             <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gold-200 to-gold-450 drop-shadow-[0_2px_10px_rgba(255,255,255,0.05)]">
              BEAUTY INDUSTRY BUSINESS PARTNER PROGRAM
            </span>
          </h2>
          <div className="h-1.5 w-32 bg-gradient-to-r from-gold-600 via-white to-purple-600 mx-auto mt-8 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-6">
            <h3 className="text-4xl font-bold font-display text-white italic uppercase tracking-tighter shadow-sm">SALESMAN NAHI.</h3>
            <h3 className="text-5xl font-black font-display text-transparent bg-clip-text bg-gradient-to-br from-gold-400 to-gold-600 uppercase tracking-tighter">BUSINESS PARTNER BANO.</h3>
            <p className="text-gray-400 text-lg leading-relaxed pt-4">
              Aap Saalon Se Salon, Beauty Parlour, Spa, Tattoo aur Nail Art Industry Me Kaam Kar Rahe Ho. Ab Apne Existing Network Ko Growth Opportunity Me Badaliye.
            </p>
          </div>
          <div className="bg-[#0c0c0f] border border-white/10 p-8 rounded-3xl relative overflow-hidden shadow-2xl">
             <div className="absolute inset-0 bg-gold-500/5" />
             <h4 className="text-xl font-bold text-white mb-6 uppercase tracking-wider relative">Why Nexora?</h4>
             <ul className="space-y-4 font-mono text-gray-300 relative">
               <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-400" /> Salon Owners Aapko Jaante Hain.</li>
               <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-400" /> Market Aapko Jaanta Hai.</li>
               <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-400" /> Aapke Paas Pehle Se Relationships Hain.</li>
               <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-400" /> Ab Unhi Relationships Ko Nexora SalonOS Ke Sath Connect Karke Industry Ko Digital Banaiye.</li>
             </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <div className="bg-[#0c0c0f] border border-white/5 p-8 rounded-3xl">
            <h4 className="text-xl font-bold text-white mb-8 uppercase tracking-wider">Aapka Role</h4>
            <ul className="space-y-4 font-sans text-gray-400">
               <li className="flex items-center gap-3"><ChevronRight className="w-4 h-4 text-gold-450" /> Salon Owners Se Connect Karna</li>
               <li className="flex items-center gap-3"><ChevronRight className="w-4 h-4 text-gold-450" /> Nexora SalonOS Introduce Karna</li>
               <li className="flex items-center gap-3"><ChevronRight className="w-4 h-4 text-gold-450" /> Onboarding Me Help Karna</li>
               <li className="flex items-center gap-3"><ChevronRight className="w-4 h-4 text-gold-450" /> Local Relationship Maintain Karna</li>
               <li className="flex items-center gap-3"><ChevronRight className="w-4 h-4 text-gold-450" /> Network Grow Karna</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-[#1a1a1e] to-[#0c0c0f] border border-gold-500/20 p-8 rounded-3xl">
             <h4 className="text-xl font-bold text-gold-400 mb-8 uppercase tracking-wider">Aapko Kya Milega?</h4>
             <div className="grid grid-cols-2 gap-4">
                {[
                  "Free Joining", "No Investment", "Free Training", 
                  "Every Successful Onboarding Par Reward", "Weekly Payout System", 
                  "Recognition & Growth", "Featured Business Partner Profile", "District Partner Opportunity"
                ].map(item => (
                  <div key={item} className="flex items-center gap-2 p-3 bg-black/40 rounded-lg text-sm text-gray-300 font-mono">
                    <Zap className="w-3 h-3 text-gold-450" /> {item}
                  </div>
                ))}
             </div>
          </div>
        </div>

        {/* KYON YE MODEL ALAG HAI? */}
        <div className="text-center py-16 bg-[#0c0c0f]/50 border-y border-gold-500/20 rounded-3xl mb-16">
          <h4 className="text-3xl font-black text-white uppercase mb-8">Kyon Ye Model Alag Hai?</h4>
          <div className="space-y-4 text-gray-300 text-lg">
            <p>Naya Market Nahi Banana.</p>
            <p>Naye Customers Nahi Dhundhna.</p>
            <p className="text-gold-400 font-bold italic">Jo Industry Aap Pehle Se Jaante Ho,</p>
            <p>Usi Network Ko Digital Growth Se Connect Karna Hai.</p>
          </div>
        </div>

        <div className="text-center py-16 bg-black/40 border-y border-white/5 rounded-3xl mb-16">
          <h4 className="text-3xl font-black text-white uppercase mb-8">Nexora Ecosystem</h4>
          <div className="flex flex-wrap justify-center gap-6 text-gold-450 font-bold uppercase tracking-wider font-mono">
             <span>CUSTOMERS: EXPERIENCE</span>
             <span>SALONS: GROWTH</span>
             <span>STAFF: JOBS</span>
             <span>BRANDS: VISIBILITY</span>
             <span>PARTNERS: OPPORTUNITY</span>
          </div>
        </div>

        <div className="text-center">
          <h4 className="text-2xl font-bold text-white mb-8">FREE JOINING OPEN: BECOME A NEXORA BUSINESS PARTNER</h4>
          <button className="px-10 py-5 rounded-2xl bg-gradient-to-r from-gold-500 to-purple-600 text-white font-black text-lg uppercase tracking-widest hover:brightness-110 flex items-center mx-auto gap-3">
            <Briefcase className="w-6 h-6" /> CONNECT SALONS • BUILD NETWORKS • GROW TOGETHER
          </button>
        </div>
      </div>
    </section>
  );
}
