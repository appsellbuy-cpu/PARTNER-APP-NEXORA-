import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Crown, Medal } from 'lucide-react';

interface Partner {
  id: string;
  rank: number;
  name: string;
  salons: number;
  tier: string;
}

interface SpotlightCardProps {
  partner: Partner;
  index: number;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({ partner, index }) => {
  const getIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Crown className="w-8 h-8 text-gold-400" />;
      case 2: return <Trophy className="w-8 h-8 text-purple-400" />;
      case 3: return <Medal className="w-8 h-8 text-amber-600" />;
      default: return null;
    }
  };

  return (
    <motion.div
  whileHover={{ scale: 1.05 }}
  className="relative w-full max-w-sm"
>
  {/* Rotating Border Glow */}
  <motion.div
    className="absolute -inset-0.5 bg-gradient-to-r from-gold-500 via-purple-500 to-gold-500 rounded-[32px] opacity-75 blur"
    animate={{ rotate: 360 }}
    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
  />
  
  <div className="relative flex flex-col items-center p-8 bg-[#0a0a0c] border border-white/10 rounded-[32px] backdrop-blur-md shadow-2xl">
    <div className="mb-4 p-3 bg-white/5 rounded-full">
      {getIcon(partner.rank)}
    </div>
    <h3 className="text-2xl font-black text-white uppercase mb-1">{partner.name}</h3>
    <p className="text-gold-450 font-mono text-sm font-bold uppercase tracking-wider mb-6">{partner.tier}</p>
    
    <div className="w-full grid grid-cols-2 gap-4 text-center">
      <div className="bg-white/5 p-3 rounded-xl">
        <p className="text-[10px] text-gray-500 uppercase">Rank</p>
        <p className="text-xl font-bold font-mono">#{partner.rank}</p>
      </div>
      <div className="bg-white/5 p-3 rounded-xl">
        <p className="text-[10px] text-gray-500 uppercase">Salons</p>
        <p className="text-xl font-bold font-mono text-emerald-400">{partner.salons}</p>
      </div>
    </div>
  </div>
</motion.div>
  );
};

export default function Spotlight({ partners }: { partners: Partner[] }) {
  return (
    <section className="py-24 bg-[#040405]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-4xl font-black uppercase text-white mb-16">
          Top <span className="text-gold-450">Growth</span> Partners
        </h2>
        <div className="grid md:grid-cols-3 gap-8 justify-items-center">
          {partners.map((partner, index) => (
            <SpotlightCard key={partner.id} partner={partner} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
