/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Briefcase, 
  Search, 
  LayoutDashboard, 
  FileText, 
  Mail, 
  User, 
  Download, 
  Plus, 
  ListTodo, 
  Users, 
  Calendar, 
  MapPin, 
  Clock, 
  Edit2, 
  ArrowRight,
  Globe,
  Share2,
  ChevronDown,
  TrendingUp,
  Award
} from 'lucide-react';
import { motion } from 'motion/react';

const navItems = [
  { icon: Search, label: 'Find Jobs', active: false },
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: FileText, label: 'Applications', active: false },
  { icon: Mail, label: 'Messages', active: false, badge: 3 },
  { icon: User, label: 'Profile', active: false },
];

const stats = [
  { label: 'Active Jobs', value: 12, icon: ListTodo, color: 'text-blue-600', bgColor: 'bg-blue-50' },
  { label: 'Total Applicants', value: 284, icon: Users, color: 'text-indigo-600', bgColor: 'bg-indigo-50' },
  { label: 'Interviews Scheduled', value: 18, icon: Calendar, color: 'text-teal-600', bgColor: 'bg-teal-50' },
];

const jobs = [
  {
    id: 1,
    title: 'Senior Product Designer',
    company: 'Tech Corp',
    logo: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=100&h=100&fit=crop&q=80',
    location: 'San Francisco, CA (Remote)',
    posted: '2 days ago',
    status: 'Active',
    total: 48,
    newToday: 12,
    trending: true,
  },
  {
    id: 2,
    title: 'Technical Lead (Node.js)',
    company: 'Finance Hub',
    logo: 'https://images.unsplash.com/photo-1551288049-bbbda540d3b9?w=100&h=100&fit=crop&q=80',
    location: 'New York, NY',
    posted: '5 days ago',
    status: 'Active',
    total: 132,
    newToday: 24,
    trending: true,
  },
  {
    id: 3,
    title: 'Marketing Manager',
    company: 'Creative Agency',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop&q=80',
    location: 'Austin, TX',
    posted: '1 week ago',
    status: 'Expiring Soon',
    total: 94,
    newToday: 3,
    trending: false,
  },
];

