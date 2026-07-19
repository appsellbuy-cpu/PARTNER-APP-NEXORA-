/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  User, Phone, MapPin, Briefcase, Award, Sparkles, Building2, CheckCircle2, Loader2, ArrowRight, AlertCircle 
} from 'lucide-react';
import { GrowthPartnerSubmission, SalonOSSubmission } from '../types';

interface PartnerFormProps {
  onFormSubmitted: () => void;
  initialTab?: 'sales' | 'salon';
}

interface GoldParticle {
  id: number;
  angle: number;
  distance: number;
  size: number;
  delay: number;
  duration: number;
  color: string;
}

export default function PartnerForm({ onFormSubmitted, initialTab = 'sales' }: PartnerFormProps) {
  const [formType, setFormType] = useState<'sales' | 'salon'>(initialTab);
  const [loading, setLoading] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [particles, setParticles] = useState<GoldParticle[]>([]);

  // Sales Partner fields
  const [partnerModel, setPartnerModel] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    experience: '1-3 years',
    brands: '',
  });

  // SalonOS Member fields
  const [salonModel, setSalonModel] = useState({
    ownerName: '',
    salonName: '',
    salonType: 'Barber Shop',
    phone: '',
    city: '',
    employees: 4,
  });

  // Dynamic particle generation upon success
  useEffect(() => {
    if (submitSuccess) {
      setValidationError(null);
      const list: GoldParticle[] = [];
      const colors = ['#f59e0b', '#fbbf24', '#fef08a', '#d39d2c', '#ffffff'];
      for (let i = 0; i < 45; i++) {
        list.push({
          id: i,
          angle: Math.random() * Math.PI * 2,
          distance: Math.random() * 220 + 80, // spread range 80px to 300px
          size: Math.random() * 6 + 3, // size 3px to 9px
          delay: Math.random() * 0.3,
          duration: Math.random() * 1.5 + 1.2, // 1.2s to 2.7s
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }
      setParticles(list);
    } else {
      setParticles([]);
    }
  }, [submitSuccess]);

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!partnerModel.name || !partnerModel.phone || !partnerModel.city) {
      setValidationError('Please fill out all required fields marked with *');
      return;
    }

    setValidationError(null);
    setLoading(true);
    setTimeout(() => {
      const existingLeads: GrowthPartnerSubmission[] = JSON.parse(localStorage.getItem('nexora_partner_leads') || '[]');
      const newSubmission: GrowthPartnerSubmission = {
        id: 'sales-' + Date.now(),
        ...partnerModel,
        submittedAt: new Date().toISOString(),
      };
      
      localStorage.setItem('nexora_partner_leads', JSON.stringify([...existingLeads, newSubmission]));
      setLoading(false);
      setSubmitSuccess(true);
      onFormSubmitted();

      // Clear fields
      setPartnerModel({
        name: '',
        phone: '',
        email: '',
        city: '',
        experience: '1-3 years',
        brands: '',
      });
    }, 1200);
  };

  const handleSalonSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!salonModel.ownerName || !salonModel.salonName || !salonModel.phone || !salonModel.city) {
      setValidationError('Please fill out all required fields marked with *');
      return;
    }

    setValidationError(null);
    setLoading(true);
    setTimeout(() => {
      const existingLeads: SalonOSSubmission[] = JSON.parse(localStorage.getItem('nexora_salon_leads') || '[]');
      const newSubmission: SalonOSSubmission = {
        id: 'salon-' + Date.now(),
        ...salonModel,
        submittedAt: new Date().toISOString(),
      };

      localStorage.setItem('nexora_salon_leads', JSON.stringify([...existingLeads, newSubmission]));
      setLoading(false);
      setSubmitSuccess(true);
      onFormSubmitted();

      // Clear fields
      setSalonModel({
        ownerName: '',
        salonName: '',
        salonType: 'Barber Shop',
        phone: '',
        city: '',
        employees: 4,
      });
    }, 1200);
  };

  const experienceTiers = ['Less than 1 year', '1-3 years', '3-5 years', 'More than 5 years'];
  const salonCategories = [
    'Barber Shop', 
    'Beauty Parlour', 
    'Spa Center', 
    'Tattoo Studio', 
    'Massage Center', 
    'Nail Art Studio',
    'Unisex Salon',
    'Premium Grooming Lounge'
  ];

  return (
    <div className="py-24 border-t border-b border-white/5 bg-luxury-black/95 relative" id="alliance-registration">
      {/* Decorative blurs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-96 bg-purple-600/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Toggle navigation selector */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-luxury-gray border border-white/5 p-1 rounded-2xl shadow-inner shadow-black">
            <button
              onClick={() => {
                setFormType('sales');
                setSubmitSuccess(false);
                setValidationError(null);
              }}
              className={`px-8 py-3 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 font-display ${
                formType === 'sales'
                  ? 'bg-gradient-to-r from-gold-500 to-purple-600 text-white shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
              id="btn-form-toggle-sales"
            >
              Become Sales Partner
            </button>
            <button
              onClick={() => {
                setFormType('salon');
                setSubmitSuccess(false);
                setValidationError(null);
              }}
              className={`px-8 py-3 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 font-display ${
                formType === 'salon'
                  ? 'bg-gradient-to-r from-gold-500 to-purple-600 text-white shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
              id="btn-form-toggle-salon"
            >
              Register SalonOS Member
            </button>
          </div>
        </div>

        {/* Outer Form Card */}
        <div className="bg-gradient-to-b from-luxury-card to-luxury-black border border-white/5 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          <AnimatePresence mode="wait">
            {submitSuccess ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="py-12 text-center flex flex-col items-center justify-center relative overflow-visible"
              >
                {/* Gold-Particles Animation Stage Container */}
                <div className="absolute inset-x-0 top-1/4 flex items-center justify-center pointer-events-none z-10 overflow-visible h-0 w-full">
                  {particles.map((p) => (
                    <motion.div
                      key={`gold-p-${p.id}`}
                      initial={{ x: 0, y: 0, scale: 0, opacity: 1, rotate: 0 }}
                      animate={{
                        x: Math.cos(p.angle) * p.distance,
                        y: Math.sin(p.angle) * p.distance,
                        scale: [0, 1, 1, 0.4, 0],
                        opacity: [1, 1, 0.8, 0],
                        rotate: [0, 360 * (Math.random() > 0.5 ? 1 : -1)]
                      }}
                      transition={{
                        delay: p.delay,
                        duration: p.duration,
                        ease: "easeOut"
                      }}
                      style={{
                        position: 'absolute',
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                        borderRadius: Math.random() > 0.35 ? '50%' : '15%',
                        backgroundColor: p.color,
                        boxShadow: `0 0 10px ${p.color}`,
                      }}
                    />
                  ))}
                </div>

                {/* Animated Glowing Center Badge */}
                <div className="relative mb-8">
                  {/* Outer breathing golden halo */}
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: [1, 1.35, 1], opacity: [0.15, 0.45, 0.15] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    className="absolute -inset-4 rounded-full bg-gradient-to-r from-gold-550 to-purple-650 blur-xl opacity-30"
                  />
                  
                  {/* Rotating dashed ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 18, ease: "linear", repeat: Infinity }}
                    className="absolute -inset-3 rounded-full border border-dashed border-gold-500/30"
                  />

                  {/* Icon Frame */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 220, damping: 14, delay: 0.1 }}
                    className="w-20 h-20 rounded-full bg-gradient-to-tr from-gold-600 via-[#d39d2c] to-yellow-300 p-[2px] shadow-[0_0_40px_rgba(211,157,44,0.35)] relative z-10"
                  >
                    <div className="w-full h-full rounded-full bg-luxury-black flex items-center justify-center">
                      <Sparkles className="w-9 h-9 text-gold-450 animate-pulse" />
                    </div>
                  </motion.div>
                </div>

                {/* Celebration Header */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="z-10"
                >
                  <span className="text-[10px] font-mono tracking-widest text-gold-400 bg-gold-550/10 px-3 py-1.5 rounded-full border border-gold-500/20 inline-block mb-4 uppercase font-bold animate-pulse">
                    ✦ Ledger Securely Tuned ✦
                  </span>
                  
                  <h3 className="text-2xl sm:text-4xl font-display font-medium text-white mb-3 tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-r from-white via-gold-100 to-gold-400">
                    Application Logged!
                  </h3>
                </motion.div>
                
                {/* Outcome Statement Panel */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-[#0b0b0d]/90 border border-gold-500/15 p-6 rounded-2xl max-w-lg mx-auto mb-8 relative z-10 shadow-lg text-left"
                >
                  <p className="text-sm text-gray-300 leading-relaxed font-sans mb-4">
                    {formType === 'sales' 
                      ? "Welcome to India's first beauty growth network. Our regional distribution managers will review your profile and coordinate our launch training packet with you in 48 hours."
                      : "Your salon has taken its first step into the decentralized booking age. A local growth mentor will reach out to conduct your complimentary onboarding diagnostics."}
                  </p>
                  
                  <div className="flex items-center space-x-2 text-xs text-emerald-400 font-mono pt-3.5 border-t border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Real-time submission updated in primary application records</span>
                  </div>
                </motion.div>

                {/* Back button */}
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  onClick={() => {
                    setSubmitSuccess(false);
                    setParticles([]);
                  }}
                  className="px-8 py-3.5 bg-gradient-to-r from-gold-500 hover:from-gold-400 to-purple-600 hover:to-purple-500 rounded-xl text-xs font-bold text-white shadow-lg shadow-purple-500/10 hover:shadow-purple-500/20 transition-all uppercase tracking-widest cursor-pointer font-sans"
                  id="btn-success-reset"
                >
                  Submit Another Application
                </motion.button>
              </motion.div>
            ) : formType === 'sales' ? (
              // Sales Partner Form Screen
              <motion.form
                key="sales-form"
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 15 }}
                onSubmit={handlePartnerSubmit}
                className="space-y-6"
                id="form-sales-partner"
              >
                <div className="border-b border-white/5 pb-6">
                  <h3 className="text-xl sm:text-2xl font-display font-medium text-white mb-1.5 flex items-center space-x-2">
                    <Award className="w-5.5 h-5.5 text-gold-400" />
                    <span>Become Nexora Growth Partner</span>
                  </h3>
                  <p className="text-xs text-gray-400">
                    Earn dynamic passive royalty commissions for life. Secure priority distribution rights to cosmetics giants inside your municipal territory.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-gray-400 uppercase block">Full Name *</label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder="Vijay Sharma"
                        value={partnerModel.name}
                        onChange={(e) => setPartnerModel({ ...partnerModel, name: e.target.value })}
                        className="w-full bg-luxury-black border border-white/10 hover:border-white/20 focus:border-gold-500 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none transition-all pl-10"
                        id="input-partner-name"
                      />
                      <User className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-500" />
                    </div>
                  </div>

                  {/* Phone field */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-gray-400 uppercase block">Phone Number *</label>
                    <div className="relative">
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={partnerModel.phone}
                        onChange={(e) => setPartnerModel({ ...partnerModel, phone: e.target.value })}
                        className="w-full bg-luxury-black border border-white/10 hover:border-white/20 focus:border-gold-500 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none transition-all pl-10"
                        id="input-partner-phone"
                      />
                      <Phone className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-500" />
                    </div>
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-gray-400 uppercase block">Email Address</label>
                    <div className="relative">
                      <input
                        type="email"
                        placeholder="vijay.sharma@gmail.com"
                        value={partnerModel.email}
                        onChange={(e) => setPartnerModel({ ...partnerModel, email: e.target.value })}
                        className="w-full bg-luxury-black border border-white/10 hover:border-white/20 focus:border-gold-500 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none transition-all pl-10"
                        id="input-partner-email"
                      />
                      <User className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-500" />
                    </div>
                  </div>

                  {/* Territory/City field */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-gray-400 uppercase block">Target Territory / City *</label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder="Mumbai, South Zone"
                        value={partnerModel.city}
                        onChange={(e) => setPartnerModel({ ...partnerModel, city: e.target.value })}
                        className="w-full bg-luxury-black border border-white/10 hover:border-white/20 focus:border-gold-500 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none transition-all pl-10"
                        id="input-partner-city"
                      />
                      <MapPin className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-500" />
                    </div>
                  </div>

                  {/* Experience selection */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-gray-400 uppercase block">Beauty Representation Experience</label>
                    <div className="relative">
                      <select
                        value={partnerModel.experience}
                        onChange={(e) => setPartnerModel({ ...partnerModel, experience: e.target.value })}
                        className="w-full bg-luxury-black border border-white/10 focus:border-gold-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-all pl-10 appearance-none"
                        id="input-partner-exp"
                      >
                        {experienceTiers.map(tier => (
                          <option key={tier} value={tier} className="bg-luxury-gray text-white">{tier}</option>
                        ))}
                      </select>
                      <Briefcase className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-500" />
                    </div>
                  </div>

                  {/* Brands field */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-gray-400 uppercase block">Brands represented traditionally</label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="e.g. L'Oreal, Matrix, Schwarzkopf"
                        value={partnerModel.brands}
                        onChange={(e) => setPartnerModel({ ...partnerModel, brands: e.target.value })}
                        className="w-full bg-luxury-black border border-white/10 hover:border-white/20 focus:border-gold-500 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none transition-all pl-10"
                        id="input-partner-brands"
                      />
                      <Award className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-500" />
                    </div>
                  </div>
                </div>

                {/* Validation message */}
                {validationError && formType === 'sales' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-red-950/20 border border-red-550/20 text-xs text-red-400 flex items-center space-x-3 mt-4"
                  >
                    <AlertCircle className="w-4.5 h-4.5 text-red-400 shrink-0" />
                    <span>{validationError}</span>
                  </motion.div>
                )}

                {/* Submit Panel */}
                <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-gray-500 text-center sm:text-left select-none">
                    ✦ Free joining setup. Bypasses software rentals. No deposits required.
                  </span>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto px-8 py-3 rounded-xl bg-gradient-to-r from-gold-500 to-purple-600 hover:from-gold-400 hover:to-purple-500 text-white text-sm font-bold shadow-lg shadow-purple-500/10 flex items-center justify-center space-x-2 disabled:opacity-50"
                    id="btn-partner-submit"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                        <span>Processing Profile...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Registration</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </motion.form>
            ) : (
              // SalonOS Member Form Screen
              <motion.form
                key="salon-form"
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                onSubmit={handleSalonSubmit}
                className="space-y-6"
                id="form-salon-member"
              >
                <div className="border-b border-white/5 pb-6">
                  <h3 className="text-xl sm:text-2xl font-display font-medium text-white mb-1.5 flex items-center space-x-2">
                    <Building2 className="w-5.5 h-5.5 text-purple-400" />
                    <span>Apply for SalonOS Membership</span>
                  </h3>
                  <p className="text-xs text-gray-400">
                    Slay direct software subscriptions. Open automated client triggers, direct wholesale cosmetic stock avenues, and decentralized loyalty tokens for your customers.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  {/* Owner’s Name field */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-gray-400 uppercase block">Owner's Full Name *</label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder="Anjali Mehta"
                        value={salonModel.ownerName}
                        onChange={(e) => setSalonModel({ ...salonModel, ownerName: e.target.value })}
                        className="w-full bg-luxury-black border border-white/10 hover:border-white/20 focus:border-gold-500 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none transition-all pl-10"
                        id="input-salon-owner"
                      />
                      <User className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-500" />
                    </div>
                  </div>

                  {/* Salon brand Name field */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-gray-400 uppercase block">Salon Brand / Shop Name *</label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder="The Golden Comb"
                        value={salonModel.salonName}
                        onChange={(e) => setSalonModel({ ...salonModel, salonName: e.target.value })}
                        className="w-full bg-luxury-black border border-white/10 hover:border-white/20 focus:border-gold-500 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none transition-all pl-10"
                        id="input-salon-brand"
                      />
                      <Building2 className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-500" />
                    </div>
                  </div>

                  {/* Salon Category dropdown */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-gray-400 uppercase block">Salon Category Type</label>
                    <div className="relative">
                      <select
                        value={salonModel.salonType}
                        onChange={(e) => setSalonModel({ ...salonModel, salonType: e.target.value })}
                        className="w-full bg-luxury-black border border-white/10 focus:border-purple-500 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-all pl-10 appearance-none"
                        id="input-salon-type"
                      >
                        {salonCategories.map(cat => (
                          <option key={cat} value={cat} className="bg-luxury-gray text-white">{cat}</option>
                        ))}
                      </select>
                      <Sparkles className="absolute left-3.5 top-3.5 w-4 h-4 text-purple-400" />
                    </div>
                  </div>

                  {/* Contact Phone field */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-gray-400 uppercase block">Personal Phone Number *</label>
                    <div className="relative">
                      <input
                        type="tel"
                        required
                        placeholder="+91 99999 88888"
                        value={salonModel.phone}
                        onChange={(e) => setSalonModel({ ...salonModel, phone: e.target.value })}
                        className="w-full bg-luxury-black border border-white/10 hover:border-white/20 focus:border-purple-500 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none transition-all pl-10"
                        id="input-salon-phone"
                      />
                      <Phone className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-500" />
                    </div>
                  </div>

                  {/* Geographic Location field */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-gray-400 uppercase block">Territory / City Location *</label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder="Delhi NCR, Indirapuram"
                        value={salonModel.city}
                        onChange={(e) => setSalonModel({ ...salonModel, city: e.target.value })}
                        className="w-full bg-luxury-black border border-white/10 hover:border-white/20 focus:border-purple-500 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none transition-all pl-10"
                        id="input-salon-city"
                      />
                      <MapPin className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-500" />
                    </div>
                  </div>

                  {/* Employees Counter */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-gray-400 uppercase block">Staff Count / Chairs</label>
                    <div className="relative">
                      <input
                        type="number"
                        min="1"
                        max="50"
                        value={salonModel.employees}
                        onChange={(e) => setSalonModel({ ...salonModel, employees: parseInt(e.target.value) || 1 })}
                        className="w-full bg-luxury-black border border-white/10 hover:border-white/20 focus:border-purple-500 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none transition-all pl-10"
                        id="input-salon-staff"
                      />
                      <Award className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-500" />
                    </div>
                  </div>
                </div>

                {/* Validation message */}
                {validationError && formType === 'salon' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-red-950/20 border border-red-550/20 text-xs text-red-400 flex items-center space-x-3 mt-4"
                  >
                    <AlertCircle className="w-4.5 h-4.5 text-red-400 shrink-0" />
                    <span>{validationError}</span>
                  </motion.div>
                )}

                {/* Submit Panel */}
                <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-gray-500 text-center sm:text-left select-none">
                    ✦ Zero upfront joining. Includes customer rewards & booking setups.
                  </span>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto px-8 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 text-white text-sm font-bold shadow-lg shadow-purple-500/10 flex items-center justify-center space-x-2 disabled:opacity-50"
                    id="btn-salon-submit"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                        <span>Authenticating Profile...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Application</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>

        </div>
      </div>
    </div>
  );
}
