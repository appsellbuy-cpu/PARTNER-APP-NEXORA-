/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface NetworkNode {
  id: string;
  label: string;
  category: 'core' | 'provider' | 'partner' | 'user' | 'salon';
  description: string;
  benefit: string;
  icon: string;
  x: number;
  y: number;
}

export interface GrowthPartnerSubmission {
  id: string;
  name: string;
  phone: string;
  email: string;
  city: string;
  experience: string;
  brands: string;
  submittedAt: string;
}

export interface SalonOSSubmission {
  id: string;
  ownerName: string;
  salonName: string;
  salonType: string;
  phone: string;
  city: string;
  employees: number;
  submittedAt: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'partner' | 'salon' | 'general';
}
