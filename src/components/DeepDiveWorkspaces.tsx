import React, { useState } from 'react';
import { LayoutDashboard, Smartphone, Building2 } from 'lucide-react';

export default function DeepDiveWorkspaces() {
  const [activeTab, setActiveTab] = useState<'owner' | 'customer'>('owner');

  return (
    <section className="py-24 bg-[#08080a]" id="deep-dive-workspaces">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-black text-white text-center mb-16 uppercase">Nexora Ecosystem DEEP DIVE</h2>
        
        <div className="flex justify-center gap-4 mb-12">
          <button 
            onClick={() => setActiveTab('owner')}
            className={`px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all ${activeTab === 'owner' ? 'bg-gold-500 text-black' : 'bg-[#0c0c0f] text-white'}`}
          >
            <Building2 size={20} /> For Salon Owners
          </button>
          <button 
            onClick={() => setActiveTab('customer')}
            className={`px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all ${activeTab === 'customer' ? 'bg-gold-500 text-black' : 'bg-[#0c0c0f] text-white'}`}
          >
            <Smartphone size={20} /> For Customers
          </button>
        </div>

        <div className="bg-[#0c0c0f] p-12 rounded-3xl border border-white/5">
          {activeTab === 'owner' ? (
            <div className="grid md:grid-cols-2 gap-12 text-gray-300">
               <h3 className="text-3xl font-bold text-white uppercase">Powerful Suite for Salon Success</h3>
               <ul className="space-y-4 text-lg">
                 <li>✅ Professional Website Generator</li>
                 <li>✅ Automated CRM & Loyalty System</li>
                 <li>✅ WhatsApp Automation Hooks</li>
                 <li>✅ QR Payment Integration</li>
               </ul>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-12 text-gray-300">
               <h3 className="text-3xl font-bold text-white uppercase">Seamless Customer Journey</h3>
               <ul className="space-y-4 text-lg">
                 <li>✅ Easy Discovery in Neighborhood</li>
                 <li>✅ Instant Booking & Scheduling</li>
                 <li>✅ Digital Wallet for Offers</li>
                 <li>✅ Dedicated Profile for Favorite Staff</li>
               </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
