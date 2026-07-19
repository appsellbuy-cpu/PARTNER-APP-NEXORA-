/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Briefcase, Scissors, Feather, Sprout, GraduationCap, Sparkles, 
  MapPin, IndianRupee, Calendar, Building2, CheckCircle2, X, 
  Upload, Search, FileText, Plus, User, Eye, Phone, Globe, ShieldAlert
} from 'lucide-react';

interface JobOpening {
  id: string;
  title: string;
  employer: string;
  category: 'salon' | 'barber' | 'spa' | 'tattoo' | 'beauty' | 'student';
  categoryLabel: string;
  location: string;
  salary: string;
  type: string;
  experience: string;
  posted: string;
  perks: string[];
  featured: boolean;
}

export default function BeautyJobPortal() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [dragActive, setDragActive] = useState<boolean>(false);
  const [fileName, setFileName] = useState<string>('');
  const [profileSubmitted, setProfileSubmitted] = useState<boolean>(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    roleCategory: 'salon',
    experience: '1-3',
    expectedSalary: '',
    city: 'Bengaluru Hub',
    portfolio: '',
    phone: '',
    bio: ''
  });

  const categories = [
    { id: 'all', label: 'All Openings', icon: Briefcase, count: 24 },
    { id: 'salon', label: 'Salon Jobs', icon: Scissors, count: 6 },
    { id: 'barber', label: 'Barber Jobs', icon: User, count: 4 },
    { id: 'spa', label: 'Spa Jobs', icon: Sprout, count: 4 },
    { id: 'tattoo', label: 'Tattoo Jobs', icon: Feather, count: 3 },
    { id: 'beauty', label: 'Beauty Jobs', icon: Sparkles, count: 4 },
    { id: 'student', label: 'Student Placements', icon: GraduationCap, count: 3 }
  ];

  const initialJobsList: JobOpening[] = [
    // Salon Jobs
    {
      id: "j1",
      title: "Senior Creative Hair Stylist & Educator",
      employer: "Bounce Premier Salons",
      category: "salon",
      categoryLabel: "Salon Jobs",
      location: "Bengaluru (Indiranagar)",
      salary: "₹45,000 - ₹65,000 / month",
      type: "Full-Time",
      experience: "4+ Years",
      posted: "2 hours ago",
      perks: ["Premium Commissions", "Subsidized Education Workshops", "Health Insurance"],
      featured: true
    },
    {
      id: "j2",
      title: "Nail Art Technician & Overlay Specialist",
      employer: "The Polish Lounge",
      category: "salon",
      categoryLabel: "Salon Jobs",
      location: "Mumbai (Bandra West)",
      salary: "₹25,000 - ₹35,000 / month",
      type: "Full-Time",
      experience: "2+ Years",
      posted: "1 day ago",
      perks: ["Material Allowances", "Incentive Bonus Structure"],
      featured: false
    },
    // Barber Jobs
    {
      id: "j3",
      title: "Master Barber & Beard Stylist",
      employer: "Truefitt & Hill India",
      category: "barber",
      categoryLabel: "Barber Jobs",
      location: "Delhi (Connaught Place)",
      salary: "₹40,000 - ₹55,000 / month",
      type: "Full-Time",
      experience: "3+ Years",
      posted: "4 hours ago",
      perks: ["Luxury Grooming Training", "Custom Attire", "Tips Retained 100%"],
      featured: true
    },
    {
      id: "j4",
      title: "Modern Fade & Shave Stylist",
      employer: "Slayer Barber Club",
      category: "barber",
      categoryLabel: "Barber Jobs",
      location: "Hyderabad (Gachibowli)",
      salary: "₹22,000 - ₹32,000 / month",
      type: "Full-Time / Flexible",
      experience: "1-2 Years",
      posted: "2 days ago",
      perks: ["Flexible Shift Scheduling", "Free Professional Tools kit"],
      featured: false
    },
    // Spa Jobs
    {
      id: "j5",
      title: "Wellness Spa Therapist (Aromatherapy Specialist)",
      employer: "Taj Jiva Spa Resorts",
      category: "spa",
      categoryLabel: "Spa Jobs",
      location: "Mumbai (Colaba)",
      salary: "₹35,000 - ₹48,000 / month",
      type: "Full-Time",
      experience: "3+ Years",
      posted: "Yesterday",
      perks: ["Five-Star Lodging Allowances", "Performance Bonuses", "Global Exchange Program"],
      featured: true
    },
    {
      id: "j6",
      title: "Ayurvedic Massage Specialist",
      employer: "Somatheeram Certified Wellness",
      category: "spa",
      categoryLabel: "Spa Jobs",
      location: "Delhi (South Ext)",
      salary: "₹28,000 - ₹38,000 / month",
      type: "Full-Time",
      experience: "2 Years min",
      posted: "3 days ago",
      perks: ["Meals Included", "Authentic Herb Kits Provided"],
      featured: false
    },
    // Tattoo Jobs
    {
      id: "j7",
      title: "Senior Realism Body Artist",
      employer: "Aliens Tattoo Syndicate",
      category: "tattoo",
      categoryLabel: "Tattoo Jobs",
      location: "Bengaluru (Koramangala)",
      salary: "₹50,050 - ₹75,000 / month",
      type: "Full-Time / Studio Partner",
      experience: "3+ Years",
      posted: "1 day ago",
      perks: ["State-of-the-Art Ink Supplies", "Featured Portfolio on Social Media", "Global Convention Passes"],
      featured: true
    },
    {
      id: "j8",
      title: "Fineline & Micro-Portrait Artist",
      employer: "Illusion Ink Studios",
      category: "tattoo",
      categoryLabel: "Tattoo Jobs",
      location: "Pune (Koregaon Park)",
      salary: "₹30,000 - ₹45,000 / month",
      type: "Contractual",
      experience: "1.5 Years minimum",
      posted: "4 days ago",
      perks: ["Sanitization Training Certificate", "50% direct commission cut"],
      featured: false
    },
    // Beauty Jobs
    {
      id: "j9",
      title: "Celebrity Makeup Consultant & Airbrush Lead",
      employer: "Glam-Vibe Artists Group",
      category: "beauty",
      categoryLabel: "Beauty Jobs",
      location: "Mumbai (Juhu)",
      salary: "₹55,000 - ₹80,000 / month",
      type: "Contract / Full-Time",
      experience: "5+ Years",
      posted: "6 hours ago",
      perks: ["High-End Cosmetics Allowance", "Travel Expense Coverage", "PR & TV Credit features"],
      featured: true
    },
    {
      id: "j10",
      title: "Dermaceutic Skincare Expert",
      employer: "Kaya Skin Clinics",
      category: "beauty",
      categoryLabel: "Beauty Jobs",
      location: "Delhi (Vasant Kunj)",
      salary: "₹35,000 - ₹50,000 / month",
      type: "Full-Time",
      experience: "2-4 Years",
      posted: "2 days ago",
      perks: ["Medical Diagnostics Upskilling", "Corporate Health Care Insurance"],
      featured: false
    },
    // Student Placements
    {
      id: "j11",
      title: "Apprentice Cosmetology Intern (Stipendiary)",
      employer: "L'Oréal Professionnel Academy Network",
      category: "student",
      categoryLabel: "Student Placements",
      location: "Bengaluru Hub",
      salary: "₹12,000 - ₹18,000 / month",
      type: "Internship (6 Months)",
      experience: "No experience / Student",
      posted: "Recently",
      perks: ["L'Oréal Academy Placement Certificate", "Direct job conversion offer"],
      featured: true
    },
    {
      id: "j12",
      title: "Junior Salon Coordinator (Graduating Cohorts)",
      employer: "Nexora Elite Salon Chain",
      category: "student",
      categoryLabel: "Student Placements",
      location: "Hyderabad & Delhi Hubs",
      salary: "₹15,000 - ₹20,000 / month",
      type: "Pre-placement Offer",
      experience: "Trainee Cohort",
      posted: "1 day ago",
      perks: ["Nexora Partner Suite Dashboard Licenses", "Full Digital Operations Training"],
      featured: false
    }
  ];

  // Filters calculation
  const filteredJobs = initialJobsList.filter(job => {
    const matchesCategory = selectedCategory === 'all' || job.category === selectedCategory;
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = 
      job.title.toLowerCase().includes(searchLower) || 
      job.employer.toLowerCase().includes(searchLower) ||
      job.location.toLowerCase().includes(searchLower) ||
      job.categoryLabel.toLowerCase().includes(searchLower);
    return matchesCategory && matchesSearch;
  });

  // Drag Drop handlers
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFileName(e.dataTransfer.files[0].name);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setProfileSubmitted(true);
    setTimeout(() => {
      // Simulate close overlay
      setIsModalOpen(false);
      // Reset
      setProfileSubmitted(false);
      setFileName('');
      setFormData({
        name: '',
        roleCategory: 'salon',
        experience: '1-3',
        expectedSalary: '',
        city: 'Bengaluru Hub',
        portfolio: '',
        phone: '',
        bio: ''
      });
    }, 3800);
  };

  return (
    <section className="relative py-24 bg-luxury-black border-b border-white/5 overflow-hidden" id="beauty-job-portal-section">
      
      {/* Visual Accent Ambient Orbs */}
      <div className="absolute top-[15%] right-[-15%] w-96 h-96 bg-purple-900/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-[15%] left-[-15%] w-96 h-96 bg-gold-450/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* UPPER ANCHOR LABEL */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#d39d2c] bg-gold-550/5 px-3 py-1 rounded-full border border-gold-500/10 inline-block mb-4 font-bold">
            SECTION 14 • Professional Network
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium tracking-tight text-white mb-4">
            Beauty Industry Hiring Network
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-sans">
            Connect directly with high-caliber verified salon networks, spa operators, modern tattoo centers, and luxury cosmetic empires. Launch your career or secure premier, elite student academy placements.
          </p>
        </div>

        {/* CONTROLS BAR: CATEGORY FILTER TABS & SEARCH */}
        <div className="bg-[#0e0e11] border border-white/10 rounded-2xl p-4 sm:p-5 mb-10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-5">
          
          {/* Group 1: Category Filter Scrollable */}
          <div className="flex items-center space-x-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none max-w-full -mx-4 px-4 sm:-mx-0 sm:px-0">
            {categories.map((cat) => {
              const IconComponent = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`py-2 px-3.5 rounded-xl text-xs font-semibold flex items-center space-x-2 shrink-0 transition-all cursor-pointer border ${
                    selectedCategory === cat.id
                      ? 'bg-gold-500 border-gold-500 text-black font-bold'
                      : 'bg-black/30 border-white/5 text-gray-400 hover:text-white'
                  }`}
                  id={`btn-job-cat-${cat.id}`}
                >
                  <IconComponent className="w-3.5 h-3.5 shrink-0" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Group 2: Quick Search */}
          <div className="relative w-full md:w-80 font-mono">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search roles, cities, brands..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-2.5 pl-10 pr-4 bg-black/40 border border-white/15 text-xs text-white rounded-xl placeholder-gray-550 focus:outline-none focus:border-gold-500 transition-all"
            />
          </div>

        </div>

        {/* LISTINGS BENTO GRID CONTAINER */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch mb-16" id="job-openings-grid">
          <AnimatePresence mode="popLayout">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => {
                let badgeStyle = "text-gold-400 bg-gold-550/5 border-gold-500/10";
                if (job.category === 'student') badgeStyle = "text-purple-400 bg-purple-500/5 border-purple-500/10";
                if (job.category === 'spa') badgeStyle = "text-emerald-400 bg-emerald-500/5 border-emerald-500/10";
                if (job.category === 'tattoo') badgeStyle = "text-rose-400 bg-rose-500/5 border-rose-500/10 block";

                return (
                  <motion.div
                    key={job.id}
                    layout
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                    className={`p-6 sm:p-8 rounded-3xl bg-[#0e0e11] border transition-all duration-300 flex flex-col justify-between text-left relative overflow-hidden group ${
                      job.featured 
                        ? 'border-gold-500/25 bg-gradient-to-br from-[#121214] via-[#0e0e11] to-[#040405] shadow-[0_4px_30px_rgba(211,157,44,0.02)]' 
                        : 'border-white/5 hover:border-white/10 hover:bg-[#121214]/60'
                    }`}
                    id={`job-card-${job.id}`}
                  >
                    {/* Visual corner badge */}
                    {job.featured && (
                      <div className="absolute top-0 right-0 py-1 px-4 text-[8px] font-mono font-bold uppercase tracking-widest text-[#d39d2c] bg-gold-450/10 border-l border-b border-gold-500/15 rounded-bl-xl">
                        ★ Featured Open Option
                      </div>
                    )}

                    <div>
                      
                      {/* Employer & category row */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-mono text-gray-500 flex items-center space-x-1.5 font-bold">
                          <Building2 className="w-3.5 h-3.5 text-gray-550 shrink-0" />
                          <span>{job.employer}</span>
                        </span>
                        
                        <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-mono uppercase font-bold border ${badgeStyle}`}>
                          {job.categoryLabel}
                        </span>
                      </div>

                      {/* Title block */}
                      <h4 className="text-base font-bold text-white leading-tight mb-4 group-hover:text-gold-450 transition-colors">
                        {job.title}
                      </h4>

                      {/* Key details table block */}
                      <div className="grid grid-cols-2 gap-3 bg-black/35 p-3 rounded-xl border border-white/5 text-[11px] font-mono text-gray-400 mb-5 leading-none">
                        <div className="flex items-center space-x-1.5">
                          <MapPin className="w-3.5 h-3.5 text-gray-550 shrink-0" />
                          <span className="truncate">{job.location}</span>
                        </div>
                        <div className="flex items-center space-x-1.5">
                          <IndianRupee className="w-3.5 h-3.5 text-gray-550 shrink-0" />
                          <span className="truncate text-white">{job.salary}</span>
                        </div>
                        <div className="flex items-center space-x-1.5">
                          <Calendar className="w-3.5 h-3.5 text-gray-550 shrink-0" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center space-x-1.5">
                          <Briefcase className="w-3.5 h-3.5 text-gray-550 shrink-0" />
                          <span>Exp: {job.experience}</span>
                        </div>
                      </div>

                      {/* Included perks taggers */}
                      <div className="space-y-1.5 mb-6">
                        {job.perks.map((perk, perkIdx) => (
                          <div key={perkIdx} className="flex items-start space-x-2 text-xs text-gray-300 font-sans leading-normal">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-450 shrink-0 mt-0.5" />
                            <span>{perk}</span>
                          </div>
                        ))}
                      </div>

                    </div>

                    {/* Applied / Action indicator footer */}
                    <div className="pt-4 border-t border-white/5 flex items-center justify-between font-mono text-[9px] text-gray-500 uppercase select-none">
                      <span className="shrink-0">Posted {job.posted}</span>
                      <button 
                        onClick={() => setIsModalOpen(true)}
                        className="text-gold-450 hover:text-white font-bold inline-flex items-center space-x-1 group/btn transition-colors cursor-pointer"
                        id={`btn-job-apply-${job.id}`}
                      >
                        <span>Apply Protocol</span>
                        <Plus className="w-3 h-3 group-hover/btn:rotate-90 transition-transform duration-200" />
                      </button>
                    </div>

                  </motion.div>
                );
              })
            ) : (
              <div className="col-span-full py-16 bg-[#0e0e11]/50 border border-dashed border-white/10 rounded-3xl text-center space-y-4">
                <ShieldAlert className="w-8 h-8 text-amber-500 mx-auto" />
                <h5 className="font-bold text-white text-base">No Matching Placements Found</h5>
                <p className="text-xs text-paragraph-gray max-w-md mx-auto leading-relaxed">
                  We currently do not have matching verified job posts for "{searchQuery}". Create a free professional talent profile to be discovered by top salon brands when direct entries open in your hub region.
                </p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white rounded-xl text-xs font-mono border border-white/10 uppercase font-semibold cursor-pointer transition-all"
                  id="btn-jobs-empty-cta"
                >
                  Post Your Profile Anyway
                </button>
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* BOTTOM GLOBAL CALL-TO-ACTION CONTAINER */}
        <div className="bg-[#0e0e11] border border-white/10 p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto text-left relative overflow-hidden" id="job-portal-bottom-cta">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/[0.02] rounded-full blur-[35px]" />
          
          <div className="space-y-2">
            <span className="text-[9px] font-mono text-gold-450 uppercase block font-bold tracking-widest">
              NEXORA TALENT GATEWAY
            </span>
            <h4 className="text-xl font-bold text-white font-display">
              Are you an Industry Professional, Stylist or Cosmetology Student?
            </h4>
            <p className="text-xs text-gray-400 max-w-2xl leading-normal">
              Register in the central Nexora Hub Directory. Let premier franchised beauty brands scout your experience, view verify certificate badging, and reach out directly with premium override bonuses.
            </p>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full md:w-auto px-6 py-3.5 bg-gradient-to-r from-gold-500 via-amber-500 to-purple-600 rounded-xl text-xs font-bold text-white font-mono uppercase tracking-widest hover:brightness-110 active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center space-x-2 shrink-0 h-12 shadow-lg"
            id="btn-job-cta-create-profile"
          >
            <User className="w-4 h-4 shrink-0" />
            <span>Create Professional Profile</span>
          </button>
        </div>

      </div>

      {/* CREATE PROFILE GLASS MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Dark glass backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.85 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              id="job-modal-backdrop"
            />

            {/* Modal Body Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative w-full max-w-lg bg-[#0d0d0f] border border-white/15 rounded-3xl p-6 sm:p-8 overflow-y-auto max-h-[85vh] text-left shadow-2xl z-10"
              id="job-modal-container"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-1.5 rounded-lg bg-white/5 text-gray-400 hover:text-white border border-white/5 cursor-pointer max-w-fit"
                id="btn-job-modal-close"
              >
                <X className="w-4 h-4" />
              </button>

              <AnimatePresence mode="wait">
                {!profileSubmitted ? (
                  <motion.div
                    key="form-view"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    <div>
                      <span className="text-[9px] font-mono text-gold-450 uppercase block font-bold tracking-widest mb-1">
                        CENTRAL RECRUITMENT INDEXING
                      </span>
                      <h4 className="text-xl font-bold font-display text-white">
                        Create Professional Profile
                      </h4>
                      <p className="text-xs text-gray-400 leading-normal font-sans mt-1">
                        Register your portfolio. Your information is securely indexed on Nexora and forwarded to top luxury beauty employers across metropolitan regions.
                      </p>
                    </div>

                    <form onSubmit={handleFormSubmit} className="space-y-4 font-sans text-xs">
                      
                      {/* Name Output */}
                      <div className="space-y-1.5">
                        <label className="text-gray-300 font-medium">Your Full Name *</label>
                        <input
                          required
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleFormChange}
                          placeholder="e.g. Rahul Sen"
                          className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-white placeholder-gray-600 focus:outline-none focus:border-gold-500"
                        />
                      </div>

                      {/* Dual Select Row */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-gray-300 font-medium font-sans">Role Category</label>
                          <select
                            name="roleCategory"
                            value={formData.roleCategory}
                            onChange={handleFormChange}
                            className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-gold-500"
                          >
                            <option value="salon">Hair / Salon Stylist</option>
                            <option value="barber">Barber Specialist</option>
                            <option value="spa">Massage & Spa Therapist</option>
                            <option value="tattoo">Body & Tattoo Artist</option>
                            <option value="beauty">Makeup consultant</option>
                            <option value="student">Cosmetology Apprentice</option>
                          </select>
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-gray-300 font-medium">Experience Level</label>
                          <select
                            name="experience"
                            value={formData.experience}
                            onChange={handleFormChange}
                            className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-gold-500 font-sans"
                          >
                            <option value="student">Rookie / Student Trainee</option>
                            <option value="1-3">1 - 3 Years Practice</option>
                            <option value="3-5">3 - 5 Years Accomplished</option>
                            <option value="master">5+ Years Master Expert</option>
                          </select>
                        </div>
                      </div>

                      {/* Salary Expectations & Primary Location */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-gray-300 font-medium">Expected compensation (₹/Mo)</label>
                          <input
                            type="text"
                            name="expectedSalary"
                            value={formData.expectedSalary}
                            onChange={handleFormChange}
                            placeholder="e.g. ₹35,000"
                            className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-gold-500"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-gray-300 font-medium">Preferred hub city</label>
                          <select
                            name="city"
                            value={formData.city}
                            onChange={handleFormChange}
                            className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-gold-500"
                          >
                            <option value="Bengaluru Hub">Bengaluru Hub</option>
                            <option value="Delhi Region">Delhi Region</option>
                            <option value="Mumbai Region">Mumbai Region</option>
                            <option value="Hyderabad Tech">Hyderabad Tech</option>
                            <option value="Pune Region">Pune Region</option>
                          </select>
                        </div>
                      </div>

                      {/* Portfolio & Contact Phone */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-gray-300 font-medium">Contact WhatsApp No *</label>
                          <input
                            required
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleFormChange}
                            placeholder="e.g. +91 98765 43210"
                            className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-gold-500"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-gray-300 font-medium">Instagram Portfolio Link</label>
                          <input
                            type="url"
                            name="portfolio"
                            value={formData.portfolio}
                            onChange={handleFormChange}
                            placeholder="instagram.com/mywork"
                            className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-gold-500"
                          />
                        </div>
                      </div>

                      {/* Brief bio summary */}
                      <div className="space-y-1.5">
                        <label className="text-gray-300 font-medium">Professional Bio / Specialty Summary</label>
                        <textarea
                          name="bio"
                          rows={3}
                          value={formData.bio}
                          onChange={handleFormChange}
                          placeholder="Mention your expert skills with products (Aveda, L'Oréal, Schwarzkopf), certifications, or previous salons."
                          className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-white placeholder-gray-650 focus:outline-none focus:border-gold-500 font-sans leading-normal"
                        />
                      </div>

                      {/* Dynamic Resume Attachment Dropzone */}
                      <div className="space-y-1.5">
                        <label className="text-gray-300 font-medium">Attachment (CV Summary / Certifications)</label>
                        <div
                          onDragEnter={handleDrag}
                          onDragOver={handleDrag}
                          onDragLeave={handleDrag}
                          onDrop={handleDrop}
                          className={`border border-dashed rounded-xl p-4 text-center cursor-pointer transition-all ${
                            dragActive 
                              ? 'border-gold-450 bg-gold-500/5' 
                              : fileName 
                                ? 'border-emerald-500/30 bg-emerald-500/5' 
                                : 'border-white/10 bg-black/30 hover:bg-white/[0.02]'
                          }`}
                        >
                          <input
                            type="file"
                            id="file-upload-dialog"
                            className="hidden"
                            onChange={handleFileChange}
                            accept=".pdf,.doc,.docx,image/*"
                          />
                          <label htmlFor="file-upload-dialog" className="cursor-pointer block">
                            {fileName ? (
                              <div className="flex items-center justify-center space-x-2 text-emerald-450">
                                <FileText className="w-5 h-5" />
                                <span className="font-mono text-[11px] font-bold truncate max-w-[200px]">{fileName}</span>
                              </div>
                            ) : (
                              <div className="space-y-1 font-sans text-gray-400">
                                <Upload className="w-5 h-5 mx-auto text-gray-500" />
                                <p className="text-[10px]">Drag and Drop or <span className="text-[#d39d2c] underline">Browse file</span></p>
                                <p className="text-[8px] text-gray-600">Supports PDF, DOC, JPG (Max 5MB)</p>
                              </div>
                            )}
                          </label>
                        </div>
                      </div>

                      {/* Modal Footer actions */}
                      <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-end gap-3 font-mono">
                        <button
                          type="button"
                          onClick={() => setIsModalOpen(false)}
                          className="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 text-gray-400 hover:text-white transition-all cursor-pointer text-center font-semibold"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-gold-500 hover:bg-gold-400 text-black font-semibold uppercase tracking-wider cursor-pointer text-center"
                          id="btn-job-submit"
                        >
                          Secure Registrations
                        </button>
                      </div>

                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success-view"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 text-center space-y-6"
                  >
                    <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(16,185,129,0.25)]">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      >
                        <CheckCircle2 className="w-8 h-8" />
                      </motion.div>
                    </div>

                    <div className="space-y-2">
                      <span className="text-[9px] font-mono text-emerald-450 uppercase tracking-widest block font-bold leading-none">
                        CRITICAL PIPELINE SYNC SUCCESS
                      </span>
                      <h4 className="text-xl font-bold font-display text-white">
                        Professional Profile Created!
                      </h4>
                      <p className="text-xs text-gray-450 leading-relaxed max-w-sm mx-auto">
                        Excellent, <span className="text-white font-semibold">{formData.name}</span>. Your resume bio and contact parameters have been locked onto the Nexora Talent Server pipeline.
                      </p>
                    </div>

                    <div className="bg-black/60 p-4 rounded-2xl border border-white/5 max-w-sm mx-auto text-left space-y-2 text-[10px] font-mono text-gray-400">
                      <div className="flex justify-between">
                        <span>Allocated Talent ID:</span>
                        <span className="text-gold-405 font-bold">NEX_TLNT_#{Math.floor(1000 + Math.random() * 9000)}_IND</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Directory Node:</span>
                        <span className="text-white">Active ({formData.city})</span>
                      </div>
                      <div className="flex justify-between font-bold text-gray-300">
                        <span>Scout Category:</span>
                        <span>{formData.roleCategory.toUpperCase()} STATUS</span>
                      </div>
                    </div>

                    <div className="text-[10px] text-gray-550 italic">
                      "Automatic sync locks are processing. This modal shuts down automatically in seconds."
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