export default function Propath2() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-200">
              <Briefcase size={22} />
            </div>
            <span className="text-2xl font-bold tracking-tight text-slate-900">ProPath</span>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            {['Find Jobs', 'Dashboard', 'Applications', 'Messages'].map((item) => (
              <a
                key={item}
                href="#"
                className={`text-sm font-semibold transition-colors hover:text-blue-600 ${
                  item === 'Dashboard' ? 'text-blue-600' : 'text-slate-600'
                }`}
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button className="hidden rounded-full bg-blue-600 px-5 py-2.5 text-sm font-bold text-white transition-transform hover:scale-105 active:scale-95 sm:block">
              Post a Job
            </button>
            <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-white ring-2 ring-slate-100">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&q=80"
                alt="Profile"
                className="h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-7xl">
        {/* Sidebar */}
        <aside className="hidden w-72 shrink-0 border-r border-slate-200 bg-white lg:block">
          <div className="sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto px-4 py-8">
            <div className="mb-8 flex items-center gap-4 px-2">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-blue-600">
                <User size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Alex Rivers</h3>
                <p className="text-xs font-medium uppercase tracking-wider text-slate-400">Employer Account</p>
              </div>
            </div>

            <nav className="space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href="#"
                  className={`group flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
                    item.active
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <item.icon size={20} className={item.active ? 'text-blue-600' : 'text-slate-400 group-hover:text-slate-600'} />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className="flex h-5 items-center justify-center rounded-full bg-red-500 px-1.5 text-[10px] font-bold text-white">
                      {item.badge}
                    </span>
                  )}
                </a>
              ))}
            </nav>

            <div className="mt-auto pt-10">
              <div className="relative overflow-hidden rounded-2xl bg-slate-900 p-5 text-white shadow-xl">
                <div className="relative z-10">
                  <span className="inline-block rounded-lg bg-white/10 px-2 py-1 text-[10px] font-bold tracking-widest text-white/70">
                    PRO PLAN
                  </span>
                  <h4 className="mt-3 font-bold">Upgrade for better reach</h4>
                  <p className="mt-1 text-xs text-white/50">Access premium candidate filters and insights.</p>
                  <button className="mt-4 w-full rounded-xl bg-blue-600 py-2.5 text-xs font-bold transition-colors hover:bg-blue-700">
                    Go Premium
                  </button>
                </div>
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-white/5 blur-2xl"></div>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 px-4 py-8 sm:px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div>
                <h1 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">Employer Dashboard</h1>
                <p className="mt-2 text-lg text-slate-500">
                  Welcome back, Alex. Here is a summary of your recruitment activity.
                </p>
              </div>
              <div className="flex w-full gap-3 sm:w-auto">
                <button className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-700 shadow-sm transition-all hover:bg-slate-50 sm:flex-none">
                  <Download size={18} />
                  Export Report
                </button>
                <button className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-200 transition-all hover:bg-blue-700 sm:flex-none">
                  <Plus size={18} />
                  Post a Job
                </button>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="flex items-center gap-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
                >
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${stat.bgColor} ${stat.color}`}>
                    <stat.icon size={26} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400">{stat.label}</p>
                    <p className="text-3xl font-black text-slate-900">{stat.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Active Jobs Section */}
            <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all">
              <div className="flex items-center justify-between border-b border-slate-100 px-8 py-6">
                <h2 className="text-xl font-black text-slate-900">Active Job Postings</h2>
                <div className="flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-1.5 text-sm font-semibold text-slate-600">
                  <span className="text-slate-400">Sort:</span>
                  <button className="flex items-center gap-1 text-blue-600 transition-colors hover:text-blue-700">
                    Latest
                    <ChevronDown size={14} />
                  </button>
                </div>
              </div>

              <div className="divide-y divide-slate-100">
                {jobs.map((job) => (
                  <motion.div
                    key={job.id}
                    layout
                    whileHover={{ backgroundColor: 'rgba(248, 250, 252, 1)' }}
                    className="group relative border-l-0 px-8 py-8 transition-all hover:border-l-4 hover:border-blue-600"
                  >
                    <div className="flex flex-col gap-8 lg:flex-row lg:items-center justify-between">
                      <div className="flex items-start gap-6">
                        <div className="h-16 w-16 overflow-hidden rounded-2xl border border-slate-100 bg-white p-1">
                          <img src={job.logo} alt={job.company} className="h-full w-full rounded-xl object-contain" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-blue-600">
                            {job.title}
                          </h3>
                          <div className="mt-2 flex flex-wrap gap-4 text-sm font-medium text-slate-500">
                            <span className="flex items-center gap-1.5">
                              <MapPin size={14} className="text-slate-400" />
                              {job.location}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <Clock size={14} className="text-slate-400" />
                              Posted {job.posted}
                            </span>
                            <span className={`rounded-full px-3 py-0.5 text-xs font-bold ${
                              job.status === 'Active' ? 'bg-green-50 text-green-700' : 'bg-orange-50 text-orange-700'
                            }`}>
                              {job.status}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-12 lg:gap-16">
                        <div className="text-center">
                          <p className="text-4xl font-black text-slate-900">{job.total}</p>
                          <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-slate-400">Total</p>
                        </div>
                        <div className="text-center">
                          <div className="flex items-center justify-center gap-1 text-blue-600">
                            <span className="text-4xl font-black">{job.newToday}</span>
                            <TrendingUp size={20} className="mb-2" />
                          </div>
                          <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-blue-600">New Today</p>
                        </div>
                        <div className="flex gap-2">
                          <button className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-400 transition-all hover:border-blue-600 hover:text-blue-600">
                            <Edit2 size={20} />
                          </button>
                          <button className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-bold text-white transition-all hover:bg-slate-800">
                            Manage
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="bg-slate-50 p-6 text-center">
                <button className="flex items-center justify-center gap-2 mx-auto text-sm font-bold text-blue-600 transition-all hover:gap-3">
                  View All Active Postings (12)
                  <ArrowRight size={16} />
                </button>
              </div>
            </section>
          </motion.div>
        </main>
      </div>

      {/* Footer */}
      <footer className="mt-12 border-t border-slate-200 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="flex flex-col items-center gap-4 md:items-start">
              <div className="flex items-center gap-2">
                <Briefcase size={20} className="text-blue-600" />
                <span className="text-lg font-bold text-slate-900">ProPath Professional</span>
              </div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                © 2024 ProPath Professional. All rights reserved.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
              {['Privacy Policy', 'Terms of Service', 'Help Center', 'Employer Solutions'].map((link) => (
                <a key={link} href="#" className="text-xs font-bold uppercase tracking-widest text-slate-500 transition-colors hover:text-blue-600">
                  {link}
                </a>
              ))}
            </div>

            <div className="flex gap-4">
              <button className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all hover:bg-blue-600 hover:text-white">
                <Globe size={18} />
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all hover:bg-blue-600 hover:text-white">
                <Share2 size={18} />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
