import React, { useState } from 'react';
import { 
  ResponsiveContainer, ComposedChart, Line, Area, XAxis, YAxis, 
  CartesianGrid, Tooltip, Legend 
} from 'recharts';
import { 
  TrendingUp, Calendar, IndianRupee, ArrowUpRight, ArrowDownRight, 
  Sparkles, Award, BarChart2, CheckCircle2, Zap, Scissors, ShieldCheck, 
  MapPin, Layers, ChevronRight, Activity, Building2, Terminal
} from 'lucide-react';

interface RevenueDataPoint {
  period: string;
  revenue: number;
  target: number;
  services: number;
  retail: number;
  memberships: number;
  bookings: number;
  topService: string;
  growth: number;
}

interface SalonLocationProfile {
  id: string;
  name: string;
  location: string;
  shortName: string;
  rating: string;
  activeStylists: number;
  overallGrowth: string;
  nextWeekProjection: number;
  confidence: number;
  weeklyData: RevenueDataPoint[];
  monthlyData: RevenueDataPoint[];
}

const salonsDatabase: SalonLocationProfile[] = [
  {
    id: 's1',
    name: 'Luxe Parlour & Day Spa',
    location: 'Indiranagar, Bengaluru',
    shortName: 'Indiranagar',
    rating: '4.9 ★',
    activeStylists: 12,
    overallGrowth: '+168.5%',
    nextWeekProjection: 128000,
    confidence: 94,
    weeklyData: [
      { period: 'Week 1', revenue: 42000, target: 40000, services: 32000, retail: 6000, memberships: 4000, bookings: 38, topService: 'Hair Cut & Styling', growth: 8.2 },
      { period: 'Week 2', revenue: 51500, target: 45000, services: 39000, retail: 7500, memberships: 5000, bookings: 46, topService: 'Keratin Treatment', growth: 22.6 },
      { period: 'Week 3', revenue: 48000, target: 48000, services: 36500, retail: 6500, memberships: 5000, bookings: 42, topService: 'HydraFacial Glow', growth: -6.8 },
      { period: 'Week 4', revenue: 68400, target: 52000, services: 51000, retail: 10400, memberships: 7000, bookings: 59, topService: 'Bridal Makeover', growth: 42.5 },
      { period: 'Week 5', revenue: 62000, target: 55000, services: 47000, retail: 9000, memberships: 6000, bookings: 54, topService: 'Global Hair Color', growth: -9.3 },
      { period: 'Week 6', revenue: 79500, target: 60000, services: 61000, retail: 11500, memberships: 7000, bookings: 68, topService: 'Keratin & Rebonding', growth: 28.2 },
      { period: 'Week 7', revenue: 94200, target: 65000, services: 72000, retail: 13200, memberships: 9000, bookings: 81, topService: 'Luxury Spa Package', growth: 18.5 },
      { period: 'Week 8', revenue: 112800, target: 70000, services: 86000, retail: 16800, memberships: 10000, bookings: 94, topService: 'Festive Combo Special', growth: 19.7 }
    ],
    monthlyData: [
      { period: 'Jan', revenue: 180000, target: 160000, services: 140000, retail: 25000, memberships: 15000, bookings: 160, topService: 'Hair Styling', growth: 12.0 },
      { period: 'Feb', revenue: 210000, target: 180000, services: 162000, retail: 30000, memberships: 18000, bookings: 185, topService: 'Facial Glow', growth: 16.6 },
      { period: 'Mar', revenue: 245000, target: 200000, services: 188000, retail: 35000, memberships: 22000, bookings: 210, topService: 'Hair Coloring', growth: 16.6 },
      { period: 'Apr', revenue: 290000, target: 230000, services: 222000, retail: 42000, memberships: 26000, bookings: 248, topService: 'Keratin Therapy', growth: 18.3 },
      { period: 'May', revenue: 340000, target: 260000, services: 260000, retail: 48000, memberships: 32000, bookings: 290, topService: 'Bridal Package', growth: 17.2 },
      { period: 'Jun', revenue: 418900, target: 300000, services: 318000, retail: 58900, memberships: 42000, bookings: 345, topService: 'Combo Offers', growth: 23.2 }
    ]
  },
  {
    id: 's2',
    name: 'Aura Unisex Hair Studio',
    location: 'Koramangala, Bengaluru',
    shortName: 'Koramangala',
    rating: '4.8 ★',
    activeStylists: 9,
    overallGrowth: '+159.2%',
    nextWeekProjection: 110000,
    confidence: 96,
    weeklyData: [
      { period: 'Week 1', revenue: 38000, target: 35000, services: 29000, retail: 5000, memberships: 4000, bookings: 34, topService: 'Beard Trim & Facial', growth: 6.4 },
      { period: 'Week 2', revenue: 44000, target: 40000, services: 33000, retail: 6500, memberships: 4500, bookings: 40, topService: 'HydraFacial Glow', growth: 15.7 },
      { period: 'Week 3', revenue: 49000, target: 44000, services: 37500, retail: 6500, memberships: 5000, bookings: 45, topService: 'Hair Smoothening', growth: 11.3 },
      { period: 'Week 4', revenue: 58000, target: 48000, services: 44000, retail: 8000, memberships: 6000, bookings: 52, topService: 'Skin Brightening Detox', growth: 18.3 },
      { period: 'Week 5', revenue: 64500, target: 52000, services: 49000, retail: 9500, memberships: 6000, bookings: 58, topService: 'Organic Hair Spa', growth: 11.2 },
      { period: 'Week 6', revenue: 73000, target: 55000, services: 55500, retail: 10500, memberships: 7000, bookings: 64, topService: 'Balayage Color Spa', growth: 13.1 },
      { period: 'Week 7', revenue: 86000, target: 60000, services: 65000, retail: 13000, memberships: 8000, bookings: 75, topService: 'Full Glam Grooming', growth: 17.8 },
      { period: 'Week 8', revenue: 98500, target: 65000, services: 74500, retail: 15000, memberships: 9000, bookings: 85, topService: 'HydraFacial & Hair Spa', growth: 14.5 }
    ],
    monthlyData: [
      { period: 'Jan', revenue: 160000, target: 145000, services: 125000, retail: 22000, memberships: 13000, bookings: 140, topService: 'Style Precision Cut', growth: 10.5 },
      { period: 'Feb', revenue: 192000, target: 165000, services: 148000, retail: 27000, memberships: 17000, bookings: 168, topService: 'Smoothening Care', growth: 20.0 },
      { period: 'Mar', revenue: 220000, target: 185000, services: 170000, retail: 31000, memberships: 19000, bookings: 192, topService: 'Global Tint', growth: 14.5 },
      { period: 'Apr', revenue: 265000, target: 210000, services: 202000, retail: 38000, memberships: 25000, bookings: 230, topService: 'HydraFacial Glow', growth: 20.4 },
      { period: 'May', revenue: 315000, target: 240000, services: 242000, retail: 44000, memberships: 29000, bookings: 270, topService: 'Balayage Expert', growth: 18.8 },
      { period: 'Jun', revenue: 385000, target: 275000, services: 294000, retail: 54000, memberships: 37000, bookings: 320, topService: 'Glam Combo', growth: 22.2 }
    ]
  },
  {
    id: 's3',
    name: 'Velvet Scissors & Spa',
    location: 'Connaught Place, Delhi',
    shortName: 'Connaught Place',
    rating: '4.9 ★',
    activeStylists: 16,
    overallGrowth: '+163.6%',
    nextWeekProjection: 162000,
    confidence: 92,
    weeklyData: [
      { period: 'Week 1', revenue: 55000, target: 50000, services: 42000, retail: 8000, memberships: 5000, bookings: 50, topService: 'Royal Beard Cut', growth: 12.0 },
      { period: 'Week 2', revenue: 67000, target: 58000, services: 51000, retail: 10000, memberships: 6000, bookings: 58, topService: 'Luxury Head Massage', growth: 21.8 },
      { period: 'Week 3', revenue: 74000, target: 62000, services: 56000, retail: 11000, memberships: 7000, bookings: 64, topService: 'Botox Hair Ritual', growth: 10.4 },
      { period: 'Week 4', revenue: 89000, target: 70000, services: 67000, retail: 14000, memberships: 8000, bookings: 76, topService: 'Bridal Couture Hair', growth: 20.2 },
      { period: 'Week 5', revenue: 98000, target: 75000, services: 74000, retail: 15000, memberships: 9000, bookings: 82, topService: 'Nanoplastia Treatment', growth: 10.1 },
      { period: 'Week 6', revenue: 112000, target: 82000, services: 85000, retail: 17000, memberships: 10000, bookings: 92, topService: 'Gold Radiance Facial', growth: 14.2 },
      { period: 'Week 7', revenue: 129000, target: 90000, services: 98000, retail: 19000, memberships: 12000, bookings: 105, topService: 'Celebrity Makeup & Hair', growth: 15.1 },
      { period: 'Week 8', revenue: 145000, target: 100000, services: 110000, retail: 21000, memberships: 14000, bookings: 118, topService: 'Royal Wedding Combo', growth: 12.4 }
    ],
    monthlyData: [
      { period: 'Jan', revenue: 230000, target: 200000, services: 175000, retail: 35000, memberships: 20000, bookings: 200, topService: 'Precision Hair Craft', growth: 15.0 },
      { period: 'Feb', revenue: 275000, target: 230000, services: 210000, retail: 41000, memberships: 24000, bookings: 235, topService: 'Nanoplastia Care', growth: 19.5 },
      { period: 'Mar', revenue: 320000, target: 260000, services: 244000, retail: 48000, memberships: 28000, bookings: 270, topService: 'Celebrity Hair Tint', growth: 16.3 },
      { period: 'Apr', revenue: 385000, target: 300000, services: 292000, retail: 58000, memberships: 35000, bookings: 315, topService: 'Bridal Airbrush Makeover', growth: 20.3 },
      { period: 'May', revenue: 450000, target: 350000, services: 342000, retail: 68000, memberships: 40000, bookings: 360, topService: 'Botox Hair Ritual', growth: 16.8 },
      { period: 'Jun', revenue: 565000, target: 400000, services: 430000, retail: 85000, memberships: 50000, bookings: 440, topService: 'Royal Wedding Package', growth: 25.5 }
    ]
  }
];

