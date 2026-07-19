/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, Star, ChevronDown, CheckCircle2, Award, Users, ShieldAlert,
  ArrowRight, ShieldCheck, Database, Landmark, Mail, Phone, MapPin, 
  Trash2, X, FileSpreadsheet, PlusCircle, Check, Trophy, Crown, Medal, 
  TrendingUp, Coins, Zap, Share2, Copy, Download, ExternalLink,
  Building2, Network, CalendarCheck, HeartHandshake
} from 'lucide-react';

import { GrowthPartnerSubmission, SalonOSSubmission } from './types';
import Header from './components/Header';
import NewHeroSection from './components/NewHeroSection';
import EcosystemNetwork from './components/EcosystemNetwork';
import EcosystemComparison from './components/EcosystemComparison';
import SalonGrowthFlow from './components/SalonGrowthFlow';
import Spotlight from './components/SpotlightPartner';
import SalonOwners from './components/SalonOwners';
import SalonCustomers from './components/SalonCustomers';
import GrowthPartners from './components/GrowthPartners';
import BusinessOpportunity from './components/BusinessOpportunity';
import NgppProgram from './components/NgppProgram';
import NgppPosterBoard from './components/NgppPosterBoard';
import EarningModel from './components/EarningModel';
import ActivationReward from './components/ActivationReward';
import MilestoneRewards from './components/MilestoneRewards';
import PartnerDashboard from './components/PartnerDashboard';
import DistrictBusinessPartner from './components/DistrictBusinessPartner';
import BeautyJobPortal from './components/BeautyJobPortal';
import NexoraGrowthProgram from './components/NexoraGrowthProgram';
import LivePlatformPreview from './components/LivePlatformPreview';
import LiveDashboardPreview from './components/LiveDashboardPreview';
import EarningsCalculator from './components/EarningsCalculator';
import DemoTheater from './components/DemoTheater';
import TrustMetrics from './components/TrustMetrics';
import PartnerForm from './components/PartnerForm';
import SocialProof from './components/SocialProof';
import Faq from './components/Faq';
import FinalCTA from './components/FinalCTA';
import PartnerProgram from './components/PartnerProgram';
import NexoraOverview from './components/NexoraOverview';
import DeepDiveWorkspaces from './components/DeepDiveWorkspaces';
import Footer from './components/Footer';
import RealProblemVsSolution from './components/RealProblemVsSolution';
import NexoraInfographic from './components/NexoraInfographic';
import ProductShowcase from './components/ProductShowcase';
import TrustSection from './components/TrustSection';

