/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import {
  Briefcase,
  Search,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Globe,
  Share2,
  Menu,
  ChevronRight
} from 'lucide-react';

const FEATURED_JOBS = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "CloudScale Systems",
    location: "Austin, TX (Remote)",
    type: "Full-time",
    salary: "$140k - $180k",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAtko-P_v6dSzpdDGdOIj2xWwi2GCjaTwPd44gOIyzvPV28pjIkyYAnMyTW2pr0rz1Q_ZFaTxKk9bHFhGnwKIvXkvrkvPE2fUKOxJOjhcftRloiQsDzouCDymnf6gRWlKV2nb01k8ND2tIOTTg0i_ruzGEXt3y7vx2CLikDGvaWlesHnsMqXXjTYfqsowSq34sTdRTIPUIK9FbQYZxkL7AJhYhiCodbAIBNMVvbesnWDUuwkBhMQ3Gkiy1qiTo0HIxBsYN13aHIZFwE",
    isNew: true
  },
  {
    id: 2,
    title: "Product Designer",
    company: "Vertex Finance",
    location: "New York, NY",
    type: "Hybrid",
    salary: "$120k - $155k",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKZlbSuHoNyp1k8Et0sSP-KNqd0jxVMPQnkogUCRbBFw0m5uqMcsaYK6xsmc5xCrJQeAuNl9rWHMIcb0yoy-OkQneDtz9mIbrFek15RD0XV-zcr7fsAbhaPomaKmL885O0ZlOQdvXXnB-mFfzHUrIJFsCL9M29AJuQGlfDY3mDpU7Ia3VYwo2MEF-TMi-kt_vvCWqeK8VSzCMSC5sDjnBc1v1Jku_ao9lRdzlld_DvjPXEdUaZ2EFJxLJ5A5eJzUW54CLc7Ql7Wrd7",
    isNew: false
  },
  {
    id: 3,
    title: "Operations Manager",
    company: "BioGrowth Labs",
    location: "Chicago, IL",
    type: "On-site",
    salary: "$95k - $130k",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhl4cZCrvi52EDaln1Tamdy01w37ixuF4BX3z4jinZgB0xr4zQxXRRKeNswg1n9oaXdiR-yODwl6JwS1NYc-ijk35I7TXBsiR1XUJGN9qfbuu8UQYCaAF-7E_YoIlabchzeUW1UPK169tLW0fFFtoLntDGKM1uKfJZ-0QuLjiP4TwVCMsBiyijy9fdvZbBOFHDg7DemSy_sux_M24VWzua2rO-WEkVUlHQ3w4Fr7PTG6xN2b1Bzm4CQYMuehFj-pbLCJdMcSXh5yac",
    isNew: false
  }
];

const INSTITUTIONS = [
  {
    id: 1,
    jobs: "12 Active Jobs",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzQQZfLqFMD6cYXP-_RxvQbmGO_pjO1RO3pRhWgbJyBOqQP98koyg8_qF3E7TX4U2YMVZdg_9meZaoZlcw2XzeZEtNPsJNKBQa4JD4_oIJhic8ik682hmKK-ZZCv6MnKwd9ezYQN6_nvFWmJ4vQFdWxwrw3HbnNcyW1ocagFyl_REbPqNlf_OL36AZNlqL2HjE7aBrdg8sMYTOogXeSPqtHG8q5gCQo8_UnuzK2vwN8bQ3RBS8UqB2QyFNVlj9yjqnrws2HY0ICZAn"
  },
  {
    id: 2,
    jobs: "8 Active Jobs",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvDz2eMMTYCA6Ze11qkU1pk_6QFO0yCE0wokifOvIW6qKdBuS6PArbu14ymOZinHJihcvGo9SDIl-Ovsc3yLnjPfRGFe5xcc_1TxJd_fRINEubFMq0UbjefBDpWsgPAKdx0Nzyb7H6caH3na2XCLgfbKA1iC3esnfSvAJwZIW7sLVBpqMhr3ASZQSjtAVIrIESDmvodq91uFCDwM1oZrNELW-hx65_n7kKNcC9DxZsSEPtHjQmMByWuFbGsAIvgMVrtTgMWIESGflr"
  },
  {
    id: 3,
    jobs: "24 Active Jobs",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLXAlWQbuNzSQdHA1hqS6aA46xS06iWZjVg6l6KkKca1T3KVslj8BZ5Yl20fh-dEj_cqvu4uKoMYYw3mpm0kmy7HTj5q1BKSwdLhFos40VFnK3zzKFvUfrfuPV4bBhOSC9VyVsc2od6uo--uK6zB6OEDHfArfxEQcH5Pmxi0oBkxgHBkQtDbLDwHMht5M_NJykpmDv08sMDbFeyZALETfNLk4erZZYkZ7otLeZehWYz1ngeMEMghUTwL_LQtTmr0I7OlYjPV-3Jrdz"
  },
  {
    id: 4,
    jobs: "5 Active Jobs",
    logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6_KQVt6RJvXfeGYewm9YHJY1D8FOPq0KZ-7Av4iote066OLANUknprO9F17E68g5i2g400278br1fv9XJw70czuPO3QU5GB4uI8ppwazwXJz5wohrUzeZIypE8f9Ee3YMOXuDxgUVYQq2hr-klFRMz7k3RI9JOUkisKwMES7RdEwmv30Kq2THQEkHj3IwOS0f4aWcyh8sjRkTh0A6UmC6N_fN7jfMghWCB-106PH5afemUBPzlpEG3TU5LrA9vB5V082MGmylknoO"
  }
];