export default function SalonRevenuePerformance() {
  const [timeframe, setTimeframe] = useState<'weekly' | 'monthly'>('weekly');
  const [selectedSalonId, setSelectedSalonId] = useState<string>('s1');
  const [chartType, setChartType] = useState<'total' | 'breakdown'>('total');

  const activeSalon = salonsDatabase.find(s => s.id === selectedSalonId) || salonsDatabase[0];
  const currentData = timeframe === 'weekly' ? activeSalon.weeklyData : activeSalon.monthlyData;

  // Calculations
  const latestData = currentData[currentData.length - 1];
  const totalRevenue = currentData.reduce((acc, curr) => acc + curr.revenue, 0);
  const totalBookings = currentData.reduce((acc, curr) => acc + curr.bookings, 0);
  const avgBookingValue = Math.round(totalRevenue / totalBookings);
  const totalTarget = currentData.reduce((acc, curr) => acc + curr.target, 0);
  const targetAchievement = Math.round((totalRevenue / totalTarget) * 100);

  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  // Custom Tooltip component for Recharts
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const point: RevenueDataPoint = payload[0].payload;
      return (
        <div className="bg-[#0b0b0f]/95 border border-gold-500/35 p-4 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-xl min-w-[220px]">
          <div className="flex justify-between items-center mb-2 pb-1.5 border-b border-white/10">
            <span className="text-gold-400 font-mono text-xs font-bold uppercase tracking-wider">{label}</span>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 font-bold">
              {point.bookings} Bookings
            </span>
          </div>
          <div className="space-y-1.5 text-xs font-sans">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Total Revenue:</span>
              <span className="text-white font-mono font-bold text-sm">{formatINR(point.revenue)}</span>
            </div>
            <div className="flex justify-between items-center text-[11px]">
              <span className="text-indigo-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                Services:
              </span>
              <span className="text-gray-200 font-mono">{formatINR(point.services)}</span>
            </div>
            <div className="flex justify-between items-center text-[11px]">
              <span className="text-amber-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                Retail Products:
              </span>
              <span className="text-gray-200 font-mono">{formatINR(point.retail)}</span>
            </div>
            <div className="flex justify-between items-center text-[11px]">
              <span className="text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Memberships:
              </span>
              <span className="text-gray-200 font-mono">{formatINR(point.memberships)}</span>
            </div>
            <div className="mt-2.5 pt-2 border-t border-white/10 flex justify-between items-center text-[10px]">
              <span className="text-gray-400">Top Service:</span>
              <span className="text-gold-300 font-bold truncate max-w-[120px]">{point.topService}</span>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <section className="relative py-24 bg-[#050507] border-y border-white/10 overflow-hidden select-none" id="salon-revenue-performance">
      
      {/* Background ambient luxury lighting */}
      <div className="absolute top-[15%] left-[-15%] w-[600px] h-[600px] bg-gold-500/[0.035] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-15%] w-[600px] h-[600px] bg-purple-900/[0.04] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-gold-400 bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/20 font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                NEXORA SALONOS // ANALYTICS & GROWTH INTELLIGENCE
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white uppercase tracking-tight">
              Salon Revenue <span className="text-gold-500 italic">Performance</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mt-2 font-sans leading-relaxed">
              Track weekly salon revenue trajectory, compare target quotas against real collections, inspect service category splits, and monitor growth velocity.
            </p>
          </div>

          {/* CONTROLS BAR: LOCATION + TIMEFRAME + CHART TYPE */}
          <div className="flex flex-wrap items-center gap-3 bg-[#0c0c10] border border-white/10 p-2.5 rounded-2xl shrink-0 shadow-2xl">
            
            {/* Location Selector Tabs */}
            <div className="flex items-center bg-black/70 border border-white/10 p-1 rounded-xl">
              <MapPin className="w-3.5 h-3.5 text-gold-400 ml-2 shrink-0 hidden sm:block" />
              {salonsDatabase.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSelectedSalonId(s.id)}
                  className={`px-3 py-1.5 text-xs font-sans font-bold rounded-lg transition-all cursor-pointer ${
                    selectedSalonId === s.id 
                      ? 'bg-gold-500 text-black shadow-[0_0_15px_rgba(211,157,44,0.3)]' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                  id={`btn-location-select-${s.id}`}
                >
                  {s.shortName}
                </button>
              ))}
            </div>

            {/* Timeframe Toggle */}
            <div className="flex bg-black/70 border border-white/10 p-1 rounded-xl">
              <button
                onClick={() => setTimeframe('weekly')}
                className={`px-3 py-1.5 text-xs font-mono font-bold rounded-lg transition-all cursor-pointer ${
                  timeframe === 'weekly' 
                    ? 'bg-purple-600 text-white shadow-md' 
                    : 'text-gray-400 hover:text-white'
                }`}
                id="btn-timeframe-weekly"
              >
                WEEKLY
              </button>
              <button
                onClick={() => setTimeframe('monthly')}
                className={`px-3 py-1.5 text-xs font-mono font-bold rounded-lg transition-all cursor-pointer ${
                  timeframe === 'monthly' 
                    ? 'bg-purple-600 text-white shadow-md' 
                    : 'text-gray-400 hover:text-white'
                }`}
                id="btn-timeframe-monthly"
              >
                MONTHLY
              </button>
            </div>

            {/* View Type Toggle */}
            <div className="flex bg-black/70 border border-white/10 p-1 rounded-xl">
              <button
                onClick={() => setChartType('total')}
                className={`px-3 py-1.5 text-xs font-mono font-bold rounded-lg transition-all cursor-pointer ${
                  chartType === 'total' 
                    ? 'bg-gold-500/20 text-gold-300 border border-gold-500/30' 
                    : 'text-gray-400 hover:text-white'
                }`}
                id="btn-view-total-line"
              >
                TOTAL LINE
              </button>
              <button
                onClick={() => setChartType('breakdown')}
                className={`px-3 py-1.5 text-xs font-mono font-bold rounded-lg transition-all cursor-pointer ${
                  chartType === 'breakdown' 
                    ? 'bg-gold-500/20 text-gold-300 border border-gold-500/30' 
                    : 'text-gray-400 hover:text-white'
                }`}
                id="btn-view-stream-breakdown"
              >
                BREAKDOWN
              </button>
            </div>

          </div>
        </div>

        {/* TOP SUMMARY METRICS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          
          {/* Card 1: Latest Period Revenue */}
          <div className="bg-[#0b0b0e] border border-gold-500/20 p-5 rounded-2xl relative overflow-hidden group hover:border-gold-500/40 transition-all shadow-xl">
            <div className="flex justify-between items-start mb-3">
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider font-bold">
                {timeframe === 'weekly' ? 'Latest Week Revenue' : 'Latest Month Revenue'}
              </span>
              <div className="p-2 bg-gold-500/10 rounded-xl border border-gold-500/20 text-gold-400">
                <IndianRupee className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white font-mono">
              {formatINR(latestData.revenue)}
            </div>
            <div className="flex items-center gap-1.5 mt-2 text-xs">
              <span className={`font-mono font-bold flex items-center ${latestData.growth >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                {latestData.growth >= 0 ? <ArrowUpRight className="w-3.5 h-3.5" /> : <ArrowDownRight className="w-3.5 h-3.5" />}
                {latestData.growth >= 0 ? `+${latestData.growth}%` : `${latestData.growth}%`}
              </span>
              <span className="text-gray-500 text-[11px]">vs previous {timeframe === 'weekly' ? 'week' : 'month'}</span>
            </div>
            <div className="absolute top-0 right-0 w-24 h-24 bg-gold-500/[0.02] rounded-full blur-xl pointer-events-none" />
          </div>

          {/* Card 2: Total Period Collections */}
          <div className="bg-[#0b0b0e] border border-white/10 p-5 rounded-2xl relative overflow-hidden group hover:border-white/20 transition-all shadow-xl">
            <div className="flex justify-between items-start mb-3">
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider font-bold">
                Total Period Collections
              </span>
              <div className="p-2 bg-purple-500/10 rounded-xl border border-purple-500/20 text-purple-400">
                <BarChart2 className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white font-mono">
              {formatINR(totalRevenue)}
            </div>
            <div className="flex items-center gap-2 mt-2 text-xs text-gray-400 font-sans">
              <span className="text-purple-400 font-mono font-bold">{totalBookings} Total Bookings</span>
              <span>•</span>
              <span className="text-emerald-400 font-bold">{targetAchievement}% Target Met</span>
            </div>
          </div>

          {/* Card 3: Avg Ticket Value (ARPC) */}
          <div className="bg-[#0b0b0e] border border-white/10 p-5 rounded-2xl relative overflow-hidden group hover:border-white/20 transition-all shadow-xl">
            <div className="flex justify-between items-start mb-3">
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider font-bold">
                Avg Ticket Value (ARPC)
              </span>
              <div className="p-2 bg-indigo-500/10 rounded-xl border border-indigo-500/20 text-indigo-400">
                <Scissors className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white font-mono">
              {formatINR(avgBookingValue)}
            </div>
            <div className="flex items-center gap-1.5 mt-2 text-xs text-emerald-400 font-sans font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
              <span>High Treatment Retention Ratio</span>
            </div>
          </div>

          {/* Card 4: Top Revenue Driver */}
          <div className="bg-[#0b0b0e] border border-white/10 p-5 rounded-2xl relative overflow-hidden group hover:border-white/20 transition-all shadow-xl">
            <div className="flex justify-between items-start mb-3">
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider font-bold">
                Top Revenue Driver
              </span>
              <div className="p-2 bg-emerald-500/10 rounded-xl border border-emerald-500/20 text-emerald-400">
                <Award className="w-4 h-4" />
              </div>
            </div>
            <div className="text-base sm:text-lg font-black text-gold-300 font-display truncate">
              {latestData.topService}
            </div>
            <div className="flex items-center gap-1.5 mt-2 text-xs text-gray-400 font-sans">
              <span className="text-emerald-400 font-mono font-bold">78% Rebooking Rate</span>
            </div>
          </div>

        </div>

        {/* MAIN RECHARTS LINE CHART CONTAINER */}
        <div className="bg-[#09090c] border border-white/10 p-6 sm:p-8 rounded-3xl relative shadow-2xl mb-8">
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 pb-4 border-b border-white/5 gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-gold-500 animate-pulse" />
                <h3 className="text-lg font-bold text-white font-display uppercase tracking-wider">
                  Revenue Trajectory & Growth Curve
                </h3>
              </div>
              <p className="text-xs text-gray-400 font-sans mt-0.5">
                Active Salon Node: <span className="text-gold-400 font-bold">{activeSalon.name}</span> • {activeSalon.location}
              </p>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono">
              <div className="flex items-center gap-1.5 text-gold-400">
                <span className="w-3 h-1 bg-gold-500 rounded-full" />
                <span>Actual Revenue</span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-500">
                <span className="w-3 h-1 bg-gray-600 rounded-full border border-dashed border-gray-400" />
                <span>Target Quota</span>
              </div>
            </div>
          </div>

          {/* RECHARTS CHART RENDERING */}
          <div className="h-[380px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={currentData} margin={{ top: 20, right: 20, left: 0, bottom: 20 }}>
                <defs>
                  <linearGradient id="goldAreaGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#d39d2c" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#d39d2c" stopOpacity={0.0}/>
                  </linearGradient>
                  <linearGradient id="purpleAreaGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#818cf8" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#818cf8" stopOpacity={0.0}/>
                  </linearGradient>
                </defs>

                <CartesianGrid strokeDasharray="3 3" stroke="#22222b" vertical={false} />
                
                <XAxis 
                  dataKey="period" 
                  stroke="#666" 
                  tick={{ fill: '#9999aa', fontSize: 11, fontFamily: 'monospace' }}
                  tickLine={false}
                  axisLine={{ stroke: '#333' }}
                />
                
                <YAxis 
                  stroke="#666" 
                  tick={{ fill: '#9999aa', fontSize: 11, fontFamily: 'monospace' }}
                  tickLine={false}
                  axisLine={{ stroke: '#333' }}
                  tickFormatter={(val) => `₹${val / 1000}k`}
                />

                <Tooltip content={<CustomTooltip />} />

                {/* Target Line */}
                <Line 
                  type="monotone" 
                  dataKey="target" 
                  stroke="#555566" 
                  strokeDasharray="5 5" 
                  strokeWidth={2} 
                  dot={false}
                  name="Target Quota"
                />

                {chartType === 'total' ? (
                  <>
                    <Area 
                      type="monotone" 
                      dataKey="revenue" 
                      stroke="#d39d2c" 
                      strokeWidth={3}
                      fillOpacity={1} 
                      fill="url(#goldAreaGradient)" 
                      name="Revenue"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="revenue" 
                      stroke="#fbbf24" 
                      strokeWidth={3}
                      dot={{ fill: '#d39d2c', stroke: '#ffffff', strokeWidth: 2, r: 5 }}
                      activeDot={{ r: 8, fill: '#f59e0b', stroke: '#ffffff', strokeWidth: 2 }}
                    />
                  </>
                ) : (
                  <>
                    <Area 
                      type="monotone" 
                      dataKey="services" 
                      stackId="1"
                      stroke="#818cf8" 
                      fill="#818cf8" 
                      fillOpacity={0.4}
                      name="Services"
                    />
                    <Area 
                      type="monotone" 
                      dataKey="retail" 
                      stackId="1"
                      stroke="#f59e0b" 
                      fill="#f59e0b" 
                      fillOpacity={0.4}
                      name="Retail Products"
                    />
                    <Area 
                      type="monotone" 
                      dataKey="memberships" 
                      stackId="1"
                      stroke="#10b981" 
                      fill="#10b981" 
                      fillOpacity={0.4}
                      name="Memberships"
                    />
                  </>
                )}
              </ComposedChart>
            </ResponsiveContainer>
          </div>

          {/* INSIGHTS FOOTER BAR */}
          <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-4 font-sans text-xs">
            <div className="flex items-center gap-3 p-3.5 bg-black/40 border border-white/5 rounded-2xl">
              <div className="p-2.5 bg-emerald-500/10 rounded-xl text-emerald-400 shrink-0">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div>
                <span className="text-gray-400 block text-[11px] uppercase tracking-wider font-mono">Growth Velocity</span>
                <span className="text-white font-bold font-mono">{activeSalon.overallGrowth} Overall Period Growth</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 bg-black/40 border border-white/5 rounded-2xl">
              <div className="p-2.5 bg-purple-500/10 rounded-xl text-purple-400 shrink-0">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <span className="text-gray-400 block text-[11px] uppercase tracking-wider font-mono">AI Next-Week Projection</span>
                <span className="text-white font-bold font-mono">{formatINR(activeSalon.nextWeekProjection)} ({activeSalon.confidence}% AI Confidence)</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 bg-black/40 border border-white/5 rounded-2xl">
              <div className="p-2.5 bg-amber-500/10 rounded-xl text-amber-400 shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <span className="text-gray-400 block text-[11px] uppercase tracking-wider font-mono">Verified Ledger</span>
                <span className="text-emerald-400 font-bold font-mono">100% Real-time Checkout Badging</span>
              </div>
            </div>
          </div>

        </div>

        {/* ITEM 2: GLOWING FINANCIAL LEDGER INTERFACE PREVIEW */}
        <div className="bg-gradient-to-r from-[#0d0d12] via-[#09090c] to-[#0d0d12] border border-purple-500/30 p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-[0_0_50px_rgba(168,85,247,0.1)]">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2 space-y-4">
              <span className="text-[10px] font-mono text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20 font-bold uppercase tracking-widest inline-flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-purple-400" />
                ENTERPRISE FINANCIAL LEDGER
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white uppercase tracking-tight">
                Live Transaction Streams & Ledger Auditing
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-sans">
                Inspect every appointment checkout, product retail scan, and membership billing cycle as it occurs. The Nexora Financial Ledger ensures complete transaction auditing with end-to-end security logs.
              </p>
              
              <div className="grid grid-cols-2 gap-3 pt-2 font-mono text-xs">
                <div className="p-3 bg-black/60 border border-white/5 rounded-xl">
                  <span className="text-gray-500 text-[10px] block uppercase">Live Stream Velocity</span>
                  <span className="text-white font-bold">120 Syncs/Min</span>
                </div>
                <div className="p-3 bg-black/60 border border-white/5 rounded-xl">
                  <span className="text-gray-500 text-[10px] block uppercase">Network Integrity</span>
                  <span className="text-emerald-400 font-bold">99.98% Verified</span>
                </div>
              </div>
            </div>

            {/* Glowing Ledger Preview Screenshot */}
            <div className="lg:w-1/2 relative aspect-[16/9] w-full rounded-2xl border border-purple-500/40 overflow-hidden shadow-[0_0_30px_rgba(168,85,247,0.2)] group">
              <img 
                src="/src/assets/images/financial_ledger_preview_1793106034588.jpg" 
                alt="Glowing Financial Ledger Preview" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-50" />
              <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center text-[9px] font-mono text-purple-300 bg-black/80 px-3 py-1.5 rounded-xl backdrop-blur-xs border border-purple-500/20">
                <span>ASTRA LEDGER V4.0</span>
                <span className="text-emerald-400 font-bold">● LIVE STREAM ACTIVE</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