export default function App() {
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [partnerLeads, setPartnerLeads] = useState<GrowthPartnerSubmission[]>([]);
  const [salonLeads, setSalonLeads] = useState<SalonOSSubmission[]>([]);
  const [activeFormTab, setActiveFormTab] = useState<'sales' | 'salon'>('sales');

  // Gamified Leaderboard States
  const [topPartners, setTopPartners] = useState([
    { id: "tp1", rank: 1, name: "Rahul Singh", salons: 48, gmv: 1520000, royalties: 18240, tier: "District Elite", city: "Bengaluru Hub" },
    { id: "tp2", rank: 2, name: "Kriya Gupta", salons: 39, gmv: 1240000, royalties: 14880, tier: "Sovereign Node", city: "Delhi Region" },
    { id: "tp3", rank: 3, name: "Anirudh Sharma", salons: 34, gmv: 1080000, royalties: 12960, tier: "Titanium Node", city: "Mumbai Coastal" },
    { id: "tp4", rank: 4, name: "Sneha Reddy", salons: 27, gmv: 840000, royalties: 10080, tier: "Elite Partner", city: "Bengaluru Hub" },
    { id: "tp5", rank: 5, name: "Amit Patel", salons: 21, gmv: 630000, royalties: 7560, tier: "Rising Star", city: "Mumbai Coastal" }
  ]);
  const [leaderboardFilter, setLeaderboardFilter] = useState<'all' | 'delhi' | 'bengaluru' | 'mumbai'>('all');
  const [expandedPartnerId, setExpandedPartnerId] = useState<string | null>(null);
  const [selectedSharePartner, setSelectedSharePartner] = useState<any | null>(null);
  const [partnerHistories, setPartnerHistories] = useState<Record<string, Array<{ id: string; salonName: string; date: string; status: string; commission: string }>>>({
    "tp1": [
      { id: "h1_1", salonName: "Luxe Parlour & Day Spa", date: "2026-06-12", status: "Active (15 days revenue done)", commission: "₹150 Reward Unlocked" },
      { id: "h1_2", salonName: "Aura Unisex Hair Studio", date: "2026-06-10", status: "Active (Fortnight billing complete)", commission: "₹150 Reward Unlocked" },
      { id: "h1_3", salonName: "Bella Blossom Salon", date: "2026-06-08", status: "15 Din Active Revenue Ongoing", commission: "Pending Verification" }
    ],
    "tp2": [
      { id: "h2_1", salonName: "Royal Hair Mechanics", date: "2026-06-11", status: "Active (15 days revenue done)", commission: "₹150 Reward Unlocked" },
      { id: "h2_2", salonName: "Golden Glow Face Bar", date: "2026-06-05", status: "15 Din Active Revenue Ongoing", commission: "Pending Verification" }
    ],
    "tp3": [
      { id: "h3_1", salonName: "Zion Premium Barbershop", date: "2026-06-09", status: "Active (15 days revenue done)", commission: "₹150 Reward Unlocked" }
    ],
    "tp4": [
      { id: "h4_1", salonName: "She Glows Nail Boutique", date: "2026-06-07", status: "15 Din Active Revenue Ongoing", commission: "Pending Verification" }
    ],
    "tp5": [
      { id: "h5_1", salonName: "Neon Scissors & Spa", date: "2026-06-04", status: "Active (15 days revenue done)", commission: "₹150 Reward Unlocked" }
    ]
  });
  const [simulatedOnboardingLogs, setSimulatedOnboardingLogs] = useState<string[]>([
    "[Live] Leaderboard database running stable on Nexora Co-op Protocol",
    "[System] Active audit trace tracking PAN-India registry nodes"
  ]);

  const handleSimulateOnboard = (partnerName: string) => {
    const partner = topPartners.find(p => p.name === partnerName);
    const partnerId = partner ? partner.id : "tp1";

    const randomSalonPrefixes = ["Radiant Salon", "Elite Stylists", "Glitz & Glamour", "Vintage Barbers", "Velvet Hair Studio", "Glow Day Spa", "Urban Scissors", "Signature Tint", "Crest Parlour", "Mirror Mirror"];
    const randomSalonSuffixes = ["Indiranagar", "Koramangala", "HSR Layout", "Connaught Place", "Saket Block", "Colaba Point", "Bandra West", "Whitefield Hub"];
    const randomPrefix = randomSalonPrefixes[Math.floor(Math.random() * randomSalonPrefixes.length)];
    const randomSuffix = randomSalonSuffixes[Math.floor(Math.random() * randomSalonSuffixes.length)];
    const salonName = `${randomPrefix} - ${randomSuffix}`;

    setTopPartners(prev => {
      const updated = prev.map(p => {
        if (p.name === partnerName) {
          const newSalons = p.salons + 1;
          const newGmv = p.gmv + 35000; // Adding average salon volume
          const newRoyalties = Math.round(newGmv * 0.012); // 1.2% rate
          return { ...p, salons: newSalons, gmv: newGmv, royalties: newRoyalties };
        }
        return p;
      });
      // Sort in descending order of salons onboarded
      updated.sort((a, b) => b.salons - a.salons);
      // Recalc ranks
      return updated.map((p, idx) => ({ ...p, rank: idx + 1 }));
    });

    const dateStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    setSimulatedOnboardingLogs(prev => [
      `[${dateStr}] Partner ${partnerName} onboarded "${salonName}"! (GMV +₹35,000)`,
      ...prev.slice(0, 3)
    ]);

    setPartnerHistories(prev => {
      const existingHistory = prev[partnerId] || [];
      const currentISO = new Date().toISOString().split('T')[0];
      return {
        ...prev,
        [partnerId]: [
          {
            id: `sim_${Date.now()}`,
            salonName: salonName,
            date: currentISO,
            status: "Connected (15 Din Revenue verification pending)",
            commission: "₹150 Reward Pending"
          },
          ...existingHistory
        ]
      };
    });
  };

  // Business Card States & share handlers
  const [copied, setCopied] = useState(false);
  const [copiedHistoryPartnerId, setCopiedHistoryPartnerId] = useState<string | null>(null);
  const [shareNotification, setShareNotification] = useState<string | null>(null);

  const handleCopyPartnerLog = (partnerId: string, partnerName: string) => {
    const history = partnerHistories[partnerId] || [];
    if (history.length === 0) {
      navigator.clipboard?.writeText?.(`No linked salon history registries found for ${partnerName}.`).catch(() => {});
    } else {
      const trail = history.map((h, i) => `${i + 1}. Salon: ${h.salonName} | Date: ${h.date} | Status: ${h.status} | Reward: ${h.commission}`).join('\n');
      const textToCopy = `NEXORA ALLIANCE NETWORK\nOnboarding Audit Trail for Partner: ${partnerName}\n---------------------------------------\n${trail}\n---------------------------------------\nVerified via Nexora Ledger.`;
      navigator.clipboard?.writeText?.(textToCopy).catch(() => {});
    }
    setCopiedHistoryPartnerId(partnerId);
    setTimeout(() => setCopiedHistoryPartnerId(null), 2000);
  };

  const handleCopyLink = () => {
    setCopied(true);
    if (selectedSharePartner) {
      navigator.clipboard?.writeText?.("https://nexora.salonos.in/alliance/partner/" + selectedSharePartner.id)
        .catch(() => {});
    }
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadCard = () => {
    if (!selectedSharePartner) return;
    setShareNotification("Digital Business Card metadata download triggered for " + selectedSharePartner.name + "!");
    setTimeout(() => setShareNotification(null), 3500);
  };

  const handleSimulateShare = (platform: string) => {
    if (!selectedSharePartner) return;
    setShareNotification("Preparing post data for " + platform + "...");
    setTimeout(() => {
      setShareNotification("Successfully shared " + selectedSharePartner.name + "'s verification badge card to " + platform + "!");
      setTimeout(() => setShareNotification(null), 2500);
    }, 1200);
  };

  // Load submissions and seed mock leads if empty
  const fetchSubmissions = () => {
    const storedPartners = localStorage.getItem('nexora_partner_leads');
    const storedSalons = localStorage.getItem('nexora_salon_leads');

    if (!storedPartners) {
      const mockPartners: GrowthPartnerSubmission[] = [
        {
          id: 'mock-p-1',
          name: 'Ashok Kumar',
          phone: '+91 98210 11223',
          email: 'ashok.cosmetics@gmail.com',
          city: 'Delhi Heights',
          experience: '3-5 years',
          brands: 'L\'Oreal Professional, Matrix',
          submittedAt: new Date(Date.now() - 3600000 * 2).toISOString(),
        },
        {
          id: 'mock-p-2',
          name: 'Rajesh Nair',
          phone: '+91 94460 55667',
          email: 'rajesh.beauty@yahoo.com',
          city: 'Cochin Central',
          experience: 'More than 5 years',
          brands: 'Schwarzkopf, Schwarzkopf Prof.',
          submittedAt: new Date(Date.now() - 3600000 * 12).toISOString(),
        }
      ];
      localStorage.setItem('nexora_partner_leads', JSON.stringify(mockPartners));
      setPartnerLeads(mockPartners);
    } else {
      setPartnerLeads(JSON.parse(storedPartners));
    }

    if (!storedSalons) {
      const mockSalons: SalonOSSubmission[] = [
        {
          id: 'mock-s-1',
          ownerName: 'Priya Sen',
          salonName: 'The Royal Parlour',
          salonType: 'Beauty Parlour',
          phone: '+91 91760 88291',
          city: 'Kolkata, Salt Lake',
          employees: 8,
          submittedAt: new Date(Date.now() - 3600000 * 4).toISOString(),
        },
        {
          id: 'mock-s-2',
          ownerName: 'Karan Singh',
          salonName: 'Alpha Groomers',
          salonType: 'Barber Shop',
          phone: '+91 88820 44556',
          city: 'Chandigarh, Sector 17',
          employees: 5,
          submittedAt: new Date(Date.now() - 3600000 * 18).toISOString(),
        }
      ];
      localStorage.setItem('nexora_salon_leads', JSON.stringify(mockSalons));
      setSalonLeads(mockSalons);
    } else {
      setSalonLeads(JSON.parse(storedSalons));
    }
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const handleClearLeads = () => {
    if (window.confirm('Are you sure you want to clear all interactive form submissions?')) {
      localStorage.removeItem('nexora_partner_leads');
      localStorage.removeItem('nexora_salon_leads');
      setPartnerLeads([]);
      setSalonLeads([]);
    }
  };

  const handleScrollToForm = (tab: 'sales' | 'salon') => {
    setActiveFormTab(tab);
    const target = document.querySelector('#contact-form-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const totalCount = partnerLeads.length + salonLeads.length;

  return (
    <div className="min-h-screen bg-luxury-black text-white font-sans antialiased overflow-x-hidden selection:bg-gold-500 selection:text-luxury-black">
      
      {/* Fixed global navigation header */}
      <Header onOpenDashboard={() => setIsAdminOpen(true)} submissionCount={totalCount} />

      <NewHeroSection />
      
      {/* S2: NEXORA EK NAZAR MEIN */}
      <NexoraOverview />

      <NexoraInfographic />
      <ProductShowcase />
      <TrustSection />

      {/* S3: PROBLEM VS SOLUTION */}
      <RealProblemVsSolution />
      
      {/* S4: GROWTH FLOW */}
      <SalonGrowthFlow />

      {/* S5: DEEP DIVE STAKEHOLDERS */}
      <DeepDiveWorkspaces />

      {/* S6: GROWTH PARTNERS */}
      <GrowthPartners />
      <BusinessOpportunity />
      <DistrictBusinessPartner />
      <PartnerDashboard />
      <BeautyJobPortal />

      {/* S7: NGPP EARNING PROTOCOL */}
      <NgppProgram />
      <NexoraGrowthProgram />
      <NgppPosterBoard />
      <EarningModel />
      <ActivationReward />
      <MilestoneRewards />
      
      {/* S8: LIVE DASHBOARD */}
      <LiveDashboardPreview />
      <LivePlatformPreview />
      <DemoTheater />

      {/* S9: SOCIAL PROOF & TRUST */}
      <SocialProof />
      <TrustMetrics />
      <Spotlight partners={topPartners.slice(0, 3)} />

      {/* S10: FAQ */}
      <Faq />

      {/* S11: FINAL REVOLUTION CTA */}
      <PartnerProgram />
      <FinalCTA />
      <PartnerForm onFormSubmitted={fetchSubmissions} initialTab={activeFormTab} />
      <EcosystemComparison />
      <SalonOwners />
      <SalonCustomers />
      <EarningsCalculator />

      {/* S12: FOOTER */}
      <Footer />

      {/* LEAD TERMINAL ADMIN PANEL MODAL */}
      <AnimatePresence>
        {isAdminOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-luxury-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-luxury-card border border-white/10 rounded-2xl w-full max-w-4xl max-h-[85vh] overflow-hidden flex flex-col shadow-2xl relative"
            >
              {/* Header panel */}
              <div className="p-6 border-b border-white/5 flex items-center justify-between bg-luxury-black">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center">
                    <Database className="w-4 h-4 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-semibold text-white">
                      Lead Database Terminal
                    </h3>
                    <p className="text-xs text-gray-400 font-sans">
                      Inspect submissions saved on browser’s localStorage to prove live, functional end-to-end form tracking.
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <button
                    onClick={handleClearLeads}
                    className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-red-500/20 bg-red-500/5 text-xs text-red-400 hover:bg-red-500/15"
                    id="btn-admin-clear"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Delete All Leads</span>
                  </button>
                  <button
                    onClick={() => setIsAdminOpen(false)}
                    className="p-1 rounded bg-white/5 text-gray-400 hover:text-white"
                    id="btn-admin-close"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Core Contents */}
              <div className="p-6 overflow-y-auto space-y-8 flex-1">

                {/* Segment: Top Growth Partners Leaderboard */}
                <div className="border border-white/5 bg-luxury-black/30 p-5 rounded-2xl relative overflow-hidden">
                  <div className="absolute top-[10%] right-[-10%] w-60 h-60 bg-gold-400/5 rounded-full blur-[80px] pointer-events-none -z-10" />
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 pb-2 border-b border-white/5 gap-3">
                    <div className="flex items-center space-x-2">
                      <Trophy className="w-5 h-5 text-gold-450 animate-pulse shrink-0" />
                      <div>
                        <h4 className="text-sm font-mono uppercase tracking-wider text-white font-bold">
                          Top Growth Partners Leaderboard
                        </h4>
                        <p className="text-[10px] text-gray-500 font-sans mt-0.5">
                          Gamified PAN-India elite sales nodes. Click mock simulator buttons to test live rank-sorting.
                        </p>
                      </div>
                    </div>

                    {/* Regional Hub Selector Filters */}
                    <div className="flex items-center space-x-1.5 bg-black/45 p-1 rounded-lg border border-white/5">
                      {[
                        { id: 'all', label: 'All Hubs' },
                        { id: 'delhi', label: 'Delhi' },
                        { id: 'bengaluru', label: 'Bengaluru' },
                        { id: 'mumbai', label: 'Mumbai' }
                      ].map((tab) => (
                        <button
                          key={tab.id}
                          onClick={() => setLeaderboardFilter(tab.id as any)}
                          className={`px-2 py-1 text-[10px] font-mono rounded cursor-pointer transition-all ${
                            (tab.id === 'all' && leaderboardFilter === 'all') ||
                            (tab.id === 'delhi' && leaderboardFilter === 'delhi') ||
                            (tab.id === 'bengaluru' && leaderboardFilter === 'bengaluru') ||
                            (tab.id === 'mumbai' && leaderboardFilter === 'mumbai')
                              ? 'bg-gold-500 text-black font-bold'
                              : 'text-gray-400 hover:text-white'
                          }`}
                          id={`btn-leaderboard-filter-${tab.id}`}
                        >
                          {tab.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Gamified Cumulative Metrics */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    <div className="p-3 bg-gradient-to-br from-[#121214] to-black border border-white/5 rounded-xl text-left">
                      <span className="text-[9px] font-mono text-gray-500 uppercase block">Active Alliance Nodes</span>
                      <div className="text-base font-bold text-white font-mono mt-0.5">154 Partners Registered</div>
                      <p className="text-[8px] text-gray-400 leading-none mt-1">Vetted high-performance agents.</p>
                    </div>

                    <div className="p-3 bg-gradient-to-br from-[#121214] to-black border border-white/5 rounded-xl text-left">
                      <span className="text-[9px] font-mono text-purple-400 block uppercase font-bold">Total Network GMV</span>
                      <div className="text-base font-bold text-purple-400 font-mono mt-0.5">₹4.86 Crores Yield</div>
                      <p className="text-[8px] text-gray-400 leading-none mt-1">Direct salon customer tickets tracked.</p>
                    </div>

                    <div className="p-3 bg-gradient-to-br from-[#121214] to-black border border-gold-500/15 rounded-xl text-left">
                      <span className="text-[9px] font-mono text-gold-450 block uppercase font-bold">Royalties Disbursed</span>
                      <div className="text-base font-bold text-gold-450 font-mono mt-0.5">₹5,83,200 Instant Split</div>
                      <p className="text-[8px] text-gray-400 leading-none mt-1">1.2% Master overrides delivered to date.</p>
                    </div>
                  </div>

                  {/* Leaderboard Table List Container */}
                  <div className="bg-[#0b0b0d] border border-white/5 rounded-xl overflow-hidden mb-5">
                    <div className="p-3.5 bg-black/60 border-b border-white/5 grid grid-cols-12 gap-2 text-[9px] font-mono text-gray-400 uppercase tracking-wider font-bold">
                      <div className="col-span-2 text-center">Rank</div>
                      <div className="col-span-3">Partner Node</div>
                      <div className="col-span-2">Linked Shops</div>
                      <div className="col-span-2 text-right">Shop GMV</div>
                      <div className="col-span-3 text-center">Interactive Simulator Actions</div>
                    </div>

                    <div className="divide-y divide-white/5">
                      {topPartners
                        .filter(p => {
                          if (leaderboardFilter === 'all') return true;
                          if (leaderboardFilter === 'delhi' && p.city === 'Delhi Region') return true;
                          if (leaderboardFilter === 'bengaluru' && p.city === 'Bengaluru Hub') return true;
                          if (leaderboardFilter === 'mumbai' && p.city === 'Mumbai Coastal') return true;
                          return true;
                        })
                        .map((partner) => {
                          let rankBadge = null;
                          let rankStyle = "text-gray-400";
                          let bgClass = "hover:bg-white/[0.01]";
                          
                          if (partner.rank === 1) {
                            rankBadge = <Crown className="w-4 h-4 text-gold-400" />;
                            rankStyle = "text-gold-400 font-bold";
                            bgClass = "bg-gold-500/5 hover:bg-gold-500/10 border-l border-l-gold-500";
                          } else if (partner.rank === 2) {
                            rankBadge = <Trophy className="w-4 h-4 text-purple-400" />;
                            rankStyle = "text-purple-400 font-bold";
                            bgClass = "bg-purple-950/5 hover:bg-purple-900/10 border-l border-l-purple-500";
                          } else if (partner.rank === 3) {
                            rankBadge = <Medal className="w-4 h-4 text-[#d39d2c]" />;
                            rankStyle = "text-[#d39d2c] font-bold";
                            bgClass = "bg-amber-950/5 hover:bg-amber-900/10 border-l border-l-amber-600";
                          }

                          const isExpanded = expandedPartnerId === partner.id;

                          return (
                            <div key={partner.id} className="border-b border-white/5 last:border-b-0">
                              <motion.div 
                                layout
                                whileHover={{ 
                                  scale: 1.025,
                                  backgroundColor: "rgba(20, 16, 12, 0.95)",
                                  boxShadow: "0 12px 36px rgba(211, 157, 44, 0.25), inset 0 0 16px rgba(211, 157, 44, 0.18)",
                                  borderColor: "rgba(211, 157, 44, 0.85)",
                                  zIndex: 10
                                }}
                                transition={{ 
                                  type: "spring", 
                                  stiffness: 260, 
                                  damping: 20,
                                  layout: { type: "spring", stiffness: 300, damping: 25 }
                                }}
                                className={`p-3.5 grid grid-cols-12 gap-2 items-center text-xs relative border border-white/5 rounded-xl transition-all duration-300 ${bgClass}`}
                                id={`leaderboard-partner-row-${partner.id}`}
                              >
                                {/* Position */}
                                <div className="col-span-2 flex items-center justify-center font-mono">
                                  {rankBadge ? (
                                    <span className="flex flex-col items-center justify-center">
                                      {rankBadge}
                                      <span className={`text-[8px] mt-0.5 ${rankStyle}`}>#{partner.rank}</span>
                                    </span>
                                  ) : (
                                    <span className={`text-sm ${rankStyle} font-bold`}>#{partner.rank}</span>
                                  )}
                                </div>

                                {/* Col: Name and badge (Clickable to Expand) */}
                                <div className="col-span-3 text-left">
                                  <button
                                    onClick={() => setExpandedPartnerId(isExpanded ? null : partner.id)}
                                    className="font-semibold text-white truncate max-w-[140px] hover:text-gold-450 hover:underline cursor-pointer flex items-center text-left focus:outline-none"
                                    title="Click to view full onboarding logs"
                                    id={`btn-toggle-partner-history-${partner.id}`}
                                  >
                                    <span className="truncate">{partner.name}</span>
                                    <ChevronDown className={`w-3.5 h-3.5 ml-1 shrink-0 transition-transform ${isExpanded ? 'rotate-180 text-gold-450' : 'text-gray-550'}`} />
                                  </button>
                                  <span className="text-[8px] font-mono text-gray-550 block uppercase mt-0.5">
                                    {partner.tier} • {partner.city.split(' ')[0]}
                                  </span>
                                </div>

                                {/* Col: LinkedIn shops */}
                                <div className="col-span-2 font-mono font-bold text-white text-xs">
                                  {partner.salons} <span className="text-[9px] text-gray-550 font-normal">Chairs</span>
                                </div>

                                {/* Col: Revenue */}
                                <div className="col-span-2 text-right font-mono font-medium text-emerald-400">
                                  ₹{(partner.gmv / 100000).toFixed(2)}L
                                  <span className="block text-[8px] text-gray-550 font-normal">Comp: ₹{partner.royalties.toLocaleString('en-IN')}</span>
                                </div>

                                {/* Col: Interactive action button */}
                                <div className="col-span-3 flex flex-col items-center justify-center gap-1">
                                  <button
                                    onClick={() => handleSimulateOnboard(partner.name)}
                                    className="w-full max-w-[110px] py-1 px-1.5 rounded bg-gold-450/10 border border-gold-500/20 text-[9px] font-mono text-[#d39d2c] hover:bg-[#d39d2c] hover:text-black font-bold transition-all flex items-center justify-center space-x-1 cursor-pointer"
                                    id={`btn-simulate-onboard-${partner.id}`}
                                  >
                                    <Zap className="w-2.5 h-2.5 fill-current shrink-0 text-amber-500" />
                                    <span>Simulate Shop</span>
                                  </button>
                                  <button
                                    onClick={() => setSelectedSharePartner(partner)}
                                    className="w-full max-w-[110px] py-1 px-1.5 rounded bg-white/5 border border-white/10 text-[9px] font-mono text-gray-450 hover:bg-gold-550/20 hover:text-white hover:border-gold-500/30 font-semibold transition-all flex items-center justify-center space-x-1 cursor-pointer"
                                    id={`btn-share-profile-${partner.id}`}
                                  >
                                    <Share2 className="w-2.5 h-2.5 shrink-0 text-gold-450" />
                                    <span>Share Profile</span>
                                  </button>
                                </div>
                              </motion.div>

                              {/* Expansion Panel with Height Auto Entrance Animation */}
                              <AnimatePresence initial={false}>
                                {isExpanded && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.35, ease: "easeInOut" }}
                                    className="bg-black/85 px-5 py-4 border-t border-b border-white/5 space-y-3 font-sans overflow-hidden"
                                    id={`expanded-partner-panel-${partner.id}`}
                                  >
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between text-[10px] font-mono tracking-wider text-gray-400 uppercase gap-2">
                                      <span className="text-gold-450 font-bold flex items-center space-x-1.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-gold-450 animate-pulse" />
                                        <span>Onboarding History • {partner.name}</span>
                                      </span>
                                      <div className="flex items-center gap-2">
                                        <button
                                          onClick={() => handleCopyPartnerLog(partner.id, partner.name)}
                                          className="text-[9px] font-mono font-bold text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 hover:border-gold-500/30 border border-white/15 px-2.5 py-1 rounded cursor-pointer transition-all flex items-center gap-1.5"
                                          id={`btn-copy-history-${partner.id}`}
                                        >
                                          <Copy className="w-2.5 h-2.5 shrink-0 text-gold-450" />
                                          <span>{copiedHistoryPartnerId === partner.id ? "Copied Log!" : "Copy Log"}</span>
                                        </button>
                                        <span className="text-gray-500 font-bold">
                                          {partner.salons} Connected Salons
                                        </span>
                                      </div>
                                    </div>

                                    <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
                                      {(!partnerHistories[partner.id] || partnerHistories[partner.id].length === 0) ? (
                                        <p className="text-[10px] font-mono text-gray-500 text-center py-3">
                                          No linked salon history registries found. Use "Simulate Shop" to append instantly.
                                        </p>
                                      ) : (
                                        partnerHistories[partner.id].map((history) => (
                                          <div 
                                            key={history.id} 
                                            className="flex flex-col sm:flex-row sm:items-center justify-between p-2.5 rounded-lg bg-white/[0.02] border border-white/5 text-xs text-left gap-2"
                                          >
                                            <div>
                                              <h6 className="font-semibold text-gray-200">
                                                {history.salonName}
                                              </h6>
                                              <p className="text-[9px] text-gray-550 font-mono mt-0.5">
                                                Registry Date: {history.date}
                                              </p>
                                            </div>
                                            <div className="flex items-center gap-2 shrink-0">
                                              <span className={`px-2 py-0.5 rounded text-[8px] font-mono font-bold ${
                                                history.status.includes('Active') 
                                                  ? 'bg-emerald-500/10 text-emerald-405 border border-emerald-500/20' 
                                                  : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                                              }`}>
                                                {history.status}
                                              </span>
                                              <span className="text-[9px] font-mono font-bold text-gold-450 bg-gold-500/5 px-2 py-0.5 rounded border border-gold-500/10">
                                                {history.commission}
                                              </span>
                                            </div>
                                          </div>
                                        ))
                                      )}
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          );
                        })}
                    </div>
                  </div>

                  {/* Live Simulation Audit Output container */}
                  <div className="p-3 bg-black rounded-lg border border-white/5 text-left font-mono text-[9px] space-y-1 select-none">
                    <div className="flex items-center justify-between text-gray-500 border-b border-white/5 pb-1 select-none font-bold">
                      <span>✓ DYNAMIC GAMIFIED REGISTRATION STREAM</span>
                      <span className="text-emerald-500 flex items-center space-x-1">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping inline-block" />
                        <span>ACTIVE EMULATOR SYNC</span>
                      </span>
                    </div>
                    <div className="space-y-0.5">
                      {simulatedOnboardingLogs.map((log, index) => (
                        <div key={index} className={index === 0 ? "text-gold-400 dynamic-log" : "text-gray-500"}>
                          {log}
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Segment A: Growth Partners */}
                <div>
                  <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-2">
                    <h4 className="text-sm font-mono uppercase tracking-wider text-gold-450 font-bold flex items-center space-x-2">
                      <Star className="w-4 h-4 text-gold-450" />
                      <span>Sales Partners Registrations ({partnerLeads.length})</span>
                    </h4>
                  </div>

                  {partnerLeads.length === 0 ? (
                    <div className="p-8 text-center rounded-xl border border-dashed border-white/5 text-gray-500 text-xs">
                      No Sales Partner submissions logged yet. Enter information in the "Become Sales Partner" form above.
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {partnerLeads.map((sub) => (
                        <div 
                          key={sub.id}
                          className="bg-luxury-black/30 border border-white/5 p-4 rounded-xl hover:border-gold-500/20 transition-all font-sans relative"
                        >
                          <span className="absolute top-3 right-3 text-[9px] font-mono text-gray-500">
                            {new Date(sub.submittedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </span>
                          <h5 className="text-white font-semibold text-sm mb-2">{sub.name}</h5>
                          
                          <div className="space-y-1 text-xs text-gray-300 font-sans">
                            <p className="flex items-center space-x-1.5">
                              <Phone className="w-3 h-3 text-gold-400" />
                              <span>{sub.phone}</span>
                            </p>
                            {sub.email && (
                              <p className="flex items-center space-x-1.5 overflow-hidden text-ellipsis">
                                <Mail className="w-3 h-3 text-gold-400" />
                                <span>{sub.email}</span>
                              </p>
                            )}
                            <p className="flex items-center space-x-1.5">
                              <MapPin className="w-3 h-3 text-gold-400" />
                              <span>{sub.city}</span>
                            </p>
                            <p className="pt-2 text-[11px] text-gray-400 flex items-start space-x-1">
                              <span className="font-mono text-purple-400 shrink-0">Exp:</span>
                              <span className="italic">"{sub.experience}"</span>
                            </p>
                            {sub.brands && (
                              <p className="text-[11px] text-gray-400 flex items-start space-x-1">
                                <span className="font-mono text-purple-400 shrink-0">Brands:</span>
                                <span>{sub.brands}</span>
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Segment B: SalonOS Members */}
                <div>
                  <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-2">
                    <h4 className="text-sm font-mono uppercase tracking-wider text-purple-450 font-bold flex items-center space-x-2">
                      <Star className="w-4 h-4 text-purple-400" />
                      <span>SalonOS Member Registrations ({salonLeads.length})</span>
                    </h4>
                  </div>

                  {salonLeads.length === 0 ? (
                    <div className="p-8 text-center rounded-xl border border-dashed border-white/5 text-gray-500 text-xs">
                      No SalonOS submissions logged yet. Enter information in the "Register SalonOS Member" form above.
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {salonLeads.map((sub) => (
                        <div 
                          key={sub.id}
                          className="bg-luxury-black/30 border border-white/5 p-4 rounded-xl hover:border-purple-500/20 transition-all font-sans relative"
                        >
                          <span className="absolute top-3 right-3 text-[9px] font-mono text-gray-500">
                            {new Date(sub.submittedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </span>
                          <h5 className="text-white font-semibold text-sm leading-none">{sub.salonName}</h5>
                          <span className="text-[10px] text-purple-400 font-mono inline-block mt-1 mb-2">
                            {sub.salonType}
                          </span>
                          
                          <div className="space-y-1 text-xs text-gray-300 font-sans">
                            <p className="flex items-center space-x-1.5">
                              <span className="text-gray-500 font-mono text-[10px] uppercase">Owner:</span>
                              <span className="font-medium text-white">{sub.ownerName}</span>
                            </p>
                            <p className="flex items-center space-x-1.5">
                              <Phone className="w-3 h-3 text-purple-400" />
                              <span>{sub.phone}</span>
                            </p>
                            <p className="flex items-center space-x-1.5">
                              <MapPin className="w-3 h-3 text-purple-400" />
                              <span>{sub.city}</span>
                            </p>
                            <p className="flex items-center space-x-1.5 font-mono text-[11px] text-gray-400">
                              <span>Staff Chairs:</span>
                              <span className="text-white font-bold">{sub.employees} available</span>
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

              </div>

              {/* Status bar */}
              <div className="p-4 bg-luxury-black border-t border-white/5 text-center text-xs font-mono text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-2 select-none">
                <span>Active Ledger Engine Sync: STABLE v3.1</span>
                <span>Press 'ESC' or click 'X' to close database view</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* DIGITAL BUSINESS CARD MODAL */}
      <AnimatePresence>
        {selectedSharePartner && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
            id="digital-card-modal-overlay"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#09090b] border border-gold-500/25 rounded-3xl w-full max-w-sm overflow-hidden flex flex-col shadow-2xl relative"
            >
              <div className="absolute top-4 right-4 z-20">
                <button
                  onClick={() => {
                    setSelectedSharePartner(null);
                    setShareNotification(null);
                  }}
                  className="p-1.5 rounded-full bg-white/5 text-gray-400 hover:text-white transition-all cursor-pointer border border-white/5"
                  id="btn-close-share-modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* CARD CONTAINER CONTENT */}
              <div className="p-5 pt-8 text-center relative overflow-hidden flex-1 flex flex-col items-center">
                
                {/* Background Ambient Spotlights */}
                <div className="absolute top-[-25%] left-[-25%] w-80 h-80 bg-gold-500/10 rounded-full blur-[70px] pointer-events-none" />
                <div className="absolute bottom-[-25%] right-[-25%] w-80 h-80 bg-purple-500/5 rounded-full blur-[70px] pointer-events-none" />

                {/* Elegant Crest / Header */}
                <span className="text-[9px] font-mono tracking-widest text-gold-450 uppercase mb-4 font-bold border border-gold-500/20 bg-gold-400/5 px-3 py-1 rounded-full relative z-10">
                  Sovereign Alliance ID • DIGITAL CARD
                </span>

                {/* Swiss Metallic Style Business Card */}
                <div 
                  className="w-full bg-gradient-to-br from-[#121214] via-[#08080a] to-[#040405] border border-gold-500/35 rounded-2xl p-5 text-left relative overflow-hidden shadow-2xl min-h-[280px] flex flex-col justify-between"
                  id="partner-digital-business-card"
                >
                  {/* Subtle watermarked grid lines inside card */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gold-400/[0.01] rounded-full blur-3xl pointer-events-none" />

                  {/* Card row 1: Top header */}
                  <div className="flex justify-between items-start relative z-10">
                    <div>
                      <span className="text-[10px] font-mono text-gold-450 uppercase block tracking-wider leading-none font-bold">
                        NEXORA SALONOS
                      </span>
                      <span className="text-[7px] font-mono text-gray-500 uppercase block tracking-widest mt-0.5 leading-none">
                        INDIA ALLIANCE NETWORK
                      </span>
                    </div>

                    {/* Badge emblem depends on rank */}
                    <div className="p-1.5 rounded-lg bg-gold-500/10 border border-gold-500/20 text-gold-450">
                      {selectedSharePartner.rank === 1 ? (
                        <Crown className="w-5 h-5 text-gold-400" />
                      ) : selectedSharePartner.rank <= 3 ? (
                        <Trophy className="w-5 h-5 text-purple-400" />
                      ) : (
                        <Award className="w-5 h-5 text-emerald-400" />
                      )}
                    </div>
                  </div>

                  {/* Card row 2: Chip and wireless-like design element */}
                  <div className="my-5 flex items-center justify-between relative z-10">
                    {/* Metallic simulated smart chip */}
                    <div className="w-8 h-6 rounded-md bg-gradient-to-r from-amber-400 via-gold-500 to-amber-600 border border-gold-600/30 shadow-inner relative overflow-hidden">
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff20_1px,transparent_1px),linear-gradient(to_bottom,#ffffff20_1px,transparent_1px)] bg-[size:4px_4px]" />
                    </div>

                    <span className="text-[8px] font-mono text-gray-500 tracking-wider">
                      MEMBER ID-00{selectedSharePartner.rank}
                    </span>
                  </div>

                  {/* Card row 3: Partner Info */}
                  <div className="relative z-10 text-left">
                    <h4 className="text-base font-bold font-display text-white tracking-wide leading-tight">
                      {selectedSharePartner.name}
                    </h4>
                    <div className="flex items-center gap-1.5 mt-1 select-none">
                      <span className="text-[8px] font-mono font-bold text-gold-455 bg-gold-400/5 px-1.5 py-0.5 rounded border border-gold-500/10">
                        {selectedSharePartner.tier}
                      </span>
                      <span className="text-[9px] text-gray-400 font-sans">
                        • {selectedSharePartner.city}
                      </span>
                    </div>
                  </div>

                  {/* Card row 4: Metric columns */}
                  <div className="mt-5 pt-3.5 border-t border-white/5 grid grid-cols-3 gap-2 relative z-10">
                    <div>
                      <span className="text-[7px] font-mono text-gray-500 uppercase block">Linked Shops</span>
                      <span className="text-[11px] font-mono font-bold text-white mt-0.5 block">{selectedSharePartner.salons} Chairs</span>
                    </div>
                    <div>
                      <span className="text-[7px] font-mono text-gray-500 uppercase block">Shop GMV</span>
                      <span className="text-[11px] font-mono font-bold text-emerald-400 mt-0.5 block">₹{(selectedSharePartner.gmv / 100000).toFixed(2)}L</span>
                    </div>
                    <div>
                      <span className="text-[7px] font-mono text-gray-500 uppercase block">Validation</span>
                      <span className="text-[11px] font-mono font-bold text-purple-400 mt-0.5 block flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-emerald-500 inline-block animate-pulse" />
                        <span>VERIFIED</span>
                      </span>
                    </div>
                  </div>

                </div>

                {/* SOCIAL PLATFORM MOCK SELECTION CARD ACTIONS */}
                <div className="w-full mt-5 space-y-3.5 relative z-10">
                  <div className="flex gap-2">
                    <button
                      onClick={handleCopyLink}
                      className="flex-1 py-2 px-3 rounded-lg bg-gold-500 hover:bg-gold-400 text-black font-bold text-xs flex items-center justify-center space-x-1.5 transition-all cursor-pointer min-h-[40px]"
                      id="btn-copy-card-link"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                          <span>Copied Business Card URL!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Digital URL</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={handleDownloadCard}
                      className="py-2 px-3.5 rounded-lg bg-white/5 hover:bg-white/10 text-white font-medium border border-white/10 text-xs flex items-center justify-center space-x-1.5 transition-all cursor-pointer min-h-[40px]"
                      id="btn-download-card-image"
                      title="Download Card CSV data"
                    >
                      <Download className="w-3.5 h-3.5 text-gray-400" />
                      <span>Download</span>
                    </button>
                  </div>

                  {/* Share platform links */}
                  <div className="bg-black/60 border border-white/5 p-3 rounded-xl text-left">
                    <span className="text-[9px] font-mono text-gray-500 uppercase block mb-2 font-bold tracking-wider">
                      SHARE CERTIFIED POST DIRECTLY
                    </span>
                    <div className="flex gap-1.5 text-center text-[10px] font-semibold text-gray-300">
                      <button 
                        onClick={() => handleSimulateShare("LinkedIn")}
                        className="flex-1 py-1.5 px-2 rounded bg-blue-950/20 border border-blue-500/20 text-blue-405 hover:bg-blue-500 hover:text-white transition-all cursor-pointer min-h-[30px] flex items-center justify-center gap-1"
                        id="btn-share-linkedin"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>LinkedIn</span>
                      </button>
                      <button 
                        onClick={() => handleSimulateShare("WhatsApp")}
                        className="flex-1 py-1.5 px-2 rounded bg-emerald-950/20 border border-emerald-500/20 text-emerald-405 hover:bg-emerald-500 hover:text-white transition-all cursor-pointer min-h-[30px] flex items-center justify-center gap-1"
                        id="btn-share-whatsapp"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>WhatsApp</span>
                      </button>
                      <button 
                        onClick={() => handleSimulateShare("Twitter / X")}
                        className="flex-1 py-1.5 px-2 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 hover:bg-white hover:text-black transition-all cursor-pointer min-h-[30px] flex items-center justify-center gap-1"
                        id="btn-share-twitter"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>Twitter/X</span>
                      </button>
                    </div>
                  </div>

                  {/* Share logs message notification */}
                  <AnimatePresence>
                    {shareNotification && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="p-2 rounded bg-gold-450/10 border border-gold-500/20 text-gold-450 text-[10px] text-center font-mono leading-relaxed"
                      >
                        {shareNotification}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Swiss standard disclaimer */}
                <p className="text-[9px] text-gray-500 leading-relaxed font-sans mt-3 relative z-10">
                  Verified security cryptographic profile hash code matching system records. Nexora Ledger authentication is live.
                </p>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