import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Home() {
  const [titleQuery, setTitleQuery] = useState('');
  const [locationQuery, setLocationQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (titleQuery) params.set('title', titleQuery);
    if (locationQuery) params.set('location', locationQuery);
    navigate(`/job-board?${params.toString()}`);
  };

  return (
    <div className="min-h-screen font-sans bg-bg-light text-primary-navy overflow-x-hidden">
      <main>
        {/* Hero Section */}
        <section className="relative bg-white pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary-navy mb-6 leading-tight">
                Secure Your Next <span className="text-brand-blue">Career Milestone</span>
              </h1>
              <p className="text-lg text-slate-600 max-w-xl mb-10 leading-relaxed">
                The definitive platform for verifiable professionals. Connect with industry-leading companies through our institutional-grade career matchmaking ecosystem.
              </p>

              {/* Search Bar */}
              <div className="bg-white p-2 rounded-xl shadow-2xl border border-slate-200 flex flex-col md:flex-row gap-2 max-w-3xl ring-1 ring-black/5">
                <div className="flex-1 flex items-center px-4 gap-3 border-b md:border-b-0 md:border-r border-slate-100">
                  <Search className="w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Job title or keywords"
                    className="w-full border-none focus:ring-0 py-4 text-sm font-medium"
                    value={titleQuery}
                    onChange={(e) => setTitleQuery(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                  />
                </div>
                <div className="flex-1 flex items-center px-4 gap-3">
                  <MapPin className="w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="City, state or remote"
                    className="w-full border-none focus:ring-0 py-4 text-sm font-medium"
                    value={locationQuery}
                    onChange={(e) => setLocationQuery(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                  />
                </div>
                <button 
                  onClick={handleSearch}
                  className="bg-brand-blue text-white px-8 py-4 rounded-lg font-bold text-base hover:bg-blue-700 transition-all shadow-lg active:scale-95 flex items-center justify-center"
                >
                  Search Jobs
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 hidden lg:block"
            >
              <div className="relative group">
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl group-hover:bg-blue-200/50 transition-colors" />
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPaUtAYncvy1_EkxxhhQsVFYMKOv6O4ZFKjq0DyPyrSvE0j2jrvxWm9h-EwLIC4SCfKEztF1kSzMZ4CPq12NGBnzXZuPEv3r4npdKcCE1lIROJREuxUrcm4RxL27OmnChABwuiFdgzyETw4De_4TRIoRw9YAWH05WSzmdTVmfPfOBrBWu9PfpJRamFK2_WG_UilbgVdmZSXdqInlteMfXUystonOPT8wOWcG3f-uD9cT7H6nCxUfXdQB6529hihRhVINT8U7Q83nGc"
                  alt="Professional at work"
                  className="rounded-2xl shadow-3xl relative z-10 w-full h-[500px] object-cover ring-1 ring-black/10"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Jobs */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-primary-navy">Featured Opportunities</h2>
              <p className="text-slate-500 font-medium mt-2">Verified listings from premium employer partners</p>
            </div>
            <Link to="/job-board" className="text-brand-blue font-bold flex items-center gap-1 group">
              View all jobs <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURED_JOBS.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-l-4 hover:border-l-brand-blue transition-all group"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 rounded-xl bg-slate-50 flex items-center justify-center p-2 border border-slate-100 group-hover:scale-110 transition-transform">
                    <img src={job.logo} alt={job.company} className="w-10 h-10 object-contain" referrerPolicy="no-referrer" />
                  </div>
                  {job.isNew && (
                    <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">New</span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-primary-navy mb-2 group-hover:text-brand-blue transition-colors line-clamp-1">{job.title}</h3>
                <p className="text-slate-500 font-semibold text-sm mb-6">{job.company} • {job.location}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="bg-slate-50 text-slate-600 px-4 py-1.5 rounded-full text-xs font-bold border border-slate-100">{job.type}</span>
                  <span className="bg-slate-50 text-slate-600 px-4 py-1.5 rounded-full text-xs font-bold border border-slate-100">{job.salary}</span>
                </div>
                <Link to="/job-board" className="w-full py-3.5 border-2 border-primary-navy text-primary-navy rounded-xl font-bold text-sm hover:bg-primary-navy hover:text-white transition-all active:scale-[0.98] flex items-center justify-center">
                  Quick Apply
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Institutions Section */}
        <section className="bg-slate-50 py-24 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-primary-navy text-center mb-16 px-4">
              Work for the World's Most <span className="text-brand-blue">Respected Institutions</span>
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {INSTITUTIONS.map((inst, index) => (
                <motion.div
                  key={inst.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center gap-6 p-10 bg-white rounded-2xl shadow-sm border border-slate-200/50 hover:shadow-lg transition-all group"
                >
                  <img src={inst.logo} alt="Company" className="h-12 w-auto grayscale group-hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest group-hover:text-brand-blue transition-colors">{inst.jobs}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Stats Bento Grid */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-full">
            <div className="md:col-span-8 bg-primary-navy text-white p-10 lg:p-14 rounded-3xl flex flex-col justify-between min-h-[400px] shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-20 -mt-20 group-hover:bg-blue-500/20 transition-colors" />
              <div className="relative z-10">
                <h3 className="text-4xl lg:text-5xl font-black mb-6">Trusted by 2M+ Professionals</h3>
                <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
                  Our verification process ensures only the highest quality talent and opportunities make it to your screen.
                </p>
              </div>
              <div className="flex flex-wrap gap-16 mt-12 relative z-10">
                <div>
                  <div className="text-4xl lg:text-5xl font-black text-brand-blue">98%</div>
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mt-2">Placement Success</div>
                </div>
                <div>
                  <div className="text-4xl lg:text-5xl font-black text-brand-blue">150+</div>
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mt-2">Global Markets</div>
                </div>
              </div>
            </div>
            <div className="md:col-span-4 bg-brand-blue text-white p-10 lg:p-14 rounded-3xl flex flex-col justify-center items-center text-center shadow-2xl hover:bg-blue-700 transition-colors cursor-default group">
              <ShieldCheck className="w-20 h-20 mb-8 group-hover:scale-110 transition-transform duration-500" />
              <h3 className="text-2xl font-black mb-4">Verified Identity</h3>
              <p className="text-sm opacity-80 leading-relaxed font-medium">
                Every candidate and employer undergoes strict identity verification for total security and data integrity.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-2 group cursor-default">
                <Briefcase className="w-6 h-6 text-brand-blue group-hover:rotate-12 transition-transform" />
                <span className="text-lg font-black tracking-tighter">ProPath Professional</span>
              </div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">
                © 2024 ProPath Professional. All rights reserved.
              </p>
            </div>

            <div className="grid grid-cols-2 md:flex flex-wrap gap-x-12 gap-y-6">
              <a href="#" className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-brand-blue transition-colors">Privacy Policy</a>
              <a href="#" className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-brand-blue transition-colors">Terms of Service</a>
              <a href="#" className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-brand-blue transition-colors">Help Center</a>
              <a href="#" className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-brand-blue transition-colors">Employer Solutions</a>
            </div>

            <div className="flex gap-6">
              <a href="#" className="text-slate-400 hover:text-brand-blue transition-all hover:scale-110">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-brand-blue transition-all hover:scale-110">
                <Share2 className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
