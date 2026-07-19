/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Menu, X, Landmark, Compass, CircleDollarSign, Database, ShieldCheck, ClipboardList } from 'lucide-react';

interface HeaderProps {
  onOpenDashboard: () => void;
  submissionCount: number;
}

export default function Header({ onOpenDashboard, submissionCount }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Ecosystem', href: '#ecosystem-wheel-section', icon: Compass },
    { name: 'Our Identity', href: '#why-nexora', icon: Landmark },
    { name: 'Partner Program', href: '#partner-program-section', icon: CircleDollarSign },
    { name: 'SalonOS Member', href: '#growth-flow', icon: Database },
    { name: 'Interactive Demo', href: '#interactive-demo', icon: Sparkles },
    { name: 'Trust & FAQ', href: '#faq-section-premium', icon: ShieldCheck },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-luxury-black/85 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Branding */}
        <a href="#" className="flex items-center space-x-3 group">
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-gold-500 via-purple-600 to-gold-400 p-[1.5px] shadow-lg shadow-purple-500/10">
            <div className="w-full h-full bg-luxury-black rounded-[10px] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-gold-400 group-hover:text-purple-400 transition-colors duration-300" />
            </div>
            {/* Pulsing circular outer ring */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-gold-500 via-purple-600 to-gold-400 blur-sm opacity-50 -z-10 group-hover:opacity-85 transition-opacity duration-300" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-display font-medium leading-none tracking-tight">
              <span className="text-white">NEXORA</span>{' '}
              <span className="text-metallic-gold font-bold">SalonOS</span>
            </span>
            <span className="text-[9px] font-mono tracking-wider text-purple-400/80 mt-1 uppercase">
              Beauty Growth Ecosystem
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className="flex items-center space-x-1.5 px-3.5 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300"
              >
                <Icon className="w-3.5 h-3.5 text-gold-400/75" />
                <span>{item.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Action Widgets */}
        <div className="hidden sm:flex items-center space-x-4">
          <button
            onClick={onOpenDashboard}
            className="relative flex items-center space-x-2 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-xs text-gray-300 hover:text-white hover:border-gold-500 hover:bg-gold-500/5 transition-all duration-300 font-mono"
            title="View Lead Database"
            id="btn-nav-dashboard"
          >
            <ClipboardList className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
            <span>Applications ({submissionCount})</span>
          </button>

          <a
            href="#partner-program-section"
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xs font-semibold text-white rounded-lg group bg-gradient-to-br from-gold-500 to-purple-600 group-hover:from-gold-400 group-hover:to-purple-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-800"
            style={{ margin: 0 }}
            id="lnk-nav-cta"
          >
            <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-luxury-black rounded-md group-hover:bg-opacity-0">
              Apply Now
            </span>
          </a>
        </div>

        {/* Hamburger */}
        <div className="flex items-center space-x-2 lg:hidden">
          <button
            onClick={onOpenDashboard}
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5"
            title="Applications Dashboard"
            id="btn-nav-mob-dashboard"
          >
            <ClipboardList className="w-5 h-5 text-purple-400" />
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
            id="btn-nav-toggle"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-white/5 bg-luxury-black/95 backdrop-blur-lg overflow-hidden"
          >
            <div className="px-4 py-6 space-y-3">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    <Icon className="w-5 h-5 text-gold-500" />
                    <span>{item.name}</span>
                  </a>
                );
              })}
              <div className="pt-4 border-t border-white/5 space-y-3">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenDashboard();
                  }}
                  className="w-full flex items-center justify-center space-x-2 py-3 rounded-lg border border-white/10 bg-white/5 text-sm text-gray-300 hover:text-white font-mono"
                  id="btn-mob-drawer-dash"
                >
                  <ClipboardList className="w-4 h-4 text-purple-400" />
                  <span>Lead Database ({submissionCount})</span>
                </button>
                <a
                  href="#partner-program-section"
                  onClick={(e) => {
                    handleScroll(e, '#partner-program-section');
                  }}
                  className="w-full flex items-center justify-center py-3 rounded-lg bg-gradient-to-r from-gold-500 to-purple-600 text-sm font-semibold text-white shadow-lg text-center"
                  id="lnk-mob-drawer-cta"
                >
                  Become Growth Partner
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
